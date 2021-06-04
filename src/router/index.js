import Vue from 'vue'
import Router from 'vue-router'
import Dafault from '@/layout/default'
import Home from '@/page/home'
import Blank from '@/layout/blank'
import ChangeCity from '@/page/changeCity'
import Products from '@/page/products'
import Login from '@/page/login'
import Register from '@/page/register'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'default',
      component: Dafault,
      children: [{
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      }, {
        path: 's/:name',
        name: 'products',
        component: Products
      }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: Blank,
      children: [{
        path: 'login',
        name: 'login',
        component: Login
      }, {
        path: 'register',
        name: 'register',
        component: Register
      }]
    }
  ]
})
