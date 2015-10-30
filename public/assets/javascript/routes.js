angular.module('MarkMusings').config(function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/all'
    })

    .when('/all', {
      templateUrl: "assets/templates/all.html",
      controller: "AllIndexController"
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

    .when('/podcasts', {
      templateUrl: "assets/templates/podcasts/index.html",
      controller: "PodcastsIndexController"
    })

    .when('/podcasts/new', {
      templateUrl: "assets/templates/podcasts/new.html",
      controller: "PodcastsCreateController"
    })

    .when('/podcasts/:id', {
      templateUrl: "assets/templates/podcasts/show.html",
      controller: "PodcastsShowController"
    })

});
