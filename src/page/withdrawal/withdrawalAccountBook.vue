<!-- customerOrder -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .content{
    min-height:100vh;
    background-color:#f2f2f2;
  }
  //会员订单内容
  .customerOrder-con{
    .orderCount{
      @include flexbox(center,center,row,nowrap);
      background:#fff;
     
      li{
        @include flexbox(center,center,column,wrap);
        margin:28px 0;
        color:#333;
        em{
          height:18px;
          font-size:18px;
          font-weight: bold;
          color: $red
        }
        span{
          font-size:16px;
          margin-bottom:4px;
        }
      }
    }
  }
  .bookTopnav{
      height: 46px;
      position: relative;
      @include flexbox(space-between,
      center,
      row,
      nowrap);
      width: 10rem;
      padding: 0 .3rem;
      position: relative;
      .bookTopnav-change{
          
          p{
              height: 25px;
              line-height: 25px;
              font-size: 14px;
              color: #333;
              padding: 0 24px 0 16px;
              border-radius: 25px;
              border: 1px solid #e4e4e4;
              background: #fff;
              .bookTopnav-changemore{
                  position:relative;
                top: -10px;
              display: inline-block;
               &:before{
                  content: '';
                  position: absolute;
                  right: -14px;
                  top: 2px;
                  width: 0;
                  height: 0;
                  border: 4px solid transparent;
                  border-top-color: #333;
                  }
                 
              }
          }
          
      }
      .bookTopnav-tip{
          font-size: 14px;
          color: #666;
      }
       img{
           position: absolute;
           z-index: 3;
           top: 40px;
           left: 24px;
       }
      .bookTopnav-changeBox{
          position: absolute;
          background: #fff;
          top: 46px;
          left: 0;
          width: 10rem;
          padding: 28px .3rem;
          z-index: 2;
          box-shadow: 0 2px 2px rgba(0,0,0,0.2);
          -webkit-box-shadow: 0 2px 2px rgba(0,0,0,0.2);
          ul{
               @include flexbox(space-between,center,row,nowrap);
            li{
                height: 27px;
                line-height: 27px;
                width: 2.2rem;
                background: #e7e7e7;
                color: #333;
                text-align: center;
                font-size: 15px;
                border-radius: 6px;
                
            }
            .active {
                  color: #fff;
                  background: $red
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
        // width:42px;
        background: $red;
        bottom: 0;
        height: 2px;
      }
      >span {
        // width: 33.33%;
        padding: 14px 0 ;
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
        background: #f5f5f5;
      }
      .order-list {
        // background: #fff;
        // margin-top: $margin;
        .order-item {
        //   margin-top: 10px;
          margin-bottom: 10px;
          background: #fff;
          width: 10rem;
        //   margin-left: .3rem;
        //   border-radius: 6px;
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
                  max-width: 2rem;
                  max-height: 2rem;
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
                    @include textoverflow(2);
                    font-size: 13px;
                    margin: 4px 0;
                    color: #333;
                    line-height: 20px;
                  }
                  .prodsku-info{
                    color: #666;
                    font-size: 13px;
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
          .order-product-info{
            padding: 8px 10px;
            border-top: 1px solid #e4e4e4;
            p{
              color: #333;
              font-size: 14px;
              line-height: 24px;
              em{
                font-size: 12px;
                color: #666;
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
  //设置备注弹窗
  .setNickPop{
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    position:fixed;
    top:0;
    width:100%;
    min-height:100vh;
    background:rgba(0,0,0,.4);
    z-index:50000;
    .setNick-con{
      @include flexbox(center,center,column,wrap);
      margin:0 1rem;
      background:#fff;
      border-radius:5px;
      h2{
        font-size:16px;
        color:#333;
        line-height:38px;
      }
      input{
        width:6rem;
        margin:0 1rem;
        font-size:15px;
        color:#333;
        line-height:32px;
        border:1px solid #e4e4e4;
        border-radius:4px;
      }
      .popBtn{
        @include flexbox(space-between,center,row,nowrap);
        width:100%;
        margin-top:15px;
        font-size:16px;
        color:#333;
        span{
          @include flexbox(center,center,row,nowrap);
          line-height:60px;
          border-top:1px solid #e4e4e4;
          &:last-child{
            color:$red;
            border-left:1px solid #e4e4e4;
          }
        }
      }
    }
  }
</style>
<template>
<div @click="closeMsg($event)">
  <div class="content">
    
    <div class="customerOrder-con">
      <ul class="orderCount">
        <li style="border-right:1px solid #e4e4e4">
            <span>已结算利润</span>
            <em>￥{{}}</em>
        </li>
        <li>
          <span>待结算利润</span>
          <em style="color:#ff5527">￥{{}}</em>
        </li>
      </ul>
    </div>
    <div class="bookTopnav">
         <div class="bookTopnav-change">
             <p class="bookTopnav-changeshow" @click="showChangeBox">
               <span v-if="active===0">全部</span>
               <span v-if="active===1">已结算</span>
               <span v-if="active===2">待结算</span>
               <span class="bookTopnav-changemore"></span></p>
         </div>
         <p class="bookTopnav-tip">展示近3个月明细</p>
         <img src="~jd/images/changeBoxjiao.png" v-if="showChangeBoxBoo">
         <div class="bookTopnav-changeBox" v-if="showChangeBoxBoo" >
            <ul>
                <li @click="switchTabs(0)" :class="{'active':active===0}">全部</li>
                <li @click="switchTabs(1)" :class="{'active':active===1}">已结算</li>
                <li @click="switchTabs(2)" :class="{'active':active===2}">待结算</li>
            </ul>
         </div>
    </div>


    <div class="my-order">
     
    <div class="order-container">
      <!-- :topMethod="onRefreshCallback" -->
      <load-more style="width:100%;" v-if="$route.name=='withdrawalAccountBook'"  @loadMore="infiniteCallback" :commad="commad" :param="params" 
        :loadMoreIconVisible="false" ref="orderLoadmore">
        <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
          slot="refresh-spinner">更新中...</span>
        <!-- 全部订单 -->
        <div class="all-order" v-if="orderList!=''">
          <div class="order-list">
            <div class="order-item" v-for="(item,index) in orderList" :key="index">
               <!-- @click= "()=>$router.push({path: '/orderToC/'+item.order_code,query: {distributor_id:$route.query.distributor_id}})" -->
              <div class="order-top">
                <div class="left">
                  <span>下单时间：{{item.gmt_created | DateFormat('yyyy-MM-dd hh:mm')}}</span>
                </div>
                <div class="right">
                  <div class="order-status">
                    <span v-if="item.order_status==6">已结算</span>
                    <span v-else>待结算</span>
                  </div>
                </div>
              </div>
              <div class="order-product-list" v-for="(itemdetail,index) in item.item_info_list" :key="index"  >
                <div class="order-product-item">

                  <div>
                    <img v-lazy="itemdetail.item_img+'_190x190.jpg'">
                    <div class="product-info">
                      <p class="prod-name">{{itemdetail.item_title}}</p>
                      <p class="prodsku-info">售价：￥{{itemdetail.item_distributor_b_o.distributor_item_sku_price/100|TwoNum}}&nbsp;&nbsp;&nbsp;&nbsp;成本：￥{{itemdetail.item_price/100|TwoNum}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="order-sku">
                <span>共{{totalNum}}件商品&nbsp;<em>实付：</em></span>
                <strong><em style="font-size:16px;">￥{{item.pay_price/100|TwoNum}}</em></strong>
              </div> -->

              <div class="order-product-info">
                <p class="order-product-infocode">订单编号：{{item.order_code}}</p>
                <p class="order-product-infopostfree">实收运费: ￥{{item.pay_post_fee/100|TwoNum}}<em>（应收运费￥{{item.post_fee/100|TwoNum}}）</em></p>
                <p class="order-product-infoprice" style="color:#ff2741">利润：{{item.order_profit/100|TwoNum}}元</p>
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
    
  </div>
  
  <BackHead/>
</div>
</template>
<script>
  import BackHead from 'common/backHead';
  import {
    settlementOrderB,
    accountRevenue
  } from '@/service/getData';
  import LoadMore from 'common/loadMore';
  import {
    Toast,MessageBox
  } from 'mint-ui'
  
  export default {
    data() {
      return {
        popupVisible:false,
        // memberData:{
        //   distributor_id:'',
        //   distributor_user_id:'',
        //   member_id:'',
        //   nick_note:'',
        //   checkout_amount:0,
        // },
        accountRevenue:{
        },
        orderCount:{
           orderTotalCount:''
        },
        
        // /b/distributor/settlement/order/list
        commad: settlementOrderB,
        
        currentOrder: {}, //当前订单
        params: {
          page_size: 10,
          current_page: 1,
          settlement_status:null
        },
        orderList: [],
        active: null,
        totalNum:null,
        orderListDetail:[],
        orderListDetailin:[],
        showChangeBoxBoo:false
      }
    },
    components:{
      BackHead,
      LoadMore
    },
    methods: {
      closeMsg:function(event){
                    var btn = document.querySelector(".bookTopnav-changeshow");
                    if(btn){
                        if(!btn.contains(event.target)){            //按钮.app-download以外的区域
                            this.showChangeBoxBoo = false;
                        }
                    }
                },
      showChangeBox(){
        this.showChangeBoxBoo=true;
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
          case 0: //待发货
            this.params.settlement_status = 0;
            break;
          case 1: //待收货
            this.params.settlement_status = 1;
            break;
          case 2: //已完成
            this.params.settlement_status = 2;
            break;
          default: //其他
            throw new Error('未知TabId')
            break
        }
        this.onRefreshCallback();
      },
    
      async infiniteCallback(response) { //加载更多订单
      if (response.data.data){
        if (response.data.data.length > 0) {
          response.data.data.map(i => {
            this.orderList.push(i)
          })
        }
      }
      },
      async initData(){
        let Data = await accountRevenue();
            if(Data.code=10000){
            this.accountRevenue=Data.data
            }
        
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
      //  console.log(this.$route.name)

      this.switchTabs(0)
    }
  }
</script>
<style lang="scss" scoped>
</style>