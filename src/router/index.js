import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/main/Index'
import Head from '@/page/main/Head'
import Pic from '@/page/main/Pic'
import Cropper from '@/page/exercise/Cropper'
import Cropper2 from '@/page/exercise/Cropper2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/1', name: 'HelloWorld', component: HelloWorld},
    {path: '/', name: 'Index', component: Index},
    {path: '/head', name: 'Head', component: Head},
    {path: '/cropper', name: 'Cropper', component: Cropper},
    {path: '/cropper2', name: 'Cropper2', component: Cropper2},
    {path: '/pic', name: 'Pic', component: Pic}
  ]
})
