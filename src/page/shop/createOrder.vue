<!-- createdOrder -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .pagePay {
    .my-header {
      padding: $padding;
      background: #fff;
      @include flexbox(space-between, center, row, nowrap);
      border-bottom: 1px solid #eee;
      .back {
        display: block;
        width: .56rem;
        height: .56rem;
        background: url('~jd/images/close.png') no-repeat;
        background-size: 100%;
      }
      strong {
        font-size: 18px;
        font-weight: normal;
        color: #333;
      }
      .myMsg {
        display: block;
        background: url('~jd/images/searchIcon.png') no-repeat;
        background-size: 600% 100%;
        height: .65rem;
        width: .65rem;
        opacity: 0;
        background-position: -2.6rem 0;
      }
    }
    .payContainer {
      padding: $padding $padding 100px $padding;
       .ordertop-address{
          padding: $padding;
          background: #fff;
          color: #333;
          border-radius: 6px;
          @include flexbox(space-between, center, row, nowrap);
      .ordertop-addressleft{
        width: 84%;
        .address-username{
                font-size: 14px;
                line-height: 25px;
              }
              .address-text{
                font-size: 13px;
                line-height: 18px;
              }
      }
      .ordertop-addressright{
        width: 16%;
        color: #999;
        font-size: 13px;
        text-align: right
      }
      
    }

      .addressContainer {
        background: #fff;
        .addressDefault {
          padding: $padding;
          background: url('~jd/images/addressbg.png') repeat-x bottom;
          background-size: 64px 5px;
          position: relative;
        }
        .arrow-right {
          display: block;
          position: absolute;
          right: 10px;
          margin-top: -1.1rem;
          width: .45rem;
          height: .45rem;
          background: url('~jd/images/arrow-right.png') no-repeat;
          background-size: 100%;
        }
        .cell {
          strong {
            font-size: 16px;
          }
          font-size: 14px;
          padding: 5px 0;
        }
        .defaultIcon {
          color: $red;
          border: 1px solid $red;
          border-radius: 5px;
          padding: 0px 3px;
        }
        .positionIcon {
          display: inline-block;
          background: url('~jd/images/product-detail-sprites-mjs.png') no-repeat;
          width: 25px;
          height: 25px;
          background-position: -17px 2px;
          background-size: 150px;
          vertical-align: -8px;
        }
      }
      .venderOrderList {
        margin-top: $margin;
        .venderItem {
          padding: $padding;
          border-bottom: 1px solid #eee;
          background: #fff;
          @include flexbox(flex-start,
          center,
          row,
          nowrap);
          img {
            max-width: 1.6rem;
            max-height: 1.6rem;
            margin: 10px;
            padding-right: 10px;
          }
          .orderInfo {
            @include flexbox(space-between,
            flex-start,
            column,
            wrap);
            font-size: 16px;
            .title {
              @include textoverflow(1);
              margin-bottom: 25px;
            }
            .price {
              @include flexbox(space-between,
              center,
              row,
              nowrap);
              width: 100%;
              .fee {
                color: $red;
              }
              .count {
                font-size: 14px;
                color: #999;
              }
            }
          }
        }
      }
    }
    .payOnline {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      background: #fff;
      font-size: 17px;
      @include flexbox(space-between,
      center,
      row,
      nowrap);
      >span{
        padding-left: $padding;
        font-size: 16px;
        color: #333
      }
      strong {
        font-weight: normal;
        font-size: 14px;
        span{
          font-size: 12px;
          color: #ff2741;
          
        }
        em{
          color: #ff2741;
        }
      }
      .payBtn {
        width: 40%;
        height: 100%;
        color: #fff;
        padding: 15px;
        background: $red;
        text-align: center;
      }
    }
  }

  .paymentLoading {
    position: fixed;
    @include flexbox(center,
    center,
    row,
    nowrap);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      background: rgba(0, 0, 0, .6);
      width: 3rem;
    }
  }
