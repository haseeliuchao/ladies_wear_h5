<!-- review -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .content{
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
      @include flexbox(flex-start,center,row,wrap);
      font-size:14px;
      li{
        // @include flexbox(flex-start,center,column,wrap);
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        width:3.1rem;
        padding:12px 0 ;
        font-size:15px;
        // &:last-child{
        //   width:5rem;
        // }
        span{
          height:18px;
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
        <li><span>{{shopStastistics.payOrderCount}}</span>支付订单数</li>
        <li><span>{{shopStastistics.payOrderPrice}}</span>支付金额(元)</li>
        <li><span>0</span>可用余额(元)</li>
        <li><span>{{shopStastistics.toDeliverCount}}</span>待发货订单</li>
        <li><span>{{shopStastistics.toPostSalesCount}}</span>售后中订单&nbsp;&nbsp;</li>
      </ul>
    </div>
    <div class="store-apply">
      <h2>我的应用</h2>
      <ul>
          <li @click="$router.push('/goodslist/'+distributor_id+'')"><img src="~jd/images/pdManage.png">商品管理
          <span>></span></li>
          <li @click="$router.push({path: '/goodorderList/1',query: {distributor_id:distributor_id}})"><img src="~jd/images/orderManage.png">订单管理<span>></span></li>
          
          <li @click="$router.push({path: '/shopManage',query: {distributor_id:distributor_id}})"><img src="~jd/images/shopManage.png">店铺管理<span>></span></li>
          <li @click="$router.push('/memberList')"><img src="~jd/images/kehuManage.png">客户管理<span>></span></li>
          <li @click="showToast"><img src="~jd/images/zichanManage.png">资产管理
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
import {Toast} from 'mint-ui';
  export default {
    data() {
      return {
          shopStastistics:{ },
          distributor_id:null
      }
    },
    components: {
      FooterViewToB,
      BackHead,
    },
    methods: {
      async initData(){
        let res = await this.$store.dispatch('GetShopStastistics');
        if(res.code==10000){
            this.shopStastistics = res.data;
            this.distributor_id=this.shopStastistics.distributorBO.distributor_id;
        }else{
            this.shopStastistics = null;
            Toast({
                message: '访问接口失败'
            })
        }
      },
      async showToast(){
        Toast({
          message:'该应用暂未开放',
          duration:1000,
        })
      }
    },
    mounted: function () {
      this.initData();
    }
  }

</script>
<style lang="scss" scoped>


</style>
