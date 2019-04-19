<template>
  <div id="user">
    <table id="center-panel-grid">
      <tr>
        <th>id</th>
        <th>username</th>
        <th>realName</th>
        <th>password</th>
      </tr>
      <tr v-for="User in userList">
        <td>{{User.userId}}</td>
        <td>{{User.username}}</td>
        <td>{{User.realName}}</td>
        <td>{{User.password}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import Axios from '../axiosConfig/axios';
  import Promise from 'promise';

  // var userList = [
  //   {userId:'1',username:'moting1',realName:'莫庭1',password:'123456'},
  //   {userId:'2',username:'moting2',realName:'莫庭2',password:'123456'},
  //   {userId:'3',username:'moting3',realName:'莫庭3',password:'123456'}
  //   ];
export default {
  name: 'User',
  // props:{userList:Array},
  data() {
    return {
      userList: []
    };
  },
  created(){
    this.getUsers()
  },
  methods: {
    getUsers() {
      console.log(1)
      var that = this
      Axios('/user/findAll').then(function (res) {
        that.userList = res.data;
        console.log(that.userList);
      }, function (err) {
        console.log(err.statusText);
      });
    }
  }
}
</script>

<style>

</style>
