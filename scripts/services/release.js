angular.module('githubView')
.factory('ReleaseService', function($resource) {
  return $resource("/repos/calmlow/modern-frameworks-lab/releases", {  }, {
    query: { method: 'GET', isArray: true }
  });
});
