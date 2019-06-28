<!-- searchRusult -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';

  .searchContentIcon {
          height: .45rem;
          width: .45rem;
          margin-right: .3rem;
          background: url('~jd/images/sarchicon.png') no-repeat;
          background-size: 100% 100%;
        }
.searchInput {
      width: 100%;
      .search-box {
        background: #fff;
        height: .86rem;
        border-radius: .86rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        -webkit-box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        @include flexbox(flex-start,
        center,
        row,
        nowrap);
        padding: 0 .3rem;
        
        span {
          color: #999;
          font-size: 14px;
        }
      }
    }

    .search-top {
      @include flexbox(space-between,
      center,
      row,
      nowrap);
      // padding: 10px 0 10px 20px;
      background: #fff;
      // border-bottom: 1px solid $border;
      // 文字搜索
      .searchInput {
        width: 90%;
        padding: 10px 0 10px 20px;
        .search-box {
          width: 100%;
          position: relative;
          background: #fff;
          padding: 0px 14px;
          border-radius: 26px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          height: .86rem;
          @include flexbox(space-between,
          center,
          row,
          nowrap);
          input {
            width: 100%;
            color: #333;
            font-size: $subtitle;
            outline: none;
            border: none;
            box-shadow: none;
            text-shadow: none;
            font-weight: normal;
            background: transparent;
            height: .86rem;
            line-height: normal
          }
          .clear {
            width: .42rem;
            height: .42rem;
            margin: 0;
            position: absolute;
            right: 10px;
            padding: 5px;
            @include flexbox(center,
            center,
            row,
            nowrap);
            color: #fff;
            font-size: 15px;
            border-radius: 50%;
            background: rgba(0, 0, 0, .15);
          }
          .searchIcon {
            display: block;
            height: .48rem;
            margin-right: .05rem;
            width: .52rem;  
          }
        }
      }

      // 配置搜索结果
      .searchDeploy-box{
        width:100%;
        height:175px;
        img{
          @include wh(100%,100%);
        }
      }
      // 图搜搜索结果
      .searchImg-box{
        @include flexbox(center,center,row,nowrap);
        padding:25px 0;
        img{
          width:2.1rem;
          height:2.1rem;
          border-radius:1.1rem;
        }
        i{
          display:flex;
          flex:1;
          img{
            @include wh(50%,50%);
          }
          &:first-child{
            justify-content: flex-end; 
            margin-right: 15px; 
          }
          &:last-child{
            justify-content: flex-start; 
            margin-left: 15px; 
          }
        }
      }
      >span {
        text-align: center;
        font-size: 15px;
        min-width: 1.5rem;
        color: $gray;
      }
    }
    
    .search-rusult-content {
      .search-rusult-goods {
        @include flexbox(flex-start,
        center,
        row,
        nowrap);
        padding: $padding;
        span {
          font-size: $subtitle;
          margin-left: 5px;
          color: $gray;
        }
        i {
          display: block;
          width: 17px;
          height: 16px;
          background: url('~jd/images/store.png') no-repeat;
          background-size: 100%;
        }
      }
      .search-rusult-list {
        @include flexbox(flex-start,
        center,
        column,
        wrap);
        .search-rusult-item {
          width: 100%;
          text-align: left;
          padding: $padding;
          color: $gray;
          font-size: $subtitle;
          border-bottom: 1px solid $border;
          p {
            @include textoverflow(1)
          }
        }
      }
    }
    


  .search-rusult-container {
    height: 100%;
    
    .search-filter{
      // border-top: 1px solid $border;
      border-bottom: 1px solid #eee;
      .search-filter-list{
        background: #fff;
        // padding: 0 1.5rem;
        @include flexbox(space-between,center,row,nowrap);
        .search-filter-item{
          width: 25%;
          @include flexbox(center,center,row,nowrap);
          color: #333;
          font-size: 15px;
          margin: 15px .8rem;
          padding-bottom:5px;
          @media all and(max-width:374px){
             margin: 15px .6rem;
          }
          @media all and(min-width:376px){
             margin: 15px .9rem;
          }
          &:last-child{
            margin-right:.8rem;
          }
          &.active{
            color: $red;
            // border-bottom: 2px solid $red
          }
          span{
            position:relative;
          }
          .more-sort{
              // display: none;
               &:before{
                  content: '';
                  position: absolute;
                  right: -18px;
                  top: 2px;
                  width: 0;
                  height: 0;
                  border: 4px solid transparent;
                  border-top-color: #666;
                  }
                  &:after{
                    content: '';
                    position: absolute;
                    right: -18px;
                    top: -10px;
                    width: 0;
                    height: 0;
                    border: 4px solid transparent;
                    border-bottom-color: #666;
                  }
          }
          .more-sortAsc{
            position: relative;
            
            &:before{
                  content: '';
                  position: absolute;
                  right: -18px;
                  top: 2px;
                  width: 0;
                  height: 0;
                  border: 4px solid transparent;
                  border-top-color: #ff2741;
            }
            &:after{
              content: '';
              position: absolute;
              right: -18px;
              top: -10px;
              width: 0;
              height: 0;
              border: 4px solid transparent;
              border-bottom-color: #666;
            }
          }
          .more-sortDesc{
            position: relative;
            &:before{
                  content: '';
                  position: absolute;
                  right: -18px;
                  top: 2px;
                  width: 0;
                  height: 0;
                  border: 4px solid transparent;
                  border-top-color: #666;
            }
            &:after{
              content: '';
              position: absolute;
              right: -18px;
              top: -10px;
              width: 0;
              height: 0;
              border: 4px solid transparent;
              border-bottom-color: #ff2741;
            }
          }
          
        }
      }
    }
    .imgsearch-no-list{
      width: 10rem;
      text-align: center;
      background: #fff;
      padding-bottom: 20px;
      img{
        width: 30%;
        margin-bottom: 8px;
      }
      .imgsearch-notext{
        line-height: 42px;
        color: #999;
        font-size: 15px;
      }
      .imgsearch-text-link{
        // padding: 6px 20px;
        border: 1px solid $red;
        color: $red;
        width: 4rem;
        margin-left: 3rem;
        font-size: 14px;
        height: 25px;
        line-height: 25px;
        border-radius: 3px;
        // margin-bottom: 10px;
      }

    }
    .product-list-top{
      padding: 15px 12px; 
      @include flexbox(space-between,center,row,nowrap);
      font-size: 15px;
      .product-list-topl{
        color: #333;
        border-left: 4px solid $red;
        padding-left: 6px
      }
      .product-list-topr{
        color: #666;
        em{
          color: $red
        }
      }
    }
    .content{
      width: 100%;
      .product-list{
        @include flexbox(space-between,center,row,wrap);
        padding: 0 .3rem;
        .prod-item{
          background: #fff;
          width: 4.58rem;
          margin-bottom: 8px;
          border-radius: 6px;
          overflow: hidden;
          text-align: center;
          img{
            // width: 4.58rem;
            height: 4.58rem;
            // border-radius: 6px;
          }
          .prod-info{
            // margin-left: 10px;
            padding: 0px 6px;
            
            @include flexbox(space-between,flex-start,column,wrap);
            .prod-title{
              font-size: 14px;
              color: #333;
              @include textoverflow(2);
              height: 40px;
              line-height: 20px;
              margin-top: 4px;
              text-align: left;
            }
            .prod-price{
              color: $red;
              text-align:left;
              line-height: 30px;
              margin-bottom: 8px;
              span{
                font-size: 16px;
                margin-right: 5px;
                &:last-child{
                  font-size: 14px;
                  em{
                    font-size:14px;
                  }
                }
              }
              strong{
                font-size: 19px;
              }
            }
            .prod-pro{
              padding: 5px 0;
              text-align: left;
              color: $gray;
              font-size: $subtitle;
            }
          }
        }
      }
    }
  }

