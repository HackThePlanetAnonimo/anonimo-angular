(function(){
    'use strict';
    
    var landingpage = angular.module('landingpage', [])
    
    landingpage.controller('LandingPageController', function(){
        var landingpage = this;
        landingpage.signupstatus = false;
        
        landingpage.signup = function(mode){
            landingpage.signupstatus = true;
            landingpage.signupmode = mode;
        }
    })
    
})()