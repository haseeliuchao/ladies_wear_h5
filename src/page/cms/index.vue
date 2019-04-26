<!--index-->
<style lang="scss" scoped>
  /* banner */

  @import '~assets/common/css/mixin.scss';
  // .banner {
  //   // height: 4.88rem;
  //   height:175px;
  //   margin-top:1.56rem;
  //   img {
  //     min-width: 100%;
  //     max-width: 100%;
  //     max-height: 100%;
  //     height:175px;
  //   }

  // }

  /* banner */
  // .appTabscenter {
  //   border-radius: .2rem .2rem 0 0;
  //   overflow: hidden;
  //   position: relative;
  //   top: -.2rem;
  //   left: 0;
  //   background: #f8f8f8;
  //   z-index: 200;
  //   width: 100%;
  //   padding-bottom: .25rem;
  //   .mint-swipe {
  //     padding: .266667rem 0;
  //     overflow: initial !important;
  //     height: 3.39rem;
  //   }
  //   .tableTabs {
  //     @include flexbox(center, center, row, wrap);
  //     width: 100%;
  //     height: 100%;
  //     .table-tabs-item {
  //       width: 20%;
  //       margin: .133333rem 0;
  //       @include flexbox(center, center, column, wrap);
  //       flex: initial;
  //       cursor: pointer;
  //       p {
  //         overflow: hidden;
  //         display: -webkit-box;
  //         -webkit-line-clamp: 1;
  //         -webkit-box-orient: vertical;
  //         display: box;
  //         color: #666666;
  //         box-orient: vertical;
  //       }
  //       img {
  //         width: 29px;
  //         height: 29px;
  //       }
  //     }
  //   }
  // }

  // .floor {
  //   position: relative;
  //   background: #fff;
  //   top: -.1rem;
  //   overflow: hidden;
  //   clear: both;
  //   .container-bg {
  //     width: 100%;
  //     overflow: hidden;
  //     clear: both;
  //     img {
  //       width: 100%;
  //       height: auto;
  //     }
  //   }
  //   .activity_list {
  //     position: absolute;
  //     bottom: .2rem;
  //     padding: 0 8px;
  //     @include flexbox(space-between, center, row, wrap);
  //     >div {
  //       width: 50%;
  //     }
  //     img {
  //       width: 100%;
  //       height: auto;
  //     }
  //     .right_item {
  //       @include flexbox(space-between, center, column, wrap);
  //       flex: initial;
  //       .r_i_cell {
  //         height: 50%;
  //         width: 100%;
  //       }
  //     }
  //   }
  // }

  // .jd-express-news {
  //   position: relative;
  //   overflow: hidden;
  //   top: -.1rem;
  //   background: #fff;
  //   clear: both;
  //   .jd-kuaibao {
  //     .jd-news-icon {
  //       width: 1.95rem;
  //       height: .45rem;
  //     }
  //     >div {
  //       padding-left: .1rem;
  //       li {
  //         @include textoverflow(1);
  //       }
  //     }
  //     >span {
  //       font-size: 12PX;
  //       width: 1.5rem;
  //       text-align: right;
  //       color: #181818;
  //       position: relative;
  //       &:before {
  //         content: '';
  //         position: absolute;
  //         left: 0;
  //         background: #ececec;
  //         height: 100%;
  //         width: 1px;
  //       }
  //     }
  //     @include flexbox(space-between, center, row, nowrap);
  //     padding: 0.2rem .5rem;
  //   }
  // }

  /* 京东秒杀 */

  // .seckill-t {
  //   padding: .1rem 0;
  //   font-size: .3rem;
  //   strong {
  //     font-weight: normal !important;
  //     font-size: .4rem;
  //   }
  //   .seckill-summary {
  //     color: #999;
  //     font-size: 13px;
  //     padding: .1rem 0;
  //     -webkit-text-fill-color: initial;
  //   }
  //   .seckill-time {
  //     color: #666;
  //     -webkit-text-fill-color: initial;
  //     >span {
  //       color: #fff;
  //       background: #000;
  //       border-radius: .1rem;
  //       padding: 0 .03rem;
  //     }
  //   }
  //   .seckill-now {
  //     color: #333;
  //     font-size: 15px;
  //     -webkit-text-fill-color: initial;
  //     font-weight: normal !important;
  //   }
  // }

  // .seckill-floor {
  //   position: relative;
  //   overflow: hidden;
  //   clear: both;
  //   top: .05rem;
  //   img {
  //     max-width: 100%;
  //     max-height: 80px;
  //   }
  //   .jd-f-b-r-item,
  //   .jd-f-b-item,
  //   .jd-f-b-pd-item {
  //     min-height: 134px;
  //     overflow: hidden;
  //   }
  //   .jd-flex-box {
  //     background: #fff;
  //     padding: 10px 0;
  //     @include flexbox(space-between, flex-start, row, nowrap);
  //     >div {
  //       width: 50%;
  //     }
  //     .jd-f-b-l {
  //       @include flexbox(center, space-between, column, wrap);
  //       flex: initial;
  //       position: relative;
  //       >div {
  //         padding: 0 .2rem;
  //       }
  //       &:after {
  //         content: '';
  //         position: absolute;
  //         right: 1px;
  //         height: 100%;
  //         width: 1px;
  //         background: #f5f5f5;
  //       }
  //       .jd-f-b-pd-item {
  //         @include flexbox(space-between, center, row, nowrap);
  //         .seckill-p-item {
  //           width: 50%;
  //           .seckill-t {
  //             @include flexbox(center, center, column, wrap);
  //           }
  //         }
  //       }
  //       .jd-f-b-item {
  //         @include flexbox(center, center, column, wrap);
  //         border-bottom: 1px solid #F5F5F5;
  //         .seckill-t {
  //           @include flexbox(space-between, center, row, nowrap);
  //         }
  //         .seckill-prd {
  //           @include flexbox(space-between, center, row, nowrap);
  //           .prd-item {
  //             @include flexbox(center, center, column, wrap);
  //             >strong {
  //               color: #f23030;
  //               font-size: 14px;
  //               line-height: 1;
  //             }
  //             >del {
  //               color: #999;
  //               font-size: 12px;
  //               padding: .03rem 0 .08rem;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     .jd-f-b-r {
  //       @include flexbox(center, center, column, wrap);
  //       flex: initial;
  //       .jd-f-b-r-item {
  //         @include flexbox(center, flex-start, column, wrap);
  //         padding: 0 .2rem;
  //         border-bottom: 1px solid #F5F5F5;
  //         .seckill-pd-r {
  //           img {
  //             width: 50%;
  //           }
  //         }
  //         .seckill-t {
  //           .seckill-summary {
  //             color: #999;
  //             font-size: 13px;
  //             -webkit-text-fill-color: initial;
  //           }
  //           @include flexbox(center, flex-start, column, wrap);
  //         }
  //         .seckill-pd-r {
  //           @include flexbox(space-between, center, row, nowrap);
  //         }
  //       }
  //     }
  //   }
  // }

  /* 京东秒杀 */

  /* 爱生活 */

  // .floor {
  //   .floor-title {
  //     background: #f5f5f5;
  //     text-align: center;
  //     img {
  //       height: 35px;
  //     }
  //   }
  //   .floor-container-bom {
  //     @include flexbox(center, center, row, nowrap);
  //     .f-c-b-prd-item {
  //       width: 25%;
  //       position: relative;
  //       padding: .2rem;
  //       img {
  //         max-width: 60px;
  //       }
  //       &:after {
  //         content: '';
  //         position: absolute;
  //         top: 0;
  //         right: 1px;
  //         height: 100%;
  //         width: 1px;
  //         background: #f5f5f5;
  //       }
  //     }
  //   }
  //   .floor-container {
  //     @include flexbox(space-between, center, row, nowrap);
  //     position: relative;
  //     &:after {
  //       content: '';
  //       position: absolute;
  //       bottom: 0;
  //       left: 0;
  //       height: 1px;
  //       width: 100%;
  //       background: #f5f5f5;
  //     }
  //     >div {
  //       width: 50%;
  //     }
  //     .seckill-t {
  //       padding: 0 .2rem;
  //     }
  //     .f-c-l {
  //       position: relative;
  //       padding: .2rem 0;
  //       &:after {
  //         content: '';
  //         position: absolute;
  //         top: 0;
  //         right: 1px;
  //         height: 100%;
  //         width: 1px;
  //         background: #f5f5f5;
  //       }
  //     }
  //     .f-c-l-prd {
  //       img {
  //         max-width: 60px;
  //         max-height: 60px;
  //         margin: 0 .2rem;
  //       }
  //       @include flexbox(center, center, row, nowrap);
  //     }
  //   }
  // }

  /* 爱生活 */

  /* 推荐 */

  // .recommend {
  //   background: #f0f2f5;
  //   .gray-text {
  //     margin: .3rem 0;
  //     @include flexbox(center, center, row, nowrap);
  //     .gray-layout {
  //       font-size: 14px;
  //       color: #999;
  //       .gray-text-img {
  //         img {
  //           width: 18px;
  //           height: 18px;
  //         }
  //         display: inline-block;
  //         vertical-align: middle;
  //         margin-right: 10px;
  //       }
  //     }
  //   }
  //   .find-recommend-product {
  //     @include flexbox(space-between, center, row, wrap);
  //     overflow: hidden;
  //     clear: both;
  //     .recommend-item {
  //       background: #fff;
  //       width: 4.935rem;
  //       margin-bottom: .15rem;
  //       .item-posre {
  //         img {
  //           max-height: 185px;
  //           width: 100%;
  //         }
  //       }
  //       .item-product-text {
  //         padding: .1rem 0 0 .1rem;
  //         height: 1rem;
  //         font-size: 14px;
  //         line-height: 1.3;
  //         @include textoverflow(2);
  //       }
  //       .item-product-info {
  //         color: #f23030;
  //         padding: .2rem .1rem;
  //         font-size: 16px;
  //         span {
  //           font-size: 12px;
  //           margin-right: .1rem;
  //         }
  //       }
  //       .item-product-praise {
  //         padding: 0 0 .2rem .1rem;
  //         font-size: 12px;
  //         color: #999;
  //       }
  //     }
  //   }
  // }

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

