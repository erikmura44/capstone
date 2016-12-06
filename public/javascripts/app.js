angular.module('golfapp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/landing.html',
      controller: 'controller'
   })
    .when('/golf', {
      templateUrl: '/home.html',
      controller: 'controller'
   })
    .when('/games', {
      templateUrl: '/games.html',
      controller: 'controller'
   })
    .when('/handicap', {
      templateUrl: '/handicap.html',
      controller: 'handicapController'
   })
    .otherwise({
      redirectTo: '/'
    })
    $locationProvider.html5Mode(true);
})
