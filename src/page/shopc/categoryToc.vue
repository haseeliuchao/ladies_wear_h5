<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .banner {
    height:4.666667rem;
    margin-bottom:.213333rem;
    img {
      width: 10rem;
      height:4.666667rem;
    }
  }
  .right-menu {
        width: .266667rem;
        height: .32rem;
        background-image: url('~jd/images/black_more.png');
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block
      }
   .goodclassify{
       width: 10rem;
       min-height: 100vh;
       padding-bottom: 1.6rem;
       .goodclassify-all-list{
        margin-bottom: .213333rem;
        width: 9.36rem;
        margin-left: .32rem;
        border-radius: 6px;
        overflow: hidden;
        background: #fff;
      .goodclassify-list{
          width: 100%;
          padding: 0 .3rem;
          height: 1.28rem;
          
          @include flexbox(space-between, center, row, nowrap);
          .goodclassify-listleft{
              font-size: .426667rem;
              color: #333;
          }
          .goodclassify-listright{
              @include flexbox(flex-end, center, row, nowrap);
             
          }
      }
        
      .changehiden{
       width: 100%;
       padding: 0 .533333rem;
       @include flexbox(space-between, center, row, nowrap);
       div{
         line-height: 1.066667rem;
         height: 1.066667rem;
         width: 4rem;
         font-size: .4rem;
         color: #333;
         background: #f2f2f2;
         border-radius: 4px;
         padding: 0 .266667rem;
         margin-bottom: .426667rem;
       }
      }
       }
   }

</style>

<template>
  <div class="goodclassify">
      <div class="banner">
            <img :src="shopImgUrl" alt="店铺图片">
          </div>
        <div class="goodclassify-all-list" v-for="(item,index) in categoryRootB.data" :key="index">
            <div class="goodclassify-list">
                <div class="goodclassify-listleft">{{item.name}}</div>
                <div class="goodclassify-listright">
                    <span class="right-menu"></span>
                </div>
            </div>
            <div class="changehiden">
                <div class="goodclassify-listtwo"  v-for="(itemDetial,index1) in item.up_levl_list" :key="index1">
                    {{itemDetial.name}}
                </div> 
            </div>

        </div>
  <footerViewToC :distributorId='$route.params.distributor_id'/>
  </div>
</template>

<script>
import footerViewToC from 'component/footer/footerViewToC';
import {
    getSessionStorage
  } from '@/utils/mixin';
  import {
    mapGetters,
    mapMutations
  } from 'vuex';
  import {
    Toast
  } from 'mint-ui'
  import {
    getcategoryRootB
  } from '@/service/getData';
  export default {
    data() {
      return {
        categoryRootB: [],
        shopImgUrl:'https://img.chaochujue.cn/ICON/2019/7/5/shopcbanner1564714754308.png'
      };
    },

    watch: {},

    components: {
      footerViewToC
    },

    computed: {
    
    },

    methods: {
      
      async initData(){
       let Data = await getcategoryRootB({
         distributor_id:this.$route.params.distributor_id
       });
        if(Data.code==10000){
         this.categoryRootB=Data.data;
        }else{
           Toast({duration: 1000,
            message:Data.msg
        })
        }
      },
      async rootScrollTo(item,type) {
        if(type){
            item.change=!item.change;
            return
        }
        if(item){
          return this.$router.push({path:'/goodeditall/'+item.distributor_id,query: {category_name:item.name,category_id:item.distributor_item_category_id}})
        }else{
          return this.$router.push({path:'/goodeditall/'+this.$route.query.distributor_id,query: {category_name:'未分类',category_id:0}})
        }
      },
       
    },
    mounted: function () {
        if(getSessionStorage('shopImgUrl')){
        this.shopImgUrl=getSessionStorage('shopImgUrl')
      }
     this.initData()
    }
  }

</script>
<style lang='scss' scoped>


</style>
