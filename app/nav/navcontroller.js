(function(){
    
    'use strict';
    
    var nav = angular.module('nav', [])

    nav.controller('NavController', function(){
        var nav = this;
        
        nav.items = [{"name":"Account","link":"account", "state":true},{"name":"Ask a Question","link":"questions", "state":true},{"name":"Login","link":"login", "state":true}];
    })
    
})()