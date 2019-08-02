<!-- storeCreate -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .content{
    background-color:#f2f2f2;
    margin-top: -2px;
  }
  .store-con{
    background:#fff;
    p{
      @include flexbox(flex-start,
            center,
            row,
            nowrap);
      padding:0 .3rem;
      border-top:1px solid #e4e4e4;
      font-size:16px;
      color:#999;
      line-height:48px;
      .store-con-left{
          width: 24%;
          
      }
      .store-con-right{
          color: #333;
           @include flexbox(space-between,
      center,
      row,
      nowrap);
      }
     
    }
  }
  .tip{
    padding: 10px .3rem;
    font-size:14px;
    color:#999;
    span{
      margin-right: 5px;
      color:$red;
    }
  }
  .save-shop {
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      padding: 14px 0;
      background-color: $red;
      font-size: 18px;
      color: #fff;
  }
  .disabled-btn{
    margin:0;
    border-radius:0;
    background-color:#b4b4b4!important;
    color:#fff!important;
  }
  .cell-btn{
    margin:0;
    border-radius:0;
  }
</style>
<template>
<div>
     <img :src="shopForm.img_url" style="width:10rem">
  <div class="content">
    <div class="storeCreate-con store-con">
      <p style="border-top:none">
         <span class="store-con-left">店铺名称</span>
        <span class="store-con-right">{{shopForm.title}}</span>
      </p>
      <p>
        <span class="store-con-left">主营类目</span>
        <span class="store-con-right">{{shopForm.category}}</span>
      </p>
      <p >
        <span class="store-con-left">商品加价</span>
        
        <span class="store-con-right"><em>{{shopForm.n_times}}</em><em>倍</em></span>
        
        <!-- <span v-show="errors.has('number')">请输入一位小数的正实数</span> -->
      </p>
      <p>
        <span class="store-con-left">商品包邮</span>
        <span class="store-con-right" v-if="shopForm.if_free_shipping==0">不包邮</span>
        <span class="store-con-right" v-else>包邮</span>

      </p>
    </div>
    <p class="tip"><span>*</span>包邮产生的退货运费由您承担</p>
    <!-- <p class="create-btn btns" @click="$router.push('/myShop')">创建店铺</p> -->
      <div class="save-shop"
      :class="['cell-btn']" 
      @click="$router.push({path: '/shopManage',query: {distributor_id:$route.query.distributor_id}})">修改店铺信息</div>
  </div>
  <BackRouter :fixePosition='2'/>
</div>
</template>

<script>
import BackRouter from 'common/backRouter';
  import {
    Toast
  }from 'mint-ui'
  export default{
    data(){
      return{
        shopForm:{
          distributor_id:'',
          title:'',
          category:'女装',
          n_times:1,
          if_free_shipping:0,
          img_url:'https://img.chaochujue.cn/ICON/2019/7/5/shopcbanner1564714754308.png'
        },
        focuscodeoneState : false,
        focuscodetwoState : false,
      }
    },
    watch: {},
    components:{
      BackRouter
    },
    computed:{},
    methods:{
      async initData(){
        if(this.$route.query.distributor_id){
          let res = await this.$store.dispatch('GetShopInfo');
          if(res.code != 10000){
            Toast({duration: 1000,message: '访问接口失败'})
          }
          this.shopForm.distributor_id = res.data.distributor_id;
          this.shopForm.title = res.data.title;
          this.shopForm.img_url = res.data.img_url?res.data.img_url:'https://img.chaochujue.cn/ICON/2019/7/5/shopcbanner1564714754308.png';
          this.shopForm.n_times = res.data.n_times;
          this.shopForm.if_free_shipping = res.data.if_free_shipping;
        }
      }
    },  
    mounted: function () {
      this.initData();
    }

  }
</script>
<style lang="scss" scoped>


</style>
