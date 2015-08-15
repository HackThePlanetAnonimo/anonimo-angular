(function(){
    'use strict';

    var anonimo = angular.module("anonimo", [
        'ngAnimate',
        'ngRoute',
        'landingpage'
    ]);

    anonimo.config(['$routeProvider','$locationProvider',
      function($routeProvider,$locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $routeProvider.
          when('/', {
            templateUrl: 'landingpage/landingpage.html',
            controller: 'LandingPageController as lpCtrl'
          }).
          when('/404', {
            templateUrl: '404/404.html',
            controller: 'SearchController as search'
          }).
          otherwise({
            redirectTo: '/404'
          });
      }]);
})()