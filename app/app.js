(function(){
    'use strict';

    var anonimo = angular.module("anonimo", [
        'ngAnimate',
        'ngRoute',
        'landingpage',
        'lectureroom',
        'mylectures',
        'nav',
        'account'
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
            when('/lectureroom', {
                templateUrl: 'app/lectureroom/lectureroom.html',
                controller: 'LectureroomController as lectureroom'
            }).
            when('/mylectures', {
                templateUrl: 'app/mylectures/mylectures.html',
                controller: 'MylecturesController as mylectures'
            }).
            when('/404', {
                templateUrl: '404/404.html'
            }).
            otherwise({
                redirectTo: '/404'
            });
      }]);
})()