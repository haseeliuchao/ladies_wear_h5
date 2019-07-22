<!-- review -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  
  .order-container {
    
      height: auto;
      background: #fff;
      margin-top: 8px;
      .order-container-title{
        @include flexbox(space-between,
        center,
        row,
        nowrap);
        padding: 0 12px;
        height: 1.066667rem;
        .order-container-title-tip{
          font-size: .426667rem;
          color: #333;
        }
        .order-container-title-adit{
          font-size: .373333rem;
          color: $red;
          border: 1px solid $red;
          padding: 2px 10px;
          border-radius: 20px;
        }
      }
      .order-nomore-tip{
        margin-top: 40%;
        @include flexbox(space-between,
        center,
        column,
        wrap);
        i {
          display: block;
          width: 2.853333rem;
          height: 2.293333rem;
          background: url('~jd/images/listnone.png') no-repeat;
          background-size: contain;
        }
        span {
          font-size: .453333rem;
          font-weight: normal;
          padding: 30px 0;
          color: $gray;
        }
      }
      .order-list {
        .order-item {
          background: #fff;
          width: 10rem;
          padding: 15px 12px;
          border-top: 1px solid #e4e4e4;
          .order-product-list {
            @include flexbox(flex-start,
            flex-start,
            column,
            wrap);
             .order-product-item {
              // padding: $padding;
              width: 100%;
              p:last-child{
                  border-bottom: none
                }
              .prodskulist-info{
                width: 100%;
                // height: 42px;
                line-height: .586667rem;
                color: #666;
                font-size:.346667rem;
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
                  font-size: .426667rem;
                  font-weight: bold;
                }
                
                
              }
              >div {
                @include flexbox(flex-start,
                flex-start,
                row,
                nowrap);
                width: 100%;
                .pd-images {
                   
                    border-radius: 6px;
                    overflow: hidden;
                    position: relative;
                    img {
                      width: 2.5rem;
                      height: 2.5rem;
                      border-radius: 6px;
                    }
                    
                    .pd-imagestip{
                      height:2.5rem;
                      width: 2.5rem;
                      background: rgba(0,0,0,.4);
                      position: absolute;z-index: 2;
                      color: #fff;
                      top: 0;
                      left: 0;
                      font-size: .48rem;
                      text-align: center;
                      line-height: 2.5rem;
                    }
                  }
                .product-info {
                  margin-left: $margin;
                  .prod-price {
                    font-size: .373333rem;
                     color: #666;
                     line-height: .746667rem;
                   
                  }
                  .prod-num {
                     @include flexbox(space-between,
                      flex-start,
                      row,
                      nowrap);
                    font-size: .373333rem;
                     color: #666;
                     height: .533333rem;
                     line-height: .533333rem;
                  }
                  .prod-name{
                    @include textoverflow(2);
                    font-size: .346667rem;
                    margin-top: 4px;
                    color: #333;
                    line-height: .533333rem;
                    width: 6.6rem;
                  }
                  .prodsku-info{
                    color: #666;
                    font-size: .32rem;
                  }

                }
              }
            }
          }
        }
      }
    }
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
    .store-title{
      line-height: 0.56rem;
      padding: 0.27rem 12px;
      border-bottom: 1px solid #e4e4e4;
      @include flexbox(space-between,
            center,
            row,
            nowrap);
            p{
               @include flexbox(flex-start,
            center,
            row,
            nowrap);
            font-size: .426667rem;
            color: #333;
              img{
                margin-right: 6px;
              }
            }
      .share-shop{
        font-size: .373333rem;
        padding: 0px 10px;
        border: 1px solid $red;
        border-radius: 20px;
        color: $red

      }
    }
    .store-tab{
      @include flexbox(center,
      center,
      row,
      nowrap);
      padding: 15px 8px 12px;
      .store-tab-item{
        @include flexbox(space-between,
        center,
        column,
        wrap);
        img{
          width: 52%;
        }
        span{
          font-size: 15px;
          color: #333;
          line-height: 32px;
        }
      }
    }
    // h2{
    //   margin:0 .3rem;
    //   padding-left:10px;
    //   border-left:5px solid $red;
    //   font-size:16px;
    //   font-weight:normal;
    //   line-height:20px;
    // }
    // ul{
    //   @include flexbox(flex-start,center,column,wrap);
    //   margin-top:8px;
    //   li{
    //     @include flexbox(flex-start,center,row,wrap);
    //     width:100%;
    //     padding:8px .3rem;
    //     border-bottom:1px solid #e4e4e4;
    //     img{
    //       justify-content: flex-start;
    //       width:34px;
    //       height:34px;
    //       margin-right:10px;
    //     }
    //     span{
    //       display:flex;
    //       flex:1;
    //       justify-content: flex-end;
    //       color:#a4a4a4;
    //     }
    //   }
    // }
  }
