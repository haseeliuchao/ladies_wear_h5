<!-- footer -->
<style lang='scss' scoped>
  .nav-bar {
    position: fixed;
    width: 10rem;
    margin: 0 auto;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1.35rem;
    padding: .066667rem 0 0;
    background: #fff;
    overflow: hidden;
    clear: both;
    box-shadow: 0px 0px 20px -8px #999;
    display: flex;
    flex: 1;
    z-index: 5000;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    // border-top: 1px solid #eee;
    .barIcon {
      width: 2rem;
      height: 100%;
      margin-bottom:.1rem;
      cursor: pointer;
      background: url('~jd/images/navbar1.png') 0 0 no-repeat;
      background-size: 700% 416%;
      color:#666;
      display: flex;
      flex: 1;
      justify-content:center;
      align-items:flex-end;
    }
    .home {
      background-position: -.9rem -1.02rem;
      &.active {
        background-position: -.9rem -3.04rem;
      }
    }
    .category {
      background-position: -3.5rem -1.02rem;
      margin-right:1rem;
      &.active {
        background-position: -3.5rem -3.04rem;
      }
    }
    .find {
      position: fixed;
      bottom: 8px;
      left: 50%;
      height: 1.45rem;  
      margin-left: -1rem;
      background-position: -11.5rem -1.8rem;
      background-size:700%;
      &.active {
        background-position: -11.5rem -1.8rem;
      }
    }
    .cart {
      background-position: -6.15rem -1.02rem;
      margin-left:1rem;
      &.active {
        background-position: -6.15rem -3.04rem;
      }
    }
    .myHome {
      background-position: -8.8rem -1.02rem;
      &.active {
        background-position: -8.8rem -3.04rem;
      }
    }
  }

</style>
<template>
  <ul class="nav-bar fool">
    <li :class="['barIcon','home',$route.name==='index'?'active':'']" @click="$router.push('/index')">首页</li>
    <li :class="['barIcon','category',$route.name==='category'?'active':'']" @click="$router.push('/category')">分类</li>
    <li :class="['barIcon','find',$route.name==='article'?'active':'']" @click="$router.push('/article')"></li>
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
