const webpack = require('webpack')
// const glob = require('glob')

// function getEntry(url) {
//   let entrys = {}
//   glob.sync(url).forEach(item => {
//     // splice(-3)取数组后三项
//     let urlArr = item.split('/').splice(-3)
//     entrys[urlArr[1]] = {
//       entry: 'src/pages/' + urlArr[1] + '/' + 'index.js',
//       template: 'src/pages/' + urlArr[1] + '/' + 'index.html',
//       filename: urlArr[1] + '.html',
//       title: 'pages-' + urlArr[1]
//     }
//   })
//   return entrys
// }
// let pages = getEntry('./src/pages/**?/*.html')

module.exports = {
  pages:{
    index:{
      entry:"./src/pages/index/index.js",//配置入口js文件
      template:"./src/pages/index/index.html",//主页面
      filename:"index.html",//打包后的html文件名称
      title:"绝(UNI.com)-首页"
    },
    login:{
      entry:"./src/pages/login/index.js",//配置入口js文件
      template:"./src/pages/login/index.html",//主页面
      filename:"login.html",//打包后的html文件名称
      title:"绝(UNI.com)-用户登录"
    },
    register:{
      entry:"./src/pages/register/index.js",//配置入口js文件
      template:"./src/pages/register/index.html",//主页面
      filename:"register.html",//打包后的html文件名称
      title:"绝(UNI.com)-用户注册"
    },
    goodsort:{
      entry:"./src/pages/goodSort/index.js",//配置入口js文件
      template:"./src/pages/goodSort/index.html",//主页面
      filename:"goodsort.html",//打包后的html文件名称
      title:"绝(UNI.com)-商品分类"
    },
    goodsortList:{
      entry:"./src/pages/goodsortList/index.js",//配置入口js文件
      template:"./src/pages/goodsortList/index.html",//主页面
      filename:"goodsortList.html",//打包后的html文件名称
      title:"绝(UNI.com)-商品分类详情"
    },
    goodsDetails:{
      entry:"./src/pages/goodsDetails/index.js",//配置入口js文件
      template:"./src/pages/goodsDetails/index.html",//主页面
      filename:"goodsDetails.html",//打包后的html文件名称
      title:"绝(UNI.com)-商品详情"
    },
    personalData:{
      entry:"./src/pages/personalData/index.js",//配置入口js文件
      template:"./src/pages/personalData/index.html",//主页面
      filename:"personalData.html",//打包后的html文件名称
      title:"绝(UNI.com)-个人资料页面"
    },
    shoppingCart:{
      entry:"./src/pages/shoppingCart/index.js",//配置入口js文件
      template:"./src/pages/shoppingCart/index.html",//主页面
      filename:"shoppingCart.html",//打包后的html文件名称
      title:"绝(UNI.com)-我的购物车"
    },
    myOrder:{
      entry:"./src/pages/myOrder/index.js",//配置入口js文件
      template:"./src/pages/myOrder/index.html",//主页面
      filename:"myOrder.html",//打包后的html文件名称
      title:"绝(UNI.com)-我的订单"
    },    
    myCollection:{
      entry:"./src/pages/myCollection/index.js",//配置入口js文件
      template:"./src/pages/myCollection/index.html",//主页面
      filename:"myCollection.html",//打包后的html文件名称
      title:"绝(UNI.com)-我的收藏夹"
    },
    placeOrder:{
      entry:"./src/pages/placeOrder/index.js",//配置入口js文件
      template:"./src/pages/placeOrder/index.html",//主页面
      filename:"placeOrder.html",//打包后的html文件名称
      title:"绝(UNI.com)-提交订单"
    },
  },
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
  },
  devServer: {
    port:8080,
    host:'localhost',
    https:false,
    open:false,
    proxy: {
      '/api': {
        target: 'http://localhost:80',//设置调用的接口域名和端口号
        changeOrigin: true,//允许跨域
        pathRewrite: {
          '^/api': ''//用‘/api’代替target里面的地址，后面组件调用接口时用/api代替
        }
      }
    }
  }
}