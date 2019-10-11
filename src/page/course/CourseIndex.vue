
<template>
  <div>
    <pageHead></pageHead>

    <el-container style="height: 500px; border: 1px solid #eee; margin-top:50px">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1" >
        <template slot="title" ><i class="el-icon-message"></i>课程中心</template>
        <el-menu-item-group class="leftTitle2">
            <el-menu-item index="1-1">我的课程</el-menu-item>
            <el-menu-item index="1-2">我的课表</el-menu-item>
            <el-menu-item index="1-3">直播助手</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>订单中心</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">我的订单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>资金管理</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">我的钱包</el-menu-item>
          <el-menu-item index="3-2">我的优惠券</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-setting"></i>个人中心</template>
        <el-menu-item-group>
          <el-menu-item index="4-1">账户设置</el-menu-item>
          <el-menu-item index="4-2">我的评价</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <el-main>
      <el-image :src="src1"  fit="fill" @click="toCourseTeacher"></el-image>
      <el-image :src="src1"  fit="fill" @click="toCourseStudent"></el-image>
      <el-image :src="src1"  fit="fill" @click="toCourseOnline"></el-image>
      <el-image :src="src2"  fit="fill" @click="toCourseRecord"></el-image>
    </el-main>
  </el-container>
</el-container>


  </div>
</template>

<script>
import pageHead from '@/components/PageHead.vue'

export default {
  components: { pageHead },
  data() {
      return {
        src1: require('../../assets/myCourse1.png'),
        src2: require('../../assets/myCourse2.png'),
      }
  },
  methods: {
    toCourseRecord() {this.$router.push({path: '/courseRecord',})},
    toCourseOnline() {this.$router.push({path: '/courseOnline',})},
    toCourseTeacher() {this.$router.push({path: '/courseTeacher',})},
    toCourseStudent() {this.$router.push({path: '/courseStudent',})},
  }
}
</script>
<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .leftTitle1 {
    font-size: 18px;
    font-weight: bold;
  }
</style>
