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
        border-radius: 6px;
        overflow: hidden;
      }
    }
    .deploy-floor-r{
      .deploy-item{
        width:100%;
        height:48%;
        border-radius: 6px;
        overflow: hidden;
      }
     

    }
  }
  /* 配置专题 */

  /* 推荐 */
.content{
      width: 100%;
      .product-list{
        @include flexbox(space-between,center,row,wrap);
        padding: 0 12px;
        .prod-item{
          background: #fff;
          width: 48.6%;
          margin-bottom: 8px;
          border-radius: 6px;
          overflow: hidden;
          img{
            width: 100%;
            height: 162px;
            border-radius: 6px;
          }
          .prod-info{
            // margin-left: 10px;
            padding: 0px 6px;
            
            @include flexbox(space-between,flex-start,column,wrap);
            .prod-title{
              font-size: 14px;
              color: #333;
              @include textoverflow(2);
              height: 40px;
              line-height: 20px;
              margin-top: 4px;
            }
            .prod-price{
              color: $red;
              text-align:left;
              line-height: 30px;
              margin-bottom: 8px;
              span{
                font-size: $smsub;
                margin-right: 5px;
              }
              strong{
                font-size: 19px;
              }
            }
            .prod-pro{
              padding: 5px 0;
              text-align: left;
              color: $gray;
              font-size: $subtitle;
            }
          }
        }
      }
    }




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
      <mt-popup  class="model-popup" v-model="popupVisible" :closeOnClickModal="true" model="true" position="right" style="top:2.25rem;right:.34rem;background:rgba(0,0,0,0)">
        <div class="overlayer">
          <img src="~jd/images/popup-con.png">
          <div class="jump-btn" @click= "()=>{$router.push('/searchImg');popupVisible=false}"></div>
        </div>
      </mt-popup>
        <!-- 搜索栏 -->
        <search-bar :Status="Status"  v-if="searchBarVisilbe" />
        <!-- 搜索栏 -->
        <load-more @translate-change="translateChange" style="width:100%;"  :param="recommendParam" :topMethod="onRefreshCallback"
          :loadMoreIconVisible="false" ref="recommendLoadmore" >
          <!-- <scroller class="cmsScroll" refreshLayerColor="#999" refreshText="下拉刷新..." :snapping="true" :onRefresh="onRefreshCallback" ref="cmsScroll" width="100%" height="100%"> -->
          <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
            slot="refresh-spinner">更新中...</span>
          <!-- banner -->
          <mt-swipe :stopPropagation="true" :prevent="true" :auto="5000" class="banner">
            <mt-swipe-item v-for="(item,index) in cmsDataTypeones" 
             :key="index" @click= "()=>$router.push(item.http_url)">
              <img :src="item.img_url" alt="item.title">
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
            <div class="activity-list" v-for="(item,index) in cmsDataTypeads" :key="index">
              <a :href="item.http_url">
                <img :src="item.img_url" >
              </a>
            </div>
          </div>
          <!-- 配置专题 -->
          <div class="deploy-floor">
            <div class="deploy-floor-l" >
              <div class="deploy-item"  v-for="(item,index) in cmsDataTypeconfigsone" :key="index">
                <img  :src="item.img_url" @click= "()=>$router.push({path: '/searchRusult',query: {ad_advertising_id:item.ad_advertising_id,img_url:item.img_url}})">
              </div>
            </div>
            <!-- cmsData -->
            <div class="deploy-floor-r">
             <div class="deploy-item"  v-for="(item,index) in cmsDataTypeconfigstwo" :key="index">
                <img  :src="item.img_url">
              </div>
            </div>
          </div>

          
         
          <!--配置专题 -->
            
          <!-- 为您推荐 -->
          <div class="floor recommend" style="top:0rem;">
            <div class="recommend-title">


              <ul>
                <li @click= "getGoodsdata('',0)" :class="{'active':active===0}">为您精选</li>
                <li  v-for="(item,index) in cmsDataTyperecommends" :key="index" :class="{'active':active===index+1}" @click= "getGoodsdata(item.ad_advertising_id,index+1)">{{item.title}}</li>
              </ul>
            </div>
          </div>

          <div class="content">
            <load-more style="width:100%;" v-if="$route.path=='/index'" @loadMore="infiniteCallback" :commad="commad" :param="indexParams"
                ref="indexRusultloadMore">
              <ul class="product-list" >
                <li class="prod-item" v-for="(item,index) in indexRusultData" :key="index" @click= "()=>$router.push('/product/'+item.item_id)">
                  <img v-lazy="item.index_img_url" alt="">
                  <div class="prod-info">
                    <p class="prod-title">{{item.title}}</p>
                    <p class="prod-price">
                      <span style="font-weight:bold;margin-right:1px;">&yen;</span><span style="font-weight:bold"><em style="font-size:15px;">{{item.sales_consumer_price/100.00|topriceafter}}</em>.{{item.sales_consumer_price/100.00|topricenext}}</span>
                      <span style="margin-left:12px;text-decoration: line-through;color:#999"><em>&yen;</em><em style="font-size:15px;">{{item.cost_price/100.00|topriceafter}}</em>.{{item.cost_price/100.00|topricenext}}</span>
                      </p>
                  </div>
                </li>
              </ul>
            </load-more>
          </div>
        </load-more>
        <!-- 为您推荐 -->
        <FooterView/>
        <BackHead/>
  </div>
