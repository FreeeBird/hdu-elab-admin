# HDU-elab-antd

[HDU-elab-antd](https://github.com/ousc/HDU-elab-antd)是杭州电子科技大学基于JAVA+[ng-zorro-antd](https://github.com/NG-ZORRO/ng-zorro-antd)研发的机房预约系统。


## 快速开始
确保您的Node版本>= 8，NPM版本 >= 3。

```
git clone --depth 1 https://github.com/ousc/hdu-elab-antd

cd hdu-elab-antd

npm install
# cnpm install

npm start
```

## 环境介绍

- ng-zorro-antd@0.6 基于Ant Design 的 Angular^5.0.0 实现，开发和服务于企业级后台产品

## 更多文档
- angular5.0.0(https://angular.cn/guide/quickstart)
- NG-ZORRO(http://ng.ant.design)
- TypeScript(https://www.tslang.cn/docs/home.html)

## 文件架构

```bash
├── /e2e/            # Angular单元测试和e2e-testing
├── /src/            # 项目源码目录
│ ├── /app/          # webapp主目录
│    ├── /layout/    # 主界面UI组件及UI相关方法
│    ├── /components/# 其他组件及UI相关方法
│    ├── /core/      # 组件通讯
│    ├── /routes/    # 自定义页面区
│ ├── /environments/ # 环境配置文件
│ ├── /assets/       # 静态文件
│ └── index.html     
├── package.json     # 项目依赖信息
├── .karma.conf.js   # karma入口文件
└── .protractor.js   # protractor配置
```

## 截图
![截图1](https://github.com/ousc/HDU-elab-antd/raw/master/src/assets/1.png)


![截图2](https://github.com/ousc/HDU-elab-antd/raw/master/src/assets/2.png)


![截图3](https://github.com/ousc/HDU-elab-antd/raw/master/src/assets/3.png)


