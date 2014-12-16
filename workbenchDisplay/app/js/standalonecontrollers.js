'use strict';

/* Controllers */

var workbenchDisplayApp = angular.module('workbenchDisplayApp', []);

var workbenchDisplayControllers = angular.module('workbenchDisplayControllers', []);

//workbenchDisplayControllers.controller('ProductListCtrl', function($scope) {
workbenchDisplayApp.controller('ProductListCtrl', ['$scope', '$http', 
  function ($scope, $http) {
    
    $scope.languages = [
      {'name': 'Deutsch',
      'id': '1',
      'class': 'active'
      },
      {'name': 'English',
      'id': '2',
      'class': ''
      },
      {'name': 'Griechisch',
      'id': '3',
      'class': ''
      },
      {'name': 'Schwäbisch',
      'id': '4',
      'class': ''
      }
    ];

    $scope.activeLanguage = $scope.languages[0];

    $scope.setLanguage = function (aLanguage) {
      $scope.activeLanguage = aLanguage;
    }
    
    $scope.isLanguageSelected = function (aLanguage) {
      var result = "";
      if (aLanguage == $scope.activeLanguage) result = "active";
      return result;
    }
    
    $scope.obj2 = [];

    $http.get('products/products.json').success(function(data) {
      $scope.products = data;
      var i = 0;
      var y = 0;
      while ($scope.products.length) {
        $scope.obj2.push($scope.products.splice(0, 4));
      };     
    });
}]);


workbenchDisplayControllers.controller('ProductDetailCtrl', ['$hhtp', '$routeParams', 
  function($scope, $routeParams) {
    $scope.productId = $routeParams.productId;
  }
]);