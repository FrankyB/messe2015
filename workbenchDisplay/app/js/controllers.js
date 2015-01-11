'use strict';

/* Controllers */
var workbenchDisplayControllers = angular.module('workbenchDisplayControllers', []);

workbenchDisplayControllers.controller('ProductListCtrl', ['$scope', '$http', 
  function ($scope, $http) {
    $scope.obj2 = [];

    $http.get('products/products.json').success(function(data) {
      $scope.products = data.productList;
      var save = jQuery.extend(true, {}, data);
      var i = 0;
      var y = 0;
      while ($scope.products.length) {
        $scope.obj2.push($scope.products.splice(0, 4));
      };     
      $scope.products = save.productList;
      $scope.productListHeadline = save.headline;
    });
}]);


workbenchDisplayControllers.controller('ProductDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {

    $scope.productId = $routeParams.productId;

    $http.get('products/'+String.toLowerCase($routeParams.productId)+'.json').success(function(data) {
      $scope.product = data;
    });    
  }
]);

workbenchDisplayControllers.controller('LanguageController', ['$scope', '$http', 
    function ($scope,$http) {
      $http.get('languages/languages.json').success(function(data) {
        $scope.languages = data;
        $scope.activeLanguage = $scope.languages[0];

        $scope.setLanguage = function (aLanguage) {
          $scope.activeLanguage = aLanguage;
        }
      });
      
      $scope.isLanguageSelected = function (aLanguage) {
        var result = "";
        if (aLanguage == $scope.activeLanguage) result = "active";
        return result;
      }
    
    }])
  .directive('myLanguageSelector', 
    function () {
      return {
//        template: 'Language: {{languages.name}} id: {{languages.id}}'
        template: '<ul class="nav nav-tabs" role="tablist">'+
                  '  <li ng-repeat="language in languages" ng-click="setLanguage(language)" role="languageselector" class="{{isLanguageSelected(language)}}" ><a href="#">{{language.name}}</a></li>'+
                  '</ul>'
      };
    }
  )
;