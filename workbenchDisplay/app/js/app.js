'use strict';

/* App Module */
// Routed die views //
var workbenchDisplayApp = angular.module('workbenchDisplayApp', [
  'ngRoute',
  'workbenchDisplayControllers'
]);

workbenchDisplayApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products', {
        templateUrl: 'partials/product-kachel-list.html',
        controller: 'ProductListCtrl'
      }).
      when('/products/:productId', {
        templateUrl: 'partials/product-detail.html',
        controller: 'ProductDetailCtrl'
      }).
      otherwise({
        redirectTo: '/products'
      });
  }]);