</template>
<script>
  import utils from '@/utils/urlfun';
  import FooterView from 'component/footer/footerView';
  import BackHead from 'common/backHead';
  import {
 getLocalStorage,
    setLocalStorage
  } from '@/utils/mixin';
  import {

    getArticle,
    getArticleList,
    getGoodsCategoryList,
    searchGoods
  } from '@/service/getData';
  // import marquee from 'common/marquee/marquee';
  // import marqueeItem from 'common/marquee/marquee-item';
  import SearchBar from 'page/shop/searchBar';
  import LoadMore from 'common/loadMore';
  import {
    Swipe,
    SwipeItem,
    Lazyload,
    Popup
  } from 'mint-ui';
  import {
  Indicator,
  Toast
} from 'mint-ui';
  import {
    mapGetters,
    mapMutations
  } from 'vuex';
  export default {
    data() {
      return {
        Status: false,
        // commad: getRecommend,
        recommendParam: {
          page_size: 10,
          current_page: 1
        },
        
         code:null,
         app_key:null,
      
        recommendData: [],
        cmsData: [],
        searchBarVisilbe: true,
        popupVisible:false,
        indexRusultData: [],
        commad: searchGoods,
        indexParams: {
          title: '',
          item_url:'',
          category_id:'',
          ad_advertising_id:'',
          img_url:'',
          page_size: 10,
          current_page: 1
        },
        active:0,
        guideindex:null
      };
    },
    watch: {},
    components: {
      FooterView,
      BackHead,
      Swipe,
      SwipeItem,
      // marquee,
      // marqueeItem,
      SearchBar,
      LoadMore,
      Popup
    },
    computed: {
      ...mapGetters([
        'indexCmsData'
      ]),
      cmsDataTypeones: function () {
      return this.cmsData.filter(function (item) {
        return item.type==1
      })
      },
      cmsDataTypeads: function () {
      return this.cmsData.filter(function (item) {
        return item.type==2&&item.postion==1;
      })
      },
      cmsDataTypeconfigsone: function () {
      return this.cmsData.filter(function (item) {
        return item.type==2&&item.postion==2;
      })
      },
      cmsDataTypeconfigstwo: function () {
      return this.cmsData.filter(function (item) {
        return item.type==2&&(item.postion==3||item.postion==4);
      })
      },
      cmsDataTyperecommends: function () {
      return this.cmsData.filter(function (item) {
        return item.type==2&&(item.postion==5||item.postion==6||item.postion==7||item.postion==8);
      })
      }

      
      
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
        this.recommendParam.page_size = 10;
        this.recommendParam.current_page = 1;
        this.updatedData();
        setTimeout(() => {
          this.$refs.recommendLoadmore.onTopLoaded(this.$refs.recommendLoadmore.uuid);
        }, 1000); 
      },
      async getGoodsdata(advertising_id,index) {
        this.active = index;
        this.indexParams.page_size = 10;
        this.indexParams.current_page = 1;
        this.indexParams.advertising_id = advertising_id;
        this.indexRusultData=[];
        this.indexParams = JSON.parse(JSON.stringify(Object.assign(this.indexParams,this.$route.query)))
        this.$refs.indexRusultloadMore.onTopLoaded(this.$refs.indexRusultloadMore.uuid);
      },
      async infiniteCallback(response) { //下拉加载
        // if(this.$route.path=='/index'){
          if(response.data.items!=undefined&&response.data.items!=null){
          if (response.data.items.length > 0) {
            response.data.items.map(i => {
              this.indexRusultData.push(i)
            })
          }
          }else{
            this.indexRusultData=[];
          }
      },
      async updatedData() { //更新数据
        let Data = await this.$store.dispatch('GetIndexCmsData', {
        });
        this.cmsData = Data.data;
      },
      async initData() { //初始化数据

        this.guideindex=getLocalStorage('guideindex');
        if(this.isWeiXin()){
        if(!this.guideindex){
          this.popupVisible=true;
        }
        if (!this.indexCmsData) {
          this.updatedData();
        } else {
          this.cmsData = this.indexCmsData.data;
        }
        }
      },
       async loginData() { //更新数据
          // setLocalStorage('session_token','797794855ec9448bf36e3b7ad1a2e659');
          // setLocalStorage('access_token','1c1a99e5a52e557236f0efedd17652df');
          let that=this;
       if(this.isWeiXin()){
            let Data = await this.$store.dispatch('Login', {
                code:utils.getUrlKey('code'),
                app_key:utils.getUrlKey('state').slice(8)
              })
             
              if(Data.code==10000){
                setLocalStorage('session_token',Data.data.session_token);
                setLocalStorage('access_token',Data.data.access_token);
                that.guideindex=getLocalStorage('guideindex');
                if(!that.guideindex){
                   setLocalStorage('guideindex',1);
                }else{
                   setLocalStorage('guideindex',2);
                }  
              }else{
                // Toast({
                //       message: Data.msg,
                //       position: 'bottom'
                //   });
              }
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
    beforeDestroy() {},
    mounted: function () {
     
      this.initData();
      this.indexParams = JSON.parse(JSON.stringify(Object.assign(this.indexParams,this.$route.query)))
      this.$refs.indexRusultloadMore.onloadMoreScroll();
      this.loginData();
      // showBack(status => {
      //   this.Status = status;
      // })
    }
  }

</script>
