<template>
  <div>
    <mt-header style="background:#393a3f" fixed title="个人中心"></mt-header>
    <div class="top"></div>
    <div class="zhuce" v-if="flage">
      <h1 @click="gotoLogin">登录</h1>
      <h1 @click="gotoZhuce">注册</h1>
      <!-- <h1>欢迎你:{{$route.params.tel}}</h1> -->
    </div>
   <div class="zhuce1" v-else>
      <p>欢迎你:{{tel}}<span @click="tuichu">[退出]</span></p>
    </div>
    <div class="q">
      <i class="iconfont .icon-icon2" v-html="'&#xe501;'"></i>
      我的订单
      <i style="float:right;margin-right:10%" class="iconfont .icon-icon2" v-html="'&#xe600;'"></i>
    </div>
    <div class="w">
      <i class="iconfont .icon-icon2" v-html="'&#xe505;'"></i>
      我的购物车
      <i style="float:right;margin-right:10%" class="iconfont .icon-icon2" v-html="'&#xe600;'"></i>
    </div>
    <div class="e">
      <i class="iconfont .icon-icon2" v-html="'&#xe61a;'"></i>
      我的收藏
      <i style="float:right;margin-right:10%" class="iconfont .icon-icon2" v-html="'&#xe600;'"></i>
    </div>
    <div class="r">
      <i class="iconfont .icon-icon2" v-html="'&#xe602;'"></i>
      我的财务
      <i style="float:right;margin-right:10%" class="iconfont .icon-icon2" v-html="'&#xe600;'"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flage:true
    };
  },
  created(){
    if(localStorage.usertel){
        this.flage=false;
        this.tel=localStorage.usertel;
    }
  },
computed:{
  tel : {
    get () {
      return this.$store.state.tel
    },
    set (value) {
      this.$store.commit('updateUsername', value)
    }
  },
},
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login" });
    },
    gotoZhuce() {
      this.$router.push({ name: "zhuce" });
    },
    tuichu(){
      localStorage.usertel="",
      this.$router.push({name:'login'})
    }
  },

};
</script>

<style lang="scss" scoped>
.mint-header {
  width: 100%;
}
.top {
  height: 80px;
}
.zhuce {
  width: 100%;
  height: 150px;
  background: #ffffff;
  margin-top: 20px;
}
.zhuce h1 {
  float: left;
  width: 20%;
  margin-top: 50px;
  line-height: 50px;
  margin-left: 20%;
  border: 2px solid #000000;
  text-align: center;
}
.q,.w,.e,.r {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background: #ffffff;
  margin-top: 10px;
}
.zhuce1{
  width: 100%;
  line-height: 150px;
  // margin-left: 20%;
  background: #ffffff;
}
.zhuce1 p{
  margin-left: 20%;
}
</style>

