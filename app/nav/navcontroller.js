(function(){
    
    'use strict';
    
    var nav = angular.module('nav', [])

    nav.controller('NavController', ["$http", function($http){
        var nav = this;
        
        nav.state = false;
                                
        nav.login = function(){
            $http.post('https://vast-earth-4742.herokuapp.com/', {"Email":nav.email, "Password":nav.pass}).then(function(res){
                nav.state = res;
            }, function(res){
                console.log("Error in login: " + res)
            })
        }

        
    }])
    


    
})()