let sum = (a, b) => a + b;
let upper = str => str.toUpperCase();
let result = upper(sum('a', 'b'));
console.log(result);

let compose1 = function (...fns) {
    return function (...args) {
        return fns.reduce((f1, f2) => {
            return f2(f1(...args))
        })
    }
}

let compose2 = (...fns) => (...args) => fns.reduce((f1, f2) => f2(f1(...args)))

let compose3 = (...fns) => (...args) => fns.reduce((f1, f2) => f1(f2(...args)))

let res = compose1(sum, upper)('a', 'b');

console.log(res)

console.log(compose2(sum, upper)('cc', 'dd'))

console.log(compose3(sum, upper)('xx', 'yy'))