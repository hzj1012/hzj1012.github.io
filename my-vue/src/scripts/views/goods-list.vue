<template>
    <div>
      <!-- <mt-header fixed :title="$router.query.name" style="background:#393a3f"></mt-header> -->
       <!-- <Head :title="$route.query.name" :show="true" ></Head> -->
        <mt-header :title="$route.query.name" style="background:#393a3f">
          <router-link to="/index/shopcar" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
        </mt-header>
        <div class="content">
          <img :src="src" alt="">
          <h2>{{good.name}}</h2>
          <p class="p1">已经出售{{good.num}}件</p>
          <p>{{good.price}}积分</p>
        </div>
        <div class="botton">
          <ul>
            <mt-badge class="jiaobiao" size="small">30</mt-badge>
             <li class="gouwu" @click="goshop">加入购物车</li>
             <li>立即购买</li>
          </ul>
        </div>
    </div>
</template>

<script>
// import {mapState,mapActions} from "vuex"
export default {
    data(){
      return{
        good:{},
        src:{}
      }
    },
    methods:{
        goshop(){
          this.$http.get("http://39.97.98.141:2300/vue/addshopings",{
            params:{
              tel:localStorage.usertel,
              good:this.good
            }
          }).then(res=>{

            this.$router.push({
              name:'classify'})
          })
        }
    },
    created(){
      this.$http.get("http://39.97.98.141:2300/vue/goodslist",{
        params:{
          id:this.$route.query.goodId
        }
      }).then(res=>{
        this.good=res.body.result
        this.src=require('../../assets/images/'+res.body.result.images)
        console.log(res);
      })
    }
}
</script>

<style lang="scss" scoped>
  .content{
    width: 100%;
    // height: 500px;
  }
  .content img{
    width: 100%;
    height: 600px;
  }
  .content h2{
    width: 100%;
    height: 100px;
    line-height: 100px;
    // text-align: center;
    background: #ffffff;
    margin-bottom: 5px;
  }
  .content p{
    line-height: 100px;
    color: red;
    background: #ffffff;
    margin-bottom: 10px;
  }
  .content .p1{
    line-height: 100px;
    color: gray;
    background: #ffffff;
    font-size: 14px;
  }
  .botton{
    position: fixed;
    flex:1;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .botton ul li{
    width: 50%;
    text-align: center;
    line-height: 90px;
    background: #ffffff;
    float: left;  
    color: #000
  }
  .botton ul .jiaru{
    background:gray;
    color: #fff
  }
    .botton ul .gouwu{
    background:#3233;
    color: #fff
  }
  .jiaobiao{
    position: fixed;
    right: 50%;
    bottom: 50px;
  }
</style>

