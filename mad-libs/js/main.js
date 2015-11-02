// Create application

var myApp = angular.module('myApp', [])

// Bind controller madCtrl

myApp.controller('madCtrl', function($scope) {
    $scope.name = 'Alex'
    $scope.age = '21'
    $scope.location = 'Xbox Pitch'
    $scope.food = 'syrup'
})

	// Set initial values for name, age, location, and food

