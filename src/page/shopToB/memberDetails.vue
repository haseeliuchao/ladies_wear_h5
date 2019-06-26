<!-- customerOrder -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .content{
    min-height:100vh;
    background-color:#f2f2f2;
  }
  //会员信息
  .customerOrder-header{
    width:100%;
    height:126px;
    padding:24px .3rem;
    background-color: #ff5527;
    .customerInfo{
      @include flexbox(flex-start,center,row,nowrap);
      .avatar {
        img {
          width: 56px;
          height: 56px;
          border: 1px solid hsla(0, 0%, 100%, .4);
          border-radius: 5px;
        }
      }
      .customer{
        @include flexbox(center,flex-start,column,wrap);
        height:64px;
        margin-left:.4rem;
        .customerName,.setRemark {
          color:#fff;
        }
        .customerName{
          font-size:16px;
        }
        .setRemark{
          font-size:12px;
          margin-top:8px;
          padding:3px 7px;
          border:1px solid #fff;
          border-radius:2px;
        }
      }
    }
  }
  //会员订单内容
  .customerOrder-con{
    position:relative;
    top:-25px;
    padding:0 .3rem;
    .orderCount{
      @include flexbox(center,center,row,nowrap);
      background:#fff;
      border-radius:5px;
      li{
        @include flexbox(center,center,column,wrap);
        padding:10px 0;
        color:#333;
        em{
          height:16px;
          font-size:15px;
        }
        span{
          font-size:14px;
          margin-top:4px;
        }
      }
    }
  }
  .my-order {
    margin-top:-25px;
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
      width: 9rem;
      background: #f2f2f2;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-left: .5rem;
      z-index: 111;
      position: relative;
      
      #loadingbar {
        position: absolute;
        transition: .4s;
        width: calc((100%/8));
        // width:42px;
        background: $red;
        bottom: 0;
        height: 2px;
      }
      >span {
        // width: 33.33%;
        padding: 14px 0 ;
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
      .all-order {
        background: #f5f5f5;
      }
      .order-list {
        // background: #fff;
        margin-top: $margin;
        .order-item {
          margin-top: 10px;
          background: #fff;
          width: 9.4rem;
          margin-left: .3rem;
          border-radius: 6px;
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
                      font-size: 14px;
                      span{
                        font-weight:bold;
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
                      font-size: 14px;
                      span{
                        font-weight:bold;
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
  }
  //设置备注弹窗
  .setNickPop{
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    position:fixed;
    top:0;
    width:100%;
    min-height:100vh;
    background:rgba(0,0,0,.4);
    z-index:50000;
    .setNick-con{
      @include flexbox(center,center,column,wrap);
      margin:0 1rem;
      background:#fff;
      border-radius:5px;
      h2{
        font-size:16px;
        color:#333;
        line-height:38px;
      }
      input{
        width:6rem;
        margin:0 1rem;
        font-size:15px;
        color:#333;
        line-height:32px;
        border:1px solid #e4e4e4;
        border-radius:4px;
      }
      .popBtn{
        @include flexbox(space-between,center,row,nowrap);
        width:100%;
        margin-top:15px;
        font-size:16px;
        color:#333;
        span{
          @include flexbox(center,center,row,nowrap);
          line-height:60px;
          border-top:1px solid #e4e4e4;
          &:last-child{
            color:$red;
            border-left:1px solid #e4e4e4;
          }
        }
      }
    }
  }
</style>
<template>
<div>
  <div class="content">
    <div class="customerOrder-header">
      <div class="customerInfo">
          <div class="avatar">
            <img :src="!memberData? 'https://static.hdslb.com/images/akari.jpg' : memberData.head_img"/>
          </div>
          <div class="customer">
             <!-- v-if="userData.memberInfo" -->
            <span class="customerName" v-if="!memberData.nick_note">{{memberData.nick}}</span>
            <span class="customerName" v-if="memberData.nick_note">{{memberData.nick_note}}</span>
            <em class="setRemark" v-if="!memberData.nick_note" @click="()=>{popupVisible=true}">设置备注</em>
            <em class="setRemark" v-if="memberData.nick_note" @click="()=>{popupVisible=true}">修改备注</em>
          </div>
      </div>
    </div>
    <div class="customerOrder-con">
      <ul class="orderCount">
        <li>
            <em>{{memberData.checkout_amount}}</em>
            <span>累计消费(元)</span>
        </li>
        <li>
          <em>{{orderCount.order_total_count}}</em>
          <span>累计订单数</span>
        </li>
      </ul>
      
    </div>
    <div class="my-order">
     <div class="topnav">
            <span @click.stop.prevent="switchTabs(0)" :class="{'active':active===0}">待发货({{orderCount.to_deliver}})</span>
            <span @click.stop.prevent="switchTabs(1)" :class="{'active':active===1}">待收货({{orderCount.to_receipt}})</span>
            <span @click.stop.prevent="switchTabs(2)" :class="{'active':active===2}">已完成({{orderCount.deal_success}})</span>
            <span @click.stop.prevent="switchTabs(3)" :class="{'active':active===3}">已关闭({{orderCount.deal_close}})</span>
            <div id="loadingbar" :style="active===0 ? 'left:2.5%' : active===1 ?  'left:29%' : active===2 ?'left:56%' : 'left:83%'"></div>
      </div>
    <div class="order-container">
      <!-- <load-more style="width:100%;" v-if="$route.path=='/searchImg'" @loadMore="infiniteCallback" :commad="commad" :param="indexParams"
              ref="indexRusultloadMore"> -->
              <!--  -->

      <load-more style="width:100%;" v-if="$route.name=='memberDetails'" @loadMore="infiniteCallback" :commad="commad" :param="params" :topMethod="onRefreshCallback"
        :loadMoreIconVisible="false" ref="orderLoadmore">
        <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
          slot="refresh-spinner">更新中...</span>
        <!-- 全部订单 -->
        <div class="all-order" v-if="orderList!=''">
          <div class="order-list">
            <div class="order-item" v-for="(item,index) in orderList" :key="index">
              <div class="order-top" @click= "()=>$router.push({path: '/orderToC/'+item.order_code,query: {distributor_id:$route.query.distributor_id}})">
                <div class="left">
                  <span>订单编号：{{item.order_code}}</span>
                </div>
                <div class="right">
                  <div class="order-status">
                    <span>{{item.order_status_str}}</span>
                  </div>
                </div>
              </div>
              <div class="order-product-list" @click= "()=>$router.push({path: '/orderToC/'+item.order_code,query: {distributor_id:$route.query.distributor_id}})"  v-for="(itemdetail,index) in item.item_info_list" :key="index"  >
                <div class="order-product-item">

                  <div>
                    <img v-lazy="itemdetail.item_img+'_190x190.jpg'">
                    <div class="product-info">
                      <p class="prod-name">{{itemdetail.item_title}}</p>
                      <p class="prodsku-info">颜色 {{itemdetail.color}}&nbsp;&nbsp;&nbsp;&nbsp;尺寸 {{itemdetail.size}}</p>
                      <p class="prod-price">
                        <strong><em style="font-size:16px;">￥{{itemdetail.item_price/100|TwoNum}}</em></strong>
                        <span>x{{itemdetail.num}}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-sku" @click= "()=>$router.push({path: '/orderToC/'+item.order_code,query: {distributor_id:$route.query.distributor_id}})">
                <span>共{{totalNum}}件商品&nbsp;<em>实付：</em></span>
                <strong><em style="font-size:16px;">￥{{item.pay_price/100|TwoNum}}</em></strong>
              </div>
             
            </div>
          </div>
        </div>
        

        <!-- 没有订单 -->
        <div class="order-nomore-tip" v-if="orderList==''">
          <i></i>
        </div>
        <!-- 没有订单 -->
      </load-more>

    </div>
    </div>
    
    <div class="setNickPop" v-if="popupVisible">
      <div class="setNick-con">
          <h2 v-if="!memberData.nick_note">设置备注</h2>
          <h2 v-if="memberData.nick_note">修改备注</h2>
          <input type="text" v-model="memberData.nick_note" placeholder="请输入备注">
          <div class="popBtn">
            <span @click="()=>{popupVisible=false}">取消</span>
            <span @click="updNick">确认</span>
          </div>
      </div>
  </div>
  </div>
  
  <BackHead/>
</div>
</template>
<script>
  import BackHead from 'common/backHead';
  import {
    getOrderListMemberC,
    payDirect
  } from '@/service/getData';
  import LoadMore from 'common/loadMore';
  import {
    Toast,MessageBox
  } from 'mint-ui'
  
  export default {
    data() {
      return {
        popupVisible:false,
        memberData:{
          distributor_id:'',
          distributor_user_id:'',
          member_id:'',
          nick_note:'',
          checkout_amount:'',
        },
        orderCount:{
           orderTotalCount:''
        },
        
        commad: getOrderListMemberC,
        visiblePopup: {
          paymentLoadingVisible: false,
          paymentContainerVisible: false
        },
        paymentPassword: null, //支付密码
        currentOrder: {}, //当前订单
        params: {
          page_size: 10,
          current_page: 1,
          member_id:this.$route.query.member_id,
          order_status:null
        },
        orderList: [],
        active: null,
        totalNum:null,
        orderListDetail:[],
        orderListDetailin:[]
      }
    },
    components:{
      BackHead,
      LoadMore
    },
    methods: {
      //修改备注昵称
      async updNick(){
        let params = {
          distributor_user_id:this.memberData.distributor_user_id,
          nick_note:this.memberData.nick_note,
        };
        this.$store.dispatch('UpdMemberNick',params).then(response=>{
          if(response.code != 10000){
            Toast({duration: 2000,
              message: '保存失败',
            })
          }else{
            Toast({duration: 2000,
              message: '保存成功'
            });
            this.popupVisible = false;
            this.initData()
          }
        }).catch(error=>{
              Toast({duration: 2000,
                message: '访问接口失败'
              })
        });
      },
      //订单
    
    
      tipSend(){
        Toast({duration: 2000,
            message: "提醒卖家发货成功"
          })
      },
      // 提醒卖家发货成功
      async onRefreshCallback() { //下拉刷新
        this.params.page_size = 10;
        this.params.current_page = 1;
        this.orderList = [];
        this.$refs.orderLoadmore.onTopLoaded(this.$refs.orderLoadmore.uuid);
      },
      switchTabs(Id) {
        if (this.active === Number(Id)) return;
        this.active = Id;
        switch (Number(this.active)) {
          case 0: //待发货
            this.params.order_status = 2;
            break;
          case 1: //待收货
            this.params.order_status = 3;
            break;
          case 2: //已完成
            this.params.order_status = 4;
            break;
          case 3: //已关闭
            this.params.order_status = 5;
            break;
          default: //其他
            throw new Error('未知TabId')
            break
        }
        this.onRefreshCallback();
      },
    
      async infiniteCallback(response) { //加载更多订单
        if (response.data.data.length > 0) {
          response.data.data.map(i => {
            // i.orderInfo.total_fee = i.orderInfo.total_fee.toFixed(2)
            this.orderList.push(i)
          })
        }
      },
      async initData(){
        //客户详情
        let res = await this.$store.dispatch('GetMemberDetails',{
          distributor_user_id:this.$route.query.distributor_user_id
        });
        if(res.code!=10000){
          Toast({duration: 2000,message: res.msg})
        }
        this.memberData= res.data;
        this.memberData.distributor_id = res.data.distributor_id;
        this.memberData.distributor_user_id = res.data.distributor_user_id;
        this.memberData.nick_note = res.data.nick_note;
        this.memberData.checkout_amount= res.data.checkout_amount;
        //订单计数
        let data = await this.$store.dispatch('GetOrderCount',{
          member_id:this.$route.query.member_id,
          distributor_id:this.$route.query.distributor_id
        });
         if(data.code!=10000){
          Toast({duration: 2000,message: data.msg})
        }
        this.orderCount= data.data;
        this.orderCount.orderTotalCount= data.data.orderTotalCount;
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
      this.initData();
      //  console.log(this.$route.name)

      this.switchTabs(0)
    }
  }
</script>
<style lang="scss" scoped>
</style>