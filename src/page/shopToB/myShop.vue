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
        padding-top: 40%;
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
    <!-- 分享引导popup -->
    <mt-popup v-model="visiblePopup.shareBoo" style="background:none;" :closeOnClickModal='true'  position="top" class="checkSkupop">
       <img src="~jd/images/shareicon.png" alt="" style="margin-left: 1.4rem;
    margin-top: 8px;width:7.6rem;">
    </mt-popup>


  <div class="content">  
    <div class="store-apply">
      <div class="store-title"><p><img src="~jd/images/store_on.png" height="16">{{distributor_title}}</p><span class="share-shop" @click="visiblePopup.shareBoo=true">分享我的小店</span></div>
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
      <p class="order-container-title" v-if="goodList!=''"><span class="order-container-title-tip">以下商品已失效，请及时处理</span><span class="order-container-title-adit" @click="clearOlditem">清空失效商品</span></p>
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
  <FooterView/>
</div>
</template>

<script>

import FooterView from 'component/footer/footerView';
import BackHead from 'common/backHead';
import {searchshopGoods,getpageCount,clearOlditemDate} from '@/service/getData';
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
          visiblePopup:{
            shareBoo:false
          },
          goodList: []
      }
    },
    components: {
      FooterView,
      BackHead,
      LoadMore
    },
    methods: {
      async clearOlditem(){
         let clearData = await clearOlditemDate();
        if(clearData.code!=10000){
           Toast({duration: 1000,
             message: clearData.msg
             })
        }else{
         Toast({duration: 1000,
             message: '清除成功'
             })
            //  let _this=this;
            //  setTimeout(function(){
            //     _this.onRefreshCallback();
            //  },1000)
            this.onRefreshCallback();
        }
       },
      async initData(){
        let res = await this.$store.dispatch('GetShopStastistics');
        if(res.code==10000){
            this.shopStastistics = res.data;
            if(this.shopStastistics.distributorBO){
            this.distributor_id=this.shopStastistics.distributorBO.distributor_id;
            this.params.distributor_id=this.distributor_id;
            this.distributor_title=this.shopStastistics.distributorBO.title;
            this.member_id=this.shopStastistics.distributorBO.member_id;
            this.$wxShare({title: '快来看看我店里的好东西，总有一款打动你哦',desc: '精选好物等你来选',link:''+process.env.API_ROOT+'/api/redirect?path='+BASE64.encoder('/indexToC/'+this.distributor_id)+'',imgUrl: "http://img.chaochujue.cn/ICON/2019/5/1/201906241553261561362823561.png"})
            }
            
            this.onRefreshCallback();
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
        if(response.data.distributor_item){
            if (response.data.distributor_item.length > 0) {
            response.data.distributor_item.map(i => {
              this.goodList.push(i)
            })
          }
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
.AllLoaded{
  display: none!important;
}
</style>
