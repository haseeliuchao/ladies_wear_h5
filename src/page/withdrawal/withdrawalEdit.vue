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
        display: inline-block;
      }
   .withdrawal{
       width: 10rem;
       height: 100%;
       
       position: relative;
       .withdrawal-tip{
          font-size: 14px;
          color: #999;
          line-height: 44px;
          padding: 0 .3rem;
          em{
              color: $red;
          }
      }
      .withdrawal-list{
          width: 10rem;
          padding: 0 .3rem;
          height: 50px;
          background: #fff;
          border-bottom: 1px solid #e4e4e4;
          @include flexbox(start, center, row, nowrap);
          .withdrawal-listleft{
              font-size: 15px;
              color: #333;
              width: 2.8rem;
              
          }
          .withdrawal-listright{
              @include flexbox(space-between, center, row, nowrap);
              font-size: 14px;
              color: #666;
              width: 6.6rem;  
              height: 49px;
              input{
                  height: 49px;
                  line-height: normal;
                  width: 100%;
              }
              .msgcode{
                  height: 28px;
                  border: 1px solid #e4e4e4;
                  width: 60%;
                  text-align: center;
                  margin-right: 8px;

              }
          }
          .withdrawal-listright1{
              @include flexbox(start, center, row, nowrap);
              span{
                  color: $red;
              }
          }
      }

   }
   .fixed-btn{
       position: absolute;
       bottom: 0;
       left: 0;
       width:10rem;
       background: $red;
       height: 48px;
       font-size: 18px;
       text-align: center;
       line-height: 48px;
       color: #fff;
   }

</style>

<template>
  <div class="withdrawal">
        <p class="withdrawal-tip"><em>* </em>提现请填写银行预留信息</p>
        <div class="withdrawal-list">
            <div class="withdrawal-listleft">户名</div>
            <div class="withdrawal-listright"><input type="text" placeholder="请输入户名"></div>
        </div>
        <div class="withdrawal-list">
            <div class="withdrawal-listleft">账户</div>
            <div class="withdrawal-listright"><input type="number" placeholder="请输入银行卡卡号"></div>
        </div>
        <div class="withdrawal-list">
            <div class="withdrawal-listleft">开户行</div>
            <div class="withdrawal-listright"><span>选择银行</span><span class="right-menu"></span></div>
        </div>
        <div class="withdrawal-list">
            <div class="withdrawal-listleft">开户支行</div>
            <div class="withdrawal-listright"><input type="text" placeholder="请输入开户支行"></div>
        </div>
        <div class="withdrawal-list" style="border-bottom:none;">
            <div class="withdrawal-listleft">开户省份</div>
            <div class="withdrawal-listright"><span>请选择开户省份</span><span class="right-menu"></span></div>
        </div>

        <div class="withdrawal-list" style="margin-top:8px;border-bottom:none;">
            <div class="withdrawal-listleft">手机验证码</div>
            <div class="withdrawal-listright withdrawal-listright1"><input type="text" class="msgcode" placeholder="请输入短信验证码"><span>获取验证码</span></div>
        </div>
<p class="withdrawal-tip" style="line-height: 20px;padding: 6px .3rem 0;"><em>* </em>提现需要1-3个工作日的人工审核，审核通过后，相应款
项会进入你的提现账户。</p>
        <div class="fixed-btn">保存</div>
  </div>
</template>

<script>
import {
    getLocalStorage,
    setLocalStorage,
    getSessionStorage
  } from '@/utils/mixin';
  import {
    Toast
  } from 'mint-ui'
  export default {
    data() {
      return {
        
      };
    },

    watch: {},

    components: {
      // LoadMore
    },

    computed: {
     
    },

    methods: {
      
    },
    mounted: function () {
     
    }
  }

</script>
<style lang='scss' scoped>


</style>
