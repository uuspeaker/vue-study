<template>
  <div id="app" class="index-middle">
    <!--img src="./assets/logo.png"-->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.index-middle {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
