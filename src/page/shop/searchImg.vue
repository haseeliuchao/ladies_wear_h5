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
          .file-uploads{
               height: 3rem;
               width: 3rem;
               position: absolute;
               top: 30px;
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
          height: 2.15rem;
          margin: .1rem;
          img{
            width:100%;
            height: 100%;
            border-radius: 6px;
          }
        }
      }
    }
    /* 精品推荐 */
    .recommend-content{
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
  /* 遮罩层 */
  .model-popup{
    top:3.6rem;
    right:3.25rem;
    @media all and(max-width:374px){
      top:3.7rem;
    }
    @media all and(min-width:376px){
      top:3.5rem;
    }
  img{
      position:relative;
      width:3.9rem;
  }
  div.jump-btn{
    position:absolute;
    top:0;
    right:0;
    width:3.4rem;
    height:3.4rem;
  }
}
</style>
<template>
  <div style="position:relative;">
    <!-- 图片上传搜索 -->
    <mt-popup  class="model-popup" v-model="popupVisible" :closeOnClickModal="true" model="true" position="right" style="background:rgba(0,0,0,0)">
        <div class="overlayer">
          <img src="~jd/images/popup-con2.png">
          <div class="jump-btn" @click="()=>{popupVisible=false}"></div>
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
              <file-upload ref="upload" v-model="item.uploadFiles" :multiple="true" accept="image/*" 
              :maximum="1" @input-file="inputFile" @input-filter="inputFilter">
              </file-upload>
            </div>
            <!-- 文件上传的input -->
            <!-- <input type="file" @change="getFile" ref="file" id="file">  -->
            
            <!-- <label for="file">图像上传</label> -->
          </div>
        </div>
        <p class="search-tip">同款商品更低价，不花冤枉钱!</p>
        <p class="expire-time">
          图搜有效期：<span>2012/01/29</span>到期
        </p>
        <p class="renew-btn" @click="()=>$router.push('/searchRenew')">续费 > </p>
        <!-- <p class="renew-btn" v-if="" @click="showToast">续费 > </p> -->
      </div>

      <!-- 精品推荐 -->
      <div class="recommend-content" v-if="HistoryImgData.length==0">
        <p class="product-list-top">
          <span class="product-list-topl">精选推荐</span>
          <span class="product-list-topr">去<em @click="$router.push('/index')">商城首页</em>逛逛</span>
        </p>
        <load-more style="width:100%;"  @loadMore="infiniteCallback" :commad="commad" :param="indexParams"
              ref="indexRusultloadMore">
            <ul class="product-list" >
              <li class="prod-item" v-for="(item,index) in indexRusultData" :key="index" @click="()=>$router.push('/product/'+item.item_id)">
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
      <!-- 搜索历史记录 -->
     
        <div class="search-history" v-if="HistoryImgData.length>0">
          <p class="search-history-title">搜索记录</p>
          <ul class="search-history-list">
            <li class="search-history-item" @click="$router.push({path: '/searchRusult',query: {item_url:item.item_url}})" v-for="(item,index) in HistoryImgData" :key="index"><img :src="item.item_url"></li>
          </ul>
        </div>
  
    </div>

  </div>
</template>
<script src="@/utils/hash.js" ></script>
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
  import axios from 'axios';
  import VueUploadComponent from 'vue-upload-component';


  import {
    
    Toast
  } from 'mint-ui'
  export default {
    name: 'upload',
    data() {
      return {
        searchVisiblie: false,
        popupVisible:true,
        Keyword: '',
        HistoryImgData: [],
        popupVisible: true ,
        commad: searchGoods,
        indexRusultData:[],
        indexParams: {
          title: '',
          category_id:'',
          page_size: 10,
          current_page: 1
        },   
         item:{
          uploadFiles :[]
        },
        postSalesImg:null
      }
    },
    // props: {
    //   Status: {
    //     type: Boolean,
    //     required: true
    //   }
    // },
    watch: {
    },
    components: {
      LoadMore,
      FileUpload: VueUploadComponent
    },

    computed: {},

    methods: {

       async initData() {

      },
      async infiniteCallback(response) { //下拉加载
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
      inputFile: function (newFile, oldFile) {
        // if (newFile && oldFile && !newFile.active && oldFile.active) {
        //   // 获得相应数据
        //   console.log('response', newFile.response)
        //   if (newFile.xhr) {
        //     //  获得响应状态码
        //     console.log('status', newFile.xhr.status)
        //   }
        // }
        // 自动上传
        if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
                    if (!this.$refs.upload.active) {
                            var bucketname="laquimage";
                            var username="laquimage";
                            var password="laqu@2016";
                            var ontime=new Date();
                            var datename=ontime.getFullYear()+"/"+ontime.getMonth()+"/"+ontime.getDay();
                            var save_key="/ICON/"+datename+"/{filename}"+new Date().getTime()+"{.suffix}";
                            var url="http://v0.api.upyun.com/"+bucketname;
                            var policy=btoa(JSON.stringify({"bucket": bucketname, "save-key": save_key, "expiration": parseInt(Date.parse(new Date())+3600),}));
                            var signature="UPYUN "+username+":"+b64hamcsha1(HexMD5.MD5(password).toString(HexMD5.enc.Hex), "POST&/"+bucketname+"&"+policy);
                            var index1 = newFile.file.name.lastIndexOf(".");
                            var index2 = newFile.file.name.length;
                            var suffix = newFile.file.name.substring(index1 + 1, index2);
                            let that=this;
                            let formData = new FormData();
                            formData.append("file",newFile.file);
                            formData.append("policy",policy);
                            formData.append("authorization",signature);
                            axios.post(url, formData).then(function (response) {
                            that.postSalesImg="https://laquimage.b0.upaiyun.com"+response.data.url;
                            that.$router.push({path: '/searchRusult',query: {item_url:that.postSalesImg}})
                            that.HistoryImgData = getLocalStorage('searchHistoryImgData')?getLocalStorage('searchHistoryImgData'):[];
                            if(that.HistoryImgData.length==0)return setLocalStorage('searchHistoryImgData',[{item_url:that.postSalesImg,Date:new Date()}]);
                            try{
                              let Data = JSON.parse(that.HistoryImgData);
                              if(Data.length>=8){
                               Data=Data.splice(0,Data.length-1);
                              }
                              Data.unshift({item_url:that.postSalesImg,Date:new Date()});
                              setLocalStorage('searchHistoryImgData',Data);
                            }catch(err){}

                            }).catch(function (error) {
                        　　alert(error);
                            })
            }
        }

      },
      inputFilter: function (newFile, oldFile, prevent) {
        if (newFile && !oldFile) {
          // 过滤不是图片后缀的文件
          if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
            return prevent()
          }
        }
        // 创建 blob 字段 用于图片预览
        if (!newFile && oldFile) {
            // console.log('0')
        }else{
        newFile.blob = ''
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file)
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
    mounted: function () {
      this.HistoryImgData =  JSON.parse(getLocalStorage('searchHistoryImgData'))?JSON.parse(getLocalStorage('searchHistoryImgData')):[];
      this.indexParams = JSON.parse(JSON.stringify(Object.assign(this.indexParams,this.$route.query)))
      
      this.$refs.indexRusultloadMore.onloadMoreScroll();


    }
  }

</script>