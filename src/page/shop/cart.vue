<!-- cart -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
.checkSkupop{
      width: 100%;
       
        
        
        .checkSkuInfo{
          @include flexbox(space-between,
            center,
            row,
            nowrap);
            padding: 10px;
            position: relative;
            height: 2.4rem;
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
            top: -0.533333rem;
            position: absolute;
            img{
              height: 2.666667rem;
              width: 2.666667rem;
              border-radius: 6px;
            }
            .checkSkuInfo-text{
              width: 5.4rem;
              margin-left: 10px;
                  margin-top: .48rem;
              .checkSkuInfo-texttitle{
                 @include textoverflow(2);
                    font-size: .346667rem;
                    color: #333;
                    line-height: .533333rem;
                    height: 1.066667rem;
              }
              .checkSkuInfo-textprice{
                font-size: .426667rem;
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
        line-height: .96rem;
        font-size: .426667rem;
        color: #333;
        padding:0 $padding;
        span{
          font-size: .373333rem;
        }
        }

        .checkSkuColortitle-box{
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
          max-height: 1.44rem;
          margin-bottom: .426667rem;
          .checkSkuColortitle{
            line-height: .48rem;
            color: $red;
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
              font-size: .346667rem;
              margin-right: .533333rem;
              margin-bottom: .266667rem;
              position: relative;
              span{
                position: absolute;
                right: -10px;
                top: -10px;
                padding: 2px 4px;
                font-size: .32rem;
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
              font-size: .346667rem;
              margin-right: 10px;
              margin-bottom: 10px;
            }
        }
        .skuNum{
          @include flexbox(space-between,
            center,
            row,
            nowrap);
            padding: .213333rem 10px;
            .left{
              font-size: .426667rem;
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
                  font-size: .373333rem;
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
                  font-size: .373333rem;
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
                    font-size: .373333rem;
                    color: #999; // width: 50%;
                  }
                }
                .num-inp {
                  border: none;
                  outline: none;
                  text-align: center;
                  padding: 0 5px;
                  width: 40%;
                  font-size: .32rem;
                }
              }
        }
        .popupOk{
            height: 1.333333rem;
            line-height: 1.333333rem;
            width: 100%;
            text-align: center;
            color: #fff;
            font-size: .48rem;
            background: $red;
        }
        .productparameter{
            width: 100%;
            padding: 9px 10px;
            border-bottom: 1px solid #e4e4e4;
            line-height: .586667rem;
            font-size: .373333rem;
            color: #333;
          span{
            margin-left: .4rem;
            color: #999
          }
        }
    }

  .right-menublack {
        width: .24rem;
        height: .3rem;
        background: url('~jd/images/black_more.png') no-repeat center;
        background-size: contain;
        display: inline-block;
        margin-left: .133333rem;
      }
  .cart-title {
    @include flexbox(center, center, row, nowrap);
    font-size: .426667rem;
  }

  .edit {
    @include flexbox(space-between, center, row, nowrap);
    min-width: 2rem;
    padding: 0 5px;
    i {
      height: .65rem;
      min-width: .65rem;
      background-position: -2.6rem 0 !important;
    }
    .edit-title {
      font-size: .426667rem;
      color: #999;
    }
  }

  /* 购物车列表 */

  .Section {
    .cartListNoneOut{
      .cartListNone{
      height: 6.293333rem;
      width: 100%;
      background: #fff;
      text-align: center;
      overflow: hidden;
      img{
        height: 2.08rem;
        margin-top: 1.333333rem;
        margin-bottom: .533333rem;
      };
      p{
        font-size: .4rem;
        line-height: .586667rem;
        color: #999;
      }
    }
    .product-list-top{
      padding: 15px 12px; 
      @include flexbox(space-between,center,row,nowrap);
      font-size: .4rem;
      .product-list-topl{
        color: #333;
        border-left: 4px solid $red;
        padding-left: 6px
      }
      .product-list-topr{
        color: #666;
        em{
          color: $red
        }
      }
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
          text-align: center;
          img{
            // width: 4.58rem;
            height: 4.58rem;
            // border-radius: 6px;
          }
          .prod-info{
            padding: 0px 10px;
            @include flexbox(space-between,flex-start,column,wrap);
            .prod-title{
              font-size: 0.343rem;
              color: #333;
              @include textoverflow(2);
              height: 0.88rem;
              line-height: 0.45rem;
              margin-top: 4px;
              text-align: justify;
            }
            .prod-price{
              color: $red;
              text-align:left;
              line-height: .8rem;
              .prod-nowprice{
               font-weight:bold;
               margin-right:1px;
               font-size:.426667rem
              }
              .prod-oldprice{
               margin-left:.213333rem;
               text-decoration: line-through;
               color:#999;
               font-size:.373333rem;
              }
            }
            .prod-pro{
              padding: 5px 0;
              text-align: left;
              color: $gray;
              font-size: $subtitle;
            }
          }
          .add-store{
            @include flexbox(flex-end,center,row,wrap);
             padding: 0 10px;
             margin-bottom: 10px;
             span{
               font-size: .293333rem;
               color: $red;
               padding: 0 4px;
               border: 1px solid $red;
               border-radius: 3px;
             }
          }
        }
      }
    }
    


    .login-info {
      margin-top: 40px;
      position: relative;
      z-index: 1;
      background: #fff;
      padding: $padding 25px;
      border-top: 1px solid #eee;
      @include flexbox(flex-start, center, row, nowrap);
      .login {
        border: 1px solid #999;
        color: #999;
        background: transparent;
        width: 60px;
        height: 20px;
        @include flexbox(center, center, row, nowrap);
        flex: initial;
        margin-right: 10px;
        border-radius: 2px;
      }
      span {
        color: #999;
      }
    }
    .goods {
      @include flexbox(flex-start, space-between, column, wrap);
      background: #f2f2f2;
      padding-bottom: 110px;
      .top-edit{
        @include flexbox(space-between, center, row, nowrap);
        width: 9.4rem;
        margin-left: .3rem;
        padding: 12px 0;
        p{
          font-size: .426667rem;
          color: #333;
        }
      }
      .store {
        @include flexbox(flex-start, center, row, nowrap);
        flex: initial;
        font-size: .373333rem;
        padding: 10px;
        span {
          margin-left: 10px;
        }
      }
      .store-pd {
        @include flexbox(flex-start, space-between, column, wrap);
        flex: initial;
        width: 9.4rem;
        margin: 0 .3rem;
        .store-pd-downlist{
          background: #fff;
          border-radius: 5px;
          padding-bottom: .266667rem;
        }
        .store-pd-list{
          width: 100%;
          background: #fff;
          border-radius: 5px;
          margin-bottom: .213333rem;
          padding-bottom: .266667rem;
          .store-pd-shopname{
            @include flexbox(flex-start, center, row, nowrap);
            height: 1.253333rem;
            padding: 0 .266667rem;
            img{
              height: .453333rem;
              margin-left: .4rem;
              margin-right: .106667rem;
            }
            span{
              font-size: .4rem;
              color: #333;
            }
          }
        }
         .store-pd-item {
          @include flexbox(flex-start, center, row, wrap);
          padding: 0 .266667rem ;
          
          .pd-images {
            margin: 0 .266667rem 0 .4rem;
            border-radius: 4px;
            overflow: hidden;
            img {
              width: 2rem;
              height: 2rem;
              border-radius:5px;
            }
            position: relative;
            .pd-imagestip{
              height: 2rem;
              width: 2rem;
              background: rgba(0,0,0,.4);
              position: absolute;z-index: 2;
              color: #fff;
              top: 0;
              left: 0;
              font-size: .48rem;
              text-align: center;
              line-height: 2rem;
            }
          }
            .pd-info {
            @include flexbox(flex-start, space-between, column, wrap);
            width: 100%;
            .pd-title {
              @include flexbox(space-between, center, row, nowrap);
              .pd-title-left{
                font-size: .346667rem;
                color: #333;
                @include textoverflow(1);
                height:.533333rem;
                line-height: .533333rem;
              }
              .pd-title-right{
                 color: #666;
                 font-size: .346667rem;
                 margin-left: .6rem
              }
              .pd-title-down{
                color: #333;
                height: .533333rem;
                line-height: .533333rem;
                font-size: .346667rem;
              }
            }
            .pd-info-sku{
              height: 1.466666rem;
              width: 100%;
              background: #fafafa;
              
              padding: .133333rem;
              .pd-info-sku-scroll{
                width: 100%;
                height: 100%;
               overflow-y: scroll;
              -webkit-overflow-scrolling: touch;
                .pd-info-sku-price{
                  color: $red;
                  line-height: .4rem;
                  font-weight: bold;
                }
                .pd-info-sku-color{
                  color: #666;
                }
                .pd-info-sku-size{
                  color: #666;
                }
              }
              

            }
            .pd-sku {
              @include textoverflow(1);
              padding: 5px 0;
              line-height: 1.5;
              font-size: .346667rem;
              color: #666;
            }
            .pd-price {
              // margin-top: 10px;
              @include flexbox(space-between, center, row, nowrap);
              flex: initial;
             
            }
          }
        }

        .store-pd-item-edit{
          @include flexbox(space-between,
                center,
                row,
                nowrap);
                height: 1rem;
                padding-right: .266667rem;
                padding-left: 1.36rem;
          .store-pd-item-editprice{
            font-size: .373333rem;
            color: $red;
            font-weight: bold;
          }
          .store-pd-item-editbtn{
            color: #666;
            font-size: .32rem;
            border:1px solid #666;
            border-radius: 3px;
            padding: .053333rem .186667rem;
          }  
        }

        .delall-old-cart{
            @include flexbox(space-between,
                center,
                row,
                nowrap);
                height: 1.333333rem;
                padding: 0 15px;
            .delall-old-cartleft{
              color: #333;
              font-size: .426667rem;
              
            }   
            .delall-old-cartright{
              font-size: .373333rem;
          color: $red;
          border: 1px solid $red;
          padding: 2px 10px;
          border-radius: 20px;
            } 
          }
          
        
        .store-pd-itemnopadding{
            border-bottom:none;
            padding: 0 15px 15px;
          }
        .store-pd-itemnoborder{
            border-bottom:none;
          }
      }
    }
  }

  /* 购物车列表 */

  /* 底部计算栏 */

  .section-bar {
    position: fixed;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    bottom: 50px;
    width: 10rem;
    height: 49px;
    background: #fff;
    @include flexbox(space-between, center, row, nowrap);
    .left {
      background: #fff;
      font-size: 12px;
      height: 100%;
      padding: 10px;
      width: 66%;
      @include flexbox(flex-start, center, row, nowrap);
      flex: initial;
      font-size: 13px;
      em{
        font-style: normal;
        font-size: 14px;
        color: #333;
        width: 20%;
      }
      i {
        vertical-align: text-top;
        margin-right: 5px;
      
      }
      strong {
        font-weight: normal;
        font-size: 14px;
        width: 66%;
        text-align: right;
        color: #333;
        line-height:48px;
        @include textoverflow(1);
        span{
          font-weight: bold;
          font-size: 16px;
          color: $red;
          
        }
        em{
          font-weight: bold;
          color: $red;
          &:first-child{
            margin-left:-3px;
          }
        }
      }
    }
    .right {
      width: 34%;
      height: 100%;
      background: $red;
      color: #fff;
      @include flexbox(center, center, row, nowrap);
      strong {
        font-size: 17px;
        font-weight: normal;
        span {
          font-size: 14px;
        }
      }
    }
    .del{
      height: .8rem;
      border: 1px solid $red;
      padding: 0 .693333rem;
      border-radius: 16px;
      color: $red;
      font-size: .426667rem;
      line-height: .8rem;
      margin-right: 12px;
      // width: 2.8rem;
    }
  }
   .lastfood{
     border-bottom: none!important;
   }
   .productActive{
    color: $red!important;
    border: 1px solid $red!important;
  }
  .productSkuActive{
    color: $red!important;
  }
  /* 底部计算栏 */
