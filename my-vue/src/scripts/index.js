import Vue from "vue";
import MintUI from "mint-ui";
Vue.use(MintUI);

import VueResource from "vue-resource";
Vue.use(VueResource);




import App from "./components/app.vue";
Vue.component("App",App);

import Head from "./components/head.vue";
Vue.component("Head",Head);

import router from "./router"
import store from "./vuex/store"
const vm = new Vue({
    store,
    router,
    data:{

    },
}).$mount("#app")