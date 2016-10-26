angular.module('githubView')
.controller('ListController', function($scope, ReleaseService) {
  $scope.searchValue = "Hello World";
  $scope.items = ReleaseService.query()
});
