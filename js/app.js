var app = angular.module('MainApp', ['ngRoute']);


app.config(function ($routeProvider) {
  
  $routeProvider
  	.when('/', {
    	templateUrl: 'partials/intro.html'
	})
	.when('/about/',{
		templateUrl: 'partials/about.html'
	})
  	.when('/experience/',{
    	templateUrl: 'partials/experience.html'
	})
	.when('/education/',{
		templateUrl: 'partials/education.html'
	})
  	.otherwise({
    	redirectTo: '/'
	});
    
});
