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
            <load-more style="width:100%;" v-if="$route.name=='indexToC'" @loadMore="infiniteCallback" :commad="commad" :param="indexParams"
                ref="indexRusultloadMore">
              <ul class="product-list" >
                <li class="prod-item" v-for="(item,index) in indexRusultData" :key="index" @click= "()=>$router.push({path: '/productToC/'+item.item_id,query: {distributor_id:$route.params.distributor_id}})">
                  <img v-lazy="item.item_index_img_url+'_230x230.jpg'" alt="">
                  <div class="prod-info">
                    <p class="prod-title">{{item.item_title}}</p>
                    <p class="prod-price">
                      <span style="font-weight:bold;margin-right:1px;font-size:16px;">&yen;</span><span style="font-weight:bold"><em>{{item.sales_price/100.00|TwoNum}}</em></span>
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
        <FooterViewToC :distributorId='$route.params.distributor_id'/>
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
    searchshopGoods
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
        commad: searchshopGoods,
        indexParams: {
          distributor_id:this.$route.params.distributor_id,
          status:1,
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
      async infiniteCallback(response) { //下拉加载
          if(response.data.distributor_item){
          if (response.data.distributor_item.length > 0) {
            response.data.distributor_item.map(i => {
              this.indexRusultData.push(i)
            })
          }
          }else{
            this.indexRusultData=[];
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
    beforeDestroy() {
    },
    mounted: function () {
      this.$wxShare({title: '快来看看我店里的好东西，总有一款打动你哦',desc: '精选好物等你来选',link:''+process.env.API_ROOT+'/api/redirect?path='+BASE64.encoder('/indexToC/'+this.$route.params.distributor_id)+'',imgUrl: "http://img.chaochujue.cn/ICON/2019/5/1/201906241553261561362823561.png"})
      this.$refs.indexRusultloadMore.onloadMoreScroll();
    },
    beforeRouteLeave(to, from, next){
      if(to.name ==='loginBlank' ){
        next({path: '/indexToC/'+this.$route.params.distributor_id+''});
      }else {
        next();
      }
    }
  }

</script>
