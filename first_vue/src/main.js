// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Hello from './components/HelloWorld'
import Index from './components/Index'
import User from './components/User'
import VueResource from 'vue-resource'
// import axios from './axiosConfig/axios'
// import TableGrid from './components/TableGrid'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.prototype.host='/consumer'
// Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,Hello,Index,User},
  /*methods:{
    ajaxGet:function (url) {
      Axios.get(url).then(function (res) {
        console.log(res.data)
      },function () {
        console.log("失败")
      });
    }
  },*/
  meta: {
    title:"欢迎首页",
    content: 'welcome'
  },
  // template: '<Hello/>',
  // template: '<Index/>',
  template: '<App/>'
})
