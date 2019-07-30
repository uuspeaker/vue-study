<template>
  <div>
    <el-image :src="src"  fit="fill"></el-image>
  </div>
</template>

<script>

export default {
  data () {
    return {
      src: require('../assets/login.png')
    }
  },
}
</script>


<style>

</style>