.order-list {
        // background: #fff;
        margin-top: $margin;
        .order-item {
          margin-top: 10px;
          background: #fff;
         
          border-radius: 6px;
          padding: $padding 0 5px;
          .order-top {
            padding: $padding;
            // border-bottom: 1px solid #e4e4e4;
            @include flexbox(space-between,
            center,
            row,
            nowrap);
            .left {
              text-align: left;
              img {
                width: 15px;
                height: 15px;
                vertical-align: bottom;
              }
              span {
                font-size: 15px;
                color: #666;
                // margin-left: 5px;
              }
            }
            .right {
              .order-status {
                color: $red;
                font-size: 15px;
              }
            }
          }
          .order-product-list {
            @include flexbox(flex-start,
            flex-start,
            column,
            wrap);
            border-bottom: 1px solid #e4e4e4;
            .order-product-item {
              padding: $padding;
              width: 100%;
              >div {
                @include flexbox(flex-start,
                flex-start,
                row,
                nowrap);
                width: 100%;
                img {
                  max-width: 90px;
                  max-height: 90px;
                  // border: 1px solid #eee;
                  border-radius: 6px;
                }
                .product-info {
                  margin-left: $margin;
                  .prod-price {
                    font-size: 14px;
                    >span{
                      color: #999;
                    }
                    strong {
                      font-weight: normal;
                      font-size: 14px;
                      span{
                        font-size: 12px;
                        color: $red;
                        
                      }
                      em{
                        color: $red;
                        font-style: normal
                      }
                    }
                    @include flexbox(space-between,
                    center,
                    row,
                    nowrap);
                  }
                  p {
                    @include textoverflow(3);
                    font-size: 13px;
                    margin: 4px 0;
                    color: #333;
                    line-height: 20px;
                  }
                  .prodsku-info{
                    color: #666;
                    font-size: 12px;
                  }

                }
              }
            }
          }

          .order-product-detail{
           padding: 6px 10px 10px;
           background: #fff;
           p{
             @include flexbox(space-between,
              center,
              row,
              nowrap);
              font-size: 15px;
             line-height: 26px;
              strong{
                font-weight: normal;
                      font-size: 14px;
                      span{
                        font-size: 12px;
                        color: $red;
                        
                      }
                      em{
                        color: $red;
                        font-style: normal
                      }
              }
           }
           .order-product-detailone{
             color: #333
           }
           .order-product-detailtwo{
             color: #666;
             strong{
                
                      span{
                       
                        color: #666;
                        
                      }
                      em{
                        color: #666;
                      
                      }
              }
           }
          }
          
          .order-sku {
            background: #fff;
            padding: 8px $padding;
            text-align: right;
            font-size: $subtitle;
            // border-bottom: 1px solid #eee;
            // color: #333;
            span{
              font-size: 15px;
              color: #333;
              em{
                color: $red;
                margin-left: 6px;
              }
            }
            strong {
                      font-weight: normal;
                      font-size: 14px;
                      span{
                        font-size: 12px;
                        color: $red;
                        
                      }
                      em{
                        color: $red;
                        font-style: normal
                      }
                    }
          }
          .order-btn-group {
            @include flexbox(flex-end,
            center,
            row,
            nowrap);
            padding: 5px $padding 16px;
            width: 10rem;
            >span {
              padding: 4px 10px;
              color: $red;
              font-size: 14px;
              border: 1px solid $red;
              border-radius: 3px;
              margin-left: 15px;
            }
          }
        }
      }
  .paymentContainer {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .4);
    @include flexbox(center,
    center,
    row,
    nowrap);
    .content {
      width: 85%;
      background: #fff;
      border-radius: 10px;
      >button {
        width: 60%;
        margin: 20px auto;
        background: $red;
      }
      >a {
        margin: 5px 0;
        padding: 0 15px;
      }
      .title {
        @include flexbox(center,
        center,
        row,
        nowrap);
        position: relative;
        padding: 15px;
        border-bottom: 1px solid #eee;
        strong {
          font-size: 20px;
        }
        .closeIcon {
          display: block;
          background: url('~jd/images/product-detail-sprites-mjs.png') no-repeat;
          width: 25px;
          height: 25px;
          background-position: -38px -19px;
          background-size: 150px;
          vertical-align: -8px;
          position: absolute;
          left: 10px;
        }
      }
      .paymentInfo {
        padding: 15px;
        border-bottom: 1px solid #eee;
        @include flexbox(flex-start,
        center,
        column,
        wrap);
        font-size: 20px;
        span {}
        strong {
          font-size: 40px;
          font-weight: 400;
          margin: 10px 0 0;
        }
      }
    }
  }
  .noScroll {
  overflow-y: hidden;
  }
  .addressList {
    .my-header {
      padding: $padding;
      background: #fff;
      @include flexbox(space-between,
      center,
      row,
      nowrap);
      border-bottom: 1px solid #eee;
      .back {
        display: block;
        width: .65rem;
        height: .65rem;
        background: url('~jd/images/arrow-left.png') no-repeat;
        background-size: 100%;
      }
      strong {
        font-size: 18px;
        font-weight: normal;
        color: #333;
      }
      .myMsg {
        display: block;
        background: url('~jd/images/searchIcon.png') no-repeat;
        background-size: 600% 100%;
        height: .65rem;
        width: .65rem;
        opacity: 0;
        background-position: -2.6rem 0;
      }
    }
    .addNewAddressbtn {
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      padding: 14px 0;
      background: $red;
      font-size: 18px;
      color: #fff;
    }
    
    .address-container {
      height: 300px;
      // overflow: auto;
      overflow-y: scroll;
  /* ios需要下面这个属性 */
  -webkit-overflow-scrolling: touch;
      .address-item {
        // @include flexbox(space-between,
        // flex-start,
        // column,
        // wrap);
        @include flexbox(space-between,
        center,
        row,
        nowrap);
        background: #fff;
        border-bottom: 1px solid #e4e4e4;
        // padding-left: 60px;
        position: relative;
        .address-itemleft{
           @include flexbox(start,
        center,
        row,
        wrap);
        padding-left: $padding;
        padding-right: $padding;
            >p {
          width: 100%;
           span{
             font-size: 12px;
             background: #ffe6df;
             color: $red;
             padding: 3px 6px;
             border-radius: 4px;
             margin-left: $margin;
           }
          }
        
        }
        .address-itemright{
              width: 1.34rem;
              text-align: center;
              border-left: 1px solid #e4e4e4;
              img{
                margin-bottom: 5px;
                height: 15px;
              }
              p{
                color: #999;
                font-size: 12px;
              }
        }
        
        .name {
          font-size: 14px;
          color: #333;
          padding: $padding 0;
          @include textoverflow(1);
        }
        .address {
          font-size: 13px;
          color: #333;
          padding: 0 0 15px;
          @include textoverflow(2);
          
          line-height: 18px;
        }
        .address-status {
          width: 100%;
          @include flexbox(space-between,
          center,
          row,
          nowrap);
          padding: $padding 0;
          .left {
            @include flexbox(flex-start,
            center,
            row,
            nowrap);
            flex: initial;
            font-size: $subtitle;
            letter-spacing: 1px;
            color: $gray;
            i {
              vertical-align: middle;
              margin-right: $margin;
            }
          }
          .right {
            @include flexbox(space-between,
            center,
            row,
            nowrap); // width: 4rem;
            flex: initial;
            font-size: $subtitle;
            color: $gray;
            letter-spacing: 1px;
            >div {
              margin-right: 10px;
              @include flexbox(space-between,
              center,
              row,
              nowrap);
              i {
                margin-right: 5px;
              }
            }
            .edit {
              .edit-address-icon {
                display: block;
                @include wh(16px,
                16px);
                @include bg('~jd/images/edit.png');
              }
            }
            .delect {
              .delect-address-icon {
                display: block;
                @include wh(16px,
                16px);
                @include bg('~jd/images/edit.png');
              }
            }
          }
        }
      }
    }
  }
 

