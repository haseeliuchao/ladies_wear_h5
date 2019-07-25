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
      height: 100px;
      background: -webkit-gradient(linear, left 0, right 0, from(#ff2741), to(#ff5527));
      @include flexbox(start,
      center,
      row,
      nowrap);
      p{
         width: 60%;font-size: 16px;
         margin-left: 10px;
         color: #fff;
         line-height: 22px;
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
                      font-size: 14px;
                      span{
                        font-weight:bold;
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
             color: #333;
             strong{
                      span{ 
                        font-size:16px; 
                      }   
              }
           }
           .order-product-detailtwo{
             color: #666;
             strong{
                      font-size:13px;
                      font-weight:normal;
                      span{
                       font-size:13px;
                       font-weight:normal;
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
        margin-top: 40%;
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
            // border-bottom: 1px solid #e4e4e4;
            .order-product-item {
              // padding: $padding;
              width: 100%;
              .prodskulist-info{
                width: 100%;
                // height: 42px;
                line-height: 22px;
                color: #666;
                font-size: 13px;
                padding: 10px 10px;
                 @include flexbox(space-between,
                flex-start,
                row,
                nowrap);
                &:last-child {
                  border-bottom: 1px solid #e4e4e4;
                }
                .sku{
                  width: 40%;
                }
                .price{
                  width: 20%;
                  color: $red;
                  font-size: 16px;
                  font-weight: bold;
                }
                .payment{
                  margin-left: 40px;
                  color: #ff5527;
                  font-size: 12px;
                  padding: 0px 4px;
                  border: 1px solid #ff5527;
                  border-radius: 20px;
                  line-height: 15px;
                  margin-top: 2px;
                }
                
                
              }
              >div {
                @include flexbox(flex-start,
                flex-start,
                row,
                nowrap);
                width: 100%;
                padding: $padding $padding 0;
                img {
                  max-width: 75px;
                  max-height: 75px;
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
                      font-size: 14px;
                      span{
                        font-weight:bold;
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
              .order-btn-group {
            @include flexbox(flex-end,
            center,
            row,
            nowrap);
            padding: 0 $padding 15px;
            width: 10rem;
            >span {
              padding: 4px 10px;
              color: $red;
              font-size: 13px;
              border: 1px solid $red;
              border-radius: 3px;
              margin: 5px 0 5px 15px;
            }
            .download{
                margin:0;
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
                      font-size: 14px;
                      span{
                        font-weight:bold;
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
              font-size: 13px;
              border: 1px solid $red;
              border-radius: 3px;
              margin: 5px 0 5px 15px;
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
         <p v-if="orderDetail.order_status===1">等待买家付款<br><em style='font-size:14px;'>{{countDown|countDownfun}}后自动取消</em><br><em @click= "$router.push('/index')" style='font-size:14px;'>继续购物</em> | <em style='font-size:14px;' @click.stop.prevent="!handlerEvent ? $router.push('/orderList/1'):false">查看订单</em></p>
         <p v-if="orderDetail.order_status===2">等待卖家发货</p>
         <p v-if="orderDetail.order_status===3">小包裹马不停蹄向您赶来</p>
         <p v-if="orderDetail.order_status===4">订单已完成</p>
         <p v-if="orderDetail.order_status===5">订单已关闭</p>
         <img v-if="orderDetail.order_status===1" src="~jd/images/order_daifu.png" style="height:48px;">
         <img v-if="orderDetail.order_status===2" src="~jd/images/order_daifa.png" style="height:48px;">
         <img v-if="orderDetail.order_status===3" src="~jd/images/order_daishou.png" style="height:48px;">
         <img v-if="orderDetail.order_status===4" src="~jd/images/order_wancheng.png" style="height:48px;">
         <img v-if="orderDetail.order_status===5" src="~jd/images/order_guanbi.png" style="height:48px;">
    </div>
    <div class="ordertop-address">
      <p class="address-title">收货地址</p>
      <p class="address-username">{{orderDetail.order_shipments_b_o.consignee_name}}<em style="margin-left:12px;font-size:12px;">{{orderDetail.order_shipments_b_o.consignee_phone}}</em></p>
      <p class="address-text">{{orderDetail.order_shipments_b_o.consignee_province}} {{orderDetail.order_shipments_b_o.consignee_city}} {{orderDetail.order_shipments_b_o.consignee_area}} {{orderDetail.order_shipments_b_o.consignee_address}}</p>
    </div>


    <div class="order-container">
        <div class="all-order">
          <div class="order-list">
            <div class="order-item">
              <div class="order-top">
                <div class="left">
                  <span>商品信息</span>
                </div>
              </div>
              <div class="order-product-list">
                <div class="order-product-item" v-for="(itemall,index) in orderDetail.item_map_list" :key="index">
                  <div @click= "()=>$router.push({path:'/product/'+itemall.item_bo.item_id,query: {order_status:$route.query.order_status}})"> 
                    <img :src="itemall.item_bo.index_img_url">
                    <div class="product-info">
                      <p class="prod-name">{{itemall.item_bo.title}}</p>
                    </div>
                  </div>
                  <p class="prodskulist-info" v-for="(item,index1) in itemall.item_sku_list" :key="index1"><span class="sku">颜色 {{item.color}}   尺寸 {{item.size}}</span> <span class="price">￥{{item.item_price/100.00}}</span>  <span class="num">x {{item.num}}</span> 
                  <span class="payment" v-if="item.post_sales_status==0&&orderDetail.order_status>1&&orderDetail.order_status<5" @click= "$router.push({path: '/afterSaleChoice',query: {order_item_id:item.order_item_id}})">退款</span>
                  <span class="payment" v-if="item.post_sales_status==1" @click= "$router.push({path: '/afterSaleDetail',query: {post_sales_id:item.post_sales_id}})">售后中</span>
                  <span class="payment" v-if="item.post_sales_status==4">售后成功</span>
                  <span class="payment" v-if="item.post_sales_status==5">售后驳回</span>
                  </p>
                <!-- </div> -->
              
                <!-- <div class="order-product-item" v-for="(item,index) in orderDetail.item_info_list" :key="index"> -->
                  
                <div class="order-btn-group" style="border-bottom: 1px solid #e4e4e4;">
                  <!-- <input type="text" v-model='itemall.item_bo.img_zip_url' id="input"> -->
                  <textarea :id="textCon(index)" v-model='itemall.item_bo.img_zip_url' readonly="readonly" cols="10" rows="1" style="opacity: 0;">
</textarea>
                <span style="color:#999;border:1px solid #999" @click="opendownload(index,itemall.item_bo.img_zip_url)" class="payment download">下载</span>
                </div>
                </div>
                
                <!-- <div class="order-btn-group">
                <span style="color:#999;border:1px solid #999" class="payment">售后成功</span>
            
                </div> -->
              </div>
              
            </div>
          </div>
        </div>
    </div>
    <QiyuKefu/>
    <div class="order-product-detail">
                <p class="order-product-detailone"><span>商品金额</span> <strong><span>&yen;</span><em style="font-size:16px;">{{orderDetail.total_item_price/100.00|topriceafter}}</em><em style="font-size:16px;">.{{orderDetail.total_item_price/100.00|topricenext}}</em></strong></p>
                <!-- <p class="order-product-detailtwo"><span>运费</span> <strong><em style="font-size:18px;">+</em><span>&yen;</span><em>{{(orderDetail.post_discount_price+orderDetail.post_fee)/100.00|topriceafter}}</em><em>.{{(orderDetail.post_discount_price+orderDetail.post_fee)/100.00|topricenext}}</em></strong></p> -->
                <p class="order-product-detailtwo" v-if="orderDetail.pay_post_fee!=0"><span >运费</span> <strong><em style="font-size:18px;">+</em><em style="font-size:16px;">￥{{orderDetail.post_fee/100|TwoNum}}</em></strong></p>
                <p class="order-product-detailtwo" v-if="orderDetail.pay_post_fee==0"><span >运费</span><span >包邮</span></p>
                <p class="order-product-detailtwo" v-if="orderDetail.post_discount_price!=0"><span>运费券</span> <strong><em style="font-size:18px;">-</em><span>&yen;</span><em style="font-size:16px;">{{orderDetail.post_discount_price/100.00|topriceafter}}</em><em style="font-size:12px;">.{{orderDetail.post_discount_price/100.00|topricenext}}</em></strong></p>
        </div>

        <div class="order-product-detail" style="margin-top:10px;margin-bottom:90px">
                <p class="order-product-detailone" style="justify-content:start"><span>实付金额：</span> <strong><span>&yen;</span><em style="font-size:16px;">{{orderDetail.pay_price/100.00|topriceafter}}</em><em style="font-size:16px;">.{{orderDetail.pay_price/100.00|topricenext}}</em></strong></p>
                <p class="order-product-detailtwo" style="justify-content:start"><span>订单编号：</span> <span>{{orderDetail.order_code}}</span></p>
                <p class="order-product-detailtwo" style="justify-content:start"><span>下单时间：</span> <span>{{orderDetail.gmt_created | DateFormat('yyyy-MM-dd hh:mm')}}</span></p>
        <div class="order-btn-group">
                <span v-if="orderDetail.order_status===1" style="color:#999;border:1px solid #999" class="payment" @click= "cancelOrder(orderDetail)">取消订单</span>
                <span v-if="orderDetail.order_status===1" class="payment" @click= "payment(orderDetail)">立即支付</span>
                <span v-if="orderDetail.order_status===3||orderDetail.order_status===4" style="color:#999;border:1px solid #999" class="payment" @click= "$router.push({path: '/logisticsInfo',query: {order_code:orderDetail.order_code}})">查看物流</span>
                <span v-if="orderDetail.order_status===3" @click= "finishOrder(orderDetail)" class="payment">确认收货</span>
                </div>
        </div>
        <BackRouter/>
  </div>
</template>

<script>
import BackRouter from 'common/backRouter';
import QiyuKefu from 'common/qiyuKefu';
  import {
    getOrderDetail,payDirect
  } from '@/service/getData';
  import {
    getLocalStorage,
    setLocalStorage,
    pushHistory
  } from '@/utils/mixin';
  import {
    Toast,MessageBox
  } from 'mint-ui';
  // import {clipboard} from '@/utils/copy';
  export default {
    data() {
      return {
        // commad: getOrderDetail,
        visiblePopup: {
          paymentLoadingVisible: false,
          paymentContainerVisible: false
        },
        paymentPassword: null, //支付密码
        currentOrder: {}, //当前订单
        orderDetail: {
          order_shipments_b_o:{
              consignee_name:null
          }
        },
        active: null, 
        countDownTime:null,
        countDown:null
      };
    },

    watch: {},

    components: {
      // LoadMore
      QiyuKefu,BackRouter
    },

    computed: {},

    methods: {
      textCon(index){
          return "textCon" +index
      },
      async initData() {
        // this.commentParam.ProductNo = this.$route.params.id;
        //  console.log(window.location.href)
        let Data = await getOrderDetail({
         order_code: this.$route.params.OrderNo
        });
        if(Data.code!=10000){
          Toast({duration: 1000,
            message: Data.msg,
            position: 'bottom'
          })
          return
        }
        this.orderDetail=Data.data
        this.countDownTime=parseInt(new Date(this.orderDetail.gmt_created).getTime()+86400000);
        this.countDown=this.countDownTime-parseInt(new Date().getTime());
        let times = setInterval(() => {
          let that=this;
          that.countDown=that.countDownTime-parseInt(new Date().getTime());
          if(that.countDown<=0&&this.orderDetail.order_status==1){
            clearInterval(times);
            that.$router.push('/orderList/0')
          }
        }, 1000)
        
        // for(var i=0;i<this.orderDetail.item_map_list;i++){

        // }
        
        setLocalStorage('salesList',this.orderDetail)
        // this.orderDetail.orderDetailList=Data.data
      },
      opendownload(index,value){
        if(value==null||value==''){
          Toast({duration: 1000,
            message: '未获取到下载链接',
            position: 'center'
          })
          return
        }
        Toast({duration: 1000,
            message: select_all_and_copy(document.getElementById('textCon'+index+'')),
            position: 'center'
          })
      }
      ,
       async payment(item) {
        let payData = await payDirect({
          order_code:item.order_code
        });
        if(payData.code==10000){
           this.wxPay(payData.data)
        }else{
          Toast({duration: 1000,
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
                        that.$router.push({path:'/order/'+data.order_code+'?order_status=1'})
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
                  Toast({duration: 1000,
                  message: response.msg
                  })
                }else{
                 this.initData()
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
          Toast({duration: 1000,
            message: "订单已取消"
          })
          this.initData()
        })
      },
    },
    filters:{
        topriceafter(value){
            return value.toFixed(2).substring(0, value.toFixed(2).indexOf('.'));
        },
        topricenext(value){
            return value.toFixed(2).substring(value.toFixed(2).indexOf('.')+1);
        },
        countDownfun(mss){
          let hours = Math.floor(mss / (1000 * 60 * 60));
          let minutes = Math.floor((mss % (1000 * 60 * 60)) / (1000 * 60));
          return hours + "小时" + minutes + "分钟";
        }

    },
    mounted: function () {
      this.initData();
    }
    ,
    beforeRouteLeave(to, from, next){
      if(to.path==='/orderList/'+this.$route.query.order_status+''||to.name==='product'||to.name==='order'||to.name==='orderRusult'||to.name==='logisticsInfo'||to.name==='afterSaleChoice'||to.name==='afterSaleDetail'||to.name==='index'){
        next();
      }else {
        next({path: '/orderList/'+this.$route.query.order_status});
      }
    }
  }

</script>
<style lang='scss' scoped>


</style>
