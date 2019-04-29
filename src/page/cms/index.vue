<!--index-->
<style lang="scss" scoped>
  /* banner */

  @import '~assets/common/css/mixin.scss';
  .banner {
    // height: 4.88rem;
    height:175px;
    margin-top:1.56rem;
    img {
      min-width: 100%;
      max-width: 100%;
      max-height: 100%;
      height:175px;
    }

  }
  /* banner */
  /* 产品说明 */
  .product-explain{
    background:#fff;
    padding:10px .3rem 15px;
    ul{
      @include flexbox(center, center, row, nowrap);
      li{
        color:#7a7a7a;
        font-size:13px;
        display:flex;
        flex:1;
        justify-content:center;
        img{
          height:16px;
          margin-right:.13rem;
          margin-top:-1px;
        }
      }
      
    }
    
  }

  /* 广告位专区 */
  .activity-manage {
    background: #fff;
    padding:0 .3rem;
    .activity-list {
      height:72px;
      // @include flexbox(space-between, center, row, wrap);
      img {
        width: 100%;
        height: 100%;
        border-radius:36px;
      }
      .right_item {
        @include flexbox(space-between, center, column, wrap);
        flex: initial;
        .r_i_cell {
          height: 50%;
          width: 100%;
        }
      }
    }
  }
  /* 广告位专区 */

  /* 配置专题 */
  .deploy-floor{
    @include flexbox(space-between,center,row,nowrap);
    height:210px;
    background:#fff;
    padding:15px .3rem;
    >div{
      @include flexbox(space-between,center,column,wrap);
      height:100%;
    }
    img{
      width:100%;
      height:100%;
    }
    .deploy-floor-l{
      width:46%;
      margin-right:.3rem;
      .deploy-item{
        width:100%;
        height:100%;
      }
    }
    .deploy-floor-r{
      .deploy-item{
        width:100%;
        height:48%;
      }
     

    }
  }
  /* 配置专题 */

  /* 推荐 */
  .recommend {
    background: #f0f2f5;
    .gray-text {
      margin: .3rem 0;
      @include flexbox(center, center, row, nowrap);
      .gray-layout {
        font-size: 14px;
        color: #999;
        .gray-text-img {
          img {
            width: 18px;
            height: 18px;
          }
          display: inline-block;
          vertical-align: middle;
          margin-right: 10px;
        }
      }
    }
    .recommend-title{
      font-size:15px;
      color:#333;
      ul{
         @include flexbox(center, center, row, nowrap);
         margin:10px .3rem;
      }
      li{
        display:flex;
        flex:1;
        justify-content:center;
        padding-bottom:4px;
        &.active{
          color:#ff2741;
          border-bottom:2px solid #ff2741;
        }
      }
    }
    .find-recommend-product {
      @include flexbox(space-between, center, row, wrap);
      width: 9.4rem;
      margin-left: .3rem;
      .recommend-item {
        width:49%;
        background: #fff;
        margin-bottom: 7px;
        border-radius:5px;
        .item-product-pic {
          img {
            max-height: 160px;
            width: 100%;
          }
        }
        .item-product-text {
          padding: 9px .26rem 0;
          height: 38px;
          font-size: 13px;
          @include textoverflow(2);
        }
        .item-product-info {
          color: #ff2741;
          padding: 15px .26rem;
          font-size: 15px;
          del{
            color:#999;
            font-size:12px;
          }
        }
        // .item-product-praise {
        //   padding: 0 0 .2rem .1rem;
        //   font-size: 12px;
        //   color: #999;
        // }
      }
    }
  }

  /* 推荐 */

</style>
<style lang="scss">
  #jd {
    min-height: 100vh;
    padding-bottom: 1.35rem;
    .appTabscenter {
      .mint-swipe-indicators {
        transform: translate(-50%, 150%);
        .mint-swipe-indicator {
          width: .15rem;
          height: .15rem;
          // background: rgba(0, 0, 0, .3) !important;
          opacity: 1 !important;
          &.is-active {
            background: #fff !important;
          }
        }
      }
    }
    .banner {
      .mint-swipe-indicators {
        transform: translate(-50%, -50%);
        .mint-swipe-indicator {
          width: 10px;
          height:10px;
          background: #dfdfdf;
          opacity:1;
          &.is-active {
            background:#ff2741 ;
          }
        }
      }
    }
  }
