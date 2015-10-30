angular.module('MarkMusings').controller('TVIndexController', function(TV, $scope) {

	$scope.tvs = TV.all;

});
