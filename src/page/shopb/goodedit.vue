<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .goodmain{
    padding-top: 8px;
    padding-bottom: 60px;
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
      .ishow i:last-child{
        display: none
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
        <li :class="{'active':activeIndex===0}" @click="activeIndexchange(0)">按进价倍数</li>
        <li :class="{'active':activeIndex===1}" @click="activeIndexchange(1)">按利润值</li>
      </ul>
      <div class="setProfitone" v-if="activeIndex==0">
      <p class="setProfitone-entry"><input type="text" v-model="salesMultiple"><span>倍</span></p>
      <p class="setProfitone-text">售价=进价+进价*倍数</p>
      <p class="setProfitone-choose"><span @click="setProfitClose" style="border-right:1px solid #e4e4e4;color:#333">取消</span><span @click="visiblePopup.setProfit=false">确定</span></p>
      </div>

      <div class="setProfitone" v-if="activeIndex==1">
      <p class="setProfitone-entry"><input type="text" v-model="salesSetProfit"><span>元</span></p>
      <p class="setProfitone-text">售价=进价+利润值</p>
      <p class="setProfitone-choose"><span style="border-right:1px solid #e4e4e4;color:#333" @click="setProfitClose">取消</span><span @click="visiblePopup.setProfit=false">确定</span></p>
      </div>

    </div>
    </mt-popup>


   <div class="goodinfo">
     <img v-lazy="goodeditdata.index_img_url">
     <div class="goodinfo-text">
       <p class="goodinfo-text-name">{{goodeditdata.title}}</p>
       <p class="goodinfo-text-fare">运费：¥5.00</p>
     </div>
   </div>
   
   <div class="goodskuedit" v-for="(item,index) in goodeditdata.item_sku" :key="index">
     <p class="color"><span>颜色</span><span style="color:#666">{{item.color}}</span></p>
     <p class="size"><span>尺码</span>
     <span style="color:#666" v-for="(itemsize,index1) in sizearr" :key="index1"><em class="ishow" v-if="itemsize.color==item.color">{{itemsize.size}}<i>,</i></em></span></p>
     <p class="setprice"><span>设置售价</span><input style="text-align:right;" type="text" @keyup.prevent="changeSales(item,item.sales_consumer_price)" v-model="item.sales_consumer_price"></p>
     <p class="profit"><span>利润</span><span style="color:#666">{{item.profit/100|TwoNum}}</span></p>
   </div>
   
   <div class="btn-save-fixed">
      <div class="btn-set" @click="setProfitshoe">批量设置利润</div>
      <div class="btn-save" @click="save">保存</div>
   </div>
  </div>
</template>

<script>
import {
    getProduct,
    itemUpd
  } from '@/service/getData'
  import {
    getLocalStorage,
    setLocalStorage,
    getSessionStorage,
    setSessionStorage,
    pushHistory
  } from '@/utils/mixin';
  import {
    Toast,MessageBox
  } from 'mint-ui';
import shopVue from '../shop/shop.vue';
  export default {
    data() {
      return {
        visiblePopup: {
          setProfit:false
        },
        salesMultiple:null,
        salesSetProfit:null,
        activeIndex: 0, 
        countDownTime:null,
        countDown:null,
        goodeditdata:{
          item_sku:[]
        },
        defgoodeditdata:{
          item_sku:[]
        },
        colorarr:[],
        sizearr:[],
        
        skuInfo:[],
          
       
      };
    },

    watch: {
         'salesMultiple': function(newVal,oldVal){
              this.goodeditdata.item_sku=JSON.parse(getSessionStorage('defgoodeditdata'))
              if(newVal==null||newVal==''){
                this.listMe(null,1,this.goodeditdata.item_sku)
                this.listMeprofit(null,1,this.goodeditdata.item_sku)
              }else{
                 this.listMe('salesMultiple',newVal,this.goodeditdata.item_sku)
                 this.listMeprofit('salesMultiple',newVal,this.goodeditdata.item_sku)
              }

          },
          'salesSetProfit': function(newVal,oldVal){
            this.goodeditdata.item_sku=JSON.parse(getSessionStorage('defgoodeditdata'))
              if(newVal==null||newVal==''){
                this.listMe(null,1,this.goodeditdata.item_sku)
                this.listMeprofit(null,1,this.goodeditdata.item_sku)
              }else{
              this.listMe('salesSetProfit',newVal,this.goodeditdata.item_sku)
              this.listMeprofit('salesSetProfit',newVal,this.goodeditdata.item_sku)
              }
          }
    },

    components: {
      // LoadMore
    },

    computed: {
     
    },

    methods: {
      async initData() {
        let Data = await getProduct({
         item_id: this.$route.params.itemId,
         distributor_id:this.$route.query.shopId
        });
        if(Data.code!=10000){
          Toast({
            message: Data.msg
          })
          return
        }
        this.goodeditdata = Data.data;
        this.goodeditdata.imgList = JSON.parse(Data.data.img_list);
        this.goodeditdata.salesConsumerPrice = Data.data.sales_consumer_price;
        this.goodeditdata.salesPrice = Data.data.sales_price;
        this.goodeditdata.title =Data.data.title;
        this.goodeditdata.index_img_url =Data.data.index_img_url+'_190x190.jpg';
        this.goodeditdata.item_sku = Data.data.item_sku_b_o_list;
        
        this.goodeditdata.item_skulength =this.goodeditdata.item_sku.length;
        this.colorarr = this.rmSome(this.goodeditdata.item_sku,'color')
        this.sizearr = Data.data.item_sku_b_o_list;
        
        var hash = {};
          this.goodeditdata.item_sku =this.goodeditdata.item_sku.reduce(function(arr, current) {
              hash[current.color] ? '' : hash[current.color] = true && arr.push(current);
              return arr
          }, [])
        var hash1 = {};
        var defgoodeditdata=Data.data.item_sku_b_o_list.reduce(function(arr, current) {
              hash1[current.color] ? '' : hash1[current.color] = true && arr.push(current);
              return arr
          }, []);
        setSessionStorage('defgoodeditdata',defgoodeditdata);
        this.listMe(null,1,this.goodeditdata.item_sku)
      },
      listMe:function(type,val,list){
                     return list.filter(function(item){
                       if(!type){
                         return item.sales_consumer_price=item.sales_consumer_price/100*val;
                       }
                        if(type=="salesMultiple"){
                          return item.sales_consumer_price=(item.cost_price*100+(item.cost_price*100*val))/10000;
                        }
                        if(type=="salesSetProfit"){
                          return item.sales_consumer_price=(item.cost_price+(val*100))/100;
                        }
                    })
                },
      listMeprofit:function(type,val,list){
                     return list.filter(function(item){
                       if(!type){
                         return item.profit=item.sales_consumer_price*100-item.cost_price;
                       }
                        if(type=="salesMultiple"){
                          return item.profit=item.sales_consumer_price*100-item.cost_price;
                        }
                        if(type=="salesSetProfit"){
                          return item.profit=item.sales_consumer_price*100-item.cost_price;
                        }
                    })
                },
       activeIndexchange(index){
         this.activeIndex=index;
         this.salesMultiple=null;
         this.salesSetProfit=null;
         this.goodeditdata.item_sku=JSON.parse(getSessionStorage('defgoodeditdata'))
         this.listMe(null,1,this.goodeditdata.item_sku)
         this.listMeprofit(null,1,this.goodeditdata.item_sku)
       },
       setProfitClose(){
         this.visiblePopup.setProfit=false
         this.salesMultiple=null;
         this.salesSetProfit=null;
         this.goodeditdata.item_sku=JSON.parse(getSessionStorage('defgoodeditdata'))
         this.listMe(null,1,this.goodeditdata.item_sku)
         this.listMeprofit(null,1,this.goodeditdata.item_sku)
       },
       setProfitshoe(){
         this.skuInfo=[];
         this.visiblePopup.setProfit=true;
       },

       changeSales(item,price){
         item.profit=price*100-item.cost_price;
       },
       
       async save(){
        // let checkIdnumsobj={ "item_sku_id":item.item_sku_id , "number":item.number}
        this.skuInfo=[];
        this.goodeditdata.item_sku.map(itemdetail=>{
          let itemdetailstr=itemdetail.distributor_item_sku_id+':'+itemdetail.sales_consumer_price*100
          this.skuInfo.push(itemdetailstr)
        })
         let Data = await itemUpd({
         distributor_item_id:this.goodeditdata.distributor_item_id,
         distributor_item_sku_info:JSON.stringify(this.skuInfo)
        });
        if(Data.code!=10000){
          Toast({
            message: Data.msg
          })
          return
        }
        this.$router.go(-1)
       },
      rmSome(arr, key) {
          let tempObj = {}
          arr.forEach(item => {
              if (tempObj[item[key]]) {
                  return
              } else {
                  tempObj[item[key]] = item;
              }
          })
          return Object.values(tempObj)
          }
 

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
      this.initData();
    }
  }

</script>
<style lang='scss' scoped>


</style>
