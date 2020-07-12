import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标
import './assets/font/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

import axios from 'axios'
// 配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 配置请求头字段 axios request请求拦截器，优先调用这个回调函数，对请求做  {预处理}
//  config是请求的对象
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 必须return config
  return config
})
Vue.prototype.$http = axios // 挂载到运行对象

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
