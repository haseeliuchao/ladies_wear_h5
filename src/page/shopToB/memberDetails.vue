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
    .orderCon{
      border-radius:5px;
      .orderSort{
        @include flexbox(space-between,center,row,nowrap);
        padding:0 .2rem;
        li{
          padding:15px 0;
          font-size:14px;
          color:#666;
          &.active{
            color:$red;
          }
        }
      }
      .orderDetails{
        background-color:#fff;
        border-radius:5px;
        height:200px;
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
            <em class="setRemark" @click="()=>{popupVisible=true}">设置备注</em>
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
          <em>{{orderData.orderTotalCount}}</em>
          <span>累计订单数</span>
        </li>
      </ul>
    </div>
    <div class="orderCon">
      <ul class="orderSort">
        <li class="active">待发货({{orderData.to_deliver}})</li>
        <li>待收货({{orderData.toReceipt}})</li>
        <li>已完成({{orderData.dealSuccess}})</li>
        <li>已关闭({{orderData.dealClose}})</li>
        <!-- <li>更多<i></i></li> -->
      </ul>
      <div class="orderDetails">
        <div class="order-item">
          <!-- <p></p>
          <div></div>
          <div>
            <p>共<i>1</i>件<span>合计：<em></em></span></p>
          </div> -->
        </div>
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
    Toast
  } from 'mint-ui'
  import{
    MessageBox
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
        },
        nick_note:'',
        orderData:{}
      }
    },
    components:{
      BackHead
    },
    methods: {
      async updNick(){
        let distributor_user_id='';
        this.memberData.distributor_user_id?distributor_user_id=this.memberData.distributor_user_id:distributor_user_id='';
        let params = {
          distributor_user_id:this.memberData.distributor_user_id,
          nick_note:this.nick_note,
        };
        this.$store.dispath('UpdMemberNick',params).then(response=>{
          if(response.code != 10000){
            Toast({
              message: '保存失败',
            })
          }else{
            Toast({
              message: '保存成功'
            });
            this.popupVisible = false;
          }
        });
      },
      // async prompt(){
      //   const html = `<p><input type="text"></p>`
      //   MessageBox.prompt('',{
      //     $type:'prompt',
      //     title:'修改备注',
      //     inputPlaceholder:'请输入备注',
      //     inputValue:this.memberData.nick_note,
      //     message:html,
      //     confirmButtonText:'确定',
      //     cancelButtonText:'取消',
      //     // showInput:true
      //   }).then(action =>{
      //     if(action == 'confirm'){
      //       let distributor_user_id='';
      //       this.$route.params.distributor_user_id?     distributor_user_id=this.$route.params.distributor_user_id:distributor_user_id='';
      //       let params = {
      //           distributor_user_id:this.$router.params.distributor_user_id,
      //           nick_note:this.nick_note,
      //       };
      //       // this.$store.dispath('UpdMemberNick').then(response=>{
      //       // response.code != 10000?Toast({
      //       //     message: '保存失败',
      //       //   }):Toast({
      //       //     message: '保存成功'
      //       //   });
      //       // }

      //       // )
      //     }
      //   }).catch(
      //   )
      // }
      
      async initData(){
        let res = await this.$store.dispatch('GetMemberDetails');
        this.memberData= res.data;
        let Data = await this.$store.dispatch('GetOrderCount');
        this.orderData = Data.data;
      },
    },
    mounted: function () {
      this.initData();
    }
  }
</script>
<style lang="scss" scoped>
</style>
