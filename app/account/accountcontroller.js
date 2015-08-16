(function(){
    'use strict';
    
    var account = angular.module('account', [])
    
    account.controller('AccountController', ["$scope", "$http", "$location", function($scope, $http, $location){
        console.log("This is Account controller");
        console.log($location.search());
        $scope.userId = $location.search()['id'];
        $scope.lectures = [];

        $scope.allStudentsEverCreated = [];
        $scope.getAllStudents = function() {
            $http.get('https://vast-earth-4742.herokuapp.com/get_all_students').then(function(res){
                console.log(res);
                $scope.allStudentsEverCreated = res.data.results;
            }, function(res) {
                alert(res);
            })
        }
        $scope.newLectureName;

      	$scope.getAllLectures = function() {
      		// need ot pass prof id
            $http.get('https://vast-earth-4742.herokuapp.com/get_all_lectures/'+$scope.userId).then(function(res){
                console.log(res.data.results);
                $scope.lectures = res.data.results;
                $scope.selectedLecture = $scope.lectures[0];
            }, function(res) {
                console.log(res);
            })
      	}
      	$scope.selectLecture = function() {
      		console.log($scope.selectedLecture['objectId']);
      		$location.url("/lectureroom/?lectureid="+$scope.selectedLecture['objectId']);
      	}
      	$scope.getAllStudents();
		$scope.getAllLectures();
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