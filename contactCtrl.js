angular
  .module('app')
  .controller('contactCtrl', ['$scope', 'Friends', function($scope, Friends) {
    $scope.ctitle = "Contact";
    Friends.get().then(function(data) {
      $scope.items = data;
    });
  }]);