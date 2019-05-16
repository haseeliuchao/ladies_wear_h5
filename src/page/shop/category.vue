<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .category-title {
    @include flexbox(center, center, row, nowrap);
    font-size: 16px;
  }
  .categoryBody {
    display: flex;
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;

    .rootListcontent {
      // border-right: 1px solid #eee;
      list-style: none;
      height: 100vh;
      overflow-y: scroll;
  /* ios需要下面这个属性 */
  -webkit-overflow-scrolling: touch;
      background:#fff;
      li {
        padding: .25rem .15rem;
        text-align: center;
        font-size: 14px;
        color: #333;
        background: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        line-height: 2;
        // border-bottom: 1px solid #eee;
        &:last-child {
          border: none;
        }
        &.active {
          background: #F2F2F2;
          color: #ff2741;
          border-left:.14rem solid #ff2741;
          padding-left:.03rem;

        }
      }
    }
    .jd-categoryContent {
      margin: .3rem .3rem 0;
      border-radius:8px;
      min-height:100vh;
      background: #fff;
      .categoryContentBox {
        @include flexbox(flex-start, flex-start, row, wrap);
        padding: .2rem .2rem 60px;
        
        >p {
          @include flexbox(center, center, row, nowrap);
          color: #999;
          font-size: 14px;
        }
      }
      .categorytItem {
        width: 33%;
        height: 2.64rem;
        background: #fff;
        @include flexbox(center, center, row, wrap);
        // flex: initial;
        font-size: 12px;
        color: #333;
        text-align: center;
        p {
          width:100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 0 4px;
          // padding-bottom:0;
        }
        img {
          width: 1.7333rem;
          height: 1.7333rem;
          border-radius:6px;
        }
      }
    }
  }

</style>

<!-- category -->
<template>
  <div>
    <div class="categoryBody">
      <!-- 分类列表 -->
      <div class="rootList" style="width:25.86%;">
        <load-more ref="rootScroll" style="height:85%;">
          <ul class="rootListcontent">
            <li v-for="(item,index) in categoryRootfilter" :key="index" :class="selectedRoot === item.category_id ? 'active' : ''"   @click= "rootScrollTo(item)">{{item.name}}</li>
          </ul>
        </load-more>
      </div>
      <!-- 分类列表 -->
      <!-- 分类下的产品目录 -->
      <div class="jd-category-content" style="width: 85%;height:100vh;overflow: auto;overflow-y: scroll;
  -webkit-overflow-scrolling: touch;">
        <load-more  :loadMoreIconVisible="false" ref="loadMore" style="width: 100%;left:initial;right:0;">
          <div class="jd-categoryContent">
            <div class="categoryContentBox" v-if="categoryBody.categoryList.length>0">
              <div class="categorytItem" v-for="(item,index) in categoryBody.categoryList" :key="index" @click= "$router.push({path: '/searchRusult',query: {category_id:item.category_id}})">
                <img :src="item.icon" alt="" />
                <p>{{item.name}}</p>
              </div>
            </div>
            <div class="categoryContentBox" v-else>
              <p>暂无数据</p>
            </div>
          </div>
        </load-more>
      </div>
      <!-- 分类下的产品目录 -->
    </div>
    <FooterView/>
  </div>
</template>

<script>
  import FooterView from 'component/footer/footerView';
  import SearchBar from 'page/shop/searchBar';
  import LoadMore from 'common/loadMore';
  import ErrorImage from 'assets/common/images/404.png';
  import {
    mapGetters,
    mapMutations
  } from 'vuex';
  export default {
    data() {
      return {
        selectedRoot: 0,
        ErrorImage,
        categoryBody: {
          categoryRoot: [],
          categoryList: []
        }
      };
    },

    watch: {},

    components: {
      FooterView,
      SearchBar,
      LoadMore
    },

    computed: {
      ...mapGetters([
        'categoryData'
      ]),
      categoryRootfilter: function () {
      return this.categoryBody.categoryRoot.filter(function (item) {
        return item.parent_id===0
      })
      }
    },

    methods: {
      ...mapMutations([
        'SET_CATEGORY_DATA'
      ]),
      async rootScrollTo(item) {
        let that=this;
        that.selectedRoot = item.category_id;
        that.categoryBody.categoryList=[];
        this.categoryBody.categoryRoot.map(i=>{
          if(i.parent_id==that.selectedRoot){
          that.categoryBody.categoryList.push(i);
          }
        })
      },
      async initData(){
        if(!this.categoryData){
          let res = await this.$store.dispatch('GetCategoryList');
          this.SET_CATEGORY_DATA(res.data)
          this.selectedRoot = res.data[0].category_id;
          this.categoryBody.categoryRoot = res.data;
          this.rootScrollTo(res.data[0]);
        }else{
          this.selectedRoot = this.categoryData.data[0].category_id;
          this.categoryBody.categoryRoot = this.categoryData.data;
        }
      }
    },
    mounted: function () {
      this.initData();
    }
  }

</script>
<style lang='scss' scoped>


</style>
