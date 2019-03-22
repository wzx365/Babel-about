"use strict";

function factorial(n) {
  function handle(n, res) {
    if (n < 2) {
      return res;
    }

    return handle(n - 1, n * res);
  }

  return handle(n, 1);
}

var f5 = factorial(5);
console.log(f5);