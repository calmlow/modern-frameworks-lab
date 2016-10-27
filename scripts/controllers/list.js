angular.module('githubView')
.controller('ListController', function($scope, ReleaseService) {
  $scope.searchValue = "";
  $scope.items = [];
  $scope.refresh = function() {
    ReleaseService.query(function(data) {
      var converter = new showdown.Converter();
      data.forEach(function (e) {
        e.desc = converter.makeHtml(e.body);
      })
      $scope.items = data;
    })
  }
  $scope.refresh();
});
