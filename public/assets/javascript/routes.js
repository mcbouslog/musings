angular.module('MarkMusings').config(function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/tv'
    })

    .when('/tv', {
      templateUrl: "assets/templates/tv/index.html",
      controller: "TVIndexController"
    })

    .when('/tv/new', {
      templateUrl: "assets/templates/tv/new.html",
      controller: "TVCreateController"
    })

    .when('/tv/:id', {
      templateUrl: "assets/templates/tv/show.html",
      controller: "TVShowController"
    })

    .when('/movies', {
      templateUrl: "assets/templates/movies/index.html",
      controller: "MoviesIndexController"
    })

    .when('/podcasts', {
      templateUrl: "assets/templates/podcasts/index.html",
      controller: "PodcastsController"
    })

    .when('/food', {
      templateUrl: "assets/templates/food/index.html",
      controller: "FoodController"
    })

});
