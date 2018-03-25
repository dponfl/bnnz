"use strict";

(function () {

  angular.module('app.client.routes', [
    'app.core'
  ])
    .config(BonanzaRoutesConfig);

  BonanzaRoutesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
  function BonanzaRoutesConfig($stateProvider, $locationProvider, $urlRouterProvider) {


    // todo: delete
    console.log('app.client.routes: BonanzaRoutesConfig');


    $stateProvider
      .state('home', {
        views: {
          header: {
            templateUrl: 'templates/view/header/headerClient.html'
          },
          section001: {
            templateUrl: 'templates/view/home/section001.html'
          },
          footer: {
            templateUrl: 'templates/view/footer/footerClient.html'
          },
        },
        url: '/'
      });


    // todo: delete
    console.log('app.client.routes: BonanzaRoutes');

    $urlRouterProvider
      .otherwise('/');

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
  } // BonanzaRoutesConfig


})();