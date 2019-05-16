<!-- product -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  /* 顶部导航栏 */

  .product-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    height: 1.25rem;
    background: #fff;
    border-bottom: 1px solid $border;
    .product-header-container {
      height: 100%;
      padding: 0px $padding;
      @include flexbox(space-between, center, row, nowrap);
      .goback {
        i {
          display: block;
          width: .65rem;
          height: .65rem;
          background: url('~jd/images/arrow-left.png') no-repeat;
          background-size: 100%;
        }
      }
      .product-tabs {
        max-width: 4.5rem;
        margin-left: 30px;
        height: 100%;
        @include flexbox(space-between,
        center,
        row,
        nowrap);
        position: relative;
        #loadingbar {
          position: absolute;
          transition: .4s;
          width: calc((100%/4));
          background: #000;
          bottom: -1px;
          height: 2px;
        }
        .product-tabs-item {
          width: 33.33%;
          @include flexbox(center,
          center,
          row,
          nowrap);
          flex: initial;
          text-align: center;
          color: #333;
          font-size: $subtitle;
          height: 100%;
          &.active {
            font-size: $title;
          }
        }
      }
      .other {
        max-width: 1.5rem;
        @include flexbox(space-between,
        center,
        row,
        nowrap);
        .share {
          display: block;
          width: .65rem;
          height: .65rem;
          background: url('~jd/images/shares.png') no-repeat;
          background-size: 100%;
        }
        .menu {
          display: block;
          width: .65rem;
          margin-left: .2rem;
          height: .65rem;
          background: url('~jd/images/menu.png') no-repeat;
          background-size: 100%;
        }
      }
    }
  }

  /* 顶部导航栏 */

  /* 商品 */

  #mainLayout {
    .prouct-swiper {
      // box-shadow: 0px 0px 6px 1px #eee;
      position: relative;
      .swiper-indicators {
        font-size: $title;
        z-index: 666;
        position: absolute;
        width: 50px;
        height: 22px;
        border-radius: 11px;
        -webkit-border-radius: 11px;
        background: rgba(0, 0, 0, .3);
        right: 15px;
        bottom: 11px;
        text-align: center;
        line-height: 22px;
        color: #fff;
        overflow: hidden;
      }
      .scroll-images {
        height: 10rem;
        img {
          width: 100%;
          vertical-align: middle;
          max-height: 10rem;
          min-height: 10rem;
        }
      }
    }
    .product-title-text {
      @include flexbox(space-between,
      flex-start,
      column,
      wrap);
      padding: $padding;
      background: #fff;
      .product-title-textbottom{
        @include flexbox(space-between,
        center,
        row,
        nowrap);
        .product-name-text {
        font-size: 13px;
        line-height: 20px;
        color: #333;
        flex: 4;
        @include textoverflow(2);
        width: 8.1rem;
      }
      .product-share{
           flex: 1;
           display: block;
           height: 22px;
           line-height: 22px;
           border-top-left-radius: 11px;
           border-bottom-left-radius: 11px;
           font-size: 13px;
           color: #666;
           position: relative;
           left: 10px;
           margin-left: 10px;
           text-align: center;
           background:#e8e8e8 url('~jd/images/sharelink.png') no-repeat 9px center;
           background-size: 16%
      }
      @media all and(min-width:321px) and(max-width:374px){
        .product-share{
          left:16px;
          text-indent: -5px;
        }
      }
      @media all and(min-width:375px) and(max-width:375px){
        .product-share{
          left:23px;
          text-indent: -6px;
        }
      }
      @media all and(min-width:376px){
        .product-share{
          left:40px;
          text-indent: -10px;
        }
      }
      }
      

      .product-summary-text {
        font-size: $subtitle;
        padding: 5px 0;
        color: #ff2741;
        line-height: 1.6;
        @include textoverflow(2);
      }
      .product-price {
        color: #ff2741;
        text-align: left;
        width: 100%;
        margin-bottom: .2rem;
        @include flexbox(space-between,
        center,
        row,
        nowrap);
        .product-price span{
         font-size: 14px;
        }
        
        .freight{
          color: #999;
          font-weight:bold;
        }
      }
    }
    .product-sku {
      margin-top: 8px;
      background: #fff;
      padding: 15px 10px;
      @include flexbox(space-between,
      center,
      row,
      wrap);
      .sku-select {
        font-size: 16px;
        color: #999;
        margin-right: 15px;
      }
      .sku-info {
        font-size: 14px;
        color: #333;
      }
      .right-menu {
        width: 10px;
        height: 10px;
        background-image: url('~jd/images/product-detail-sprites-mjs.png');
        background-repeat: no-repeat;
        background-size: 100px 100px;
        background-position: 5px -20px;
      }
      .product-skuimg{
        width: 8rem;
        margin-left: 1.36rem;
        margin-top: 10px;
        img{
          margin-right: 10px;
          border-radius: 4px;
          height: 40px;
          width: 40px;
        }
        span{
          padding: 5px 8px;
          font-size: 12px;
          color: #999999;
          border:1px solid #999999;
          
          vertical-align: top;
          margin-top: 8px;
          display: inline-block;
          border-radius: 4px;
        }
      }
    }
    .product-comment {
      margin-top: $margin;
      padding: $padding;
      background: #fff;
      @include flexbox(space-between,
      center,
      column,
      wrap);
      .comment-info {
        width: 100%;
        padding: 0 0 $padding;
        border-bottom: 1px solid $border;
        @include flexbox(space-between,
        center,
        row,
        nowrap);
        flex: initial;
        .comment-num {
          font-size: $subtitle;
          color: $gray;
        }
        .comment-percentage {
          strong {
            color: $red;
            font-size: $subtitle;
            margin-left: 5px;
            font-weight: normal;
          }
        }
      }
      .comment-list {
        padding: $padding 0;
        width: 100%;
        .comment-item {
          .comment-more {
            @include flexbox(center,
            center,
            row,
            nowrap);
            font-size: $subtitle;
            color: $gray;
            width: 100%;
            padding: $padding 0;
            border-radius: 5px;
            border: 1px solid #eeeeee;
          }
          @include flexbox(space-between,
          flex-start,
          column,
          wrap);
          flex: initial;
          width: 100%;
          border-bottom: 1px solid $gray;
          &:last-child {
            border-bottom: none;
          }
          .comment-userinfo {
            width: 100%;
            @include flexbox(space-between,
            center,
            row,
            nowrap);
            display: inline-flex;
            padding: 5px 0;
            img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              overflow: hidden;
            }
            .avatar {
              @include flexbox(flex-satrt,
              center,
              row,
              nowrap);
              flex: initial;
              span {
                font-size: $smsub;
                color: #333;
                vertical-align: text-top;
                margin-left: 5px;
              }
            }
            .comment-star {
              @include flexbox(flex-end,
              center,
              row,
              nowrap);
              .star-item {
                display: block;
                width: 14px;
                height: 14px;
                background: url('~jd/images/star-h.png') no-repeat;
                background-size: 100%;
              }
            }
          }
          .comment-content {
            @include flexbox(space-between,
            flex-start,
            column,
            wrap);
            width: 100%;
            .content {
              font-size: $subtitle;
              color: #333;
              @include textoverflow(2);
              padding: $padding 0;
            }
            .comment-images-list {
              @include flexbox(space-between,
              center,
              row,
              nowrap);
              margin-bottom: $margin;
              img {
                width: 84px;
                margin-right: 5px;
                height: 84px;
                &:last-child {
                  margin-right: 0;
                }
              }
            }
          }
          .comment-sku {
            text-align: left;
            color: $gray;
            font-size: $smsub;
            margin-bottom: $margin;
          }
        }
      }
    }
    .goods-part {
      margin-top: $margin;
      background: #fff;
      padding: $padding;
      @include flexbox(space-between,
      center,
      column,
      wrap);
      >div {
        width: 100%;
      }
      .goods-part-info {
        @include flexbox(flex-start,
        center,
        row,
        nowrap);
        flex: initial;
        img {
          width: 80px;
          height: 26px;
          border: 1px solid $border;
        }
        >div {
          margin-left: 10px;
          @include flexbox(space-between,
          flex-start,
          column,
          wrap);
          flex: initial;
          .goods-part-title {
            font-size: $title;
            color: #333;
            @include textoverflow(1);
          }
          .goods-part-summary {
            color: $gray;
            margin-top: 5px;
            font-size: $smsub;
            @include textoverflow(1);
          }
        }
      }
      .good-part-quantity {
        @include flexbox(space-between,
        center,
        row,
        nowrap);
        padding: 15px 0;
        >div {
          width: 33.33%;
          border-right: 1px solid $border;
          @include flexbox(space-between,
          center,
          column,
          wrap);
          &:last-child {
            border-right: none;
          }
          strong {
            font-size: $title;
            color: #333;
            text-align: center;
            font-weight: normal;
          }
          span {
            text-align: center;
            color: $gray;
            margin-top: 5px;
            font-size: $smsub;
          }
        }
      }
      .good-part-service {
        @include flexbox(space-between,
        center,
        row,
        nowrap);
        >div {
          border: 1px solid $border;
          border-radius: 2px;
          width: 49%;
          text-align: center;
          padding: 6px 0;
          span {
            text-align: center;
            font-size: $subtitle;
            margin-left: 5px;
            vertical-align: 0.1rem;
            color: $gray;
          }
          i {
            display: inline-block;
            background-size: 100px 100px;
            background-repeat: no-repeat;
            background-image: url('~jd/images/product-detail-sprites-mjs.png');
          }
        }
        .good-part-contact {
          i {
            width: 18px;
            height: 18px;
            background-position: -30px -48px;
          }
        }
        .go-good-part {
          i {
            width: 18px;
            height: 18px;
            background-position: -83px -48px;
          }
        }
      }
    }
    
    /* 为您推荐 */
    .my-recommend {
      clear: both;
      
      .recommend-tip {
        text-align: center;
        margin: 15px 0;
        img {
          height: 15px;
        }
      }
      .recommend-list {
        background: #fff;
        @include flexbox(flex-start,
        center,
        row,
        wrap);
        overflow: hidden;
        clear: both;
        .recommend-item {
          background: #fff;
          width: 4.935rem;
          margin-bottom: .15rem;
          .item-posre {
            img {
              max-height: 185px;
              width: 100%;
            }
          }
          .item-product-text {
            padding: .1rem 0 0 .1rem;
            font-size: 14px;
            @include textoverflow(2);
          }
          .item-product-info {
            color: #f23030;
            padding: .2rem .1rem;
            font-size: 16px;
            span {
              font-size: 12px;
              margin-right: .1rem;
            }
          }
          .item-product-praise {
            padding: 0 0 .2rem .1rem;
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
    /* 为您推荐 */
  }

  /* 商品 */

  /* 底部导航栏 */

  .cart-concern-fixed {
    position: fixed;
    bottom: -1px;
    left: 0;
    right: 0;
    width: 100%;
    height: 49px;
    background: #fff;
    @include flexbox(space-between,
    center,
    row,
    nowrap);
    .left {
      height: 100%;
      @include flexbox(space-between,
      center,
      row,
      nowrap);
      
      >div {
        width: 50%;
        @include flexbox(space-between,
        center,
        column,
        wrap);
      
        span {
          color: #666;
          font-size: $smsub;
          margin-top: 2px;
        }
        i {
          display: block;
          width: 22px;
          height: 22px;
          margin-bottom: 2px;
        }
      }
      .goods-part {
        i {
          background: url('~jd/images/gohome.png') no-repeat;
          background-size: 98%;
          
        }
      }
     
      .shopping-cart {
        position: relative;
        em{
          position: absolute;
          background: #fff;
          font-size: 12px;
          padding: 0px 3px;
          border-radius: 16px;
          border: 1px solid #ff2741;
          color: #ff2741;
          right: 10px;
          top: -3px;
        }
        i {
          background: url('~jd/images/goucart.png') no-repeat center 1px;
          
          background-size: 98%;
        }
      }
    }
    .right {
      
      height: 100%;
      background: #ff2741;
      
      color: #fff;
      font-size: $title;
      @include flexbox(center,
      center,
      row,
      nowrap);
      
    }
  }

  /* 底部导航栏 */

  /* 商品详情 */

  #goodDetail {
    .detail-tab {
      @include flexbox(space-between,
      center,
      row,
      nowrap);
      background: #fff;
      padding: $padding 20px;
      li {
        width: 33.33%;
        color: #333;
        text-align: center;
        font-size: $subtitle;
        border-right: 1px solid $border;
        &:last-child {
          border-right: none;
        }
        &.active {
          color: $red;
        }
      }
    }
    .good-detail-content {
      padding: $padding;
      background: #fff;
      .top-tip {
        background: #fff;
        text-align: center;
        position: relative;
        span {
          text-align: center;
          font-size: $subtitle;
          color: $gray;
          position: relative;
          z-index: 222;
          padding: 0 $padding;
          background: #fff;
        }
        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          background: $border;
          top: 50%;
          left: 0;
        }
      }
      .content {}
    }
  }

  /* 商品详情 */

.productparameterall{
  height: 230px;
      // overflow: auto;
      overflow-y: scroll;
  /* ios需要下面这个属性 */
  -webkit-overflow-scrolling: touch;
}


  /* 商品评价 */

  #goodcommentList {
    background: #fff;
    padding: $padding 0; // margin-top: $margin;
    .goodcomment-item {
      background: #fff;
      @include flexbox(space-between,
      center,
      column,
      wrap);
      width: 100%;
      padding: $padding;
      border-bottom: 1px solid $border;
      &:last-child {
        border-bottom: none;
      }
      .comment-userinfo {
        width: 100%;
        @include flexbox(space-between,
        center,
        row,
        nowrap);
        >div {
          @include flexbox(flex-start,
          center,
          row,
          nowrap);
          .avatar {
            margin-right: 5px;
            img {
              width: 27px;
              height: 27px;
              border-radius: 50%;
              overflow: hidden;
            }
          }
          .comment-username {
            @include flexbox(space-between,
            flex-start,
            column,
            wrap);
            .name {
              font-size: $subtitle;
              color: #333;
            }
          }
        }
        .comment-date {
          color: $gray;
          font-size: smsub;
        }
      }
      .comment-content {
        padding-left: .9rem;
        p {
          font-size: $subtitle;
          color: #333;
          padding: $padding 0;
          @include textoverflow(6);
        }
        .comment-imageslist {
          @include flexbox(space-between,
          flex-start,
          column,
          wrap);
          img {
            width: 33.33%;
            height: 100px;
            margin-right: $margin;
          }
        }
      }
      .comment-sku {
        text-align: left;
        width: 100%;
        padding: $padding 0 $padding .9rem;
        p {
          color: $gray;
          font-size: smsub;
          @include textoverflow(1);
        }
      }
      .comment-other {
        @include flexbox(space-between,
        center,
        row,
        nowrap);
        width: 100%;
        padding: $padding 0 $padding .9rem;
        font-size: $smsub;
        .createDate {
          color: $gray;
        }
        >div {
          @include flexbox(flex-end,
          center,
          row,
          nowrap);
          flex: initial;
          div {
            @include flexbox(space-between,
            center,
            row,
            nowrap);
            margin-right: 5px;
            &:last-child {
              margin-right: 0;
            }
            i {
              display: block;
              width: 22px;
              height: 22px;
            }
            span {
              color: #333;
              margin-left: 5px;
              vertical-align: middle;
            }
          }
          .like-icon {
            i {
              background: url('~jd/images/cart_sprits_all.png') no-repeat;
              background-position: -50px 0;
              background-size: 100px 100px;
              &.active {
                background-size: -50px -21px;
              }
            }
          }
          .sendcomment {
            i {
              background: url('~jd/images/evaluated.png') no-repeat;
              background-size: 100%;
            }
          }
        }
      }
    }
  }

  .productActive{
    color: $red!important;
    border: 1px solid $red!important;
  }

  /* 商品评价 */

