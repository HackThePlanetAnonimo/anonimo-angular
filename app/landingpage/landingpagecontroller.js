(function(){
    'use strict';
    
    var landingpage = angular.module('landingpage', [])
    
    landingpage.controller('LandingPageController', ["$scope", "$http", "$location", function($scope, $http, $location){
        $scope.signupstatus = false;
        $scope.showButtons = true;
        $scope.showSignIn = true;
        
        $scope.setMode = function(mode){
            console.log("clicked");
            $scope.showButtons = false;
            $scope.isProf = mode;
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
                    var id = res.data.Professor_id;
                    // get id and pass it

                    $location.url("/account/?type='professor'&id="+id);

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