angular.module('MarkMusings').controller('PodcastsCreateController', function($scope, Podcast, $location){
  
  $scope.podcast = {};

  $scope.savePodcast = function(podcast){
    Podcast.save(podcast);
    $location.path('/podcasts');
  };

});
