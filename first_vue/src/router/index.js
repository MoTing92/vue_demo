import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      meta: {
        title:"欢迎首页",
        content: 'welcome'
      },
      component: HelloWorld
    },{
      path: '/index',
      name: 'Index',
      meta: {
        title:"首页",
        content: 'welcome'
      },
      component: Index
    }
  ]
})
