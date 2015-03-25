var getBlood = angular.module('getBlood', [
                              'ngRoute', 'ngMaterial', 'ngMdIcons'
                              ]);

getBlood.controller('MainCtrl', [
  '$scope', '$route', '$routeParams', '$location', '$mdMedia',
  function ($scope, $route, $routeParams, $location, $mdMedia) {
  
  }
]);

getBlood.controller('GetBloodCtrl', [
  '$scope', '$routeParams',
  function ($scope, $routeParams) {
    $scope.description = 'This is the description part of the page. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat interdum felis sed interdum. Pellentesque ultrices est eget placerat tempor. Curabitur iaculis porttitor mauris. Sed dictum mattis est, sit amet tempor leo placerat id.';

    $scope.user = {};

    /*
    $scope.isMobile = false;
    $scope.isDesktop = false;

    if ($mdMedia('gt-md')) {
      $scope.isDesktop = true;
    } else {
      $scope.isMobile = true;
    }
    */

    $scope.submit = function () {
      console.log('submitting', $scope.user);
      /*
      $http.post()
        .success(function () {

        });
      */
    }
  }
]);

getBlood.controller('AboutCtrl', [
  '$scope', '$routeParams',
  function ($scope, $routeParams) {
    $scope.aboutContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat interdum felis sed interdum. Pellentesque ultrices est eget placerat tempor. Curabitur iaculis porttitor mauris. Sed dictum mattis est, sit amet tempor leo placerat id.';
  }
]);

getBlood.config(function($mdThemingProvider, $routeProvider, $locationProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('blue');

  $routeProvider
    .when('/', {
      templateUrl: 'form.html',
      controller: 'GetBloodCtrl'
    })
    .when('/about', {
      templateUrl: 'about.html',
      contrller: 'AboutCtrl'
    });
});
