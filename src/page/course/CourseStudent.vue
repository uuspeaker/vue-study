<template>
  <iframe allow="microphone;camera" border="0" :src="courseUrl" height="600" width="1300"></iframe>
</template>

<script>

export default {
  data () {
    return {
      src: require('../../assets/courseOnline.png'),
      courseUrl: `https://class.vhall.com/#/entry/${this.$route.params.courseId}?type=1`,
    }
  },
}
</script>


<style>

</style>
