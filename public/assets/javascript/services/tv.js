angular.module('MarkMusings').factory('TV', function(){
  
	var tvShows = [
		{"id": 0, "title": "America's Test Kitchen", "img_src": "http://mediad.publicbroadcasting.net/p/wpr/files/201409/Americas_Test_Kitchen.jpg", "genre": "cooking", "channel": "WTTW11", "musings": [{"name": "Mark", "date": "9/1/15", "content": "Best show ever!"}, {"name": "Alina", "date": "9/2/15", "content": "Too complicated."}]},
		{"id": 1, "title": "True Detective", "img_src": "http://vignette1.wikia.nocookie.net/true-detective/images/5/57/True-Detective-Wikia_Season1-Poster_sm.jpg", "genre": "drama", "channel": "HBO", "musings": [{"name": "Alina", "date": "7/5/15", "content": "Best show ever!"}, {"name": "Mark", "date": "8/4/15", "content": "Too complicated."}]},
		{"id": 2, "title": "Rick and Morty", "img_src": "http://assets.audiomack.com/transitioncast/673c9d049a727c4065080a0964367d82.jpeg", "genre": "comedy", "channel": "Adult Swim", "musings": [{"name": "Mark", "date": "10/1/15", "content": "Best show ever!"}, {"name": "Alina", "date": "10/12/15", "content": "Too complicated."}]}
	];

	return {
		all: tvShows,

		show: function(id) {
			return tvShows[id];
		},

		create: function(show) {
			tvShows.push(show);
			return tvShows;
		}
	};

});
