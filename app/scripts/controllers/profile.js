angular.module('puppyLoveApp')
 .controller('ProfileCtrl', function ($scope) {
    
    $scope.searchStr = '';
    $scope.artistResults = [];
    $scope.searchOwner = searchOwner;

    function searchOwner() {
      if($scope.searchStr.length) {
        search($scope.searchStr, 'owner')
          .then(function(response) {
            $scope.ownerResults = response.owner.items;
          });
      $scope.currentOwner = null;
      }
    }

  });