/* 遮罩层 */
.model-popup{
  img{
      position:relative;
      width:5.6rem;
  }
  div.jump-btn{
    position:absolute;
    top:0;
    right:0;
    width:1.2rem;
    height:1.2rem;
  }
}
    
</style>
<template>
  <div id="jd">
    <!-- 遮罩层 -->
      <!-- <mt-popup  class="model-popup" v-model="popupVisible" :closeOnClickModal="true" model="true" position="right" style="top:2.25rem;right:.34rem;background:rgba(0,0,0,0)">
        <div class="overlayer">
          <img src="~jd/images/popup-con.png">
          <div class="jump-btn" @click="()=>{$router.push('/searchResult');popupVisible=false}"></div>
        </div>
      </mt-popup> -->
        <!-- 搜索栏 -->
        <search-bar :Status="Status"  v-if="searchBarVisilbe" />
        <!-- 搜索栏 -->
        <load-more @translate-change="translateChange" style="width:100%;" @loadMore="infiniteCallback"  :param="recommendParam" :topMethod="onRefreshCallback"
          :loadMoreIconVisible="false" ref="recommendLoadmore" >
          <!-- <scroller class="cmsScroll" refreshLayerColor="#999" refreshText="下拉刷新..." :snapping="true" :onRefresh="onRefreshCallback" ref="cmsScroll" width="100%" height="100%"> -->
          <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
            slot="refresh-spinner">更新中...</span>
          <!-- banner -->
          <mt-swipe :stopPropagation="true" :prevent="true" :auto="5000" class="banner">
            <mt-swipe-item>
              <img src="~jd/images/floor1.jpg" alt="女装上新">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="~jd/images/floor (1).jpg" alt="女装上新">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="~jd/images/floor (2).jpg" alt="女装上新">
            </mt-swipe-item>
          </mt-swipe>
          <!-- banner -->
          <!-- 产品说明 -->
          <div class="product-explain">
            <ul>
              <li><img src="~jd/images/zhengpinicon.png">正品保障</li>
              <li><img src="~jd/images/tuihuanicon.png">7天退换</li>
              <li><img src="~jd/images/shipaiicon.png">商品实拍</li>
              <li><img src="~jd/images/kefuicon1.png">专属客服</li>
            </ul>
          </div>
          <!-- 活动广告位 -->
          <div class="activity-manage">
            <div class="activity-list">
                <img src="~jd/images/floor (1).jpg">
            </div>
          </div>
          <!-- 配置专题 -->
          <div class="deploy-floor">
            <div class="deploy-floor-l">
              <div class="deploy-item">
                <img src="~jd/images/product.png">
              </div>
            </div>
            <div class="deploy-floor-r">
              <div class="deploy-item">
                <img src="~jd/images/product.png">
              </div>
              <div class="deploy-item">
                <img src="~jd/images/product.png">
              </div>
            </div>
          </div>
          <!-- <div class="seckill-floor">
            <div class="jd-flex-box">
              <div class="jd-f-b-l">
                <div class="jd-f-b-item">
                  <div class="seckill-prd">
                    <div class="prd-item" @click="$router.push(`/searchResult`)">
                      <img src="~jd/images/product.png" alt="连衣裙套装专题">
                    </div>
                  </div>
                </div>
                <div class="jd-f-b-pd-item">
                  <div class="seckill-p-item" @click="$router.push(`/searchResult`)">
                    <div class="seckill-t">
                      <img src="~jd/images/product.png" alt="连衣裙套装">
                    </div>
                  </div>
                </div>
              </div>
              <div class="jd-f-b-r">
                <div class="jd-f-b-r-item">
                  <div class="seckill-pd-r">
                    <img src="~jd/images/product.png" alt="连衣裙套装" @click="$router.push(`/searchResult`)">
                  </div>
                </div>
                <div class="jd-f-b-r-item">
                  <div class="seckill-pd-r">
                    <img @click="$router.push(`/searchResult`)" src="~jd/images/product.png" alt="连衣裙套装">
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!--配置专题 -->
            
          <!-- 为您推荐 -->
          <div class="floor recommend" style="top:0rem;">
            <div class="recommend-title">
              <ul>
                <li class="active">为您精选</li>
                <li>推荐</li>
                <li>生活</li>
                <li>社区</li>
                <li>时尚</li>
              </ul>
            </div>
            <ul class="find-recommend-product">
              <li class="recommend-item" @click="$router.push(`/searchResult`)">
                <div class="item-product-pic">
                  <img src="~jd/images/product.png" alt="连衣裙">
                </div>
                <p class="item-product-text">2019最近上新甜美超仙连衣裙</p>
                <p class="item-product-info">
                  <strong>&yen;199</strong>
                  <del>&yen;399</del>
                </p>
              </li>
              <li class="recommend-item" @click="$router.push(`/searchResult`)">
                <div class="item-product-pic">
                  <img src="~jd/images/product.png" alt="连衣裙">
                </div>
                <p class="item-product-text">2019最近上新甜美超仙连衣裙</p>
                <p class="item-product-info">
                  <strong>&yen;199</strong>
                  <del>&yen;399</del>
                </p>
              </li>
              <li class="recommend-item" @click="$router.push(`/searchResult`)">
                <div class="item-product-pic">
                  <img src="~jd/images/product.png" alt="连衣裙">
                </div>
                <p class="item-product-text">2019最近上新甜美超仙连衣裙</p>
                <p class="item-product-info">
                  <strong>&yen;199</strong>
                  <del>&yen;399</del>
                </p>
              </li>
              <li class="recommend-item" @click="$router.push(`/searchResult`)">
                <div class="item-product-pic">
                  <img src="~jd/images/product.png" alt="连衣裙">
                </div>
                <p class="item-product-text">2019最近上新甜美超仙连衣裙</p>
                <p class="item-product-info">
                  <strong>&yen;199</strong>
                  <del>&yen;399</del>
                </p>
              </li>
            </ul>
          </div>
        </load-more>
        <!-- 为您推荐 -->
        <FooterView/>
        <BackHead/>
        
     
  </div>
