(function(){
    'use strict';

    var anonimo = angular.module("anonimo", [
        'ngAnimate',
        'ngRoute',
        'landingpage',
        'nav',
        'account',
        'login'
    ]);

    anonimo.config(['$routeProvider','$locationProvider',
      function($routeProvider,$locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $routeProvider.
          when('/', {
            templateUrl: 'app/landingpage/landingpage.html',
            controller: 'LandingPageController as lpCtrl'
          }).
          when('/account', {
            templateUrl: 'app/account/account.html',
            controller: 'AccountController as account'
          }).
          when('/login', {
            templateUrl: 'app/login/login.html',
            controller: 'LoginController as login'
        }).
          when('/404', {
            templateUrl: '404/404.html'
          }).
          otherwise({
            redirectTo: '/404'
          });
      }]);
})()