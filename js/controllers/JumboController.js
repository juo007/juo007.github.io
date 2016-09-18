app.controller('JumboController', ['$scope', function($scope){
	var date = new Date();
	var hours = date.getHours();
	if (hours > 0  && hours < 5)
		$scope.greeting = 'Good night';
	else if(hours >= 5 && hours < 12)
		$scope.greeting = 'Good morning';
	else if(hours >=12 && hours < 6)
		$scope.greeting = 'Good afternoon';
	else
		$scope.greeting = 'Good evening';
}]);