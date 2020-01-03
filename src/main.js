import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-axios-bbcbe.firebaseio.com'
// axios.defaults.headers.common['Authorization'] ='testTokenxyxyxyx'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  // console.log('config', config)
  return config // always return ! similar to middleware
})

const resInterceptor = axios.interceptors.response.use(res => {
  // console.log('res',res)
  return res
})

// axios.interceptors.request.eject(resInterceptor)
// axios.interceptors.request.eject(reqInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
