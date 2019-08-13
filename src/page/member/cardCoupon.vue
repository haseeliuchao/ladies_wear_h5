<!---卡券--->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .cardCoupon{
    background:#fff;
    .cardCoupon-title{
        padding:0 .3rem;
        background:#f2f2f2;
        ul{
          @include flexbox(center,center,row,nowrap);
          li{
            @include flexbox(center,center,row,nowrap);
            font-size:.4rem;
            color:#333;
            padding:.373333rem 0;
            &:first-child{
              justify-content:flex-start;
            }
            &:last-child{
              justify-content:flex-end;
            }
            &.active{
              color:$red;
            }
          }
        }
      }
    .cardCoupon-container{
      
      .cardCoupon-detail{
        padding:0 .3rem;
        background-color:#fff;
        .cardCoupon-item{
          margin-top:.133333rem;
          .cardCoupon-item-con{
            @include flexbox(space-between,center,row,nowrap);
            padding:10px 0 15px .4rem;
            background:url("~jd/images/couponBg.png");
            background-size:100% 100%;
            .item-left{
              width:67%;
              .item-price{
                color:$red;
                font-size:22px;
                font-weight:bold;
                text-indent:-5px;
              }
              .item-useTip{
                color:$red;
                font-size:13px;
                margin: 8px 0;
              }
              .item-expiryTime{
                color:#999;
                font-size:13px;
              }
            }
            .item-right{
              display:flex;
              flex:1;
              justify-content:center;
              align-items:center;
              img{
                width:55%;
                height:55%;
              }
            }
          }
          .cardCoupon-item-useExplain{
            color:#333;
            font-size:13px;
            margin-top:8px;
            text-overflow:ellipsis;
            white-space:nowrap;
            overflow:hidden;
            :hover{
              overflow:visible;
            }
          }
        }
        .cardCoupon-tip{
          display:flex;
          flex:1;
          justify-content:center;
          width:100%;
          padding:0 .3rem;
          margin-top:50px;
        }
      }
      
    }
  }
</style>
<template>
  <div class="cardCoupon">
     <div class="cardCoupon-title">
        <ul>
          <li @click= "couponRecord(0)" :class="{'active':active===0}">未使用<span>（{{notuse}}）</span></li>
          <li @click= "couponRecord(1)" :class="{'active':active===1}">使用记录<span>（{{thisuse}}）</span></li>
          <li @click= "couponRecord(2)" :class="{'active':active===2}">已过期<span>（{{overdue}}）</span></li>
        </ul>
      </div>
      <load-more style="width:100%;" v-if="$route.name=='cardCoupon'"  @loadMore="infiniteCallback" :commad="commad" :param="params" 
        :loadMoreIconVisible="false" ref="cardCouponLoadmore">
    <div class="cardCoupon-container" v-if="cardCouponList!=''">
      <ul class="cardCoupon-detail" v-for="(item,index) in cardCouponList" :key="index">
        <li class="cardCoupon-item">
          <div class="cardCoupon-item-con">
            <div class="item-left">
              <p class="item-price">￥{{item.discount_price/100}}</p>
              <p class="item-useTip">{{item.coupon_title}} (不包含运费)</p>
              <p class="item-expiryTime">有效期{{item.coupon_use_valid_start|DateFormat('yyyy.MM.dd')}}-{{item.coupon_use_valid_end|DateFormat('yyyy.MM.dd')}}</p>
            </div>
            <div class="item-right coupon-status">
              <img  v-if="item.user_coupon_status_integer==1" src="~jd/images/couponNouse.png">
              <img  v-if="item.user_coupon_status_integer==2" src="~jd/images/couponUse.png">
              <img  v-if="item.user_coupon_status_integer==3" src="~jd/images/couponOlduse.png">
            </div>
          </div>
          <p class="cardCoupon-item-useExplain">{{item.use_scope_type_str}}</p>
        </li>
        <!-- <div class="cardCoupon-tip" v-if="cardCoupon.list">
          ——————&nbsp;&nbsp;&nbsp;以上是近期得优惠券&nbsp;&nbsp;&nbsp;——————
        </div> -->
      </ul>
    </div>
    <!-- 没有订单 -->
        <div class="order-nomore-tip" v-if="cardCouponList==''">
          <i></i>
        </div>
        <!-- 没有订单 -->
      </load-more>
    <BackRouter/>
  </div>
</template>
<script>
  import BackRouter from 'common/backRouter';
  import BackHead from 'common/backHead';
  import LoadMore from 'common/loadMore';
  import {cardCoupon} from '@/service/getData';
  import {
    getLocalStorage,
    setLocalStorage
  } from '@/utils/mixin';
  import {Toast} from 'mint-ui'
  export default {
    data() {
      return {
        active:0,
        notuse:0,
        overdue:0,
        thisuse:0,
        commad: cardCoupon,
        params: {
          page_size: 10,
          current_page: 1,
          user_coupon_status:1
        },
         cardCouponList:[],
        // user_coupon_status:1,
        status_url:''
      };
    },

    watch: {},

    components: {
      LoadMore,BackRouter
    },

    computed: {},

    methods: {
      async initData() {
        let Data = await cardCoupon({
          user_coupon_status:this.user_coupon_status
        });
        if(Data.code!=10000){
          Toast({duration: 1000,
            message: Data.msg,
          })
          return
        }else{
          this.cardCoupon=Data.data;
          // //初始化数据时缓存
          // setLocalStorage('cardCoupon',this.cardCoupon)
        }
      },

       async onRefreshCallback() { //下拉刷新
        this.params.page_size = 10;
        this.params.current_page = 1;
        this.cardCouponList = [];
        this.$refs.cardCouponLoadmore.onTopLoaded(this.$refs.cardCouponLoadmore.uuid);
      },
      async infiniteCallback(response) { //加载更多订单
      if(response.data){
        this.notuse=response.data.not_use;
        this.overdue=response.data.overdue;
        this.thisuse=response.data.this_use;
      }
      if (response.data.page.data){
        if (response.data.page.data.length > 0) {
          response.data.page.data.map(i => {
            this.cardCouponList.push(i)
            // console.log(this.cardCouponList)

          })
        }
      }
      },
      async couponRecord(index){
        this.active = index;
        if(index===0){
          this.params.user_coupon_status=1;
        }
        if(index===1){
          this.params.user_coupon_status=2;
        }
        if(index===2){
          this.params.user_coupon_status=0;
        }
        this.onRefreshCallback();
      }      
    },
    mounted: function () {
          // this.initData()
          this.couponRecord(0)
    }
  }
</script>
