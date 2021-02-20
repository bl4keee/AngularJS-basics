weatherApp.service('weatherService', ['$resource', 
                            function ($resource) {

    this.GetWeather = function (city, days) {

        var weatherAPI = $resource("http://api.weatherapi.com/v1/forecast.json?key=718a29807b6e4973b98113358210602",
            { callback: "JSON_CALLBACK" }, + '&' +
            { get: { method: "JSONP" } });

        return weatherAPI.get({ q: city, days: days });

    }

}]);