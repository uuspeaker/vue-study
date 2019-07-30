<template>
  <div>
    <pageHead></pageHead>
    <el-image :src="src"  fit="fill"></el-image>
  </div>
</template>

<script>
import pageHead from '@/components/PageHead.vue'

export default {
  components: { pageHead },
  data () {
    return {
      src: require('../../assets/course-detail.png')
    }
  },
}
</script>


<style>

</style>