</style>
<style lang="scss">
  .paymentContainer .mint-cell-wrapper{
    background-image: none;
  }
</style>
<template>
  <div class="pagePay">
    
    <!-- <div class="payContainer">
      <div class="addressContainer" v-if="defaultAddress" @click="()=>visiblePopup.selectedAdressVisible=true">
        <div class="addressDefault">
          <div class="cell">
            <strong>{{defaultAddress.nickName}} {{defaultAddress.Phone}}</strong>
            <span class="defaultIcon" v-if="defaultAddress.Selected===1">默认</span>
          </div>
          <div class="cell">
            <i class="positionIcon"></i>{{defaultAddress.Province + defaultAddress.City + defaultAddress.Area}}&nbsp;&nbsp;{{ defaultAddress.Address}}</div>
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="venderOrderList" v-if="confirmSelectedProduct">
        <div class="venderItem" v-for="(item,index) in confirmSelectedProduct" :key="index">
          <img :src="item.product.image_url[0].url" alt="">
          <div class="orderInfo">
            <p class="title">{{item.product.productName}}</p>
            <div class="price">
              <span class="fee">&yen;
                <strong>{{item.product.price}}</strong>
              </span>
              <span class="count">x {{item.counter}}</span>
            </div>
          </div>
        </div>
      </div>
      <p v-else style="text-align:center;padding:15px 0; color:#999;font-size:17px;">
        暂无数据
      </p>
    </div> -->

    <div class="payContainer">
      <!-- <div class="addressContainer" @click="()=>visiblePopup.selectedAdressVisible=true">
        <div class="addressDefault">
          <div class="cell">
            <strong>张三三 18146546556</strong>
            <span class="defaultIcon">默认</span>
          </div>
          <div class="cell">
            <i class="positionIcon"></i>广东省 云浮市 云安县 文明街道 福光小区60幢3
