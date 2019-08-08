<!-- goodList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  
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

  .my-order {


    background: #fff;
    margin-bottom:1.4rem;

    .goodclassify{
       width: 10rem;
       border-top: .213333rem solid #f2f2f2;
       height: 16rem;
       overflow-y: scroll;
        /* ios需要下面这个属性 */
        -webkit-overflow-scrolling: touch;
       padding-bottom: 1.6rem;
       background: #fff;
      .goodclassify-list{
          width: 10rem;
          padding: 0 .3rem;
          height: 1.28rem;
          background: #fff;
          border-bottom: 1px solid #e4e4e4;
          @include flexbox(space-between, center, row, nowrap);
          .goodclassify-listleft{
              font-size: .4rem;
              color: #333;
          }
          .goodclassify-listright{
              @include flexbox(flex-end, center, row, nowrap);
              font-size: .4rem;
              color: #666;  
          }
      }
      .changehiden{
        .goodclassify-list{
         padding-left: 1.093333rem;
        .goodclassify-listleft{
              font-size: .373333rem;
              color: #333;
          }
        }
          
      }
      
      
   }
   .cartpop-shop-fixed{
    position: fixed;
    bottom: -1px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 7px 14px;
    background: #fff;
   @include flexbox(space-around,
    center,
    row,
    nowrap);
        div{
          width: 3.466667rem;
          height: .906667rem;
          line-height: .906667rem;
          text-align: center;
          font-size: .48rem;
          color: $red;
          border:1px solid $red;
          border-radius: 6px;
        }
  }
    .screen_subject{
      width: 8.8rem;
      padding: 12px 12px 4px;
      border-radius: 6px;
      position: fixed;
      top: 0;
      z-index: -10;
      opacity: 0;
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
    .my-header {
      padding: $padding;
      background: #fff;
      position: relative;
      z-index: 1;
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
        background-position: -2.6rem 0;
      }
    }
    .topnav {
      display: flex;
      width: 10rem;
      background: #f2f2f2;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
      padding: 6px 10px;
      
    
      >span {
        // width: 33.33%;
        padding: 12px 0 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #333;
      }
      .active {
        color: $red;
      }
    }
    .order-container {
      height: auto;
      
      .order-nomore-tip {
        padding-top: 40%;
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
      // .all-order {
      //   background: #fff;
      // }
      .order-list {
         
        .order-item {
          background: #fff;
          width: 10rem;
          padding: .346667rem .32rem;
          border-bottom: 1px solid #e4e4e4;
          .order-top {
            padding: $padding;
            border-bottom: 1px solid #e4e4e4;
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
                font-size: 14px;
                color: #666;
                // margin-left: 5px;
              }
            }
            .right {
              .order-status {
                color: $red;
                font-size: 14px;
              }
            }
          }
          .order-product-list {
            @include flexbox(flex-start,
            flex-start,
            column,
            wrap);
             .order-product-item {
              // padding: $padding;
              width: 100%;
              p:last-child{
                  border-bottom: none
                }
              .prodskulist-info{
                width: 100%;
                // height: 42px;
                line-height: 22px;
                color: #666;
                font-size: 13px;
                padding: 10px 10px;
                 @include flexbox(space-between,
                flex-start,
                row,
                nowrap);
                &:last-child{
                   border-bottom: 1px solid #e4e4e4;
                }
                .sku{
                  width: 56%;
                }
                .price{
                  width: 20%;
                  color: $red;
                  font-size: 16px;
                  font-weight: bold;
                }
                
                
              }
              >div {
                @include flexbox(flex-start,
                center,
                row,
                nowrap);
                width: 100%;
              
                >img {
                  max-width: 1.733333rem;
                  max-height: 1.733333rem;
                  // border: 1px solid #eee;
                  margin-left: .266667rem;
                  border-radius: 6px;
                }
                .product-info {
                  .prod-price {
                    font-size: .346667rem;
                     color: #666;
                     line-height: .48rem;
                   
                  }
                  .prod-num {
                     @include flexbox(space-between,
                      flex-start,
                      row,
                      nowrap);
                    font-size: .346667rem;
                     color: #666;
                     height: .48rem;
                     line-height: .48rem;
                     .edit-btn{
                       position: relative;
                     }
                  }
                  .prod-name{
                    @include textoverflow(2);
                    font-size: .346667rem;
                    margin-top: 4px;
                    color: #333;
                    line-height: .453333rem;
                    height: .88rem;
                    width: 6.56rem;
                  }
                  .prodsku-info{
                    color: #666;
                    font-size: 12px;
                  }

                }
              }
            }
          }
          .order-sku {
            background: #fff;
            padding: 8px $padding;
            padding-bottom:13px;
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
                      font-size: 14px;
                      span{
                        font-weight:bold;
                        font-size: 16px;
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
            padding: 0 $padding 15px;
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
    }

    .cart-shop-fixed{
    position: fixed;
    bottom: -1px;
    left: 0;
    right: 0;
    width: 100%;
    height: 1.306667rem;
    padding-left: .32rem;
    background: #fcfcfc;
   @include flexbox(space-between,
    center,
    row,
    nowrap);
       .cart-shop-fixed-left{
           @include flexbox(flex-start,
          center,
          row,
          nowrap,4);
          span{
              font-size: .453333rem;
              color: #333;
              margin-left: .32rem;
              
          }
       } 
       .cart-shop-fixed-right{
           @include flexbox(flex-end,
          center,
          row,
          nowrap,4);
          p{  
              padding: 0 .4rem;
              height: 1rem;
              @include flexbox(space-between,
                center,
                column,
                wrap);
                img {
                    height: .48rem;
                   
                }
                span{
                    font-size: .32rem;
                    color: #666;
                }
                
          }
       } 
    }
  }

</style>

<template>
  <div class="my-order">
       <mt-popup v-model="visiblePopup.classify" :closeOnClickModal="true" :modal="false" position="right" class="modal-popup">
        <div>
        <div class="goodclassify">
        <div class="goodclassify-all-list" v-for="(item,index) in categoryRootB.data" :key="index">
            <div class="goodclassify-list">
                <div class="goodclassify-listleft">{{item.name}}</div>
                <!-- <div class="goodclassify-listright" v-if="!item.up_levl_list">
                    <span>350</span><span class="right-menu"></span>
                </div> -->
            </div>
            <div :class="['changehiden']" >
                <div class="goodclassify-list"  v-for="(itemDetial,index1) in item.up_levl_list" :key="index1" @click="rootScrollTo(itemDetial,0)">
                    <div class="goodclassify-listleft">{{itemDetial.name}}</div>
                </div> 
            </div>
        </div>
        </div>
        <div class="cartpop-shop-fixed">
        <div>取消</div>
        <div style="background: #ff2741;border:1px solid #ff2741;color:#fff">保存</div>
         </div>
      </div>
       </mt-popup>
    <div class="order-container">
      <load-more style="width:100%;" v-if="$route.name=='goodeditall'" @loadMore="infiniteCallback" :commad="commad" :param="params"
        :loadMoreIconVisible="false" ref="orderLoadmore">
        <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
          slot="refresh-spinner">更新中...</span>
        <!-- 全部订单 -->
        <div class="all-order" v-if="goodList!=''">
          <div class="order-list">
            <div class="order-item" v-for="(item,index) in goodList" :key="index">
             
              <div class="order-product-list">
               <div class="order-product-item" >
                  <div>
                    <i :class="['select-default-icon',item.checked ? 'select-icon' : '']" @click= "checked(item)"></i> 
                    <img  v-lazy="item.item_index_img_url+'_230x230.jpg'" alt="" @click= "()=>$router.push({path: '/product/'+item.item_id,query: {distributor_id:$route.params.distributor_id,distributor_item_id:item.distributor_item_id}})">
                    <div class="product-info">
                      <p class="prod-name" @click= "()=>$router.push({path: '/product/'+item.item_id,query: {distributor_id:$route.params.distributor_id,distributor_item_id:item.distributor_item_id}})">{{item.item_title}}</p>
                      <p class="prod-price" @click= "()=>$router.push({path: '/product/'+item.item_id,query: {distributor_id:$route.params.distributor_id,distributor_item_id:item.distributor_item_id}})">售价：¥{{item.sales_price/100|TwoNum}}&nbsp;&nbsp;成本：¥{{item.cost_price/100|TwoNum}} 起</p>
                      <p class="prod-num">
                        <span v-if="item.sales_volume>0">销量：{{item.sales_volume}}</span>
                        <span v-if="!item.sales_volume">销量：0</span>
                        <span class="edit-btn" ref="editIndexbox">
                        <img src="~jd/images/edit-icon.png"  style="height:.533333rem;"></span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <!-- 没有订单 -->
        <div class="order-nomore-tip" v-if="goodList==''">
          <i></i>
        </div>
        <!-- 没有订单 -->
      </load-more>
    </div>

    <div class="cart-shop-fixed">
        <div class="cart-shop-fixed-left"><i :class="['select-default-icon',selectedAll ? 'select-icon' : '']" @click= "selectedAllGoods"></i><span>全选</span></div>
        <div class="cart-shop-fixed-right">
            <p><img src="~jd/images/goodeditall-icon01.png" alt=""><span>编辑</span></p>
            <p><img src="~jd/images/goodeditall-icon03.png" alt=""><span>删除</span></p>
            <p @click="initData"><img src="~jd/images/goodeditall-icon02.png" alt=""><span>分类</span></p>
        </div>
    </div>
    <BackRouter :fixePosition='2'/>
  </div>
</template>

<script>
import BackRouter from 'common/backRouter';
import html2canvas from 'html2canvas';
  import {
    searchshopGoods,
    getpageCount
  } from '@/service/getData';
  import {
    pushHistory
  } from '@/utils/mixin';
  import LoadMore from 'common/loadMore';
  import {
    Toast,MessageBox,Actionsheet
  } from 'mint-ui'
   import {
    mapGetters,
    mapMutations
  } from 'vuex';
import Vue from 'vue'
Vue.component(Actionsheet.name, Actionsheet);
  export default {
    data() {
      return {
        commad: searchshopGoods,
        params: {
          distributor_id:this.$route.params.distributor_id,
          category_id:this.$route.query.category_id,
          status:1,
          page_size: 10,
          current_page: 1
        },
        visiblePopup: {
          classify:false
        },
        goodList: [],
        categoryRootB:[],
        selectedAll:false,
        totalNum:null,
        goodListDetail:[],
        goodListDetailin:[],
    
       }

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
      LoadMore,BackRouter
    },

    computed: {
        ...mapGetters([
        'categoryDataB'
        ]),
        ...{
        wcvisiblePopup(){
          return this.visiblePopup.classify;
        }
        }
    },

    methods: {
      cnzzTrackEvent(category, action, label){
           _czc.push(["_trackEvent",category,action,label]);
      },

      ...mapMutations([
        'SET_CATEGORY_DATA_B'
      ]),
      async initData(){
        if(!this.categoryDataB){
          let res = await this.$store.dispatch('GetCategoryListB');
          this.SET_CATEGORY_DATA_B(res.data)
          this.categoryRootB = res.data;
          this.visiblePopup.classify=true;
        }else{
          this.categoryRootB = this.categoryDataB;
          
          if(this.categoryRootB.data){
           this.categoryRootB.data.map(i=>{
             i.change=false;
           })
          }
           this.visiblePopup.classify=true;
        }
      },
      selectedAllGoods() {
        this.goodList.map(items => {
            items.checked = !this.selectedAll
        })
        
        this.selectedAll = !this.selectedAll;
        if(this.selectedAll){
            Toast({duration: 1000,
            message: '已选中'+this.goodList.length+'件商品'
            });
        }
      },
      
      async checked(item) {
        item.checked = !item.checked;
        let count = 0;
          this.goodList.map(items => {
            if (items.checked) return count++;
          })
         if (count === this.goodList.length) return this.selectedAllGoods();
      },
      
      // 提醒卖家发货成功
      async onRefreshCallback() { //下拉刷新
        this.params.page_size = 10;
        this.params.current_page = 1;
        this.goodList = [];
        this.$refs.orderLoadmore.onTopLoaded(this.$refs.orderLoadmore.uuid);
      },
      async infiniteCallback(response) { //加载更多订单
       if(response.data.distributor_item){
            if (response.data.distributor_item.length > 0) {
                this.selectedAll = false;
          response.data.distributor_item.map(i => {
            this.goodList.push(i)
            
          })
         }
       }
        
      },
    },
    filters:{
        topriceafter(value){
            return value.toFixed(2).substring(0, value.toFixed(2).indexOf('.'));
        },
        topricenext(value){
            return value.toFixed(2).substring(value.toFixed(2).indexOf('.')+1);
        },
        addImgSize(value){
          if(value==''||value==null){
            return;
          }
          if(value.indexOf("img1.vvic.com")!=-1){
            return value.replace('https://img1.vvic.com','https://m.chaochujue.cn/vvic/img1');
          }
          if(value.indexOf("img.vvic.com")!=-1){
            return value.replace('https://img.vvic.com','https://m.chaochujue.cn/vvic/img');
          }
          if(value.indexOf("alicdn.com")!=-1){
            return value;
          }
        }
    },
    mounted: function () {
      document.title=this.$route.query.category_name;
      this.onRefreshCallback();
    }
  }

</script>
<style lang='scss' scoped>

body{
    background: #fff!important;
  }
  
</style>
