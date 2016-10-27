
angular.module('githubView',[
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ui.bootstrap'
	])
	.config(function ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'views/list.html',
			controller: 'ListController',
			controllerAs: 'list'
		})
		.when('/restore/:id', {
			templateUrl: 'views/restore.html',
			controller: 'RestoreController',
			controllerAs: 'list'
		})
		.otherwise({
			redirectTo: '/'
		});
	})
	;
