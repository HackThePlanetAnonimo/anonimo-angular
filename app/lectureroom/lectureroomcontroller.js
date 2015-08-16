(function(){
    'use strict';
    
    var lectureroom = angular.module('lectureroom', [])
    
    lectureroom.controller('LectureroomController', ["$scope", "$http", "$location", function($scope, $http, $location){
        console.log("This is lectureroom controller");
    }])
})()





















//(function(){
//    'use strict';
//    
//    var account = angular.module('account', ["ngResource"])
//    
//    account.controller('AccountController', ["$resource","$scope", function($resource, $scope){
//    
//        var account = this;
//        var Account = $resource('/account/:accountId')
//        $scope.emails = [];
//        
//        $scope.addemail = function (){
//            console.log("yo");
//            $scope.emails.push(account.newemail)
//        }
//        
//        account = Account.get({accountID:1});    
//    }])
//})()