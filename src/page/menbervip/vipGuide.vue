<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .vip-guide{
      width: 10rem;
      background: #fff;
      padding-bottom: 1.733333rem;
      img{
          width: 100%;
          height: 44.866667rem;
      }
    .vip-btn{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1.3rem;
        text-align: center;
        line-height: 1.3rem;
        font-size: .48rem;
        color: #fff;
        background: -webkit-gradient(linear, 0 top, 0 bottom, from(#ff2741), to(#ff5527));
        box-shadow: 0 2px 4px rgba(255, 85, 39, 0.5);
        -webkit-box-shadow: 0 2px 4px rgba(255, 85, 39, 0.5);
    }
  }
</style>

<template>
    
    <div class="vip-guide">
          <img src="~jd/images/vipGuidebg.png">
          <p class="vip-btn" @click= "()=>$router.push({path: '/vipPay'})">马上成为会员</p>
    <BackRouter :fixePosition='2'/>
    </div>

 
</template>

<script>
import BackRouter from 'common/backRouter';
  import {
    Toast,Popup
  } from 'mint-ui'
  export default {
    data() {
      return {
        
      };
    },

    watch: {},

    components: {
      BackRouter
    },

    computed: {},

    methods: {

    },
    filters:{},
    mounted: function () {


    }
  }

</script>
