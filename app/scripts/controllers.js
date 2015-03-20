'use strict';
angular.module('CostSplit.controllers', ['ionic', 'ionic.utils', "slugifier" ])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  }
})

.controller('EventsCtrl', function($scope, $localstorage) {
  $scope.events = [
    { title: 'Birthday', id: 1 },
    { title: 'Dinner', id: 2 },
  ];
  // console.log($localstorage.get('name'));
})

.controller('EventCtrl', function($scope, $stateParams) {
  $scope.name = 'Event Name'
  $scope.users = [
    { name: 'Will', id: 1 },
    { name: 'Karl', id: 2 },
    { name: 'Winston', id: 3 },
  ];
})

.controller('UsersNewCtrl', function($scope, $localstorage) {
  // console.log($localstorage.get('name'));
})

.controller('UserCtrl', function($scope, $stateParams) {
  $scope.name = "Karl"
  $scope.items = [
    { name: 'Beer', id: 1 },
    { name: 'Food', id: 2 },
    { name: 'Gin', id: 3 },
  ];
})

.controller('ItemsNewCtrl', function($scope, $localstorage) {
  // console.log($localstorage.get('name'));
})

.controller('ItemCtrl', function($scope, $stateParams) {
  $scope.name = "Beer"
  $scope.users = [
    { name: 'Will', id: 1 },
    { name: 'Karl', id: 2 },
    { name: 'Winston', id: 3 },
  ];
})

.controller('EventsNewCtrl', function($scope, $stateParams, $location, Slug, $localstorage) {
  $scope.eventData = {};

  $scope.newEvent = function() {
    var name = $scope.eventData.name;
    // console.log('Create Event', $scope.eventData);
    // console.log('Slug: ', Slug.slugify($scope.eventData.name));
    if((typeof name != 'undefined') && name !== ''){
      var slug = Slug.slugify($scope.eventData.name);

      $localstorage.setObject(slug, {
        name: name
      });

      if((typeof $localstorage.get('events') != 'undefined')){
        var events = $localstorage.get('events');
      } else {
        var events = '';
      }

      var addition = ' ';
      if (events !== '') { addition = ',' };
      events += addition + slug;
      $localstorage.set('events', events);

    } else {
      alert("oh boy");
    }


    // $localstorage.set('name', 'Max');
    // console.log($localstorage.get('name'));
    // $localstorage.setObject('post', {
    //   name: 'Thoughts',
    //   text: 'Today was a good day'
    // });

    // var post = $localstorage.getObject('post');
    // console.log(post, post.name);
    // $location.path('/app/events').replace();
  }
});
