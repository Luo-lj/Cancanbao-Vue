// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store/index'

Vue.use(ElementUI)
Vue.config.productionTip = false
const storeInit = store(Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: storeInit,
  components: { App },
  template: '<App/>'
})