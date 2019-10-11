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
import CourseDetail from '@/page/course/CourseDetail'
import CourseRecord from '@/page/course/CourseRecord'
import CourseOnline from '@/page/course/CourseOnline/CourseOnline'
import CourseTeacher from '@/page/course/CourseTeacher'
import CourseStudent from '@/page/course/CourseStudent'
import BrainIndex from '@/page/brain/BrainIndex'
import SubjectIndex from '@/page/subject/SubjectIndex'
import SubjectGroupIndex from '@/page/subject/SubjectGroupIndex'

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
    {path: '/subjectIndex', name: 'SubjectIndex', component: SubjectIndex},
    {path: '/subjectGroupIndex', name: 'SubjectGroupIndex', component: SubjectGroupIndex},
    {path: '/courseIndex', name: 'CourseIndex', component: CourseIndex},
    {path: '/courseDetail', name: 'CourseDetail', component: CourseDetail},
    {path: '/courseRecord', name: 'CourseRecord', component: CourseRecord},
    {path: '/courseOnline', name: 'CourseOnline', component: CourseOnline},
    {path: '/courseTeacher', name: 'CourseTeacher', component: CourseTeacher},
    {path: '/courseStudent', name: 'CourseStudent', component: CourseStudent},
    {path: '/brainIndex', name: 'BrainIndex', component: BrainIndex},
    {path: '/pic', name: 'Pic', component: Pic}
  ]
})
