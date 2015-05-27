angular.module('app', []);
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