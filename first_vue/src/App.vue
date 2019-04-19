<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div id="link-root">
      <router-link to="/hello">hello</router-link>
      <router-link to="/index">index</router-link>
      <router-link to="/user">user</router-link>
      <!--<router-link to="/table">user</router-link>-->
    </div>
    <div id="index">
      <router-view></router-view>
    </div>
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
</style>
