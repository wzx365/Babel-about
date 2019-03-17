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