</style>
<template>
  <div id="jd">
    <!-- 搜索栏 -->
    <search-bar :Status="Status"  v-if="searchBarVisilbe && cmsData" />
    <!-- 搜索栏 -->
    <load-more @translate-change="translateChange" style="width:100%;" @loadMore="infiniteCallback"  :param="recommendParam" :topMethod="onRefreshCallback"
      :loadMoreIconVisible="false" ref="recommendLoadmore" v-if="cmsData">
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
      <!-- 活动广告位 -->
      <div class="floor">
        <div class="activity_list">
          <div class="left_item">
            <img src="~jd/images/floor (1).jpg">
          </div>
        </div>
      </div>
      <!-- 配置专题 -->
      <div class="seckill-floor">
        <div class="jd-flex-box">
          <div class="jd-f-b-l">
            <div class="jd-f-b-item">
              <div class="seckill-prd">
                <div class="prd-item" @click="$router.push(`/searchResult`)">
                  <img src="~jd/images/product.png" alt="连衣裙套装专题">
                  <strong>&yen;199</strong>
                  <del>&yen;399</del>
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
      </div>
      <!-- 秒杀 -->
        
      <!-- 为您推荐 -->
      <div class="floor recommend" style="top:0rem;">
        <ul class="find-recommend-product">
          <li class="recommend-item" @click="$router.push(`/product/${item.productNo}`)">
            <div class="item-posre">
              <img src="~jd/images/recommend.png" alt="连衣裙">
            </div>
            <p class="item-product-text">超仙连衣裙</p>
            <p class="item-product-info">
              <span>&yen;</span>109
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
    Lazyload
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
        recommendData: [],
        cmsData: null,
        searchBarVisilbe: true
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
      LoadMore
    },
    computed: {
      ...mapGetters([
        'indexCmsData'
      ])
    },
    methods: {
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
      }
    },
    beforeDestroy() {},
    mounted: function () {
      this.initData();
      showBack(status => {
        this.Status = status;
      })
    }
  }

</script>
