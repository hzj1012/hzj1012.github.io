import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        num:1,
        tel:""
    },
    actions:{
        countAdd(context){
            context.commit("countAdd")
        }
    },

        mutations:{
            countAdd(state){
                state.count++;
            },
            updateUsername (state, tel) {
                state.tel = tel
              },
        }
    

})

export default store;