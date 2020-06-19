import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/login.vue'
import Index from '../index/views/index.vue'
import Register from '../register/views/register.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
      path:'/index',
      name:'Index',
      component:Index
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    }
]

const router = new VueRouter({
  routes
})

export default router