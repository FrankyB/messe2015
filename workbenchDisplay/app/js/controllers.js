'use strict';

/* Controllers */

var workbenchDisplayApp = angular.module('workbenchDisplayApp', []);

workbenchDisplayApp.controller('ProductListCtrl', function($scope) {
    
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
  
  $scope.products = [
    {'name': 'Produkt 1',
     'snippet': 'Fast just got faster with Nexus S.',
     'img': 'img/7374k.jpg'
    },
    {'name': 'Product 2',
     'snippet': 'The Next, Next Generation tablet.',
     'img': 'img/9481g_2.jpg'
    },
    {'name': 'Product 3',
     'snippet': 'The Next, Next Generation tablet.',
     'img': 'img/13755u_1.jpg'     
    },
    {'name': 'Product 4',
     'snippet': 'The Next, Next Generation tablet.',
     'img': 'img/16050u.jpg'
    },
    {'name': 'Product 5',
     'snippet': 'The Next, Next Generation tablet.',
     'img': 'img/16169u_2.jpg'
    },
    {'name': 'Produkt 6',
     'snippet': 'The Next, Next Generation tablet.',
     'img': 'img/17521u_13.jpg'
    },
    {'name': 'Produkt 7',
     'snippet': 'The Next, Next Generation tablet.',
     'img': 'img/17534u_2.jpg'
    },
    {'name': '',
     'snippet': '',
     'img': ''
    }
  ];

  $scope.obj2 = [];
  var i = 0;
  var y = 0;
  while ($scope.products.length) {
      $scope.obj2.push($scope.products.splice(0, 4));
  };
});
