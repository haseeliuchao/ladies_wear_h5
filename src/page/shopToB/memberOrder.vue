<!-- customerOrder -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .content{
    min-height:100vh;
    background-color:#f2f2f2;
  }
  .customerOrder-header{
    width:100%;
    height:126px;
    padding:24px .3rem;
    background-color: #ff5527;
    .customerInfo{
      @include flexbox(flex-start,center,row,nowrap);
      .avatar {
        img {
          width: 56px;
          height: 56px;
          border: 1px solid hsla(0, 0%, 100%, .4);
          border-radius: 5px;
        }
      }
      .customer{
        @include flexbox(center,flex-start,column,wrap);
        height:64px;
        margin-left:.4rem;
        .customerName,.setRemark {
          color:#fff;
        }
        .customerName{
          font-size:16px;
        }
        .setRemark{
          font-size:12px;
          margin-top:8px;
          padding:3px 7px;
          border:1px solid #fff;
          border-radius:2px;
        }
      }
    }
  }
  .customerOrder-con{
    position:relative;
    top:-25px;
    padding:0 .3rem;
    .orderCount{
      @include flexbox(center,center,row,nowrap);
      background:#fff;
      border-radius:5px;
      li{
        @include flexbox(center,center,column,wrap);
        padding:10px 0;
        color:#333;
        em{
          font-size:15px;
        }
        span{
          font-size:14px;
          margin-top:4px;
        }
      }
    }
    .orderCon{
      border-radius:5px;
      .orderSort{
        @include flexbox(space-between,center,row,nowrap);
        padding:0 .25rem;
        li{
          padding:15px 0;
          font-size:14px;
          color:#666;
          &.active{
            color:$red;
          }
        }
      }
      .orderDetails{
        background-color:#fff;
        border-radius:5px;
        height:200px;
      }
    }
  }
</style>
<template>
<div>
  <div class="content">
    <div class="customerOrder-header">
      <div class="customerInfo">
          <div class="avatar">
            <!-- :src="!userData.memberInfo? 'https://static.hdslb.com/images/akari.jpg' : userData.memberInfo.head_img" -->
            <img  src="https://static.hdslb.com/images/akari.jpg" alt="客户头像">
          </div>
          <div class="customer">
             <!-- v-if="userData.memberInfo" -->
            <span class="customerName">樱桃小丸子</span>
            <em class="setRemark">设置备注</em>
          </div>
      </div>
    </div>
    <div class="customerOrder-con">
      <ul class="orderCount">
        <li>
            <em>9.90</em>
            <span>累计消费(元)</span>
        </li>
        <li>
          <em>1</em>
          <span>累计订单数</span>
        </li>
      </ul>
      <div class="orderCon">
        <ul class="orderSort">
          <li>待付款(3)</li>
          <li class="active">待发货(1)</li>
          <li>待收货(5)</li>
          <li>更多<i></i></li>
        </ul>
        <div class="orderDetails">
          <div class="order-item">
            <!-- <p></p>
            <div></div>
            <div>
              <p>共<i>1</i>件<span>合计：<em></em></span></p>
            </div> -->
          </div>
        </div>
      </div>  
    </div>
  </div>
</div>
</template>
<script>
  import {
    Toast
  } from 'mint-ui'
  export default {
    data() {
      return {
        
      }
    },
    methods: {
    },
    mounted: function () {
    }
  }
</script>
<style lang="scss" scoped>


</style>
