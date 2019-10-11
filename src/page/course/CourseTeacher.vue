<template>
  <div>
  <iframe allow="microphone;camera" border="0" :src="courseUrl" height="600" width="1300"></iframe>
  <div>
    {{courseId}}
  </div>
  </div>
</template>


<script>

export default {
  data () {
    return {
      courseId: this.$route.params.courseId,
      courseUrl: `https://class.vhall.com/#/entry/${this.$route.params.courseId}?type=1`,
      src: require('../../assets/courseOnline.png')
    }
  },
  mounted:function(){
    this.$message("courseId",this.$route.params);
    console.log('this.$route.params',this.$route.params)
  },
}
</script>


<style>

</style>
