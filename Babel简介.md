# Babel

## Babel 

> Babel是一个JavaScript编译器
Babel是一个`工具链`，主要用于把es2015+源代码转换成向后兼容的当前浏览器、旧版本浏览器或环境都支持的代码。
下面是Babel主要能做的事情：
- 转换语法
- 为目前环境确实的API提供垫片(polyfill)功能(通过babel-polyfill或者@babel/polyfill)
- 源代码转换
- 更多请见[这些视频](https://babeljs.io/videos.html)
```
// Babel Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

### ES2015+
最新的`@babel/preset-env` 旧的 `babel-preset-env`

### JSX and React
最新的`@babel/preset-react`  旧的`babel-preset-react`  

### 类型注释(Flow、 TypeScript)
`@babel/preset-flow`

```
// @flow
function square(n: number): number {
  return n * n;
}
```

`@babel/preset-typescript`
```
function Greeter(greeting: string) {
    this.greeting = greeting;
}
```

### 可插拔的(Pluggable)
Babel是由插件构建的，使用现有插件构建自己的转换管道或编写自己的转换管道。通过使用或创建预设轻松使用一组插件。
使用[astexplorer.net](https://astexplorer.net/)动态创建插件或使用`generator-babel-plugin`生成插件模板。
```
// A plugin is just a function
export default function ({types: t}) {
  return {
    visitor: {
      Identifier(path) {
        let name = path.node.name; // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name.split('').reverse().join('');
      }
    }
  };
}
```

### 可调试的（Debuggable）
源代码映射支持，因此您可以轻松调试编译的代码。

### 规范的
Babel试图尽可能地遵守ECMAScript标准。它也可能有特定的选项，以更符合规范作为性能的权衡。

### 紧凑
Babel尝试使用尽可能少的代码，而不依赖于庞大的运行时。
在某些情况下这可能很难做到，并且对特定的转换存在“松散”选项，可能会因可读性，文件大小和速度而牺牲规范性。

