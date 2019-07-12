<!-- cart -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .cart-title {
    @include flexbox(center, center, row, nowrap);
    font-size: 16px;
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
      font-size: 16px;
      color: #999;
    }
  }

  /* 购物车列表 */

  .Section {
    .cartListNoneOut{
      .cartListNone{
      height: 236px;
      width: 100%;
      background: #fff;
      text-align: center;
      overflow: hidden;
      img{
        height: 78px;
        margin-top: 50px;
        margin-bottom: 20px;
      };
      p{
        font-size: 15px;
        line-height: 22px;
        color: #999;
      }
    }
    .product-list-top{
      padding: 15px 12px; 
      @include flexbox(space-between,center,row,nowrap);
      font-size: 15px;
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
        padding: 0 12px;
        .prod-item{
          background: #fff;
          width: 48.6%;
          margin-bottom: 8px;
          border-radius: 6px;
          overflow: hidden;
          img{
            width: 100%;
            height: 162px;
            border-radius: 6px;
          }
          .prod-info{
            // margin-left: 10px;
            padding: 0px 10px;
            
            @include flexbox(space-between,flex-start,column,wrap);
            .prod-title{
              font-size: 0.343rem;
              color: #333;
              @include textoverflow(2);
              height: 0.9rem;
              line-height: 0.45rem;
              margin-top: 4px;
              text-align: justify;
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
          font-size: 16px;
          color: #333;
        }
      }
      .store {
        @include flexbox(flex-start, center, row, nowrap);
        flex: initial;
        font-size: 14px;
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
        .store-pd-item {
          @include flexbox(flex-start, center, row, nowrap);
          padding: 10px;
          // border-bottom: 1px solid #eee;
          &:last-child {
            border-bottom: none;
          }
          .pd-images {
            // border: 1px solid #eee;
            margin: 0 10px;
            overflow: hidden;
            img {
              width: 89px;
              height: 89px;
              border-radius:5px;
            }
             position: relative;
            .pd-imagestip{
              height: 89px;
              width: 89px;
              background: rgba(0,0,0,.4);
              position: absolute;z-index: 2;
              color: #fff;
              top: 0;
              left: 0;
              font-size: 18px;
              text-align: center;
              line-height: 89px;
              border-radius:5px;
            }
          }
          .pd-info {
            @include flexbox(flex-start, space-between, column, wrap);
            width: 100%;
            // flex: initial;
            .pd-title {
              @include textoverflow(2); // width: 90%;
              font-size: 14px;
              color: #333;
              p{
                @include textoverflow(2);
                height:40px;
                line-height: 20px;
                 
              }
            }
            .pd-sku {
              @include textoverflow(1);
              padding: 5px 0;
              line-height: 1.5;
              font-size: 13px;
              color: #666;
            }
            .pd-price {
              // margin-top: 10px;
              @include flexbox(space-between, center, row, nowrap);
              flex: initial;
              .left {
                color: #ff2741;
                font-weight:bold;
                span {
                  font-size: 12px;
                  font-weight:bold;
                }
                strong {
                  font-size: 16px;
                  em{
                    &:first-child{
                      margin-left:-3px;
                    }
                  }
                }
              }
              .right {
                @include flexbox(space-between, center, row, nowrap);
                flex: initial;
                border: 1px solid #999;
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
                  font-size: 14px;
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
          }
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
        @include textoverflow(1);
        span{
          font-weight: bold;
          font-size: 12px;
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
      height: 30px;
      border: 1px solid $red;
      padding: 0 26px;
      border-radius: 16px;
      color: $red;
      font-size: 16px;
      line-height: 30px;
      margin-right: 12px;
      // width: 2.8rem;
    }
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
      <load-more :style="{width:'100%',height: '85%',paddingTop: isLogin ? '1.2rem' : '0'}"  :loadMoreIconVisible="false"
        ref="cartLoadmore">
        <div class="goods" v-if="cartList && cartList != ''">
          <!-- 暂时还没做分店铺订单 -->
          <div class="top-edit" v-if="cartlength>0">
            <p class="cartListNum">共{{cartlength}}件宝贝</p>
            <p class="cartListEdit" v-if="!delshow" @click= "editProductdelshow()">管理</p>
            <p class="cartListEdit" v-if="delshow" @click= "editProductdelshow()">完成</p>
          </div>
          <div class="store-pd" v-if="cartList">
            <div class="store-pd-item" v-for="(item,index) in cartList" :key="index">
             
              <i :class="['select-default-icon',item.checked ? 'select-icon' : '',item.item_status!=1&&!delshow ? 'select-defaultnone-icon' : '']" @click= "checked(item)"></i>
              <div class="pd-images">
                <img v-lazy="item.item_url+'_190x190.jpg'" alt="">
                <span v-if="item.item_status!=1" class="pd-imagestip">失效</span>
              </div>
              <div class="pd-info">
                <div class="pd-title">
                  <p>{{item.item_title}}</p>
                </div>
                <div class="pd-sku">
                  <p class="sku-info">{{item.color}}  {{item.size}}</p>
                </div>
                <div class="pd-price">
                  <div class="left">
                    <!-- <span>&yen;</span> -->
                    <strong><em style="font-size:16px;">￥{{item.sales_consumer_price/100.00}}</em></strong>
                    
                  </div>
                  <div class="right">
                    <div class="cut" @click= "editProductNum({item:item,increment:-1})"></div>
                    <input type="text" v-model="item.num" class="num-inp" @change="editProductNum({item:item,num:item.num})">
                    <div class="add" @click= "editProductNum({item:item,increment:1})"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <!-- <p v-if="!cartList || cartList == ''" style="margin-top:50px;padding: 15px 0;text-align:center;font-size:16px;color:#999;">购物车是空的</p> -->
        <div class="cartListNoneOut" v-if="!cartList || cartList == ''">
          <div class="cartListNone">
            <img src="~jd/images/cartnone.png">
            <p>购物车快饿瘪了<br>
              快给我挑点宝贝吧！</p>
          </div>

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
        <strong v-if="!delshow">合计：<em style="font-size:18px;">{{totalFee/100|TwoNum}}</em></strong>
      </div>
      <div v-if="!delshow" class="right" @click= "confirmOrder()">
        <strong>结算</strong>
      </div>
      <span class="del" v-if="delshow" @click= "editProductdel()">删除</span>
    </div>
    <!-- 底部价格计算 -->
    <footerViewToC :distributorId='$route.params.distributor_id'/>
  </div>
</template>

<script>
  import footerViewToC from 'component/footer/footerViewToC';
  import SearchBar from 'page/shop/searchBar';
  import {
    Toast
  } from 'mint-ui'
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
 import {searchGoods} from '@/service/getData';
  export default {
    data() {
      return {
        cartList: null,
        totalFee: 0,
        selectedCounter: 0,
        selectedAll: false,
        isLogin: false,
        delshow:false,
        cartlength:0,
        indexRusultData:[],
      };
    },

    watch: {},

    components: {
      footerViewToC,
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
      selectedAllGoods() {
        if(!this.delshow){
        this.cartList.map(item => {
          if (item.item_status === 1) {
            item.checked = !this.selectedAll
          }
        })
        }else{
          this.cartList.map(item => {
            item.checked = !this.selectedAll
          })
        }
        this.selectedAll = !this.selectedAll;
        this.computedTotalFee();

      },
      editProductdel(){
         let SelectedList = [];
        let Selectedstr = '';
        this.cartList.map(item => {
          if (item.checked) {
            SelectedList.push(item.id)
          }
        })
        Selectedstr=SelectedList.join(",");
        if (SelectedList == '') return Toast({duration: 1000,
          message: '请选择商品',
          position: 'bottom'
        });
        this.$store.dispatch('RemoveSelectedProduct', {
          shopping_cart_item_ids: Selectedstr,
          distributor_id:this.$route.params.distributor_id
        }).then(response => {
         if(response.code==10000){
           this.initData();
        }else{
          Toast({duration: 1000,
                  message: response.msg
               })
          return;
        }
          
        })
        
      },
      confirmOrder() {
        let SelectedList = [];
        let Selectedstr = '';
        this.cartList.map(item => {
          if (item.item_status === 1 && item.checked) {
            SelectedList.push(item.id)
          }
        })
        Selectedstr=SelectedList.join(",");
        if (SelectedList == '') return Toast({duration: 1000,
          message: '请选择商品',
          position: 'center'
        });

        this.$router.push({path: '/createOrderToC',query: {Selectedstr:Selectedstr,checkout_type:1,distributor_id:this.$route.params.distributor_id}});
      },
      computedTotalFee() {
        let computedFee = 0,
          selectedCounter = 0;
        if(this.cartList!=null){
        if(!this.delshow){  
        this.cartList.map(item => {
          if (item.checked && item.item_status === 1) {
            computedFee += parseFloat(item.num * item.sales_consumer_price)
            selectedCounter++
          }
        })
        this.selectedCounter = selectedCounter;
        if(this.cartListfilter.length==0){
          this.selectedAll=false;
        }else{
         this.selectedAll = selectedCounter === this.cartListfilter.length ? true : false;
        }
        this.totalFee = computedFee;
        }else{
          this.cartList.map(item => {
          if (item.checked) {
            computedFee += parseFloat(item.num * item.sales_consumer_price)
            selectedCounter++
          }
          })
        this.selectedCounter = selectedCounter;
        this.selectedAll = selectedCounter === this.cartList.length ? true : false;
        }
        }
      },
      async editProductNum({
        item,
        increment,
        num
      }) {
        if (num) {
          item.num = num
        } else {
          item.num = item.num+increment
        }
        if(item.num<1){
          item.num=1;
          Toast({duration: 1000,
            message: '宝贝不能再减少了哦',
            position: 'center'
          })
          return;
        }
        let params = {
            shopping_cart_item_id: item.id,
            num:item.num,
            distributor_id:this.$route.params.distributor_id
        }
        this.computedTotalFee();
        await this.$store.dispatch('UpdselectProduct', params)
        // this.onRefreshCallback();
      },
      async editProductdelshow() {
       this.delshow=!this.delshow;
       this.cartList.map(items => {
                  items.checked = false
              })
        this.computedTotalFee();
      },
      async checked(item) {
        item.checked = !item.checked;
        let count = 0;
        this.cartList.map(item => {
          if (item.item_status === 1 && item.checked) return count++;
        })
        if (count === this.cartList.length) return this.selectedAllGoods();
        this.computedTotalFee();
      },
      async initData() {
        this.selectedAll=false;
        let Data = await this.$store.dispatch('GetSelectedProductList', {
          distributor_id:this.$route.params.distributor_id
        });
        if(Data.code!=10000){
          Toast({duration: 1000,
            message: Data.msg
          })
          return
        }
        if(Data.data==undefined){
          this.cartList = [];
        }else{
          this.cartList = Data.data.data;
        }
        
        this.cartlength=this.cartList?this.cartList.length:0
      }
      

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
      this.$wxShare({title: '快来看看我店里的好东西，总有一款打动你哦',desc: '精选好物等你来选',link:''+process.env.API_ROOT+'/api/redirect?path='+BASE64.encoder('/indexToC/'+this.$route.params.distributor_id)+'',imgUrl: "http://img.chaochujue.cn/ICON/2019/5/1/201906241553261561362823561.png"})
      this.initData();
    }
  }
</script>
<style lang='scss' scoped>
</style>