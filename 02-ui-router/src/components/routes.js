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