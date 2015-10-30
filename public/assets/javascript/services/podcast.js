angular.module('MarkMusings').factory('Podcast', function(){
  
	var podcasts = [
		{"id": 0, "group": "podcasts", "title": "RadioLab", "img_src": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/WNYC_Radiolab_logo.svg/1280px-WNYC_Radiolab_logo.svg.png", "genre": "science", "channel": "NPR", "musings": [{"name": "Mark", "date": "9/1/15", "content": "Best show ever!"}, {"name": "Alina", "date": "9/2/15", "content": "Too complicated."}]},
		{"id": 1, "group": "podcasts", "title": "Freakonomics", "img_src": "http://www.ipodder.org/blog/wp-content/uploads/2014/09/freakonomics.jpg", "genre": "economics", "channel": "NPR", "musings": [{"name": "Alina", "date": "7/5/15", "content": "Best show ever!"}, {"name": "Mark", "date": "8/4/15", "content": "Too complicated."}]},
		{"id": 2, "group": "podcasts", "title": "This American Life", "img_src": "https://upload.wikimedia.org/wikipedia/en/e/e4/This_american_life.jpg", "genre": "story-telling", "channel": "NPR", "musings": [{"name": "Mark", "date": "10/1/15", "content": "Best show ever!"}, {"name": "Alina", "date": "10/12/15", "content": "Too complicated."}]}
	];

	return {
		all: podcasts,

		show: function(id) {
			return podcasts[id];
		},

		save: function(show) {
			podcasts.push(show);
			return podcasts;
		}
	};

});
