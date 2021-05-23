import Vue from 'vue'
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


new Vue({
  render: h => h(App),
}).$mount('#app')
