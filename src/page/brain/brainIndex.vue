<template>
  <div>
    <pageHead></pageHead>
    <el-image :src="src"  fit="fill" style="margin-top:50px"></el-image>
  </div>
</template>

<script>
import pageHead from '@/components/PageHead.vue'

export default {
  components: { pageHead },
  data () {
    return {
      src: require('../../assets/brain.png')
    }
  },
}
</script>


<style>

</style>
