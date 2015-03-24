var getBlood = angular.module('getBlood', ['ngMaterial', 'ngMdIcons']);

getBlood.controller('GetBloodCtrl', function($scope) {
  $scope.description = 'This is the description part of the page. ' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat interdum felis sed interdum. Pellentesque ultrices est eget placerat tempor. Curabitur iaculis porttitor mauris. Sed dictum mattis est, sit amet tempor leo placerat id.';

  $scope.user = {};
});

getBlood.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('blue');
});