</style>
<style lang="scss">
  #prodContent-container {
    overflow: hidden;
    width: 100%;
    clear: both;
    // border-radius: 6px;
    padding-bottom: 44px;
  }
  em{
    font-style: normal
  }
  #prodContent-container * {
    max-width: 100% !important;
    width: 100% !important;
    height: auto !important;
  }

</style>
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
.productConten {
    margin-bottom: 1rem;
}
.product-delcom {
    padding: 0.24rem 7%;
    color: #323232;
    font-size: 0.26rem;
    border-bottom: 1px solid #EEEEEE;
}
.product-footerlist {
    margin-top: 0.1rem;
@include flexbox(start,
            center,
            row,
            nowrap);
}
.product-footerlist li {
    border: 1px solid #606060;
    border-radius: 0.08rem;
    color: #606060;
    text-align: center;
    padding: 0.04rem 0.16rem;
    margin-right: 0.16rem;
    min-width: 0.96rem;
    margin-bottom: 0.16rem;
}
.product-footerlist li.productActive {
    background-color: #1A1A29;
    color: #fff;
    border: 1px solid #1A1A29;
}
.product-footerlist li.noneActive {
    background-color: #ccc;
    opacity: 0.4;
    color: #000;
    pointer-events: none;
}
</style>

<template>
  <div style="background:#f8f8f8;">
    <!-- 颜色尺码选择popup -->
    <mt-popup v-model="visiblePopup.checkSku" :closeOnClickModal='true'  position="bottom" class="checkSkupop">
      <div class="checkSkuColortitleall">
        <p class="checkSkuColortitle">颜色</p>
        <span class="closepop" @click= "()=>{title='';visiblePopup.checkSku=false;curcolorname=null;cursizename=null;checkcolorindex=null;checksizeindex=null;}"></span>
      </div>
      <ul class="skuColorlist">
        <li  v-for="(item,index) in colorarr" v-on:click="colorcheckBtn(item.color,index)" v-bind:class="[checkcolorindex == index?'productActive':'']" :key="index">{{item.color}}</li>
      </ul>
      <div style="border-top:1px solid #e4e4e4;
          border-bottom:1px solid #e4e4e4;">
      <p class="checkSkuColortitle">尺寸</p>
      <ul class="skuSizelist">
        <li v-for="(item,index) in sizearr" v-on:click="sizecheckBtn(item.size,index)" v-bind:class="[checksizeindex == index?'productActive':'']" :key="index">{{item.size}}</li>
      </ul>
      </div>
      <div class="skuNum">
                  <div class="left">
                    选择数量
                  </div>
                  <div class="right">
                    <div class="cut" @click= "operationnum(-1)"></div>
                    <input type="text" v-model="shopnum" class="num-inp">
                    <div class="add" @click= "operationnum(1)"></div>
                  </div>
      </div>
      <!-- @click= "()=>{title='';visiblePopup.checkSku=false}" -->
      <div class="popupOk" @click= "checkSkuOk">选好了</div>
    </mt-popup>

    <!-- 颜色尺码选择popup -->
    <mt-popup v-model="visiblePopup.checkInfo" :closeOnClickModal='true'  position="bottom" class="checkSkupop">
      <div class="checkSkuColortitleall">
        <p class="checkSkuColortitle" style="text-align: center;">产品参数</p>
        <span class="closepop" @click= "()=>{visiblePopup.checkInfo=false}"></span>
      </div>
      <div class="productparameterall">
      <p class="productparameter" v-for="(item,index) in productInfo.propertyList" :key="index">{{item.name}}<span>{{item.value}}</span></p>
      </div>
      <div class="popupOk" @click= "()=>{visiblePopup.checkInfo=false}" style="margin-top:29px;">知道了</div>
    </mt-popup>
          <div id="mainLayout">
            <!-- 商品轮播图 -->
            <div class="prouct-swiper">
              <mt-swipe @change="handleChange" :showIndicators="false" :stopPropagation="true" :prevent="true" :continuous="false" :auto="0"
                class="scroll-images">
                <mt-swipe-item v-for="(item,index) in productInfo.imgList" :key="index">
                  <img :src="item">
                </mt-swipe-item>

              </mt-swipe>
              <div class="swiper-indicators">{{swipeIndex.nowIndex}}/{{swipeIndex.total}}</div>
            </div>
            <!-- 商品轮播图 -->
            <!-- 商品信息 -->
            <div class="product-title-text">

              <div class="product-price">
                <p class="product-pricep">
                <span style="font-weight:bold;">&yen;</span>
                <span style="font-weight:bold;margin-left: -3px;"><em style="font-size:16px;">{{productInfo.salesConsumerPrice/100.00|topriceafter}}</em>.{{productInfo.sales_consumer_price/100.00|topricenext}}</span>
                <span style="margin-left:20px;text-decoration: line-through;color:#999"><em style="font-size:13px;">原价</em> <em>&yen;</em><em style="font-size:15px;">{{productInfo.cost_price/100.00|topriceafter}}</em>.{{productInfo.cost_price/100.00|topricenext}}</span>
                </p>
                <span class="freight"><em style="font-size:13px;font-weight:normal">运费</em> <em>&yen;</em><em style="font-size:16px;">5</em>.00</span>
              </div>
              <div class="product-title-textbottom">
              <p class="product-name-text">{{productInfo.title}}</p>
              <p class="product-share">&nbsp;&nbsp;&nbsp;&nbsp;分享</p>
              </div>
              <!-- <p class="product-summary-text">{{productInfo.summary}}</p> -->
            </div>
            <!-- 商品信息 -->
            <!-- 商品服务 -->
            <div class="product-sku" >
              <div>
                <span class="sku-select">服务</span>
                <span class="sku-info">7天无理由退货</span>
              </div>
              <!-- <span class="right-menu"></span> -->
            </div>
            <!-- 商品规格 -->
             <div class="product-sku" style="margin-top:0;border-top:1px solid #e4e4e4;
          border-bottom:1px solid #e4e4e4;" @click= "()=>visiblePopup.checkSku=true">
              <div>
                <span class="sku-select">规格</span>
                <span class="sku-info" v-if="!curcolorname">选择 颜色分类、尺码</span>
                <span class="sku-info" v-else>{{curcolorname}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{cursizename}}</span>
              </div>
              <span class="right-menu"></span>
              <div class="product-skuimg">
                <img v-for="(item,index) in colorarr" :key="index" :src="item.color_img">
                <span>共{{colorarr.length}}种颜色分类可选</span>
              </div>
            </div>
            <!-- 商品参数 -->
            <div class="product-sku" style="margin-top:0;" @click= "()=>visiblePopup.checkInfo=true">
              <div>
                <span class="sku-select">参数</span>
                <span class="sku-info">面料 成分含量…</span>
              </div>
              <span class="right-menu"></span>
            </div>

           
            <!-- 商品留言 -->

         
            <!-- 商家信息 -->

            <!-- 为你推荐 -->
            <div class="my-recommend">
              <div class="recommend-tip">
                <img src="~jd/images/xiangqing.png" alt="">
              </div>
              <div id="prodContent-container" v-html="productInfo.item_detailsimg"></div>
            </div>
            <!-- 为你推荐 -->
          </div>
      <!-- 商品 -->
      <!-- 评价 -->
    <!-- </mt-tab-container> -->
    <!-- 内容区 -->

    <!-- 底部导航栏 -->
    <div class="cart-concern-fixed">
      <div class="left">
        <div class="goods-part" @click= "$router.push('/index')">
          <i></i>
          <span>首页</span>
        </div>
        <!-- <div class="like-icon" @click= "favShop">
          <i></i>
          <span>关注</span>
        </div> -->
        <div class="shopping-cart" @click= "$router.push('/cart')">
          <em>4</em>
          <i></i>
          <span>购物车</span>
        </div>
      </div>
      <div class="right" @click= "addShopCart('cart')" style="background: #ff5527;">加入购物车</div>
      <div class="right" @click= "addShopCart('directBuy')">立即购买</div>
    </div>
    <!-- 底部导航栏 -->

    <!-- 返回顶部 -->
    <BackHead/>
    <!-- 返回顶部 -->
  
  </div>
