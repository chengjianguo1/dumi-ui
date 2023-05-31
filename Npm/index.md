---
nav:
  title: npm
  path: /npm
  # order: 1
group:
  path: /npm
  title: npm
  order: 1
---

## npm 知识体系

npm config set init-module ./npm-init.js

init-module: 当运行 npm init 时，加载并运行的模块

bin

```json
 "bin": {
    "vm2": "./bin/vm2"
},

```

`bin` 字段指定了各个内部命令对应的可执行文件的位置。如果全局安装模块报，`npm` 会使用符号链接把可执行文件链接到 `/usr/local/bin`，如果项目中安装，会链接到 `./node_modules/.bin/`。

上面的这种当你的包安装到全局时：`npm` 会在 `/usr/local/bin` 下创建一个以 `vm2` 为名字的软链接，指向全局安装下来的 vm2 包下面的 "./bin/index.js"。这时你在命令行执行 `vm2` 则会调用链接到的这个 `js` 文件。
