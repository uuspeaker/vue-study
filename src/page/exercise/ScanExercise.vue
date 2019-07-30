
<template>
  <div>
    <pageHead></pageHead>
    <!-- element 上传图片按钮 -->
    <template>
      <el-row>
      <div style="float:left;font-size:20px;font-weight:bold;margin-top:40px">上传练习</div>
      </el-row>
    <el-row>
    <el-upload
    class="upload-demo"
    drag
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple>
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
  methods: {

  }
}
</script>
<style>

</style>
