var app = angular.module('MainApp', ['ngRoute']);


app.config(function ($routeProvider) {
  
  $routeProvider
  	.when('/', {
    	templateUrl: 'partials/about.html'
  })
  	.when('/experience/',{
    	templateUrl: 'partials/experience.html'
  })
  	.otherwise({
    	redirectTo: '/'
  });
    
});
