(function(){
    'use strict';
    
    var lectureroom = angular.module('mylectures', [])
    
    lectureroom.controller('MylecturesController', ["$scope", "$http", "$location", function($scope, $http, $location){
        console.log("This is mylectures controller");
        console.log($location.search());
        $scope.question = "";
        $scope.askQuestion = function() {
            $http.post('https://vast-earth-4742.herokuapp.com/ask_a_question', {
                "Text": $scope.question,
                "Student_id": $location.search()['id'],
                "Lecture_id": "6rY7tZqIJB"
            }).then(function(res){
                if (res.data.success == false) {
                    alert("Email already exists");
                }
                else {
                console.log(res);
                var id = res.data.Professor_id;
                // get id and pass it

                alert("Your question will be answered shortly!");
                }
            }, function(res){
                console.log(res);

            });
        }   
    }]);
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