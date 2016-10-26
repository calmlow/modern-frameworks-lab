angular.module('githubView')
.controller('ListController', function($scope, ReleaseService) {
  $scope.searchValue = "";
  $scope.items = [];
  $scope.refresh = function() {
    ReleaseService.query(function(data) {
      $scope.items = data;
    })
  }
  $scope.refresh();
});
