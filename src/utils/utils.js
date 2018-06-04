export function isLocalStorageSupported() {
  var testKey = 'test', storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

export function MockStorage() {
  let _this = this;
  _this.store = {};
  return {
    getItem: function (key) {
      return _this.store[key];
    },
    setItem: function (key, value) {
      _this.store[key] = value.toString();
    },
    removeItem: function (key) {
      delete _this.store[key];
    },
    clear: function () {
      _this.store = {};
    }
  };
}