import Vue from 'vue'
import VueRouter from 'vue-router'
import goodsortList from './views/goodsortList.vue'
import Index from '../index/App.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'goodsortList',
        component: goodsortList
    },
    {
      path:'/index',
      name:'Index',
      component:Index
    }
]

const router = new VueRouter({
  routes
})

export default router