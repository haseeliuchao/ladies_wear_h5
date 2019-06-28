<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
.pay-status{
  width: 10rem;
  height: 100%;
  text-align: center;
  background: #fff;
  padding-top: 45px;
     .status{
       font-size: 18px;
       color: #333;
       line-height: 46px;
     }
     .status-text{
       color: #666;
       font-size: 13px;
       margin-bottom: 26px;
     }
     .status-link{
       height: 1.18rem;
       width: 9.4rem;
       margin: 0 auto 15px;
       background: -webkit-gradient(linear, 0 top, 0 bottom, from(#ff2741), to(#ff5527));
       border-radius: 6px;
       line-height: 1.18rem;
       color: #fff;
       font-size: 17px;
     }
     .status-linka{
        height: 1.18rem;
       width: 9.4rem;
       margin: 0 auto 15px;
       background: #f9f9f9;
       border-radius: 6px;
       line-height: 1.18rem;
       color: #333;
       font-size: 17px;
       border:1px solid #dadada;
     }
}
</style>

<template>
    
    <div class="pay-status">
          <img src="~jd/images/payOk.png" height="50">
          <p class="status">支付成功</p>
          <p class="status-text">本次支付已成功，详细信息请进入我的订单查看</p>
          <p class="status-link" v-if="!distributorId" @click= "$router.push('/index')">返回主页</p>
          <p class="status-linka" v-if="!distributorId" @click.stop.prevent="!handlerEvent ? $router.push('/orderList/2'):false">我的订单</p>
          <p class="status-link" v-if="distributorId" @click= "$router.push(`/indexToC/${distributorId}`)">返回主页</p>
          <p class="status-linka" v-if="distributorId" @click= "$router.push({path: '/orderListToC/2',query: {distributor_id:distributorId}})">我的订单</p>
    </div>

 
</template>

<script>
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
        commad: searchGoods,
        indexRusultData:[],
        indexParams: {
          title: '',
          category_id:'',
          page_size: 10,
          current_page: 1
        },
        visiblePopup: {
          shareBoo:false
        },
        distributorId:null
      };
    },

    watch: {},

    components: {
      LoadMore
    },

    computed: {},

    methods: {
      async initData() {
       
      },
      
    
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


      this.distributorId=getSessionStorage('distributorId')
      if(this.distributorId){
        document.title=getSessionStorage('distributorTitle');
      }


    }
    ,
    beforeRouteLeave(to, from, next){
      if(to.name==='createOrderToc'||to.name==='orderToc'){
        next({path: '/orderListToC/2',query: {distributor_id:getSessionStorage('distributorId')}});
      }else if(to.name==='createOrder'||to.name==='order'){
       next({path: '/orderList/2'});
      }else {
        next();
      }
    }
  }

</script>
