angular.module('MarkMusings').controller('PodcastsShowController', function(Podcast, $scope, $routeParams, $location){

  $scope.podcast = Podcast.show($routeParams.id);

});
