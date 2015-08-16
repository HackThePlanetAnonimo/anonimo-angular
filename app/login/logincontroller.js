(function(){

    'use strict';
    
    var login = angular.module('login', [])
    
    login.controller('LoginController', [function(){
    
        var login = this;
        
        login.login = function(){
            $http.post('/login', {"Email":login.email, "Password":login.pass}).then(function(res){
                
            })
        }
    
    }])
    
})()

