angular.module('golfapp', ['ngRoute', 'angularMoment'])
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
    .when('/contact', {
      templateUrl: '/contact.html'
   })
    .otherwise({
      redirectTo: '/'
    })
    $locationProvider.html5Mode(true);
})
