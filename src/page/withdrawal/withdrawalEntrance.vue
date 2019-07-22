<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .right-menu {
        width: 10px;
        height: 10px;
        background-image: url('~jd/images/product-detail-sprites-mjs.png');
        background-repeat: no-repeat;
        background-size: 100px 100px;
        background-position: 5px -20px;
        margin-left: 4px;
      }
   .withdrawal{
       width: 10rem;
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
              color: #999;  
          }
      }
      .withdrawal-tip{
          font-size: 14px;
          color: #999;
          line-height: 20px;
          padding: 6px .3rem 0;
        
          em{
              color: $red;
          }
      }
   }

</style>

<template>
  <div class="withdrawal">
      <div class="withdrawal-list" style="border-bottom:none;">
            <div class="withdrawal-listleft">可提现金额</div>
            <div class="withdrawal-listright"></div>
        </div>
        <div class="withdrawal-list" style="height: 30px;" v-if="accountRevenue.balance_amount>0" @click= "()=>$router.push({path: '/withdrawalAccount'})">
            <div class="withdrawal-listleft" style="font-size:18px;font-weight: bold">￥{{accountRevenue.balance_amount/100|TwoNum}}</div>
            <div class="withdrawal-listright">提现<span class="right-menu"></span></div>
        </div>
        <div class="withdrawal-list" style="height: 30px;" v-else>
            <div class="withdrawal-listleft" style="font-size:18px;font-weight: bold">￥{{accountRevenue.balance_amount/100|TwoNum}}</div>
            <div class="withdrawal-listright">提现<span class="right-menu"></span></div>
        </div>
        <div class="withdrawal-list"  v-if="accountRevenue.bank_card_number==-1" style="border-bottom:none;" @click= "()=>$router.push({path: '/withdrawalEdit'})">
            <div class="withdrawal-listleft">提现账户</div>
            <div class="withdrawal-listright">请设置提现账户<span class="right-menu"></span></div>
        </div>
        <div class="withdrawal-list"  v-if="accountRevenue.bank_card_number!=-1" style="border-bottom:none;" @click= "()=>$router.push({path: '/withdrawalInfo'})">
            <div class="withdrawal-listleft">提现账户</div>
            <div class="withdrawal-listright">{{accountRevenue.bank_card_number}}<span class="right-menu"></span></div>
        </div>
        <div class="withdrawal-list" style="margin-top:8px;" @click="()=>$router.push({path:'/withdrawalAccountBook'})">
            <div class="withdrawal-listleft">结算对账</div>
            <div class="withdrawal-listright"><span class="right-menu"></span></div>
        </div>
        <div class="withdrawal-list" style="border-bottom:none;"  @click="()=>$router.push({path:'/withdrawalRecord'})">
            <div class="withdrawal-listleft">提现记录</div>
            <div class="withdrawal-listright"><span class="right-menu"></span></div>
        </div>
        <p class="withdrawal-tip"><em>* </em> 提现需要1-3个工作日的人工审核，审核通过后，相应款项会进入你的提现账户。</p>
  </div>
</template>

<script>
import {
    getLocalStorage,
    setLocalStorage,
    getSessionStorage
  } from '@/utils/mixin';
import {
    accountRevenue
  } from '@/service/getData';
  import {
    Toast
  } from 'mint-ui'
  export default {
    data() {
      return {
        accountRevenue:{
            balance_amount:0,
            bank_card_number:-1
        }
      };
    },

    watch: {},

    components: {
      // LoadMore
    },

    computed: {
     
    },

    methods: {
        async initData() {
        let Data = await accountRevenue();
            if(Data.code=10000){
            this.accountRevenue=Data.data
            }
        }
    },
    mounted: function () {
     this.initData()
    }
  }

</script>
<style lang='scss' scoped>


</style>
