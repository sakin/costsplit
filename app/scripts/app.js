'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('CostSplit', ['ionic', 'config', 'CostSplit.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: '/search',
      views: {
        'menuContent' :{
          templateUrl: 'templates/search.html'
        }
      }
    })

    .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent' :{
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.events', {
      url: '/events',
      views: {
        'menuContent' :{
          templateUrl: 'templates/events.html',
          controller: 'EventsCtrl'
        }
      }
    })

    .state('app.new_event', {
      url: '/events/new',
      views: {
        'menuContent' :{
          templateUrl: 'templates/events_new.html',
          controller: 'EventsNewCtrl'
        }
      }
    })

    .state('app.event', {
      url: '/events/:eventId',
      views: {
        'menuContent' :{
          templateUrl: 'templates/event.html',
          controller: 'EventCtrl'
        }
      }
    })

    .state('app.new_user', {
      url: '/users/new',
      views: {
        'menuContent' :{
          templateUrl: 'templates/users_new.html',
          controller: 'UsersNewCtrl'
        }
      }
    })

    .state('app.user', {
      url: '/users/:userId',
      views: {
        'menuContent' :{
          templateUrl: 'templates/user.html',
          controller: 'UserCtrl'
        }
      }
    })

    .state('app.new_item', {
      url: '/items/new',
      views: {
        'menuContent' :{
          templateUrl: 'templates/items_new.html',
          controller: 'ItemsNewCtrl'
        }
      }
    })

    .state('app.item', {
      url: '/items/:itemId',
      views: {
        'menuContent' :{
          templateUrl: 'templates/item.html',
          controller: 'ItemCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/events');
});

