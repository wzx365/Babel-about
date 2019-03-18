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