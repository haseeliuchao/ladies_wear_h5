<!-- review -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .content{
    min-height:100vh;
  }
  .searchInput{
    @include flexbox(space-between,center,row,nowrap);
    height:58px;
    padding: 10px .3rem;
    .search-box{
      @include flexbox(space-between,center,row,nowrap);
      width:8.4rem;
      height:32px;
      padding:0 .4rem;
      line-height:32px;
      background-color:#fff;
      border-radius:16px;
      box-shadow:0 0 6px rgba(0,0,0,.1);
      input{
        display:flex;
        flex:1;
        justify-content:flex-start;
        font-size:14px;
        line-height:32px;
        text-indent:5px;
      }
      .searchIcon{
        display:flex;
        justify-content:flex-start;
        width:15px;
        height:15px;
        background: url('~jd/images/sarchicon.png') no-repeat;
        background-size: 15px 15px;
      }
      .delIcon{
        width:17px;
        height:17px;
        display:flex;
        justify-content:flex-end;
        background: url('~jd/images/delIcon.png') no-repeat;
        background-size: 17px 17px;
      }
    }
    span{
      display:flex;
      justify-content:flex-end;
      margin-left:.3rem;
      font-size:14px;
      color:#595959;
    }
  }
  .customer-info{
    min-height: calc(100vh - 58px);
    background:#fff;
    li{
      @include flexbox(flex-start,center,row,nowrap);
      width:100%;
      padding:12px .3rem;
      border-bottom:1px solid #e4e4e4;
      img{
        width:56px;
        height:56px;
        border-radius:5px;
      }
      div{
        padding:7px 10px;
        p{
          display:flex;
          flex:1;
          justify-content:flex-start;
          &:first-child{
            height:18px;
            font-size:16px;
            color:#333;
          }
          &:last-child{
            margin-top:8px;
            font-size:15px;
            color:#666;
            em{
              font-weight:bold;
            }
            i{
              font-weight:bold;
            }
          }
          
        }
      }
      span{
        display:flex;
        flex:1;
        justify-content:flex-end;
        color:#a4a4a4;
        font-size:16px;
      }
    }
  }
</style>
<template>
<div>
  <div class="content">
    <div class="searchInput" @click= "$refs.searchInput.focus()">
      <div class="search-box">
        <i class="searchIcon"></i>
        <input type="search"  v-model="search_parameter"  @keypress="truesearchRusult" placeholder="通过手机号、备注名、昵称等查找" ref="searchInput">
        <i class="delIcon" @click="clearSearch"></i>
      </div>
      <span @click="searchRusult">搜索</span>
    </div>
    <ul class="customer-info" v-if="memberData.memberList" >
      <li @click="()=>$router.push({path:'/memberDetails',query:{distributor_id:$route.query.distributor_id}})" v-for="(item,index) in memberData.memberList" :key="index">
        <img  :src="item.head_img" alt="">
        <div>
          <p v-if="!item.nick_note">{{item.nick}}</p>
          <p v-if="item.nick_note">{{item.nick_note}}</p>
          <p>累计消费：<em>￥</em><i>{{item.checkout_amount}}</i></p>
        </div>
        <span>></span>
      </li>
    </ul>
  </div>
  <BackHead/>
</div>
</template>

<script>
 import BackHead from 'common/backHead';
 import {
    getMemberList
  } from '@/service/getData'
 import {
    Toast
  }from 'mint-ui';
  export default{
    data(){
      return{
        memberData:{
          memberList:{}
        },
        search_parameter:''
      }
    },
    watch: {},
    components:{
      BackHead
    },
    computed:{},
    methods:{
      async searchRusult() {
        this.memberData = {};
        this.search_parameter?this.search_parameter=this.search_parameter:this.search_parameter=''
        if(this.search_parameter==''){
           Toast("请输入搜索条件")
        }
        let Data = await getMemberList({
          search_parameter: this.search_parameter,
          page_size: 10,
          current_page: 1
        });
        if(Data.code!=10000){
          Toast({message:'访问接口失败'})
        }
        this.memberData = Data.data;
        this.memberData.memberList = Data.data.data;
      },
      async truesearchRusult(event) { 
        if (event.keyCode == 13) { //如果按的是enter键 13是enter 
            event.preventDefault(); //禁止默认事件（默认是换行） 
            this.searchRusult(this.search_parameter)
        } 
      }, 
      async clearSearch(){
        this.search_parameter='';
      },
      async initData(){
        let res = await this.$store.dispatch('GetMemberList');
        if(res.code!=10000){
          Toast({message:'访问接口失败'})
        }
        this.memberData = res.data;
        this.memberData.memberList = res.data.data;
      }
    },  
    mounted: function () {
      this.initData();
    }
  }
</script>
<style lang="scss" scoped>
</style>