</style>

<template>
  <div class="search-rusult-container">
    <!-- 搜索框 -->
    <!-- 文字搜索 -->
    <div class="search-top" v-if="$route.query.title!=undefined||searchParams.category_id">
      <div class="searchInput">
          <div class="search-box">
            <!-- <i class="searchIcon searchContentIcon"></i> -->
            <!-- @keypress="truesearchGoods" -->
            <input type="search" v-model="searchParams.title" placeholder="品质生活必备" >
            <!-- <span class="clear" @click= "title=''" v-show="title.length>0">&times;</span> -->
            <i class="searchIcon searchContentIcon" @click= "changeQuery(searchParams.title)"></i>
          </div>
      </div>
      <span @click= "changeQuery(searchParams.title)">搜索</span>
    </div>
    <!-- 配置搜索 -->
    <div class="search-top" v-if="img_url&&img_url!=''">
      <div class="searchDeploy-box">
        <img :src="img_url">
      </div>
    </div>
    <!-- 图片搜索 -->
    <div class="search-top" v-if="searchParams.item_url">
      <div class="searchImg-box">
        <i><img src="~jd/images/lineLeft.png"></i>
        <img :src="searchParams.item_url">
        <i><img src="~jd/images/lineRight.png"></i>
      </div>
    </div>
    <!-- 搜索框 -->
    
    <!-- 筛选 -->
    <div class="search-filter" v-if="imgsearchTrue">
      <ul class="search-filter-list">
        <li :class="['search-filter-item',active==0 ? 'active' : '']" @click= "sortType(3)">综合排序</li>
        <li :class="['search-filter-item',active==1 ? 'active' : '']" @click= "sortType(1)">上新时间</li>
        <li :class="['search-filter-item',active==2 ? 'active' : '']" @click= "sortType(2)">价格排序<span class="more-sort" :class="[sort_enum==null?'':sort_enumboo? 'more-sortAsc' : 'more-sortDesc']"></span></li>
      </ul>
    </div>

    <div class="imgsearch-no-list" v-if="imgsearchNo">
       <img src="~jd/images/imgsearchNoimg.png">
       <p class="imgsearch-notext">sorry, 图片暂未搜到你查找的商品</p>
       <p class="imgsearch-text-link" @click= "$router.push({path: '/index'})">试试文字搜索</p>
    </div>

     <p class="product-list-top" v-if="imgsearchNo">
            <span class="product-list-topl">精选推荐</span>
            <span class="product-list-topr">去<em @click= "$router.push('/index')">商城首页</em>逛逛</span>
     </p>

    <!-- 筛选 -->

    <!-- 搜索内容 -->
    <div class="content">
      <load-more style="width:100%;" v-if="$route.name=='searchRusult'" @loadMore="infiniteCallback" :commad="commad" :param="searchParams"
          ref="searchRusultloadMore">
        <ul class="product-list" >
          <li class="prod-item" v-for="(item,index) in searchRusultData" :key="index" @click= "()=>$router.push('/product/'+item.item_id)">
            <img  v-lazy="item.index_img_url+'_230x230.jpg'" alt="">
            <div class="prod-info">
              <p class="prod-title">{{item.title}}</p>
              <p class="prod-price">
                <span style="font-weight:bold;margin-right:1px;">&yen;</span><span style="font-weight:bold"><em>{{item.sales_consumer_price/100.00|topriceafter}}</em>.{{item.sales_consumer_price/100.00|topricenext}}</span>
                <span style="margin-left:8px;text-decoration: line-through;color:#999"><em>&yen;</em><em style="font-size:14px;">{{item.sales_price/100.00|topriceafter}}</em>.{{item.sales_price/100.00|topricenext}}</span>
                </p>
            </div>
          </li>
        </ul>
      </load-more>
    </div>
   

    <!-- 搜索内容 -->
  <BackHead/>
  </div>
