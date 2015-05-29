angular.module('app', ['ui.router']);
angular.module('app').config(function($stateProvider){

	$stateProvider.state('home',
	{
		url: '/home',
		template: '<h1>To je domača stran</h1>'
	});

	$stateProvider.state('login',
	{
		url: '/login',
		template: '<h1>Prijavi se</h1>'
	});

});
angular.module('app').controller('ExampleController', function($scope){

	$scope.example = 'Example from ExampleController';

});
angular.module('app').directive('appExample', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'ExampleController',
		templateUrl: 'templates/example-template.html'
	};
});