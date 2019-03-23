/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);

      if (TYPE) {
        if (IS_MAP) result[index] = res; // map
        else if (res) switch (TYPE) {
            case 3:
              return true;
            // some

            case 5:
              return val;
            // find

            case 6:
              return index;
            // findIndex

            case 2:
              result.push(val);
            // filter
          } else if (IS_EVERY) return false; // every
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");

var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;

  if (isArray(original)) {
    C = original.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;

    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array : C;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.5'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');

var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");

var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {
      /* empty */
    }, 1) : method.call(null);
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;

var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);

var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./src/VirtualDOM.js":
/*!***************************!*\
  !*** ./src/VirtualDOM.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




var Element =
/*#__PURE__*/
function () {
  function Element(tagName, props, children) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Element);

    this.tagName = tagName;
    this.props = props;
    this.children = children;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Element, [{
    key: "render",
    value: function render() {
      var el = document.createElement(this.tagName); // 根据tagName构建

      var props = this.props;

      for (var propName in props) {
        // 设置节点的DOM属性
        var propValue = props[propName];
        el.setAttribute(propName, propValue);
      }

      var children = this.children || [];
      children.forEach(function (child) {
        var childEl = child instanceof Element ? child.render() // 如果子节点也是虚拟DOM，递归构建DOM节点
        : document.createTextNode(child); // 如果字符串，只构建文本节点

        el.appendChild(childEl);
      });
      return el;
    }
  }]);

  return Element;
}();

var el = function el(tagName, props, children) {
  return new Element(tagName, props, children);
};

var ul = el('ul', {
  id: 'list'
}, [el('li', {
  class: 'item'
}, ['Item 1']), el('li', {
  class: 'item'
}, ['Item 2']), el('li', {
  class: 'item'
}, ['Item 3'])]);
console.log(ul);
var ulRoot = ul.render();
console.log(ulRoot);
document.body.appendChild(ulRoot);

/***/ }),

/***/ "./src/less.less":
/*!***********************!*\
  !*** ./src/less.less ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/list.css":
/*!**********************!*\
  !*** ./src/list.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./VirtualDOM */ "./src/VirtualDOM.js");

__webpack_require__(/*! ./list.css */ "./src/list.css");

__webpack_require__(/*! ./scss.scss */ "./src/scss.scss");

__webpack_require__(/*! ./less.less */ "./src/less.less");

/***/ }),

