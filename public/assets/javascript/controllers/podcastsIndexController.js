angular.module('MarkMusings').controller('PodcastsIndexController', function(Podcast, $scope) {

	$scope.podcasts = Podcast.all;

});
