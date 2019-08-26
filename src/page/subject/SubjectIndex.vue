
<template>
  <div>
    <pageHead></pageHead>

    <el-container style="height: 500px; border: 1px solid #eee; margin-top:50px">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </el-aside>

  <el-container>
    <el-main>
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
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
  },
  methods: {
    toCourseRecord() {this.$router.push({path: '/courseRecord',})},
    toCourseOnline() {this.$router.push({path: '/courseOnline',})},
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
