import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/main/Index'
import Head from '@/page/main/Head'
import Pic from '@/page/main/Pic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/1', name: 'HelloWorld', component: HelloWorld},
    {path: '/', name: 'Index', component: Index},
    {path: '/head', name: 'Head', component: Head}
    {path: '/pic', name: 'Pic', component: Pic}
  ]
})
