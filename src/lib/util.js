import Vue from 'vue'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import router from '../router'
// import Qs from 'qs'
Vue.use(VueCookies)

// axios.defaults.withCredentials = true;

let util = {

}

// 本地调试接口
// const ajaxUrl = 'http://192.168.5.123:8083'
// 线上
// const ajaxUrl = 'http://150.109.37.253:6179'
const ajaxUrl = 'https://api.github.com'

util.ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 50000
})

// 请求前对数据做处理
// util.ajax.defaults.transformRequest = [function (data) {
// // 依自己的需求对请求数据进行处理
// return Qs.stringify(data, { arrayFormat: 'indices' })
// }]
// 请求发送之前做一些事情
util.ajax.interceptors.request.use(
  config => {
    if (VueCookies.get('token')) {
      // 判断cookie里是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Token = VueCookies.get('token')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// 添加一个返回拦截器
util.ajax.interceptors.response.use(response => {
  if (response.data.code == '985') {
    VueCookies.remove('token');
    VueCookies.remove('userAccountInfo');
    VueCookies.remove('user_tabName');
    router.push('/');
  }
  return response
},
  err => {
    console.log(err)
    return Promise.reject(err)
  });

export default util
