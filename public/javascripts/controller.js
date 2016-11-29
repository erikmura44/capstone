var app = angular.module('golfapp');

app.controller('controller', function($scope, $http, $location) {
   $http.get("/api")
    .then(function (data){
      console.log(data)
   });
});
