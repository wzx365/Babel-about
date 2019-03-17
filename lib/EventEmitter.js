"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.listeners = {};
  }

  _createClass(EventEmitter, [{
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