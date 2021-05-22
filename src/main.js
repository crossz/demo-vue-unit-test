import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Util from './lib/util'
Vue.prototype.$axios = Util.ajax


new Vue({
  render: h => h(App),
}).$mount('#app')
