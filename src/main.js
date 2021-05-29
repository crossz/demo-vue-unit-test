import Vue from 'vue'

import VueRouter from 'vue-router';
// import router from './router'

import App from './App.vue'

Vue.config.productionTip = false


// import Util from './lib/util'
// Vue.prototype.$axios = Util.ajax


import axios from 'axios'
import VueAxios from 'vue-axios'
const $axios = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 50000
})
// # VueAxios of bonding axios to Vue.prototype
Vue.use(VueAxios, $axios)

console.log(Vue.axios)


// # Vue router
const routes = [
  {
    path: '/',
    redirect: '/foo',
  },
  {
    path: '/hello',
    name: 'hello',
    component: resolve => require(['@/components/Hello/Hello.vue'], resolve)
  },
  {
    path: '/foo',
    name: 'foo',
    component: resolve => require(['@/components/Foo/Foo.vue'], resolve)
  }
]
Vue.use(VueRouter)
const router = new VueRouter({routes})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
