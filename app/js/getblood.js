var getBlood = angular.module('getBlood', ['ngMaterial', 'ngMdIcons']);

getBlood.controller('GetBloodCtrl', ['$scope', '$mdMedia',
  function($scope, $mdMedia) {
    $scope.description = 'This is the description part of the page. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat interdum felis sed interdum. Pellentesque ultrices est eget placerat tempor. Curabitur iaculis porttitor mauris. Sed dictum mattis est, sit amet tempor leo placerat id.';

    $scope.user = {};
    $scope.isMobile = false;
    $scope.isDesktop = false;

    if ($mdMedia('gt-md')) {
      $scope.isDesktop = true;
    } else {
      $scope.isMobile = true;
    }
  }
]);

getBlood.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('blue');
});
