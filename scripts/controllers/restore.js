angular.module('githubView')
.controller('RestoreController', function($scope, $routeParams, TagService) {
  $scope.tagName = $routeParams.id;
  $scope.tag = {};

  $scope.refresh = function() {
    TagService.get({'tag':$scope.tagName}, function(data) {
      $scope.tag = data;
    });
  };

  $scope.refresh();
});