</template>

<script>
  import {
    // TabContainer,
    // TabContainerItem,
    Swipe,
    Toast,
    SwipeItem,
    Popup
  } from 'mint-ui';
  import {
    getProduct,
    getShop,
    getCommentList
    // getRecommend
  } from '@/service/getData'
  // import LoadMore from 'common/loadMore';
  import BackHead from 'common/backHead';
  import wxapi from '@/utils/wxapi';
  
  export default {
    data() {
      return {
        visiblePopup: {
          checkSku: false,
          checkInfo: false,
        },
        colorarr:[],
        sizearr:[],
        checkcolorindex:null,
        checksizeindex:null,
        curcolorname:null,
        cursizename:null,
        checkId:null,
        shopnum:1,
        containerTab: 'mainLayout',
        detailTab: 'description',
        productInfo: {
          content:''
        },
        shopInfo: null,
        // commad: getRecommend,
        // recommendData: [],
        swipeIndex: {
          nowIndex: 1,
          total: 0
        },
        addType:null
      };
    },
    created: function () {
        
    },
    watch: {
      wcvisiblePopup:function(newvs,oldvs){
            if (newvs) {
                document.getElementsByTagName('html')[0].className='htmlover';
                document.body.className='htmlover';
              } else {
                document.getElementsByTagName('html')[0].className='htmlnoover';
                document.body.className='htmlnoover';
              }
              // 下面需要这两行代码，兼容不同浏览器
              document.body.scrollTop = this.pageScrollYoffset;
              window.scroll(0, this.pageScrollYoffset);
            }
    },
        
    components: {
      // TabContainer,
      // TabContainerItem,
      Swipe,
      SwipeItem,
      BackHead
    },

    computed: {
      wcvisiblePopup(){
          return this.visiblePopup.checkInfo;
        }
    },
methods: {
  wxRegCallback () {
  // 用于微信JS-SDK回调
  this.wxShareTimeline()
  this.wxShareAppMessage()
},
wxShareTimeline () {
  // 微信自定义分享到朋友圈
  let option = {
    title: '限时团购周 挑战最低价', // 分享标题, 请自行替换
    link: window.location.href.split('#')[0], // 分享链接，根据自身项目决定是否需要split
    imgUrl: this.productInfo.imgList[1], // 分享图标, 请自行替换，需要绝对路径
    success: () => {
      alert('分享成功')
    },
    error: () => {
      alert('已取消分享')
    }
  }
  // 将配置注入通用方法
  wxapi.ShareTimeline(option)
},
wxShareAppMessage () {
  // 微信自定义分享给朋友
  let option = {
    title: '限时团购周 挑战最低价', // 分享标题, 请自行替换
    desc: '限时团购周 挑战最低价', // 分享描述, 请自行替换
    link: window.location.href.split('#')[0], // 分享链接，根据自身项目决定是否需要split
    imgUrl: this.productInfo.imgList[1], // 分享图标, 请自行替换，需要绝对路径
    success: () => {
      alert('分享成功')
    },
    error: () => {
      alert('已取消分享')
    }
  }
  // 将配置注入通用方法
  wxapi.ShareAppMessage(option)
},
        
        handleChange(index) {
        this.swipeIndex.nowIndex = index + 1;
      },
       
      async checkSkufun(){
      
      },
      checkSkuOk(){
        
        this.visiblePopup.checkSku=false;
        if(this.checkId){
            if(this.addType==='cart'){
          this.$store.dispatch('SelectProduct', {
          item_id:this.$route.params.id,
          item_sku_id: this.checkId,
          num:this.shopnum
        }).then(response => {
          if(response.code==10000){
          return Toast({
            message: '加入购物车成功',
            position: 'bottom'
          })
          }else{
            Toast({
            message: response.msg,
            position: 'bottom'
            })
            return
          }
          
        })
        }else if(this.addType==='directBuy'){
          this.$router.push({path: '/createOrder',query: {id:this.checkId,number:this.shopnum,checkout_type:2}})
        }
        }
      },
      async addShopCart(addType) { //加入购物车
        this.addType=addType;
        if(this.checkId==null){
          this.visiblePopup.checkSku=true
          return
         }
        if(addType==='cart'){
          this.$store.dispatch('SelectProduct', {
          item_id:this.$route.params.id,
          item_sku_id: this.checkId,
          num:this.shopnum
        }).then(response => {
          if(response.code==10000){
          return Toast({
            message: '加入购物车成功'
      
          })
          }else{
            Toast({
            message: response.msg
           
            })
            return
          }
          
        })
        }else{
          this.$router.push({path: '/createOrder',query: {id:this.checkId,number:this.shopnum,checkout_type:2}})
        }
       
      },
      
      async initData() {
        // this.commentParam.ProductNo = this.$route.params.id;
        let Data = await getProduct({
         item_id: this.$route.params.id
        });
        if(Data.code!=10000){
          Toast({
            message: Data.msg
          })
          return
        }
        this.productInfo = Data.data;
        this.productInfo.imgList = JSON.parse(Data.data.img_list);
        this.productInfo.salesConsumerPrice = Data.data.sales_consumer_price;
        this.productInfo.salesPrice = Data.data.sales_price;
        this.productInfo.title =Data.data.title;
        this.productInfo.item_sku = Data.data.item_sku_b_o_list;
        this.productInfo.item_skulength =this.productInfo.item_sku.length;
        this.productInfo.item_detailsimg =this.productInfo.item_details_b_o.item_desc;
        this.productInfo.propertyList =JSON.parse(this.productInfo.item_details_b_o.property_list);
        this.swipeIndex.total =JSON.parse(Data.data.img_list).length;
        this.colorarr = this.rmSome(this.productInfo.item_sku,'color')
        this.sizearr = this.rmSome(this.productInfo.item_sku,'size')
      },
      colorcheckBtn(name,index){
          this.checkcolorindex=index;
          this.curcolorname=name;
          this.cursizename=null;
          // this.productInfo.item_sku.filter((item)=>{return item.color==name})
          this.sizearr =this.productInfo.item_sku.filter((item)=>{return item.color==name})
          this.checksizeindex=null;
          this.checkId=null;
       },
       sizecheckBtn(size,index){
         if(this.checkcolorindex==null){
           Toast({
            message: '请先选择颜色'
          })
          return;
         }
          this.checksizeindex=index;
          this.cursizename=size;
          let checkIdarr=this.productInfo.item_sku.filter((item)=>{return item.size==size&&item.color==this.curcolorname});
          this.checkId=checkIdarr[0].item_sku_id;
       },
       operationnum(operation){
         this.shopnum += operation;
         if(this.shopnum<1){
           this.shopnum =1;
         Toast({
            message: '宝贝不能再减少了哦'
          })
          return;
         }
       },
      rmSome(arr, key) {
          let tempObj = {}
          arr.forEach(item => {
              if (tempObj[item[key]]) {
                  return
              } else {
                  tempObj[item[key]] = item;
              }
          })
          return Object.values(tempObj)
          }
 
    }
    ,
    filters:{
        toafter(value){
            return value.substring(0, value.indexOf(':'));
        },
        tonext(value){
            return value.substring(value.indexOf(':')+1);
        },
        topriceafter(value){
            return value.toFixed(2).substring(0, value.toFixed(2).indexOf('.'));
        },
        topricenext(value){
            return value.toFixed(2).substring(value.toFixed(2).indexOf('.')+1);
        }
    },
    mounted: function () {
      wxapi.wxRegister(this.wxRegCallback)
      this.initData();
        
    }
  }

