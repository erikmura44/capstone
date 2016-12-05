var app = angular.module('golfapp');

app.controller('controller', function($scope, $http, $location) {
   $scope.showBBB = false;
   $scope.show4ball = false;
   $scope.show4manBB = false;
   $scope.showMP = false;
   $scope.showSkins = false;
   $scope.showScramble = false;
   $scope.ShowHideBBB = function () {
       $scope.showBBB = $scope.showBBB ? false : true;
   }
   $scope.ShowHide4ball = function () {
       $scope.show4ball = $scope.show4ball ? false : true;
   }
   $scope.ShowHide4manBB = function () {
       $scope.show4manBB = $scope.show4manBB ? false : true;
   }
   $scope.ShowHideMP = function () {
       $scope.showMP = $scope.showMP ? false : true;
   }
   $scope.ShowHideSkins = function () {
       $scope.showSkins = $scope.showSkins ? false : true;
   }
   $scope.ShowHideScramble = function () {
       $scope.showScramble = $scope.showScramble ? false : true;
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
     console.log(data.data)
     $scope.gameData = data.data
  })

/* Start of Chart JS */

  var canvas = document.getElementById('myChart');

  var chartdata = {
      labels: ["11/18/16", "11/21/16", "11/26/16", "12/1/15", "12/2/16", "12/3/16", "12/4/16", "12/5/16" ],
      datasets: [
          {
             label: "Handicap",
             fill: false,
             lineTension: 0.1,
             backgroundColor: "rgba(#4bc1c1, 0.4)",
             borderColor: "#4bc1c1",
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
             data: [73, 78, 75, 80, 76, 76, 99, 83],
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
            var front9score = parseFloat(scores.score1 || 0) + parseFloat(scores.score2 || 0) +
                      parseFloat(scores.score3 || 0) + parseFloat(scores.score4 || 0) +
                          parseFloat(scores.score5 || 0) + parseFloat(scores.score6 || 0) + parseFloat(scores.score7 || 0) + parseFloat(scores.score8 || 0) + parseFloat(scores.score9 || 0);
             return front9score || 0;
          };
          $scope.back9scores = function() {
             var back9score = parseFloat(scores.score10 || 0) + parseFloat(scores.score11 || 0) +
                          parseFloat(scores.score12 || 0) + parseFloat(scores.score13 || 0) +
                          parseFloat(scores.score14 || 0) + parseFloat(scores.score15 || 0) + parseFloat(scores.score16 || 0) + parseFloat(scores.score17 || 0) + parseFloat(scores.score18 || 0);
             return back9score || 0;
          };
          $scope.totalScore = function(){
             return $scope.front9scores() + $scope.back9scores()
         };
         $scope.hcap = function(){
            return ($scope.totalScore() - 72)
         };
   },
    restrict: "A"
  }
})
