(function(){
    'use strict';
    
    var lectureroom = angular.module('lectureroom', [])
    
    lectureroom.controller('LectureroomController', ["$scope", "$http", "$location", function($scope, $http, $location){
        console.log("This is lectureroom controller");
        console.log($location.search());
        $scope.lectureId = $location.search()['lectureid'];

        $scope.getLecture = function() {
            $http.get('https://vast-earth-4742.herokuapp.com/get_lecture_by_id/'+$scope.lectureId).then(function(res){
                $scope.currentLecture = res.data;
                $scope.allStudentsIdsInLecture = $scope.currentLecture['Student_Ids'].split(',');
            }, function(res) {
                alert(res);
            });
        }
        $scope.getLecture();

        $scope.getAllQuestionsInLectureRoom = function() {
            $http.get('https://vast-earth-4742.herokuapp.com/get_all_questions_by_lecture/'+$scope.lectureId).then(function(res){
                console.log(res);
                $scope.currentLectureQuestions = res.data.results;

                // Identify when there is no question in lecture room

                // If there are question, display them in order of number of votes

                //$scope.allStudentsIdsInLecture = $scope.currentLecture['Student_Ids'].split(',');
                console.log($scope.currentLecture);
            }, function(res) {
                alert(res);
            });
        }
        $scope.getAllQuestionsInLectureRoom();


        $scope.answerQuestion = function() {

        }

        // delete lecture room and return to accounts
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