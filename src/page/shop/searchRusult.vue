<!-- searchRusult -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .search-rusult-container {
    height: 100%;
    .search-top {
      @include flexbox(space-between,
      center,
      row,
      nowrap);
      padding: 10px 20px;
      background: #fff;
      border-bottom: 1px solid #eee;
      .back-icon{
        width: 23px;
        height: 23px;
        background: url('~jd/images/arrow-left.png') no-repeat;
        background-size: 100%;
      }
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
    .search-filter{
      // border-top: 1px solid $border;
      border-bottom: 1px solid #eee;
      .search-filter-list{
        background: #fff;
        @include flexbox(space-between,center,row,nowrap);
        .search-filter-item{
          width: 25%;
          @include flexbox(center,center,row,nowrap);
          color: #333;
          font-size: 15px;
          padding: 12px 0;
          &.active{
            color: $red;
          }
          &.more-sort{
            position: relative;
            &:after{
              content:'';
              position: absolute;
              right: .5rem;
              top: 44%;
              width: 0;
              height: 0;
              border: 5px solid transparent;
              border-top-color: $red;
            }
          }
        }
      }
    }
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
  }

</style>

<template>
  <div class="search-rusult-container">
    <!-- 搜索框 -->
    <div class="search-top">
      <i class="back-icon" @click="$router.go(-1)"></i>
      <div class="searchInput">
        <div class="search-box">
          <i class="searchIcon searchContentIcon"></i>
          <input :placeholder="searchParams.title" v-model="searchParams.title">
        </div>
      </div>
    </div>
    <!-- 搜索框 -->
    
    <!-- 筛选 -->
    <div class="search-filter">
      <ul class="search-filter-list">
        <li class="search-filter-item active more-sort">综合</li>
        <li class="search-filter-item">销量</li>
        <li class="search-filter-item">价格</li>
        <li class="search-filter-item">筛选</li>
      </ul>
    </div>
    <!-- 筛选 -->

    <!-- 搜索内容 -->
    <div class="content">
      <load-more style="width:100%;" @loadMore="infiniteCallback" :commad="commad" :param="searchParams"
          ref="searchRusultloadMore">
        <ul class="product-list" >
          <li class="prod-item" v-for="(item,index) in searchRusultData" :key="index" @click="()=>$router.push('/product/'+item.item_id)">
            <img :src="item.index_img_url" alt="">
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
    <!-- 搜索内容 -->
  <BackHead/>
  </div>
</template>

<script>
  import BackHead from 'common/backHead';
  import LoadMore  from 'common/loadMore';
  import {
    searchGoods
  } from '@/service/getData'
  export default {
    data() {
      return {
        searchRusultData: [],
        commad: searchGoods,
        searchParams: {
          title: '',
          category_id:'',
          page_size: 10,
          current_page: 1
        }
      };
    },

    watch: {
      'searchParams.title': function(val){
        this.searchRusult()
      }
    },

    components: {
      BackHead,
      LoadMore
    },

    computed: {},

    methods: {
      async searchRusult() {
        this.searchParams.page_size = 10;
        this.searchParams.current_page = 1;
        this.searchParams = JSON.parse(JSON.stringify(Object.assign(this.searchParams,this.$route.query)))
        this.$refs.searchRusultloadMore.onloadMoreScroll();
      },
      async infiniteCallback(response) { //下拉加载
      // this.searchRusultData=response.data.items
        if (response.data.items.length > 0) {
          response.data.items.map(i => {
            this.searchRusultData.push(i)
          })
        }
      },
      async initData() {
          this.searchParams.page_size = 10;
          this.searchParams.current_page = 1;
          this.searchParams = JSON.parse(JSON.stringify(Object.assign(this.searchParams,this.$route.query)))
          let Data = await this.$store.dispatch('SearchGoods');
          this.searchRusultData= Data.data.items;
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
    mounted: function () {
      this.searchParams = JSON.parse(JSON.stringify(Object.assign(this.searchParams,this.$route.query)))
      this.$refs.searchRusultloadMore.onloadMoreScroll();
      // this.initData()
    }
  }

</script>