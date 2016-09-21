app.controller('JumboController', ['$scope', function($scope){
	
	var date = new Date();
	var hours = date.getHours();
	
	if (hours >= 0  && hours < 5){
		$scope.greeting = 'Good Night';
		$scope.img = '../img/night.jpg';
		$scope.color = 'white';
	}else if(hours >= 5 && hours < 12){
		$scope.greeting = 'Good Morning';
		$scope.img = '../img/morning.jpeg';
		$scope.color = 'white';
	}else if(hours >=12 && hours < 18){
		$scope.greeting = 'Good Afternoon';
		$scope.img = '../img/afternoon.jpg';
		$scope.color = 'white';
	}else{
		$scope.greeting = 'Good Evening';
		$scope.img = '../img/evening.jpg';
		$scope.color = 'white';
	}
}]);
