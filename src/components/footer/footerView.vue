<!-- footer -->
<style lang='scss' scoped>
.mint-tabbar{
  position: fixed!important;
}
//   .nav-bar {
//     position: fixed;
//     width: 10rem;
//     margin: 0 auto;
//     bottom: 0px;
//     left: 0;
//     right: 0;
//     height: 50px;
//     padding: 0;
//     background: #fff;
//     // overflow: hidden;
//     clear: both;
//     // box-shadow: 0px 0px 20px -8px #999;
//     display: flex;
//     flex: 1;
//     z-index: 2000;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: row;
//     flex-wrap: nowrap;
//     .barIcon {
//       height: 100%;
//       padding-bottom:4px;
//       cursor: pointer;
//       // background: url('~jd/images/navbar1.png') 0 0 no-repeat;
//       // background-size: 700% 400%;
//       color:#666;
//       display: flex;
//       flex: 1;
//       justify-content:center;
//       align-items:flex-end;
//     }
//     .home {
//       // background-position: -.88rem -40px;
//       // &.active {
//       //   background-position: -.88rem -117px;
//       //    color: #ff2741;
//       // }
//       background:url('~jd/images/home.png') no-repeat center 7px;
//       background-size:28%;
//       &.active {
//         background:url('~jd/images/home_on.png') no-repeat center 7px;
//         background-size:28%;
//         color: #ff2741;
//       }
//     }
//     .category {
//       // background-position: -3.5rem -40px;
//       // &.active {
//       //   background-position: -3.5rem -117px;
//       //    color: #ff2741;
//       // }
//       background:url('~jd/images/category.png') no-repeat center 7px;
//       background-size:30%;
//       &.active {
//         background:url('~jd/images/category_on.png') no-repeat center 7px;
//         background-size:30%;
//         color: #ff2741;
//       }
//     }
//     .find {
//       position: relative;
//       top:-12px;
//       height:1.3rem;
//       // background-position: -11.5rem -66px;
//       // &.active {
//       //   background-position: -11.5rem -66px;
//       // }
//       background:url('~jd/images/find.png') no-repeat center 0;
//       background-size:1.3rem;
//       &.active {
//         background:url('~jd/images/find.png') no-repeat center 0;
//         background-size:1.3rem;
//         color: #ff2741;
//       }
//     }
//     .cart {
//       // background-position: -6.16rem -40px;
//       // &.active {
//       //   background-position: -6.16rem -117px;
//       //    color: #ff2741;
//       // }
//       background:url('~jd/images/cart.png') no-repeat center 7px;
//       background-size:30%;
//       &.active {
//         background:url('~jd/images/cart_on.png') no-repeat center 7px;
//         background-size:30%;
//         color: #ff2741;
//       }
//     }
//     .myHome {
//       // background-position: -8.78rem -40px;
//       // &.active {
//       //   background-position: -8.78rem -117px;
//       //   color: #ff2741;
//       // }
//       background:url('~jd/images/myhome.png') no-repeat center 6px;
//       background-size:28%;
//       &.active {
//         background:url('~jd/images/myhome_on.png') no-repeat center 6px;
//         background-size:28%;
//         color: #ff2741;
//       }
//     }
//   }

</style>
<template>

<mt-tabbar v-model="selected">
  <mt-tab-item id="tab1">
    <img slot="icon" src="">
    tab1
  </mt-tab-item>
  <mt-tab-item id="tab2">
    <img slot="icon" src="">
    tab2
  </mt-tab-item>
  <mt-tab-item id="tab3">
    <img slot="icon" src="">
    tab3
  </mt-tab-item>
  <mt-tab-item id="tab4">
    <img slot="icon" src="">
    tab4
  </mt-tab-item>
</mt-tabbar>
  
</template>
<script>

import { Tabbar, TabItem } from 'mint-ui';
import Vue from 'vue'
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

  export default {
    data() {
      return {

      };
    },

    watch: {},

    components: {},

    computed: {},

    methods: {},

    mounted: function () {}
  }

</script>
