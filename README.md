# 前言

[Taro](https://taro.aotu.io/) 是一套遵循 [React](https://reactjs.org/) 语法规范的 **多端开发** 解决方案。现如今市面上端的形态多种多样，Web、React-Native、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。

使用 [Taro](https://taro.aotu.io/)，我们可以只书写一套代码，再通过 [Taro](https://taro.aotu.io/) 的编译工具，将源代码分别编译出可以在不同端（微信/百度/支付宝/字节跳动小程序、H5、React-Native 等）运行的代码。

该项目基于[Taro](https://taro.aotu.io/)，构建了一个demo。

# 项目运行

```

git clone git@github.com:TigerHee/taro-init.git

cd taro-init

# 全局安装taro脚手架
npm install -g @tarojs/cli
或
yarn global add @tarojs/cli

# 安装项目依赖
npm install
或
yarn


# 微信小程序
taro build --type weapp --watch

# 支付宝小程序
taro build --type alipay --watch

# 百度小程序
taro build --type swan --watch

# 字节跳动小程序
taro build --type tt --watch

# H5
taro build --type h5 --watch

# React Native
taro build --type rn --watch

(去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包)

```

# 目录结构


    ├── config                     // Taro配置目录
    ├── dist                       // 小程序编译结果目录
    │   ├── dev.js                 // 开发时配置
    │   ├── index.js               // 默认配置
    │   └── prod.js                // 打包时配置
    ├── src                        // 源码目录
    │   ├── components             // 组件
    │   ├── pages                  // 页面文件目录
    │   │   ├── index
    │   │   └── page2
    │   ├── redux                  // redux
    │   │   ├── actions
    │   │   ├── reducers
    │   │   └── store
    │   ├── servers                // 接口请求相关
    │   │   ├── api                // 请求方法封装改造
    │   │   ├── config             // BASE_URL获取
    │   │   ├── interceptors       // 请求拦截器
    │   │   └── servers            // 请求方法汇总
    │   ├── utils                  // 常用工具类
    │   ├── app.js                 // 入口文件
    │   └── index.html
    ├──  README.md
    └──  package.json