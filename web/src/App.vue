<template>
  <div id="app">
    <button v-on:click="getUserInfo(123)">click me.</button>
  </div>
</template>

<script>
  const {GetUserInfoReq, GetUserInfoRsp} = require('../lib/user_pb');
  const {UserClient} = require("../lib/user_grpc_web_pb");

  export default {
    name: 'app',
    components: {},
    methods: {
      getUserInfo: function (uid) {
        const userService = new UserClient('http://localhost:8081');
        let request = new GetUserInfoReq();
        request.setUserid(uid);

        userService.getUserInfo(request, {}, function(err, response) {
          console.log(response)
        });
      }
    }
  }
</script>

<style>
</style>
