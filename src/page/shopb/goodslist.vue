<!-- goodList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  
  .paymentLoading {
    position: fixed;
    @include flexbox(center,
    center,
    row,
    nowrap);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      background: rgba(0, 0, 0, .6);
      width: 3rem;
    }
  }

  .paymentContainer {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .4);
    @include flexbox(center,
    center,
    row,
    nowrap);
    .content {
      width: 85%;
      background: #fff;
      border-radius: 10px;
      >button {
        width: 60%;
        margin: 20px auto;
        background: $red;
      }
      >a {
        margin: 5px 0;
        padding: 0 15px;
      }
      .title {
        @include flexbox(center,
        center,
        row,
        nowrap);
        position: relative;
        padding: 15px;
        border-bottom: 1px solid #eee;
        strong {
          font-size: 20px;
        }
        .closeIcon {
          display: block;
          background: url('~jd/images/product-detail-sprites-mjs.png') no-repeat;
          width: 25px;
          height: 25px;
          background-position: -38px -19px;
          background-size: 150px;
          vertical-align: -8px;
          position: absolute;
          left: 10px;
        }
      }
      .paymentInfo {
        padding: 15px;
        border-bottom: 1px solid #eee;
        @include flexbox(flex-start,
        center,
        column,
        wrap);
        font-size: 20px;
        span {}
        strong {
          font-size: 40px;
          font-weight: 400;
          margin: 10px 0 0;
        }
      }
    }
  }

  .my-order {
    background: #fff;
    .screen_subject{
      width: 8.8rem;
      padding: 12px 12px 4px;
      border-radius: 6px;
      position: fixed;
      top: 0;
      z-index: -10;
      opacity: 0;
      background: #fff;
      .screen_subjectgoodimg{
        width: 100%;
      }
      .screen_subjecttext{
        @include flexbox(space-between,
      center,
      row,
      nowrap);
      padding: 10px 0;
      .screen_subjectprice{
        font-size: 17px;
        color: #333;
        font-weight: bold;
      }
      .screen_subjectname{
        // @include textoverflow(2);
                    font-size: 14px;
                    margin-top: 4px;
                    color: #333;
                    line-height: 20px;
                    width: 5.6rem;
      }
      img{
        height: 90px;
        width: 90px;
      }
      }

    }
    .my-header {
      padding: $padding;
      background: #fff;
      position: relative;
      z-index: 1;
      @include flexbox(space-between,
      center,
      row,
      nowrap);
      border-bottom: 1px solid #eee;
      .back {
        display: block;
        width: .65rem;
        height: .65rem;
        background: url('~jd/images/arrow-left.png') no-repeat;
        background-size: 100%;
      }
      strong {
        font-size: 18px;
        font-weight: normal;
        color: #333;
      }
      .myMsg {
        display: block;
        background: url('~jd/images/searchIcon.png') no-repeat;
        background-size: 600% 100%;
        height: .65rem;
        width: .65rem;
        background-position: -2.6rem 0;
      }
    }
    .topnav {
      display: flex;
      width: 10rem;
      background: #f2f2f2;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
      padding: 6px 10px;
      
    
      >span {
        // width: 33.33%;
        padding: 12px 0 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #333;
      }
      .active {
        color: $red;
      }
    }
    .order-container {
      height: auto;
      
      .order-nomore-tip {
        margin-top: 40%;
        @include flexbox(space-between,
        center,
        column,
        wrap);
        i {
          display: block;
          width: 60px;
          height: 60px;
          background: url('~jd/images/order.png') no-repeat;
          background-size: 100%;
        }
        span {
          font-size: 17px;
          font-weight: normal;
          padding: 30px 0;
          color: $gray;
        }
      }
      // .all-order {
      //   background: #fff;
      // }
      .order-list {

        .order-item {
          
          background: #fff;
          width: 10rem;
          padding: 15px 12px;
          border-bottom: 1px solid #e4e4e4;
          .order-top {
            padding: $padding;
            border-bottom: 1px solid #e4e4e4;
            @include flexbox(space-between,
            center,
            row,
            nowrap);
            .left {
              text-align: left;
              img {
                width: 15px;
                height: 15px;
                vertical-align: bottom;
              }
              span {
                font-size: 14px;
                color: #666;
                // margin-left: 5px;
              }
            }
            .right {
              .order-status {
                color: $red;
                font-size: 14px;
              }
            }
          }
          .order-product-list {
            @include flexbox(flex-start,
            flex-start,
            column,
            wrap);
             .order-product-item {
              // padding: $padding;
              width: 100%;
              p:last-child{
                  border-bottom: none
                }
              .prodskulist-info{
                width: 100%;
                // height: 42px;
                line-height: 22px;
                color: #666;
                font-size: 13px;
                padding: 10px 10px;
                 @include flexbox(space-between,
                flex-start,
                row,
                nowrap);
                &:last-child{
                   border-bottom: 1px solid #e4e4e4;
                }
                .sku{
                  width: 56%;
                }
                .price{
                  width: 20%;
                  color: $red;
                  font-size: 16px;
                  font-weight: bold;
                }
                
                
              }
              >div {
                @include flexbox(flex-start,
                flex-start,
                row,
                nowrap);
                width: 100%;
              
                >img {
                  max-width: 2.5rem;
                  max-height: 2.5rem;
                  // border: 1px solid #eee;
                  border-radius: 6px;
                }
                .product-info {
                  margin-left: $margin;
                  .prod-price {
                    font-size: 14px;
                     color: #666;
                     line-height: 28px;
                   
                  }
                  .prod-num {
                     @include flexbox(space-between,
                      flex-start,
                      row,
                      nowrap);
                    font-size: 14px;
                     color: #666;
                     height: 20px;
                     line-height: 20px;
                     .edit-btn{
                       position: relative;
                        .edit-pop{
                         width: 2.1rem;
                         height: 37px;
                         background: #666;
                         position: absolute;
                         left: -2.4rem;
                         top: -7px;
                         border-radius: 6px;
                         color: #fff;
                         padding: 4px 0;
                         @include flexbox(space-between,
                          flex-start,
                          row,
                          nowrap);
                       }
                       div{
                         width: 42px;
                         text-align: center;
                         font-size: 13px;
                          p{
                            line-height: 8px;
                            -webkit-transform-origin-x: 1;   //X方向上缩放的中心点
                            -webkit-transform: scale(0.8);   //缩放比例
                            transform: scale(0.8);
                          }
                       }
                     }
                     
                  }
                  .prod-name{
                    @include textoverflow(2);
                    font-size: 13px;
                    margin-top: 4px;
                    color: #333;
                    line-height: 20px;
                    width: 6.6rem;
                  }
                  .prodsku-info{
                    color: #666;
                    font-size: 12px;
                  }

                }
              }
            }
          }
          .order-sku {
            background: #fff;
            padding: 8px $padding;
            padding-bottom:13px;
            text-align: right;
            font-size: $subtitle;
            // border-bottom: 1px solid #eee;
            // color: #333;
            span{
              font-size: 15px;
              color: #333;
              em{
                color: $red;
                margin-left: 6px;
              }
            }
            strong {
                      font-size: 14px;
                      span{
                        font-weight:bold;
                        font-size: 16px;
                        color: $red;
                        
                      }
                      em{
                        color: $red;
                        font-style: normal
                      }
                    }
          }
          .order-btn-group {
            @include flexbox(flex-end,
            center,
            row,
            nowrap);
            padding: 0 $padding 15px;
            >span {
              padding: 4px 10px;
              color: $red;
              font-size: 14px;
              border: 1px solid $red;
              border-radius: 3px;
              margin-left: 15px;
            }
          }
        }
      }
    }
  }

