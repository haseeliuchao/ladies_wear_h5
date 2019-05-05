<!-- searchRusult -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .scrollbtm {
    background: #ffffff !important;
    .scanCode {
      .searchQrcodeIcon {
        background-position: -1.933rem 0 !important;
      }
      color: #333 !important;
    }
    .searchInput {
      .search-box {
        background: #e2e2e2 !important;
        span {
          color: #ffffff !important;
        }
      }
      .searchContentIcon {
        background-position: -2.24rem 0 !important;
      }
    }
    .searchMsg {
      .searchMsgIcon {
        background-position: -2.6rem 0 !important;
      }
      color: #333 !important;
    }
  }
  .searchRusultall{
   position: fixed;
   top: 0;
   transition: .6s;
   background: #fff;
   width: 10rem;
   
    max-width: 10rem;
    min-height:1.2rem;
    margin: 0 auto;
    z-index: 2000;
    .homesearch-hot{
      height: 1rem;
      padding-bottom: 10px;
      @include flexbox(space-between, center, row, nowrap);
      p{
        padding-left: .4rem;
        color: #666;
       @include flexbox(space-between, center, row, nowrap);
      }
      ul{
        @include flexbox(start, center, row, nowrap);
        flex: 7;
        li{padding: 5px 10px;
    background: #f2f2f2;
    border-radius: 10rem;
    margin-right: 10px;
    color: #666
    }
      }
    }
  }
  .searchRusult {
    
   
    
   
    
    @include flexbox(space-between, center, row, nowrap);
    // min-height: 40px;
    padding: .33rem;
    .logoIcon{
      width:1.3rem;
      height:.9rem;
      margin-right:.24rem;
      background:url('~jd/images/logoicon.png') no-repeat;
      background-size:100% 100%;
    }
    .searchIcon {
      display: block;
      background: url('~jd/images/camera_sach.png') no-repeat;
      background-size: 100% 100%;
    }
    .searchInput {
      width: 100%;
      .search-box {
        background: #fff;
        height: .86rem;
        border-radius: .86rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        -webkit-box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        @include flexbox(flex-start,
        center,
        row,
        nowrap);
        padding: 0 .3rem;
        .searchContentIcon {
          height: .45rem;
          width: .45rem;
          margin-right: .3rem;
          background: url('~jd/images/sarchicon.png') no-repeat;
          // background-position: -0.46rem 0;
          background-size: 100% 100%;
        }
        span {
          color: #999;
          font-size: 14px;
        }
      }
    }
    .scanCode {
      min-width: 1.2rem;
      @include flexbox(center,
      center,
      column,
      wrap);
      color: #fff;
      font-size: 10px;
      margin-left:.2rem;
      span {
        padding-top: 2px;
        color: #333
      }
      .searchQrcodeIcon {
        width: .46rem;
        height: .44rem;
        background-position: 0 0;
      }
      
    }
    .searchMsg {
      min-width: 1rem;
      @include flexbox(center,
      center,
      column,
      wrap);
      color: #fff;
      font-size: 12px;
      visibility: hidden;
      span {
        padding-top: 2px;
      }
      .searchMsgIcon {
        height: .65rem;
        min-width: .65rem;
        background-position: -1.3rem 0;
      }
    }
  }

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
    .search-top {
      @include flexbox(space-between,
      center,
      row,
      nowrap);
      padding: 10px 0 10px 20px;
      background: #fff;
      border-bottom: 1px solid $border;
      .searchInput {
        width: 90%;
        .search-box {
          width: 100%;
          position: relative;
          background: #f4f4f4;
          padding: 5px 10px;
          border-radius: 10px;
          @include flexbox(space-between,
          center,
          row,
          nowrap);
          input {
            width: 100%;
            color: #333;
            font-size: $subtitle;
            outline: none;
            border: none;
            box-shadow: none;
            text-shadow: none;
            font-weight: normal;
            background: transparent;
          }
          .clear {
            width: .42rem;
            height: .42rem;
            margin: 0;
            position: absolute;
            right: 10px;
            padding: 5px;
            @include flexbox(center,
            center,
            row,
            nowrap);
            color: #fff;
            font-size: 15px;
            border-radius: 50%;
            background: rgba(0, 0, 0, .15);
          }
          .searchIcon {
            display: block;
            height: .38rem;
            margin-right: .05rem;
            width: .4rem;
            background: url('~jd/images/searchIcon.png') no-repeat;
            background-size: 600% 100%;
            background-position: -0.34rem 0;
          }
        }
      }
      >span {
        text-align: center;
        font-size: 15px;
        min-width: 1.5rem;
        color: $gray;
      }
    }
    .search-hot {
      padding: $padding;
      background: #fff;
      >p {
        font-size: $title;
        // font-weight: bold;
        color: #333;
        text-align: left;
        // padding: $padding;
        margin-bottom: $margin;
      }
      .search-hot-list {
        @include flexbox(flex-start,
        center,
        row,
        wrap);
        padding: $padding 0 0;
        .search-hot-item {
          border-radius: 10px;
          color: #666;
          padding: 5px 16px 8px 0;
          // margin: 6px 6px 0px;
          font-size: $subtitle;
          text-align: center;
        }
      }
    }
    .search-history {
      // margin-top: $margin;
      background: #fff;
      padding: $padding 0 $padding $padding;
      >p {
        font-size: $title;
        // font-weight: bold;
        margin-bottom: $margin;
        color: #333;
        text-align: left;
        // border-bottom: 1px solid $border;
        span{
          display: inline-block;
          background: url('~jd/images/hositoytdel.png') no-repeat;
          width: 0.41rem;
          height: 0.41rem;
          background-size: 100%;
          float: right;
          margin-right: .4rem
        }
      }
      .clear-history {
        width: 5rem;
        padding: $padding 0;
        margin: $margin auto;
        border: 1px solid $border;
        border-radius: 2px;
        font-size: $subtitle;
        color: $gray;
        @include flexbox(center,
        center,
        row,
        nowrap);
      }
      .search-history-list {
        @include flexbox(flex-start,
        center,
        row,
        wrap);
        padding: $padding 0 0;
        .search-history-item {
          background: #f2f2f2;
          border-radius: 10px;
          color: #666;
          padding: 5px 14px;
          margin: 0 10px 10px 0;
          font-size: $subtitle;
          text-align: center;
        }
      }
    }
    .search-rusult-content {
      .search-rusult-goods {
        @include flexbox(flex-start,
        center,
        row,
        nowrap);
        padding: $padding;
        span {
          font-size: $subtitle;
          margin-left: 5px;
          color: $gray;
        }
        i {
          display: block;
          width: 17px;
          height: 16px;
          background: url('~jd/images/store.png') no-repeat;
          background-size: 100%;
        }
      }
      .search-rusult-list {
        @include flexbox(flex-start,
        center,
        column,
        wrap);
        .search-rusult-item {
          width: 100%;
          text-align: left;
          padding: $padding;
          color: $gray;
          font-size: $subtitle;
          border-bottom: 1px solid $border;
          p {
            @include textoverflow(1)
          }
        }
      }
    }
  }

