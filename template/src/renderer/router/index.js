import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { layout: 'default' },
      component: Home
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
