<template>
    <div>
        <mt-header title="登录" style="background-color: #393a3f;">
          <router-link to="/index/mine" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
        </mt-header>
        <div class="tel">
       <p>手机号:+86</p><input type="tel" class="usertel" v-model="tel"  placeholder="输入手机号码">
       </div>
        <div class="pwd">
       <p>密码</p><input type="password" class="userpwd" v-model="pwd" placeholder="输入密码">
       </div>
       <mt-button class="login" type="primary" style="background:#48c455" @click="gologin">登录</mt-button>
       <mt-button class="zhuce" type="default" @click="gozhuce">注册</mt-button>
    </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  data(){
    // return {tel:"",flag:false,pwd:"",flag1:false};
    return{
        tel:"",
        pwd:"",
    }
   
  },
  methods:{
      gozhuce(){
        this.$router.push({name:'zhuce'})
      },
      gologin(){
       this.$http.get("http://39.97.98.141:2300/vue/login",{
         params:{
           tel:this.tel,
           pwd:this.pwd,
         }
       }).then(res=>{
         console.log(res.body.msg)
          console.log(res.body)
         switch(res.body.code){
           case 200:
            MessageBox("登录成功");
            localStorage.usertel=this.tel;
            this.$router.push({name:'mine'})
                  break;
            case 500:
            MessageBox("提示","账号或者密码错误");
                  break;
         }

       })
      }
  }
}
</script>

<style lang="scss" scoped>
  .tel,.pwd{
    width: 70%;
    height: 50px;
    line-height: 50px;
    margin-left: 15%;
    margin-top: 10%;
    border-bottom: 2px solid rgb(126, 228, 126)
  }
  .tel p{
    width: 35%;
    float: left;
    color: rgb(62, 226, 62);
  }
   .pwd p{
    width: 15%;
    float: left;
    color: rgb(62, 226, 62);
  }
  
  input{
  background:none;  
	outline:none;  
	border:0px;
  }
  .login,.zhuce{
    width: 80%;
    margin-left: 10%;
    margin-top: 50px;
  }
</style>


