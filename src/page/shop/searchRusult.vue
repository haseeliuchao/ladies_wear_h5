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
        height:4.6rem;
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
       position: relative;
      
      .search-filter-list{
        background: #fff;
         border-bottom: 1px solid #eee;
         padding: 0 .3rem;
        // padding: 0 1.5rem;
        @include flexbox(space-between,center,row,nowrap);
        .search-filter-item{
          // width: 25%;
          // @include flexbox(center,center,row,nowrap);
          color: #333;
          font-size: 15px;
          margin: 15px 0;
          // padding-bottom:5px;
          // @media all and(max-width:374px){
          //    margin: 15px .6rem;
          // }
          // @media all and(min-width:376px){
          //    margin: 15px .9rem;
          // }
          &:last-child{
            margin-left:.4rem;
          }
          .more-sortImg{
            width: 14px;
            height: 14px;
            background: url('~jd/images/sorttypenocheck.png') no-repeat center;
            background-size: 100%;
            margin-left: 5px;
             display: inline-block;
             vertical-align: top;
             margin-top: 2px;
          }
          &.active{
            color: $red;
            // border-bottom: 2px solid $red
            .more-sortImg{
              background: url('~jd/images/sorttypecheck.png') no-repeat center;
              background-size: 100%;
            }
          }
          // span{
          //   position:relative;
          //   display: inline-block;
          // }
          .more-sort{
                
                position:relative;
                top: -5px;
              display: inline-block;
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

      .sortother{
        
        position: absolute;
        top: 48px;
        left: 0;
        background: #fff;
        width: 10rem;
        padding: 0 .3rem 20px;
        z-index: 2;
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        .price-othertip{
            font-size: 15px;
            color: #333;
            line-height: 40px;
        }
        .price-otherinput{
          font-size: 14px;
          width: 7.8rem;
          @include flexbox(space-between,center,row,nowrap);
          input{
            height: 28px;
            width: 2.6rem;
            border-radius: 6px;
            background: #f2f2f2;
            color: #333;
            line-height: normal;
            text-align: center
          }
          span{
            height: 1px;
            width: 1.8rem;
            background: #707070;
          }
        }

        ul{
          @include flexbox(space-between,center,row,wrap);
          
          li{
            width: 2.6rem;
            height: 28px;
            border-radius: 28px;
            text-align: center;
            background: #f2f2f2;
            color: #333;
            line-height: 28px;
            margin-top: 15px;
            text-align: center
          }
          .activeone{
            color: #fff;
            background: $red
          }
        }
        .sortother-btn{ 
          @include flexbox(flex-end,center,row,nowrap);
          span{
            height: 34px;
            line-height: 34px;
            margin-left: 10px;
            width: 2.1rem;
            text-align: center;
            font-size: 17px;
            margin-top: 20px;
            border-radius: 6px;
            border: 1px solid $red;
            color: #fff;
            background: $red;
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
            padding: 0px 10px;
            
            @include flexbox(space-between,flex-start,column,wrap);
            .prod-title{
              font-size: 0.343rem;
              color: #333;
              @include textoverflow(2);
              height: 0.9rem;
              line-height: 0.45rem;
              margin-top: 4px;
              text-align: justify;
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
        <li :class="['search-filter-item',sortotherTypeBoo ? 'active' : '']" @click= "sortotherType()">筛选<span class="more-sortImg"></span></li>
      </ul>
      <div v-if="sortotherTypeBoo" class="sortother">
         <p class="price-othertip">价格区间：</p>
         <p class="price-otherinput"><input type="number" @keydown="handleInput2" v-model="minPrice" placeholder="最低价"><span></span><input type="number" @keydown="handleInput2" v-model="maxPrice" placeholder="最高价"></p>
         <ul>
           <li :class="[activeone==0 ? 'activeone' : '']" @click= "sortTypeone(0)">¥20元以下</li>
           <li :class="[activeone==1 ? 'activeone' : '']" @click= "sortTypeone(1)">¥20-40</li>
           <li :class="[activeone==2 ? 'activeone' : '']" @click= "sortTypeone(2)">¥40-60</li>
           <li :class="[activeone==3 ? 'activeone' : '']" @click= "sortTypeone(3)">¥60-80</li>
           <li :class="[activeone==4 ? 'activeone' : '']" @click= "sortTypeone(4)">¥100-150</li>
           <li :class="[activeone==5 ? 'activeone' : '']" @click= "sortTypeone(5)">¥150元以上</li>
         </ul>
         <p class="sortother-btn"><span style="background:#fff;color:#ff2741" @click="resetPrice">重置</span><span @click="truePrice">确定</span></p>
      </div>
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
  import {
    Toast
  } from 'mint-ui';
  export default {
    data() {
      return {

        popupVisible:false,
        searchRusultData: [],
        commad: searchGoods,
        isFirstEnter:false,
        sortotherTypeBoo:false,
        minPrice:null,
        maxPrice:null,
        searchParams: {
          title: '',
          item_url:'',
          sort_type:1,
          category_id:'',
          advertising_id:'',
          page_size: 10,
          current_page: 1,
          min_price:null,
          max_price:null
        },
        imgsearchNo:false,
        imgsearchTrue:false,
        active:1,
        activeone:null,
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
      sortTypeone(type){
          this.activeone=type; 
          switch (Number(type)) {
          case 0:
            this.searchParams.min_price=0;
            this.searchParams.max_price=2000;
            this.minPrice=0;
            this.maxPrice=20;
            break;
          case 1:
            this.searchParams.min_price=2000;
            this.searchParams.max_price=4000;
            this.minPrice=20;
            this.maxPrice=40;
            break;
          case 2:
            this.searchParams.min_price=4000;
            this.searchParams.max_price=6000;
            this.minPrice=40;
            this.maxPrice=60;
            break;
          case 3:
            this.searchParams.min_price=6000;
            this.searchParams.max_price=8000;
            this.minPrice=60;
            this.maxPrice=80;
            break;
          case 4:
            this.searchParams.min_price=10000;
            this.searchParams.max_price=15000;
            this.minPrice=100;
            this.maxPrice=150;
            break;
          case 5:
            this.searchParams.min_price=15000;
            this.searchParams.max_price=null;
            this.minPrice=150;
            this.maxPrice=null;
            break;
          default: //其他
            throw new Error('未知TabId')
            break
        }
      },
      resetPrice(){
        this.searchParams.min_price=null;
        this.searchParams.max_price=null;
        this.minPrice=null;
        this.maxPrice=null;
        this.activeone=null;
      },
      truePrice(){
        
        this.searchParams.min_price=this.minPrice?parseFloat(this.minPrice*100).toFixed(0):null;
        this.searchParams.max_price=this.maxPrice?parseFloat(this.maxPrice*100).toFixed(0):null;
        if(this.searchParams.min_price&&this.searchParams.max_price){
          if(this.searchParams.min_price>this.searchParams.max_price){
                return Toast({duration: 1000,
                  message: '最高价不能小于最低价'
                })
          }
        }
        this.sortotherTypeBoo=false;
        this.searchRusult()
      },
      handleInput2(e) {
            // 通过正则过滤小数点后两位
            e.target.value = (e.target.value.match(/^\d*(\.?\d{0,1})/g)[0]) || null
            this.activeone=null;
        },
      changeQuery(title){
         this.$router.push({path:'/searchRusult',query:{title:title}})
         this.searchRusult()
      },
      sortotherType(){
       this.sortotherTypeBoo=true;
      },
      sortType(index){
        this.sortotherTypeBoo=false;
        this.searchParams.sort_type=index;
        this.minPrice=null;
        this.maxPrice=null;
        this.searchParams.min_price=null;
        this.searchParams.max_price=null;
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
        this.searchParams = JSON.parse(JSON.stringify(Object.assign(this.searchParams,this.$route.query)))
        this.$refs.searchRusultloadMore.onTopLoaded(this.$refs.searchRusultloadMore.uuid);
        
      },
      async initData(){
        this.img_url = this.$route.query.img_url;
        this.$route.query.img_url=null;
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
            this.searchParams.item_url=null;
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
          this.searchParams.sort_enum=null;
          this.searchParams.sort_type = 1;
          this.searchParams.min_price=null;
          this.searchParams.max_price=null;
          this.minPrice=null;
          this.maxPrice=null;
          this.activeone=null;
          this.imgsearchNo=false;

          this.searchParams = JSON.parse(JSON.stringify(Object.assign(this.searchParams,this.$route.query)
          ));
          this.searchParams.img_url=null;
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