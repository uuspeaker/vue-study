<template>
  <div >
  <template>

  <el-row :gutter="20">
    <el-col :span="5">
      <div>
        <el-image style="width:100px;heiht:100px;padding-left:30px" :src="logoUrl"></el-image>
      </div>
    </el-col>
    <el-col :span="2">
      <div class="">首页</div>
      <div class="">HOME </div>
    </el-col>
    <el-col :span="3">
      <div class="">了解我们</div>
      <div class="">ABOUT US</div>
    </el-col>
    <el-col :span="8">
      <el-input v-model="input" width="100px" placeholder="搜索您您感兴趣的内容" style="border-radius:30px;padding-left:80px"></el-input>
    </el-col>
    <el-col :span="5"><div class="orange-text" style="font-size:18px;float:right;padding-top:10px">登陆/注册</div></el-col>
  </el-row>
</template>

<template>
  <div style="padding-left:30px;padding-right:30px;">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
  <el-menu-item index="1" class="menu">数学天地</el-menu-item>
  <el-menu-item index="2" class="menu">精品辅导</el-menu-item>
  <el-menu-item index="3" class="menu">课程秒杀</el-menu-item>
  <el-menu-item index="4" class="menu">脑力训练</el-menu-item>
  <el-menu-item index="5" class="menu">我的课程</el-menu-item>
  <el-menu-item index="6" class="menu" v-on:click="scanExercise">扫描练习</el-menu-item>
</el-menu>
<div class="line"></div>
</div>
</template>

<template>
  <el-carousel :interval="3000" arrow="always">
    <el-carousel-item v-for="carouselItem in carouselItems" :key="carouselItem">
      <el-image :src="carouselItem"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

</div>
</template>

<script>
export default {
  data () {
    return {
      exampleUrl: require('../assets/top.png'),
      logoUrl: require('../assets/logo-study.png'),

      activeIndex: '1',
      activeIndex2: '1',

      carouselItems: [require('../assets/carousel1.jpeg'),require('../assets/carousel2.jpeg')],
      courses: [{courseType: "几何",courseTitle: "几何训练营"}]
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      scanExercise() {
        this.$router.push({
          path: '/scanExercise',
        })
      }
    }
}
</script>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .logo {
    font-size: 30px;
    font-family: sans-serif;
  }
  .menu {
    font-size: 20px;
    font-weight: bold;
  }
  .orange-text {
    color: #FF9800;
  }

  //跑马灯
  .el-carousel__item:nth-child(2n+1) {

  }

</style>
