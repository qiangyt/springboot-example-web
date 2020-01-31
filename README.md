## Build Setup


```bash
# clone the project
git clone https://github.com/qiangyt/springboot-example-web.git

# enter the project directory
cd springboot-example-web

# optional for developers from China
# npm config set sass_binary_site http://npm.taobao.org/mirrors/node-sass/ 

# install dependency
npm install

# develop
npm run dev
```

## Build

```bash
# build for test environment
npm run build:stage

# build for production environment
npm run build:prod
```

## Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix
```

## License

[MIT](https://github.com/PanJiaChen/vue-admin-template/blob/master/LICENSE) license.

Copyright (c) 2020-present Yiting Qiang
