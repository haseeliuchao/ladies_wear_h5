<!--index-->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
   /* banner */
  .banner {
    // height: 4.88rem;
    height:175px;
    margin-bottom:10px;
    img {
      min-width: 100%;
      max-width: 100%;
      max-height: 100%;
      height:175px;
    }
  }
  /* 店铺出售中的商品 */
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
            padding: 0px 6px;
            
            @include flexbox(space-between,flex-start,column,wrap);
            .prod-title{
              font-size: 14px;
              color: #333;
              @include textoverflow(2);
              height: 40px;
              line-height: 20px;
              margin-top: 4px;
              text-align: left;
            }
            .prod-price{
              color: $red;
              text-align:left;
              line-height: 30px;
              margin-bottom: 8px;
              span{
                font-size: 16px;
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
</style>
<style lang="scss">
</style>
<template>
  <div id="jd">
        <!-- :topMethod="onRefreshCallback" -->
        <load-more @translate-change="translateChange" style="width:100%;"  :param="recommendParam" 
          :loadMoreIconVisible="false" ref="recommendLoadmore" >
          <!-- <scroller class="cmsScroll" refreshLayerColor="#999" refreshText="下拉刷新..." :snapping="true" :onRefresh="onRefreshCallback" ref="cmsScroll" width="100%" height="100%"> -->
          <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
            slot="refresh-spinner">更新中...</span>
          <!-- banner -->
         
          <!-- <img v-lazy="item.img_url" alt="item.title"> -->
          <div class="banner">
            <img src="~jd/images/storebg.png" alt="店铺图片">
          </div>

          <!-- 店铺出售中的商品 -->
          <div class="content">
            <load-more style="width:100%;" v-if="$route.path=='/indexToC'" @loadMore="infiniteCallback" :commad="commad" :param="indexParams"
                ref="indexRusultloadMore">
              <ul class="product-list" >
                <li class="prod-item" v-for="(item,index) in indexRusultData" :key="index" @click= "()=>$router.push('/product/'+item.item_id)">
                  <img v-lazy="item.index_img_url+'_230x230.jpg'" alt="">
                  <div class="prod-info">
                    <p class="prod-title">{{item.title}}</p>
                    <p class="prod-price">
                      <span style="font-weight:bold;margin-right:1px;font-size:16px;">&yen;</span><span style="font-weight:bold"><em>{{item.sales_consumer_price/100.00|topriceafter}}</em>.{{item.sales_consumer_price/100.00|topricenext}}</span>
                      <span style="margin-left:8px;text-decoration: line-through;color:#999;font-size:14px;"><em style="font-size:14px;">&yen;</em><em style="font-size:14px;">{{item.sales_price/100.00|topriceafter}}</em>.{{item.sales_price/100.00|topricenext}}</span>
                      </p>
                  </div>
                </li>
              </ul>
            </load-more>
            <!-- <div class="noProduct">
              <img src="~jd/images/blank.png">
              <p>暂无商品</p>
            </div> -->
          </div>
        </load-more>
        <FooterViewToC/>
        <BackHead/>
  </div>
</template>
<script>
  import utils from '@/utils/urlfun';
  import FooterViewToC from 'component/footer/footerViewToC';
  import BackHead from 'common/backHead';
  import {
    getLocalStorage,
    setLocalStorage
  } from '@/utils/mixin';
  import {
    // getGoodsCategoryList,
    searchGoods
  } from '@/service/getData';
  import LoadMore from 'common/loadMore';
  import {
    Lazyload
  } from 'mint-ui';
  import {
  Toast
} from 'mint-ui';
  import {
    mapGetters
  } from 'vuex';
  export default {
    data() {
      return {
        recommendParam: {
          page_size: 10,
          current_page: 1
        },
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
    watch:{      
    },
    components: {
      FooterViewToC,
      BackHead,
      LoadMore,
    },
    computed: {
      ...mapGetters([
        'indexCmsData'
      ]),
    },
    methods: {
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
    }
  }

</script>
