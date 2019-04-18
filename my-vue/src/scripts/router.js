import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

// 1.定义组件
import App from "./components/app.vue"
import Index from "./views/index.vue"
import Classify from "./views/classify.vue"
import Shopcar from "./views/shopcar.vue"
import Mine from "./views/mine.vue"
import Home from "./views/home.vue"

import Login from "./views/login.vue"
import Zhuce from "./views/zhuce.vue"
import Goodslist from "./views/goods-list.vue"



//2.配置路由
const routes =[
    {
        path:"/",
        redirect:{name:'home'}
    },
    
    {
        path:"/index",
        name:"index",
        component:Index,
        children:[
            {path:"home",name:'home',component:Home},
            {path:"",name:'home',component:Home},
            {path:"classify",name:'classify',component:Classify},
            {path:"shopcar",name:'shopcar',component:Shopcar},
            {path:"mine",name:'mine',component:Mine},
            {path:"*",redirect:{name:'home'}}
        ]
    },
    {
        path:"/fenlei",
        name:"fenlei",
        component:Goodslist
    },
    {
        path:"/goods-list/:goodId?",
        name:"goodslist",
        component:Goodslist
    },
    {
        path:"/login",
        name:"login",
        component:Login
    },
    {
        path:"/zhuce",
        name:"zhuce",
        component:Zhuce
    }

]
// 3. 创建 router
const router = new VueRouter({
    routes,
    mode:"hash"
})


// 4. 挂载 根实例 
export default router;