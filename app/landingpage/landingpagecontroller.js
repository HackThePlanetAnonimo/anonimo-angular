(function(){
    'use strict';
    
    var landingpage = angular.module('landingpage', [])
    
    landingpage.controller('LandingPageController', ["$scope", "$http", function($scope, $http){
        $scope.signupstatus = false;
        $scope.showButtons = true;
        $scope.setSignUpMode = function(mode){
            console.log("clicked");
            $scope.showButtons = false;
            $scope.isProf = mode;
        }
        $scope.signUp = function(){
            if ($scope.isProf){
            $http.post('https://vast-earth-4742.herokuapp.com/professor_sign_up', {
                "Email": $scope.email,
                "Password": $scope.password,
                "Name": $scope.name
            }).then(function(res){
                console.log("shit worked: "+res);
            }, function(res){
                console.log(res);

            })
            
            } else {
                
            }
        }
    }]);
})()