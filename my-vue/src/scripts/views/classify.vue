<template>
  <div>
    <mt-header fixed title="购物车" style="background:#393a3f"></mt-header>
    <div class="main"></div>
    <div class="t1" v-if="flage">
      <p>购物车好像什么都没有哦~</p>
      <mt-button plain style="width:100%;text-aline:center" @click="gologin()">去登录</mt-button>
    </div>
    <table
      border
      style="width:100%;height:100px;background:#fff"
      v-else
      v-for="(good,i) in goods"
      :key="i"
    >
      <tr>
        <th rowspan="3" style="width:10%;height:100px;">
          <input type="checkbox">
        </th>
        <th rowspan="3" style="width:20%;height:100px;">
          <img :src="require('../../assets/images/'+good.img)" alt>
        </th>
        <th colspan="3" style="width:70%;height:40px;">{{good.name}}</th>
      </tr>
      <tr>
        <td style="width:30%;height:60px;text-align: center;">{{good.price}}￥</td>
        <td style="text-align: center;">
          <span @click="good.num<=1?good.num=1:red(--good.num,good)" :class="mksh">-</span>
          <input
            class="input"
            readonly
            v-model="good.num"
            style="width:20%; text-align: center;float: left;"
            type="text"
          >
          <span @click="add(++good.num,good)">+</span>
        </td>
      </tr>
    </table>
    <div class="botton">
      <div class="left">合计：{{totalgoods}}￥</div>
      <div class="right">结算</div>
    </div>
  </div>
</template>
<script>
import store from "../vuex/store";
export default {
  data() {
    return {
      mksh: "",
      flage: true,
      goods: {},
      totalgoods: 0
    };
  },
  created() {
    if (localStorage.usertel) {
      this.flage = false;
      this.tel = localStorage.usertel;
    } else {
    }
    this.$http
      .get("http://39.97.98.141:2300/vue/goshop", {
        params: {
          usertel: localStorage.usertel
        }
      })
      .then(res => {
        console.log(res);
        this.goods = res.body.result;
        this.goods.forEach(item => {
          this.totalgoods += item.price * item.num;
        });
      });
  },

  methods: {
    add(addnum, cars) {
      this.totalgoods = 0;
      this.goods.forEach(item => {
        this.totalgoods += item.price * item.num;
      });
      this.$http
        .get("http://39.97.98.141:2300/vue/goodadd", {
          params: {
            tel: localStorage.usertel,
            cars: cars
          }
        })
        .then(res => {});
    },
    red(decnum, cars) {
      this.totalgoods = 0;
      this.goods.forEach(item => {
        this.totalgoods += item.price * item.num;
      });
      this.$http
        .get("http://39.97.98.141:2300/vue/goodadd", {
          params: {
            tel: localStorage.usertel,
            cars: cars
          }
        })
        .then(res => {});
    },
    gologin() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 80px;
}
.t1 {
  width: 100%;
  height: 300px;
  background: #ffffff;
}
.t1 p {
  width: 100%;
  text-align: center;
  line-height: 300px;
}
.is-disabled {
  opacity: 6;
}
span {
  display: block;
  width: 20%;
  float: left;
  text-align: center;
  /* background: #000000; */
  color: #020202;
  border: 1px solid gray;
}
span:nth-child(1) {
  margin-left: 20%;
}
input {
  background: none;
  outline: none;
  border: 0px;
  line-height: 43px;
  border: 1px solid gray;
}
img {
  width: 100%;
  height: 200px;
}
.botton {
  position: fixed;
  left: 0;
  bottom: 90px;
  width: 100%;
  background: #ffffff;
  height: 90px;
  border-top: 1px solid #b2b2b2;
}
.left {
  float: left;
  line-height: 90px;
  margin-left: 10%;
}
.right {
  float: right;
  margin-right: 10%;
  line-height: 90px;
  width: 30%;
  text-align: center;
  background: rgb(81, 163, 81);
  color: #ffffff;
  border-radius: 5px;
}
</style>


