var myApp = angular.module('myApp', ['ngRoute']);

console.log('myApp sourced');

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapController as mc'
    }).when('/d3', {
        templateUrl: 'views/d3.html',
        controller: 'D3Controller as dc'
    }).otherwise({
        redirectTo: '/'
    });
});