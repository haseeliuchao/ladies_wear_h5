<!-- footer -->
<style lang='scss' scoped>
  .nav-bar {
    position: fixed;
    width: 10rem;
    margin: 0 auto;
    bottom: 0px;
    left: 0;
    right: 0;
    height: 50px;
    padding: 0;
    background: #fff;
    // overflow: hidden;
    -webkit-transform: translateZ(0);
    clear: both;
    // box-shadow: 0px 0px 20px -8px #999;
    display: flex;
    flex: 1;
    z-index: 2000;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    .barIcon {
      height: 100%;
      padding-bottom:4px;
      cursor: pointer;
      // background: url('~jd/images/navbar1.png') 0 0 no-repeat;
      // background-size: 700% 400%;
      color:#666;
      display: flex;
      flex: 1;
      justify-content:center;
      align-items:flex-end;
    }
    .home {
      // background-position: -.88rem -40px;
      // &.active {
      //   background-position: -.88rem -117px;
      //    color: #ff2741;
      // }
      background:url('~jd/images/home.png') no-repeat center 7px;
      background-size:28%;
      &.active {
        background:url('~jd/images/home_on.png') no-repeat center 7px;
        background-size:28%;
        color: #ff2741;
      }
    }
    .category {
      background:url('~jd/images/category.png') no-repeat center 7px;
      background-size:30%;
      &.active {
        background:url('~jd/images/category_on.png') no-repeat center 7px;
        background-size:30%;
        color: #ff2741;
      }
    }
    .find {
      // position: relative;
      // top:-12px;
      // height:1.3rem;
      // background-position: -11.5rem -66px;
      // &.active {
      //   background-position: -11.5rem -66px;
      // }
      background:url('~jd/images/home_shop.png') no-repeat center 7px;
      background-size:28%;
      &.active {
        background:url('~jd/images/home_shopon.png') no-repeat center 7px;
        background-size:28%;
        color: #ff2741;
      }
    }
    .cart {
      // background-position: -6.16rem -40px;
      // &.active {
      //   background-position: -6.16rem -117px;
      //    color: #ff2741;
      // }
      background:url('~jd/images/cart.png') no-repeat center 7px;
      background-size:31% 43%;
      &.active {
        background:url('~jd/images/cart_on.png') no-repeat center 7px;
        background-size:31% 43%;
        color: #ff2741;
      }
    }
    .myHome {
      // background-position: -8.78rem -40px;
      // &.active {
      //   background-position: -8.78rem -117px;
      //   color: #ff2741;
      // }
      background:url('~jd/images/myhome.png') no-repeat center 6px;
      background-size:28%;
      &.active {
        background:url('~jd/images/myhome_on.png') no-repeat center 6px;
        background-size:28%;
        color: #ff2741;
      }
    }
  }

</style>
<template>
  <ul class="nav-bar fool">
    <li :class="['barIcon','home',$route.name==='index'?'active':'']" @click= "$router.push('/index')">首页</li>
    <li :class="['barIcon','category',$route.name==='category'?'active':'']" @click= "$router.push('/category')">分类</li>
    <li :class="['barIcon','find',$route.name==='myShop'?'active':'']" @click="initData">店铺</li>
    <li :class="['barIcon','cart',$route.name==='cart'?'active':'']" @click= "$router.push('/cart')">购物车</li>
    <li :class="['barIcon','myHome',$route.name==='myhome'?'active':'']" @click= "$router.push('/myhome')">我的</li>
  </ul>
</template>
<script>
import {
  getUserInfo
} from '@/service/getData';

  export default {
    data() {
      return {

      };
    },

    watch: {},

    components: {},

    computed: {},

    methods: {
      async initData(){
        let ShopInfo = await getUserInfo({});
        if(ShopInfo.data){
          if(ShopInfo.data.distributorBO){
            this.$router.push('/myShop')
          }else{
            this.$router.push('/shopApplicate')
          }
        }
         
        
      }
    },

    mounted: function () {
     
    }
  }

</script>
