<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .vip-guide{
      width: 10rem;
      background: #fff;
      padding-bottom: 1.733333rem;
      border-top: .213333rem solid #f2f2f2;
      img{
          width: 100%;
      }
    .vip-btn{
        width: 9.36rem;
        height: 1.2rem;
        text-align: center;
        line-height: 1.2rem;
        margin-left: .32rem;
        font-size: .48rem;
        color: #fff;
        @include gradient(#ff2740,#ff5428);
        border-radius: 100px;
        margin-top: 1.066667rem;
    }
  }
</style>

<template>
    
    <div class="vip-guide">
          <img src="~jd/images/vipcard.png">
          <!-- <div class=""></div> -->
          <p class="vip-btn">马上成为会员</p>
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
