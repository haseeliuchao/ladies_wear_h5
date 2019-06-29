<!-- product -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  /* 顶部导航栏 */
  .screen_subject{
      width: 8.8rem;
      padding: 12px 12px 4px;
      border-radius: 6px;
      position: fixed;
      bottom: 0;
      z-index: -10;
      background: #fff;
      .screen_subjectgoodimg{
        width: 100%;
      }
      .screen_subjecttext{
        @include flexbox(space-between,
      center,
      row,
      nowrap);
      padding: 10px 0;
      .screen_subjectprice{
        font-size: 17px;
        color: #333;
        font-weight: bold;
      }
      .screen_subjectname{
        // @include textoverflow(2);
                    font-size: 14px;
                    margin-top: 4px;
                    color: #333;
                    line-height: 20px;
                    width: 5.6rem;
      }
      img{
        height: 90px;
        width: 90px;
      }
      }
    }


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
    overflow: hidden;
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
          height: 10rem;
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
        .product-pricep{
          font-size:16px;
        }
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
    .product-shop {
      margin-top: 8px;
      background: #fff;
      padding: 15px 10px;
      @include flexbox(start,
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
.cart-shop-fixed{
    position: fixed;
    bottom: -1px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 7px 14px;
    background: #fff;
   @include flexbox(space-between,
    center,
    row,
    nowrap);
        div{
          width: 2.1rem;
          height: 34px;
          line-height: 34px;
          text-align: center;
          font-size: 18px;
          color: $red;
          border:1px solid $red;
          border-radius: 6px;
        }
  }
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
  .productSkuActive{
    color: $red!important;
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
    <!-- 分享选择弹窗 -->
    <mt-actionsheet :actions="actions" v-model="sheetVisible"> </mt-actionsheet>
     <div class="screen_subject" id='newImg'>
                <img :src="screenImgsrc|addImg" class="screen_subjectgoodimg">
      <div class="screen_subjecttext">
        <div>
          <p class="screen_subjectprice">¥{{screenPrice/100|TwoNum}}</p>
          <p class="screen_subjectname">{{screenTitle}}</p>
        </div>
        <img :src="'data:image/png;base64,'+screenQrcode">
        <!-- 'data:image/png;base64,'+ -->
      </div>
     </div>
    <!-- 分享引导popup -->
    <mt-popup v-model="visiblePopup.shareImg" style="background:rgba(0,0,0,.6);height: 100%;
    width: 100%;"  position="center" class="checkSkupop" >
    <div style="height: 100%;
    width: 100%;"  @click="visiblePopup.shareImg=false">
    <div style="width:8.8rem;position: absolute;left: 50%;margin-left: -4.4rem;top: 50%;margin-top: -6rem;">
      <img :src="screenUrl" alt="" style="width:8.8rem;" @click.stop="visiblePopup.shareImg=true">
      <div style="height:30px;width:1px;background:#fff;margin: -3px auto 4px;"></div>
      <p style="text-align:center;color:#fff;font-size:16px;">长按保存图片</p>
      </div>
     </div>
    </mt-popup>



    <!-- 颜色尺码选择popup -->
    <mt-popup v-model="visiblePopup.checkSku" :closeOnClickModal='true'  position="bottom" class="checkSkupop">
      <div class="checkSkuInfo">
            <div class="checkSkuInfomain" v-for="(item,index) in colorarr" :key="index" v-show="checkcolorindex == index">
              <img v-if="item.color_img" :src="item.color_img+'_230x230.jpg'">
              <img v-else :src="productInfo.index_img_url+'_230x230.jpg'">
                    <div class="checkSkuInfo-text">
                    <p class="checkSkuInfo-texttitle">{{productInfo.item_number}}&nbsp;&nbsp;{{productInfo.title}}</p>
                    <p class="checkSkuInfo-textprice">¥ {{item.sales_consumer_price/100.00}}</p>
                    </div>
            </div>
           <span class="closepop" @click= "closepopcheckSku"></span>
      </div>
      <div class="checkSkuColortitleall">
        <p class="checkSkuColortitle">请选择颜色：</p>
        <!-- ()=>{title='';visiblePopup.checkSku=false;} -->
        <span class="closepop" @click= "closepopcheckSku"></span>
      </div>
      <ul class="skuColorlist">
        <li  v-for="(item,index) in colorarr" v-on:click="colorcheckBtn(item.color,index)" v-bind:class="[checkcolorindex == index?'productActive':'']" :key="index">{{item.color}}
          <span class="itemAllnum" v-if="colorCur[index]">{{colorCur[index]}}</span>
          </li>
      </ul>
      <div style="border-top:1px solid #e4e4e4;
          border-bottom:1px solid #e4e4e4;">
      <p class="checkSkuColortitle">请选择尺寸和数量：</p>
          <div  v-for="(itemall,index) in colorarr" :key="index" v-show="index==checkcolorindex">
            <div class="skuNum" v-for="(item,index1) in sizearr[index]"  :key="index1">
                        <div class="left" v-bind:class="[item.number > 0?'productSkuActive':'']">
                          {{item.size}}
                        </div>
                        <div class="right">
                          <div class="cut" @click= "operationnum(index,-1,item,index1)"></div>
                          <input type="text" ref="dataNum" readonly='readonly' v-model="item.number" class="num-inp">
                          <div class="add" @click= "operationnum(index,1,item,index1)"></div>
                        </div>
            </div>
          </div>
      </div>
      <p class="checkSkuColortitle" style="line-height:28px;">已选：</p>
      <p class="checkSkuColortitle" v-for="(itemall,index) in colorarr" style="color:#ff2741;line-height:18px;" :key="index">
        <span v-if="colorCur[index]"><em>{{itemall.color}}：</em></span>
        <span v-for="(item,index1) in sizearr[index]"  :key="index1">
        <em v-if="item.number!=0">{{item.size}}/{{item.number}}件&nbsp;&nbsp;&nbsp;&nbsp;</em></span>
        </p>
      <!-- @click= "()=>{title='';visiblePopup.checkSku=false}" -->
      <div class="popupOk" @click= "checkSkuOk" style="margin-top:16px;">选好了</div>
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

    <!-- 上架成功popup -->
    <mt-popup v-model="visiblePopup.addSuccess" :closeOnClickModal='true' style="text-align: center;"  position="bottom" class="checkSkupop">
      <img src="~jd/images/addSuccess.png" alt="" style="
    margin-top: 18px;width:66%;">
    <p class="addSuccess-text">上架成功</p>
    <p class="addSuccess-textmin">邀请好友购买，可<br>
赚 <em>¥{{profit/100.00}}</em> 元起</p>
    <div class="addSuccess-share">
      <div @click="shareBooshare">
        <img src="~jd/images/share-app.png" alt="" style="width:50px;">
        <p>微信好友</p>
      </div>
      <div @click="shareBooshare">
        <img src="~jd/images/share-time.png" alt="" style="width:50px;">
        <p>朋友圈</p>
      </div>
    </div>
      <div class="popupOk" @click= "()=>{visiblePopup.addSuccess=false}" style="margin-top:8px;">取消</div>
    </mt-popup>



    <!-- 分享引导popup -->
    <mt-popup v-model="visiblePopup.shareBoo" style="background:none;" :closeOnClickModal='true'  position="top" class="checkSkupop">
       <img src="~jd/images/shareicon.png" alt="" style="margin-left: 18%;
    margin-top: 8px;width:76%;">
    </mt-popup>
    




          <div id="mainLayout">
            <!-- 商品轮播图 -->
            <div class="prouct-swiper">
              <mt-swipe @change="handleChange" :showIndicators="false" :stopPropagation="true" :prevent="true" :continuous="false" :auto="0"
                class="scroll-images">
                <mt-swipe-item v-for="(item,index) in infoImgList" :key="index">
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

                <span style="font-weight:bold;margin-left: -3px;" v-for="(item,index) in colorarr" :key="index" v-show="checkcolorindex == index">{{item.sales_consumer_price/100.00|topriceafter}}.{{item.sales_consumer_price/100.00|topricenext}}</span>
                
                <span style="margin-left:20px;text-decoration: line-through;color:#999;font-size:14px;"><em>原价</em> <em>&yen;</em><em style="font-size:15px;">{{productInfo.sales_price/100.00|topriceafter}}</em>.{{productInfo.sales_price/100.00|topricenext}}</span>
                </p>
                <span class="freight" style="font-size:13px;font-weight:normal"><em style="font-size:13px;font-weight:normal">运费</em> <em>&yen;</em><em>5</em>.00</span>
              </div>
              <div class="product-title-textbottom">
              <p class="product-name-text">{{productInfo.item_number}}&nbsp;&nbsp;{{productInfo.title}}</p>
              <p class="product-share" @click="visiblePopup.shareBoo=true">&nbsp;&nbsp;&nbsp;&nbsp;分享</p>
              </div>
              <!-- <p class="product-summary-text">{{productInfo.summary}}</p> -->
            </div>
            <!-- 商品信息 -->
            <!-- 商品服务 -->
            <div class="product-sku" >
              <div>
                <span class="sku-select">服务</span>
                <span class="sku-info">正品保障 细节实拍 专属客服</span>
              </div>
            </div>
            <!-- 商品规格 -->
             <div class="product-sku" style="margin-top:0;border-top:1px solid #e4e4e4;
          border-bottom:1px solid #e4e4e4;" @click= "()=>visiblePopup.checkSku=true">
              <div>
                <span class="sku-select">规格</span>
                <!-- v-if="!curcolorname" -->
                <span class="sku-info" >选择 颜色分类、尺码</span>
                <!-- <span class="sku-info" v-else>{{curcolorname}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{cursizename}}</span> -->
              </div>
              <span class="right-menu"></span>
              <div class="product-skuimg">
                <p>
                <em v-for="(item,index) in colorarr" :key="index" ><img  v-if="item.color_img" :src="item.color_img|addImgSize"></em>
                <span>共{{colorarr.length}}种颜色分类可选</span>
                </p>
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
             <div class="product-shop" v-if="productInfo.store_b_o">
               <img src="~jd/images/shop_icon.png" height="44px">
              <div style="margin-left:10px;">
                <span class="sku-select" style="color:#333;line-height: 26px;
    font-size: 15px;">{{productInfo.store_b_o.name}}</span><br>
                <span class="sku-info" style="font-size: 13px;line-height: 20px;">{{productInfo.store_b_o.address}}</span>
              </div>
            </div>
           
            <!-- 商品留言 -->
            <!-- 商家信息 -->

            <!-- 为你推荐 -->
            <div class="my-recommend">
              <div class="recommend-tip">
                <img src="~jd/images/xiangqing.png" alt="">
              </div>
              <div id="prodContent-container" v-html="productInfo.item_detailsimg"></div>
              <div v-for="(itemlay, index) in laylist" :key="index">{{itemlay}}</div>
            </div>
            <!-- 为你推荐 -->
          </div>
      <!-- 商品 -->
      <!-- 评价 -->
    <!-- </mt-tab-container> -->
    <!-- 内容区 -->

    <!-- 底部导航栏 -->
    <div class="cart-concern-fixed" v-if="!$route.query.distributor_id">
      <div class="left">
        <div class="goods-part" style="padding: 5px 0;border-right: 1px solid #e4e4e4;" @click= "$router.push('/index')">
          <i></i>
          <span>首页</span>
        </div>
        <!-- <div class="like-icon" @click= "favShop">
          <i></i>
          <span>关注</span>
        </div> -->
        <div class="shopping-cart" @click= "$router.push('/cart')">
          <em v-if="productInfo.shopping_cart_num&&productInfo.shopping_cart_num!=0">{{productInfo.shopping_cart_num}}</em>
          <i></i>
          <span>购物车</span>
        </div>
      </div>
      <div class="right" v-if="productInfo.item_status==1" @click= "addShopCart('cart')" style="background: #ff5527;">加入进货车</div>
      <div class="right" v-if="productInfo.item_status==1" @click= "addGood()">一键铺店</div>
      <!-- @click= "addShopCart('directBuy')" -->
      <!-- ()=>{visiblePopup.addSuccess=true} -->
      <div class="right" style="flex: 2;background: #b4b4b4;" v-if="productInfo.item_status==2" @click= "tipSend">商品已下架</div>
    </div>

    <div class="cart-shop-fixed" v-if="$route.query.distributor_id">
        <div @click= "()=>$router.push({path:'/goodedit/'+productInfo.item_id,query: {shopId:$route.query.distributor_id}})">编辑</div>
        <div @click= "lowerShelf(productInfo.item_status)" v-if="productInfo.item_status==1">下架</div>
        <div @click= "upperShelf(productInfo.item_status)" v-if="productInfo.item_status!=1">上架</div>
        <div @click= "selfBuy" style="background: #ff5527;border:1px solid #ff5527;color:#fff">自己买</div>
        <div @click="showactionsheet()" style="background: #ff2741;border:1px solid #ff2741;color:#fff">去推广</div>
    </div>
    <!-- 底部导航栏 -->

    <!-- 返回顶部 -->
    <BackHead/>
    <!-- 返回顶部 -->
  
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
  import {
    // TabContainer,
    // TabContainerItem,
    Swipe,
    Toast,
    SwipeItem,
    Popup,Actionsheet
  } from 'mint-ui';
  import {
    getProduct,
    getShop,
    addProduct,
    getCommentList,
    getShopInfo,
    lowerShelfgood,
    upperShelfgood 
  } from '@/service/getData'
  import BackHead from 'common/backHead';
  import {
    isWeiXin
  } from '@/utils/mixin';
  import Vue from 'vue'
Vue.component(Actionsheet.name, Actionsheet);
  export default {
    data() {
      return {
        visiblePopup: {
          checkSku: false,
          checkInfo: false,
          shareBoo:false,
          addSuccess:false,
          shareImg:false,
        },
       
        laylist :[1],
        cartnum:null,
        colorCur:[],
        colorarr:[],
        sizearrrmSome:[],
        sizearr:[],
        checkcolorindex:0,
        colorcheckBtnBoo:[],
        checksizeBtnBoo:[],
        checksizeindex:[],
        curcolorname:null,
        cursizename:null,
        checkId:null,
        checkIdnums:[],
        shopnum:[],
        containerTab: 'mainLayout',
        detailTab: 'description',
        productInfo: {
          item_detailsimg:null
        },
        infoImgList:[],
        shopInfo: null,
        // commad: getRecommend,
        // recommendData: [],
        swipeIndex: {
          nowIndex: 1,
          total: 0
        },
        addType:null,
        profit:0,
        distributorId:null,
        uppershow:false,
        screenUrl: "http://img.chaochujue.cn/ICON/2019/5/5/share1561097371087.png",
        screenImgsrc:null,
        screenTitle:null,
        screenPrice:null,
        screenQrcode:null,
        screenScrollTop:null,
        actions: [{
              name: '发送好友',
              method : this.getCamera	// 调用methods中的函数
          }, {
            name: '生成卡片保存分享', 
            method : this.getLibrary	// 调用methods中的函数
          }],
          sheetVisible: false
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
            },
            addSuccessvisiblePopup:function(newvs,oldvs){
             if(newvs==true){
                this.$wxShare({title: '这款衣服我觉得非常适合你，快来看看吧',desc: this.productInfo.title,link:''+process.env.API_ROOT+'/api/redirect?path='+BASE64.encoder('/productToC/'+this.productInfo.item_id+'?distributor_id='+this.distributorId)+'',imgUrl: this.productInfo.index_img_url})
             }else{
               this.$wxShare({title: '这款衣服我觉得非常适合你，快来看看吧',desc: this.productInfo.title,link:''+process.env.API_ROOT+'/api/redirect?path='+BASE64.encoder(location.href.split("#")[1])+'',imgUrl: this.productInfo.index_img_url})          
             }
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
        },
        addSuccessvisiblePopup(){
          return this.visiblePopup.addSuccess;
        }
    },
methods: {
       async showactionsheet(){
        this.sheetVisible=true;
        this.screenImgsrc=this.productInfo.index_img_url;
        this.screenTitle=this.productInfo.title;
        this.screenPrice=this.productInfo.sales_consumer_price;
        this.screenQrcode=this.productInfo.qrcode;
        this.screenUrl="http://img.chaochujue.cn/ICON/2019/5/5/share1561097371087.png";
        
      },
      actionSheet: function(){
      this.sheetVisible = true;
      },
      getCamera: function(){
        this.visiblePopup.shareBoo=true;
      },
      getLibrary: function(){
        this.screenScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        this.doScreeenShots();
        this.visiblePopup.shareImg=true;
      },

   doScreeenShots() {
          const _this = this
          setTimeout(() => {
               // 创建一个新的canvas
              // const _canvas = _this.$refs.cutScreen.HTMLElement;
              const _canvas = document.getElementById('newImg');;

             // 此处用于解决截图不清晰问题，将生成的canvas放大，然后再填充到原有的容器中就会清晰
              const width = _canvas.offsetWidth; 
              const height = _canvas.offsetHeight; 
              const canvas2 = document.createElement('canvas');
              const scale = 2;
              canvas2.width = width * scale;
              canvas2.height = height * scale;
              const context1 = canvas2.getContext('2d')
              if(context1) {
                context1.scale(scale, scale);
              }
              const opts = {
                    scale,
                    canvas: canvas2,
                    // logging: true, //日志开关，便于查看html2canvas的内部执行流程
                    width,
                    height,
                    // 【重要】开启跨域配置
                    useCORS: true 
                };
              html2canvas(_canvas,opts).then((canvas) => {
                  const context = canvas2.getContext('2d');
                  if(context) {
                      context.scale(2,2);
                      context.mozImageSmoothingEnabled = false;
                      context.webkitImageSmoothingEnabled = false;
                      context.imageSmoothingEnabled = false;
                  }
                  // canvas转换成url，然后利用a标签的download属性，直接下载，绕过上传服务器再下载
                  _this.screenUrl = canvas.toDataURL()
                  document.documentElement.scrollTop = document.body.scrollTop = _this.screenScrollTop;
              });
          },1000)
      },
      shareBooshare(){
         this.visiblePopup.shareBoo=true;          
      }, 
      handleChange(index) {
        this.swipeIndex.nowIndex = index + 1;
      },
      checkSkuOk(){
        this.visiblePopup.checkSku=false;
        var that=this;
        if(this.checkIdnums.length>0){
          if(this.addType==='cart'){
          this.$store.dispatch('SelectProduct', {
          item_id:this.$route.params.id,
          item_sku_info_json: JSON.stringify(this.checkIdnums)
        }).then(response => {
          if(response.code==10000){
            for(var i=0;i<that.sizearrrmSome.length;i++){
                 that.sizearrrmSome[i].number=0
            }
            that.checkIdnums=[]
            that.colorCur=[];
            this.productInfo.shopping_cart_num+=1;
          return Toast({duration: 1000,
            message: '加入购物车成功',
            position: 'center'
          })
          }else if(response.code==20025){
          }else{
            Toast({duration: 1000,
            message: response.msg,
            position: 'center'
            })
            return
          }
          
        })
        }else if(this.addType==='directBuy'){
          this.$router.push({path: '/createOrder',query: {ids:JSON.stringify(this.checkIdnums),checkout_type:2}})
        }
        }
      },
      async addShopCart(addType) { //加入购物车
        this.addType=addType;
        var that=this;
        if(this.checkIdnums.length==0){
          this.visiblePopup.checkSku=true
          return
         }
        if(addType==='cart'){
          this.$store.dispatch('SelectProduct', {
          item_id:this.$route.params.id,
          item_sku_info_json: JSON.stringify(this.checkIdnums)
        }).then(response => {
          if(response.code==10000){
            for(var i=0;i<that.sizearrrmSome.length;i++){
                 that.sizearrrmSome[i].number=0
            }
            that.checkIdnums=[];
            that.colorCur=[];
            this.productInfo.shopping_cart_num+=1;
          return Toast({duration: 1000,
            message: '加入购物车成功',
            position: 'center'
          })
          }else if(response.code==20025){
          }else{
            Toast({duration: 1000,
            message: response.msg,
            position: 'center'
            })
            return
          }
          
        })
        }else{
          this.$router.push({path: '/createOrder',query: {ids:JSON.stringify(this.checkIdnums),checkout_type:2}})
        }
       
      },
      closepopcheckSku(){
        this.visiblePopup.checkSku=false;
        for(var i=0;i<this.sizearrrmSome.length;i++){
          this.sizearrrmSome[i].number=0
        }
        this.colorCur=[];
        this.checkIdnums=[];
      },
      tipSend(){
        Toast({duration: 1000,
            message: "此商品已下架"
          })
      },
      async initData() {
        this.cartnum = window.sessionStorage.cartnum!=undefined ? window.sessionStorage.cartnum:0;
        let sandObj={}
        if(this.$route.query.distributor_id){
            sandObj={
              item_id: this.$route.params.id,
              distributor_id: this.$route.query.distributor_id
            }
        }else{
          sandObj={item_id: this.$route.params.id}
        }
        let Data = await getProduct(sandObj);
        if(Data.code!=10000){
          Toast({duration: 1000,
            message: Data.msg
          })
          return
        }
        // this.infoImgList.push(Data.data.index_img_url)
        this.infoImgList = JSON.parse(Data.data.img_list);
        this.productInfo = Data.data;
        
        this.infoImgList = JSON.parse(Data.data.img_list);
        if(this.$route.query.distributor_id){
        let ShopInfoData = await getShopInfo({
        });
        if(ShopInfoData.code!=10000){
          Toast({duration: 1000,
            message: ShopInfoData.msg
          })
          return
        }
        this.distributorId=ShopInfoData.data.distributor_id;
        this.$wxShare({title: '这款衣服我觉得非常适合你，快来看看吧',desc: this.productInfo.title,link:''+process.env.API_ROOT+'/api/redirect?path='+BASE64.encoder('/productToC/'+this.productInfo.item_id+'?distributor_id='+this.$route.query.distributor_id)+'',imgUrl: this.productInfo.index_img_url})
        }else{
        this.$wxShare({title: '这款衣服我觉得非常适合你，快来看看吧',desc: this.productInfo.title,link:''+process.env.API_ROOT+'/api/redirect?path='+BASE64.encoder(location.href.split("#")[1])+'',imgUrl: this.productInfo.index_img_url})          
        }
        this.productInfo.salesConsumerPrice = Data.data.sales_consumer_price;
        this.productInfo.salesPrice = Data.data.sales_price;
        this.productInfo.title =Data.data.title;
        this.productInfo.item_sku = Data.data.item_sku_b_o_list;
        this.productInfo.item_skulength = this.productInfo.item_sku ? this.productInfo.item_sku.length : 0;
        this.productInfo.propertyList =JSON.parse(this.productInfo.item_details_b_o.property_list);
        this.swipeIndex.total =JSON.parse(Data.data.img_list).length;
        this.colorarr = this.productInfo.item_sku? this.rmSome(this.productInfo.item_sku,'color') :[];
        this.sizearrrmSome = this.productInfo.item_sku;
        // this.distributorId=Data.data.distributor_b_o.distributor_id;
        for(var i=0;i<this.colorarr.length;i++){
          this.sizearr[i]=[];    
          this.shopnum[i]=[];
          for(var j=0;j<this.sizearrrmSome.length;j++){
            if(this.colorarr[i].color==this.sizearrrmSome[j].color){
              this.sizearr[i][this.sizearr[i].length]=this.sizearrrmSome[j];
               this.shopnum[i][this.sizearr[i].length]=0;
            }  
          }
        } 
        
       

          var _this =this
          window.addEventListener('scroll',function(){
              var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
              if(scrollTop>=10){
                _this.laylist = [2]
              }
              },true)


      },
      colorcheckBtn(name,index){
          this.curcolorname=name;
          this.cursizename=null;
          this.checkcolorindex=index;
       },
       operationnum(index,operation,item,index1){
          item.number+= operation;
           if(item.number<0){
            item.number =0;
          Toast({duration: 1000,
              message: '宝贝不能再减少了哦'
            })
            return;
          }

          let numall=0
          for(var i=0;i<this.sizearr[index].length;i++){
             numall+=this.sizearr[index][i].number
          }
          let checkIdnumsobj={ "item_sku_id":item.item_sku_id , "number":item.number}
          let pushBoo=false;
          for(var i=0;i< this.checkIdnums.length;i++){
            if(checkIdnumsobj.item_sku_id==this.checkIdnums[i].item_sku_id){
              this.checkIdnums[i].number=item.number;
              pushBoo=true;
            }
            if(item.number==0&&item.item_sku_id==this.checkIdnums[i].item_sku_id){
              this.checkIdnums.splice(i, 1);
              
            }
          }
          if(pushBoo==false){
            this.checkIdnums.push(checkIdnumsobj)
          }
          this.colorCur[index]=numall
       },
       async addGood(){
         let Data = await addProduct({
         item_id: this.$route.params.id
        });
        if(Data.code!=10000){
          if(Data.code==20025){
            return
          }else if(Data.code==40003){
             this.$router.push({path: '/shopApplicate'});
          }else{
             Toast({duration: 1000,
             message: Data.msg
             })
             return
          }
        }
        this.profit=Data.data.kezuanshangxian;

        let ShopInfoData = await getShopInfo({
        });
        if(ShopInfoData.code!=10000){
          Toast({duration: 1000,
            message: ShopInfoData.msg
          })
          return
        }
        this.distributorId=ShopInfoData.data.distributor_id;
        this.visiblePopup.addSuccess=true;
       },
       async lowerShelf(state){
         let Data = await lowerShelfgood({
         distributor_item_id: this.$route.query.distributor_item_id
        });
        if(Data.code!=10000){
          if(Data.code==20025){
            return
          }else{
             Toast({duration: 1000,
             message: Data.msg
             })
             return
          }
        }
        Toast({duration: 1000,
             message: '下架成功'
        })
        this.productInfo.item_status=2;
       },
       async upperShelf(state){
        //  if(state!=2){
        //    Toast({duration: 1000,
        //      message: '该商品已售罄'
        //      })
        //      return
        //  }
         let Data = await upperShelfgood({
         distributor_item_id: this.$route.query.distributor_item_id
        });
        if(Data.code!=10000){
          if(Data.code==20025){
            return
          }else{
             Toast({duration: 1000,
             message: Data.msg
             })
             return
          }
        }
        Toast({duration: 1000,
             message: '上架成功'
        })
        this.productInfo.item_status=1;
       },
       selfBuy(){
         this.$router.push({path: '/product/'+this.productInfo.item_id});
         this.initData();
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
 
    },
    updated:function(){
      // this.infoImgList = JSON.parse( this.productInfo.img_list);
      this.productInfo.item_detailsimg =this.productInfo.item_details_b_o.item_desc;
    }
    ,
    filters:{
        toafter(value){
            if(!value){
              value=0;
            }else{
              value=value
            }
            return value.substring(0, value.indexOf(':'));
        },
        tonext(value){
          if(!value){
              value=0;
            }else{
              value=value
            }
            return value.substring(value.indexOf(':')+1);
        },
        topriceafter(value){
          if(!value){
              value=0;
            }else{
              value=value
            }
            return value.toFixed(2).substring(0, value.toFixed(2).indexOf('.'));
        },
        topricenext(value){
          if(!value){
              value=0;
            }else{
              value=value
            }
            return value.toFixed(2).substring(value.toFixed(2).indexOf('.')+1);
        },
        addImgSize(value){
          if(value==''||value==null){
            return;
          }
          if(value.indexOf("vvic.com")!=-1){
            return value+'?x-oss-process=image/resize,mfit,h_40,w_40';
          }
          if(value.indexOf("alicdn.com")!=-1){
            return value+'_40x40.jpg';
          }
        },
        addImg(value){
          if(value==''||value==null){
            return;
          }
          if(value.indexOf("img1.vvic.com")!=-1){
            return value.replace('https://img1.vvic.com','http://param.iask.in/vvic/img1');
          }
          if(value.indexOf("img.vvic.com")!=-1){
            return value.replace('https://img.vvic.com','http://param.iask.in/vvic/img');
          }
          if(value.indexOf("alicdn.com")!=-1){
            return value;
          }
        }
    },
    mounted: function () {
       this.initData();
    }


  }

</script>
<style lang='scss' scoped>
@import '~assets/common/css/mixin.scss';
.checkSkupop{
      width: 100%;
        .addSuccess-text{
          text-align: center;
          color: #333;
          font-size: 18px;
          line-height: 42px;
        }
        .addSuccess-textmin{
          text-align: center;
          color: #333;
          font-size: 15px;
          line-height: 22px;
          margin-bottom: 16px;
          em{
            font-size: 18px;
            font-weight: bold;
          }
        }
        .addSuccess-share{
          @include flexbox(space-between,
            center,
            row,
            nowrap);
            padding: 24px 40px;
            border-top:1px solid #e4e4e4;

            div{
              width: 50%;
              text-align: center
            }
        }

        .checkSkuInfo{
          @include flexbox(space-between,
            center,
            row,
            nowrap);
            padding: 10px;
            position: relative;
            height: 90px;
          span{
            height: .56rem;
            width: .56rem;
            background: url('~jd/images/close.png') no-repeat;
            background-size: 100%;
            position: absolute;
            right: 10px;
            top: 10px;
          }
          .checkSkuInfomain{
             @include flexbox(start,
            center,
            row,
            nowrap);
            top: -20px;
            position: absolute;
            img{
              height: 100px;
              width: 100px;
              border-radius: 6px;
            }
            .checkSkuInfo-text{
              width: 5.4rem;
              margin-left: 10px;
                  margin-top: 18px;
              .checkSkuInfo-texttitle{
                 @include textoverflow(2);
                    font-size: 13px;
                    color: #333;
                    line-height: 20px;
                    height: 40px;
              }
              .checkSkuInfo-textprice{
                font-size: 16px;
                color: $red;
                font-weight: bold;
                margin-top: 6px;
              }
            }
          }  
        }
        .checkSkuColortitleall{
          padding-right: 10px;
         @include flexbox(space-between,
            center,
            row,
            nowrap);
        }
        .checkSkuColortitle{
        width: 100%;

        line-height: 36px;
        font-size: 16px;
        color: #333;
        padding:0 $padding;
        span{
          font-size: 14px;
        }
        }
        .skuColorlist{
          padding:0 $padding;
          @include flexbox(start,
            center,
            row,
            wrap);
            li{
              padding: 4px 16px;
              border: 1px solid #999;
              color: #333;
              border-radius: 6px;
              font-size: 13px;
              margin-right: 20px;
              margin-bottom: 10px;
              position: relative;
              span{
                position: absolute;
                right: -10px;
                top: -10px;
                padding: 2px 4px;
                font-size: 12px;
                background: #ff5527;
                border-radius: 12px;
                color: #fff;
              }
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
            padding: 8px 10px;
            // margin-bottom: 26px;
            .left{
              font-size: 16px;
              color: #333;
              min-width: 70%;
              text-align: left;
              margin-left: 10px;
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
          // height: 44px;
              width: 100%;
    padding: 9px 10px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 22px;
    
    font-size: 14px;
    color: #333;
          span{
            margin-left: 15px;
            color: #999
          }
        }
    }
</style>
