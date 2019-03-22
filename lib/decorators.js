"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _class;

var Boy = (_class =
/*#__PURE__*/
function () {
  function Boy() {
    (0, _classCallCheck2.default)(this, Boy);
  }

  (0, _createClass2.default)(Boy, [{
    key: "speak",
    value: function speak() {
      console.log('I can speak');
    }
  }]);
  return Boy;
}(), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "speak", [run], Object.getOwnPropertyDescriptor(_class.prototype, "speak"), _class.prototype)), _class);

function run() {
  console.log('I can run');
}

var tj = new Boy();
tj.speak();