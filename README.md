# fengyi
基于vue的一个应用，奉壹杂记（小程序同名）

小程序二维码：

![qrcode](http://imgs.wdcorner.cn/fenyi.jpg)

vue-cli版本从2.9.6变为3.10.0

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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 修改编译后(npm run build)文件名及路径

新建vue.config.js，添加配置：

```
publicPath: './',

// 将构建好的文件输出到哪里
outputDir: 'docs'
```