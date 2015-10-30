angular.module('MarkMusings').directive('mmIndex', function() {

	return {
		replace: true,
		restrict: 'E',
		templateUrl: '/assets/templates/directives/mm-index.html',
		scope: {
			item: '='
		}
	};

});
