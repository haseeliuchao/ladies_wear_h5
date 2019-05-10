<!-- logisticsInfo -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  /* 物流信息 */
  .logisticsContainer{
    @include flexbox(space-between,flex-start,column,wrap);
    @include wh(100%,100%);
    background:$bg;
    .logistics-top{
      width:100%;
      height:66px;
      padding:13px .3rem;
      font-size:14px;
      p.orderNo{
        margin-top:8px;
      }
    }
    .logistics-info{
      width:100%;
      height:calc(100% - 66px);
      padding:13px .3rem;
      background:#fff;
      .logistics-title{
        font-size:16px;
      }
      .orderFollow-list{
        @include flexbox(flex-start,flex-start,row,nowrap);
        .orderFollow-item{
          display:flex;
          flex:1;
          align-items:center;
          height:50px;
          font-size:13px;
        }
        .orderFollow-list-left{
          .orderFollow-item{
            width:80px;
            color:#999;
          }
        }
        .orderFollow-list-right{
          .orderFollow-item{
            width:7rem;
            font-size:#333;
            text-indent:25px;
            background:url('~jd/images/orderLine2.png') no-repeat left top;
            background-size:10px 50px;
            &:first-child{
              background:url('~jd/images/orderLine1.png') no-repeat left 20px;
              background-size:10px 30px;
            }
            &:last-child{
              background:url('~jd/images/orderLine3.png') no-repeat left 0;
              background-size:10px 30px;
            }
          }
        }
      }
    }
  }
</style>
<template>
    <!-- 物流信息 -->
    <div class="logisticsContainer">
      <div class="logistics-top">
        <p class="company">物流公司：<span>{{logisticsInfo.com}}</span></p>
        <p class="orderNo">单号：<span>{{logisticsInfo.nu}}</span></p>
      </div>
      <!-- 订单跟踪 -->
      <div class="logistics-info">
        <h2 class="logistics-title">订单跟踪</h2>
        <div class="ordeFollow-list" v-for="(item,index) in logisticsInfo.data" :key="index">
        <!-- <div class="orderFollow-list"> -->
          <ul class="orderFollow-list-left">
            <li class="orderFollow-item">{{item.time}}</li>
          </ul>
          <ul class="orderFollow-list-right">
            <li class="orderFollow-item">{{item.context}}</li>
          </ul>
        </div>
        
      </div>
    </div>
</template>
<script>
  import LoadMore from 'common/loadMore';
  import {logisticsInfo} from '@/service/getData'
  // import {searchtwoGoods} from '@/service/getData';
  import {Toast} from 'mint-ui';
  export default {
    data() {
      return {
        logisticsInfo:{},
        order_id:'1',
        params: {  
        },
      }
    },
    directives: {
    
    },
    components: {
      LoadMore
    },
    computed: {},

    methods: {
       async initData() {
        let Data = await logisticsInfo({order_id : this.order_id});
        if(Data.code!=10000){
          Toast({
            message:Data.msg
          })
          return
        }else{
          this.logisticsInfo = Data.data;
        }
      },
    },
    mounted: function () {
      this.initData();
    }


    
  }

</script>