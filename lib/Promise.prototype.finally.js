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