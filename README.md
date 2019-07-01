# 苗小二的WebView

## 业绩排行和客户简报

## 开发架构

### 技术：
```bash
umi:'^2.1.1'
bizgoblin:'0.0.6'
```
### 目录结构
```bash
├── /dist/              # 项目输出目录
├── /public/            # 公共文件，编译时copy至dist目录
├── /src/               # 项目源码目录
│ ├── /components/      # UI组件及UI相关方法
│ ├── /layouts/         # 全局组件
│ │ └── app.js          # 页面入口
│ │ └── index.js        # 入口文件
│ ├── /models/          # 数据模型
│ ├── /services/        # 数据接口
│ ├── /utils/           # 工具函数
│ │ ├── money.js        # 对业绩排行的价格处理
│ │ └── request.js      # 异步请求函数(axios)
├── package.json        # 项目信息
└── .umirc.js           # umi配置
```
### 快速开发
克隆项目文件:

```bash
git clone 
```
进入目录安装依赖:

```bash
npm i 或者 yarn install
```
开发：

```bash
yarn start
打开 http://localhost:9000 #端口在.env中加上 PORT=9000指定
```
打包：
```bash
yarn build
打包后的目录结构：
├── /dist/              # 项目输出目录
│ ├── /img/             # 静态资源
│ ├── /static/          # css引用的静态资源
│ ├── index.html        # 打包后的html
│ ├── umi.css           # 打包后的css
│ ├── umi.js            # 打包后的js
```