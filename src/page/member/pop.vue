<!-- cart -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
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
        background: #fff;
        flex: initial;
        width: 9.4rem;
        margin: 0 .3rem 110px;
        border-radius: 5px;
        .delall-old-cart{
            @include flexbox(space-between,
                center,
                row,
                nowrap);
                height: 1.333333rem;
                padding: 0 15px;
                border-top: 8px solid #f2f2f2;
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
          
        .store-pd-item {
          @include flexbox(flex-start, center, row, wrap);
          padding: 15px;
          padding-bottom:10px;
          border-bottom: 1px solid #e4e4e4;
          // &:last-child {
          //   border:none;
          // }
          
          .prodskulist-info{
                width: 100%;
                // border-bottom: 1px solid #e4e4e4;
                // height: 42px;
                line-height: .64rem;
                color: #666;
                font-size: .346667rem;
                padding: 0 10px;
                 @include flexbox(space-between,
                flex-start,
                row,
                nowrap);
                .sku{
                  width: 80%;
                  .price{
                  width: 20%;
                  color: $red;
                  font-size: .426667rem;
                  font-weight: bold;
                  }
                }
             &:last-child {
                border-bottom: 1px solid #e4e4e4;
              }   
          }
          .pd-images {
            // border: 1px solid #eee;
            margin: 0 10px;
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
          .pd-price {
              // margin-top: 10px;
              @include flexbox(space-between, center, row, nowrap);
              flex: initial;
                  height: 1.28rem;
              //  border-bottom: 1px solid #e4e4e4;
              .left {
                color: #666;
                 width: 60%;
                 line-height: .48rem;
                 .price{
                   color: $red;font-size: .426667rem;
                   font-weight: bold
                 }
                span {
                  font-size: .32rem;
                  // font-weight:bold;
                }
                strong {
                  font-size: .426667rem;
                  em{
                    &:first-child{
                      margin-left:-3px;
                    }
                  }
                }
              }
              @media all and(max-width:359px){
                .left{
                  width:63%;
                }
              }
              @media all and(min-width:360px){
                .left{
                  width:66%;
                } 
              }
              .right {
                @include flexbox(space-between, center, row, nowrap);
                flex: initial;
                border: 1px solid #999;
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
                    background: #999;
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
                    background: #999;
                    width: 1px;
                    height: 100%;
                  }
                  &:after {
                    content: '+';
                    position: absolute;
                    left: calc(100%/2 - 5px);
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
          .pd-info {
            @include flexbox(flex-start, space-between, column, wrap);
            width: 100%;
            // flex: initial;
            
            .pd-title {
              @include textoverflow(2); // width: 90%;
              font-size: .373333rem;
              color: #333;
              p{
                @include textoverflow(2);
                height:1.066667rem;
                line-height: .533333rem;
                 
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
          color: #ff2741;
          
        }
        em{
          font-weight: bold;
          color: #ff2741;
          &:first-child{
            margin-left:-3px;
          }
        }
      }
    }
    .right {
      width: 34%;
      height: 100%;
      background: #ff2741;
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

    <!-- 购物车列表 -->
    <div class="Section">
      <!-- <div class="login-info" v-if="!isLogin">
        <button class="login" @click= "$router.push('/login')">登录</button>
        <span>登录后同步电脑与手机购物车中的商品</span>
      </div> -->
      <load-more :style="{width:'100%',height: '85%',paddingTop: isLogin ? '1.2rem' : '0'}" :topMethod="onRefreshCallback" :loadMoreIconVisible="false"
        ref="cartLoadmore">
        <div class="goods">

          <!-- 暂时还没做分店铺订单 -->
          <!-- <div class="store" v-if="false">
            <i class="select-default-icon"></i>
            <span>Apple旗舰店</span>
          </div> -->
          <!-- 暂时还没做分店铺订单 -->
          <div class="top-edit" v-if="cartlength>0">
            <p class="cartListNum">共{{cartlength}}件宝贝</p>
            <p class="cartListEdit" v-if="!delshow" @click= "editProductdelshow()">管理</p>
            <p class="cartListEdit" v-if="delshow" @click= "editProductdelshow()">完成</p>
          </div>
          <div class="store-pd" v-if="cartList">
            <div v-for="(item,index) in cartList" :key="index" >
              <p class="delall-old-cart" v-if="item.item_status==2&&cartListfilter.length==index"><span class="delall-old-cartleft">以下商品已失效</span><span class="delall-old-cartright" @click="clearOldcart">清除所有商品</span></p>
              <div class="store-pd-item" :class="[item.item_status==2? 'store-pd-itemnopadding':'',item.item_status==1&&cartListfilter.length==index+1?'store-pd-itemnoborder':'',cartList.length===index+1?'store-pd-itemnoborder':'']">
              <i :class="['select-default-icon',item.checked ? 'select-icon' : '',item.item_status==2&&!delshow ? 'select-defaultnone-icon' : '']" @click= "checked(item)"></i>
              <div class="pd-images" @click= "()=>$router.push('/product/'+item.item_id)">
                <img :src="item.index_img_url" alt="">
                <span v-if="item.item_status==2" class="pd-imagestip">失效</span>
              </div>
              <div class="pd-info" @click= "()=>$router.push('/product/'+item.item_id)">
                <div class="pd-title">
                  <p>{{item.item_title}}</p>
                </div>
              </div>
              <div style="width:100%" v-if="item.item_status!=2">
               <div  style="width:100%" v-for="(itemdetail,index1) in item.shopping_cart_item_b_o_list" :class="['pd-price',index1===item.shopping_cart_item_b_o_list.length-1&&index===cartList.length-1?'lastfood':'']" :key="index1">
                   <i :class="['select-default-icon',itemdetail.checked ? 'select-icon' : '',item.item_status==2&&!delshow ? 'select-defaultnone-cheicon' : '']" @click= "checkeddetail(item,itemdetail)"></i>
                  <div class="left">
                   <span class="sku"><em>颜色 {{itemdetail.color}}   尺寸 {{itemdetail.size}}</em><br><em class="price">￥{{itemdetail.sales_consumer_price/100.00}}</em></span>
                  </div>
                  <div class="right">
                    <div class="cut" @click= "editProductNum({item:item,itemdetail:itemdetail,increment:-1})"></div>
                    <input type="text" v-model="itemdetail.num" readonly='readonly' class="num-inp" @change="editProductNum({item:itemdetail,num:itemdetail.num})">
                    <div class="add" @click= "editProductNum({item:item,itemdetail:itemdetail,increment:1})"></div>
                  </div>
               </div>
               </div>
            </div>
            </div>
          </div>
        </div>
        <!-- <p v-if="!cartList || cartList == ''" style="margin-top:50px;padding: 15px 0;text-align:center;font-size:16px;color:#999;">购物车是空的</p> -->
        <div class="cartListNoneOut" v-show="!cartList || cartList == ''">
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
    <div class="section-bar" v-if="cartlength>0">
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
 import {searchGoods,addProduct,clearOldcartDate} from '@/service/getData';
  export default {
    data() {
      return {
        cartList: '',
        totalFee: 0,
        selectedCounter: 0,
        selectedAll: false,
        selectedchrenAll: false,
        isLogin: false,
        delshow:false,
        cartlength:0,
        commad: searchGoods,
        indexRusultData:[],
        indexParams: {
          title: '',
          category_id:'',
          page_size: 10,
          current_page: 1
        },
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
                if (items.item_status === 1) {
                  items.checked = !this.selectedAll
                }
                items.shopping_cart_item_b_o_list.map(itemdetail=>{
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
                items.shopping_cart_item_b_o_list.map(itemdetail=>{
                  if(items.checked){
                    itemdetail.checked=true
                  }else{
                    itemdetail.checked=false
                  }
                })
              })
            }
            

        this.selectedAll = !this.selectedAll;
        this.computedTotalFee();
      },
      
      editProductdel(){
         let SelectedList = [];
        let Selectedstr = '';
        this.cartList.map(item => {
           item.shopping_cart_item_b_o_list.map(itemdetail=>{
                  if (itemdetail.checked) {
                    SelectedList.push(itemdetail.id)
                  }
                })
        })
        Selectedstr=SelectedList.join(",");
        if (SelectedList == '') return Toast({duration: 1000,
          message: '请选择商品',
          position: 'bottom'
        });
        this.$store.dispatch('RemoveSelectedProduct', {
          shopping_cart_item_ids: Selectedstr
        }).then(response => {
          // this.$router.push('/createOrder');
          this.onRefreshCallback();
        })
        
      },
      // if (item.item_status === 1 && item.checked) {
      //   SelectedList.push(item.shopping_cart_id)
      // }


      confirmOrder() {
        let SelectedList = [];
        let Selectedstr = '';
        this.cartList.map(items => {
          
          items.shopping_cart_item_b_o_list.map(itemdetail=>{
            if (itemdetail.checked && items.item_status === 1) {
                 SelectedList.push(itemdetail.id)
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
          selectedCounter2 =0
        if(this.cartList!=null){
        this.cartList.map(items => {
          items.shopping_cart_item_b_o_list.map(itemdetail=>{
            if (itemdetail.checked && items.item_status === 1) {
            computedFee += parseFloat(itemdetail.num * itemdetail.sales_consumer_price)
            selectedCounter++
            }
          })
        })
        if(!this.delshow){
          this.cartList.map(items => {
          if (items.checked && items.item_status === 1){
             selectedCounter1++
          }
          })
        }else{
          this.cartList.map(items => {
          if (items.checked){
             selectedCounter2++
          }
          })
        }
        
       
        this.selectedCounter = selectedCounter;
        if(!this.delshow){
        this.selectedAll = selectedCounter1 === this.cartListfilter.length ? true : false;
        }else{
            this.selectedAll = selectedCounter2 === this.cartList.length ? true : false;
        }
        
        this.totalFee = computedFee;
        }
        
        
        
      },
      async editProductNum({item,
        itemdetail,
        increment,
        num
      }) {
        if (num) {
          itemdetail.num = num
        } else {
          itemdetail.num = itemdetail.num+increment
        }
        if(itemdetail.num<1){
          itemdetail.num=1;
          Toast({duration: 1000,
            message: '宝贝不能再减少了哦',
            position: 'center'
          })
          return;
        }
        let params = {
            shopping_cart_item_id: itemdetail.id,
            num:itemdetail.num
        }
        this.computedTotalFee();
        await this.$store.dispatch('UpdselectProduct', params)
        // this.onRefreshCallback();
      },
      async editProductdelshow() {
       this.delshow=!this.delshow;
       this.cartList.map(items => {
                  items.checked = false
                items.shopping_cart_item_b_o_list.map(itemdetail=>{
                    itemdetail.checked=false
                })
              })
        this.computedTotalFee();
      },

      async checked(item) {
        item.checked = !item.checked;
        let count = 0;
        
        this.cartList.map(items => {
          if (items.item_status === 1 && items.checked) return count++;
        })
        
        if(item.checked==false){
          item.shopping_cart_item_b_o_list.map(itemdetail => {
          itemdetail.checked=false;
        })
        }else{
          item.shopping_cart_item_b_o_list.map(itemdetail => {
          itemdetail.checked=1
          })
        }
        if (count === this.cartList.length) return this.selectedAllGoods();
        this.computedTotalFee();
        
      },

      async checkeddetail(item,itemdetail) {
        itemdetail.checked = !itemdetail.checked;
        let count = 0;
        item.shopping_cart_item_b_o_list.map(itemdetail => {
          if (item.item_status === 1 && itemdetail.checked) return count++;
        })
        if (count === item.shopping_cart_item_b_o_list.length){
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
        }else{
          this.cartList = Data.data.data;
        }
        
        this.cartlength=this.cartList?this.cartList.length:0
      },
      async onRefreshCallback() {
        this.$store.dispatch('GetSelectedProductList').then(response => {
          setTimeout(() => {
            this.cartList = response.data.data || null;
            this.cartlength=this.cartList?this.cartList.length:0;
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
      this.initData();
      this.indexParams = JSON.parse(JSON.stringify(Object.assign(this.indexParams,this.$route.query)))
      this.$refs.indexRusultloadMore.onloadMoreScroll();
    }
  }
</script>
<style lang='scss' scoped>
</style>