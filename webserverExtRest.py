import SimpleHTTPServer
import SocketServer
import os
import urllib2


class myHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):

    def fetchUrlOrCache(self, baseurl, uri, headers):
        url = "%s%s" % (baseurl, uri)

        fname = uri.replace("/", "_") + ".cache.json"
        fname = fname.replace("?", "_").replace("=", "_").replace("&", "_")
        fname = os.path.join("cache", fname)

        if os.path.exists(fname):
            print "using cache for ... %s" % url
            print "using cache ... %s" % fname
            f = open(fname, mode="r")
            content = "\n".join(f.readlines())
            f.close()
            return content
        else:
            print "Fetch url %s" % url
            request = urllib2.Request(url, headers={'Accept': headers['Accept']})
            result = urllib2.urlopen(request)

            result = "\n".join(result.readlines())
            f = open(fname, "w")
            f.write(result)
            f.close()

            return result

    def do_GET(self):
        print self.path

        parsedParams = SimpleHTTPServer.urlparse.urlparse(self.path)

        # See if the file requested exists on disk
        if os.access('.' + os.sep + parsedParams.path, os.R_OK):
            # Found file on disk, probably index.html..
            SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)
        else:
            print "file doesnt exist on disk, assume a rest uri!"

            uri = parsedParams.path
            if parsedParams.query != "":
                uri = "%s?%s" % (parsedParams.path, parsedParams.query)

            print "u gave %s" % uri

            content = self.fetchUrlOrCache(APIURL, uri, self.headers)

            # assume you're trying to hit the rest api
            self.send_response(200)
            if 'Accept' in self.headers and self.headers['Accept'] == "application/vnd.github.diff":
                print "Chaning content type: %s"%self.headers['Accept']
                self.send_header('Content-type', self.headers['Accept'])
            else:
                self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(content)


APIURL = "https://api.github.com"
PORT = 8003
handler = SocketServer.TCPServer(("", PORT), myHandler)
print "serving at port ", PORT
handler.serve_forever()
