import Vue from 'vue'
import VueRouter from 'vue-router'
import myCollection from './views/myCollection.vue'
import Index from '../index/App.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'myCollection',
        component: myCollection
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