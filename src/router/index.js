import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import list from '@/components/list'
import table from '@/components/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/list',
      name: 'list',
      component: list
    },{
      path: '/table',
      name: 'table',
      component: table
    }
  ]
})
