<!--index-->
<style lang="scss" scoped>
  /* banner */

  @import '~assets/common/css/mixin.scss';
  .banner {
    height: 4.7rem;
    // height:175px;
    // margin-top:1.56rem;
    img {
      min-width: 100%;
      max-width: 100%;
      max-height: 100%;
    }

  }
  /* banner */
  /* 产品说明 */
  .product-explain{
    // background:#fff;
    padding:10px .3rem 10px;
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
    // background: #fff;
    padding:0 .3rem;
    .activity-list {
      height:82px;
      padding-bottom:10px;
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
    height:5rem;
    // background:#fff;
    padding:0px .3rem;
    >div{
      @include flexbox(space-between,center,column,wrap);
      height:100%;
    }
    img{
      width:100%;
      height:100%;
    }
    .deploy-floor-l{
      width:41%;
      .deploy-item{
        width:4.7rem;
        height:100%;
        border-radius: 5px;
        overflow: hidden;
        border-radius: 5px 0 0 5px;
        border-right: 1px solid #f5f5f5;
      }
    }
    .deploy-floor-r{
      .deploy-item{
        width:4.7rem;
        height:50%;
        overflow: hidden;
        &:last-child{
          border-radius: 0 0 5px 0;
          border-top: 1px solid #f5f5f5;
        }
        &:first-child{
          border-radius: 0 5px 0 0;
          border:none;
        }
      }
     

    }
  }
  /* 配置专题 */

  /* 推荐 */
.content{
      width: 100%;
      .product-list{
        @include flexbox(space-between,center,row,wrap);
        padding: 0 .3rem;
        .prod-item{
          background: #fff;
          width: 4.58rem;
          margin-bottom: 8px;
          border-radius: 6px;
          overflow: hidden;
          text-align: center;
          img{
            height: 4.58rem;
          }
          .prod-info{
            padding: 0px 10px;
            @include flexbox(space-between,flex-start,column,wrap);
            .prod-title{
              font-size: 0.343rem;
              color: #333;
              @include textoverflow(2);
              height: 0.9rem;
              line-height: 0.45rem;
              margin-top: 4px;
              text-align: justify;
            }
            .prod-price{
              color: $red;
              text-align:left;
              line-height: .8rem;
              .prod-nowprice{
               font-weight:bold;
               margin-right:1px;
               font-size:.426667rem
              }
              .prod-oldprice{
               margin-left:.213333rem;
               text-decoration: line-through;
               color:#999;
               font-size:.373333rem;
              }
            }
            .prod-pro{
              padding: 5px 0;
              text-align: left;
              color: $gray;
              font-size: $subtitle;
            }
          }
          .add-store{
            @include flexbox(flex-end,center,row,wrap);
             padding: 0 10px;
             margin-bottom: 10px;
             span{
               font-size: .293333rem;
               color: $red;
               padding: 0 4px;
               border: 1px solid $red;
               border-radius: 3px;
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
          color:$red;
          border-bottom:2px solid $red;
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
          color: $red;
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
        bottom: 0;
        .mint-swipe-indicator {
          width: 7px;
          height:7px;
          background: #ddd;
          opacity:1;
          &.is-active {
            width: 15px;
            height:6px;
            background:#fff ;
            border-radius:4px;
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
          <div class="jump-btn" @click= "()=>{$router.push('/searchImg');popupVisible=false}"></div>
        </div>
      </mt-popup> -->
        <!-- 搜索栏 -->
        <search-bar :Status="Status"  v-if="searchBarVisilbe" />
        <!-- 搜索栏 -->
        <!-- :topMethod="onRefreshCallback" -->
        <load-more @translate-change="translateChange" style="width:100%;"  :param="recommendParam" 
          :loadMoreIconVisible="false" ref="recommendLoadmore" >
          <!-- <scroller class="cmsScroll" refreshLayerColor="#999" refreshText="下拉刷新..." :snapping="true" :onRefresh="onRefreshCallback" ref="cmsScroll" width="100%" height="100%"> -->
          <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
            slot="refresh-spinner">更新中...</span>
          <!-- banner -->
          <mt-swipe :stopPropagation="true" :prevent="false" :auto="5000" class="banner">
            <mt-swipe-item v-for="(item,index) in cmsDataTypeones" 
             :key="index"  >
              <img v-lazy="item.img_url"  @click="golink(item.http_url)">
            </mt-swipe-item>
          </mt-swipe>
          <!-- banner -->
          <!-- 产品说明 -->
          <div class="product-explain">
            <ul>
              <li @click= "()=>$router.push({path: '/withdrawalSuccess'})"><img src="~jd/images/zhengpinicon.png">正品保障</li>
              <li @click= "()=>$router.push({path: '/withdrawalInfo'})"><img src="~jd/images/tuihuanicon.png">五星售后</li>
              <li @click= "()=>$router.push({path: '/withdrawalAccount'})"><img src="~jd/images/shipaiicon.png">商品实拍</li>
              <li @click= "()=>$router.push({path: '/withdrawalEdit'})"><img src="~jd/images/kefuicon1.png">专属客服</li>
              <!-- <li><a href="tel:13622178579">13622178579</a></li> -->
            </ul>
          </div>
          <!-- 活动广告位 -->
          <div class="activity-manage">
            <div class="activity-list" v-for="(item,index) in cmsDataTypeads" :key="index">
              <!-- <a :href="item.http_url"> -->
                <img v-lazy="item.img_url"  @click= "()=>$router.push({path: '/searchRusult',query: {advertising_id:item.ad_advertising_id,img_url:item.img_url1}})">
              <!-- </a> -->
            </div>
          </div>
          <!-- 配置专题 -->
          <div class="deploy-floor">
            <div class="deploy-floor-l" >
              <div class="deploy-item"  v-for="(item,index) in cmsDataTypeconfigsone" :key="index">
                <!-- <img  :src="item.img_url" @click= "()=>$router.push({path: '/searchRusult',query: {advertising_id:item.ad_advertising_id,img_url:item.img_url}})"> -->
                <!-- <a :href="item.http_url"> -->
                  <img v-lazy="item.img_url"  @click= "()=>$router.push({path: '/searchRusult',query: {advertising_id:item.ad_advertising_id,img_url:item.img_url1}})">
                <!-- </a> -->
              </div>
            </div>
            <!-- cmsData -->
            <div class="deploy-floor-r">
             <div class="deploy-item"  v-for="(item,index) in cmsDataTypeconfigstwo" :key="index">
                <img  v-lazy="item.img_url"  @click= "()=>$router.push({path: '/searchRusult',query: {advertising_id:item.ad_advertising_id,img_url:item.img_url1}})">
              </div>
            </div>
          </div>

          
         
          <!--配置专题 -->
            
          <!-- 为您推荐 -->
          <div class="floor recommend" style="top:0rem;">
            <div class="recommend-title">


              <ul>
                <li @click= "getGoodsdata('',0)" :class="{'active':active===0}">精选</li>
                <li  v-for="(item,index) in cmsDataTyperecommends" :key="index" :class="{'active':active===index+1}" @click= "getGoodsdata(item.ad_advertising_id,index+1)">{{item.title}}</li>
              </ul>
            </div>
          </div>

          <div class="content">
            <load-more style="width:100%;" v-if="$route.path=='/index'" @loadMore="infiniteCallback" :commad="commad" :param="indexParams"
                ref="indexRusultloadMore">
              <ul class="product-list" >
                <li class="prod-item" v-for="(item,index) in indexRusultData" :key="index" >
                  <img @click= "()=>$router.push('/product/'+item.item_id)" v-lazy="item.index_img_url+'_230x230.jpg'" alt="">
                  <div class="prod-info" @click= "()=>$router.push('/product/'+item.item_id)">
                    <p class="prod-title">{{item.title}}</p>
                    <p class="prod-price">
                      <span class="prod-nowprice">￥{{item.sales_consumer_price/100|TwoNum}}</span>
                      <span class="prod-oldprice">￥{{item.sales_price/100|TwoNum}}</span>
                    </p>
                  </div>
                  <p class="add-store"><span @click="addGood(item.item_id)">铺店</span></p>
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
    showsearchBar
  } from '@/utils/mixin';
  import {
    getLocalStorage,
    setLocalStorage
  } from '@/utils/mixin';
  import {
    addProduct,
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
          advertising_id:'',
          img_url:'',
          page_size: 10,
          current_page: 1,
          sort_type:1
        },
        active:0,
        guideindex:null
      };
    },
    watch:{
         
        
    },
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
        if(this.cmsData.length>0){
            return this.cmsData.filter(function (item) {
              return item.type==1
            })
        }
     
      },
      cmsDataTypeads: function () {
        if(this.cmsData.length>0){
      return this.cmsData.filter(function (item) {
        return item.type==2&&item.position==1;
      })
      }
      },
      
      
      cmsDataTypeconfigsone: function () {
        if(this.cmsData.length>0){
      return this.cmsData.filter(function (item) {
        return item.type==2&&item.position==2;
      })
      }
      },
      cmsDataTypeconfigstwo: function () {
        if(this.cmsData.length>0){
      return this.cmsData.filter(function (item) {
        return item.type==2&&(item.position==3||item.position==4);
      })
        }
      },
      cmsDataTyperecommends: function () {
        if(this.cmsData.length>0){
      return this.cmsData.filter(function (item) {
        return item.type==2&&(item.position==5||item.position==6||item.position==7||item.position==8);
      })
        }
      }

      
      
    },
    methods: {
      async addGood(itemId){
         let Data = await addProduct({
         item_id: itemId
        });
        if(Data.code!=10000){
          if(Data.code==20025){
            return
          }else if(Data.code==40003){
             this.$router.push({path: '/shopApplicate'});
          }else{
             Toast({duration: 1000,
             message: Data.msg
             })
             return
          }
        }else{
          Toast({duration: 1000,
             message: '铺店成功'
             })
        }
       },


      async golink(link){
        window.location.href = link
      },
      isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
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
        // if(index!=0){
        //   this.indexParams.sort_type=1;
        // }
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
      // var unicode=BASE64.decoder('YXBwX2tleSUzRDY4QTZGNDVDRDdBQUZDMDI4N0Y0QUY4RkY0RjM5OTFDQGxpbms9L3Byb2R1Y3QvMTE2')

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
      
    },
    filters:{
        topriceafter(value){
            return value.toFixed(2).substring(0, value.toFixed(2).indexOf('.'));
        },
        topricenext(value){
            return value.toFixed(2).substring(value.toFixed(2).indexOf('.')+1);
        }
    },
    beforeDestroy() {
    },
    mounted: function () {
     
      this.initData();
      this.indexParams = JSON.parse(JSON.stringify(Object.assign(this.indexParams,this.$route.query)))
      this.$refs.indexRusultloadMore.onloadMoreScroll();
      this.updatedData();
      // this.loginData();
      showsearchBar(status => {
        this.Status = status;
      })
    }
  }

</script>
