<template>
    <div>
       <mt-header fixed title="分类" style="background:#393a3f">
            <router-link to="/" slot="left">
                <mt-button>武汉洪山区</mt-button>
            </router-link>
       </mt-header>
       <mt-swipe :auto="1500">
            <mt-swipe-item v-for="(img,i) in imgs" :key="i">
               <router-link :to="{name:'shopcar'}"> <img :src="img" alt="" class="img-item"></router-link>
            </mt-swipe-item>
        </mt-swipe>
        <div class="top"></div>
         <div class="box">
             <ul>
                <li v-for="(good,i) in goods" :key="i">
                     <img :src="require('../../assets/images/'+good.images)" alt="">
                     <p>{{good.name}}</p>
                </li>
             </ul>
         </div>
         
    </div> 
   
</template>


<script>
export default {
   data(){
       return{
           imgs:[
               require("../../assets/images/img1.jpg"),
               require("../../assets/images/img2.jpg"),
               require("../../assets/images/img3.jpg"),
               require("../../assets/images/img4.jpg"),
           ],
           goods:[]
       }
   },
    created(){
       this.$http.get("http://39.97.98.141:2300/vue/shouye")
       .then(res=>{
           this.goods=res.data.result
       })
   }
}
</script>

<style lang="scss" scoped>
.guide{
    width:200px;
    height:200px;/*no*/
    background:red;
}

mt-swipe,.img-item,.mint-swipe{
    width:100%;
    height:500px;
    position:fixed;
}
body,html{
    background:#fff;
}
.top{
    height: 500px;
}
.box,.box ul{
    width: 100%;  
}
.box ul li{
    width: 35%;
    height: 300px;
    background: #fff;
    float: left;
    margin-left: 10%;
    margin-top: 5%;
}
.box ul li img{
    width: 50%;
    height: 130px;
    margin-left: 25%;
    margin-top: 50px;
}
.box ul li p{
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-top: 30px;
    text-align: center;
}
</style>