</style>

<template>
  <div>
    <!-- :Status="true" -->
    <!-- <search-bar >
      <div class="scanCode" style="min-width: 2rem;" slot="left-icon"></div>
      <div slot="title-icon" class="cart-title">购物车</div>
      <div class="edit" slot="right-icon">
        <span class="edit-title">编辑</span>
        <i class="searchIcon searchMsgIcon"></i>
      </div>
    </search-bar> -->
    

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
      <div class="checkSkuColortitle-box">
      <p class="checkSkuColortitle" v-for="(itemall,index) in colorarr" :key="index">
        <span v-if="colorCur[index]"><em>{{itemall.color}}：</em></span>
        <span v-for="(item,index1) in sizearr[index]"  :key="index1">
        <em v-if="item.number!=0">{{item.size}}/{{item.number}}件&nbsp;&nbsp;&nbsp;&nbsp;</em></span>
        </p>
      </div>
      <div class="popupOk" @click= "checkSkuOk">确定</div>
    </mt-popup>
    <!-- 购物车列表 -->
    <div class="Section">
      <load-more :style="{width:'100%',height: '85%',paddingTop: isLogin ? '1.2rem' : '0'}" :topMethod="onRefreshCallback" :loadMoreIconVisible="false"
        ref="cartLoadmore">
        <div class="goods" v-if="cartlength>0||cartdownlength>0">
          <div class="top-edit">
            <p class="cartListNum">共{{cartlength+cartdownlength}}件宝贝</p>
            <p class="cartListEdit" v-if="!delshow" @click= "editProductdelshow()">管理</p>
            <p class="cartListEdit" v-if="delshow" @click= "editProductdelshow()">完成</p>
          </div>
          <div class="store-pd" v-if="cartlength>0">
              <div class="store-pd-list" v-for="(item,index) in cartList" :key="index">
                    <p class="store-pd-shopname">
                    <i :class="['select-default-icon',item.checked ? 'select-icon' : '']" @click= "checked(item,1)"></i>
                    <img @click= "()=>$router.push({path: '/searchRusult',query: {store_id:item.store_id,store_name:item.store_name}})" src="~jd/images/cartshopicon.png"><span @click= "()=>$router.push({path: '/searchRusult',query: {store_id:item.store_id,store_name:item.store_name}})">{{item.store_name}}</span>
                    <span class="right-menublack"></span>
                    </p>
                  <div v-for="(itemDetail,index1) in item.spu_list" :key="index1">
                    <div class="store-pd-item" >
                      <i :class="['select-default-icon',itemDetail.checked ? 'select-icon' : '']" @click= "checkeddetail(item,itemDetail)"></i>
                      <div class="pd-images" @click= "()=>$router.push('/product/'+itemDetail.item_id)">
                        <img :src="itemDetail.index_img_url" alt="">
                      </div>
                      <div class="pd-info">
                        <div class="pd-title" @click= "()=>$router.push('/product/'+itemDetail.item_id)">
                          <p class="pd-title-left">{{itemDetail.item_title}}</p>
                          <p class="pd-title-right">x{{itemDetail.total_items}}</p>
                        </div>
                        <div class="pd-info-sku">
                          <div class="pd-info-sku-scroll">
                          <p v-for="(itemDetailSku,index2) in rmSomearr(itemDetail.shopping_cart_item_b_o_list)" :key="index2">
                            <span class="pd-info-sku-price">
                              ￥{{itemDetailSku.sales_consumer_price/100}}
                            </span>
                            <span class="pd-info-sku-color">{{itemDetailSku.color}}:</span>
                            <span class="pd-info-sku-size" v-for="(itemsize,index3) in itemDetail.shopping_cart_item_b_o_list" :key="index3">
                              <em v-if="itemsize.color==itemDetailSku.color">&nbsp;&nbsp;{{itemsize.size}}/{{itemsize.num}}件</em>
                            </span>
                          </p>
                          </div>
                        </div>
                      </div> 
                    </div> 
                    <p class="store-pd-item-edit">
                      <span class="store-pd-item-editprice">￥{{itemDetail.total_price/100|TwoNum}}</span>
                      <span class="store-pd-item-editbtn" @click= "editCart(itemDetail.item_id,itemDetail.shopping_cart_item_b_o_list,itemDetail)">编辑</span>
                    </p>
                  </div>
            </div>
          </div>
          <div class="store-pd" v-if="cartdownlength>0">
            <div class="store-pd-list">
              <p class="delall-old-cart"><span class="delall-old-cartleft">失效商品{{cartdownlength}}款</span><span class="delall-old-cartright" @click="clearOldcart">清除所有商品</span></p>
            <div v-for="(itemDetail,index1) in downCartList" :key="index1">
                    <div class="store-pd-item" >
                      <i :class="['select-default-icon',itemDetail.checked ? 'select-icon' : '',!delshow ? 'select-defaultnone-icon' : '']" @click= "checked(itemDetail,2)"></i>
                      <div class="pd-images" @click= "()=>$router.push('/product/'+itemDetail.item_id)">
                        <img :src="itemDetail.index_img_url" alt="">
                        <span class="pd-imagestip">失效</span>
                      </div>
                      <div class="pd-info" @click= "()=>$router.push('/product/'+itemDetail.item_id)">
                        <div class="pd-title">
                          <p class="pd-title-left">{{itemDetail.item_title}}</p>
                          <p class="pd-title-right" v-if="itemDetail.total_items">x{{itemDetail.total_items}}</p>
                        </div>
                        <div class="pd-info-sku" v-if="itemDetail.shopping_cart_item_b_o_list">
                          <div class="pd-info-sku-scroll">
                          <p v-for="(itemDetailSku,index2) in rmSomearr(itemDetail.shopping_cart_item_b_o_list)" :key="index2">
                            <span class="pd-info-sku-price">
                              ￥{{itemDetailSku.sales_consumer_price/100}}
                            </span>
                            <span class="pd-info-sku-color">{{itemDetailSku.color}}:</span>
                            <span class="pd-info-sku-size" v-for="(itemsize,index3) in itemDetail.shopping_cart_item_b_o_list" :key="index3">
                              <em v-if="itemsize.color==itemDetailSku.color">&nbsp;&nbsp;{{itemsize.size}}/{{itemsize.num}}件</em>
                            </span>
                          </p>
                          </div>
                        </div>
                      </div> 
                    </div> 
                    <p class="store-pd-item-edit" >
                      <span class="store-pd-item-editprice" v-if="itemDetail.total_price">￥{{itemDetail.total_price/100|TwoNum}}</span>
                    </p>
                  </div>
                  </div>
          </div>
        </div>
        <div class="cartListNoneOut" v-show="cartdownlength==0&&cartlength==0">
          <div class="cartListNone">
            <img src="~jd/images/cartnone.png">
            <p>购物车快饿瘪了<br>
              快给我挑点宝贝吧！</p>
          </div>
          <p class="product-list-top">
            <span class="product-list-topl">精选推荐</span>
            <span class="product-list-topr">去<em @click= "$router.push('/index')">商城首页</em>逛逛</span>
          </p>
          <load-more style="width:100%;" v-if="$route.path=='/cart'" @loadMore="infiniteCallback" :cartListlength='cartlength' :commad="commad" :param="indexParams"
                ref="indexRusultloadMore">
              <ul class="product-list" >
                <li class="prod-item" v-for="(item,index) in indexRusultData" :key="index">
                  <img  @click= "()=>$router.push('/product/'+item.item_id)" v-lazy="item.index_img_url+'_230x230.jpg'" alt="">
                  <div class="prod-info" @click= "()=>$router.push('/product/'+item.item_id)">
                          <p class="prod-title">{{item.title}}</p>
                          <p class="prod-price">
                            <span class="prod-nowprice">￥{{item.sales_consumer_price/100|TwoNum}}</span>
                            <span class="prod-oldprice">￥{{item.sales_price/100|TwoNum}}</span>
                          </p>
                        </div>
                  <p class="add-store"><span @click="addGood(item.item_id)">铺店</span></p>
                </li>
              </ul>
            </load-more>

        </div>
      </load-more>
    </div>
    <!-- 购物车列表 -->
    <!-- 底部价格计算 -->
    <div class="section-bar" v-if="cartlength>0||cartdownlength>0">
      <div class="left">
        <i :class="['select-default-icon',selectedAll ? 'select-icon' : '']" @click= "selectedAllGoods"></i>
        <em>全选</em>
        <!-- {{totalFee}} -->
        <strong v-if="!delshow">合计：<span>&yen;</span> <em style="font-size:16px;">{{totalFee/100.00|topriceafter}}</em><em style="font-size:16px;">.{{totalFee/100.00|topricenext}}</em></strong>
      </div>
      <div v-if="!delshow" class="right" @click= "confirmOrder()">
        <strong>结算</strong>
      </div>
      <span class="del" v-if="delshow" @click= "editProductdel()">删除</span>
    </div>
    <!-- 底部价格计算 -->
    <FooterView/>
  </div>
