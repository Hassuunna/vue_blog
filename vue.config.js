const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  //transpileDependencies: true,
  devServer: {
    proxy: "http://localhost:5000/",
  },
  pluginOptions: {
    vuetify: {
      //https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
  /*'^/api': {
    target: 'http://localhost:8080',
    changeOrigin: true, //enter code here
    secure: false,
    pathRewrite: {
      '^/api': '/api'
    },
    headers: {
      Connection: 'keep-alive'
    }
  },
  /*"^/api": { 
    "target": "http://localhost:5000", 
    "changeOrigin": true,
    "secure": false, 
    "pathRewrite": {
      "^/api": "/api"
    }, 
    "headers": {
      "Connection": "keep-alive"
    }
  },*/
});
