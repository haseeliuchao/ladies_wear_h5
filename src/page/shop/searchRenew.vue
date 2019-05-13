<!-- searchImg -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  /* 图搜续费 */
  .renewContainer {
    /* 续费套餐 */
    .renew-top{
      padding:0 .3rem;
      .renew-userInfo{
        @include flexbox(flex-start,center,row,nowrap);
        padding-top:16px;
        img{
          width:1.5rem;
          height:1.5rem;
          border-radius:.75rem;
        }
        p{
          @include flexbox(flex-start,center,column,wrap);
          margin-left:.2rem;
          color:#333;
          font-size:14px;
        }
      }
      .renew-type{
        padding:24px 0;
        .renew-type-list{
          overflow:auto;
          .renew-type-item{
            border:1px solid #d3d3d3;
            border-radius:4px;
            &.active{
              background-color:rgba(255,179,158,.23)
            }
          }
        }
      }
    }
    /* 历史订单 */
    .renew-history {
      .search-history-title{
        padding:15px .3rem;
        font-size:16px;
        color:#333;
        background-color:$bg;
        h2{
          padding:2px 0 2px .2rem;;
          border-left:4px solid $red;
        }
      }
      .search-history-list{
        @include flexbox(center,center,column,wrap);
        .search-history-item{
          @include flexbox(center,center,row,nowrap);
          border-bottom:1px solid #e4e4e4;
          &:last-child{
            border:none;
          }
          p{
            @include flexbox(center,center,column,wrap);
            span{
              font-size:14px;
              &:first-child{
                color:#999;
              }
              &:last-child{
                color:#333;
              }
            }
          }
        }
      }
    }
  }
</style>
<template>
  <!-- 图搜续费 -->
  <div class="renewContainer">
    <div class="renew-top">
      <div class="renew-userInfo">
        <img src="~jd/images/product.png">
        <p>
          <span>13298573456</span>
          <span>您的图搜使用权已过期</span>
        </p>
      </div>
      <div class="renew-type">
        <ul class="renew-type-list">
          <li class="renew-type-item active">
            <p>首月</p>
            <p>￥9.9</p>
            <span>支付</span>
            <span class="new">新用户专享</span>
          </li>
          <li class="renew-type-item">
            <p>3个月</p>
            <p>￥59.9<span>折合￥19.9/月</span></p>
            <span>支付</span>
            <span class="recommend">推荐</span>
          </li>
          <li class="renew-type-item">
            <p>1天</p>
            <p>￥0.9</p>
            <span>支付</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 历史订单 -->
    <div class="renew-history">
      <p class="search-history-title"><h2>历史订单</h2></p>
      <ul class="search-history-list">
        <!-- <li class="search-history-item" @click="()=>Keyword = item.keywords" v-for="(item,index) in searchHistoryData" :key="index">{{item.keywords}}</li> -->

        <li class="search-history-item">
          <p>
            <span>续费时间</span>
            <span>2018-11-12</span>
          </p>
          <p>
            <span>类型</span>
            <span>2018-11-12</span>
          </p>
          <p>
            <span>有效期</span>
            <span>2018-11-12</span>
          </p>
        </li>
        <li class="search-history-item">
          <p>
            <span>续费时间</span>
            <span>2018-11-12</span>
          </p>
          <p>
            <span>类型</span>
            <span>2018-11-12</span>
          </p>
          <p>
            <span>有效期</span>
            <span>2018-11-12</span>
          </p>
        </li>
      </ul>
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
        searchHistoryData: [],
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
      try{
        this.searchHistoryData = JSON.parse(getLocalStorage('searchHistoryData'));
      }catch(err){};


      this.indexParams = JSON.parse(JSON.stringify(Object.assign(this.indexParams,this.$route.query)))
      this.$refs.indexRusultloadMore.onloadMoreScroll();


    }
  }

</script>