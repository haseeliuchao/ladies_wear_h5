<!-- createdOrder -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .pagePay {
    .my-header {
      padding: $padding;
      background: #fff;
      @include flexbox(space-between, center, row, nowrap);
      border-bottom: 1px solid #eee;
      .back {
        display: block;
        width: .56rem;
        height: .56rem;
        background: url('~jd/images/close.png') no-repeat;
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
        opacity: 0;
        background-position: -2.6rem 0;
      }
    }
    .payContainer {
      padding: $padding $padding 100px $padding;
       .ordertop-address{
          padding: $padding;
          background: #fff;
          color: #333;
          border-radius: 6px;
          @include flexbox(space-between, center, row, nowrap);
      .ordertop-addressleft{
        width: 84%;
        .address-username{
                font-size: 14px;
                line-height: 25px;
              }
              .address-text{
                font-size: 13px;
                line-height: 18px;
              }
      }
      .ordertop-addressright{
        width: 16%;
        color: #999;
        font-size: 13px;
        text-align: right
      }
      
    }

      .addressContainer {
        background: #fff;
        .addressDefault {
          padding: $padding;
          background: url('~jd/images/addressbg.png') repeat-x bottom;
          background-size: 64px 5px;
          position: relative;
        }
        .arrow-right {
          display: block;
          position: absolute;
          right: 10px;
          margin-top: -1.1rem;
          width: .45rem;
          height: .45rem;
          background: url('~jd/images/arrow-right.png') no-repeat;
          background-size: 100%;
        }
        .cell {
          strong {
            font-size: 16px;
          }
          font-size: 14px;
          padding: 5px 0;
        }
        .defaultIcon {
          color: $red;
          border: 1px solid $red;
          border-radius: 5px;
          padding: 0px 3px;
        }
        .positionIcon {
          display: inline-block;
          background: url('~jd/images/product-detail-sprites-mjs.png') no-repeat;
          width: 25px;
          height: 25px;
          background-position: -17px 2px;
          background-size: 150px;
          vertical-align: -8px;
        }
      }
      .venderOrderList {
        margin-top: $margin;
        .venderItem {
          padding: $padding;
          border-bottom: 1px solid #eee;
          background: #fff;
          @include flexbox(flex-start,
          center,
          row,
          nowrap);
          img {
            max-width: 1.6rem;
            max-height: 1.6rem;
            margin: 10px;
            padding-right: 10px;
          }
          .orderInfo {
            @include flexbox(space-between,
            flex-start,
            column,
            wrap);
            font-size: 16px;
            .title {
              @include textoverflow(1);
              margin-bottom: 25px;
            }
            .price {
              @include flexbox(space-between,
              center,
              row,
              nowrap);
              width: 100%;
              .fee {
                color: $red;
              }
              .count {
                font-size: 14px;
                color: #999;
              }
            }
          }
        }
      }
    }
    .payOnline {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      background: #fff;
      font-size: 17px;
      @include flexbox(space-between,
      center,
      row,
      nowrap);
      >span{
        padding-left: $padding;
        font-size: 16px;
        color: #333
      }
      strong {
        font-size: 14px;
        span{
          font-weight:bold;
          font-size: 16px;
          color: #ff2741; 
        }
        em{
          color: #ff2741;
        }
      }
      .payBtn {
        width: 40%;
        height: 100%;
        color: #fff;
        padding: 15px;
        background: $red;
        text-align: center;
      }
    }
    .getCoupon{
      height: 48px;
      line-height: 48px;
      background: #e2e2e2;
      width: 10rem;
      position: fixed;
      bottom: 48px;
      padding: 0 12px;
      @include flexbox(space-between,
    center,
    row,
    nowrap);
     p{
       font-size: 16px;
       color: #333;
       span{
         color: $red;
       }
     }
    }
  }

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
.order-list {
        // background: #fff;
        margin-top: $margin;
        .order-item {
          margin-top: 10px;
          background: #fff;
         
          border-radius: 6px;
          padding: $padding 0 5px;
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
              p:last-child{
                  border-bottom: none
                }
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
                &:last-child{
                  border-bottom: 1px solid #e4e4e4;
                }
                .sku{
                  width: 56%;
                }
                .price{
                  width: 20%;
                  color: $red;
                  font-size: 16px;
                  font-weight: bold;
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
                        font-size: 16px;
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
               font-size:16px;
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
                        color: #666;
                        font-size:13px;
                        font-weight:normal;
                      }
                      em{
                        color: #666;
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
              font-size: 14px;
              border: 1px solid $red;
              border-radius: 3px;
              margin-left: 15px;
            }
          }
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
  .noScroll {
  overflow-y: hidden;
  }
  .addressList {
    .my-header {
      padding: $padding;
      background: #fff;
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
        opacity: 0;
        background-position: -2.6rem 0;
      }
    }
    .addNewAddressbtn {
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      padding: 14px 0;
      background: $red;
      font-size: 18px;
      color: #fff;
    }
    
    .address-container {
      height: 300px;
      // overflow: auto;
      overflow-y: scroll;
  /* ios需要下面这个属性 */
  -webkit-overflow-scrolling: touch;
      .address-item {
        // @include flexbox(space-between,
        // flex-start,
        // column,
        // wrap);
        @include flexbox(space-between,
        center,
        row,
        nowrap);
        background: #fff;
        border-bottom: 1px solid #e4e4e4;
        // padding-left: 60px;
        position: relative;
        .address-itemleft{
           @include flexbox(start,
        center,
        row,
        wrap);
        padding-left: $padding;
        padding-right: $padding;
            >p {
          width: 100%;
           span{
             font-size: 12px;
             background: #ffe6df;
             color: $red;
             padding: 1px 6px;
             border-radius: 4px;
             margin-left: $margin;
           }
          }
        
        }
        .address-itemright{
              width: 1.34rem;
              text-align: center;
              border-left: 1px solid #e4e4e4;
              img{
                margin-bottom: 5px;
                height: 15px;
              }
              p{
                color: #999;
                font-size: 12px;
              }
        }
        
        .name {
          font-size: 14px;
          color: #333;
          padding: $padding 0;
          @include textoverflow(1);
        }
        .address {
          font-size: 13px;
          color: #333;
          padding: 0 0 15px;
          @include textoverflow(2);
          
          line-height: 18px;
        }
        .address-status {
          width: 100%;
          @include flexbox(space-between,
          center,
          row,
          nowrap);
          padding: $padding 0;
          .left {
            @include flexbox(flex-start,
            center,
            row,
            nowrap);
            flex: initial;
            font-size: $subtitle;
            letter-spacing: 1px;
            color: $gray;
            i {
              vertical-align: middle;
              margin-right: $margin;
            }
          }
          .right {
            @include flexbox(space-between,
            center,
            row,
            nowrap); // width: 4rem;
            flex: initial;
            font-size: $subtitle;
            color: $gray;
            letter-spacing: 1px;
            >div {
              margin-right: 10px;
              @include flexbox(space-between,
              center,
              row,
              nowrap);
              i {
                margin-right: 5px;
              }
            }
            .edit {
              .edit-address-icon {
                display: block;
                @include wh(16px,
                16px);
                @include bg('~jd/images/edit.png');
              }
            }
            .delect {
              .delect-address-icon {
                display: block;
                @include wh(16px,
                16px);
                @include bg('~jd/images/edit.png');
              }
            }
          }
        }
      }
      .coupon-item{
        height: 99px;
        width: 9.6rem;
        margin-left: .2rem;
        background: url('~jd/images/coupon-itembg.png') no-repeat center;
        background-size: 100%;
        @include flexbox(space-between,
      center,
      row,
      nowrap);
        .coupon-itemleft{
             width: 66%;
             height: 80%;
             padding-left: 20px;
             .coupon-price{
                color: $red;
                font-size: 14px;
                padding: 3px 0;
                em{
                  font-size: 22px;
                }
             }
             .coupon-text{
               line-height: 23px;
               font-size: 13px;
               color: #999;
             }
        }
        i{
          margin-right: 1.1rem;
          width: 35px;
          height: 35px;
        }
      }
    }
  }
 

