// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCropper from 'vue-cropper'
import axios from "axios";
import qs from 'qs'

//设置baseURL
// axios.defaults.baseURL = 'http://localhost';
axios.defaults.baseURL = 'http://129.211.21.250';
//请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(VueCropper)
Vue.use(ElementUI)
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
