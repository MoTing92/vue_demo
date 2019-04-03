<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>作者：莫庭</h2>
	<p>这是一个vue项目案例</p>
    <span>了解更多</span><a href='https://cn.vuejs.org/v2/guide/installation.html'>点击这里</a><span>前往vue中文官方文档</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎使用Vue框架'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
