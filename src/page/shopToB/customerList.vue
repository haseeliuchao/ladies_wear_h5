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
        <input type="search" placeholder="通过手机号、备注名、昵称等查找" ref="searchInput">
        <i class="delIcon"></i>
      </div>
      <span>取消</span>
    </div>
    <ul class="customer-info">
      <li @click="$router.push('/customerOrder')">
        <img src="~jd/images/orderManage.png">
        <div>
          <p>樱桃小丸子</p>
          <p>累计消费：<em>￥</em><i>9.90</i></p>
        </div>
        <span>></span>
      </li>
      <li @click="$router.push('/customerOrder')">
        <img src="~jd/images/orderManage.png">
        <div>
          <p>樱桃小丸子</p>
          <p>累计消费：<em>￥</em><i>9.90</i></p>
        </div>
        <span>></span>
      </li>
    </ul>
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
          title:'',
          n_times:'',
          if_free_shipping:''
        }
      }
    },
    watch: {},
    components:{
    },
    computed:{},
    methods:{
      async saveShop(){
        let distributor_id='';
        if(this.$route.params.distributor_id){
            distributor_id=this.$route.params.distributor_id
        }else{
          distributor_id=''
        }
        let params = {
          distributor_id:distributor_id,
          title:this.shopForm.title,
          n_times:this.shopForm.n_times,
          if_free_shipping:this.shopForm.if_free_shipping
        };
        //有传Id则是编辑模式 没传是新增
          this.$store.dispatch('SaveShop',params).then(response=>{
            if(response.code != 10000){
              Toast({
                message: '保存失败',
              })
            }else {
              Toast({
                message: '保存成功'
              })
              this.$router.push({path: '/myShop'})
            }
          }).catch(error=>{
              Toast({
                message: '访问接口失败'
              })
          });
        }
                
    },  
    mounted: function () {
    }

  }
</script>
<style lang="scss" scoped>


</style>
