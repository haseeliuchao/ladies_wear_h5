<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  
  .my-order {
      min-height: 100%;
      background: #fff;
      .searchImgtab{
          padding: 15px 12px;
          width: 10rem;
          background: #fff;
          margin-top: 10px;
          @include flexbox(space-between,center,row,nowrap);
          .searchImgtableft{
              @include flexbox(start,center,row,nowrap);
              width: 82%;
              p{
                  color: #333;font-size: 14px;line-height: 28px;
                  margin-left: 10px;
              }
          }
          .product-share{
           width: 18%;
           display: block;
           height: 22px;
           line-height: 22px;
           border-top-left-radius: 11px;
           border-bottom-left-radius: 11px;
           font-size: 13px;
           color: #666;
           position: relative;
           left: 12px;

           text-align: center;
           background:#e8e8e8 url('~jd/images/sharelink.png') no-repeat 9px center;
           background-size: 16%
        }
      }
      .product-listTitle{

          height: 50px;
          line-height: 50px;
          color: #333;
          font-size: 16px;
          background:#f2f2f2 url('~jd/images/title-linebg.png') no-repeat center;
          background-size:60%;
          text-align: center
      }
      .product-list{
        @include flexbox(space-between,center,row,wrap);
        padding: 0 .3rem;
        .prod-item{
          background: #fff;
          width: 4.58rem;
          margin-bottom: 8px;
          border-radius: 6px;
          overflow: hidden;
          img{
            width: 4.58rem;
            height: 4.58rem;
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
    .ordertop-status{
      width: 10rem;
      height: 100px;
      background: -webkit-gradient(linear, left 0, right 0, from(#ff2741), to(#ff5527));
      @include flexbox(start,
      center,
      row,
      nowrap);
      p{
         width: 60%;font-size: 16px;
         margin-left: 10px;
         color: #fff;
      }
      
    }

  }

</style>

<template>
<div>
  <mt-popup v-model="visiblePopup.shareBoo" style="background:none;" :closeOnClickModal='true'  position="top" class="checkSkupop">
       <img src="~jd/images/shareicon.png" alt="" style="margin-left: 18%;
    margin-top: 8px;width:115%;">
    </mt-popup>

  <div class="my-order">
    <div class="ordertop-status">
         <p style="line-height:25px;">订单支付成功<br><em @click= "$router.push('/index')">继续购物</em> | <em @click.stop.prevent="!handlerEvent ? $router.push('/orderList/2'):false">查看订单</em></p>
         <img src="~jd/images/zhifuchenggong.png" style="height:48px;">
    </div>
    <div class="searchImgtab">
        <div class="searchImgtableft">
        <img src="~jd/images/huiyanlogo.png" style="height:80px;">
        <p>同款商品更低价，不花冤枉钱！</p>
        </div>
        <p class="product-share" @click="visiblePopup.shareBoo=true">&nbsp;&nbsp;&nbsp;&nbsp;分享</p>
    </div>
    <p class="product-listTitle">推荐商品</p>
    <load-more style="width:100%;background:#f2f2f2" @loadMore="infiniteCallback" :commad="commad" :param="indexParams"
                ref="indexRusultloadMore">
              <ul class="product-list" >
                <li class="prod-item" v-for="(item,index) in indexRusultData" :key="index" @click= "()=>$router.push('/product/'+item.item_id)">
                  <img v-lazy="item.index_img_url" alt="">
                  <div class="prod-info">
                    <p class="prod-title">{{item.title}}</p>
                    <p class="prod-price">
                      <span style="font-weight:bold;margin-right:1px;">&yen;</span><span style="font-weight:bold"><em style="font-size:16px;">{{item.sales_consumer_price/100.00|topriceafter}}</em>.{{item.sales_consumer_price/100.00|topricenext}}</span>
                      <span style="margin-left:12px;text-decoration: line-through;color:#999"><em>&yen;</em><em style="font-size:16px;">{{item.sales_price/100.00|topriceafter}}</em>.{{item.sales_price/100.00|topricenext}}</span>
                      </p>
                  </div>
                </li>
              </ul>
    </load-more>
  </div>
  </div>
</template>

<script>
 import LoadMore from 'common/loadMore';
 import {searchGoods} from '@/service/getData';
 import wxapi from '@/utils/wxapi';
  import {
    isWeiXin
  } from '@/utils/mixin';
  import {
    Toast,Popup
  } from 'mint-ui'
  export default {
    data() {
      return {
        commad: searchGoods,
        indexRusultData:[],
        indexParams: {
          title: '',
          category_id:'',
          page_size: 10,
          current_page: 1
        },
        visiblePopup: {
          shareBoo:false
        }
      };
    },

    watch: {},

    components: {
      LoadMore
    },

    computed: {},

    methods: {
      async initData() {
       
      },
        wxRegCallback () {
  // 用于微信JS-SDK回调
    this.wxShareTimeline()
    this.wxShareAppMessage()
},
wxShareTimeline () {
  // 微信自定义分享到朋友圈
  let option = {
    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
    imgUrl: 'https://laquimage.b0.upaiyun.com/ICON/2019/4/3/xiazai1559133351741.png', // 分享图标, 请自行替换，需要绝对路径
    success: () => {
      // alert('分享成功')
      return Toast({
            message: '分享成功',
            position: 'center'
          })
    },
    error: () => {
      // alert('已取消分享')
    }
  }
  // 将配置注入通用方法
  wxapi.ShareTimeline(option)
},
wxShareAppMessage () {
  // 微信自定义分享给朋友
  // var shareWxLink = window.location.href.split('#')[0] + 'static/html/redirect.html?app3Redirect=' + encodeURIComponent(window.location.href);
    let option = {
    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
    imgUrl: 'https://laquimage.b0.upaiyun.com/ICON/2019/4/3/xiazai1559133351741.png', // 分享图标, 请自行替换，需要绝对路径
    success: () => {
      // alert('分享成功')
      return Toast({
            message: '分享成功',
            position: 'center'
          })
    },
    error: () => {
      // alert('已取消分享')
    }
  }
  // 将配置注入通用方法
  wxapi.ShareAppMessage(option)
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
    filters:{
        topriceafter(value){
            return value.toFixed(2).substring(0, value.toFixed(2).indexOf('.'));
        },
        topricenext(value){
            return value.toFixed(2).substring(value.toFixed(2).indexOf('.')+1);
        }
    },
    mounted: function () {
      if(isWeiXin('code')){
        wxapi.wxRegister(this.wxRegCallback)
        }
      this.indexParams = JSON.parse(JSON.stringify(Object.assign(this.indexParams,this.$route.query)))
      this.$refs.indexRusultloadMore.onloadMoreScroll();
    }
  }

</script>
