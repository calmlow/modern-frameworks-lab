angular.module('githubView')
.controller('ListController', function($scope, ReleaseService) {
  $scope.searchValue = "";
  $scope.items = ReleaseService.query()
  $scope.refresh = function() {
    $scope.items = ReleaseService.query()
  }
});
