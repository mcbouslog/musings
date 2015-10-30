angular.module('MarkMusings').controller('AllIndexController', function(TV, Podcast, $scope) {

	$scope.tvs = TV.all;
	$scope.podcasts = Podcast.all;

});
