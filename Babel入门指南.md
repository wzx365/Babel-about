# Babel的使用
无论您是“最终用户”还是构建Babel本身的集成，Babel工具链中有很多工具可以让您轻松使用Babel。下面是对这些工具的快速介绍，您可以在文档的“使用”部分中阅读有关它们的更多信息。

> 如果您正在使用框架，配置Babel的工作可能会有所不同或实际上已经为您处理。请查看我们的[交互式设置指南](https://babeljs.io/setup.html)。

## 概括
本指南将向您展示如何将使用ES2015 +语法的JavaScript应用程序代码编译为适用于当前浏览器的代码。这将涉及转换新语法和填充缺失的功能。
整个设置流程包括：
1. 安装所需的包
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

2. 在项目根目录下创建babel.config.js文件，并设置一下内容。
```
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
```
>上面的浏览器列表只是一个随意的例子。您必须根据要支持的浏览器进行调整。

3. 运行此命令将所有代码从src目录编译为lib：
```
./node_modules/.bin/babel src --out-dir lib
```
> 你可以使用npm@5.2.0附带的npm包运行器通过用`npx babel`替换`./node_modules/.bin/babel`来缩短该命令。

**继续阅读，了解其工作原理的逐步说明以及对所使用的每种工具的介绍。**

## CLI的基本用法
> 您需要的所有Babel模块都作为单独的npm包发布在`@babel`（从`版本7开始`）命名空间下。这种模块化设计允许各种工具，每个工具都针对特定用例进行设计。在这里，我们将看看`@babel/core`和`@babel/cli`

## 核心库 core
Babel的核心功能在于`@babel/core`模块。安装：
```
npm install --save-dev @babel/core
```

您可以直接在JavaScript程序中引用它并像这样使用它：
```
const babel = require("@babel/core");
babel.transform("code", optionsObject);
```
但作为最终用户，您可能希望安装其他工具作为@babel/core的接口，并与您的开发过程很好地集成。即便如此，您仍可能需要查看其文档页面以了解这些选项，其中大部分选项也可以通过其他工具进行设置。

## CLI工具
@babel/cli is a tool that allows you to use babel from the terminal. Here's the installation command and a basic usage example:
```
npm install --save-dev @babel/core @babel/cli

./node_modules/.bin/babel src --out-dir lib
```
这将解析src目录中的所有JavaScript文件，应用我们告诉它的任何转换，并将每个文件输出到lib目录。由于我们还没有告诉它应用任何转换，输出代码将与输入相同（不保留精确的代码样式）。我们可以通过将它们作为选项传递来指定我们想要的转换。我们使用了上面的--out-dir选项。您可以通过使用--help运行它来查看cli工具接受的其余选项。但对我们来说最重要的是--plugins和--presets。

## 插件和预设（Plugins & Presets）
转换以插件的形式出现，插件是小型JavaScript程序，它指示Babel如何对代码进行转换。您甚至可以编写自己的插件来应用您想要的任何代码转换。要将ES2015 +语法转换为ES5，我们可以依赖官方插件，如@babel/plugin-transform-arrow-functions：
```
npm install --save-dev @babel/plugin-transform-arrow-functions

./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```
现在我们代码中的任何箭头函数都将转换为ES5兼容函数表达式：
```
const fn = () => 1;

// converted to

var fn = function fn() {
  return 1;
};
```
> 这是一个好的开始！但是我们的代码中还有其他ES2015 +功能，我们想要转换。我们可以使用“预设”，而不是逐一添加我们想要的所有插件，而这只是一组预先确定的插件。就像使用插件一样，您也可以创建自己的预设，以共享您需要的任何插件组合。对于我们这里的用例，有一个名为`env`的优秀预设。
```
npm install --save-dev @babel/preset-env

./node_modules/.bin/babel src --out-dir lib --presets=@babel/env
```
没有任何配置，此预设将包括支持现代JavaScript（ES2015，ES2016等）的所有插件。但是预设也可以选择。我们不是从终端传递cli和预设选项，而是看另一种传递选项的方式：配置文件。

## 配置 Configuration
> 根据您的需要，有几种不同的方法可以使用配置文件。请务必阅读有关如何配置Babel的深入指南以获取更多信息。
现在，让我们创建一个名为babel.config.js的文件，其中包含以下内容：
```
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
    },
  ],
];

module.exports = { presets };
```
现在，env预设将仅加载我们的目标浏览器中不可用的功能的转换插件。我们都准备好了语法。我们接下来看看polyfills。

## 填充工具(垫片) polyfill
`@babel/polyfill`模块包括core-js和自定义再生器运行时，以模拟完整的ES2015+环境。

这意味着您可以使用新的内置函数（如Promise或WeakMap），静态方法（如Array.from或Object.assign），实例方法（如Array.prototype.includes）和生成器函数（假设您使用的是再生器插件）。为了做到这一点，polyfill添加到全局范围以及像String这样的原生原型。

对于库/工具作者来说，这可能太多了。如果您不需要Array.prototype.includes等实例方法，则可以使用transform runtime插件而不是@babel/polyfill完全污染全局范围。

更进一步，如果您确切知道需要填充的功能，可以直接从core-js中获取它们。

我们正在构建一个应用程序，我们可以安装@babel/polyfill
```
npm install --save @babel/polyfill
```
> 请注意--save选项而不是--save-dev，以启示这是一个需要在源代码之前运行的polyfill。
幸运的是，我们正在使用具有“useBuiltIns”选项的env预设，当设置为“usage”时，实际上将应用上面提到的最后一个优化，其中只包含您需要的polyfill。使用此新选项，配置更改如下：
```
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
```
> Babel现在将检查您的所有代码，以查找目标环境中缺少的功能，并仅包含所需的polyfill。例如这段代码：
```
Promise.resolve().finally();
```
将会转换为下面这样（因为Edge17没有Promise.prototype.finally）：
```
require("core-js/modules/es.promise.finally");

Promise.resolve().finally();
```
如果我们没有使用env预设并将“useBuiltIns”选项设置为“usage”，那么我们必须在任何其他代码之前的入口点中引用完整的polyfill一次。

## 总结
我们使用@babel/cli从终端运行Babel，使用@babel/polyfill来填充所有新的JavaScript功能，使用env预设仅包含我们的环境需要的和目标浏览器中缺失的转换和polyfill垫片。
有关使用构建系统，IDE等设置Babel的更多信息，请查看我们的[交互式设置指南](https://babeljs.io/setup.html)。

