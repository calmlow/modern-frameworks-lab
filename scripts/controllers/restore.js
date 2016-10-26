angular.module('githubView')
.controller('RestoreController', function($scope, $routeParams) {
  $scope.tagName = $routeParams.id;
});
