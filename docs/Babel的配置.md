# 配置Babel
Babel是可以配置的。与许多其他的工具类似，如：ESLint(.eslintrc)、Prettier(.prettierrc)。

所有Babel的api选项都是支持的。然而，如果配置项需要用到js，则需要创建一个js配置文件`babel.config.js`

## 你的应用场景是什么？

- 你需要编程式的创建配置文件吗？
- 你需要编译node_modules吗？

那么`babel.confign.js`适合你

- 你的静态配置文件仅仅是用于编译单个包？

`.babelrc`适合你

> **我们推荐使用`babel.config.js`, Babel自身也在使用它。**

## babel.config.js

1. 在项目根目录下创建babel.config.js
```
module.exports = function (api) {
  api.cache(true);

  const presets = [ ... ];
  const plugins = [ ... ];

  return {
    presets,
    plugins
  };
}
```

2. .babelrc
```
{
  "presets": [...],
  "plugins": [...]
}
```
3. package.json

```
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    "presets": [ ... ],
    "plugins": [ ... ],
  }
}
```

4. .babelrc.js
和.babelrc一样，但是可以使用js
```
const presets = [ ... ];
const plugins = [ ... ];

module.exports = { presets, plugins };
```
可以使用nodejs的api
```
const presets = [ ... ];
const plugins = [ ... ];

if (process.env["ENV"] === "prod") {
  plugins.push(...);
}

module.exports = { presets, plugins };
```
