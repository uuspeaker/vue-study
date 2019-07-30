<template>
  <div >
  <pageHead></pageHead>

  <template>
    <el-carousel :interval="3000" arrow="always" >
      <el-carousel-item v-for="carouselItem in carouselItems" :key="carouselItem">
        <el-image :src="carouselItem" @click="toCourseDetail"></el-image>
      </el-carousel-item>
    </el-carousel>
  </template>

<template>
  <el-row>
  <div style="float:left;font-size:20px;font-weight:bold">热门课程</div>
  </el-row>
<el-row>
  <el-col :span="8" v-for="course in courses" :key="course" >
    <div class="outline" @click="toCourseDetail">
      <div class="course-type orange-text" >{{course.courseType}}</div>
      <div class="course-title" >{{course.courseTitle}}</div>
    </div>
  </el-col>
  <el-col :span="8"><div class=""></div></el-col>
  <el-col :span="8"><div class=""></div></el-col>
</el-row>
</template>

</div>
</template>

<script>
import pageHead from '@/components/PageHead.vue'

export default {
  components: { pageHead },
  data () {
    return {
      carouselItems: [require('../../assets/carousel1.jpeg'),require('../../assets/carousel2.jpeg')],
      courses: [{courseType: "几何",courseTitle: "几何训练营"}],
    }
  },
  methods: {
    toCourseDetail() {this.$router.push({path: '/courseDetail',})},
  }
}
</script>
<style>
  .orange-text {
    color: #FF9800;
  }

  .outline {
    border-style: solid;
    border-width: 1px;
    border-color:lightgrey;
    border-radius:5px;
    width:280px;
    height:180px
  }
  .course-type {
    margin-top: 12px;
    border-style: solid;
    border-width: 1px;
    border-color:lightgrey;
    width: 30px;
    height: 15px;
    background-color: #F0F0F0;
    font-size: 1px;
  }
  .course-title {
    padding-top: 25px;
    padding-left: 0px;
    font-size: 18px;
    font-weight: bold;
  }
</style>
