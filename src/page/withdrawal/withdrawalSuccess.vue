<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .withdrawal-success{
      width: 10rem;
                .pay-status{
            width: 100%;
            
            text-align: center;
            background: #fff;
            padding-top: 45px;
            padding-bottom: 25px;
                .status{
                font-size: 18px;
                color: #333;
                line-height: 46px;
                }
                .status-text{
                color: #666;
                font-size: 15px;
                line-height: 22px;
                }
                
            }
            .withdrawal-list{
          width: 10rem;
          padding: 0 .3rem;
          height: 50px;
          background: #fff;
          border-bottom: 1px solid #e4e4e4;
          @include flexbox(space-between, center, row, nowrap);
          .withdrawal-listleft{
              font-size: 15px;
              color: #333;
          }
          .withdrawal-listright{
              @include flexbox(flex-end, center, row, nowrap);
              font-size: 14px;
              color: #333;  
              
          }
      }

      .withdrawal-back{
          color: $red;
          width: 100%;
          text-align: center;
          font-size: 18px;
          margin-top: 100px;
      }
  }

</style>

<template>
    <div class="withdrawal-success">
        <div class="pay-status">
            <img src="~jd/images/payOk.png" height="50">
            <p class="status">提交成功</p>
            <p class="status-text">已提交申请，等待财务审核<br>预计1-3个工作日到账</p>
        </div>
        
        <div class="withdrawal-list" style="margin-top:8px;padding-top: 8px;border-bottom:none;height:40px;">
            <div class="withdrawal-listleft">提现信息：<em style="font-size:14px;">提现金额</em></div>
            <div class="withdrawal-listright"><span>￥{{accountRevenue.withdraw_amount/100|TwoNum}}</span></div>
        </div>
        <div class="withdrawal-list" style="height:40px;padding-bottom: 14px;">
            <div class="withdrawal-listleft"><em style="visibility: hidden;">提现信息：</em><em style="font-size:14px;">提现时间</em></div>
            <div class="withdrawal-listright"><span>{{accountRevenue.gmt_created | DateFormat('yyyy-MM-dd hh:mm:ss')}}</span></div>
        </div>
        <div class="withdrawal-list" style="border-bottom:none;">
            <div class="withdrawal-listleft">收款信息：<em style="font-size:14px;">{{accountRevenue.bank_name}}借记卡({{bank_namesilce}})</em></div>
            <div class="withdrawal-listright"></div>
        </div>

        <p class="withdrawal-back" @click= "()=>$router.push({path: '/myShop'})">资产中心>></p>
        <BackRouter/>
    </div>

 
</template>

<script>
import BackRouter from 'common/backRouter';
  import {
    isWeiXin,pushHistory,getSessionStorage
  } from '@/utils/mixin';
    import {
    withdrawBillDetails
  } from '@/service/getData';
  import {
    Toast
  } from 'mint-ui'
  export default {
    data() {
      return {
         emShow:false,
         accountRevenue:{
             withdraw_amount:0,
         },
         bank_namesilce:''
      };
    },

    watch: {},

    components: {
      BackRouter
    },

    computed: {},

    methods: {
      async initData(){
          let Data = await withdrawBillDetails({
              withdraw_code:this.$route.query.withdraw_code
          });
            if(Data.code=10000){
            this.accountRevenue=Data.data
            this.bank_namesilce=this.accountRevenue.bank_card_number.substring(this.accountRevenue.bank_card_number.length-4);
            }
        
      }
    },
    filters:{
        topriceafter(value){
            return value.toFixed(2).substring(0, value.toFixed(2).indexOf('.'));
        },
        topricenext(value){
            return value.toFixed(2).substring(value.toFixed(2).indexOf('.')+1);
        }
    },
    mounted: function () {
         this.initData();
    }
   
  }

</script>
