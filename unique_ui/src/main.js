import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/iconfonts/iconmenu_r/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import axios from 'axios'
import Distpicker from 'v-distpicker'
import VueResource from 'vue-resource'
import Popup from '../src/pages/myCollection/popup.js'

Vue.prototype.axios = axios
Vue.use(VueResource)
Vue.prototype.$popup = Popup.install

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('v-distpicker',Distpicker)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

