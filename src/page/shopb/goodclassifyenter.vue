<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .right-menu {
        width: 10px;
        height: 10px;
        background-image: url('~jd/images/product-detail-sprites-mjs.png');
        background-repeat: no-repeat;
        background-size: 100px 100px;
        background-position: 5px -20px;
        margin-left: 4px;
      }
   .goodclassify{
       width: 10rem;
       border-top: .213333rem solid #f2f2f2;
       min-height: 100vh;
       padding-bottom: 1.6rem;
       background: #fff;
      .goodclassify-list{
          width: 10rem;
          padding: 0 .3rem;
          height: 1.28rem;
          background: #fff;
          border-bottom: 1px solid #e4e4e4;
          @include flexbox(space-between, center, row, nowrap);
          .goodclassify-listleft{
              font-size: .4rem;
              color: #333;
          }
          .goodclassify-listright{
              @include flexbox(flex-end, center, row, nowrap);
              font-size: .4rem;
              color: #666;  
          }
      }
      .changehiden{
        max-height: 0;
        overflow: hidden;
        .goodclassify-list{
         padding-left: 1.093333rem;
        .goodclassify-listleft{
              font-size: .373333rem;
              color: #333;
          }
        }
          
      }
      .changeshow{
         max-height: 12.8rem;
         transition: max-height ease-out 1s;
      }
      
   }

</style>

<template>
  <div class="goodclassify">
      <div class="goodclassify-list" @click="rootScrollTo(null,0)">
                    <div class="goodclassify-listleft">未分类</div>
                    <div class="goodclassify-listright"><span>350</span><span class="right-menu"></span></div>
        </div> 
        <div class="goodclassify-all-list" v-for="(item,index) in categoryRootB" :key="index">
            <div class="goodclassify-list" @click="rootScrollTo(item,item.up_levl_list)">
                <div class="goodclassify-listleft">{{item.name}}</div>
                <div class="goodclassify-listright" v-if="!item.up_levl_list">
                    <span>350</span><span class="right-menu"></span>
                </div>
                <div class="goodclassify-listright" v-if="item.up_levl_list">
                    <img v-if="!item.change" src="~jd/images/classifyopen.png" style="width: .48rem">
                    <img v-if="item.change" src="~jd/images/classifyclose.png" style="width: .48rem">
                </div>
            </div>
            <div :class="['changehiden',item.change?'changeshow':'']" >
                <div class="goodclassify-list"  v-for="(itemDetial,index1) in item.up_levl_list" :key="index1" @click="rootScrollTo(itemDetial,0)">
                    <div class="goodclassify-listleft">{{itemDetial.name}}</div>
                    <div class="goodclassify-listright"><span>350</span><span class="right-menu"></span></div>
                </div> 
            </div>

        </div>

        <!-- <div class="goodclassify-list">
            <div class="goodclassify-listleft">提现记录</div>
            <div class="goodclassify-listright">21<span class="right-menu"></span></div>
        </div> -->
  <BackRouter/>
  </div>
</template>

<script>
import BackRouter from 'common/backRouter';
// import {
//     getLocalStorage,
//     setLocalStorage,
//     getSessionStorage
//   } from '@/utils/mixin';
  import {
    mapGetters,
    mapMutations
  } from 'vuex';
  import {
    Toast
  } from 'mint-ui'
  export default {
    data() {
      return {
        categoryRootB: []
      };
    },

    watch: {},

    components: {
      // LoadMore
      BackRouter
    },

    computed: {
     ...mapGetters([
        'categoryDataB'
        ])
    },

    methods: {
      ...mapMutations([
        'SET_CATEGORY_DATA_B'
      ]),
      async initData(){
        if(!this.categoryDataB){
          let res = await this.$store.dispatch('GetCategoryListB');
          this.SET_CATEGORY_DATA_B(res.data)
          this.categoryRootB = res.data;
        }else{
          this.categoryRootB = this.categoryDataB;
          this.categoryRootB.map(i=>{
             i.change=false;
           })
        }
      },
      async rootScrollTo(item,type) {
        if(type){
            item.change=!item.change;
            return
        }
        if(item){
          
        }else{
          
        }
      },
       
    },
    mounted: function () {
     this.initData()
    }
  }

</script>
<style lang='scss' scoped>


</style>
