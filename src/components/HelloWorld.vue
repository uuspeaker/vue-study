<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>原始字符串: {{ message }}</p>
  <p>计算后反转字符串: {{ reversedMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到菜鸟教程！',
      message: 'Runoob!'
    }
  }
}
</script>
