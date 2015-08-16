(function(){
    'use strict';
    
    var account = angular.module('account', ["ngResource"])
    
    account.controller('AccountController', ["$resource", function($resource){
    
        var account = this;
        var Account = $resource('/account/:accountId')
        
        account = Account.get({accountID:1});    
    }])
})()