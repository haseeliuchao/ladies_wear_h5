<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
.pay-status{
  width: 10rem;
  height: 100%;
  text-align: center;
  background: #fff;
  padding-top: 2.56rem;
     .status{
       font-size: .48rem;
       color: #333;
       line-height: 1.226667rem;
     }
     .status-text{
       color: #666;
       font-size: .346667rem;
       margin-bottom: .693333rem;
     }
     .status-link{
       height: 1.18rem;
       width: 9.4rem;
       margin: .4rem auto;
       background: -webkit-gradient(linear, 0 top, 0 bottom, from(#ff2741), to(#ff5527));
       border-radius: 6px;
       line-height: 1.18rem;
       color: #fff;
       font-size: .453333rem;
     }
     .status-linka{
        height: 1.18rem;
       width: 9.4rem;
       margin: 0 auto 15px;
       background: #f9f9f9;
       border-radius: 6px;
       line-height: 1.18rem;
       color: #333;
       font-size: .453333rem;
       border:1px solid #dadada;
     }
}
</style>

<template>
    
    <div class="pay-status">
          <img src="~jd/images/payVipOk.png" v-if="$route.query.pay_status" height="50">
          <img src="~jd/images/payVipError.png" v-else height="50">
          <p class="status" v-if="$route.query.pay_status">支付成功</p>
          <p class="status" v-else>支付失败</p>
          <p class="status-link" v-if="$route.query.pay_status" @click= "$router.push('/index')">会员中心</p>
          <p class="status-link" v-else @click= "()=>$router.push({path: '/vipPay'})">继续支付</p>
          <p class="status-linka" @click= "$router.push('/myhome')">个人中心</p>
    <BackRouter/>
    </div>

 
</template>

<script>
import BackRouter from 'common/backRouter';
 import LoadMore from 'common/loadMore';
 import {searchGoods} from '@/service/getData';
//  import wxapi from '@/utils/wxapi';
  import {
    isWeiXin,pushHistory,getSessionStorage
  } from '@/utils/mixin';
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
      LoadMore,BackRouter
    },

    computed: {},

    methods: {

    },
    filters:{
    },
    mounted: function () {
   
    }
   
  }

</script>
