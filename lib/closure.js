"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var msg = 'hello world!!!';

function Foo() {
  return _react.default.createElement("h1", null, msg);
}

var _default = Foo;
exports.default = _default;
