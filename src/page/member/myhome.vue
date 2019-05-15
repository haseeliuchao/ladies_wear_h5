<!-- myhome -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .content {
    padding-bottom: 1.35rem;
    min-height: 100vh;
  }

  .my-header {
    height: 205px;
    padding: 18px .33rem;
    background: -webkit-linear-gradient(left, #ff5527, #ff2741);
    background: linear-gradient( #ff5527, #ff2741);
    box-shadow: 0 2px 5px rgba(255, 98, 98, .4);
    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 0px;
      width: 100%;
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
          margin: 16px 0;
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

  .my-order {
    position:relative;
    top:-53px;
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
      @include flexbox(space-between,
      center,
      column,
      wrap);
      img {
        height: 25px;
      }
      span {
        margin: 10px 0 0;
        font-size: 14px;
        color: #333;
      }
      &.myorder {
        position: relative;
        // border-left: 1px solid #eee;
        // &:before {
        //   content: '';
        //   position: absolute;
        //   left: -2px;
        //   z-index: 999;
        //   top: calc(100%/2 - 10px);
        //   width: 0;
        //   height: 0;
        //   border: 8px solid transparent;
        //   border-left-color: #fff;
        // }
        // &:after {
        //   content: '';
        //   position: absolute;
        //   left: 0;
        //   top: calc(100%/2 - 10px);
        //   width: 0;
        //   height: 0;
        //   border: 8px solid transparent;
        //   border-left-color: #eee;
        // }
      }
    }
  }
  // 关于我们
  .my-about{
    position:relative;
    top:-53px;
    margin: 0 .33rem;
    border-radius:5px;
    background:#fff;
    .about-item{
      @include flexbox(space-between,
      center,
      row,
      wrap);
      padding:0 .266rem;
      border-bottom:1px solid #e4e4e4;
      height:48px;
      span{
        color:#333;
        font-size:15px;
        img{
          width:20px;
          height:20px;
          margin-right:.266rem;
          margin-bottom:-3px;
        }
      }
      span:last-child{
        color:#999;
        font-size:13px;
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
<style>
.layer-4{
  display:none;
}
#YSF-IFRAME-LAYER.ysf-chat-mobile-layeropen{
  height:100%!important;
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
            <div class="info-box">
              <!-- 真数据 -->
              <div class="my-validWalletAmount" v-if="userData.memberInfo">
                <p class="card" @click= "$router.push('/cardCoupon')">
                  <span>{{userData.userCouponsCount}}</span>
                  <span>我的卡劵</span>
                </p>
                <p class="expiry-time">
                  <span>{{userData.img_search_end_time|DateFormat('yyyy.MM.dd')}}</span>
                  <span>图搜有效期</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-order">
          <h2>我的订单</h2>
          <div>
            <div class="order-item" @click.stop.prevent="!handlerEvent ? $router.push('/orderList/1'):false">
              <img src="~jd/images/paymenticon.png" alt="">
              <span>待付款</span>
            </div>
            <div class="order-item" @click.stop.prevent="!handlerEvent ? $router.push('/orderList/2'):false">
              <img src="~jd/images/send.png" alt="">
              <span>待发货</span>
            </div>
            <div class="order-item" @click.stop.prevent="!handlerEvent ? $router.push('/orderList/3'):false">
              <img src="~jd/images/received.png" alt="">
              <span>待收货</span>
            </div>
            <!-- <div class="order-item" @click.stop.prevent="!handlerEvent ? $router.push('/orderList/0'):false">
              <img src="~jd/images/evaluated.png" alt="">
              <span>待评价</span>
            </div> -->
            <!-- <div class="order-item">
              <img src="~jd/images/Aftermarket.png" alt="">
              <span>退换/售后</span>
            </div> -->
            <div class="order-item myorder" @click.stop.prevent="!handlerEvent ? $router.push('/orderList/0'):false">
              <img src="~jd/images/myordericon.png" alt="">
              <span>全部订单</span>
            </div>
          </div>
        </div>
        <div class="my-about">
          <p class="about-item" @click= "$router.push('/addressList')">
            <span><img src="~jd/images/addressicon.png">收货地址</span>
            <span>快速管理 ></span>
          </p>
          <p class="about-item" @click= "openSdk">
            <span><img src="~jd/images/kefuicon.png">在线客服</span>
            <span>有问题找小惠 ></span>
          </p>
          <p class="about-item" @click= "showToast">
            <span><img src="~jd/images/usicon.png">关于我们</span>
            <span>图搜搜索品质生活 ></span>
      
          </p>
        </div>
      <!-- </load-more> -->
    </div>
    <FooterView/>
    <BackHead/>
  </div>
</template>

<script>
  import FooterView from 'component/footer/footerView';
  import LoadMore from 'common/loadMore';
  import BackHead from 'common/backHead';
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
          memberInfo:{}
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
      BackHead,
      Toast
    },

    computed: {
      ...mapGetters([
        'memberInfo',
      ])
    },

    methods: {
      openSdk(){
          window.openSdk()
      },
      ...mapMutations([
        'SET_USERINFO_DATA'
      ]),
      async onRefreshCallback() {
        let res = await this.$store.dispatch('GetUserInfo');
        this.userData = res.data;
        this.$refs.recommendLoadmore.onTopLoaded(this.$refs.recommendLoadmore.uuid);
      },
      translateChange(y){ //监听下拉的阈值
        this.handlerEvent = y>8 ? true : false;
      },
      async initData() {
          let res = await this.$store.dispatch('GetUserInfo');
          await this.SET_USERINFO_DATA(res.data);
          this.userData = res.data;
        // } else {
        //   this.userData.userInfo = this.userInfo;
        // }
      },
      async showToast(){
        Toast({
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