</style>

<template>
  <div class="my-order" @click="editIndex=null">
    <!-- 分享选择弹窗 -->
    <mt-actionsheet :actions="actions" v-model="sheetVisible"> </mt-actionsheet>
     <div class="screen_subject" id='newImg' :style="{opacity:(opcityShow==true?1:0)}">
                <img :src="screenImgsrc|addImgSize" class="screen_subjectgoodimg">
      <div class="screen_subjecttext">
        <div>
          <p class="screen_subjectprice">¥{{screenPrice/100|TwoNum}}</p>
          <p class="screen_subjectname">{{screenTitle}}</p>
        </div>
        <img :src="'data:image/png;base64,'+screenQrcode">
      </div>
     </div>
    <!-- 分享引导popup -->
    <mt-popup v-model="visiblePopup.shareImg" style="background:rgba(0,0,0,.6);height: 100%;
    width: 100%;"  position="center" class="checkSkupop" >
    <div style="height: 100%;
    width: 100%;"  @click="visiblePopup.shareImg=false">
    <div style="width:8.8rem;position: absolute;left: 50%;margin-left: -4.4rem;top: 50%;margin-top: -6rem;">
      <img :src="screenUrl" alt="" style="width:8.8rem;" @click.stop="visiblePopup.shareImg=true">
      <div style="height:30px;width:1px;background:#fff;margin: -3px auto 4px;"></div>
      <p style="text-align:center;color:#fff;font-size:16px;">长按保存图片</p>
      </div>
     </div>
    </mt-popup>

    <mt-popup v-model="visiblePopup.shareBoo" style="background:none;" :closeOnClickModal='true'  position="top" class="checkSkupop">
       <img src="~jd/images/shareicon.png" alt="" style="margin-left: 10%;
    margin-top: 8px;width:130%;">
    </mt-popup>

    <div class="topnav" @click="editIndex=null">
      <span @click.stop.prevent="switchTabs(0)" :class="{'active':active===0}">出售中({{pageCount.upper_shelf}})</span>
      <span @click.stop.prevent="switchTabs(1)" :class="{'active':active===1}">已下架({{pageCount.lower_shelf}})</span>
      <span @click.stop.prevent="switchTabs(2)" :class="{'active':active===2}">售罄({{pageCount.sell_out}})</span>
      <span @click.stop.prevent="switchTabs(3)" :class="{'active':active===3}">全部商品</span>
    </div>
    <div class="order-container">
      <load-more style="width:100%;" v-if="$route.name=='goodslist'" @loadMore="infiniteCallback" :commad="commad" :param="params"
        :loadMoreIconVisible="false" ref="orderLoadmore">
        <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
          slot="refresh-spinner">更新中...</span>
        <!-- 全部订单 -->
        <div class="all-order" v-if="goodList!=''">
          <div class="order-list">
            <div class="order-item" v-for="(item,index) in goodList" :key="index">
             
              <div class="order-product-list">
               <div class="order-product-item" >
                  <div> 
                    <img  v-lazy="item.item_index_img_url+'_230x230.jpg'" alt="" @click= "()=>$router.push({path: '/product/'+item.item_id,query: {distributor_id:$route.params.distributor_id,distributor_item_id:item.distributor_item_id}})">
                    <div class="product-info">
                      <p class="prod-name" @click= "()=>$router.push({path: '/product/'+item.item_id,query: {distributor_id:$route.params.distributor_id,distributor_item_id:item.distributor_item_id}})">{{item.item_title}}</p>
                      <p class="prod-price" @click= "()=>$router.push({path: '/product/'+item.item_id,query: {distributor_id:$route.params.distributor_id,distributor_item_id:item.distributor_item_id}})">售价：¥{{item.sales_price/100|TwoNum}}&nbsp;&nbsp;成本：¥{{item.cost_price/100|TwoNum}} 起</p>
                      <p class="prod-num">
                        <span v-if="item.sales_volume>0">销量：{{item.sales_volume}}</span>
                        <span v-if="!item.sales_volume">销量：0</span>
                        <span class="edit-btn" ref="editIndexbox">
                        <div class="edit-pop" v-show="editIndex==index">
                          <div style="border-right: 1px solid #949494;" @click= "cnzzTrackEvent('B端店铺商品列表','点击编辑','商品ID+店铺ID：'+item.item_id+':'+$route.params.distributor_id);$router.push({path:'/goodedit/'+item.item_id,query: {shopId:$route.params.distributor_id}})">
                            
                            <img src="~jd/images/edit-popedit.png" style="width:14px;">
                            <p>编辑</p>
                          </div>
                          <!-- <div style="border-right: 1px solid #949494;" @click="delGood(item.distributor_item_id)">
                            <img src="~jd/images/edit-popdel.png" style="width:14px;">
                            <p>删除</p>
                          </div> -->
                          <div @click="showactionsheet(item)">
                            <!-- sheetVisible=true -->
                            <img src="~jd/images/edit-popshare.png" style="width:14px;height:14px;">
                            <p>分享</p>
                          </div>
                        </div>
                        <img src="~jd/images/edit-icon.png"  @click.stop="editIndex=index" style="height:20px;"></span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <!-- 没有订单 -->
        <div class="order-nomore-tip" v-if="goodList==''">
          <i></i>
        </div>
        <!-- 没有订单 -->
      </load-more>
    </div>
    <BackRouter/>
  </div>
