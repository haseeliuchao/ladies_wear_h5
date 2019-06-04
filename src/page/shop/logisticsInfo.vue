<!-- logisticsInfo -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  /* 物流信息 */
  .logisticsContainer{
    @include flexbox(space-between,flex-start,column,wrap);
    
    background:$bg;
    .logistics-top{
      width:100%;
      height:66px;
      padding:0 .3rem 13px;
      font-size:14px;
      p.orderNo{
        margin-top:8px;
      }
    }
    .logistics-info{
      width:100%;
      padding:13px .3rem;
      background:#fff;
      .logistics-title{
        font-size:16px;
            padding: 13px 0 25px;
      }
      .orderFollow-list{
        @include flexbox(flex-start,flex-start,column,wrap);
        .orderFollow-item{
         @include flexbox(flex-start,flex-start,row,nowrap);
          font-size:13px;
          li{
            line-height: 20px;
            &:first-child{
               width:2.8rem;;
            }
            &:last-child{
              position:relative;
              width:6.6rem;
              min-height:28px;
              padding-left:20px;
              padding-bottom:25px;
              border-left:1px dashed #ff2741;
              span{
                position: absolute;
                left: -5.5px;
                display:inline-block;
                border-radius:5px;
                border:5px solid #ff2741;
                &:last-child{
                  display:none;
                }
              }
              

            }
          }
          &:last-child{
            li:last-child{
              padding-bottom:0;
              span:last-child{
                bottom:0;
                display:block;
              }
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
        <p class="company">物流公司：<span>{{logisticsInfo.name}}</span></p>
        <p class="orderNo">单号：<span>{{logisticsInfo.num}}</span></p>
      </div>
      <!-- 订单跟踪 -->
      <div class="logistics-info">
        <h2 class="logistics-title">订单跟踪</h2>
        <div class="orderFollow-list">
          <ul class="orderFollow-item" v-for="(item,index) in logisticsInfo.data" :key="index">
            <li>{{item.time}}</li>
            <li><span></span>{{item.context}}<span></span></li>
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
        order_code:null,
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
        let Data = await logisticsInfo({order_code : this.$route.query.order_code});
        if(Data.code!=10000){
          Toast({
            message:Data.msg
          })
          return
        }else{
          this.logisticsInfo = JSON.parse(Data.data);
        }
      },
    },
    mounted: function () {
      this.initData();
    }



  }

</script>