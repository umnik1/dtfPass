# ToolBox

## Introduction
Use Vue-cli4 and chrome-ext to build Chrome Extention
- **搭建环境**
    - 创建一个vue-cli4项目： vue create vue-extension，对话流程选择默认就行。
    - 进入项目cd vue-extension
    - 安装vue-cli-plugin-chrome-ext插件：vue add chrome-ext,根据安装对话选项设置好。
    - 删除vue-cli4无用文件跟文件夹：src/main.js，public、src/components
- **运行项目**
    - `npm run build-watch` 运行开发环境，对修改文件进行实时编译并自动在根目录下生成 `dist` 文件夹，然后在浏览器上加载 `dist` 文件夹完成插件安装。(注意：修改 `background` 文件跟 `manifest.json` 文件并不能实时刷新代码，需要重新加载插件才行—这里通过在浏览器扩展程序点击刷新按钮就可以重新加载插件代码)
    - npm run build 运行生产环境编译打包，将所有文件进行整合打包
- **项目目录介绍**
    - api #存放http交互文件
    - assets # images/css等文件
    - content # 针对在manifest.development.json中content_scripts匹配到的url才进行处理的文件
    - libs # 存放utils等文件
    - options # 原生文件，目前还没有使用过，暂时保持原样
    - pages # 存放着popup/App/App.vue直接引用的页面组件
    - popup # 被manifest直接调用的文件
    - router # vue-cli生成文件，未使用
    - store  # vue-cli生成文件，未使用
    - views # vue-cli生成文件，未使用
    - App.vue  # vue-cli生成文件，未使用
    - manifest.json # 入口文件

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