</style>
<style lang="scss">
  .paymentContainer .mint-cell-wrapper{
    background-image: none;
  }
</style>
<template>
  <div class="pagePay">
    
    

    <div class="payContainer">
      <div v-if="defaultAddress.length>0">
      <div class="ordertop-address" v-for="(item,index) in defaultAddress" :key="index" @click= "()=>visiblePopup.selectedAdressVisible=true">
        <div class="ordertop-addressleft"  >
        <p class="address-username">{{item.name}}<em style="margin-left:12px;font-size:12px;">{{item.phone}}</em></p>
        <p class="address-text">{{item.province}} {{item.city}} {{item.area}} {{item.address}}</p>
        </div>
        <p class="ordertop-addressright">
          修改 >
        </p>
      </div>
      </div>

      <div v-if="!defaultAddress.length">
      <div class="ordertop-address">
        <div class="ordertop-addressleft">
        <p style="text-align:center"><img src="~jd/images/noaddress.png" height="40" style="margin-bottom:4px;"></p>
        <p class="address-text" style="text-align:center;color:#999">您还没有收货地址，请尽快添加哦</p>
        </div>
        <p class="ordertop-addressright" @click= "$router.push(`/address`)">
          添加 >
        </p>
      </div>
      </div>


      <div class="all-order">
          <div class="order-list">
            <div class="order-item">
              <div class="order-product-list" v-if="confirmSelectedProduct.item_map_list">
                <div class="order-product-item" v-for="(itemall,index) in confirmSelectedProduct.item_map_list" :key="index">
                  <div> 
                    <img :src="itemall.item_bo.index_img_url">
                    <div class="product-info">
                      <p class="prod-name">{{itemall.item_bo.title}}</p>
                    </div>
                  </div>
                  <p class="prodskulist-info" v-for="(item,index1) in itemall.item_sku_list" :key="index1"><span class="sku">颜色 {{item.color}}   尺寸 {{item.size}}</span> <span class="price">￥{{item.item_price/100.00}}</span>  <span class="num">x {{item.num}}</span></p>
                  </div>
              </div>

              
              <div class="order-product-list" v-else>
                <p style="text-align:center;padding:15px 0; color:#999;font-size:17px;">
            暂无数据
               </p>
              </div>
              <div class="order-product-detail">
                <p class="order-product-detailone"><span>商品金额</span> <strong><span>&yen;</span><em style="font-size:16px;">{{confirmSelectedProduct.total_item_price/100|TwoNum}}</em></strong></p>
                <p class="order-product-detailtwo"><span>运费</span> <strong><em style="font-size:18px;">+</em><span>&yen;</span><em>{{confirmSelectedProduct.post_fee/100|TwoNum}}</em></strong></p>
                <!-- <p class="order-product-detailtwo" v-if="confirmSelectedProduct.post_discount_price!=0"><span>运费券</span> <strong><em style="font-size:18px;">-</em><span>&yen;</span><em style="font-size:16px;">{{confirmSelectedProduct.post_discount_price/100.00|topriceafter}}</em><em style="font-size:12px;">.{{confirmSelectedProduct.post_discount_price/100.00|topricenext}}</em></strong></p> -->
              </div>
            </div>
          </div>
        </div>



    </div>


    <!-- <div class="getCoupon" @click= "()=>visiblePopup.couponVisible=true">
      <p>可用券码 <span>7张</span></p>
      <img src="~jd/images/arrow-right.png" height="16">
    </div> -->

    <div class="payOnline">
      <!-- &yen;{{totalFee}}  -->
      <span>合计：<strong><span>&yen;</span><em style="font-size:16px;">{{confirmSelectedProduct.pay_price/100.00|topriceafter}}</em><em style="font-size:16px;">.{{confirmSelectedProduct.pay_price/100.00|topricenext}}</em></strong></span>
      <div :class="['payBtn',wxPaystatus?'':'disabled-btn']"  @click= "payByWallet">支付</div>
    </div>
    <div class="paymentLoading" v-if="visiblePopup.paymentLoadingVisible">
      <img src="~jd/images/paymentloading.gif" />
    </div>
    <mt-popup v-model="visiblePopup.selectedAdressVisible" :closeOnClickModal="true" :modal="true" position="bottom" class="modal-popup" style="height:400px;" >
      <div class="my-header">
        <i class="myMsg"></i>
        <strong>地址管理</strong>
        <i class="back" @click= "()=>visiblePopup.selectedAdressVisible=false"></i>
      </div>
      <div class="addressList">
          <div class="address-container" v-if="addressData">
            <div class="address-item" v-for="(item,index) in addressData" :key="index" >
              <div class="address-itemleft" @click= "selectedAddress(item)">
              <p class="name">{{item.name}} {{item.phone}} <span v-if="item.if_default">默认</span></p>
              <p class="address">{{item.province}} {{item.city}} {{item.area}} {{item.address}}</p>
              </div>
              <div class="address-itemright" @click= "$router.push(`/address/${item.consignee_id}`)">
                <img src="~jd/images/addressedit.png"/>
                <p>编辑</p>
              </div>
            </div>
            
          </div>
        <!-- </scroller> -->
        <div class="addNewAddressbtn" @click= "$router.push(`/address`)">添加新地址</div>
      </div>
    </mt-popup>
    <!-- 运费券 -->
    <mt-popup v-model="visiblePopup.couponVisible" :closeOnClickModal="true" :modal="true" position="bottom" class="modal-popup" style="height:400px;" >
      <div class="my-header">
        <!-- <i class="myMsg"></i> -->
        <strong>可用券码</strong>
        <i class="back" @click= "()=>visiblePopup.couponVisible=false"></i>
      </div>
      <div class="addressList">
       
          <div class="address-container">
            <div class="coupon-item">
                <div class="coupon-itemleft">
                  <p class="coupon-price"><span>&yen;</span><em>{{confirmSelectedProduct.pay_price/100.00|topriceafter}}</em><em style="font-size:14px;">.{{confirmSelectedProduct.pay_price/100.00|topricenext}}</em></p>
                  <p class="coupon-text" style="color:#ff2741">仅限天猫平台使用，特殊商品除外</p>
                  <p class="coupon-text">有效期2019.04.03-2019.05.03</p>
                </div>
                <!-- ,item.checked ? 'select-icon' : '' -->
                <i :class="['select-default-icon']"></i>
            </div>
          </div>
        <div class="addNewAddressbtn" @click= "()=>visiblePopup.couponVisible=false">确定</div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import {
    getLocalStorage,
    setLocalStorage
  } from '@/utils/mixin';
  import {payToken,payGetData} from '@/service/getData';
  import {
    Field,
    Button,
    Toast,
    Popup
  } from 'mint-ui';
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        defaultAddress: [],
        totalFee: 0.00,
        paymentPassword: null,
        PaymentNo: null,
        confirmSelectedProduct: {
          item_map_list:[],
          post_fee:0
          },
          
        addressData: null,
        visiblePopup: {
          paymentContainerVisible: false,
          couponVisible: false,
          selectedAdressVisible: false
        },
        consignee_id:null,
        wxPaystatus:true
      };
    },

    watch: {
        wcvisiblePopup:function(newvs,oldvs){
            if (newvs) {
                document.getElementsByTagName('html')[0].className='htmlover';
                document.body.className='htmlover';
              } else {
                document.getElementsByTagName('html')[0].className='htmlnoover';
                document.body.className='htmlnoover';
              }
              // 下面需要这两行代码，兼容不同浏览器
              document.body.scrollTop = this.pageScrollYoffset;
              window.scroll(0, this.pageScrollYoffset);
            }
    },

    components: {},
    computed: {
      ...mapGetters(["addressList"]),
      ...{
        wcvisiblePopup(){
          return this.visiblePopup.selectedAdressVisible;
        }
      }
    },
    methods: {
      selectedAddress(item){
        this.visiblePopup.selectedAdressVisible = false;
        this.defaultAddress[0] = item;
        this.consignee_id=item.consignee_id;
      },

      async initData() {
        let confirmSelectedData={};
        if(this.$route.query.checkout_type==1){
          confirmSelectedData = await this.$store.dispatch('GetConfirmSelectedProductList', {
          shopping_cart_ids:this.$route.query.Selectedstr,
          checkout_type:this.$route.query.checkout_type
        })
        }else{
          confirmSelectedData = await this.$store.dispatch('GetConfirmSelectedProductList', {
          shopping_cart_ids:this.$route.query.ids,
          checkout_type:this.$route.query.checkout_type
        })
        }
        
        // if(!this.addressList){
          let addressData = await this.$store.dispatch('GetAddressList',{page_size:100,current_page:1});
          this.addressData = addressData.data;
        // }else{
        //   this.addressData = this.addressList.data;
        // }
        setLocalStorage('addressList',this.addressData)
         this.addressData.map(item => {
          if (item.if_default===1) {
            this.consignee_id=item.consignee_id;
            this.defaultAddress.push(item);
          }
        });
        if(confirmSelectedData.data==''){
          Toast({duration: 1000,
            message: '暂无订单信息'
          })
          return this.$router.go(-1);
        }
        if(confirmSelectedData.code==10000){
          this.confirmSelectedProduct = confirmSelectedData.data;
          console.log(this.confirmSelectedProduct)
        }else if(confirmSelectedData.code==30029){
          this.$router.push('/login');
        }else if(confirmSelectedData.code==50002){
          Toast({duration: 1000,
            message: '商品已下架'
          })
          this.$router.go(-1)
        }else{
          Toast({duration: 1000,
            message: confirmSelectedData.msg
          })
        }

        
      },
      async submitOrder() {
        this.$store.dispatch('CreateOrder', {
          AddressId: this.defaultAddress._id
        }).then(response => {
          this.visiblePopup.paymentLoadingVisible = true;
          setTimeout(() => {
            this.PaymentNo = response.Data.PaymentNo;
            this.visiblePopup.paymentLoadingVisible = false;
            this.visiblePopup.paymentContainerVisible = true;
          }, 2000)
        })
      },
        
      // let Data = await cardCoupon({
      //     user_coupon_status:this.user_coupon_status
      //   });
      // /order/generate/token
      async payByWallet(){
        if(!this.consignee_id){
          Toast({duration: 1000,
            message: '请先添加收货地址'
          })
          return
        }
        this.wxPaystatus=false;
        let Data = await payToken({});
        let payData={};
        if(this.$route.query.checkout_type==1){
        payData=await payGetData({
          shopping_cart_ids:this.$route.query.Selectedstr,
          checkout_type:this.$route.query.checkout_type,
          token:Data.data,
          consignee_id:this.consignee_id
        })
        }else{
          payData=await payGetData({
          shopping_cart_ids:this.$route.query.ids,
          checkout_type:this.$route.query.checkout_type,
          token:Data.data,
          consignee_id:this.consignee_id
          })
        }
        if(payData.code!==10000){
          Toast({duration: 1000,
            message: payData.msg
          })
          this.wxPaystatus=true;
          return
        }
         this.wxPay(payData.data)
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
                //这个是支付成功的回调
                
                    if(res.err_msg == "get_brand_wcpay_request:ok" ){
                    // 使用以上方式判断前端返回,微信团队郑重提示：
                            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。

                            // alert(1)
                            // alert(res.err_msg)
                            that.$router.push({
                                path:'/orderRusult'
                                
                            })
                    } else{
                    //else 支付不成功的回调
                    
                        // alert(2)
                        // alert(res.err_msg)
                        that.$router.push({path:'/order/'+data.order_code+'?order_status=1'})
                    }
                }); 
      }
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
      this.initData();
      // console.log(this.$route.query)
    }
  }

</script>
<style lang="css" scoped>
 

</style>
