import Vue from 'vue'
import VueRouter from 'vue-router'
import goodsDetails from './views/goodsDetails.vue'
import Index from '../index/App.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'goodsDetails',
        component: goodsDetails
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