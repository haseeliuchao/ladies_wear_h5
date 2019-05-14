<!-- searchImg -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  /* 图搜续费 */
  #app{
    background: #fff;
  }
  .renewContainer {
    background:#fff;
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
          @include flexbox(flex-start,flex-start,column,wrap);
          margin-left:.2rem;
          color:#333;
          font-size:14px;
          span{
            &:last-child{
              margin-top:5px;
            }
          }
        }
      }
      .renew-type{
        .renew-type-list{
          @include flexbox(space-between,center,row,nowrap);
          overflow:scroll;
          .renew-type-item{
            position:relative;
            @include flexbox(space-between,center,column,wrap);
            padding:15px .3rem 10px;
            margin:24px .2rem;
            border:1px solid #d3d3d3;
            border-radius:4px;
            &.active{
              border:none;
              background-color:rgba(255,179,158,.23)
            }
            .renew-time{
              color:#333;
              font-size:16px;
              font-weight:bold;
            }
            .renew-price{
              display:flex;
              flex-direction:column;
              flex-wrap:wrap;
              height:40px;
              margin-top:10px;
              color:#ff5527;
              font-size:20px;
              font-weight:bold;
              span{
                color:#666;
                font-size:10px;
                font-weight:normal;
              }
            }
            .renew-btn{
              display:flex;
              flex:1;
              justify-content:center;
              align-items:center;
              width:2.1rem;
              padding:3px 0;
              color:#ff5527;
              font-size:14px;
              border:1px solid #ff5527;
              border-radius:12px;
              @media all and(max-width:374px){
                width:2.5rem;
              }
            }
            .new,.recommend{
              position:absolute;
              top:-10px;
              right:0;
              padding:3px .2rem;
              color:#fff;
              font-size:11px;
              border-radius: 0 5px 0 5px;
            }
            .new{
              background:#ff5527;
            }
            .recommend{
              background:-webkit-linear-gradient(left,#d64aff 0%,#8721ff 100%);
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
        p{
          padding:2px 0 2px .2rem;;
          border-left:4px solid $red;
        }
      }
      .search-history-list{
        @include flexbox(center,center,column,wrap);
        .search-history-item{
          @include flexbox(center,center,row,nowrap);
          width:100%;
          padding:15px 0;
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
                margin-top:6px;
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
  <div style="height:100%;background:#fff;">
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
              <p class="renew-time">首月</p>
              <p class="renew-price">￥9.9</p>
              <span class="renew-btn">支付</span>
              <span class="new">新用户专享</span>
            </li>
            <li class="renew-type-item">
              <p class="renew-time">3个月</p>
              <p class="renew-price">￥59.9<span>折合￥19.9/月</span></p>
              <span class="renew-btn">支付</span>
              <span class="recommend">推荐</span>
            </li>
            <li class="renew-type-item">
              <p class="renew-time">1个月</p>
              <p class="renew-price">￥25.9</p>
              <span class="renew-btn">支付</span>
            </li>
            <li class="renew-type-item">
              <p class="renew-time">1天</p>
              <p class="renew-price">￥0.9</p>
              <span class="renew-btn">支付</span>
            </li> 
          </ul>
        </div>
      </div>

      <!-- 历史订单 -->
      <div class="renew-history">
        <h2 class="search-history-title"><p class="search-history-title">历史订单</p></h2>
        <ul class="search-history-list">
          <!-- <li class="search-history-item" @click="()=>Keyword = item.keywords" v-for="(item,index) in searchHistoryData" :key="index">{{item.keywords}}</li> -->

          <li class="search-history-item">
            <p>
              <span>续费时间</span>
              <span>2018-11-12</span>
            </p>
            <p>
              <span>类型</span>
              <span>3个月</span>
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
              <span>3个月</span>
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
              <span>3个月</span>
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
              <span>3个月</span>
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
              <span>3个月</span>
            </p>
            <p>
              <span>有效期</span>
              <span>2018-11-12</span>
            </p>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
<script>
  import {

  } from '@/service/getData'
  import LoadMore from 'common/loadMore';
  import {
    Lazyload
  } from 'mint-ui';
  import axios from 'axios';
  import {
    Toast
  } from 'mint-ui'
  export default {
    name: 'upload',
    data() {
      return {
        renewHistoryData: [],
        renewParams: {

          page_size: 10,
          current_page: 1
        },   
      }
    },
  
    watch: {
    },
    components: {
      LoadMore
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
    },

    mounted: function () {
      this.initData();
      try{
      
      }catch(err){

      };
    }
  }

</script>