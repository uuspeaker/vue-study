<template>
  <div>
    <pageHead></pageHead>
    <template>
      <el-row>
      <div style="float:left;font-size:20px;font-weight:bold;margin-top:10px">OCR识别试卷</div>
      </el-row>
      <el-row>
    <form action="http://localhost:3000/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="file" />
    <button>ocr识别1</button>
    </form>
    </el-row>
  </template>

  <template>
    <el-row>
    <div style="float:left;font-size:20px;font-weight:bold;margin-top:10px">查询识别结果</div>
    </el-row>
    <el-row>
<el-button style="margin-left: 10px;" size="small" type="success" @click="queryPaper">查询试卷信息</el-button>
<template>
  <el-select v-model="selectValue" placeholder="请选择" @change="changePaper">
    <el-option
      v-for="item in options"
      :key="item.value"
      :lable="item.lable"
      :value="item.value">
    </el-option>
  </el-select>
</template>
</el-row>
</template>

<div class="demo-image__lazy">
  <div v-for="subject in subjects" style="margin-top:40px;border:2px">
  <el-image  :src="subject.imageUrl" lazy></el-image>
  <div v-for="item in subject.content">
  <div style="font-weight: 20px;text-align: left;">{{item}}</div>
  </div>
  <div style="border-top: 2px solid red;width: 800px;margin-top:10px"></div>
  </div>
</div>

<!--el-upload
  class="upload-demo"
  ref="upload"
  action="http://localhost:3000/upload"
  method="POST"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
    <!-- element 上传图片按钮 >
    <template>
      <el-row>
      <div style="float:left;font-size:20px;font-weight:bold;margin-top:40px">上传练习</div>
      </el-row>
    <el-row>
      <el-upload
    class="upload-demo"
    drag
    action="http://localhost:3000/upload/"
    >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
  </el-row>
</template-->

    <!--template>
      <el-row>
      <div style="float:left;font-size:20px;font-weight:bold;margin-top:10px">我的练习(未批改)</div>
      </el-row>
      <el-row>
        <div v-for="completedExercise in completedExercises">
          <el-col :span="8" class="block">
              <span class="demonstration">{{ completedExercise.name}}</span>
              <el-image :src="completedExercise.src" :preview-src-list="[completedExercise.src]" style="width: 250px; height: 150px" fit="fill"></el-image>
          </el-col>
        </div>
      </el-row>
    </template>

    <template>
      <el-row>
      <div style="float:left;font-size:20px;font-weight:bold;margin-top:10px">我的练习(已批改)</div>
      </el-row>
      <el-row>
        <div v-for="completedExercise in completedExercises" >
          <el-col :span="8" class="block">
              <span class="demonstration">{{ completedExercise.name}}</span>
              <el-image :src="completedExercise.src" :preview-src-list="[completedExercise.src]" style="width: 250px; height: 150px" fit="fill"></el-image>
          </el-col>
        </div>
      </el-row>
    </template-->




  </div>
</template>

<script>
import pageHead from '@/components/PageHead.vue'

export default {
  components: { pageHead },
  data() {
    return {
      completedExercises: [
        {name: "2019年6月10日数学考试",src:require("../../assets/math.jpg")},
        {name: "2019年5月10日数学考试",src:require("../../assets/math.jpg")},
        {name: "2019年4月10日数学考试",src:require("../../assets/math.jpg")},
      ],
      papers: [],
      options: [],
      subjects: [],
      selectValue: '',
      demoUrl: 'https://vue-1255824916.cos.ap-guangzhou.myqcloud.com/8b490b80-bdd3-11e9-a5dc-7b138c49d7db.png'
    }
  },
  methods: {
    queryPaper(){
      this.papers = []
      this.options = []
      this.$message('点击查询');
      this.$axios({
        method: 'get',
        url: '/testPaper'
      })
      .then((result) => {

        console.log(result)
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
          this.subjects = this.papers[0].subjects
        }
      })
    },
    changePaper(e,item){
      this.$message(this.selectValue);
      console.log("selectValue",this.selectValue)
      for (var i = 0; i < this.options.length; i++) {
        if(this.options[i].value == this.selectValue){
          this.subjects = this.papers[i].subjects

        }
      }

    }

  }
}
</script>
<style>

</style>
