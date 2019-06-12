<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .goodmain{
    padding-top: 8px;
    .goodinfo{
    padding: 15px 10px;
    width: 9.4rem;
    margin-left: .3rem;
    background: #fff;
    border-radius: 6px;
    margin-bottom: 8px;
      @include flexbox(space-between,
      top,
      row,
      nowrap);
      img{
      height: 2.4rem;
      width: 2.4rem;
      border-radius: 6px;
      }
      .goodinfo-text-name{
       @include textoverflow(2);
        font-size: 13px;
        color: #333;
        line-height: 20px;
        width: 6rem;
        margin-top: 7px;
      }
      .goodinfo-text-fare{
        color: #666;
        font-size: 13px;
        margin-top: 7px;
      }
    }
    .goodskuedit{
      padding: 15px 10px;
    width: 9.4rem;
    margin-left: .3rem;
    background: #fff;
    border-radius: 6px;
    margin-top: 8px;
    p{
      @include flexbox(space-between,
      center,
      row,
      nowrap);
      font-size: 15px;
      color: #333;
      line-height: 30px;
      height: 30px;
      input{
        height: 30px;
        line-height: normal;
        color: #666;
      }
    }
    .profit{
      border-top: 1px solid #e4e4e4;
      padding-top: 12px;
    }
    }
    .btn-save-fixed{
      height: 48px;
      position: fixed;
      bottom: -1px;
      left: 0;
      right: 0;
      width: 100%;
      @include flexbox(space-between,
      center,
      row,
      nowrap);
      div{
        height: 100%;
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 48px;
        width: 50%  
      }
      .btn-set{
        background: #ff5527;
      }
      .btn-save{
        background: $red
      }
    }
    .setProfitmain{
      width: 8.2rem;
      border-radius: 6px;
      .setProfitcheck{
        height: 34px;
        line-height: 34px;
        text-align: center;
        font-size: 16px;
        margin-bottom: 4px;
        @include flexbox(space-between,
        center,
        row,
        nowrap);
        li{
          width: 50%;
          text-align: center;
          color: #666;
        }
        .active {
        color: $red;
         }
      }
      .setProfitone{
          .setProfitone-entry{
            width: 7.2rem;
            margin-left: .5rem;
            height: 29px;
            border:1px solid #e4e4e4;
            border-radius: 6px;
            @include flexbox(space-between,
            center,
            row,
            nowrap);
            input{
              height: 26px;
              line-height: normal;
              width: 6rem;
              margin-left: 6px;
            }
            span{
              color: #333;
              font-size: 16px;
              margin-right: .2rem
            }
          }
          .setProfitone-text{
            color: #999;
            border-bottom:1px solid #e4e4e4;
            padding: 0 .5rem;
            font-size: 13px;
            line-height: 28px;
            height: 28px;
          }
          .setProfitone-choose{
            @include flexbox(space-between,
            center,
            row,
            nowrap);
            height: 60px;
            line-height: 60px;
            
            span{
              text-align: center;
              width: 50%;font-size: 16px;
              color: $red
            }
          }
        }
    }
  }
</style>

<template>
  <div class="goodmain">
    <mt-popup v-model="visiblePopup.setProfit" style="border-radius: 6px;" position="center" class="checkSkupop" >
    <div class="setProfitmain">
      <ul class="setProfitcheck">
        <li :class="{'active':activeIndex===0}" @click="activeIndex=0">按进价倍数</li>
        <li :class="{'active':activeIndex===1}" @click="activeIndex=1">按利润值</li>
      </ul>
      <div class="setProfitone" v-if="activeIndex==0">
      <p class="setProfitone-entry"><input type="text"><span>倍</span></p>
      <p class="setProfitone-text">售价=进价+进价*倍数</p>
      <p class="setProfitone-choose"><span @click="visiblePopup.setProfit=false" style="border-right:1px solid #e4e4e4;color:#333">取消</span><span>确定</span></p>
      </div>

      <div class="setProfitone" v-if="activeIndex==1">
      <p class="setProfitone-entry"><input type="text"><span>元</span></p>
      <p class="setProfitone-text">售价=进价+利润值</p>
      <p class="setProfitone-choose"><span style="border-right:1px solid #e4e4e4;color:#333" @click="visiblePopup.setProfit=false">取消</span><span>确定</span></p>
      </div>

    </div>
    </mt-popup>


   <div class="goodinfo">
     <img src="https://img.alicdn.com/bao/uploaded/i4/1033573000/O1CN01fEZsxB1Y22jFgxtUZ_!!1033573000.jpg">
     <div class="goodinfo-text">
       <p class="goodinfo-text-name">LACOSTE L!VE（法国鳄鱼）女士简约通勤条T恤店</p>
       <p class="goodinfo-text-fare">运费：¥5.00</p>
     </div>
   </div>
   
   <div class="goodskuedit">
     <p class="color"><span>颜色</span><span style="color:#666">红色</span></p>
     <p class="size"><span>尺码</span><span style="color:#666">X；XL；XXL</span></p>
     <p class="setprice"><span>设置售价</span><input type="text"></p>
     <p class="profit"><span>利润</span><span style="color:#666">33.00</span></p>
   </div>
   <div class="goodskuedit">
     <p class="color"><span>颜色</span><span style="color:#666">红色</span></p>
     <p class="size"><span>尺码</span><span style="color:#666">X；XL；XXL</span></p>
     <p class="setprice"><span>设置售价</span><input type="text"></p>
     <p class="profit"><span>利润</span><span style="color:#666">33.00</span></p>
   </div>
   <div class="btn-save-fixed">
      <div class="btn-set" @click="visiblePopup.setProfit=true">批量设置利润</div>
      <div class="btn-save">保存</div>
   </div>
  </div>
</template>

<script>
  import {
    getOrderDetail,payDirect
  } from '@/service/getData';
  import {
    getLocalStorage,
    setLocalStorage,
    pushHistory
  } from '@/utils/mixin';
  import {
    Toast,MessageBox
  } from 'mint-ui';
  // import {clipboard} from '@/utils/copy';
  export default {
    data() {
      return {
        // commad: getOrderDetail,
        visiblePopup: {
          setProfit:false
        },
        
        activeIndex: 0, 
        countDownTime:null,
        countDown:null
      };
    },

    watch: {},

    components: {
      // LoadMore
    },

    computed: {},

    methods: {
      
    },
    filters:{
        topriceafter(value){
            return value.toFixed(2).substring(0, value.toFixed(2).indexOf('.'));
        },
        topricenext(value){
            return value.toFixed(2).substring(value.toFixed(2).indexOf('.')+1);
        },
        countDownfun(mss){
          let hours = Math.floor(mss / (1000 * 60 * 60));
          let minutes = Math.floor((mss % (1000 * 60 * 60)) / (1000 * 60));
          return hours + "小时" + minutes + "分钟";
        }

    },
    mounted: function () {
      // this.initData();
      
    }
  }

</script>
<style lang='scss' scoped>


</style>
