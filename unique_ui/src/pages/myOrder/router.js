import Vue from 'vue'
import VueRouter from 'vue-router'
import myOrder from './views/myOrder.vue'
import Index from '../index/App.vue'
import address from '../personalData/components/addressList.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'myOrder',
        component: myOrder
    },
    {
      path:'/index',
      name:'Index',
      component:Index
    },
    {
      path:'/address',
      name:'address',
      component:address
    }
]

const router = new VueRouter({
  routes
})

export default router