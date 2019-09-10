
<template>
  <div>
    <pageHead></pageHead>

    <el-container style="height: 500px; border: 1px solid #eee; margin-top:50px">
  <el-aside width="250px" >
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </el-aside>

  <el-container>

    <el-main>

        <el-row v-for="subject in subjectList" >
          <el-row>
          <div v-for="item in subject.questionContent" style="float:left">
            <div v-if="item.startsWith('http://')">
              <el-image :src="item" ></el-image>
            </div>
            <div v-else>{{item}}</div>
          </div></el-row>

          <el-row style="float:left;">
            <span style="margin-right:40px">难度系数:{{subject.questionLevel}}</span>题型：{{subject.questionType}}


          </el-row>
          <el-button @click="addToPaper(subject.id)"  type="success">加入试卷</el-button>
          <el-row style="border-bottom: 2px solid red;width: 800px;"></el-row>
        </el-row>

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
       subjectList: []
      };
    },
    mounted:function(){
      this.initSubjectList()
    },
    methods: {
      initSubjectList(){
        this.$axios({
          method: 'get',
          url: '/api/subjectBasket'
        }).then((result) => {

        })
      },
      deleteFromGroup(id){
        console.log('addToPaper',id)
        this.$axios({
          method: 'put',
          url: '/api/subjectBasket',
          data: {'subjectId': id}
        }).then((result) => {

        })
      }
    }
  };
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
