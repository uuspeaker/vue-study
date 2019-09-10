
<template>
  <div>
    <pageHead></pageHead>


    <el-main>

        <el-row v-for="subject in subjectList" :key="subject.id">
          <el-row>
          <div v-for="item in subject.questionContent" style="float:left" >
            <div v-if="item.startsWith('http://')">
              <el-image :src="item" ></el-image>
            </div>
            <div v-else>{{item}}</div>
          </div></el-row>

          <el-row style="float:left;">
            <span style="margin-right:40px">难度系数:{{subject.questionLevel}}</span>题型：{{subject.questionType}}


          </el-row>
          <el-button @click="removeFromBasket(subject.id)"  type="success">删除</el-button>
          <el-row style="border-bottom: 2px solid red;width: 800px;"></el-row>
        </el-row>

    </el-main>



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
          this.subjectList = result.data
        })
      },
      removeFromBasket(id){
        console.log('removeFromBasket',id)
        this.$axios({
          method: 'put',
          url: '/api/subjectBasket',
          data: {'subjectId': id}
        }).then((result) => {
          this.$message('已从试题篮删除');
          this.initSubjectList()

        })
      }
    }
  };
</script>
<style>

</style>
