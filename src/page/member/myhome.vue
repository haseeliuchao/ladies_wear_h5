<!-- myhome -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .right-menu {
        width: 10px;
        height: 12px;
        background-image: url('~jd/images/whilte_more.png');
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block
      }
  .right-menublack {
        width: 10px;
        height: 12px;
        background-image: url('~jd/images/black_more.png');
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block;
        margin-left: 10px;
      }
  .content {
    padding-bottom: 1.35rem;
    min-height: 100vh;
  }
  // 头部样式
  .my-header {
    height: 136px;
    padding: 25px .33rem;
    background: -webkit-linear-gradient(left, #ff5527, #ff2741);
    background: linear-gradient( #ff5527, #ff2741);
    box-shadow: 0 2px 5px rgba(255, 98, 98, .4);
    position: relative;
    &:after {
      content: '';
      width: 100%;
     left: 0;
     top: 95px;
    height: 50px;
    position: absolute;
    background: -webkit-linear-gradient(left, #ff2741, #ff2741);
    background: linear-gradient( #ff2741, #ff2741);
    // background: #333;
    -webkit-border-radius: 100px / 10px;

    -moz-border-radius: 100px / 10px;

    border-radius: 100px / 10px;
    }
    @include flexbox(flex-start, space-between, column, wrap);
    .my-settings {
      width: 100%;
      text-align: right;
      >div {
        @include flexbox(flex-end, center, row, nowrap);
        height:1rem;
        i {
          width: .65rem;
          height: .65rem;
        }
        .settings {
          display: block;
          // background: url('~jd/images/settings.png') no-repeat;
          // background-size: 100%; // background-position: -2.6rem 0!important;
        }
        .msg-icon {
          display: block;
          margin-left: 20px;
          background: url('~jd/images/searchIcon.png') no-repeat;
          background-size: 600% 100%;
          background-position: -1.3rem 0 !important;
        }
      }
    }
    .userinfo {
      >div{
        @include flexbox(flex-start,
        flex-start,
        row,
        nowrap);
      }
      .avatar {
        img {
          border: 1px solid hsla(0, 0%, 100%, .4);
          border-radius: 60px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
          width: 60px;
          height: 60px;
        }
      }
      .user{
        @include flexbox(center,
        flex-start,
        column,
        wrap);
        height:64px;
        margin-left:.4rem;
        .username,.userphone {
          // margin-top: 10px;
          color:#fff;
          font-size:15px;
        }
      }
      
      .info-box {
        color: #fff;
        font-size: 14px;
        .my-validWalletAmount {
          @include flexbox(center,
          center,
          row,
          nowrap);
          margin: 10px 0;
          >p{
            @include flexbox(center,
            center,
            column,
            nowrap);
            span{
              height:16px;
              &:last-child{
                margin-top:6px;
              }
            }
          }   
        }
      }
    }
  }

  // 我的小店样式
  .my-store{
     position:relative;
     top:-26px;
     width: 9.4rem;
     margin: 0 auto 8px;
     color:#333;
     background: #f3b251;
     border-radius:5px;
     .my-store-title{
       @include flexbox(space-between,
      center,
      row,
      nowrap);
      padding: 0 10px;
      font-size: 0.42rem;
      color: #fff;
      line-height: 0.98rem;
      border-bottom: 1px solid #fff;
      .my-store-titleleft{
        @include flexbox(flex-start,
      center,
      row,
      nowrap);
        img{
          width: 22px;
          margin-right: 6px;
        }
      }
     }

     .my-store-main{
       padding: 15px 10px;
       p{
         color: #fff;
         font-size: 0.42rem;
         line-height: 22px;
        
       }
       .my-store-mainbottom{
         @include flexbox(space-between,
      center,
      row,
      nowrap);
      .my-store-mainbottomright{
        padding: 0 14px; border-radius: 12px;
        border: 1px solid #fff;
      }
       }
     }
  }
  // 我的今日收益
  .card-title{
    padding: 0 10px;
    line-height: 0.98rem;
    font-size: 0.42rem;
    color: #333;
    border-bottom:1px solid #e4e4e4;
    width: 100%;
    @include flexbox(space-between,
      center,
      row,
      nowrap);
    .look-more{
      @include flexbox(flex-end,
      center,
      row,
      nowrap);
      font-size: 0.346rem;
      color: #999
    }
  }
  .my-todayProfit {
    position:relative;
    top:-26px;
    clear: both;
    background: #fff;
    margin: 0 .33rem 8px;
    border-radius:5px;
    
    .my-todayProfit-top{
      width: 100%;
       @include flexbox(flex-start,
      center,
      row,
      nowrap);
      padding: 8px 0;
      border-bottom: 1px solid #efefef;
      font-size: 0.37rem;
      color: #333;
      div{
        width: 33.333%;
        p{
        text-align: center;
        line-height: 0.67rem
       }
      }
      
    }
    .my-todayProfit-bottom{
      width: 100%;
       @include flexbox(flex-start,
      center,
      row,
      nowrap);
      padding: 8px 0;
      font-size: 0.37rem;
      color: #333;
      div{
        width: 33.333%;
        p{
        text-align: center;
        line-height: 0.67rem
        
       }
      }
      
    }
  }
  // 我的订单样式
  .my-order {
    position:relative;
    top:-26px;
    clear: both;
    background: #fff;
    margin: 0 .33rem 8px;
    border-radius:5px;
    @include flexbox(center,
    center,
    column,
    wrap);
    h2{
      width:100%;
      text-indent: 10px;
      line-height:36px;
      border-bottom:1px solid #e4e4e4;
      font-size:15px;
    }
    >div{
      width:100%;
      padding:15px 0;
      @include flexbox(center,
      center,
      row,
      nowrap);
    }

    .order-item {
      width: 20%;
      position: relative;
      @include flexbox(space-between,
      center,
      column,
      wrap);
      img {
        height: 0.61rem;
      }
      // &:first-child{
      //   img{
      //     height:24px;
      //   }
      // }
      em{
        position: absolute;
        display: inline-block;
        color: $red;
        padding: 0 3px;
        border: 1px solid $red;
        border-radius: 10px;
        font-size: 0.32rem;
        top: -7px;
        left: 48px;
        background: #fff;
      }
      span {
        margin: 10px 0 0;
        font-size: 0.373rem;
        color: #333;
      }
      &.myorder {
        position: relative;
      }
    }
  }
  // 关于我们
  .my-about{
    position:relative;
    top:-26px;
    margin: 0 .33rem;
    border-radius:5px;
    background:#fff;
    .my-about-tools{
      width:100%;
      padding:15px 0;
      @include flexbox(flex-start,
      center,
      row,
      wrap);
      .my-about-tools-item{
            width: 25% ;
            margin-bottom: 20px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
      img {
        height: 0.61rem;
      }
      span {
        margin: 10px 0 0;
        font-size: 0.373rem;
        color: #333;
      }
      }
    }
  }

  .my-attention {
    clear: both;
    background: #fff;
    margin-top: 10px;
    padding: 10px 0;
    @include flexbox(center,
    center,
    row,
    nowrap);
    .attention-item {
      width: 25%;
      @include flexbox(space-between,
      center,
      column,
      wrap);
      strong {
        text-align: center;
        font-size: 16px;
        font-weight: normal;
        background-image: -webkit-linear-gradient(left, rgb(255, 85, 39), rgb(255, 39, 65));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      span {
        margin: 10px 0;
        font-size: 14px;
        color: #333;
        text-align: center;
      }
    }
  }

  /* 为您推荐 */

  .my-recommend {
    clear: both;
    margin-top: 10px;
    .recommend-tip {
      text-align: center;
      margin: 0 0 10px;
      img {
        height: 35px;
      }
    }
    .recommend-list {
      background: #fff;
      @include flexbox(flex-start,
      center,
      row,
      wrap);
      overflow: hidden;
      clear: both;
      .recommend-item {
        background: #fff;
        width: 4.935rem;
        margin-bottom: .15rem;
        .item-posre {
          img {
            max-height: 185px;
            width: 100%;
          }
        }
        .item-product-text {
          padding: .1rem 0 0 .1rem;
          font-size: 14px;
          @include textoverflow(2);
        }
        .item-product-info {
          color: #f23030;
          padding: .2rem .1rem;
          font-size: 16px;
          span {
            font-size: 12px;
            margin-right: .1rem;
          }
        }
        .item-product-praise {
          padding: 0 0 .2rem .1rem;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  /* 为您推荐 */

  // 提示框样式
  .mint-toast{
    padding:15px .4rem!important;
    white-space:nowrap;
    opacity:.8
  }
</style>

<template>
  <div>
    <div class="content">
      <!-- <load-more @translate-change="translateChange" style="width:100%;" :topMethod="onRefreshCallback"
        :loadMoreIconVisible="false" ref="recommendLoadmore">
        <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
          slot="refresh-spinner">更新中...</span> -->
        <div class="my-header">
          <div class="userinfo">
            <!-- @click.stop.prevent="$router.push(!userData.memberInfo ? `/login` : `/myhome`)" -->
            <div>
              <div class="avatar">
                <img :src="!userData.memberInfo? 'https://static.hdslb.com/images/akari.jpg' : userData.memberInfo.head_img" alt="">
              </div>
              <div class="user">
                <span class="username" v-if="userData.memberInfo">{{userData.memberInfo.nick}}</span>
                <!-- 假数据 -->
                <!-- <span class="userphone" v-if="!userData.memberInfo">18867202256</span>  -->
              </div>
            </div>
            <!-- <div class="info-box"> -->
              <!-- 真数据 -->
              <!-- <div class="my-validWalletAmount" v-if="userData.memberInfo">
                <p class="card" @click= "$router.push('/cardCoupon')">
                  <span>{{userData.userCouponsCount}}</span>
                  <span>我的卡劵</span>
                </p>
                <p class="expiry-time">
                  <span>{{userData.img_search_end_time|DateFormat('yyyy.MM.dd')}}</span>
                  <span>图搜有效期</span>
                </p>
              </div>
            </div> -->
          </div>
        </div>
        <div class="my-store" v-if="userData.distributorBO" @click="$router.push('/myShop')">
          <p class="my-store-title"><span class="my-store-titleleft"><img src="~jd/images/money_icon.png" width="22">您已累计赚取60000.00元</span><span class="right-menu"></span></p>
          <div class="my-store-main">
            <p class="my-store-maintop">123.00</p>
            <p class="my-store-mainbottom"><span>可提现余额(元)</span><span style="font-size:0.37rem" class="my-store-mainbottomright">提现</span></p>
          </div>
        </div>


        <div class="my-todayProfit">
          <p class="card-title"><span>今日业绩</span><span class="look-more" @click= "()=>$router.push({path: '/withdrawalEntrance'})"><em>查看详情</em><em class="right-menublack"></em></span></p>
          <div style="padding:0 10px;">
            <div class="my-todayProfit-top">
              <div>
                <p style="font-size:0.48rem;font-weight: bold">0</p>
                <p>支付订单数</p>
              </div>
              <div>
                <p style="font-size:0.48rem;font-weight: bold">0.00</p>
                <p>支付金额(元）</p>
              </div>
            </div>
            <div class="my-todayProfit-bottom">
              <div>
                <p style="font-size:0.48rem;font-weight: bold">0</p>
                <p>待发货订单</p>
              </div>
              <div>
                <p style="font-size:0.48rem;font-weight: bold">0</p>
                <p>待收货订单</p>
              </div>
              <div>
                <p style="font-size:0.48rem;font-weight: bold">0</p>
                <p>售后中订单</p>
              </div>
            </div>
          </div>
        </div>


        <div class="my-order">
          <p class="card-title"><span>我的进货单</span></p>
          <div>
            <div class="order-item" @click="$router.push('/orderList/1')">
              <img src="~jd/images/order-itemicon1.png" alt="">
              <span>待付款</span>
              <em>1</em>
            </div>
            <div class="order-item" @click="$router.push('/orderList/2')">
              <img src="~jd/images/order-itemicon2.png" alt="">
              <span>待发货</span>
              <em>10</em>
            </div>
            <div class="order-item" @click="$router.push('/orderList/3')">
              <img src="~jd/images/order-itemicon3.png" alt="">
              <span>待收货</span>
              <em>6</em>
            </div>
            <div class="order-item myorder" @click="$router.push('/orderList/0')">
              <img src="~jd/images/order-itemicon4.png" alt="">
              <span>全部订单</span>
            </div>
          </div>
        </div>
        <div class="my-about">
          <p class="card-title"><span>必备工具</span></p>
          <div class="my-about-tools">
              <div class="my-about-tools-item" @click= "()=>$router.push({path: '/helpcenter'})">
                <img src="~jd/images/tools_icon1.png" alt="">
                <span>常见问题</span>
              </div>
              <div class="my-about-tools-item" @click= "$router.push('/addressList')">
                <img src="~jd/images/tools_icon2.png" alt="">
                <span>收货地址</span>
              </div>
              <div class="my-about-tools-item">
                <img src="~jd/images/tools_icon3.png" alt="">
                <span>资产对账</span>
              </div>
              <div class="my-about-tools-item">
                <img src="~jd/images/tools_icon4.png" alt="">
                <span>提现记录</span>
              </div>
              <div class="my-about-tools-item" @click= "$router.push('/customerSever')" style="margin-bottom:0">
                <img src="~jd/images/tools_icon5.png" alt="">
                <span>客服中心</span>
              </div>
          </div>
          
          <!-- <p class="about-item" @click= "$router.push('/addressList')">
            <span><img src="~jd/images/addressicon.png">收货地址</span>
            <span>快速管理 ></span>
          </p>
          <p class="about-item" @click= "()=>$router.push({path: '/helpcenter'})">
            <span><img src="~jd/images/kefuicon.png">帮助中心</span>
            <span>有问题找小惠 ></span>
          </p>
          <p class="about-item" style="border-bottom:none;" @click="showToast">
            <span><img src="~jd/images/usicon.png">关于我们</span>
            <span>图搜搜索品质生活 ></span>
          </p> -->
        </div>
    </div>
    <FooterView/>
  </div>
</template>

<script>
  import FooterView from 'component/footer/footerView';
  import LoadMore from 'common/loadMore';
  // import BackHead from 'common/backHead';
  import {
    Toast
  } from 'mint-ui';
  import {
    setSessionStorage,
    getSessionStorage,
    removeSessionStorage
  } from '@/utils/mixin';
  import {
    mapGetters,
    mapMutations
  } from 'vuex';
  import {
    cardCoupon
  } from '@/service/getData';
  export default {
    data() {
      return {
        userData: {
          memberInfo:{},
          distributorBO:null
        },
        handlerEvent: false,
        // cmsData: {
        //   recommendData: []
        // },
        isSdkReady:false
      };
    },

    watch: {},

    components: {
      FooterView,
      LoadMore,
      Toast
    },

    computed: {
      ...mapGetters([
        'memberInfo',
      ])
    },

    methods: {
      // openSdk(){
      //      window.openSdk({user_id: 2,nickname: 'chaosiling'});
      // },
      ...mapMutations([
        'SET_USERINFO_DATA'
      ]),
     
      async initData() {
          let res = await this.$store.dispatch('GetUserInfo');
          await this.SET_USERINFO_DATA(res.data);
          if(res.code==10000){
            await this.SET_USERINFO_DATA(res.data);
            this.userData = res.data;
          }else{
            this.userData.memberInfo = null;
          }
      },
      async showToast(){
        Toast({duration: 1000,
          message:'该模块暂未开放，请尽情期待!',
          duration:1000,
          className:'tipToast'
        })
      },

    },
    mounted: function () {
      this.initData();
    }
  }
</script>

<style lang='scss' scoped>
</style>