</template>

<script>
  import FooterView from 'component/footer/footerView';
  import SearchBar from 'page/shop/searchBar';
  import {
    Toast,MessageBox
  } from 'mint-ui'
  import { CellSwipe } from 'mint-ui';
    import Vue from 'vue'
  Vue.component(CellSwipe.name, CellSwipe);
  import {
    setSessionStorage,
    getSessionStorage,
    removeSessionStorage
  } from '@/utils/mixin';
  import {
    mapGetters,
    mapMutations
  } from 'vuex';
  import LoadMore from 'common/loadMore';
 import {searchGoods,addProduct,clearOldcartDate,getProduct} from '@/service/getData';
  export default {
    data() {
      return {
        cartList: null,
        downCartList: null,
        totalFee: 0,
        selectedCounter: 0,
        selectedAll: false,
        selectedchrenAll: false,
        isLogin: false,
        delshow:false,
        cartlength:0,
        cartdownlength:0,
        commad: searchGoods,
        indexRusultData:[],
        indexParams: {
          title: '',
          category_id:'',
          page_size: 10,
          current_page: 1
        },
        visiblePopup: {
          checkSku: false
        },
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
        curItemId:null,
        curitemDetail:null,
        checkId:null,
        checkIdnums:[],
        shopnum:[]
      };
    },

    watch: {},

    components: {
      FooterView,
      SearchBar,
      LoadMore
    },

    computed: {
      ...mapGetters([
        'cartProductData',
        'userInfo'
      ]),
       cartListfilter: function () {
        return this.cartList.filter(function (item) {
          return item.item_status===1
        })
        }
    },

    methods: {
      closepopcheckSku(){
        this.visiblePopup.checkSku=false;
        for(var i=0;i<this.sizearrrmSome.length;i++){
          this.sizearrrmSome[i].number=0
        }
        this.colorCur=[];
        this.checkIdnums=[];
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

       checkSkuOk(){
        var that=this;
        if(this.checkIdnums.length>0){
          this.visiblePopup.checkSku=false;
          this.$store.dispatch('EditCart', {
          item_id:this.curItemId,
          item_sku_info_json: JSON.stringify(this.checkIdnums)
          }).then(response => {
          if(response.code==10000){
             that.itemDetailpar.shopping_cart_item_b_o_list=[];
             that.itemDetailpar.total_price=0;
             that.itemDetailpar.total_items=0;
              for(var i=0;i<that.checkIdnums.length;i++){
                  for(var j=0;j<that.productInfo.item_sku.length;j++){
                    if(that.checkIdnums[i].item_sku_id==that.productInfo.item_sku[j].item_sku_id){
                      that.productInfo.item_sku[j].num=that.checkIdnums[i].number;
                      that.itemDetailpar.shopping_cart_item_b_o_list.push(that.productInfo.item_sku[j])
                      that.itemDetailpar.total_price+=that.productInfo.item_sku[j].num*that.productInfo.item_sku[j].sales_consumer_price
                      that.itemDetailpar.total_items+=that.productInfo.item_sku[j].num;
                    }
                  }
              }

            for(var i=0;i<that.sizearrrmSome.length;i++){
                 that.sizearrrmSome[i].number=0
            }
            that.checkIdnums=[]
            that.colorCur=[];
            return Toast({duration: 1000,
              message: '编辑成功',
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
            return Toast({duration: 1000,
            message: '请先选择规格、数量',
            position: 'center'
            })
        }
      },


      async editCart(itemId,itemDetail,itemDetailpar){
          this.curItemId=itemId;
          this.itemDetailpar=itemDetailpar;
          console.log(this.curitemDetail)
          let sandObj={is_load_detail:0,item_id: itemId}
          let Data = await getProduct(sandObj);
          if(Data.code!=10000){
            Toast({duration: 1000,
              message: Data.msg
            })
            return
          }
        this.visiblePopup.checkSku=true;
        this.productInfo = Data.data;
        this.productInfo.salesConsumerPrice = Data.data.sales_consumer_price;
        this.productInfo.salesPrice = Data.data.sales_price;
        this.productInfo.title =Data.data.title;
        this.productInfo.item_sku = Data.data.item_sku_b_o_list;
        this.productInfo.item_skulength = this.productInfo.item_sku ? this.productInfo.item_sku.length : 0;
        this.colorarr = this.productInfo.item_sku? this.rmSome(this.productInfo.item_sku,'color') :[];
        this.sizearrrmSome = this.productInfo.item_sku;
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
        for(var i=0;i<this.colorarr.length;i++){
          for(var j=0;j<itemDetail.length;j++){
            for (var k=0;k<this.sizearr[i].length;k++){
              if(this.sizearr[i][k].item_sku_id===itemDetail[j].item_sku_id){
                this.sizearr[i][k].number=itemDetail[j].num;
                this.operationnum(i,0,this.sizearr[i][k],k)
              }
            }
          }
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
          },
      async addGood(itemId){
         let Data = await addProduct({
         item_id: itemId
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
        }else{
          Toast({duration: 1000,
             message: '铺店成功'
             })
        }
       },
      async clearOldcart(){
          MessageBox.confirm("", {
          message: "确定删除所有已失效商品？",
          title: "",
          cancelButtonClass: "cancelButton",
          confirmButtonClass: "confirmButton"
      }).then(action => {
          if (action == "confirm") {
           this.$store.dispatch('ClearOldcartDate', {
                distributor_id: 0
              }).then(response => {
                if(response.code!=10000){
                  Toast({duration: 1000,
                  message: response.msg
                  })
                }else{
                  Toast({duration: 1000,
                message: '清除成功'
                })
                this.onRefreshCallback()
                }
              })
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
          }
        });
       },
     async deleteSection(){
      },
      selectedAllGoods() {
            if(!this.delshow){
               this.cartList.map(items => {
                  items.checked = !this.selectedAll
                items.spu_list.map(itemdetail=>{
                  if(items.checked){
                    itemdetail.checked=true
                  }else{
                    itemdetail.checked=false
                  }
                })
              })
            }else{
              this.cartList.map(items => {
                  items.checked = !this.selectedAll
                items.spu_list.map(itemdetail=>{
                  if(items.checked){
                    itemdetail.checked=true
                  }else{
                    itemdetail.checked=false
                  }
                })
              })

              this.downCartList.map(items => {
                  items.checked = !this.selectedAll
              })
            }
            

        this.selectedAll = !this.selectedAll;
        this.computedTotalFee();
      },
      
      editProductdel(){
        let SelectedList = [];
        let Selectedstr = '';
        this.cartList.map(item => {
           item.spu_list.map(itemdetail=>{
                  if (itemdetail.checked) {
                      itemdetail.shopping_cart_item_b_o_list.map(itemdetailid=>{
                          SelectedList.push(itemdetailid.id)
                      })
                    }
                })
        })
        this.downCartList.map(item => {
          if (item.checked) {
              item.shopping_cart_item_b_o_list.map(itemdetailid=>{
              SelectedList.push(itemdetailid.id)
              })
          }
        })
        Selectedstr=SelectedList.join(",");
        if (SelectedList == '') return Toast({duration: 1000,
          message: '请选择商品',
          position: 'bottom'
        });
        this.$store.dispatch('RemoveSelectedProduct', {
          shopping_cart_item_ids: Selectedstr
        }).then(response => {
          this.onRefreshCallback();
        })
      },
      confirmOrder() {
        let SelectedList = [];
        let Selectedstr = '';
        this.cartList.map(items => {
          items.spu_list.map(itemdetail=>{
            if (itemdetail.checked) {
                 itemdetail.shopping_cart_item_b_o_list.map(itemdetailid=>{
                     SelectedList.push(itemdetailid.id)
                 })
            }
          })
        })
        Selectedstr=SelectedList.join(",");
        if (SelectedList == '') return Toast({duration: 1000,
          message: '请选择商品',
          position: 'center'
        });

        this.$router.push({path: '/createOrder',query: {Selectedstr:Selectedstr,checkout_type:1}});
      },
      computedTotalFee() {
          let computedFee = 0,
          selectedCounter = 0,
          selectedCounter1 =0,
          selectedCounter2 =0,
          selectedCounter3 =0;
        if(this.cartList!=null){
        this.cartList.map(items => {
          items.spu_list.map(itemdetail=>{
            if (itemdetail.checked) {
            computedFee += itemdetail.total_price
            selectedCounter++
            }
          })
        })
        if(!this.delshow){
          this.cartList.map(items => {
          if (items.checked){
             selectedCounter1++
          }
          })
        }else{
          this.cartList.map(items => {
          if (items.checked){
             selectedCounter1++
          }
          })

          this.downCartList.map(items => {
          if (items.checked){
             selectedCounter3++
          }
          })
        }
        
       
        this.selectedCounter = selectedCounter;
        if(!this.delshow){
        this.selectedAll = selectedCounter1 === this.cartList.length ? true : false;
        }else{
            this.selectedAll = selectedCounter1+selectedCounter3 === this.cartList.length+this.downCartList.length ? true : false;
        }
        
        this.totalFee = computedFee;
        }
        
        
        
      },
    
      async editProductdelshow() {
       this.delshow=!this.delshow;
       this.cartList.map(items => {
                  items.checked = false
                items.spu_list.map(itemdetail=>{
                    itemdetail.checked=false
                })
              })
        this.downCartList.map(items => {
          items.checked = false
        })

        this.computedTotalFee();
      },

      async checked(item,type) {
        item.checked = !item.checked;
        let count = 0;
        let countold =0;
        if(type==1){
          this.cartList.map(items => {
            if (items.checked) return count++;
          })
          if(item.checked==false){
            item.spu_list.map(itemdetail => {
            itemdetail.checked=false;
          })
          }else{
            item.spu_list.map(itemdetail => {
            itemdetail.checked=1
            })
          }
        }else{
          this.downCartList.map(items => {
          if (items.checked) return countold++;
          })
        }
        if(!this.delshow){
         if (count === this.cartList.length) return this.selectedAllGoods();
        }else{
          if (count+countold === this.cartList.length+this.downCartList.length) return this.selectedAllGoods();
        }
        
        this.computedTotalFee();
        
      },
      async checkeddetail(item,itemdetail) {
        itemdetail.checked = !itemdetail.checked;
        let count = 0;
        item.spu_list.map(itemdetail => {
          if (itemdetail.checked) return count++;
        })
        if (count === item.spu_list.length){
           item.checked=1;
        }else{
          item.checked=false;
        }
        // item.checked = selectedCounter === item.shopping_cart_item_b_o_list.length?true: false;
        this.computedTotalFee();
      },

      async initData() {
        let Data = await this.$store.dispatch('GetSelectedProductList');
        if(Data.data==undefined){
          this.cartList = [];
          this.downCartList = [];
        }else{
          this.cartList = Data.data.storePage.data;
          this.downCartList = Data.data.down_cart;
          

        }
        this.cartlength=this.cartList?this.cartList.length:0
        this.cartdownlength=this.downCartList?this.downCartList.length:0
      },
      async onRefreshCallback() {
        this.$store.dispatch('GetSelectedProductList').then(response => {
          setTimeout(() => {
            this.cartList = response.data.storePage.data || null;
            this.downCartList = response.data.down_cart|| null;
            this.cartlength=this.cartList?this.cartList.length:0;
            this.cartdownlength=this.downCartList?this.downCartList.length:0;
            // this.getGoodsdata()
            this.computedTotalFee();
            this.selectedAll = false;
            this.selectedchrenAll = false;
            this.$refs.cartLoadmore.onTopLoaded(this.$refs.cartLoadmore.uuid);
          }, 500);
        }, error => {
          this.$refs.cartLoadmore.translate = 0;
          this.$refs.cartLoadmore.topStatus = 'pull';
          this.$refs.cartLoadmore.AllLoaded = false;
          return this.$refs.cartLoadmore.LoadMoreLoading = false;
        });
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
      rmSomearr (arr) {
            var hash = {};
            let arrmy= arr.reduce(function(arr, current) {
                hash[current.color] ? '' : hash[current.color] = true && arr.push(current);
                return arr
            }, [])
            return arrmy;
          }
    },
    filters:{
        topriceafter(value){
            return value.toFixed(2).substring(0, value.toFixed(2).indexOf('.'));
        },
        topricenext(value){
            return value.toFixed(2).substring(value.toFixed(2).indexOf('.')+1);
        },
        
    },
    mounted: function () {
      this.initData();
      this.indexParams = JSON.parse(JSON.stringify(Object.assign(this.indexParams,this.$route.query)))
      this.$refs.indexRusultloadMore.onloadMoreScroll();
    }
  }
</script>
<style lang='scss' scoped>
</style>