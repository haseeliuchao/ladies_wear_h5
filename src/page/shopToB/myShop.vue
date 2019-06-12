<!-- review -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .content{
    min-height:100vh;
    background-color:#fff;
    color:#333;
  }
  .store-header{
    padding:8px .3rem 16px;
    border-top:1px solid #e4e4e4;
    h2{
      padding-left:10px;
      border-left:5px solid $red;
      font-size:16px;
      font-weight:normal;
      line-height:20px;
    }
    ul{
      @include flexbox(space-between,center,row,wrap);
      font-size:14px;
      li{
        // @include flexbox(flex-start,center,column,wrap);
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        // width:3.1rem;
        padding:12px 0 ;
        font-size:15px;
        span{
          margin-bottom:10px;
        }
      }
    }
  }
  .store-apply{
    font-size:16px;
    h2{
      margin:0 .3rem;
      padding-left:10px;
      border-left:5px solid $red;
      font-size:16px;
      font-weight:normal;
      line-height:20px;
    }
    ul{
      @include flexbox(flex-start,center,column,wrap);
      margin-top:8px;
      li{
        @include flexbox(flex-start,center,row,wrap);
        width:100%;
        padding:8px .3rem;
        border-bottom:1px solid #e4e4e4;
        img{
          justify-content: flex-start;
          width:34px;
          height:34px;
          margin-right:10px;
        }
        span{
          display:flex;
          flex:1;
          justify-content: flex-end;
          color:#a4a4a4;
        }
      }
    }
  }
</style>
<template>
<div>
  <div class="content">  
    <div class="store-header">
      <h2>今日业绩</h2>
      <ul>
        <li><span>0</span>支付订单数</li>
        <li><span>0</span>支付金额（元）</li>
        <li><span>0</span>可用余额（元）</li>
        <li><span>0</span>待发货订单数</li>
        <li><span>0</span>售后订单数</li>
      </ul>
    </div>
    <div class="store-apply">
      <h2>我的应用</h2>
      <ul>
          <li @click="$router.push('/product')"><img src="~jd/images/pdManage.png">商品管理
          <span>></span></li>
          <li @click="$router.push('/orderList')"><img src="~jd/images/orderManage.png">订单管理<span>></span></li>
          <li @click="editShop"><img src="~jd/images/shopManage.png">店铺管理<span>></span></li>
          <li @click="$router.push('/customerList')"><img src="~jd/images/kehuManage.png">客户管理<span>></span></li>
          <li @click="$router.push('/customerList')"><img src="~jd/images/zichanManage.png">资产管理
          <span>></span></li>
      </ul> 
    </div> 
  </div>
  <BackHead/>
  <FooterViewToB/>
</div>
</template>

<script>
import FooterViewToB from 'component/footer/footerViewToB';
import BackHead from 'common/backHead';
  export default {
    data() {
      return {
      }
    },
     components: {
      FooterViewToB,
      BackHead,
    },
    methods: {
    },

    mounted: function () {
    }
  }

</script>
<style lang="scss" scoped>


</style>
