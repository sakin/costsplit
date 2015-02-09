var app = require('app');

// Utilities
var LocalStorage = require('../costsplit/utils/angular_local_storage');

// Services
var EventCreator = require('../costsplit/services/event_creator');

app.factory("LocalStorage", ['$localstorage', function($localstorage) {
    return new LocalStorage($localstorage);
}]);

app.factory("EventCreator", ['$localstorage', 'Slug', function($localstorage, Slug) {
    return new EventCreator($localstorage, Slug);
}]);