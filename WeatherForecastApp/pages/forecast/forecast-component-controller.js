weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'weatherService',
                                     function($scope, $resource, routeParams, cityService, weatherService) {

    $scope.city = cityService.city;
    $scope.days = routeParams.days || '1';
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);


}]);