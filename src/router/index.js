import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('../pages/tabBar/index/index');
const fenlei = () => import('../pages/tabBar/fenlei/fenlei');
const look = () => import('../pages/tabBar/look/look');
const my = () => import('../pages/tabBar/my/my');

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
    }
  ]
})
