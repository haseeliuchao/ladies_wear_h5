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
        width: 9.36rem;
        height: 1.2rem;
        text-align: center;
        line-height: 1.2rem;
        margin-left: .32rem;
        font-size: .48rem;
        color: #fff;
        background: -webkit-gradient(linear, 0 top, 0 bottom, from(#ff2741), to(#ff5527));
        border-radius: 100px;
        margin-top: 1.066667rem;
        box-shadow: 0 2px 4px rgba(255, 85, 39, 0.5);
        -webkit-box-shadow: 0 2px 4px rgba(255, 85, 39, 0.5);
    }
  }
</style>

<template>
    
    <div class="vip-guide">
          <img src="~jd/images/vipGuidebg.png">
          <p class="vip-btn" @click= "()=>$router.push({path: '/vipPay'})">马上成为会员</p>
    <BackRouter/>
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
