<!-- storeCreate -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .content{
    min-height:100vh;
    background-color:#f2f2f2;
  }
  .store-con{
    background:#fff;
    p{
      @include flexbox(space-between,center,row,nowrap);
      padding:0 .3rem;
      border-top:1px solid #e4e4e4;
      font-size:16px;
      color:#999;
      line-height:48px;
      input{
        width:7rem;
        color:#333;
        line-height:24px;
      }
      select{
        width:7.1rem;
        line-height:24px;
        background-color:#fff!important;
      }
      span:last-child{
        color:#333;
      }
      &:first-child{
        position:relative;
        span:last-child{
          position:absolute;
          right: .4rem;
          color:$red;
          font-size:14px;
        }
      }
      &:nth-child(3){
        position:relative;
        span:last-child{
          position:absolute;
          right: .4rem;
        }
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
  <div class="content">
    <div class="storeCreate-con store-con">
      <p>
        <label for="name">店铺名称</label>
        <input type="text" name="name"  v-model="shopForm.title" placeholder="店铺为2-10个字符" id="name" v-validate="'required'" @click="focuscodeoneclick" @blur="gotoView" v-focus="focuscodeoneState">
        <span v-show="shopForm.title.length>10">请输入合格店铺名称</span>
      </p>
      <p>
        <label for="category">主营类目</label>
        <input type="text" name="category"  value="女装" readonly="readonly">
      </p>
      <p>
        <label for="markup">商品加价</label>
        <input type="text" name="number" v-model="shopForm.n_times"  v-validate="'required|number'" @click="focuscodetwoclick" @blur="gotoView" v-focus="focuscodetwoState">
        <span>倍</span>
      </p>
      <p>
        <label for="freight">商品包邮</label>
        <select id="freight" v-model="shopForm.if_free_shipping">
          <option value="0">不包邮</option>
          <option value="1">包邮</option>
        </select>
      </p>
    </div>
    <p class="tip"><span>*</span>包邮产生的退货运费由您承担</p>
    <!-- <p class="create-btn btns" @click="$router.push('/myShop')">创建店铺</p> -->
     <div  class="save-shop" v-if="!shopForm.distributor_id"
      :class="['cell-btn',errors.has('name')||(shopForm.title.length==0||shopForm.title.length>10)||shopForm.n_times.length==0?'disabled-btn':'']" 
      @click= "saveShop">创建店铺</div>
      <div class="save-shop" v-if="shopForm.distributor_id"
      :class="['cell-btn',errors.has('name')||(shopForm.title.length==0||shopForm.title.length>10)||shopForm.n_times.length==0?'disabled-btn':'']" 
      @click= "saveShop">修改店铺</div>
  </div>
</div>
</template>

<script>
  import {
    Toast
  }from 'mint-ui'
  export default{
    data(){
      return{
        shopForm:{
          distributor_id:'',
          title:'',
          n_times:1,
          if_free_shipping:0
        },
        focuscodeoneState : false,
        focuscodetwoState : false,
      }
    },
    watch: {},
    components:{
    },
    computed:{},
    methods:{
      async saveShop(){
        let distributor_id='';
        // this.$route.query.distributor_id?distributor_id=this.$route.query.distributor_id:distributor_id='';
        if(this.$route.params.distributor_id){
        distributor_id=this.$route.params.distributor_id;
             this.focuscodeoneState=true;
             this.focuscodetwoState=true;
        }else{
          distributor_id=''
       }
        let params = {
          distributor_id:this.shopForm.distributor_id,
          title:this.shopForm.title,
          n_times:this.shopForm.n_times,
          if_free_shipping:this.shopForm.if_free_shipping
        };
        //有传Id则是编辑模式 没传是新增   
          this.$store.dispatch('SaveShop',params).then(response=>{
            response.code != 10000?Toast({message: '保存失败'}):Toast({message: '保存成功'});
            this.$router.push({path: '/myShop'})
            // if(response.code != 10000){
            //   Toast({
            //     message: '保存失败',
            //   })
            // }else {
            //   Toast({
            //     message: '保存成功'
            //   })
            //   this.$router.push({path: '/myShop'})
            // }
          }).catch(error=>{
              Toast({
                message: '访问接口失败'
              })
          });
        },
      async initData(){
        if(this.$route.query.distributor_id){
          let res = await this.$store.dispatch('GetShopInfo');
          if(res.code != 10000){
            Toast({message: '访问接口失败'})
          }
          this.shopForm.distributor_id = res.data.distributor_id;
          this.shopForm.title = res.data.title;
          this.shopForm.n_times = res.data.n_times;
          this.shopForm.if_free_shipping = res.data.if_free_shipping;
        }
      },
      focuscodeoneclick () {
      this.focuscodeoneState = true
      },
      focuscodetwoclick () {
      this.focuscodetwoState = true
      },gotoView () {
      window.scroll(0,0)
      this.focuscodeoneState = false;
      this.focuscodetwoState = false;
      }
    },  
    mounted: function () {
      this.initData();
    }

  }
</script>
<style lang="scss" scoped>


</style>
