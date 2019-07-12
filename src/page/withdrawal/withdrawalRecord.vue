<!-- customerOrder -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .content{
    min-height:100vh;
    background-color:#f2f2f2;
  }
  //会员订单内容
  .customerOrder-con{
    .orderCount{
      @include flexbox(center,center,row,nowrap);
      background:#fff;
     
      li{
        @include flexbox(center,center,column,wrap);
        margin:28px 0;
        color:#333;
        em{
          height:18px;
          font-size:18px;
          font-weight: bold;
          color: $red
        }
        span{
          font-size:16px;
          margin-bottom:4px;
        }
      }
    }
  }
  
  .my-order {
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
        .order-item {
          background: #fff;
          width: 10rem;
       
          .order-top {
           height: 45px;
            background: #f2f2f2;
            @include flexbox(space-between,
            center,
            row,
            nowrap);
            padding: 0 10px;
            .left {
              text-align: left;
             
              span {
                font-size: 14px;
                color: #666;
              
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
              padding: 6px $padding;
              width: 100%;
              border-bottom: 1px solid #e4e4e4;
              p{
                  @include flexbox(space-between,center, row,nowrap);
                    font-size: 14px;
                    line-height: 28px;
              }
              .record-top{
                color: #333;
                .record-topprice{
                   color: $red;
                   font-weight: bold
                }
              }
              .record-bottom{
                color: #666
              }

            
            }
            .noborder{
                border: none;
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
<div @click="closeMsg($event)">
  <div class="content">
    
    <div class="customerOrder-con">
      <ul class="orderCount">
        <li style="border-right:1px solid #e4e4e4">
            <span>已提现金额</span>
            <em>￥{{accountRevenue.this_withdraw_amount/100|TwoNum}}</em>
        </li>
        <li>
          <span>提现中金额</span>
          <em style="color:#ff5527">￥{{accountRevenue.withdraw_amount/100|TwoNum}}</em>
        </li>
      </ul>
    </div>
   

    <div class="my-order">
     
    <div class="order-container">
      <!-- :topMethod="onRefreshCallback" -->
      <load-more style="width:100%;" v-if="$route.name=='withdrawalRecord'"  @loadMore="infiniteCallback" :commad="commad" :param="params" 
        :loadMoreIconVisible="false" ref="orderLoadmore">
        <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
          slot="refresh-spinner">更新中...</span>
        <!-- 全部订单 -->
        <div class="all-order" v-if="orderList!=''">
          <div class="order-list">
            <div class="order-item" v-for="(item,index) in orderList" :key="index">
              <div class="order-top">
                <div class="left">
                  <span>{{item.mon}}</span>
                </div>
              </div>
              <div class="order-product-list" v-for="(itemdetail,index1) in item.orderListBo" :key="index1"  >
                <div  :class="['order-product-item',item.orderListBo.length==index1+1 ? 'noborder' : '']">
                  <p class="record-top">
                      <span>提现</span>
                      <span class='record-topprice'>¥{{itemdetail.withdraw_amount/100|TwoNum}}</span>
                  </p>
                  <p class="record-bottom">
                      <span>时间：{{itemdetail.gmt_created | DateFormat('yyyy-MM-dd hh:mm:ss')}}</span>
                      <span v-if="itemdetail.withdraw_status==1">待打款</span>
                      <span v-if="itemdetail.withdraw_status==2">已打款</span>
                      <span v-if="itemdetail.withdraw_status==3">已驳回</span>
                  </p>
                </div>
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
    
  </div>
  
  <BackHead/>
</div>
</template>
<script>
  import BackHead from 'common/backHead';
  import {
    withdrawBillList,
    payDirect,
    accountRevenue
  } from '@/service/getData';
  import LoadMore from 'common/loadMore';
  import {
    Toast,MessageBox
  } from 'mint-ui'
  
  export default {
    data() {
      return {
        popupVisible:false,
        accountRevenue:{
             withdraw_amount:0,
             expense:0
        },
        orderCount:{
           orderTotalCount:''
        },
        
        commad: withdrawBillList,
        
        currentOrder: {}, //当前订单
        params: {
        //   page_size: 10,
        //   current_page: 1,
          
        },
        orderList: [],
        active: null,
        totalNum:null,
        orderListDetail:[],
        orderListDetailin:[],
        showChangeBoxBoo:false
      }
    },
    components:{
      BackHead,
      LoadMore
    },
    methods: {
      closeMsg:function(event){
                    var btn = document.querySelector(".bookTopnav-changeshow");
                    if(btn){
                        if(!btn.contains(event.target)){            //按钮.app-download以外的区域
                            this.showChangeBoxBoo = false;
                        }
                    }
                },
      showChangeBox(){
        this.showChangeBoxBoo=true;
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
        
      },
    
      async infiniteCallback(response) { //加载更多订单
    //   console.log(response.data.data.key)

     
      if (response.data.data){
            for(var st in response.data.data) {
               
                let orderListObj={mon:st.substring(0, 4)+'年'+st.substring(4, 6)+'月',orderListBo:response.data.data[st]}
                console.log(orderListObj)
                this.orderList.push(orderListObj)
            }
      }
      },
      async initData(){
          let Data = await accountRevenue();
            if(Data.code=10000){
            this.accountRevenue=Data.data
            }
        
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
this.onRefreshCallback();
    //   this.switchTabs(0)
    }
  }
</script>
<style lang="scss" scoped>
</style>