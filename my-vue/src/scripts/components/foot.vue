<template>
<div class="top">
    <footer>
          <div v-for="(foot,i) in foots"  :key="i">
            <router-link :to="{name:foot.name}">
				<!-- <mt-badge class="hot" type="warning" v-if="i==2">10</mt-badge> -->
                <i class="iconfont"  v-html="foot.icon" >  </i>
                <span>{{foot.txt}}</span>
            </router-link>
        </div> 
    </footer>
</div>
</template>


<script>
export default {
    data(){
        return {
            foots:[
                {txt:"回收",path:"/index/home",name:"home",icon:"&#xe6a7;"},
                {txt:"商城",path:"/index/shopcar",name:"shopcar",icon:"&#xe620;"},
                {txt:"购物车",path:"/index/classify",name:"classify",icon:"&#xe633;"},
                {txt:"个人中心",path:"/index/mine",name:"mine",icon:"&#xe645;"},
            ] 
        }
    }
}
</script>

<style lang="scss" scoped>
footer{
	position:fixed;
	width:100%;
	height:90px;
	left:0;
	bottom:0;
	background:#f9f9f9;
	display:flex !important;
    z-index:100;
    border-top:1px solid #b2b2b2;
	div{
		flex:1;
		height:90px;
		a{
			display: block;
			width:100%;
			height:100%;
			display:flex;
			flex-direction:column;
			box-sizing:border-box;
			padding:6px 0;
			text-align:center;
			font-family:"微软雅黑";
			color:#999;
			position: relative;
			i{
			width:100%;
			height:50px;
			line-height:50px;
			font-size:42px !important;
			}
			span{
				width:100%;
				height:35px;
				line-height:35px;
				font-size:26px;
			}
			.hot{
				position: absolute;
				top:0;
				left:60%;
				display: inline;
				width:.5rem;
			}
		}
		.nav-active,.router-link-exact-active{
			// color:#0dc441;
		    // border-color:#0dc441;
			background-color: #ece2e2;
		}

	}
}
.bottom{
	width: 100%;
	height: 90px;
}
.top{
	width: 100%;
	height: 100px;
	overflow: hidden;
}
</style>