</template>

<script>
  import BackHead from 'common/backHead';
  import LoadMore  from 'common/loadMore';
  import {
    searchGoods
  } from '@/service/getData'
  export default {
    data() {
      return {

        popupVisible:false,
        searchRusultData: [],
        commad: searchGoods,
        isFirstEnter:false,
        searchParams: {
          title: '',
          item_url:'',
          sort_type:1,
          category_id:'',
          advertising_id:'',
          page_size: 10,
          current_page: 1
        },
        imgsearchNo:false,
        imgsearchTrue:false,
        active:1,
        sort_enum:null,
        sort_enumboo:true,
        img_url:'',
      };
    },

    watch: {
      'searchParams.title': function(val){
        // this.searchRusult()
      }
      
    },

    components: {
      BackHead,
      LoadMore
    },

    computed: {},

    methods: {
      changeQuery(title){
         this.$router.push({path:'/searchRusult',query:{title:title}})
         this.searchRusult()
      },
      sortType(index){
        this.searchParams.sort_type=index;
         if(index==1){
           this.active=1;
           this.sort_enum=null;
         }else if(index==2){
           this.active=2;
           this.sort_enum='ASC'
           if(this.sort_enumboo){
             this.sort_enum='ASC'
           }else{
             this.sort_enum='DESC'
           }
           this.sort_enumboo=!this.sort_enumboo;
         }else if(index==3){
           this.active=0;
           this.sort_enum=null
         }
         this.searchParams.sort_enum=this.sort_enum;
         this.searchRusult()
      },
      async searchRusult() {
        this.searchParams.page_size = 10;
        this.searchParams.current_page = 1;
        this.searchRusultData=[];
        this.img_url=null;
        this.searchParams = JSON.parse(JSON.stringify(Object.assign(this.searchParams,this.$route.query)))
        this.$refs.searchRusultloadMore.onTopLoaded(this.$refs.searchRusultloadMore.uuid);
        
      },
      async initData(){
        this.img_url = this.$route.query.img_url;
        this.searchParams.advertising_id = this.$route.query.advertising_id;
      },
      async infiniteCallback(response) { //下拉加载
        if(response.msg=='没有搜索结果'){
           this.imgsearchNo=true
        }else if(response.msg=='success'){
            this.imgsearchTrue=true
        }
        if(response.data.items!=undefined&&response.data.items!=null){
        if (response.data.items.length > 0) {
          response.data.items.map(i => {
            this.searchRusultData.push(i)
          })
        }
        }else{
          this.searchRusultData=[];
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
     
    },
    created(){
     this.isFirstEnter=true;
    },
    activated(){
       if(!this.$route.meta.isBack||this.isFirstEnter){
          this.initData();
          this.searchParams.page_size = 10;
          this.searchParams.current_page = 1;
          if(!this.$route.query.title||this.$route.query.title==undefined){
            this.searchParams.title='';
          }
          if(!this.$route.query.item_url||this.$route.query.item_url==undefined){
            this.searchParams.item_url='';
          }
          if(!this.$route.query.advertising_id||this.$route.query.advertising_id==undefined){
            this.searchParams.advertising_id='';
          }
          if(!this.$route.query.category_id||this.$route.query.category_id==undefined){
            this.searchParams.category_id='';
          }
          this.searchParams.category_id='';
          this.searchRusultData=[];
          this.active=1;
          this.sort_enum=null;
          this.img_url=null;
          this.searchParams.sort_enum=null;
          this.searchParams.sort_type = 1;
          this.searchParams = JSON.parse(JSON.stringify(Object.assign(this.searchParams,this.$route.query)
          ));
          this.$refs.searchRusultloadMore.onloadMoreScroll();
       }

       this.$route.meta.isBack=false;
       this.isFirstEnter=false;
    }
    ,
    beforeRouteEnter(to, from, next) {
      if (from.name === 'product') {
        to.meta.isBack = true;
        next();
      } else {
        next();
      }
      
    }
  }

</script>