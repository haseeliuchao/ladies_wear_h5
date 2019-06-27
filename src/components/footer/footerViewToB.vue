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
    border-top:1px solid #e4e4e4;
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
      color:#666;
      display: flex;
      flex: 1;
      justify-content:center;
      align-items:flex-end;
    }
    .home {
      background:url('~jd/images/home.png') no-repeat center 7px;
      background-size:21px 21px;
      &.active {
        background:url('~jd/images/home_on.png') no-repeat center 7px;
        background-size:21px 21px;
        color: #ff2741;
      }
    }
    .myHome {
      background:url('~jd/images/myhome.png') no-repeat center 6px;
      background-size:21px 22px;
      &.active {
        background:url('~jd/images/myhome_on.png') no-repeat center 6px;
        background-size:21px 22px;
        color: #ff2741;
      }
    }
     .myShop {
      background:url('~jd/images/store.png') no-repeat center 7px;
      background-size:24px 21px;
      &.active {
        background:url('~jd/images/store_on.png') no-repeat center 7px;
        background-size:24px 21px;
        color: #ff2741;
      }
    }
  }

</style>
<template>
  <ul class="nav-bar fool">
    <li :class="['barIcon','home',$route.name==='index'?'active':'']" @click= "$router.push('/index')">首页</li>
    <li :class="['barIcon','myHome',$route.name==='myhome'?'active':'']" @click= "$router.push('/myhome')">我的</li>
    <li :class="['barIcon','myShop',$route.name==='myShop'?'active':'']" @click= "$router.push('/myShop')">小店</li>
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
