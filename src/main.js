import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import VueRouter from 'vue-router'
import routerConfig from './routers'
import store from './store'
import resourceGlobalSet from './resource_set'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Element)
Vue.use(require('vue-moment'))

const router = new VueRouter({routes: routerConfig})

Vue.http.interceptors.push(resourceGlobalSet) // ajax 拦截

/* eslint-disable no-new */
new Vue({
	router,
	store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
