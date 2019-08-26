
<template>
  <div>
    <pageHead></pageHead>

    <el-container style="height: 500px; border: 1px solid #eee; margin-top:50px">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-tree
  :props="props"
  :load="loadNode"
  lazy
  show-checkbox>
</el-tree>
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
      props: {
        id: 4677,
        label: '初中数学',
        children: 'zones',
        isLeaf: false
      },
    };
  },
  methods: {
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'region' }]);
      }
      if (node.level > 1) return resolve([]);
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