/***/ "./src/scss.scss":
/*!***********************!*\
  !*** ./src/scss.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pack":"_3BoMkyzzNUyISG9RldWQCS"};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Z1bmN0aW9uLXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaWN0LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZpcnR1YWxET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlc3MubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Muc2NzcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiaXQiLCJpc09iamVjdCIsInJlcXVpcmUiLCJjdHgiLCJJT2JqZWN0IiwidG9PYmplY3QiLCJ0b0xlbmd0aCIsImFzYyIsIlRZUEUiLCIkY3JlYXRlIiwiSVNfTUFQIiwiSVNfRklMVEVSIiwiSVNfU09NRSIsIklTX0VWRVJZIiwiSVNfRklORF9JTkRFWCIsIk5PX0hPTEVTIiwiY3JlYXRlIiwiJHRoaXMiLCJjYWxsYmFja2ZuIiwidGhhdCIsIk8iLCJzZWxmIiwiZiIsImluZGV4IiwicmVzdWx0IiwidW5kZWZpbmVkIiwidmFsIiwicmVzIiwicHVzaCIsImlzQXJyYXkiLCJTUEVDSUVTIiwib3JpZ2luYWwiLCJDIiwiY29uc3RydWN0b3IiLCJBcnJheSIsInNwZWNpZXNDb25zdHJ1Y3RvciIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCJhRnVuY3Rpb24iLCJmbiIsImEiLCJiIiwiYyIsImFwcGx5IiwiYXJndW1lbnRzIiwiZ2V0IiwiZG9jdW1lbnQiLCJpcyIsImNyZWF0ZUVsZW1lbnQiLCJnbG9iYWwiLCJoaWRlIiwicmVkZWZpbmUiLCJQUk9UT1RZUEUiLCIkZXhwb3J0IiwidHlwZSIsIm5hbWUiLCJzb3VyY2UiLCJJU19GT1JDRUQiLCJGIiwiSVNfR0xPQkFMIiwiRyIsIklTX1NUQVRJQyIsIlMiLCJJU19QUk9UTyIsIlAiLCJJU19CSU5EIiwiQiIsImV4cFByb3RvIiwib3duIiwib3V0IiwiZXhwIiwiRnVuY3Rpb24iLCJVIiwiVyIsIlIiLCJleGVjIiwiZSIsIndpbmRvdyIsIk1hdGgiLCJfX2ciLCJoYXNPd25Qcm9wZXJ0eSIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsInZhbHVlIiwiY29mIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJzcGxpdCIsImFyZyIsImFuT2JqZWN0IiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIkF0dHJpYnV0ZXMiLCJiaXRtYXAiLCJoYXMiLCJTUkMiLCIkdG9TdHJpbmciLCJUT19TVFJJTkciLCJUUEwiLCJpbnNwZWN0U291cmNlIiwic2FmZSIsImlzRnVuY3Rpb24iLCJqb2luIiwiU3RyaW5nIiwiU0hBUkVEIiwic3RvcmUiLCJtb2RlIiwiY29weXJpZ2h0IiwiZmFpbHMiLCJtZXRob2QiLCJjZWlsIiwiZmxvb3IiLCJpc05hTiIsInRvSW50ZWdlciIsIm1pbiIsImRlZmluZWQiLCJ2YWx1ZU9mIiwiaWQiLCJweCIsInJhbmRvbSIsImNvbmNhdCIsInVpZCIsIlN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsIiRmb3JFYWNoIiwiU1RSSUNUIiwiZm9yRWFjaCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiY2hpbGRyZW4iLCJlbCIsInByb3BOYW1lIiwicHJvcFZhbHVlIiwic2V0QXR0cmlidXRlIiwiY2hpbGQiLCJjaGlsZEVsIiwicmVuZGVyIiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsInVsIiwiY2xhc3MiLCJjb25zb2xlIiwibG9nIiwidWxSb290IiwiYm9keSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLFNBQVNBLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DQyxXQUFuQyxFQUFnRDtBQUM5QyxNQUFJLEVBQUVE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U0FBTEEsRUFBSyxDQUFVRixPQUFWLEVBQW1CbkosS0FBbkIsRUFBMEJvSixRQUExQixFQUFvQztBQUN6QyxTQUFPLElBQUlGLE9BQUosQ0FBWUMsT0FBWixFQUFxQm5KLEtBQXJCLEVBQTRCb0osUUFBNUIsQ0FBUDtBQUNILENBRkQ7O0FBSUEsSUFBSVUsRUFBRSxHQUFHVCxFQUFFLENBQUMsSUFBRCxFQUFPO0FBQ2RkLElBQUUsRUFBRTtBQURVLENBQVAsRUFFUixDQUNDYyxFQUFFLENBQUMsSUFBRCxFQUFPO0FBQ0xVLE9BQUssRUFBRTtBQURGLENBQVAsRUFFQyxDQUFDLFFBQUQsQ0FGRCxDQURILEVBSUNWLEVBQUUsQ0FBQyxJQUFELEVBQU87QUFDTFUsT0FBSyxFQUFFO0FBREYsQ0FBUCxFQUVDLENBQUMsUUFBRCxDQUZELENBSkgsRUFPQ1YsRUFBRSxDQUFDLElBQUQsRUFBTztBQUNMVSxPQUFLLEVBQUU7QUFERixDQUFQLEVBRUMsQ0FBQyxRQUFELENBRkQsQ0FQSCxDQUZRLENBQVg7QUFhQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILEVBQVo7QUFDQSxJQUFJSSxNQUFNLEdBQUdKLEVBQUUsQ0FBQ0gsTUFBSCxFQUFiO0FBQ0FLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFaO0FBQ0FsRyxRQUFRLENBQUNtRyxJQUFULENBQWNOLFdBQWQsQ0FBMEJLLE1BQTFCLEU7Ozs7Ozs7Ozs7O0FDakRBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBbEosbUJBQU8sQ0FBQyx5Q0FBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGtDQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsb0NBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxvQ0FBRCxDQUFQLEM7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSxrQkFBa0Isa0MiLCJmaWxlIjoic3RhdGljL2pzL2xpc3QuOTQxZGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9saXN0LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgYXNjID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRZUEUsICRjcmVhdGUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICB2YXIgY3JlYXRlID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IElPYmplY3QoTyk7XG4gICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWwsIHJlcztcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgIGlmIChJU19NQVApIHJlc3VsdFtpbmRleF0gPSByZXM7ICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlcykgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWwpKSB7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xuIiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuNScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsXG4gICAgYXJnID8gbWV0aG9kLmNhbGwobnVsbCwgZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAxKSA6IG1ldGhvZC5jYWxsKG51bGwpO1xuICB9KTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMCk7XG52YXIgU1RSSUNUID0gcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLmZvckVhY2gsIHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFTVFJJQ1QsICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjEwIC8gMTUuNC40LjE4IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG4iLCJjbGFzcyBFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy50YWdOYW1lID0gdGFnTmFtZTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRhZ05hbWUpIC8vIOagueaNrnRhZ05hbWXmnoTlu7pcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BzKSB7IC8vIOiuvue9ruiKgueCueeahERPTeWxnuaAp1xuICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKHByb3BOYW1lLCBwcm9wVmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuIHx8IFtdXG5cbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZEVsID0gKGNoaWxkIGluc3RhbmNlb2YgRWxlbWVudCkgP1xuICAgICAgICAgICAgICAgIGNoaWxkLnJlbmRlcigpIC8vIOWmguaenOWtkOiKgueCueS5n+aYr+iZmuaLn0RPTe+8jOmAkuW9kuaehOW7ukRPTeiKgueCuVxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkgLy8g5aaC5p6c5a2X56ym5Liy77yM5Y+q5p6E5bu65paH5pys6IqC54K5XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChjaGlsZEVsKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBlbFxuICAgIH1cbn1cblxudmFyIGVsID0gZnVuY3Rpb24gKHRhZ05hbWUsIHByb3BzLCBjaGlsZHJlbikge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCh0YWdOYW1lLCBwcm9wcywgY2hpbGRyZW4pXG59XG5cbnZhciB1bCA9IGVsKCd1bCcsIHtcbiAgICBpZDogJ2xpc3QnXG59LCBbXG4gICAgZWwoJ2xpJywge1xuICAgICAgICBjbGFzczogJ2l0ZW0nXG4gICAgfSwgWydJdGVtIDEnXSksXG4gICAgZWwoJ2xpJywge1xuICAgICAgICBjbGFzczogJ2l0ZW0nXG4gICAgfSwgWydJdGVtIDInXSksXG4gICAgZWwoJ2xpJywge1xuICAgICAgICBjbGFzczogJ2l0ZW0nXG4gICAgfSwgWydJdGVtIDMnXSlcbl0pXG5jb25zb2xlLmxvZyh1bClcbnZhciB1bFJvb3QgPSB1bC5yZW5kZXIoKVxuY29uc29sZS5sb2codWxSb290KVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1bFJvb3QpIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsInJlcXVpcmUoJy4vVmlydHVhbERPTScpXG5yZXF1aXJlKCcuL2xpc3QuY3NzJylcbnJlcXVpcmUoJy4vc2Nzcy5zY3NzJylcbnJlcXVpcmUoJy4vbGVzcy5sZXNzJykiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwYWNrXCI6XCJfM0JvTWt5enpOVXlJU0c5UmxkV1FDU1wifTsiXSwic291cmNlUm9vdCI6IiJ9