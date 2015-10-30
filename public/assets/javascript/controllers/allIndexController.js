angular.module('MarkMusings').controller('AllIndexController', function(TV, Podcast, $scope) {

	if ($scope.allItems === undefined) {
		$scope.allItems = TV.all;
		var podcasts = Podcast.all;
		Array.prototype.push.apply($scope.allItems, podcasts);	
	}

});
