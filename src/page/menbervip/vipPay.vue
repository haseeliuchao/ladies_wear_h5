<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
   .right-menu {
        width: .266667rem;
        height: .266667rem;
        background-image: url('~jd/images/product-detail-sprites-mjs.png');
        background-repeat: no-repeat;
        background-size: 2.666667rem 2.666667rem;
        background-position: .133333rem -0.533333rem;
      }
  .vip-guide{
      width: 10rem;
      border-top: .213333rem solid #f2f2f2;
      padding-bottom: 3rem;
      img{
          width: 100%;
          
      }
      .link-invite{
          width: 100%;
          padding: 0 .32rem;
          height: 1.173333rem;
          @include flexbox(space-between,center,row,nowrap);
          background: #fff;
          margin-top: .213333rem;
          span{
              font-size: .426667rem;
              color: #333;
          }
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
          <div style="background:#fff">
          <img src="~jd/images/vipcard.png" style="height: 5.866667rem;">
          <img src="~jd/images/vipcardbottom.png" style="height: 6.6rem;">
          </div>
          <!-- vipInvite -->
          <div class="link-invite" @click= "()=>$router.push({path: '/vipPage'})">
              <span>兑换码购买</span>
              <span class="right-menu"></span>
          </div>
          <p :class="['vip-btn',wxPaystatus?'':'disabled-btn']" @click="payByWallet">立即支付￥399</p>
    <BackRouter :fixePosition='2'/>
    </div>

 
</template>

<script>
import BackRouter from 'common/backRouter';
  import {
    Toast,Popup
  } from 'mint-ui'
  import {payToken,vipPayGetData} from '@/service/getData';
  export default {
    data() {
      return {
        wxPaystatus:true
      };
    },

    watch: {},

    components: {
      BackRouter
    },

    computed: {},

    methods: {
        cnzzTrackEvent(category, action, label){
           _czc.push(["_trackEvent",category,action,label]);
      },
        async payByWallet(){
        this.wxPaystatus=false;
        let Data = await payToken({});
        let payData={};
        payData=await vipPayGetData({
          token:Data.data
        })
        if(payData.code!==10000){
          Toast({duration: 1000,
            message: payData.msg
          })
          return  this.$router.push({path:'/VipPaystatus'})
        }
         
         this.wxPay(payData.data)
      },
      wxPay(data){
        this.cnzzTrackEvent('B端充值会员','支付','待支付');
         let that = this
            WeixinJSBridge.invoke(
            //微信支付的一些认证  需要去网站设置好  然后在这调用
                'getBrandWCPayRequest', {
                    "appId":data.app_id,                            //公众号名称，由商户传入     
                    "timeStamp":data.time_stamp,         //时间戳，自1970年以来的秒数     
                    "nonceStr":data.nonce_str,                //随机串     
                    "package":data.package_value,     
                    "signType":data.sign_type,         //微信签名方式：     
                    "paySign":data.pay_sign             //微信签名 
                },
                function(res){
                //这个是支付成功的回调
                    
                    if(res.err_msg == "get_brand_wcpay_request:ok" ){
                            this.cnzzTrackEvent('B端充值会员','支付','支付成功');
                            that.$router.push({path:'/VipPaystatus?pay_status=1'})

                    } else{
                        that.$router.push({path:'/VipPaystatus'})
                    }
                }); 
      }

    },
    filters:{},
    mounted: function () {


    }
  }

</script>
