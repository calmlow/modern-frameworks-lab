angular.module('githubView')
.factory('TagService', function($resource) {
  return $resource("/repos/calmlow/modern-frameworks-lab/git/refs/tags/:tag", { tag: '@tag' }, {
    get: { method: 'GET' }
  });
});
