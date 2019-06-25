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
      background:url('~jd/images/home.png') no-repeat center 7px;
      background-size:22px 22px;
      &.active {
        background:url('~jd/images/home_on.png') no-repeat center 7px;
        background-size:22px 22px;
        color: #ff2741;
      }
    }
    .cart {
      background:url('~jd/images/cart.png') no-repeat center 7px;
      background-size:24px 24px;
      &.active {
        background:url('~jd/images/cart_on.png') no-repeat center 7px;
        background-size:24px 24px;
        color: #ff2741;
      }
    }
    .myOrder {
      background:url('~jd/images/myorder.png') no-repeat center 6px;
      background-size:22px 23px;
      &.active {
        background:url('~jd/images/myorder_on.png') no-repeat center 6px;
        background-size:22px 23px;
        color: #ff2741;
      }
    }
  }

</style>
<template>
  <ul class="nav-bar fool">
    <li :class="['barIcon','home',$route.name==='indexToC'?'active':'']" @click= "$router.push(`/indexToC/${distributorId}`)">首页</li>
    <li :class="['barIcon','cart',$route.name==='cartToC'?'active':'']" @click= "$router.push(`/cartToC/${distributorId}`)">购物车</li>
    <li :class="['barIcon','myOrder',$route.name==='orderListToC'?'active':'']" @click= "$router.push({path: '/orderListToC/0',query: {distributor_id:sessionDistributorId}})">订单</li>
  </ul>
</template>
<script>
    import {
    getSessionStorage,
  } from '@/utils/mixin';
  export default {
    props:{
        distributorId:{
          type:Number,
          default: 0
        }
    },
    data() {
      return {
           sessionDistributorId:null
      };
    },

    watch: {},

    components: {},

    computed: {},

    methods: {
          Initdata(){
           this.sessionDistributorId= getSessionStorage('distributorId')
          }
    },

    mounted: function () {
          this.Initdata()
    }
  }

</script>
