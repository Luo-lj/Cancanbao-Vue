import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('../pages/index/index');
const fenlei = () => import('../pages/fenlei/fenlei');
const look = () => import('../pages/look/look');
const my = () => import('../pages/my/my');
const list = () => import('../pages/list/list');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei
    },{
      path: '/look',
      name: 'look',
      component: look
    },{
      path: '/my',
      name: 'my',
      component: my
    },{
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
