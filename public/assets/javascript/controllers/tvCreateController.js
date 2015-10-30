angular.module('MarkMusings').controller('TVCreateController', function($scope, TV, $location){
  
  $scope.tv = {};

  $scope.saveTV = function(tv){
    TV.save(tv);
    $location.path('/tv');
  };

});
