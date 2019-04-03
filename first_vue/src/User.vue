<template>
  <div id="user">
    <img src="./assets/logo.png">
    <!--<h1 style="font-family: '微软雅黑'">默认vue首页</h1>-->
    <!--<h3>时间：{{createTime}}</h3>-->
    <router-view/>
    <!--<ul style="display: inline">
      <li><router-link to="/hello">hello</router-link></li>
      <li><router-link to="/index">index</router-link></li>
    </ul>-->
  </div>
</template>

<script>
export default {
  name: 'User'
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
</style>
