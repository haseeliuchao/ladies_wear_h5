<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .my-order {
      padding-top: $padding;
    .choicebtn{
         @include flexbox(start,center,row,nowrap);
              height: 62px;
              width: 100%;
              background: #fff;
              margin-top: $margin;
              img{
                 height: 30px;
                 margin: 0 $margin;
              }
              div{
                .topp{
                    line-height: 24px;
                    color: $red;
                    font-size: 14px;
                }
                .botp{
                    line-height: 24px;
                    color: #999;
                    font-size: 13px;
                }
              }
              
    }
    .order-container {
      height: auto;
      ._v-container {
        // background: #fff;
      }
      .order-nomore-tip {
        margin-top: 40%;
        @include flexbox(space-between,
        center,
        column,
        wrap);
        i {
          display: block;
          width: 60px;
          height: 60px;
          background: url('~jd/images/order.png') no-repeat;
          background-size: 100%;
        }
        span {
          font-size: 17px;
          font-weight: normal;
          padding: 30px 0;
          color: $gray;
        }
      }
      
        .order-item {
          background: #fff;
          width: 10rem;
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
            .order-product-item {
              padding: $padding;
              width: 100%;
              >div {
                @include flexbox(flex-end,
                flex-start,
                row,
                nowrap);
                width: 100%;
                padding: 0px;
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
                    @include textoverflow(2);
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
        }
      }
    }
  }

</style>

<template>
  <div class="my-order">
      <!-- 头部 -->
    <div class="order-container">
            <div class="order-item">
              <div class="order-product-list">
                  <!-- v-if="item.order_item_id==order_item_id" -->
                <div class="order-product-item" v-for="(item,index) in goodInfofilter"  :key="index">
                  <div>
                    <img :src="item.item_img">
                    <div class="product-info">
                      <p class="prod-name">{{item.item_title}}</p>
                      <p class="prodsku-info">颜色 {{item.color}}&nbsp;&nbsp;&nbsp;&nbsp;尺寸 {{item.size}}</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </div>
    <div class="choicebtn" @click= "$router.push({path: '/afterSale',query: {post_sales_type:2,order_item_id:order_item_id}})">
    
         <img src="~jd/images/only_money.png">
         <div>
             <p class="topp">仅退款</p>
             <p class="botp">未收到货物（包含未签收），或卖价协商同意前提</p>
         </div>
    </div>
    <div class="choicebtn" @click= "$router.push({path: '/afterSale',query: {post_sales_type:1,order_item_id:order_item_id}})">
         <img src="~jd/images/back_good.png">
         <div>
             <p class="topp">退货退款</p>
             <p class="botp">已收到货，需要退换已收到的货</p>
         </div>
    </div>
  </div>
</template>

<script>
import {
    getLocalStorage,
    setLocalStorage
  } from '@/utils/mixin';
  import {
    Toast
  } from 'mint-ui'
  export default {
    data() {
      return {
        visiblePopup: {
          paymentLoadingVisible: false,
          paymentContainerVisible: false
        },
        orderDetail: {
        },
        active: null,
        order_item_id:null
      };
    },

    watch: {},

    components: {
      // LoadMore
    },

    computed: {
      goodInfofilter: function () {
          let that=this;
          return this.orderDetail.item_map_list.map(item => {
               return item.item_sku_list.filter(function (itemdetial) {
                return itemdetial.order_item_id==that.order_item_id
               })
           })
              
          
      }
    },

    methods: {
    async initData() {
        this.orderDetail=JSON.parse(getLocalStorage('salesList'))
        console.log(JSON.parse(getLocalStorage('salesList')))
        console.log(this.orderDetail)
      },
    },
    mounted: function () {
      this.initData(),
      this.order_item_id=this.$route.query.order_item_id
    }
  }

</script>
<style lang='scss' scoped>


</style>
