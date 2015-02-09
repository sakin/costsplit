'use strict';

var EventCreator = function (storageEngine, slugGenerator) {
    this.storageEngine = storageEngine;
    this.slugGenerator = slugGenerator;

    var create = function (name, errorCb) {
        if((typeof name != 'undefined') && name !== ''){
          var slug = slugGenerator.slugify(name);

          storageEngine.setObject(slug, {
            name: name
          });

          if((typeof storageEngine.get('events') != 'undefined')){
            var events = storageEngine.get('events');
          } else {
            var events = '';
          }

          var addition = ' ';
          if (events !== '') { addition = ',' };
          events += addition + slug;
          storageEngine.set('events', events);

        } else {
          errorCb("oh boy");
        }
    }

    return {
        create: create
    }
};

var LocalStorage = function (storageEngine) {
  this.storageEngine = storageEngine;

  var get = function (key) {
    return this.storageEngine(key);
  };

  var set = function (key, value) {
    this.storageEngine.set(key, value);
  }

  var setObject = function (key, value) {
    this.storageEngine.setObject(key, value);
  }

  return {
    'get': get,
    'set': set,
    'setObject': setObject
  }
};

angular.module('CostSplit.controllers', ['ionic', 'ionic.utils', "slugifier", "LocalStorage" ])

.factory("LocalStorage", ['$localstorage', function($localstorage) {
    return new LocalStorage($localstorage);
}])

.factory("EventCreator", ['$localstorage', 'Slug', function($localstorage, Slug) {
    return new EventCreator($localstorage, Slug);
}])

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
  console.log($localstorage.get('name'));
})

.controller('EventCtrl', function($scope, $stateParams) {
})

.controller('EventsNewCtrl', function($scope, $stateParams, $location, EventCreator) {
  $scope.eventData = {};

  $scope.newEvent = function() {
    var event_creator = EventCreator.create($scope.eventData.name, function (msg) {
      alert(msg);
    });
  }
});
