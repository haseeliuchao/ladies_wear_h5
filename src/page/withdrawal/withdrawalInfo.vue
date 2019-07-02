<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
   .withdrawal{
       width: 10rem;
       height: 100%;
       background: #fff;
       position: relative;
      .withdrawal-list{
          width: 10rem;
          padding: 0 .3rem;
          height: 50px;
          
          border-bottom: 1px solid #e4e4e4;
          @include flexbox(start, center, row, nowrap);
          .withdrawal-listleft{
              font-size: 15px;
              color: #999;
              width: 2.4rem;
          }
          .withdrawal-listright{
              font-size: 14px;
              color: #333;
              width: 6.4rem;  
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
        <div class="withdrawal-list" style="border-top: 8px solid #f2f2f2;">
            <div class="withdrawal-listleft">户名</div>
            <div class="withdrawal-listright">张三三</div>
        </div>
        <div class="withdrawal-list">
            <div class="withdrawal-listleft">账户</div>
            <div class="withdrawal-listright">6214830107403155</div>
        </div>
        <div class="withdrawal-list">
            <div class="withdrawal-listleft">开户行</div>
            <div class="withdrawal-listright">招商银行</div>
        </div>
        <div class="withdrawal-list">
            <div class="withdrawal-listleft">开户支行</div>
            <div class="withdrawal-listright">北京海淀大街支行</div>
        </div>
        <div class="withdrawal-list">
            <div class="withdrawal-listleft">开户省份</div>
            <div class="withdrawal-listright">北京市海淀区</div>
        </div>

        <div class="fixed-btn">修改提现账户</div>
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
