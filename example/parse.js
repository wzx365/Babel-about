const fs = require('fs')
const path = require('path')
const babelParser = require('@babel/parser')

let code = fs.readFileSync(path.resolve(__dirname, '../src/es6.js'), 'utf8')

babelParser.parse(code, {
    sourceType: 'module'
}, (...args) => console.log(...args))

console.log(code)