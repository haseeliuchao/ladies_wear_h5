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
      background: #f2f2f2;
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
        background: #f5f5f5;
      }
      .order-list {
        // background: #fff;
        margin-top: $margin;
        .order-item {
          margin-top: 10px;
          background: #fff;
          width: 9.4rem;
          margin-left: .3rem;
          border-radius: 6px;
          .order-top {
            padding: $padding;
            border-bottom: 1px solid #e4e4e4;
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
                font-size: 14px;
                color: #666;
                // margin-left: 5px;
              }
            }
            .right {
              .order-status {
                color: $red;
                font-size: 14px;
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
    <div class="topnav">
      <span @click.stop.prevent="switchTabs(0)" :class="{'active':active===0}">全部</span>
      <span @click.stop.prevent="switchTabs(1)" :class="{'active':active===1}">待付款</span>
      <span @click.stop.prevent="switchTabs(2)" :class="{'active':active===2}">待发货</span>
      <span @click.stop.prevent="switchTabs(3)" :class="{'active':active===3}">待收货</span>
      <span @click.stop.prevent="switchTabs(4)" :class="{'active':active===4}">已完成</span>
      <span @click.stop.prevent="switchTabs(5)" :class="{'active':active===5}">已关闭</span>
      <div id="loadingbar" :style="active===0 ? 'left:-1%' : active===1 ?  'left:14%' : active===2 ?'left:32%' : active===3 ? 'left:51%' : active===4 ? 'left:69%' : 'left: 87%'"></div>
    </div>
    <div class="order-container">
      <!-- style="width:100%;" @loadMore="infiniteCallback" :commad="commad" :param="params" :topMethod="onRefreshCallback"
        :loadMoreIconVisible="false" ref="orderLoadmore" -->
      <load-more style="width:100%;" v-if="$route.path=='/orderList'" @loadMore="infiniteCallback" :commad="commad" :param="params" :topMethod="onRefreshCallback"
        :loadMoreIconVisible="false" ref="orderLoadmore">
        <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
          slot="refresh-spinner">更新中...</span>
        <!-- 全部订单 -->
        <div class="all-order" v-if="orderList!=''">
          <div class="order-list">
            <div class="order-item" v-for="(item,index) in orderList" :key="index">
              <div class="order-top" @click= "$router.push(`/order/${item.order_code}`)">
                <div class="left">
                  <span>订单编号：{{item.order_code}}</span>
                </div>
                <div class="right">
                  <div class="order-status">
                    <span>{{item.order_status_str}}</span>
                  </div>
                </div>
              </div>
              <div class="order-product-list" @click= "$router.push(`/order/${item.order_code}`)"  v-for="(itemdetail,index) in item.item_info_list" :key="index"  >
                <div class="order-product-item">
                  <div>
                    <img :src="itemdetail.item_img">
                    <div class="product-info">
                      <p class="prod-name">{{itemdetail.item_title}}</p>
                      <p class="prodsku-info">颜色 {{itemdetail.color}}&nbsp;&nbsp;&nbsp;&nbsp;尺寸 {{itemdetail.size}}</p>
                      <p class="prod-price">
                        <strong><span>&yen;</span><em>{{itemdetail.item_price/100.00|topriceafter}}</em><em style="font-size:12px;">.{{itemdetail.item_price/100.00|topricenext}}</em></strong>
                        <span>x{{itemdetail.num}}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-sku" @click= "$router.push(`/order/${item.order_code}`)">
                <span>共{{totalNum}}件商品&nbsp;<em>实付：</em></span>
                <strong><span>&yen;</span><em>{{item.pay_price/100.00|topriceafter}}</em><em style="font-size:12px;">.{{item.pay_price/100.00|topricenext}}</em></strong>
              </div>
              <div class="order-btn-group">
                <span style="color:#999;border:1px solid #999" v-if="item.order_status===1" class="payment" @click= "cancelOrder(item)">取消订单</span>
                <span style="color:#999;border:1px solid #999" v-if="item.order_status===2" class="payment" @click= "tipSend">提醒发货</span>
                <span style="color:#999;border:1px solid #999" v-if="item.order_status===3" class="payment" @click= "$router.push({path: '/logisticsInfo',query: {order_code:item.order_code}})">查看物流</span>
                <span class="payment" @click= "payment(item)"   v-if="item.order_status===1">立即支付</span>
                <span class="payment" @click= "finishOrder(item)"   v-if="item.order_status===3">确认收货</span>
              </div>
            </div>
          </div>
        </div>
        

        <!-- 没有订单 -->
        <div class="order-nomore-tip" v-if="orderList==''">
          <i></i>
        </div>
        <!-- 没有订单 -->
      </load-more>
    </div>
  </div>
</template>

<script>
  import {
    getOrderList,
    payDirect
  } from '@/service/getData';
  import LoadMore from 'common/loadMore';
  import {
    Toast,MessageBox
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
          // cancel_status: null,
          // confirm_status: null,
          // pay_status: null,
          // finish_status: null
          order_status:null
        },
        orderList: [],
        active: null,
        totalNum:null,
        orderListDetail:[],
        orderListDetailin:[]
      };
    },

    watch: {},

    components: {
      LoadMore
    },

    computed: {},

    methods: {
      async payment(item) {
        let payData = await payDirect({
          order_code:item.order_code
        });
        if(payData.code==10000){
           this.wxPay(payData.data)
        }else{
          Toast({
                  message: payData.msg
               })
        }
      },
      wxPay(data){
         let that = this
            WeixinJSBridge.invoke(
            //微信支付的一些认证  需要去网站设置好  然后在这调用
                'getBrandWCPayRequest', {
                    "appId":data.app_id,                            //公众号名称，由商户传入     
                    "timeStamp":data.time_stamp,         //时间戳，自1970年以来的秒数     
                    "nonceStr":data.nonce_str,                //随机串     
                    "package":data.package_value,     
                    "signType":data.sign_type,         //微信签名方式：     
                    "paySign":data.pay_sign             //微信签名 
                },
                function(res){
                    if(res.err_msg == "get_brand_wcpay_request:ok" ){
                            that.$router.push({
                                path:'/orderRusult' 
                            })
                    } else{
                        that.$router.push({path:'/order/'+data.order_code+''})
                    }
                }); 
      },
      finishOrder(item) { //确认收货
         MessageBox.confirm('', { 
            message: '确定已经收到货物了吗?', 
            title: '',
            cancelButtonClass:'cancelButton', 
            confirmButtonClass:'confirmButton',
          }).then(action => {
            if (action == 'confirm') {     //确认的回调
              this.$store.dispatch('FinishOrder', {
                order_code: item.order_code
              }).then(response => {
                if(response.code!=10000){
                  Toast({
                  message: response.msg
                  })
                }else{
                this.onRefreshCallback()
                }
              })
            }
          }).catch(err => { 
            if (err == 'cancel') {     //取消的回调
            } 
          });

        
      },
      cancelOrder(item) { //取消订单
        this.$store.dispatch('CancelOrder', {
          order_code: item.order_code
        }).then(response => {
          Toast({
            message: "订单已取消"
          })
          this.onRefreshCallback()
        })
      },
      tipSend(){
        Toast({
            message: "提醒卖家发货成功"
          })
      },
      // 提醒卖家发货成功
      async onRefreshCallback() { //下拉刷新
        this.params.page_size = 10;
        this.params.current_page = 1;
        this.orderList = [];
        this.$refs.orderLoadmore.onTopLoaded(this.$refs.orderLoadmore.uuid);
      },
      switchTabs(Id) {
        if (this.active === Number(Id)) return;
        this.active = Id;
        switch (Number(this.active)) {
          case 0: //全部订单
            this.params.order_status = null;
            break;
          case 1: //待付款
            this.params.order_status = 1;
            break;
          case 2: //待发货
            this.params.order_status = 2;
            break;
          case 3: //待收货
            this.params.order_status = 3;
            break;
          case 4: //已完成
            this.params.order_status = 4;
            break;
          case 5: //已关闭
            this.params.order_status = 5;
            break;
          default: //其他
            throw new Error('未知TabId')
            break
        }
        this.onRefreshCallback();
      },
      payByWallet() {
        this.$store.dispatch('PayByWallet', {
          PaymentNo: this.currentOrder.orderInfo.OrdertNo,
          PaymentPassword: this.paymentPassword
        }).then(response => {
          if (response.Code === 0) {
            Toast({
              message: response.Message
            });
            this.visiblePopup.paymentContainerVisible = false;
            this.visiblePopup.paymentLoadingVisible = false;
            setTimeout(() => {
              this.onRefreshCallback();
            }, 1000)
          }
        })
      },
      async infiniteCallback(response) { //加载更多订单
        if (response.data.data.length > 0) {
          response.data.data.map(i => {
            // i.orderInfo.total_fee = i.orderInfo.total_fee.toFixed(2)
            this.orderList.push(i)
          })
        }
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
      if (this.$route.params.tab != null) return this.switchTabs(Number(this.$route.params.tab))
      this.switchTabs(0)
    }
  }

</script>
<style lang='scss' scoped>


</style>
