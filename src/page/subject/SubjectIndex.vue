
<template>
  <div>
    <pageHead></pageHead>

    <el-container style="height: 500px; border: 1px solid #eee; margin-top:50px">
  <el-aside width="250px" >
    <el-tree :data="data" :props="defaultProps"></el-tree>
  </el-aside>

  <el-container>

    <el-main>

        <el-row v-for="subject in subjectList">
          ${{subject.questionContent}}
          <!--div v-if="subject.startsWith('http://')">
            <el-image :src="subject"></el-image>
          </div>
          <div v-else>
            ${{subject}}
          </div-->
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
        data: [],
        defaultProps: {
         children: 'children',
         label: 'lable'
       },
       tableData: [{
            content: '王小虎'
       }],
       subjectList: []
      };
    },
    mounted:function(){
      this.initKnowledgeTree()
      this.initSubjectList()
    },
    methods: {
      initKnowledgeTree(){
        this.$axios({
          method: 'get',
          url: '/api/knowledgeTree',
        }).then((result) => {
          console.log('result',result)
          var root = {id: '4677', lable: '初中数学', isLeaf: 'node'}
          var children = this.buildTree(root, result.data)
          this.data = children
        })
      },
      buildTree(node, list){
        var children = this.getChildren(node.id, list)
        console.log('children',node,children)
        node['children'] = children
        if(node.id == '4677'){
          this.data = children
        }
        for (var i = 0; i < children.length; i++) {
          if(children[i]['isLeaf'] != 'leaf'){
            var nextChildren = this.buildTree(children[i], list)
            children[i]['children'] = nextChildren
          }

        }
        return children
      },
      getChildren(parentId, list){
        var children = []
        for (var index in list) {
          //console.log(list[index]['parentId'],parentId)
          if(list[index]['parentId'] == parentId){
            children.push(list[index])
          }
        }
        console.log('getChildren',parentId,children)
        return children
      },
      initSubjectList(){
        this.$axios({
          method: 'get',
          url: '/api/subjectList',
          params: {'knowledgeId': 6042}
        }).then((result) => {
            this.tableData = result.data
            this.subjectList = result.data
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