单元3号301室</div>
          <i class="arrow-right"></i>
        </div>
      </div> -->
      <div class="ordertop-address" @click="()=>visiblePopup.selectedAdressVisible=true">
        <div class="ordertop-addressleft">
        <p class="address-username">张三三<em style="margin-left:12px;font-size:12px;">18312345678</em></p>
        <p class="address-text">广东省 云浮市 云安县 文明街道 福光小区60幢3单元3号301室</p>
        </div>
        <p class="ordertop-addressright">
          修改 >
        </p>
      </div>

      <div class="all-order">
          <div class="order-list">
            <div class="order-item">
              <div class="order-product-list">
                <div class="order-product-item">
                  <div>
                    <img src="https://laquimage.b0.upaiyun.com/activity/2019/4/14/img1555229165205_344.jpg!232x232">
                    <div class="product-info">
                      <p class="prod-name">LACOSTE L!VE（法国鳄鱼）女士简约通勤条T恤店</p>
                      <p class="prodsku-info">颜色 红色   尺寸 M</p>
                      <p class="prod-price">
                        <strong><span>&yen;</span><em>399</em><em style="font-size:12px;">.99</em></strong>
                        <span>x2</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="order-product-item">
                  <div>
                    <img src="https://laquimage.b0.upaiyun.com/activity/2019/4/14/img1555229165205_344.jpg!232x232">
                    <div class="product-info">
                      <p class="prod-name">LACOSTE L!VE（法国鳄鱼）女士简约通勤条T恤店</p>
                      <p class="prodsku-info">颜色 红色   尺寸 M</p>
                      <p class="prod-price">
                        <strong><span>&yen;</span><em>399</em><em style="font-size:12px;">.99</em></strong>
                        <span>x2</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="order-product-item">
                  <div>
                    <img src="https://laquimage.b0.upaiyun.com/activity/2019/4/14/img1555229165205_344.jpg!232x232">
                    <div class="product-info">
                      <p class="prod-name">LACOSTE L!VE（法国鳄鱼）女士简约通勤条T恤店</p>
                      <p class="prodsku-info">颜色 红色   尺寸 M</p>
                      <p class="prod-price">
                        <strong><span>&yen;</span><em>399</em><em style="font-size:12px;">.99</em></strong>
                        <span>x2</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="order-product-item">
                  <div>
                    <img src="https://laquimage.b0.upaiyun.com/activity/2019/4/14/img1555229165205_344.jpg!232x232">
                    <div class="product-info">
                      <p class="prod-name">LACOSTE L!VE（法国鳄鱼）女士简约通勤条T恤店</p>
                      <p class="prodsku-info">颜色 红色   尺寸 M</p>
                      <p class="prod-price">
                        <strong><span>&yen;</span><em>399</em><em style="font-size:12px;">.99</em></strong>
                        <span>x2</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="order-product-item">
                  <div>
                    <img src="https://laquimage.b0.upaiyun.com/activity/2019/4/14/img1555229165205_344.jpg!232x232">
                    <div class="product-info">
                      <p class="prod-name">LACOSTE L!VE（法国鳄鱼）女士简约通勤条T恤店</p>
                      <p class="prodsku-info">颜色 红色   尺寸 M</p>
                      <p class="prod-price">
                        <strong><span>&yen;</span><em>399</em><em style="font-size:12px;">.99</em></strong>
                        <span>x2</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-product-detail">
                <p class="order-product-detailone"><span>商品金额</span> <strong><span>&yen;</span><em>399</em><em style="font-size:12px;">.99</em></strong></p>
                <p class="order-product-detailtwo"><span>运费</span> <strong><em style="font-size:18px;">+</em><span>&yen;</span><em>5</em><em style="font-size:12px;">.00</em></strong></p>
                <p class="order-product-detailtwo"><span>运费券</span> <strong><em style="font-size:18px;">-</em><span>&yen;</span><em>5</em><em style="font-size:12px;">.00</em></strong></p>
              </div>
            </div>
          </div>
        </div>



    </div>




    <div class="payOnline">
      <!-- &yen;{{totalFee}}  -->
      <span>合计：<strong><span>&yen;</span><em>399</em><em style="font-size:12px;">.47</em></strong></span>
      <div class="payBtn" @click="submitOrder">支付</div>
    </div>
    <div class="paymentLoading" v-if="visiblePopup.paymentLoadingVisible">
      <img src="~jd/images/paymentloading.gif" />
    </div>
    <div class="paymentContainer" v-if="visiblePopup.paymentContainerVisible">
      <div class="content">
        <div class="title">
          <i class="closeIcon" @click="()=>visiblePopup.paymentContainerVisible=false"></i>
          <strong>请输入支付密码</strong>
        </div>
        <div class="paymentInfo">
          <span>订单付款</span>
          <strong>&yen;{{totalFee}}</strong>
        </div>
        <mt-field placeholder="请输入支付密码" type="password" v-model="paymentPassword"></mt-field>
        <mt-button size="large" type="primary" @click="payByWallet">确认支付</mt-button>
      </div>
    </div>
    <mt-popup v-model="visiblePopup.selectedAdressVisible" :closeOnClickModal="true" :modal="false" position="bottom" class="modal-popup" style="height:400px;" >
      <div class="my-header">
        <i class="myMsg"></i>
        
        <strong>地址管理</strong>
        <i class="back" @click="()=>visiblePopup.selectedAdressVisible=false"></i>
      </div>
      <div class="addressList">
        <!-- <scroller width="100%" height="100%" style="margin-top:1.2rem;background:#fff;"> -->
          <!-- <div class="address-container" v-if="addressData">
            <div class="address-item" v-for="(item,index) in addressData" :key="index" @click="selectedAddress(item)">
              <p class="name">{{item.nickName}} {{item.Phone}}</p>
              <p class="address">{{item.Province + item.City + item.Area}}&nbsp;;&nbsp;{{item.Address}}</p>
              <i class="selectedIcon" v-if="item.Selected===1"></i>
            </div>
          </div> -->
          <div class="address-container">
            <div class="address-item" @click="selectedAddress(item)">
              <div class="address-itemleft">
              <p class="name">张山 18146703058 <span>默认</span></p>
              <p class="address">广东省 云浮市 云安县 文明街道 福光小区60幢3单元3号301室</p>
              </div>
              <div class="address-itemright">
                <img src="~jd/images/addressedit.png"/>
                <p>编辑</p>
              </div>
            </div>
            <div class="address-item" @click="selectedAddress(item)">
              <div class="address-itemleft">
              <p class="name">张山 18146703058</p>
              <p class="address">广东省 云浮市 云安县 文明街道 福光小区60幢3单元3号301室</p>
              </div>
              <div class="address-itemright">
                <img src="~jd/images/addressedit.png"/>
                <p>编辑</p>
              </div>
            </div>
            <div class="address-item" @click="selectedAddress(item)">
              <div class="address-itemleft">
              <p class="name">张山 18146703058</p>
              <p class="address">广东省 云浮市 云安县 文明街道 福光小区60幢3单元3号301室</p>
              </div>
              <div class="address-itemright">
                <img src="~jd/images/addressedit.png"/>
                <p>编辑</p>
              </div>
            </div>
            <div class="address-item" @click="selectedAddress(item)">
              <div class="address-itemleft">
              <p class="name">张山 18146703058</p>
              <p class="address">广东省 云浮市 云安县 文明街道 福光小区60幢3单元3号301室</p>
              </div>
              <div class="address-itemright">
                <img src="~jd/images/addressedit.png"/>
                <p>编辑</p>
              </div>
            </div>
            <div class="address-item" @click="selectedAddress(item)">
              <div class="address-itemleft">
              <p class="name">张山 18146703058</p>
              <p class="address">广东省 云浮市 云安县 文明街道 福光小区60幢3单元3号301室</p>
              </div>
              <div class="address-itemright">
                <img src="~jd/images/addressedit.png"/>
                <p>编辑</p>
              </div>
            </div>
            <div class="address-item" @click="selectedAddress(item)">
              <div class="address-itemleft">
              <p class="name">张山 18146703058</p>
              <p class="address">广东省 云浮市 云安县 文明街道 福光小区60幢3单元3号301室</p>
              </div>
              <div class="address-itemright">
                <img src="~jd/images/addressedit.png"/>
                <p>编辑</p>
              </div>
            </div>
            <div class="address-item" @click="selectedAddress(item)">
              <div class="address-itemleft">
              <p class="name">张山 18146703058</p>
              <p class="address">广东省 云浮市 云安县 文明街道 福光小区60幢3单元3号301室</p>
              </div>
              <div class="address-itemright">
                <img src="~jd/images/addressedit.png"/>
                <p>编辑</p>
              </div>
            </div>
            <div class="address-item" @click="selectedAddress(item)">
              <div class="address-itemleft">
              <p class="name">张山 18146703058</p>
              <p class="address">广东省 云浮市 云安县 文明街道 福光小区60幢3单元3号301室</p>
              </div>
              <div class="address-itemright">
                <img src="~jd/images/addressedit.png"/>
                <p>编辑</p>
              </div>
            </div>
            <div class="address-item" @click="selectedAddress(item)">
              <div class="address-itemleft">
              <p class="name">张山 18146703058</p>
              <p class="address">广东省 云浮市 云安县 文明街道 福光小区60幢3单元3号301室</p>
              </div>
              <div class="address-itemright">
                <img src="~jd/images/addressedit.png"/>
                <p>编辑</p>
              </div>
            </div>
          </div>
        <!-- </scroller> -->
        <div class="addNewAddressbtn">添加新地址</div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  import {
    Field,
    Button,
    Toast,
    Popup
  } from 'mint-ui';
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        defaultAddress: null,
        totalFee: 0.00,
        paymentPassword: null,
        PaymentNo: null,
        confirmSelectedProduct: null,
        addressData: null,
        visiblePopup: {
          paymentContainerVisible: false,
          paymentLoadingVisible: false,
          selectedAdressVisible: false
        }
      };
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

    components: {},
    computed: {
      ...mapGetters(["addressList"]),
      ...{
        wcvisiblePopup(){
          return this.visiblePopup.selectedAdressVisible;
        }
      }
    },
    methods: {
      selectedAddress(item){
        this.visiblePopup.selectedAdressVisible = false;
        this.addressData.map(item=>item.Selected=9);
        item.Selected = 1;
        this.defaultAddress = item;
      },
      async initData() {
        let defaultAddress = await this.$store.dispatch('GetDefaultAddress', {})
        let confirmSelectedData = await this.$store.dispatch('GetConfirmSelectedProductList', {})
        if(!this.addressList){
          let addressData = await this.$store.dispatch('GetAddressList',{page_size:100,current_page:1});
          this.addressData = addressData.Data;
        }else{
          this.addressData = this.addressList.Data;
        }
        this.defaultAddress = defaultAddress.Data;
        if(confirmSelectedData.Data==''){
          Toast({
            message: '暂无订单信息'
          })
          return this.$router.go(-1);
        }
        confirmSelectedData.Data.map(item => {
          if (item.status === 9) {
            this.totalFee += item.counter * item.product.price;
          }
        })
        this.totalFee = this.totalFee.toFixed(2);
        this.confirmSelectedProduct = confirmSelectedData.Data;
      },
      async submitOrder() {
        this.$store.dispatch('CreateOrder', {
          AddressId: this.defaultAddress._id
        }).then(response => {
          this.visiblePopup.paymentLoadingVisible = true;
          setTimeout(() => {
            this.PaymentNo = response.Data.PaymentNo;
            this.visiblePopup.paymentLoadingVisible = false;
            this.visiblePopup.paymentContainerVisible = true;
          }, 2000)
        })
      },
      payByWallet() {
        this.$store.dispatch('PayByWallet', {
          PaymentNo: this.PaymentNo,
          PaymentPassword: this.paymentPassword
        }).then(response => {
          if (response.Code === 0) {
            Toast({
              message: response.Message
            });
            this.visiblePopup.paymentContainerVisible = false;
            this.visiblePopup.paymentLoadingVisible = false;
            setTimeout(() => {
              this.$router.push('/orderList/2')
            }, 1000)
          }
        })
      }
    },

    mounted: function () {
      this.initData();
      
    }
  }

</script>
<style lang="css" scoped>
 

</style>
