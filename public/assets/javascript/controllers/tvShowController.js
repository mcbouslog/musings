angular.module('MarkMusings').controller('TVShowController', function(TV, $scope, $routeParams, $location){

  $scope.tv = TV.show($routeParams.id);

});
