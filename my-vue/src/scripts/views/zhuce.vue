<template>
  <div>
    <mt-header title="注册" style="background-color: #393a3f;">
      <router-link to="/index/mine" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="tel">
      <p>手机号:+86</p>
      <input type="tel" v-model="tel" placeholder="输入手机号码">
    </div>
    <div class="pwd">
      <p>设置密码</p>
      <input type="password" v-model="pwd" placeholder="请输入6-8位密码">
    </div>
    <div class="pwd1">
      <p>确认密码</p>
      <input type="password" v-model="pwd1" placeholder="确认密码">
    </div>
    <mt-button class="login" type="primary" style="background:#48c455" @click="goLigon">下一步</mt-button>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
import { Toast } from 'mint-ui';
export default {
  data() {
    return { tel: "", flag: false, pwd: "", pwd1: "", flag1: false };
  },
  methods: {
    goLigon() {
      if (this.tel === "") {
        MessageBox("提示", "手机号不能为空");
      } else {
        if (this.tel !== "") {
          var reg = /^1[3456789]\d{9,11}$/;
          if (!reg.test(this.tel)) {
            MessageBox("提示", "请输入有效手机号");
          } else {
            this.flag = true;
          }
        }
        if (this.pwd === "") {
          MessageBox("提示", "密码不能为空");
        } else {
          if (this.pwd !== "") {
            var reg = /^[A-Za-z0-9]{6,8}$/;
            if (!reg.test(this.pwd)) {
              MessageBox("提示", "请输入有效密码");
            } else {
              if (this.pwd === this.pwd1) {
                this.flag1 = true;
              } else {
                MessageBox("提示", "两次密码不一致");
              }
            }
          }
        }
      }
      if (this.flag && this.flag1) {

        this.$router.push({ name: "login" });
        let instance = Toast('注册成功');
        setTimeout(() => {
          instance.close();
        }, 2000);
        console.log(this.tel, this.pwd);
        this.$http
          .get("http://39.97.98.141:2300/vue/zhuce", {
            params: {
              tel: this.tel,
              pwd: this.pwd
            }
          })
          .then(res => {
            console.log(res);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tel,
.pwd,
.pwd1 {
  width: 70%;
  height: 50px;
  line-height: 50px;
  margin-left: 15%;
  margin-top: 10%;
  border-bottom: 2px solid rgb(126, 228, 126);
}
.tel p {
  width: 35%;
  float: left;
  color: rgb(62, 226, 62);
}
.pwd p,
.pwd1 p {
  width: 30%;
  float: left;
  color: rgb(62, 226, 62);
}

input {
  background: none;
  outline: none;
  border: 0px;
}
.login,
.zhuce {
  width: 80%;
  margin-left: 10%;
  margin-top: 50px;
}
</style>

