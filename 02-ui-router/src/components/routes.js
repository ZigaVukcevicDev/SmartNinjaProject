angular.module('app').config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/error');

	$stateProvider.state('home',
	{
		url: '/',
		templateUrl: '<h1>To je domača stran</h1>'
	});

	$stateProvider.state('login',
	{
		url: '/login',
		template: '<h1>Prijavi se</h1>'
	});

	$stateProvider.state('error',
	{
		url: '/error',
		template: '<h2>Prišlo je do napake.</h2>'
	});

	$stateProvider.state('parent',
	{
		url: '/parent',
		template: '<h1>Jaz sem parent</h1><ui-view></ui-view>'
	});

	$stateProvider.state('parent.child', 
	{
		url: '/child',
		template: '<h4>Jaz sem child.</h4>'
	})

	$stateProvider.state('parameter', {
		url: '/parameter/:name',
		template: '<h1>Parameter</h1>',
		controller: function($stateParams, $state){
			//alert($stateParams.name);

			//$state.go('parent');

			//$state.reload();

			/*if($state.is('parent.child'))
			{

			}*/

		}
	});

});

