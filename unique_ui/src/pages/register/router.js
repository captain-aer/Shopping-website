import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from './views/register.vue'
import Index from '../index/App.vue'
import login from '../login/views/login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Register',
        component: Register
    },
    {
      path:'/index',
      name:'Index',
      component:Index
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
]

const router = new VueRouter({
  routes
})

export default router