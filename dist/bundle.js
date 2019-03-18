"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

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
"use strict";

require("core-js/modules/es7.promise.finally");

require("core-js/modules/es6.promise");

var promise = new Promise(function (resolve, reject) {
  if (Math.random() > 0.5) {
    resolve(200);
  } else {
    reject(400);
  }
});
promise.then(function (res) {
  return console.log(res);
}).finally(function () {
  console.log('finally');
});
"use strict";

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.filter");

[1, 2, 3, 4, 5].map(function (n) {
  return n + 1;
}).filter(function (n) {
  return n > 2;
});

var fn = function fn() {
  return 1 > 0;
};
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

function H(props) {
  var msg = props.msg;
  return _react.default.createElement("h1", {
    className: "hi"
  }, msg);
}

var Hello =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Hello, _Component);

  function Hello(props) {
    (0, _classCallCheck2.default)(this, Hello);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Hello).call(this, props));
  }

  (0, _createClass2.default)(Hello, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(H, {
        msg: 'hello @babel/preset-react'
      });
    }
  }]);
  return Hello;
}(Component);

exports.default = Hello;
