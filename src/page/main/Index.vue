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
  <div style="float:left;font-size:20px;font-weight:bold" @click="getData">热门课程{{ test }}</div>
  </el-row>
<el-row>
  <el-col :span="8" v-for="course in courses" :key="course.id" >
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
      courses: [{id: 1, courseType: "几何", courseTitle: "几何训练营1"}],
      test: "old"
    }
  },
  methods: {
    toCourseDetail() {this.$router.push({path: '/courseDetail',})},
    getData() {
      this.$notify({
          title: '进入成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      this.$axios({
        method: 'post',
        url: '/users'
      }).then((response) => {
        this.$message('正常返回');
        console.log(response)
        this.test = response.data
      }).catch( (error) => {
        this.$message.error('异常');
        console.log(error)
      })
      //this.$message('结束方法');
  }

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