</style>
<template>
<div style="padding-bottom:50px;">
  <div class="content">  
    <!-- <div class="store-header">
      <h2>今日业绩</h2>
      <ul>
        <li><span>{{shopStastistics.pay_order_count}}</span>支付订单数</li>
        <li><span>{{shopStastistics.pay_order_price/100.00}}</span>支付金额(元)</li>
        <li><span>0</span>可用余额(元)</li>
        <li><span>{{shopStastistics.to_deliver_count}}</span>待发货订单</li>
        <li><span>{{shopStastistics.to_post_sales_count}}</span>售后中订单&nbsp;&nbsp;</li>
      </ul>
    </div> -->
    <div class="store-apply">
      <!-- <h2>我的应用</h2> -->
      <!-- <ul>
          <li @click="$router.push('/goodslist/'+distributor_id+'')"><img src="~jd/images/pdManage.png">商品管理<span>></span></li>
          <li @click="$router.push({path: '/goodorderList/1',query: {distributor_id:distributor_id}})"><img src="~jd/images/orderManage.png">订单管理<span>></span></li>
          <li @click="$router.push({path: '/shopManage',query: {distributor_id:distributor_id}})"><img src="~jd/images/shopManage.png">店铺管理<span>></span></li>
          <li @click="$router.push('/memberList')"><img src="~jd/images/kehuManage.png">客户管理<span>></span></li>
          <li @click= "()=>$router.push({path: '/withdrawalEntrance'})"><img src="~jd/images/zichanManage.png">资产管理<span>></span></li>
      </ul>  -->

      <div class="store-title"><p><img src="~jd/images/store_on.png" height="16">{{distributor_title}}</p><span class="share-shop">分享我的小店</span></div>
      <div class="store-tab">
        <div class="store-tab-item" @click="$router.push('/goodslist/'+distributor_id+'')">
              <img src="~jd/images/store-tab1.png" alt="">
              <span>商品管理</span>
            </div>
            <div class="store-tab-item" @click="$router.push({path: '/goodorderList/1',query: {distributor_id:distributor_id}})">
              <img src="~jd/images/store-tab2.png" alt="">
              <span>订单管理</span>
            </div>
            <div class="store-tab-item" @click="$router.push({path: '/shopManageTransition',query: {distributor_id:distributor_id}})">
              <img src="~jd/images/store-tab3.png" alt="">
              <span>店铺管理</span>
            </div>
            <div class="store-tab-item" @click="$router.push('/memberList')">
              <img src="~jd/images/store-tab4.png" alt="">
              <span>客户管理</span>
          </div>
      </div>
    </div> 
  </div>
  <div class="order-container">
      <p class="order-container-title" v-if="goodList!=''"><span class="order-container-title-tip">以下商品已失效，请及时处理</span><span class="order-container-title-adit">清空失效商品</span></p>
      <load-more style="width:100%;" v-if="$route.name=='myShop'" @loadMore="infiniteCallback" :commad="commad" :param="params"
        :loadMoreIconVisible="false" ref="orderLoadmore">
        <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
          slot="refresh-spinner">更新中...</span>
        <!-- 全部订单 -->
        <div class="all-order" v-if="goodList!=''">
          <div class="order-list">
            <div class="order-item" v-for="(item,index) in goodList" :key="index">
             
              <div class="order-product-list">
               <div class="order-product-item" >
                  <div> 
                    <div class="pd-images">
                      <img v-lazy="item.item_index_img_url+'_230x230.jpg'" alt="">
                      <span v-if="item.status==3" class="pd-imagestip">失效</span>
                    </div>
                    
                    <div class="product-info">
                      <p class="prod-name">{{item.item_title}}</p>
                      <p class="prod-price">售价：¥{{item.sales_price/100|TwoNum}}&nbsp;&nbsp;成本：¥{{item.cost_price/100|TwoNum}} 起</p>
                      <p class="prod-num">
                        <span v-if="item.sales_volume>0">销量：{{item.sales_volume}}</span>
                        <span v-if="!item.sales_volume">销量：0</span>
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <!-- 没有订单 -->
        <div class="order-nomore-tip" v-if="goodList==''">
          <i></i>
          <span>暂无失效商品</span>
        </div>
        <!-- 没有订单 -->
      </load-more>
    </div>
  <BackHead/>
  <FooterViewToB/>
</div>
</template>

<script>
import FooterViewToB from 'component/footer/footerViewToB';
import BackHead from 'common/backHead';
import {searchshopGoods,getpageCount} from '@/service/getData';
import LoadMore from 'common/loadMore';
import {Toast} from 'mint-ui';
  export default {
    data() {
      return {
          shopStastistics:{
            pay_order_price:0
          },
          distributor_id:null,
          distributor_title:null,
          member_id:null,
          commad: searchshopGoods,
          pageCount:{},
          paymentPassword: null, //支付密码
          currentOrder: {}, //当前订单
          params: {
            distributor_id:null,
            status:3,
            load_qrcode:1,
            page_size: 10,
            current_page: 1
          },
          goodList: []
      }
    },
    components: {
      FooterViewToB,
      BackHead,
      LoadMore
    },
    methods: {
      async initData(){
        let res = await this.$store.dispatch('GetShopStastistics');
        if(res.code==10000){
            this.shopStastistics = res.data;
            this.distributor_id=this.shopStastistics.distributorBO.distributor_id;
            this.params.distributor_id=this.distributor_id;
            this.onRefreshCallback();
            this.distributor_title=this.shopStastistics.distributorBO.title;
            this.member_id=this.shopStastistics.distributorBO.member_id;
        }else{
            this.shopStastistics = null;
            
        }
      },
      async onRefreshCallback() { //下拉刷新
        this.params.page_size = 10;
        this.params.current_page = 1;
        this.goodList = [];
        this.$refs.orderLoadmore.onTopLoaded(this.$refs.orderLoadmore.uuid);
      },
      
      async infiniteCallback(response) { //加载更多订单
        if (response.data.distributor_item.length > 0) {
          response.data.distributor_item.map(i => {
            // i.orderInfo.total_fee = i.orderInfo.total_fee.toFixed(2)
            this.goodList.push(i)
          })
        }
      },


      async showToast(){
        Toast({duration: 1000,
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
<style lang="css">
</style>
