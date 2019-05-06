<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .paymentLoading {
    position: fixed;
    @include flexbox(center,
    center,
    row,
    nowrap);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      background: rgba(0, 0, 0, .6);
      width: 3rem;
    }
  }

  .paymentContainer {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .4);
    @include flexbox(center,
    center,
    row,
    nowrap);
    .content {
      width: 85%;
      background: #fff;
      border-radius: 10px;
      >button {
        width: 60%;
        margin: 20px auto;
        background: $red;
      }
      >a {
        margin: 5px 0;
        padding: 0 15px;
      }
      .title {
        @include flexbox(center,
        center,
        row,
        nowrap);
        position: relative;
        padding: 15px;
        border-bottom: 1px solid #eee;
        strong {
          font-size: 20px;
        }
        .closeIcon {
          display: block;
          background: url('~jd/images/product-detail-sprites-mjs.png') no-repeat;
          width: 25px;
          height: 25px;
          background-position: -38px -19px;
          background-size: 150px;
          vertical-align: -8px;
          position: absolute;
          left: 10px;
        }
      }
      .paymentInfo {
        padding: 15px;
        border-bottom: 1px solid #eee;
        @include flexbox(flex-start,
        center,
        column,
        wrap);
        font-size: 20px;
        span {}
        strong {
          font-size: 40px;
          font-weight: 400;
          margin: 10px 0 0;
        }
      }
    }
  }

  .my-order {
    .ordertop-status{
      width: 10rem;
      height: 79px;
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
    .ordertop-address{
      padding: $padding;
      background: #fff;
      margin-top: $margin;
      color: #333;
      .address-title{
        font-size: 16px;
        margin-bottom: $margin
      }
      .address-username{
        font-size: 14px;
        line-height: 25px;
      }
      .address-text{
        font-size: 13px;
        line-height: 18px;
      }
    }
    .order-product-detail{
           padding: 6px 10px 10px;
           background: #fff;
           p{
             @include flexbox(space-between,
              center,
              row,
              nowrap);
              font-size: 15px;
             line-height: 26px;
              strong{
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
           .order-product-detailone{
             color: #333
           }
           .order-product-detailtwo{
             color: #666;
             strong{
                
                      span{
                       
                        color: #666;
                        
                      }
                      em{
                        color: #666;
                      
                      }
              }
           }
           .order-btn-group {
            @include flexbox(flex-end,
            center,
            row,
            nowrap);
            padding: 10px 0 0;
            
            >span {
              padding: 4px 10px;
              color: $red;
              font-size: 14px;
              border: 1px solid $red;
              border-radius: 3px;
              margin-left: 15px;
            }
          }
          }

    .my-header {
      padding: $padding;
      background: #fff;
      position: relative;
      z-index: 1;
      @include flexbox(space-between,
      center,
      row,
      nowrap);
      border-bottom: 1px solid #eee;
      .back {
        display: block;
        width: .65rem;
        height: .65rem;
        background: url('~jd/images/arrow-left.png') no-repeat;
        background-size: 100%;
      }
      strong {
        font-size: 18px;
        font-weight: normal;
        color: #333;
      }
      .myMsg {
        display: block;
        background: url('~jd/images/searchIcon.png') no-repeat;
        background-size: 600% 100%;
        height: .65rem;
        width: .65rem;
        background-position: -2.6rem 0;
      }
    }
    .topnav {
      display: flex;
      width: 9rem;
     
      flex: 1;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-left: .5rem;
      z-index: 111;
      position: relative;
      
      #loadingbar {
        position: absolute;
        transition: .4s;
        width: calc((100%/8));
        background: $red;
        bottom: 0;
        height: 2px;
      }
      >span {
        // width: 33.33%;
        padding: 12px 0 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #333;
      }
      .active {
        color: $red;
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
      .all-order {
      
      }
      .order-list {
        // background: #fff;
        margin-top: $margin;
        .order-item {
          margin-top: 10px;
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
            border-bottom: 1px solid #e4e4e4;
            .order-product-item {
              padding: $padding;
              width: 100%;
              >div {
                @include flexbox(flex-start,
                flex-start,
                row,
                nowrap);
                width: 100%;
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
                    @include textoverflow(3);
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
          .order-btn-group {
            @include flexbox(flex-end,
            center,
            row,
            nowrap);
            padding: 5px $padding 16px;
            width: 10rem;
            >span {
              padding: 4px 10px;
              color: $red;
              font-size: 14px;
              border: 1px solid $red;
              border-radius: 3px;
              margin-left: 15px;
            }
          }
        }
      }
    }
  }

</style>

<template>
  <div class="my-order">
    <div class="ordertop-status">
         <p>订单已完成</p>
         <img src="~jd/images/order_wancheng.png" style="height:48px;">
    </div>
    <div class="ordertop-address">
      <p class="address-title">收货地址</p>
      <p class="address-username">张三三<em style="margin-left:12px;font-size:12px;">18312345678</em></p>
      <p class="address-text">广东省 云浮市 云安县 文明街道 福光小区60幢3单元3号301
室</p>
    </div>


    <div class="order-container">
        <!-- 全部订单 -->
        <!-- <div class="all-order" v-if="orderList!=''">
          <div class="order-list">
            <div class="order-item" v-for="(item,index) in orderList" :key="index">
              <div class="order-top">
                <div class="left">
                  <img src="~jd/images/applist (5).png" alt="">
                  <span>京东Apple 官方旗舰店</span>
                </div>
                <div class="right">
                  <div class="order-status">
                    <span v-if="item.orderInfo.pay_status === 0 && item.orderInfo.finish_status === 0">等待付款</span>
                    <span v-if="item.orderInfo.confirm_status === 1 && item.orderInfo.pay_status === 1 && item.orderInfo.finish_status === 0">等待收货</span>
                    <span v-if="item.orderInfo.finish_status === 1">已完成</span>
                    <span v-if="item.orderInfo.cancel_status === 1">已取消</span>
                  </div>
                </div>
              </div>
              <div class="order-product-list">
                <div class="order-product-item" v-for="(prod,prodindex) in item.ProductList" :key="prodindex">
                  <div>
                    <img :src="prod.product.image_url[0].url" alt="">
                    <div class="product-info">
                      <p class="prod-name">{{prod.product.productName}}</p>
                      <p class="prod-price">
                        <strong>&yen;{{prod.product.price * prod.counter}}</strong>
                        <span>x {{prod.counter}}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-sku">
                <span>共{{item.ProductList.length}}件商品&nbsp;需支付：</span>
                <strong>&yen;&nbsp;{{item.orderInfo.total_fee}}</strong>
              </div>
              <div class="order-btn-group">
                <span class="payment" v-if="item.orderInfo.confirm_status === 1 && item.orderInfo.pay_status === 0" @click="payment(item)">去支付</span>
                <span class="payment" v-if="item.orderInfo.confirm_status === 1 && item.orderInfo.pay_status === 1 && item.orderInfo.finish_status === 0"
                  @click="finishOrder(item)">确认收货</span>
                <span class="payment" v-if="item.orderInfo.confirm_status === 0 && item.orderInfo.pay_status === 0" @click="cancelOrder(item)">取消</span>
                <span class="payment" v-if="item.orderInfo.comment_status === 0 && item.orderInfo.confirm_status === 1 && item.orderInfo.pay_status === 1 && item.orderInfo.finish_status === 1"
                  @click="commitMessage(item)">去评论</span>
              </div>
            </div>
          </div>
        </div> -->

        <div class="all-order">
          <div class="order-list">
            <div class="order-item">
              <div class="order-top">
                <div class="left">
                  <span>商品信息</span>
                </div>
              </div>
              <div class="order-product-list">
                <div class="order-product-item">
                  <div>
                    <img src="https://laquimage.b0.upaiyun.com/activity/2019/4/14/img1555229165205_344.jpg!232x232">
                    <div class="product-info">
                      <p class="prod-name">LACOSTE L!VE（法国鳄鱼）女士简约通勤条T恤店</p>
                      <p class="prodsku-info">颜色 红色   尺寸 M</p>
                      <p class="prod-price">
                        <strong><span>&yen;</span><em>399</em><em style="font-size:12px;">.99</em></strong>
                        <span>x2</span>
                      </p>
                    </div>
                  </div>
                </div>
                <!-- <div class="order-btn-group">
                <span style="color:#999;border:1px solid #999" class="payment">售后中</span>
                </div> -->
                <div class="order-product-item">
                  <div>
                    <img src="https://laquimage.b0.upaiyun.com/activity/2019/4/14/img1555229165205_344.jpg!232x232">
                    <div class="product-info">
                      <p class="prod-name">LACOSTE L!VE（法国鳄鱼）女士简约通勤条T恤店</p>
                      <p class="prodsku-info">颜色 红色   尺寸 M</p>
                      <p class="prod-price">
                        <strong><span>&yen;</span><em>399</em><em style="font-size:12px;">.99</em></strong>
                        <span>x2</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="order-btn-group">
                <span style="color:#999;border:1px solid #999" class="payment">售后成功</span>
            
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </div>
    <div class="order-product-detail">
                <p class="order-product-detailone"><span>商品金额</span> <strong><span>&yen;</span><em>399</em><em style="font-size:12px;">.99</em></strong></p>
                <p class="order-product-detailtwo"><span>运费</span> <strong><em style="font-size:18px;">+</em><span>&yen;</span><em>5</em><em style="font-size:12px;">.00</em></strong></p>
                <p class="order-product-detailtwo"><span>运费券</span> <strong><em style="font-size:18px;">-</em><span>&yen;</span><em>5</em><em style="font-size:12px;">.00</em></strong></p>
        </div>

        <div class="order-product-detail" style="margin-top:10px;margin-bottom:90px">
                <p class="order-product-detailone" style="justify-content:start"><span>实付金额：</span> <strong><span>&yen;</span><em>399</em><em style="font-size:12px;">.99</em></strong></p>
                <p class="order-product-detailtwo" style="justify-content:start"><span>订单编号：</span> <span>38757328485</span></p>
                <p class="order-product-detailtwo" style="justify-content:start"><span>下单时间：</span> <span>2018-01-13 13:36</span></p>
        <div class="order-btn-group">
                <span style="color:#999;border:1px solid #999" class="payment">查看物流</span>
                <span class="payment">确认收货</span>
                </div>
        </div>
  </div>
</template>

<script>
  import {
    getOrderList
  } from '@/service/getData';
  // import LoadMore from 'common/loadMore';
  import {
    Toast
  } from 'mint-ui'
  export default {
    data() {
      return {
        commad: getOrderList,
        visiblePopup: {
          paymentLoadingVisible: false,
          paymentContainerVisible: false
        },
        paymentPassword: null, //支付密码
        currentOrder: {}, //当前订单
        params: {
          page_size: 10,
          current_page: 1,
          cancel_status: null,
          confirm_status: null,
          pay_status: null,
          finish_status: null
        },
        orderList: [],
        active: null
      };
    },

    watch: {},

    components: {
      // LoadMore
    },

    computed: {},

    methods: {
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
          this.onRefreshCallback()
        })
      },
    },
    mounted: function () {
      
    }
  }

</script>
<style lang='scss' scoped>


</style>
