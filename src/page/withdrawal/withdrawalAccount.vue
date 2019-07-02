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
      .right-menuclose{
          height: 19px;
          width: 19px;
          background: #f2f2f2;
          border-radius: 50%;
          text-align: center;
          line-height: 16px;
          font-size: 16px;
          color: #666;
      }
   .withdrawal{
       width: 10rem;
       padding-top: 8px;
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
              p{
                  img{
                      height: 28px;
                      width: 28px;
                  }
                  span{
                          vertical-align: super;
                          margin-left: 8px;
                  }
              }
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
   

   .bottom-btn{
       width:9.4rem;
       margin: 0 auto;
       background: $red;
       height: 44px;
       font-size: 18px;
       text-align: center;
       line-height: 44px;
       color: #fff;
       margin-top: 70px;
       border-radius: 6px;
   }
</style>

<template>
  <div class="withdrawal">
      <div class="withdrawal-list" style="border-bottom:none;margin-bottom:8px;">
            <div class="withdrawal-listleft"><p><img src="http://img.chaochujue.cn/ICON/2019/6/2/zhaoshang1562034587881.png"><span>6214830107403155(招商)</span></p></div>
            <div class="withdrawal-listright"><span class="right-menu"></span></div>
      </div>

       <div style="background:#fff">
      <div class="withdrawal-list" style="border-bottom:none;">
            <div class="withdrawal-listleft">提现金额</div>
            <div class="withdrawal-listright"></div>
        </div>
        <div class="withdrawal-list" style="height: 30px;width:9.4rem;padding:0;margin:0 auto;">
            <div class="withdrawal-listleft" style="font-size:18px;font-weight: bold">￥<input type="number" style="font-weight: bold;width:8rem;height: 29px;line-height: normal;" v-model="withdrawalPrice"></div>
            <div class="withdrawal-listright"><span class="right-menuclose">x</span></div>
        </div>
        <div class="withdrawal-list" style="border-bottom:none;height:43px;line-height:43px;">
            <div class="withdrawal-listleft" style="font-size:14px;"><em style="color:#666">可提现金额240.30元，</em><em style="color:#ff2741">全部提现</em></div>
            <div class="withdrawal-listright"></div>
        </div>
       </div>
        <p class="withdrawal-tip"><em>* </em>每个月5日、25日统一进行打款</p>

        <div class="bottom-btn">确认提现</div>
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
        withdrawalPrice:260
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
