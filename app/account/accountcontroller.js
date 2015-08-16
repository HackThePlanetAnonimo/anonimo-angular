(function(){
    'use strict';
    
    var account = angular.module('account', ["ngResource"])
    
    account.controller('AccountController', ["$resource","$scope", function($resource, $scope){
    
        var account = this;
        var Account = $resource('/account/:accountId')
        $scope.emails = [];
        
        account.addemail = function (){
            $scope.emails.push(account.newemail);
        }
        
        account = Account.get({accountID:1});    
    }])
})()