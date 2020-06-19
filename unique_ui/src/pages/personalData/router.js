import Vue from 'vue'
import VueRouter from 'vue-router'
import personData from './views/personData.vue'
import Index from '../index/App.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'personData',
        component: personData
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