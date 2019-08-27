<template>
  <div>
    <pageHead></pageHead>

  <!-- element 上传图片按钮 -->
  <template>
    <el-row>
    <div style="float:left;font-size:20px;font-weight:bold;margin-top:40px">OCR识别试卷</div>
    </el-row>
  <el-row>
    <el-upload
  class="upload-demo"
  drag
  action="http://129.211.21.250:3000/upload/"
  :on-progress="loading"
  :on-success="closeLoading"
  >
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过3M</div>
</el-upload>
</el-row>
</template>

<template>
  <el-row>
  <div style="float:left;font-size:20px;font-weight:bold;margin-top:10px">查询识别结果
  <el-button style="margin-left: 10px;" size="small" type="success" @click="queryPaper">查询试卷信息</el-button></div>
  </el-row>
  <el-row>
    <div v-for="paper in papers">
      <el-col :span="8" class="block">
          <span class="demonstration">{{ paper.paperName}}</span>
          <el-image :src="paper.paperUrl"  style="width: 300px; height: 200px" fit="contain" @click.native="clickPaper(paper._id)"></el-image>
          <i class="el-icon-edit" @click="openModifyForm(paper._id, paper.paperName)"></i>
          <i class="el-icon-delete" @click="deletePaper(paper._id)"></i>
      </el-col>
    </div>
  </el-row>
</template>

<el-dialog title="修改名称" :visible.sync="dialogFormVisible">
  <el-form :model="modifyForm">
    <el-form-item label="试卷名称" >
      <el-input v-model="modifyForm.id" autocomplete="off" style="display:none"></el-input>
      <el-input v-model="modifyForm.name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="modifyName">确 定</el-button>
  </div>
</el-dialog>




<div class="demo-image__lazy">
  <el-image  :src="targetPaper" style="width: 900px; height: 600px" :preview-src-list="[targetPaper]" fit="contain"></el-image>
  <div v-for="subject in subjects" style="margin-top:40px;border:2px">
  <el-image  :src="subject.imageUrl" lazy></el-image>
  <div v-for="item in subject.content">
  <div style="font-weight: 20px;text-align: left;">{{item}}</div>
  </div>
  <div style="border-top: 2px solid red;width: 800px;margin-top:10px"></div>
  </div>
</div>


  </div>
</template>

<script>
import pageHead from '@/components/PageHead.vue'
var loading
export default {
  components: { pageHead },
  data() {
    return {
      papers: [],
      options: [],
      subjects: [],
      selectValue: '',
      targetPaper: '',
      dialogFormVisible: false,
      modifyForm: {'id': '', 'name': ""}
    }
  },
  mounted:function(){
    this.queryPaper()
  },
  methods: {
    loading(){
      loading = this.$loading({
          lock: true,
          text: 'ocr处理中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
    },
    closeLoading(){
      loading.close();
      this.queryPaper()
    },
    queryPaper(){

      this.papers = []
      this.options = []
      this.$axios({
        method: 'get',
        url: '/api/testPaper'
      })
      .then((result) => {
        this.papers = result.data

        console.log(this.subjects)
        this.papers.map((data) => {
          this.options.push({
            value: data._id,
            lable: data._id,
          })
          data.subjects.map((subject) => {
            subject.imageUrl = "https://" + subject.imageUrl
          })
        })
        if(this.papers[0]){
          this.clickPaper(this.papers[0]._id)
        }
      })
    },
    changePaper(e,item){
      console.log("selectValue",this.selectValue)
      for (var i = 0; i < this.options.length; i++) {
        if(this.options[i].value == this.selectValue){
          this.subjects = this.papers[i].subjects

        }
      }

    },
    clickPaper(id){
      for (var i = 0; i < this.papers.length; i++) {
        if(this.papers[i]._id == id){
          this.subjects = this.papers[i].subjects
          this.targetPaper = this.papers[i].paperUrl
        }
      }
    },
    changeName(){},
    deletePaper(id){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.doDeletePaper(id)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    doDeletePaper(id){
      this.$axios({
        method: 'delete',
        url: '/testPaper',
        data: {'id': id}
      }).then((result) => {
        this.$message("删除成功",id);
        this.queryPaper()
    })
  },
  openModifyForm(id, name){
    this.modifyForm.id = id
    this.modifyForm.name = name
    this.dialogFormVisible = true
  },
  modifyName(){
    this.$axios({
      method: 'put',
      url: '/testPaper',
      data: {'id': this.modifyForm.id, 'name': this.modifyForm.name}
    }).then((result) => {
      this.$message("修改成功",id);
      this.queryPaper()
  })
  },
}
}
</script>
<style>

</style>
