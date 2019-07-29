
<template>
  <div>
    <pageHead></pageHead>

    <el-container style="height: 500px; border: 1px solid #eee">
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
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
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
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
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
