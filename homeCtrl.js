angular
  .module('app')
  .controller('homeCtrl', ['$scope', '$http', 'Friends', function ($scope,$http, Friends) {
      $scope.title = "Home";
      Friends.get().then(function (data) {
          $scope.friends = data;
      });
      $scope.items = ['home', 'about', 'contact'];
      $scope.selectedValue = 'home';

      $scope.save = function () {
         $http.post('/api/friends', $scope.friends);
         alert(JSON.stringify($scope.friends));
      };
  } ]);