</template>

<script>
import BackRouter from 'common/backRouter';
import html2canvas from 'html2canvas';
  import {
    searchshopGoods,
    getpageCount
  } from '@/service/getData';
  import {
    pushHistory
  } from '@/utils/mixin';
  import LoadMore from 'common/loadMore';
  import {
    Toast,MessageBox,Actionsheet
  } from 'mint-ui'
import Vue from 'vue'
Vue.component(Actionsheet.name, Actionsheet);
  export default {
    data() {
      return {
        commad: searchshopGoods,
        pageCount:{},
        visiblePopup: {
          paymentLoadingVisible: false,
          paymentContainerVisible: false,
          shareImg:false,
          shareBoo:false
        },
        paymentPassword: null, //支付密码
        currentOrder: {}, //当前订单
        params: {
          distributor_id:this.$route.params.distributor_id,
          status:1,
          load_qrcode:1,
          page_size: 10,
          current_page: 1
        },
        goodList: [],
        active: null,
        totalNum:null,
        goodListDetail:[],
        goodListDetailin:[],
        editIndex:null,
        screenUrl: "http://img.chaochujue.cn/ICON/2019/5/5/share1561097371087.png",
        screenImgsrc:null,
        screenTitle:null,
        screenPrice:null,
        screenQrcode:null,
        screenScrollTop:null,
        opcityShow:false,
        actions: [{
              name: '发送好友',
              method : this.getCamera	// 调用methods中的函数
          }, {
            name: '生成卡片保存分享', 
            method : this.getLibrary	// 调用methods中的函数
          }],
          sheetVisible: false
          };

    },

    watch: {
      addShareBoovisiblePopup:function(newvs,oldvs){
             if(newvs==false){
                this.$wxShare({title: '快来看看我店里的好东西，总有一款打动你哦',desc: '精选好物等你来选',link:''+process.env.API_ROOT+'/api/redirect?path='+BASE64.encoder('/indexToC/'+this.$route.params.distributor_id)+'',imgUrl: "http://img.chaochujue.cn/ICON/2019/5/1/201906241553261561362823561.png"})
             }
            },
            addshareImgvisiblePopup:function(newvs,oldvs){
             if(newvs==false){
               this.opcityShow=false;
              }
            }
    },

    components: {
      LoadMore,BackRouter
    },

    computed: {
        addShareBoovisiblePopup(){
          return this.visiblePopup.shareBoo;
        },
        addshareImgvisiblePopup(){
          return this.visiblePopup.shareImg;
        }
    },

    methods: {
      cnzzTrackEvent(category, action, label){
           _czc.push(["_trackEvent",category,action,label]);
      },
       async getCount(){
         let Data = await getpageCount({
         distributor_id: this.$route.params.distributor_id
        });
        if(Data.code!=10000){
             Toast({duration: 1000,
             message: Data.msg
             })
             return
        }
        this.pageCount=Data.data

       },
      showactionsheet(item){
        this.cnzzTrackEvent('B端店铺商品列表','生成卡片分享','商品ID：'+item.item_id);
        this.sheetVisible=true;
        this.screenImgsrc=item.item_index_img_url;
        this.screenTitle=item.item_title;
        this.screenPrice=item.sales_price;
        this.screenQrcode=item.qrcode;
        this.screenUrl="http://img.chaochujue.cn/ICON/2019/5/5/share1561097371087.png";
        this.$wxShare({title: '这款衣服我觉得非常适合你，快来看看吧',desc: item.item_title,link:''+process.env.API_ROOT+'/api/redirect?path='+BASE64.encoder('/productToC/'+item.item_id+'?distributor_id='+item.distributor_id)+'',imgUrl: item.item_index_img_url})
      },
      actionSheet: function(){
      this.sheetVisible = true;
      },
      getCamera: function(){
        this.visiblePopup.shareBoo=true;
      },
      getLibrary: function(){
        
        this.screenScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        this.opcityShow=true;
        this.doScreeenShots();
        this.visiblePopup.shareImg=true;
      },

   doScreeenShots() {
          const _this = this
          setTimeout(() => {
               // 创建一个新的canvas
              // const _canvas = _this.$refs.cutScreen.HTMLElement;
              const _canvas = document.getElementById('newImg');;

             // 此处用于解决截图不清晰问题，将生成的canvas放大，然后再填充到原有的容器中就会清晰
              const width = _canvas.offsetWidth; 
              const height = _canvas.offsetHeight; 
              const canvas2 = document.createElement('canvas');
              const scale = 2;
              canvas2.width = width * scale;
              canvas2.height = height * scale;
              const context1 = canvas2.getContext('2d')
              if(context1) {
                context1.scale(scale, scale);
              }
              const opts = {
                    scale,
                    canvas: canvas2,
                    // logging: true, //日志开关，便于查看html2canvas的内部执行流程
                    width,
                    height,
                    // 【重要】开启跨域配置
                    useCORS: true 
                };
              html2canvas(_canvas,opts).then((canvas) => {
                  const context = canvas2.getContext('2d');
                  if(context) {
                      context.scale(2,2);
                      context.mozImageSmoothingEnabled = false;
                      context.webkitImageSmoothingEnabled = false;
                      context.imageSmoothingEnabled = false;
                  }
                  // canvas转换成url，然后利用a标签的download属性，直接下载，绕过上传服务器再下载
                  _this.screenUrl = canvas.toDataURL()
                  document.documentElement.scrollTop = document.body.scrollTop = _this.screenScrollTop;
              });
          },1000)
      },
     
      delGood(id) { //确认删除
         MessageBox.confirm('', { 
            message: '确认要删除该商品吗?', 
            title: '',
            cancelButtonClass:'cancelButton', 
            confirmButtonClass:'confirmButton',
          }).then(action => {
            if (action == 'confirm') {     //确认的回调
              this.$store.dispatch('DistributorItemDel', {
                distributor_item_id: id
              }).then(response => {
                if(response.code!=10000){
                  Toast({duration: 1000,
                  message: response.msg
                  })
                }else{
                this.onRefreshCallback()
                }
              })
              console.log('确认删除')
            }
          }).catch(err => { 
            if (err == 'cancel') {     //取消的回调
            } 
          });

        
      },
      cancelOrder(item) { //取消订单
        this.$store.dispatch('CancelOrder', {
          order_code: item.order_code
        }).then(response => {
          Toast({duration: 1000,
            message: "订单已取消"
          })
          this.onRefreshCallback()
        })
      },
      tipSend(){
        Toast({duration: 1000,
            message: "提醒卖家发货成功"
          })
      },
      // 提醒卖家发货成功
      async onRefreshCallback() { //下拉刷新
        this.params.page_size = 10;
        this.params.current_page = 1;
        this.goodList = [];
        this.$refs.orderLoadmore.onTopLoaded(this.$refs.orderLoadmore.uuid);
      },
      showeditpop(index){
       this.editIndex=index;
      },
      switchTabs(Id) {
        this.editIndex=null;
        if (this.active === Number(Id)) return;
        this.active = Id;
        switch (Number(this.active)) {
          case 0: //全部订单
            this.params.status = 1;
            break;
          case 1: //待付款
            this.params.status = 2;
            break;
          case 2: //待发货
            this.params.status = 3;
            break;
          case 3: //待收货
            this.params.status = null;
            break;
          default: //其他
            throw new Error('未知TabId')
            break
        }
        this.onRefreshCallback();
      },
      
      async infiniteCallback(response) { //加载更多订单
       if(response.data.distributor_item){
            if (response.data.distributor_item.length > 0) {
          response.data.distributor_item.map(i => {
            this.goodList.push(i)
          })
         }
       }
        
      },
    },
    filters:{
        topriceafter(value){
            return value.toFixed(2).substring(0, value.toFixed(2).indexOf('.'));
        },
        topricenext(value){
            return value.toFixed(2).substring(value.toFixed(2).indexOf('.')+1);
        },
        addImgSize(value){
          if(value==''||value==null){
            return;
          }
          if(value.indexOf("img1.vvic.com")!=-1){
            return value.replace('https://img1.vvic.com','https://m.chaochujue.cn/vvic/img1');
          }
          if(value.indexOf("img.vvic.com")!=-1){
            return value.replace('https://img.vvic.com','https://m.chaochujue.cn/vvic/img');
          }
          if(value.indexOf("alicdn.com")!=-1){
            return value;
          }
        }
    },
    mounted: function () {
      this.getCount();
      this.$wxShare({title: '快来看看我店里的好东西，总有一款打动你哦',desc: '精选好物等你来选',link:''+process.env.API_ROOT+'/api/redirect?path='+BASE64.encoder('/indexToC/'+this.$route.params.distributor_id)+'',imgUrl: "http://img.chaochujue.cn/ICON/2019/5/1/201906241553261561362823561.png"})
      if (this.$route.params.tab != null) return this.switchTabs(Number(this.$route.params.tab))
      this.switchTabs(0);
      
    }
  }

</script>
<style lang='scss' scoped>

body{
    background: #fff!important;
  }
  
</style>
