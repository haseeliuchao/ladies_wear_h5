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
      background: url('~jd/images/navbar1.png') 0 0 no-repeat;
      background-size: 700% 370%;
      color:#666;
      display: flex;
      flex: 1;
      justify-content:center;
      align-items:flex-end;
    }
    .home {
      background-position: -.88rem -34px;
      &.active {
        background-position: -.88rem -106px;
         color: #ff2741;
      }
    }
    .category {
      background-position: -3.5rem -34px;
      &.active {
        background-position: -3.5rem -105px;
         color: #ff2741;
      }
    }
    .find {
      position: relative;
      top:-10px;
      background-position: -11.5rem -62px;
      &.active {
        background-position: -11.5rem -62px;
      }
    }
    .cart {
      background-position: -6.16rem -34px;
      &.active {
        background-position: -6.16rem -105px;
         color: #ff2741;
      }
    }
    .myHome {
      background-position: -8.78rem -34px;
      
      &.active {
        background-position: -8.78rem -105px;
        color: #ff2741;
      }
    }
  }

</style>
<template>
  <ul class="nav-bar fool">
    <li :class="['barIcon','home',$route.name==='index'?'active':'']" @click="$router.push('/index')">首页</li>
    <li :class="['barIcon','category',$route.name==='category'?'active':'']" @click="$router.push('/category')">分类</li>
    <li :class="['barIcon','find',$route.name==='article'?'active':'']" @click="$router.push('/searchImg')"></li>
    <li :class="['barIcon','cart',$route.name==='cart'?'active':'']" @click="$router.push('/cart')">购物车</li>
    <li :class="['barIcon','myHome',$route.name==='myhome'?'active':'']" @click="$router.push('/myhome')">我的</li>
  </ul>
</template>

<script>


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
