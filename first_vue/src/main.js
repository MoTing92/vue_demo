// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Index from './components/Index'
// import Hello from './components/HelloWorld'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  meta: {
    title:"欢迎首页",
    content: 'welcome'
  },
  template: '<App/>'
})
