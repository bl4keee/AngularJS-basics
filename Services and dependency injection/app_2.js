var angularApplication = angular.module('app', []);

angularApplication.controller('ctrl', function($scope) {
    
});

var searchPeople = function(firstName, lastName, height, age, occupation) {
    return 'Jane Doe';
}

var searchPeopleString = searchPeople.toString();
console.log(searchPeople);



