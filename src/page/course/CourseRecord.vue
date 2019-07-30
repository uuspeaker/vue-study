<template>
  <div>
    <el-image :src="src"  fit="fill" style="margin-top:50px"></el-image>
  </div>
</template>

<script>

export default {
  data () {
    return {
      src: require('../../assets/courseRecord.png')
    }
  },
}
</script>


<style>

</style>
