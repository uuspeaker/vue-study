<template>
  <div>
    <pageHead></pageHead>
    <form action="http://localhost:3000/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="file" />
    <button>Send file!</button>
</form>
<el-upload
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
    <!-- element 上传图片按钮 -->
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
  </template>

    <template>
      <el-row>
      <div style="float:left;font-size:20px;font-weight:bold;margin-top:10px">我的练习(未批改)</div>
      </el-row>
      <el-row>
        <div v-for="completedExercise in completedExercises" :key="completedExercise">
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
        <div v-for="completedExercise in completedExercises" :key="completedExercise">
          <el-col :span="8" class="block">
              <span class="demonstration">{{ completedExercise.name}}</span>
              <el-image :src="completedExercise.src" :preview-src-list="[completedExercise.src]" style="width: 250px; height: 150px" fit="fill"></el-image>
          </el-col>
        </div>
      </el-row>
    </template>


  </div>
</template>

<script>
import pageHead from '@/components/PageHead.vue'

var completedExercises = []
completedExercises.push({name: "2019年6月10日数学考试",src:require("../../assets/math.jpg")})
completedExercises.push({name: "2019年5月10日数学考试",src:require("../../assets/math.jpg")})
completedExercises.push({name: "2019年4月10日数学考试",src:require("../../assets/math.jpg")})

export default {
  components: { pageHead },
  data() {
    return {
      completedExercises: completedExercises,
    }
  },


}
</script>
<style>

</style>
