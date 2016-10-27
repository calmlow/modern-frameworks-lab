# Modern Frameworks LAB

# 0 Make sure the lab works

## 0.1 Start the compleated lab
- Checkout the "master" branch in git
- Start the webserver
```
python webserverExtRest.py
```
- Open a browser to: http://localhost:8003
- Tweak the constants APIURL and PORT to meet your needs.
- Tip. clone this into a separate folder to be able to have this application running.

## 0.2 Prepare the git repository
- Checkout the lab branch
```
git checkout lab-start
```


# 1. Create the first page

## 1.1 Start Page
- Create index.html start with an empty page with a top menu.
- The top menu should consist of:
  - Brand: GitHub Api Tests as the on the left
  - Link on right: https://github.com/calmlow/modern-frameworks-lab/

### Hints
1. Bootstrap can be found here: http://getbootstrap.com/
2. Bootstrap has some excelent sample pages on their page
3. This one looks nice http://getbootstrap.com/examples/theme/

## 1.2 Add bootstrap styles
- Host your assets at via a CDN

### Hints
1. Bootstrap has some links for this
2. Check download section here: http://getbootstrap.com/

## 1.3 Add angular-js libraries
- Host your librarys at via a CDN

### Hints
1. Angular has some links for this: https://angularjs.org/
2. Use latest stable and minified version
3. We need:
  - angular
  - angular-resource
  - angular-route
  - angular-sanitize (ish)
  - ui-bootstrap-tpls-2.2.0 (in assets folder)

# 2. Create an angular application

## 2.1 AngularJS App Module
- Create anangular application module
- Attach the application to the index page

### Hints
- What is the angular APPlication file called?
- Remeber that a folder structure makes thing simpler
- Some pretty unhelpful documentation can be found here: https://docs.angularjs.org/api/ng/directive/ngApp
- Dont forget to include the script at the bottom

## 2.2 Create a Controller
- Create a new controller called list
- Add a single variable to the controller called "searchValue" with a default value of "Hello World".
- Bind the controller to the container div of the index page
- Show the value of the variable on the page.

### Hints
- TODO

# 3. Views and Routing

## 3.1 Create a view
- Create a new view called list.html
- Move your logic over from the index.page
- Add routing for your view to the application
- Add the view to index.html

### Hints
- TODO

## 3.2 Make it nice
- Add breadcrumbs to the top of the page
  - Add a "Home" element (no link)
- Add a panel for the list with title: Instructions
- Remove the bound file (searchValue)

### Hints
- TODO

# 4. Create the list

## 4.1 Create a placeholder for the list
- Use a boostrap list group component with custom content
- Add placeholder text for:
  - Name
  - Description
  - And a "Show hint/restore to this" link (in a lsit)

### Hints
- You might find some ideas here: http://getbootstrap.com/components/#list-group

## 4.2 Create a service for the github release API
- Create a new Service named "ReleaseService" in a file called release.js.
- Target the list opertion here: https://developer.github.com/v3/repos/releases
- The link is /repos/calmlow/modern-frameworks-lab/releases (as we use the proxy)

### Hints
- Link to AngularJS $resource https://docs.angularjs.org/api/ngResource/service/$resource
- Services goes under services/...

## 4.3 Use the service
- Add a call to fetch the data from the service to the list controller.
- Add the result to a variable called items

### Hints
- TODO

## 4.4 Bind the list to the view
- Replace the placeholders from 4.1 with real data from the view
- Add an icon that shows the avatar to the list
- Add all assests as links below the "Hint" button

### Hints
- Look at the GitHub API page. See how the objects returned look like.
  https://developer.github.com/v3/repos/releases/

# 5. Logic

## 5.1 Implement filtering
- Add an input filter above the list
- Bind this to the _searchValue_
- Add filtering using this variable to the list

### Hints
- TODO

## 5.2 Implement a refresh button
- Add the button to the top
- Bind it to a function (resfresh) which refreshes the view

### Hints
- bootstrap has utility classes for putting on the "right"
- http://getbootstrap.com/css/#helper-classes-floats

## 5.3 Improve refresh button
- Create a call-back function to prevent "flickering" of the list when refreshing

### Hints
- the argument in the callback is the data

# 6. Some further tinkering

## 6.1 Improve the refresh button look and feel
- Make sure the surrounding div clears

### Hints
- bootstrap has utility classes for putting on the "right"
- http://getbootstrap.com/css/#helper-classes-clearfix

## 6.2 Add new page with controller (restore)
- Call the view: restore.html
 - Add so the breadcrumb show the tag name
- Call the controller: RestoreController in restore.js
 - Add a bound variable for the tagName
- The "hint" button should go to this page (and send the tag_name along)
- Dont forget to include it
- Dont forget to add routing (we need a routing paremeter this time)
- Dont forget to fix the link

 ### Hints
 - Your routing can have parameters :id
 - $routeParams containes your parameters from the view

## 6.3 Add new service (tag) to fetch data about the tag
- Call the service TagService in service.js
- The URL should be /repos/calmlow/modern-frameworks-lab/git/refs/tags/:tag
- Dont forget to include it
- Fetch tag metadata and show the hash on the page

 ### Hints
 - TODO

## 6.4 Implement logic to fetch/show diff
- TODO

 ### Hints
 - TODO

## 6.5 Add markdown rendering
- As the data (body) of the release is markdown rendering of markdown

 ### Hints
 - TODO
