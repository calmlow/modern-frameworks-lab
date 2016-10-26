angular.module('githubView')
.controller('RestoreController', function($scope, $routeParams, TagService, $http) {
  $scope.tagName = $routeParams.id;
  $scope.tag = {};
  $scope.hint = "";

  $scope.refresh = function() {
    TagService.get({'tag':$scope.tagName}, function(data) {
      $scope.tag = data;
      var conf = {
        headers: { 'Accept': 'application/vnd.github.diff' }
      }
      $http.get('/repos/calmlow/modern-frameworks-lab/commits/' + $scope.tag.object.sha, conf).
      success(function(data) {
        $scope.hint = data.replace(/\n\s*\n\s*\n/g, '\n');
      })
    });
  };

  $scope.refresh();
});
