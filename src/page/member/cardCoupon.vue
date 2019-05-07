<!---卡券--->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .cardCoupon{
    @include wh(100%,100%);
    background:#fff;
    .cardCoupon-container{
      @include wh(100%,100%);
      .cardCoupon-title{
        padding:0 .3rem;
        background:#f2f2f2;
        ul{
          @include flexbox(center,center,row,nowrap);
          li{
            @include flexbox(center,center,row,nowrap);
            font-size:15px;
            color:#333;
            &:first-child{
              justify-content:flex-start;
            }
            &:last-child{
              justify-content:flex-end;
            }
            &:active{
              color:$red;
            }
            .active{
              
            }
          }
        }
      }
      .cardCoupon-detail{
        padding:0 .3rem;
        background-color:#fff;
      }
    }
  }
</style>
<template>
  <div class="cardCoupon">
    <div class="cardCoupon-container">
      <div class="cardCoupon-title">
        <ul>
          <li>未使用<span>(0)</span></li>
          <li class="active">使用记录<span>(17)</span></li>
          <li>已过期<span>(0)</span></li>
        </ul>
      </div>
      <!-- <ul class="cardCoupon-detail" v-if="cardCoupon!=''" v-for="(item,index) in cardConpon" :key="index">
        <li calss="cardCoupon-item">
          <div class="cardCoupon-item-con">
            <div class="item-left">
              <p class="item-price">{{item}}</p>
              <p class="item-useTip">{{item}}</p>
              <p class="item-expiryTime">{{item}}</p>
            </div>
            <div class="item-right">
              <img src="">
            </div>
          </div>
          <p class="cardCoupon-item-useExplain"></p>
        </li>
      </ul> -->

      <ul class="cardCoupon-detail">
        <li calss="cardCoupon-item">
          <div class="cardCoupon-item-con">
            <div class="item-left">
              <p class="item-price">￥20</p>
              <p class="item-useTip">订单满218元使用 （不包含运费）</p>
              <p class="item-expiryTime">有效期2019.05.03-2019.06.03</p>
            </div>
            <div class="item-right">
              <img src="~jd/images/usicon.png">
            </div>
          </div>
          <p class="cardCoupon-item-useExplain">券码使用详细说明文字展示，超过一行显示折叠效果</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BackHead from 'common/backHead';
  import {
    cardCoupon
  } from '@/service/getData';
  import LoadMore from 'common/loadMore';
  import {
    getLocalStorage,
    setLocalStorage
  } from '@/utils/mixin';
  import {Toast} from 'mint-ui'
  export default {
    data() {
      return {
        cardCoupon: [],
        params: {  
        },
        // commad: cardCoupon
      };
    },

    watch: {},

    components: {
      LoadMore,
    },

    computed: {},

    methods: {
      async initData() {
        let Data = await cardCoupon({});
        if(Data.code!=10000){
          Toast({
            message: Data.msg,
            position: 'bottom'
          })
          return
        }else{
          this.cardCoupon=Data.data;
          //初始化数据时缓存
          setLocalStorage('cardCoupon',this.cardCoupon)
        }
        

      },      
    },
    mounted: function () {
          this.initData()
    }
  }
</script>
