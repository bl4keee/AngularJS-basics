weatherApp.directive("weatherReport", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/weather-report/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            dateFormat: "@"
        }
    }
});