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

module.exports = LocalStorage;