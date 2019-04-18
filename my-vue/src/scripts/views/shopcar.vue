<template>
    <div>
       <mt-search v-model="vuel" @blur.native.capture='searchBtn' >
       </mt-search>

            <!-- <input type="text" placeholder="输入关键字"> -->
            <!-- <div></div> -->
        <!-- </div> -->
        <!-- 轮播图 -->
        <mt-swipe :auto="1500">
            <mt-swipe-item v-for="(img,i) in imgs" :key="i">
                <img :src="img" alt="" class="img-item">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 内容区域 -->
        <div class="content">
            <ul>
                <li  v-for="(type,i) in types" :class="tabId==i?'gaolw':''" :key="i"  @click="showGoods(type,i)">{{type}}</li>
            </ul>
        </div>
        <div class="main">
            <ul>
                <li v-for="(good,i) in goodsNum" :key="i">
                <router-link :to="{name:'goodslist',query:{name:good.name,goodId:good._id}}">
                <img :src="require('../../assets/images/'+good.images)" alt="">
                    <p>{{good.name}}</p>
                    <p class="li2">已售{{good.num}}</p>
                    <p class="li3">{{good.price}}积分</p>  
                </router-link> 
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Indicator,Toast } from 'mint-ui';
export default {
   data(){
       return{
           imgs:[
               require("../../assets/images/img1.jpg"),
               require("../../assets/images/img2.jpg"),
               require("../../assets/images/img3.jpg"),
               require("../../assets/images/img4.jpg"),
           ],
            goodsToal:[],
            goodsNum:[],
            
            types:[],
            tabId:0,
            vuel:''
       }
   },
    created(){
       this.$http.get("http://39.97.98.141:2300/vue/goodstype")
       .then(res=>{
           this.types=res.body.result;
       })
      this.$http.get("http://39.97.98.141:2300/vue/list").then(res=>{
         this.goodsToal=res.body.result;
              this.goodsNum=res.body.result.filter((item,index)=>item.type==this.types[0])
       
        })
   },
   methods:{
       showGoods(namegoods,mun){
     this.tabId=mun;
        this.goodsNum=this.goodsToal.filter((item,index)=>item.type==namegoods)
      },
   searchBtn(){
        this.goodsNum=  this.goodsToal.filter((item,index)=>item.name.indexOf(this.vuel)!=-1)
        this.vuel=""
        this.types=["搜索结果"];
   }
   }
}
</script>

<style lang="scss" scoped>
// .mint-searchbar,.mint-search{
//        background-color: #000000 !important!important!important!important;
//        height: 100px;
//        position: fixed;
//        z-index: 100;
//        width: 100%;
//    } 
   div{
       height: 100px;
   }
.top{
        position: relative;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #393a3f;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 8px 10px;
    z-index: 1;
    height: 80px;
    color: #ffffff
}
input{
    margin-left: 2%;
    width: 70%;
    height: 60px;
    border-radius: 5px;
    background: #ffffff; 
	// background:none;  
	outline:none;  
	border:0px;
}
mt-swipe,.img-item,.mint-swipe{
    width:100%;
    height:400px;
}
.content{
    width: 100%;
    height: 100px;
    background: #ffffff
}
.content ul li{
    float: left;
    width: 20%;
    text-align: center;
    line-height: 100px;
    color: #7b7b7b;
    // border: 1px solid gray;
}
 .content ul .gaolw{
    background-color:rgb(212, 211, 211);
}
.main ul{
    height: 200px;
    background: #ffffff;
    border-bottom: 1px solid gray;
    margin-top: 10px;
}
.main ul li{
    width: 100%;  
    height: 200px;
    background: #ffffff;  
     border-bottom: 1px solid #c8c7cc;
}
.main ul li:nth-child(2n){
    width: 100%;
    height: 200px;
    background: #ffffff;
}
.main ul  img{
    width: 30%;
    height: 200px;
    // background: red;
    float: left;
}
.main ul li p{
    width: 60%;
    float:left;
    margin-bottom: 5px;
    color: #393a3f;
}
.main ul li .li2{
    color: #7b7b7b;
    font-size: 12px;
    margin-top: 10px;
}
.main ul li .li3{
    width: 55%;
    color: red;
}
.main ul li div{
    width: 10%;
    height: 50px;
    float: right;
    background: green;
    color: #ffffff;
    text-align: center;
    border-radius: 50px;
    margin-right: 5%;
    // margin-bottom: 5px;
}
</style>
