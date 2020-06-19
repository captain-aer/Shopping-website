import Vue from 'vue'
import VueRouter from 'vue-router'
import shoppingCart from './views/shoppingCart.vue'
import Index from '../index/App.vue'
import Pay from '../placeOrder/views/placeOrder.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'shoppingCart',
        component: shoppingCart
    },
    {
      path:'/index',
      name:'Index',
      component:Index
    },
    {
      path:'/pay',
      name:'Pay',
      component:Pay
    }
]

const router = new VueRouter({
  routes
})

export default router