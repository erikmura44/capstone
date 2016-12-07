var app = angular.module('golfapp');

app.controller('controller', function($scope, $http, $location) {
   $scope.showBBB = false;
   $scope.show4ball = false;
   $scope.show4manBB = false;
   $scope.showMP = false;
   $scope.showSkins = false;
   $scope.showScramble = false;
   $scope.ShowHideBBB = function () {
       $scope.showBBB = !$scope.showBBB;
       $scope.show4ball = false;
       $scope.show4manBB = false;
       $scope.showMP = false;
       $scope.showSkins = false;
       $scope.showScramble = false;
   }
   $scope.ShowHide4ball = function () {
      $scope.show4ball = !$scope.show4ball;
      $scope.showBBB = false;
      $scope.show4manBB = false;
      $scope.showMP = false;
      $scope.showSkins = false;
      $scope.showScramble = false;
   }
   $scope.ShowHide4manBB = function () {
       $scope.show4manBB = !$scope.show4manBB;
       $scope.show4ball = false;
       $scope.showBBB = false;
       $scope.showMP = false;
       $scope.showSkins = false;
       $scope.showScramble = false;
   }
   $scope.ShowHideMP = function () {
       $scope.showMP = !$scope.showMP;
       $scope.show4ball = false;
       $scope.show4manBB = false;
       $scope.showBBB = false;
       $scope.showSkins = false;
       $scope.showScramble = false;
   }
   $scope.ShowHideSkins = function () {
       $scope.showSkins = !$scope.showSkins;
       $scope.show4ball = false;
       $scope.show4manBB = false;
       $scope.showMP = false;
       $scope.showBBB = false;
       $scope.showScramble = false;
   }
   $scope.ShowHideScramble = function () {
       $scope.showScramble = !$scope.showScramble;
       $scope.show4ball = false;
       $scope.show4manBB = false;
       $scope.showMP = false;
       $scope.showSkins = false;
       $scope.showBBB = false;
   }

   $scope.getTees = function(){
      $http.get("/api/" + $scope.course.id)
      .then(function (data){
         $scope.courses = data.data.slice(0,4)
         $scope.pars = data.data[4]
         $scope.scores = {}
      })
      .catch(function(){
         $scope.courses = []
      })
   }

   $scope.submitScores = function(){
      $http.post('/api/postscores', Object.assign({}, {course_id:$scope.course.id}, $scope.scores))
      $scope.submitScores = $scope.submitScores ? false : true;
      }

   $http.get("/api/courses")
   .then(function(data){
      $scope.courseNames = data.data
   })


});


app.controller('handicapController', function($scope, $http, $location){
   $http.get('/api/handicap')
   .then(function(data){
     $scope.handicap = data.data
   })
   $scope.totalScore = function(x){
      return x.score1 + x.score2 + x.score3 + x.score4 + x.score5 + x.score6 + x.score7 + x.score8 + x.score9 + x.score10 + x.score11 + x.score12 + x.score13 + x.score14 + x.score15 + x.score16 + x.score17 + x.score18
   }

   $http.get('/api/gameData')
   .then(function(data){
     $scope.gameData = data.data
     var dates = data.data[0].map(function(scores){
        return moment(scores.date).format("MM/DD/YYYY")
     })
     var scores = data.data[0].map(function(scores){
        return scores.score1 + scores.score2 + scores.score3 + scores.score4 + scores.score5 + scores.score6 + scores.score7 + scores.score8 + scores.score9 + scores.score10 + scores.score11 + scores.score12 + scores.score13 + scores.score14 + scores.score15 + scores.score16 + scores.score17 + scores.score18
     })
     /* Start of Chart JS */

        var canvas = document.getElementById('myChart');
        var chartdata = {
           labels: dates,
           datasets: [
              {
                 label: "Scores",
                 fill: false,
               //   backgroundColor: "rgba(75, 193, 193, 0.2)",
                 lineTension: 0.2,
                 borderColor: "#f93a3a",
                 borderCapStyle: 'butt',
                 borderDash: [],
                 borderDashOffset: 0.0,
                 borderJoinStyle: 'miter',
                 pointBorderColor: "#4bc1c1",
                 pointBackgroundColor: "#fff",
                 pointBorderWidth: 1,
                 pointHoverRadius: 5,
                 pointHoverBackgroundColor: "#4bc1c1",
                 pointHoverBorderColor: "#dddddd",
                 pointHoverBorderWidth: 2,
                 pointRadius: 5,
                 pointHitRadius: 10,
                 data: scores,
              }
           ]
        };

        var option = {
           showLines: true,
           scales: {
              yAxes: [{
                 ticks: {
                    min: 60
                 }
              }]
           }
        };
        var myLineChart = Chart.Line(canvas,{
           data:chartdata,
           options:option
        });

     /* End of ChartJS */

   })



}); /* End of Handicap Controller */

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

app.directive("scoreCardPar", function () {
   return {
      templateUrl: "scorecard-par.html",
      scope: { pars: "=" },
      controller: function($scope){
         var par = $scope.pars
         $scope.front9 = function(){
            return par.par1 + par.par2 + par.par3 + par.par4 + par.par5 + par.par6 + par.par7 + par.par8 + par.par9
         }
         $scope.back9 = function(){
            return par.par10 + par.par11 + par.par12 + par.par13 + par.par14 + par.par15 + par.par16 + par.par17 + par.par18
         }
         $scope.totalPar = function(){
            return $scope.front9() + $scope.back9()
         }
      },
      restrict: "A"
   }
})

app.directive("scoreCard", function () {
   return {
      templateUrl: "scorecard.html",
      scope: {
         tees: "=",
         pars: "=",
         scores: "="
      },
      restrict: "E"
   }
})


app.directive("playerScore", function () {
   return {
      templateUrl: "playerScore.html",
      scope: { scores: "=" },
      controller: function($scope){
         var scores = $scope.scores
         $scope.front9scores = function() {
            var front9score = parseFloat(scores.score1 || 0) +
                              parseFloat(scores.score2 || 0) +
                              parseFloat(scores.score3 || 0) +
                              parseFloat(scores.score4 || 0) +
                              parseFloat(scores.score5 || 0) +
                              parseFloat(scores.score6 || 0) +
                              parseFloat(scores.score7 || 0) +
                              parseFloat(scores.score8 || 0) +
                              parseFloat(scores.score9 || 0);
             return front9score || 0;
          };
          $scope.back9scores = function() {
             var back9score = parseFloat(scores.score10 || 0) +
                              parseFloat(scores.score11 || 0) +
                              parseFloat(scores.score12 || 0) +
                              parseFloat(scores.score13 || 0) +
                              parseFloat(scores.score14 || 0) +
                              parseFloat(scores.score15 || 0) +
                              parseFloat(scores.score16 || 0) +
                              parseFloat(scores.score17 || 0) +
                              parseFloat(scores.score18 || 0);
             return back9score || 0;
          };
          $scope.totalScore = function(){
             return $scope.front9scores() + $scope.back9scores()
         };
   },
    restrict: "A"
  }
})
