"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.for-each");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    (0, _classCallCheck2.default)(this, EventEmitter);
    this.listeners = {};
  }

  (0, _createClass2.default)(EventEmitter, [{
    key: "on",
    value: function on(type, fn) {
      if (!this.listeners[type]) {
        this.listeners[type] = [];
      }

      this.listeners[type].push(fn);
    }
  }, {
    key: "emit",
    value: function emit(type) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      if (this.listeners[type]) {
        this.listeners[type].forEach(function (fn) {
          fn.apply(void 0, params);
        });
      }
    }
  }, {
    key: "off",
    value: function off(type, fn) {
      var args = arguments;

      if (args.length === 0) {
        this.listeners = {};
      } else if (args.length === 1) {
        this.listeners[type] = [];
      } else if (args.length === 2) {
        if (this.listeners[type]) {
          this.listeners[type] = this.listeners[type].filter(function (callback) {
            return callback !== fn;
          });
        }
      }
    }
  }]);
  return EventEmitter;
}();