</script>
<style lang='scss' scoped>
@import '~assets/common/css/mixin.scss';
.checkSkupop{
     
      width: 100%;
        .checkSkuColortitleall{
          padding-right: 10px;
         @include flexbox(space-between,
            center,
            row,
            nowrap);
          span{
            height: 18px;
            width: 18px;
            background-image: url('~jd/images/product-detail-sprites-mjs.png');
            background-repeat: no-repeat;
            background-size: 100px 100px;
            background-position: -24px -12px;
          }  
        }
        .checkSkuColortitle{
        width: 100%;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
        color: #333;
        padding:0 $padding;
        }
        .skuColorlist{
          padding:0 $padding;
          @include flexbox(start,
            center,
            row,
            wrap);
            li{
              padding: 5px 17px;
              border: 1px solid #999;
              color: #333;
              border-radius: 14px;
              font-size: 13px;
              margin-right: 20px;
              margin-bottom: 10px;
            }
        }
        .skuSizelist{
          padding:0 $padding;
          @include flexbox(start,
            center,
            row,
            wrap);
            li{
              padding: 5px 17px;
              border: 1px solid #999;
              color: #333;
              border-radius: 14px;
              font-size: 13px;
              margin-right: 10px;
              margin-bottom: 10px;
            }
        }
        .skuNum{
          @include flexbox(space-between,
            center,
            row,
            nowrap);
            padding: $padding;
            margin-bottom: 26px;
            .left{
              font-size: 16px;
              color: #333;
            }
            .right {
                @include flexbox(space-between, center, row, nowrap);
                flex: initial;
                border-radius: 2px;
                border: 1px solid #999999;
                width: 2rem;
                .cut {
                  padding: 2px 0;
                  font-size: 14px;
                  text-align: center;
                  width: 30%;
                  height: .6rem;
                  position: relative;
                  cursor: pointer;
                  &:before {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 0;
                    background: #999999;
                    width: 1px;
                    height: 100%;
                  }
                  &:after {
                    content: '';
                    position: absolute;
                    left: calc(100%/2 - 5px);
                    top: 50%;
                    background: #999;
                    width: 40%;
                    height: 1px;
                  }
                }
                .add {
                  padding: 2px 0;
                  width: 30%;
                  height: .6rem;
                  font-size: 14px;
                  text-align: center;
                  position: relative;
                  cursor: pointer;
                  &:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    background: #999999;
                    width: 1px;
                    height: 100%;
                  }
                  &:after {
                    content: '+';
                    position: absolute;
                    left: calc(100%/2 - 2px);
                    top: calc(100%/2 - 8px);
                    font-size: 14px;
                    color: #999; // width: 50%;
                  }
                }
                .num-inp {
                  border: none;
                  outline: none;
                  text-align: center;
                  padding: 0 5px;
                  width: 40%;
                  font-size: 12px;
                }
              }
        }
        .popupOk{
          height: 50px;
          line-height: 50px;
          width: 100%;
          text-align: center;
          color: #fff;
          font-size: 18px;
          background: #ff2741
        }
        .productparameter{
          height: 44px;
          width: 100%;
          padding: 0 $padding;
          border-bottom:1px solid #e4e4e4;
          line-height: 44px;
          font-size: 14px;
          color: #333;
          span{
            margin-left: 15px;
            color: #999
          }
        }
    }
</style>
