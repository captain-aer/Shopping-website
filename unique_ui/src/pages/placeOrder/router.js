import Vue from 'vue'
import VueRouter from 'vue-router'
import placeOrder from './views/placeOrder.vue'
import Index from '../index/App.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'placeOrder',
        component: placeOrder
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