</style>
<template>
  <div style="position:relative;">
    <div class="searchRusultall"  v-if="!searchVisiblie">

      <div class="searchRusult">
        <slot name="left-icon">
          <i class="logoIcon logoQrcodeIcon"></i>
        </slot>
        <div class="searchInput" @click="()=>searchVisiblie=true">
          <slot name="title-icon">
            <div class="search-box">
              <i class="searchIcon searchContentIcon"></i>
              <span>品质生活必备</span>
            </div>
          </slot>
        </div>
        <slot name="right-icon">
          <div class="scanCode" @click="$router.push(`/searchImg`)">
            <i class="searchIcon searchQrcodeIcon"></i>
            <span>找同款</span>
          </div>
          <!-- <div class="searchMsg">
            <i class="searchIcon searchMsgIcon"></i>
            <span>消息</span>
          </div> -->
        </slot>
      </div>
      <!-- <div class="homesearch-hot">
          <p>热搜：</p>
          <ul class="homesearch-hot-list">
            <li class="homesearch-hot-item">智能手发</li>
            <li class="homesearch-hot-item">智能手收</li>
            <li class="homesearch-hot-item">智能手收</li>
          </ul>
      </div> -->
    </div>
    <!-- 文字搜索 -->
    <mt-popup v-model="searchVisiblie" :closeOnClickModal="true" :modal="false" position="right" class="modal-popup">
      <div class="searchContainer">
        <div class="search-top">
          <div class="searchInput" @click="$refs.searchInput.focus()">
            <div class="search-box">
              <i class="searchIcon searchContentIcon"></i>
              <input type="search" v-model="Keyword" @keypress="truesearchGoods" placeholder="MacBook Pro 15.4寸" ref="searchInput" v-searchFocus>
              <span class="clear" @click="Keyword=''" v-show="Keyword.length>0">&times;</span>
            </div>
          </div>
          <span @click="()=>{Keyword='';searchVisiblie=false}">取消</span>
        </div>
        <load-more v-show="Keyword.length<=0" style="width:100%;height:100%;background:#fff;" >
          <div class="search-history">
            <p>历史记录 <span></span></p>
            <ul class="search-history-list">
              <!-- <li class="search-history-item" @click="()=>Keyword = item.keywords" v-for="(item,index) in searchHistoryData" :key="index">{{item.keywords}}</li> -->

              <li class="search-history-item">智能手表</li>
              <li class="search-history-item">智能</li>
              <li class="search-history-item">智能手表</li>
              <li class="search-history-item">智能手表</li>
              <li class="search-history-item">智能手表</li>
              <li class="search-history-item">智能手表</li>
              <li class="search-history-item">智能手表</li>
            </ul>
            <div class="clear-history">
              <i></i>
              <span>清空历史搜索</span>
            </div>
          </div>
          <div class="search-hot">
            <p>热门搜索</p>
            <ul class="search-hot-list">
              <li class="search-hot-item">智能手表</li>
              <li class="search-hot-item">智能</li>
              <li class="search-hot-item">智能手表</li>
              <li class="search-hot-item">智能手表</li>
              <li class="search-hot-item">智能手表</li>
              <li class="search-hot-item">智能手表</li>
              <li class="search-hot-item">智能手表</li>
            </ul>
          </div>
          
        </load-more>
        <div class="search-rusult-content" v-show="Keyword.length>0">
          <load-more style="background:#fff;width: 100%;height: 100%;">
            <div class="search-rusult-goods">
              <i></i>
              <span>搜素 {{Keyword}}...</span>
            </div>
            <ul class="search-rusult-list" v-if="searchRusultData!=''">
              <li class="search-rusult-item" v-for="(item,index) in searchRusultData" :key="index" @click="selectedProd(item)">
                <p>{{item.productName}}</p>
              </li>
            </ul>
            <p style="text-align:center;text-align: left;padding: 10px;color: #81838e;font-size: 13px;border-bottom: 1px solid #e1e1e1;"
              v-else>暂无数据...</p>
          </load-more>
        </div>
      </div>
    </mt-popup>

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
  import {
    
    Toast
  } from 'mint-ui'
  export default {
    data() {
      return {
        searchVisiblie: false,
        Keyword: '',
        searchHistoryData: [],
        searchRusultData: [],  
      }
    },
    props: {
      Status: {
        type: Boolean,
        required: true
      }
    },
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
      LoadMore
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
      }
    },

    mounted: function () {
      try{
        this.searchHistoryData = JSON.parse(getLocalStorage('searchHistoryData'));
      }catch(err){}
    }
  }

</script>
