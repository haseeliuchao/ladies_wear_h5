<!-- searchImg -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  // .scrollbtm {
  //   background: #ffffff !important;
  //   .scanCode {
  //     .searchQrcodeIcon {
  //       background-position: -1.933rem 0 !important;
  //     }
  //     color: #333 !important;
  //   }
  //   .searchInput {
  //     .search-box {
  //       background: #e2e2e2 !important;
  //       span {
  //         color: #ffffff !important;
  //       }
  //     }
  //     .searchContentIcon {
  //       background-position: -2.24rem 0 !important;
  //     }
  //   }
  //   .searchMsg {
  //     .searchMsgIcon {
  //       background-position: -2.6rem 0 !important;
  //     }
  //     color: #333 !important;
  //   }
  // }
  
  /* 图搜 */
  .searchContainer {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    background: #f8f8f8;
    /* 搜索图片 */
    .search-top {
      @include flexbox(center,
      center,
      column,
      wrap);
      padding: 0 .3rem;
      margin-bottom:8px;
      background: #fff;
      .searchImgInput {
        @include flexbox(center,center,column,wrap);
        position:relative;
        .img-container{
          width:3rem;
          height:3rem;
          margin:30px 0 20px;
          img{
            width:100%;
            height:100%;
            border-radius:50%;
          }
        }
        input{
          position:absolute;
          top:30px;
          width:3rem;
          height:3rem;
          border-radius:1.5rem;
          opacity: 0;
        }
      }
      >p{
        color:#333;
        font-size:15px;
      }
      p.expire-time{
        margin-top:10px;
      }
      p.renew-btn{
        margin:20px 0;
        padding:6px .9rem;
        color:$red;
        border:1px solid $red;
        border-radius:16px;
      }
      >span {
        text-align: center;
        font-size: 15px;
        min-width: 1.5rem;
        color: $gray;
      }
    }
    /* 搜索历史 */
    .search-history {
      background: #fff;
      padding: 0 .3rem;
      .search-history-title{
        padding:10px 0;
        font-size:15px;
        color:#333;
      }
      .search-history-list {
        @include flexbox(flex-start,
        center,
        row,
        wrap);
        width:100%;
        .search-history-item {
          width: 2.15rem;
          border-radius: 5px;
          margin: .1rem;
          img{
            width:100%;
          }
        }
      }
    }
    /* 精品推荐 */
    .recommend-content{
      padding:0 .3rem;
      .product-list-top{
        padding: 15px 12px; 
        @include flexbox(space-between,center,row,nowrap);
        font-size: 15px;
        .product-list-topl{
          color: #333;
          border-left: 4px solid $red;
          padding-left: 6px
        }
        .product-list-topr{
          color: #666;
          em{
            color: $red
          }
        }
      }
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
  }

</style>
<template>
  <div style="position:relative;">
    <!-- 图片上传搜索 -->
    <mt-popup  :closeOnClickModal="true" :modal="false" position="right" class="modal-popup">
      <div class="overlayer">
        <img src="~jd/images/popup-con.png">
        <div class="jump-btn"></div>
      </div>
    </mt-popup>
    <div class="searchContainer">
      <!-- v-if="searchImgVisible" -->
      <div class="search-top">
        <div class="searchImgInput">
          <div class="upload">
            <div class="img-container">
              <!-- 接受预览的img container -->
              <img src='~jd/images/photo.png' alt="">
            </div>
            <!-- 文件上传的input -->
            <input type="file" @change="getFile" ref="file" id="file"> 
            <!-- <label for="file">图像上传</label> -->
          </div>
        </div>
        <p class="search-tip">同款商品更低价，不花冤枉钱!</p>
        <p class="expire-time">
          图搜有效期：<span>2012/01/29</span>到期
        </p>
        <p class="renew-btn">续费 > </p>
      </div>

      <!-- 精品推荐 -->
      <div class="recommend-content" style="display:none;">
        <p class="product-list-top">
          <span class="product-list-topl">精选推荐</span>
          <span class="product-list-topr">去<em @click="$router.push('/index')">商城首页</em>逛逛</span>
        </p>
        <load-more style="width:100%;" @loadMore="infiniteCallback" :commad="commad" :param="indexParams"
              ref="indexRusultloadMore">
            <ul class="product-list" >
              <li class="prod-item" v-for="(item,index) in indexRusultData" :key="index" @click="()=>$router.push('/product/'+item.item_id)">
                <img :src="item.item_index_img_url" alt="">
                <div class="prod-info">
                  <p class="prod-title">{{item.item_title}}</p>
                  <p class="prod-price">
                    <span style="font-weight:bold;margin-right:1px;">&yen;</span><span style="font-weight:bold"><em style="font-size:15px;">{{item.sales_consumer_price/100.00|topriceafter}}</em>.{{item.sales_consumer_price/100.00|topricenext}}</span>
                    <span style="margin-left:12px;text-decoration: line-through;color:#999"><em>&yen;</em><em style="font-size:15px;">{{item.cost_price/100.00|topriceafter}}</em>.{{item.cost_price/100.00|topricenext}}</span>
                    </p>
                </div>
              </li>
            </ul>
        </load-more>
      </div>
      <!-- 搜索历史记录 -->
      <load-more v-show="Keyword.length<=0" style="width:100%;height:100%;background:#fff;" >
        <div class="search-history">
          <p class="search-history-title">搜索记录</p>
          <ul class="search-history-list">
            <!-- <li class="search-history-item" @click="()=>Keyword = item.keywords" v-for="(item,index) in searchHistoryData" :key="index">{{item.keywords}}</li> -->

            <li class="search-history-item"><img src="~jd/images/product.png"></li>
            <li class="search-history-item"><img src="~jd/images/product.png"></li>
            <li class="search-history-item"><img src="~jd/images/product.png"></li>
            <li class="search-history-item"><img src="~jd/images/product.png"></li>
            <li class="search-history-item"><img src="~jd/images/product.png"></li>
            <li class="search-history-item"><img src="~jd/images/product.png"></li>
            <li class="search-history-item"><img src="~jd/images/product.png"></li>
          </ul>
        </div>
      </load-more>
  
    </div>

  </div>
</template>
<script>
  import {
    searchGoods
  } from '@/service/getData'
  import {
    getLocalStorage,
    setLocalStorage
  } from '@/utils/mixin'
  import LoadMore from 'common/loadMore';
  import SearchBar from 'page/shop/searchBar';
  import {searchtwoGoods} from '@/service/getData';
  import {
    
    Toast
  } from 'mint-ui'
  export default {
    name: 'upload',
    data() {
      return {
        searchVisiblie: false,
        Keyword: '',
        searchHistoryData: [],
        searchRusultData: [],
        searchImgVisible: false ,
        // src: '/static/image/avatar.png' //先设置一个默认图片
        indexRusultData:[],
        indexParams: {
          title: '',
          category_id:'',
          page_size: 10,
          current_page: 1
        },   
      }
    },
    // props: {
    //   Status: {
    //     type: Boolean,
    //     required: true
    //   }
    // },
    watch: {
      Keyword(val) {
        this.searchRusult(val)
      }
    },
    directives: {
      searchFocus: {
        // inserted: function (el) {
        //   // 聚焦元素
        //   el.focus();
        // },
        // update: function (el) {
        //   // 聚焦元素
        //   el.focus();
        // }
      }
    },
    components: {
      LoadMore,
    },

    computed: {},

    methods: {
      async searchRusult(keyWords) {
        this.searchRusultData = [];
        let {
          Data
        } = await searchGoods({
          Keyword: keyWords,
          pageSize: 100,
          pageIndex: 1
        });
        this.searchRusultData = Data;
      },
      async selectedProd(prod) {
        this.$router.push({path: '/searchRusult',query: {Keyword:this.Keyword}})
        let HistoryData = getLocalStorage('searchHistoryData');
        if(!HistoryData)return setLocalStorage('searchHistoryData',[{keywords:this.Keyword,Date:new Date()}]);
        try{
          let Data = JSON.parse(HistoryData);
          Data.push({keywords:this.Keyword,Date:new Date()});
          setLocalStorage('searchHistoryData',Data);
        }catch(err){}
      },

      truesearchGoods(event) { 
        if (event.keyCode == 13) { //如果按的是enter键 13是enter 
            event.preventDefault(); //禁止默认事件（默认是换行） 
            console.log(event.target.value)
            Toast("点击了确认") 
        } 
      },

      async getFile(e){
        let _this = this;
        var files = e.target.files[0];
        if(!e || !windows.FileReader) return //是否支持FileReader
        let reader = new FileReader();
        reader.readAsDataURL(files);//转换
        reader.onloadend = function(){
          _this.src = this.result;
        }
      },

       async initData() {
        let Data = await this.$store.dispatch('GetSelectedProductList');
        this.cartList = Data.data.data || null;
        this.cartlength=this.cartList?this.cartList.length:0
      },
      async onRefreshCallback() {
        this.$store.dispatch('GetSelectedProductList').then(response => {
          setTimeout(() => {
            this.cartList = response.data.data || null;
            this.cartlength=this.cartList?this.cartList.length:0;
            // this.getGoodsdata()
            this.computedTotalFee();
            this.selectedAll = false;
            this.$refs.cartLoadmore.onTopLoaded(this.$refs.cartLoadmore.uuid);
          }, 500);
        }, error => {
          this.$refs.cartLoadmore.translate = 0;
          this.$refs.cartLoadmore.topStatus = 'pull';
          this.$refs.cartLoadmore.AllLoaded = false;
          return this.$refs.cartLoadmore.LoadMoreLoading = false;
        });
      },
      async getGoodsdata() {
        this.indexParams.page_size = 10;
        this.indexParams.current_page = 1;
        this.indexRusultData=[];
        this.indexParams = JSON.parse(JSON.stringify(Object.assign(this.indexParams,this.$route.query)))
        this.$refs.indexRusultloadMore.onTopLoaded(this.$refs.indexRusultloadMore.uuid);
      },
      async infiniteCallback(response) { //下拉加载
        if(response.data.data!=undefined&&response.data.data!=null){
         if (response.data.data.length > 0) {
          response.data.data.map(i => {
            this.indexRusultData.push(i)
          })
        }
        }else{
          this.indexRusultData=[];
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
    mounted: function () {
      try{
        this.searchHistoryData = JSON.parse(getLocalStorage('searchHistoryData'));
      }catch(err){};

      this.initData();
      this.indexParams = JSON.parse(JSON.stringify(Object.assign(this.indexParams,this.$route.query)))
      this.$refs.indexRusultloadMore.onloadMoreScroll();


    }
  }

</script>