</template>
<script>
import utils from '@/utils/urlfun'
  import FooterView from 'component/footer/footerView';
  import BackHead from 'common/backHead';
  import {
    showBack
  } from '@/utils/mixin';
  import {
    getRecommend,
    getArticle,
    getArticleList,
    getGoodsCategoryList
  } from '@/service/getData';
  import marquee from 'common/marquee/marquee';
  import marqueeItem from 'common/marquee/marquee-item';
  import SearchBar from 'page/shop/searchBar';
  import LoadMore from 'common/loadMore';
  import {
    Swipe,
    SwipeItem,
    Lazyload,
    Popup
  } from 'mint-ui';
  import {
    mapGetters,
    mapMutations
  } from 'vuex';
  export default {
    data() {
      return {
        Status: false,
        commad: getRecommend,
        recommendParam: {
          Type: 'recommend',
          pageSize: 10,
          pageIndex: 1
        },
        
         code:null,
         app_key:null,
      
        recommendData: [],
        cmsData: null,
        searchBarVisilbe: true,
        popupVisible:true
      };
    },
    watch: {},
    components: {
      FooterView,
      BackHead,
      Swipe,
      SwipeItem,
      marquee,
      marqueeItem,
      SearchBar,
      LoadMore,
      Popup
    },
    computed: {
      ...mapGetters([
        'indexCmsData'
      ])
    },
    methods: {
      isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        }
        else {
            return false;
        }
      },
      translateChange(y){ //监听下拉的阈值
        this.searchBarVisilbe = y>8 ? false : true;
      },
      async onRefreshCallback() { //下拉刷新
        this.recommendParam.pageSize = 10;
        this.recommendParam.pageIndex = 1;
        this.updatedData();
        setTimeout(() => {
          this.$refs.recommendLoadmore.onTopLoaded(this.$refs.recommendLoadmore.uuid);
        }, 1000); 
      },
      async infiniteCallback(response) { //加载更多
        if (response.Data.length > 0) {
          response.Data.map(i => {
            this.recommendData.push(i)
          })
        }
      },
      async updatedData() { //更新数据
        let {
          Data
        } = await this.$store.dispatch('GetIndexCmsData', {
          pageIndex: 1,
          pageSize: 100
        });
        this.cmsData = Data;
      },
      async initData() { //初始化数据
        if (!this.indexCmsData) {
          this.updatedData();
        } else {
          this.cmsData = this.indexCmsData.Data;
        }
      },
       async loginData() { //更新数据
       if(this.isWeiXin()){
       let Data = await this.$store.dispatch('Login', {
          code:utils.getUrlKey('code'),
          app_key:utils.getUrlKey('state').slice(8)
        })
       }
        
      },
      
    },
    beforeDestroy() {},
    mounted: function () {
      // this.initData();
      this.loginData();
      showBack(status => {
        this.Status = status;
      })
    }
  }

</script>
