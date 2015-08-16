(function(){
    
    'use strict';
    
    var accountservices = angular.module('accountservices', [])
    
    accountservices.service('signUpService', ["$http", function($http){
    
        
    accountservices.professorSignUp = function(name, email, password) {
        cosole.log("kjdshsdjkgsjkdghjsdgh");
        // {"Email": "ash@uwaterloo.ca", "Password": "ketchup", "Name": "ash"}
        $http.post('https://vast-earth-4742.herokuapp.com/professor_sign_up', 
               {
                    Email:email,
                    Name: name,
                    Password: password
               }).
            then(function(response) {
                console.log("success");
            // this callback will be called asynchronously
            // when the response is available
            }, function(response) {
                alert("Sorry, some error occured");
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            });
        }]);
    }
                                                       
    accountservices.studentSignUp = function(name, email, password) {
        $http.post('https://vast-earth-4742.herokuapp.com/student_sign_up', 
               {
                    Email:email,
                    Name: name,
                    Password: password
               }).
            then(function(response) {
                console.log("success");
            // this callback will be called asynchronously
            // when the response is available
            }, function(response) {
                alert("Sorry, some error occured");
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            });
        }]);
    }