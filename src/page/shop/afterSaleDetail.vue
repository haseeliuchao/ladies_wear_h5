<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  
  .my-order {
      min-height: 100%;
      background: #fff;
    .ordertop-status{
      width: 10rem;
      height: 80px;
      background: -webkit-gradient(linear, left 0, right 0, from(#ff2741), to(#ff5527));
      @include flexbox(start,
      center,
      row,
      nowrap);
      p{
         width: 60%;font-size: 16px;
         margin-left: .6rem;
         color: #fff;
      }
      
    }
    
    
    .order-container {
      height: auto;
      ._v-container {
        // background: #fff;
      }
      .order-nomore-tip {
        margin-top: 50px;
        @include flexbox(space-between,
        center,
        column,
        wrap);
        i {
          display: block;
          width: 60px;
          height: 60px;
          background: url('~jd/images/order.png') no-repeat;
          background-size: 100%;
        }
        span {
          font-size: 17px;
          font-weight: normal;
          padding: 30px 0;
          color: $gray;
        }
      }
      
        .order-item {
          background: #fff;
          width: 10rem;
          .order-top {
            padding: $padding;
            // border-bottom: 1px solid #e4e4e4;
            @include flexbox(space-between,
            center,
            row,
            nowrap);
            .left {
              text-align: left;
              img {
                width: 15px;
                height: 15px;
                vertical-align: bottom;
              }
              span {
                font-size: 15px;
                color: #666;
                // margin-left: 5px;
              }
            }
            .right {
              .order-status {
                color: $red;
                font-size: 15px;
              }
            }
          }
          .order-product-list {
            @include flexbox(flex-start,
            flex-start,
            column,
            wrap);
            .order-product-item {
              padding: $padding;
              width: 100%;
              >div {
                @include flexbox(flex-end,
                flex-start,
                row,
                nowrap);
                width: 100%;
                padding: 0px;
                img {
                  max-width: 90px;
                  max-height: 90px;
                  // border: 1px solid #eee;
                  border-radius: 6px;
                }
                .product-info {
                  margin-left: $margin;
                  .prod-price {
                    font-size: 14px;
                    >span{
                      color: #999;
                    }
                    strong {
                      font-weight: normal;
                      font-size: 14px;
                      span{
                        font-size: 12px;
                        color: $red;
                        
                      }
                      em{
                        color: $red;
                        font-style: normal
                      }
                    }
                    @include flexbox(space-between,
                    center,
                    row,
                    nowrap);
                  }
                  p {
                    @include textoverflow(2);
                    font-size: 13px;
                    margin: 4px 0;
                    color: #333;
                    line-height: 20px;
                  }
                  .prodsku-info{
                    color: #666;
                    font-size: 12px;
                  }

                }
              }
          }
          
          .order-sku {
            background: #fff;
            padding: 8px $padding;
            text-align: right;
            font-size: $subtitle;
            // border-bottom: 1px solid #eee;
            // color: #333;
            span{
              font-size: 15px;
              color: #333;
              em{
                color: $red;
                margin-left: 6px;
              }
            }
            strong {
                      font-weight: normal;
                      font-size: 14px;
                      span{
                        font-size: 12px;
                        color: $red;
                        
                      }
                      em{
                        color: $red;
                        font-style: normal
                      }
                    }
          }
        }
      }
    }

     .selectedList{
            border: 1px solid #e4e4e4;
            margin: 15px 10px 0px;
            div{
                @include flexbox(space-between,
                center,
                row,
                nowrap);
                height: 42px;
                border-bottom: 1px solid #e4e4e4;
                
                .selectedone{
                    border-right: 1px solid #e4e4e4;
                    width: 20%;
                    text-align: center;
                    height: 42px;
                    line-height: 42px;color: #333;

                }
                .selectedtwo{
                    color: #333;font-size: 13px;
                    width: 80%;
                    padding-right: 15px;
                    text-align: right;color: #333;

                }
            }
        }

        .logisticsInfo{
            padding: 12px;
            .logisticsTitle{
                height: 20px;
                line-height: 20px;
                border-left: 4px solid $red;
                padding-left: 10px;
                font-size: 16px;
                color: #333;
                margin-bottom: 15px;
            }
            .logisticsInput{
                font-size: 14px;
                height: 30px;
                line-height: 30px;
                margin-bottom: 15px;
                input{
                    width: 200px;
                    height: 30px;
                    border: 1px solid #e4e4e4;
                    padding-left: 10px;
                    line-height: normal;
                    border-radius: 0;
                }
            }
            .logisticsAddress{
                line-height: 20px;
                font-size: 14px;
                color: #666
            }
        }
        .sand-data {
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      padding: 14px 0;
      background: $red;
      font-size: 18px;
      color: #fff;
    }
    .backmyHome{
      height: 48px;
      width: 9.2rem;
      margin-left: .4rem;
      line-height: 48px;
      color: $red;
      border: 1px solid #ff2741;
      border-radius: 5px;
      font-size: 18px;
      margin-top: 110px;
    }
  }

</style>

<template>
  <div class="my-order">
    <div class="ordertop-status">
         <p style="line-height:25px;" v-if="orderDetail.post_sales_status===1">等待卖家审核<br>{{orderDetail.gmt_created|DateFormat('yyyy-MM-dd hh:mm')}}</p>
         <p style="line-height:21px;" v-if="orderDetail.post_sales_status===2">卖家同意退款<br>请寄回商品并填写物流信息
<br>{{orderDetail.gmt_created|DateFormat('yyyy-MM-dd hh:mm')}}</p>
         <p style="line-height:25px;" v-if="orderDetail.post_sales_status===3&&orderDetail.post_sales_type===1">等待卖家收货并退款<br>{{orderDetail.gmt_created|DateFormat('yyyy-MM-dd hh:mm')}}</p>
         <p style="line-height:25px;" v-if="orderDetail.post_sales_status===3&&orderDetail.post_sales_type===2">等待卖家退款<br>{{orderDetail.gmt_created|DateFormat('yyyy-MM-dd hh:mm')}}</p>
         <p style="line-height:21px;" v-if="orderDetail.post_sales_status===4">卖家已发起退款<br><em style="font-size:13px;">交易金额将1-3个工作日退回您的支付账户</em>
<br>{{orderDetail.gmt_created|DateFormat('yyyy-MM-dd hh:mm')}}</p>
         <p style="line-height:21px;" v-if="orderDetail.post_sales_status===5">卖家拒绝了您的退款<br><em style="font-size:13px;">如有疑问，请联系在线客服</em>
<br>{{orderDetail.gmt_created|DateFormat('yyyy-MM-dd hh:mm')}}</p>
         <img v-if="orderDetail.post_sales_status===1" src="~jd/images/daishen.png" style="height:48px;">
         <img v-if="orderDetail.post_sales_status===2" src="~jd/images/daitui.png" style="height:48px;">
         <img v-if="orderDetail.post_sales_status===3&&orderDetail.post_sales_type===1" src="~jd/images/order_daishou.png" style="height:48px;">
         <img v-if="orderDetail.post_sales_status===3&&orderDetail.post_sales_type===2" src="~jd/images/daitui.png" style="height:48px;">
         <img v-if="orderDetail.post_sales_status===4" src="~jd/images/yitui.png" style="height:48px;">
         <img v-if="orderDetail.post_sales_status===5" src="~jd/images/weitui.png" style="height:48px;">
    </div>
    <div class="order-container" v-if="orderDetail.post_sales_status!=2">
            <div class="order-item">
              <div class="order-product-list">
                <div class="order-product-item">
                  <div>
                    <img :src="orderDetail.item_index_img_url">
                    <div class="product-info">
                      <p class="prod-name">{{orderDetail.item_title}}</p>
                      <p class="prodsku-info">颜色 {{orderDetail.item_sku_color}}&nbsp;&nbsp;&nbsp;&nbsp;尺寸 {{orderDetail.item_sku_size}}</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </div>
    <div class="selectedList" v-if="orderDetail.post_sales_status!=2">
              <div>
              <p class="selectedone">
              退款金额
              </p>
              <p class="selectedtwo" style="color:#ff2741">¥{{orderDetail.refund_price/100.00|topriceafter}}.{{orderDetail.refund_price/100.00|topricenext}}</p>
              </div>
              <div>
              <p class="selectedone">
              退款原因
              </p>
              <p class="selectedtwo">{{orderDetail.post_sales_reason}}</p>
              </div>
              <div>
              <p class="selectedone">
              提交时间
              </p>
              <p class="selectedtwo">{{orderDetail.gmt_created|DateFormat('yyyy-MM-dd hh:mm')}}</p>
              </div>
              <div style="border-bottom:none">
              <p class="selectedone" style="border-bottom:none">
              退款编码
              </p>
              <p class="selectedtwo">{{orderDetail.post_sales_code}}</p>
              </div>
          </div>

    <div class="logisticsInfo" v-if="orderDetail.post_sales_status==2">
       <p class="logisticsTitle">物流信息</p>
       <p class="logisticsInput">快递公司：<input type="text" v-focus v-model="logisticsForm.logistics_name" placeholder=""></p>
       <p class="logisticsInput">物流单号：<input type="number" v-model="logisticsForm.logistics_code" placeholder=""></p>
       <p class="logisticsTitle">请将商品邮寄至以下地址：</p>
       <p class="logisticsAddress">浙江省 杭州市 西湖区 蒋村街道 中国五园新村 2幢幢幢302室</p>
    </div>

    <p class="backmyHome" @click= "$router.push('/myhome')">
      返回我的主页
    </p>

    <div class="sand-data" v-if="orderDetail.post_sales_status==2" @click= "commitMsg">提交</div>
    </div>
</template>

<script>
  import {
    getSaleDetail,logisticsSend
  } from '@/service/getData';
  import {
    Toast
  } from 'mint-ui'
  export default {
    data() {
      return {
        orderDetail: {},
        logisticsForm: {
          logistics_name:'',
          logistics_code:'',
        }
      };
    },

    watch: {},

    components: {
      // LoadMore
    },

    computed: {},

    methods: {
      async initData() {
        // this.commentParam.ProductNo = this.$route.params.id;
        let Data = await getSaleDetail({
         post_sales_id: this.$route.query.post_sales_id
        });
        if(Data.code!=10000){
          Toast({
            message: Data.msg,
            position: 'bottom'
          })
          return
        }
        this.orderDetail=Data.data
      },
      async commitMsg(){
        let Data =await logisticsSend({
         post_sales_id: this.$route.query.post_sales_id,
         logistics_name:this.logisticsForm.logistics_name,
         logistics_code:this.logisticsForm.logistics_code
        });
        if(Data.code!=10000){
          Toast({
            message: Data.msg,
            position: 'bottom'
          })
          return
        }else{
           this.initData() 
        }
      },
      payment(item) {
        this.visiblePopup.paymentLoadingVisible = true;
        setTimeout(() => {
          this.visiblePopup.paymentLoadingVisible = false;
          this.visiblePopup.paymentContainerVisible = true;
          this.currentOrder = item;
        }, 2000)
      },
      finishOrder(item) { //确认收货
        this.$store.dispatch('FinishOrder', {
          OrderNo: item.orderInfo.OrdertNo
        }).then(response => {
          Toast({
            message: response.Message
          })
        })
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
      this.initData()
    }
  }

</script>
