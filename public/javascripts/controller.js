var app = angular.module('golfapp');

app.controller('controller', function($scope, $http, $location) {
   $scope.getTees = function(){
      $http.get("/api/" + $scope.course_id)
      .then(function (data){
         $scope.playerName = data.data[0].name
         $scope.courses = data.data
      })
      .catch(function(){
         $scope.courses = []
      })
   }
});

app.directive("scoreCardTee", function () {
  return {
    templateUrl: "scorecard-tee.html",
    scope: { tee: "=" },
    controller: function($scope){
      var tee = $scope.tee
      $scope.front9 = function(){
         return tee.hole1 + tee.hole2 + tee.hole3 + tee.hole4 + tee.hole5 + tee.hole6 + tee.hole7 + tee.hole8 + tee.hole9
      }
      $scope.back9 = function(){
         return tee.hole10 + tee.hole11 + tee.hole12 + tee.hole13 + tee.hole14 + tee.hole15 + tee.hole16 + tee.hole17 + tee.hole18
      }
      $scope.totalYards = function(){
         return $scope.front9() + $scope.back9()
      }
   },
    restrict: "A"
  }
})

app.directive("scoreCard", function () {
  return {
    templateUrl: "scorecard.html",
    scope: { tees: "=" },
    restrict: "E"
  }
})


app.directive("playerScore", function () {
  return {
    templateUrl: "playerScore.html",
    scope: { scores: "=" },
    controller: function($scope){
      var score = $scope.score
      $scope.front9score = function(){
         return score.hole1 + score.hole2 + score.hole3 + score.hole4 + score.hole5 + score.hole6 + score.hole7 + score.hole8 + score.hole9
      }
      $scope.back9score = function(){
         return score.hole10 + score.hole11 + score.hole12 + score.hole13 + score.hole14 + score.hole15 + score.hole16 + score.hole17 + score.hole18
      }
      $scope.totalScore = function(){
         return $scope.front9score() + $scope.back9score()
      }
   },
    restrict: "A"
  }
})
