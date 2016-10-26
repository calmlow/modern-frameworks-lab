angular.module('githubView')
.controller('ListController', function($scope, ReleaseService) {
  $scope.searchValue = "";
  $scope.items = ReleaseService.query()
});
