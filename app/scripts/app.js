'use strict';

var ritoApp = angular.module('rito.app', [
  'ui.router'
])
.config(['$stateProvider',
         '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
      $stateProvider
        .state('homeState', {
          url: '/',
          templateUrl: 'partials/homePageTpl.html',
          controller: 'HomeController',
          controllerAs: 'HC'
        })
}])
.run(['$state',
  function ($state) {
    $state.go('homeState');
}]);
