angular.module('golfapp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/home.html',
      controller: 'controller'
    })
    .otherwise({
      redirectTo: '/'
    })
})
