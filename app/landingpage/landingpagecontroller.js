(function(){
    'use strict';
    
    var landingpage = angular.module('landingpage', [])
    
    landingpage.controller('LandingPageController', ["$scope", "$http", function($scope, $http){
        $scope.signupstatus = false;
        $scope.showButtons = true;
        $scope.showSignIn = true;
        
        $scope.setMode = function(mode){
            console.log("clicked");
            $scope.showButtons = false;
            $scope.isProf = mode;
        }      

        $scope.getAllStudents = function() {
            $http.get('https://vast-earth-4742.herokuapp.com/get_all_students').then(function(res){
                console.log(res);
            }, function(res) {
                console.log(res);
            })
        }

        $scope.signUp = function() {

            if ($scope.isProf){
                $http.post('https://vast-earth-4742.herokuapp.com/professor_sign_up', {
                    "Email": $scope.email,
                    "Password": $scope.password,
                    "Name": $scope.name
                }).then(function(res){
                    if (res.data.success == false) {
                        alert("Email already exists");
                    }
                    console.log(res);
                    
                }, function(res){
                    console.log(res);

                });
            
            } else {
                $http.post('https://vast-earth-4742.herokuapp.com/student_sign_up', {
                    "Email": $scope.email,
                    "Password": $scope.password,
                    "Name": $scope.name
                }).then(function(res){
                    if (res.data.success == false) {
                        alert("Email already exists");
                    }
                    console.log(res);
                }, function(res){
                    console.log(res);

                });
            }
        }
    }]);
})()