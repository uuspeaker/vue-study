import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/main/Index'
import Head from '@/page/main/Head'
import Pic from '@/page/main/Pic'
import Cropper from '@/page/exercise/Cropper'
import Cropper2 from '@/page/exercise/Cropper2'
import ScanExercise from '@/page/exercise/ScanExercise'
import CourseIndex from '@/page/course/CourseIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/1', name: 'HelloWorld', component: HelloWorld},
    {path: '/', name: 'Index', component: Index},
    {path: '/head', name: 'Head', component: Head},
    {path: '/cropper', name: 'Cropper', component: Cropper},
    {path: '/cropper2', name: 'Cropper2', component: Cropper2},
    {path: '/scanExercise', name: 'ScanExercise', component: ScanExercise},
    {path: '/courseIndex', name: 'CourseIndex', component: CourseIndex},
    {path: '/pic', name: 'Pic', component: Pic}
  ]
})
