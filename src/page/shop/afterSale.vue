<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .my-order {
      padding-top: $padding;
    .choiceReason{
        background: #fff;
        margin-top: $margin;
        // width: 100%;
        
        .choiceReasonList{
             @include flexbox(space-between,
        center,
        row,
        nowrap);
        line-height: 39px;
        padding: 0 10px;
        color: #333;
        font-size: 14px;
        input{
            line-height: normal;
            color: #666
        }
        }
        
    }
    .backMoneyTip{
        line-height: 39px;
        color: #999;
        padding: 0 10px;
        font-size: 13px;
    }
    .uploadImg{
      padding: 10px 10px 0 10px;
      background: #fff;
      margin-top: $margin;
      >p{
          font-size: 14px;
          color: #333;
          margin-bottom: $margin;
      }
     .uploadFile-container {
          @include flexbox(flex-start,
          center,
          row,
          wrap);
          .file-data {
            margin-right: 16px;
            border: 1px dashed #999;
            width: 76px;
            height: 76px;
            margin-bottom: 16px;
            position: relative;
            span{
                height: 22px;
                width: 22px;
                background: url('~jd/images/delImg.png') no-repeat;
                display: block;
                position: absolute;
                z-index: 1;
                background-size: 100%;
                left: 64px;
                top: -10px;
            }
            img {
              width: 74px;
              height: 74px;
            }
          }
          .file-data:nth-of-type(3){
        //    margin-right: 0px;
          }
          .uploadFile {
            border: 1px dashed #999;
            @include flexbox(center,
            center,
            column,
            wrap);
            width: 76px;
            height: 76px;
            margin-right: 16px;
            margin-bottom: 16px;
            .camera {
              display: block;
              width: .85rem;
              height: .85rem;
              background: url('~jd/images/camera1.png') no-repeat;
              background-size: 100%;
            }
            span {
              font-size: 12px;
              color: #999;
              line-height: 16px;
            }
          }
        }
       
    }
    .sand-data {
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      padding: 14px 0;
      background: $red;
      font-size: 18px;
      color: #fff;
    }
    .order-container {
      height: auto;
      ._v-container {
        // background: #fff;
      }
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
      
        .order-item {
          background: #fff;
          width: 10rem;
          .order-top {
            padding: $padding;
            // border-bottom: 1px solid #e4e4e4;
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
                font-size: 15px;
                color: #666;
                // margin-left: 5px;
              }
            }
            .right {
              .order-status {
                color: $red;
                font-size: 15px;
              }
            }
          }
          .order-product-list {
            @include flexbox(flex-start,
            flex-start,
            column,
            wrap);
            .order-product-item {
              padding: $padding;
              width: 100%;
              >div {
                @include flexbox(flex-end,
                flex-start,
                row,
                nowrap);
                width: 100%;
                padding: 0px;
                img {
                  max-width: 90px;
                  max-height: 90px;
                  // border: 1px solid #eee;
                  border-radius: 6px;
                }
                .product-info {
                  margin-left: $margin;
                  .prod-price {
                    font-size: 14px;
                    >span{
                      color: #999;
                    }
                    strong {
                      font-weight: normal;
                      font-size: 14px;
                      span{
                        font-size: 12px;
                        color: $red;
                        
                      }
                      em{
                        color: $red;
                        font-style: normal
                      }
                    }
                    @include flexbox(space-between,
                    center,
                    row,
                    nowrap);
                  }
                  p {
                    @include textoverflow(2);
                    font-size: 13px;
                    margin: 4px 0;
                    color: #333;
                    line-height: 20px;
                  }
                  .prodsku-info{
                    color: #666;
                    font-size: 12px;
                  }

                }
              }
          }
          
          .order-sku {
            background: #fff;
            padding: 8px $padding;
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
                      font-weight: normal;
                      font-size: 14px;
                      span{
                        font-size: 12px;
                        color: $red;
                        
                      }
                      em{
                        color: $red;
                        font-style: normal
                      }
                    }
          }
        }
      }
    }
    .modal-popup{
        height: auto;
        .popup_title{
            color: #333;
            font-size: 16px;
            line-height: 40px;
            text-align: center
        }
        .selectedList{
            border: 1px solid #e4e4e4;
            border-bottom: none;
            margin: 0 10px 45px;
            div{
                @include flexbox(space-between,
                center,
                row,
                nowrap);
                height: 42px;
                border-bottom: 1px solid #e4e4e4;
                div{
                    border-right: 1px solid #e4e4e4;
                    i{
                        margin-left: 16px;
                    }
                }
                p{
                    color: #333;font-size: 13px;
                    width: 84%;
                    padding-left: 12px;
                }
            }
        }
        .selectedTrue{
        width: 100%;
        text-align: center;
        padding: 14px 0;
        background: $red;
        font-size: 18px;
        color: #fff;
        }
    }
  }

</style>

<template>
  <div class="my-order">
      <!-- 头部 -->
    <div class="order-container">
            <div class="order-item">
              <div class="order-product-list">
                <div class="order-product-item" v-for="(item,index) in goodInfofilter" :key="index">
                  <div>
                    <img :src="item.item_img+'_190x190.jpg'">
                    <div class="product-info">
                      <p class="prod-name">{{item.item_title}}</p>
                      <p class="prodsku-info">颜色 {{item.color}}&nbsp;&nbsp;&nbsp;&nbsp;尺寸 {{item.size}}</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </div>
    <div class="choiceReason">
      <p class="choiceReasonList" style="border-bottom:1px solid #e4e4e4"><span>商品状态</span> 
      <span style="color:#999" v-if="item_status" @click= "()=>visiblePopup.selectedGoodStateVisible=true">{{item_statustext}} ></span>
      <span style="color:#999" v-else @click= "()=>visiblePopup.selectedGoodStateVisible=true">请选择 ></span>
      </p>
      <p class="choiceReasonList"><span>退款原因</span> 
      <span style="color:#999" v-if="reason" @click= "()=>visiblePopup.selectedchoiceReasonVisible=true">{{reason}} ></span>
      <span style="color:#999" v-else @click= "()=>visiblePopup.selectedchoiceReasonVisible=true">请选择 ></span>
      </p>
      <p class="choiceReasonList" style="line-height:20px;padding-bottom:8px;"><span>退款金额：<em style="color:#ff2741" v-for="(item,index) in goodInfofilter" :key="index">¥{{item.coupons_price/100.00|topriceafter}}.{{item.coupons_price/100.00|topricenext}}</em></span></p>
    </div>
    <p class="backMoneyTip" v-for="(item,index) in goodInfofilter" :key="index"><em style="color:#ff2741">*</em> 最多退￥{{item.coupons_price/100.00|topriceafter}}.{{item.coupons_price/100.00|topricenext}}，不含发货运费￥{{orderDetail.post_fee/100.00|topriceafter}}.{{orderDetail.post_fee/100.00|topricenext}}</p>
    <div class="choiceReason" style="margin-top:0">
       <p class="choiceReasonList" style="justify-content:start"><span>退款说明：</span> <input type="text" v-model="post_sales_explain" placeholder="选填"></p>
    </div>
    <div class="uploadImg">
        <p>上传截图</p>
        <!-- post-action="http://v0.api.upyun.com/laquimage" -->
        <div class="uploadFile-container">
             <div class="file-data" v-for="(file,fileIndex) in item.uploadFiles" :key="fileIndex">
              <span  @click.prevent="remove(file)"></span>
              <img :src="file.blob" alt="" :key="fileIndex">
            </div>
            <file-upload ref="upload" v-model="item.uploadFiles" :multiple="true" accept="image/*" 
              :maximum="6" @input-file="inputFile" @input-filter="inputFilter">
              <div class="uploadFile">
                <i class="camera"></i>
                <span>上传凭证<br>(最多6张)</span>
              </div>
            </file-upload>
          </div>
    </div>
    <p class="backMoneyTip" style="line-height: 20px;
    margin-top: 6px;"><em style="color:#ff2741">*</em> 如您对退款金额有疑问或需要修改退款金额，请提交退
款申请后联系“个人中心”-“在线客服”。</p>
    <div class="sand-data" @click= "commitMsg">提交</div>
     

     <!-- 选择弹窗 -->
    <!-- <mt-popup v-model="visiblePopup.selectedGoodStateVisible" :closeOnClickModal="true" :modal="false" position="bottom" class="modal-popup" style="height:400px;" >
      <div class="my-header">
        <i class="myMsg"></i>
        <strong>商品状态</strong>
      </div>
    </mt-popup> -->
        <mt-popup v-model="visiblePopup.selectedGoodStateVisible" :closeOnClickModal='false' position="bottom" class="modal-popup">
          <p class="popup_title">商品状态</p>
          <div class="selectedList">
              <div v-for="(item,index) in selectedGoodStateList" :key="index">
              <div>
              <i :class="['select-default-icon',item.checked ? 'select-icon' : '']" @click= "checkedone(item)"></i>
              </div>
              <p>{{item.name}}</p>
              </div>
              
          </div>
          <div class="selectedTrue" @click= "visiblePopup.selectedGoodStateVisible=false">选好了</div>
        </mt-popup>

        <mt-popup v-model="visiblePopup.selectedchoiceReasonVisible" position="bottom" :closeOnClickModal='false' class="modal-popup">
          <p class="popup_title">退款原因</p>
          <div class="selectedList">
              <div v-for="(item,index) in selectedchoiceReasonList" :key="index">
              <div>
              <i :class="['select-default-icon',item.checked ? 'select-icon' : '']" @click= "checkedtwo(item)"></i>
              </div>
              <p>{{item.reason}}</p>
              </div>
          </div>
          <div class="selectedTrue" @click= "visiblePopup.selectedchoiceReasonVisible=false">选好了</div>
        </mt-popup>
        <BackRouter/>
  </div>
</template>

<script>
import BackRouter from 'common/backRouter';
  import {
    getOrderDetail
  } from '@/service/getData';
  import {
    getLocalStorage,
    setLocalStorage,
    getSessionStorage
  } from '@/utils/mixin';
  import axios from 'axios';
  import VueUploadComponent from 'vue-upload-component';
  import {
    Toast,
    Popup
  } from 'mint-ui'
  export default {
    data() {
      return {
        item:{
          uploadFiles :[]
        },
        currentOrder: {}, //当前订单
        orderDetail: {
            item_info_list:[]
        },
        visiblePopup: {
          selectedGoodStateVisible: false,
          selectedchoiceReasonVisible: false
        },
        selectedGoodStateList:[
            {
            checked:false,
            name:'未收到货',
            item_status:1
            },{
            checked:false,
            name:'已收到货',
            item_status:2
        }],
        selectedchoiceReasonList:[
           {
            checked:false,
            reason:'拍多/错拍/不想要',
            },{
            checked:false,
            reason:'颜色/尺码/参数不符',
            }
            ,{
            checked:false,
            reason:'质量问题',
            }
            ,{
            checked:false,
            reason:'未按时发货',
            }
            ,{
            checked:false,
            reason:'物流信息无法跟踪',
            }
            ,{
            checked:false,
            reason:'其他',
            }
        ],
        imgRemoveIndex:null,
        postSalesImgList: [],
        postSalesImgstr: '',
        imgRemoveIndexcur:'',
        order_item_id:null,
        reason:null,
        item_status:null,
        item_statustext:null,
        post_sales_explain:''
      };
    },

    watch: {},

    components: {
      FileUpload: VueUploadComponent,
      BackRouter
    },

    computed: {
        goodInfofilter: function () {
          let that=this;
      return this.orderDetail.item_info_list.filter(function (item) {
        return item.order_item_id==that.order_item_id
      })
      }
    },

    methods: {
      cnzzTrackEvent(category, action, label){
           _czc.push(["_trackEvent",category,action,label]);
      },
      async initData() {
       
        this.orderDetail=JSON.parse(getLocalStorage('salesList'))

      },
      checkedone(item){
        this.selectedGoodStateList.map(i => {
          i.checked=false;
        })
        this.cnzzTrackEvent('售后编辑页','售后收到货/未收到货',item.name);
         item.checked = !item.checked;
         this.item_status=item.item_status;
         this.item_statustext=item.name;
      },
      checkedtwo(item){
        this.selectedchoiceReasonList.map(i => {
          i.checked=false;
        })
         this.cnzzTrackEvent('售后编辑页','售后原因',item.reason);
         item.checked = !item.checked;
         this.reason=item.reason;
      },
      inputFile: function (newFile, oldFile) {
        // 自动上传
        if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
            if (newFile && !oldFile) {
                    if (!this.$refs.upload.active) {
                            var bucketname="imagechao";
                            var username="system";
                            var password="4u9nXx9IF5SKSqTW44agMGUh8lyLT4se";
                            var ontime=new Date();
                            var datename=ontime.getFullYear()+"/"+ontime.getMonth()+"/"+ontime.getDay();
                            var save_key="/ICON/"+datename+"/{filename}"+new Date().getTime()+"{.suffix}";
                            var url="http://v0.api.upyun.com/"+bucketname;
                            var policy=btoa(JSON.stringify({"bucket": bucketname, "save-key": save_key, "expiration": parseInt(Date.parse(new Date())+3600),}));
                            var signature="UPYUN "+username+":"+b64hamcsha1(HexMD5.MD5(password).toString(HexMD5.enc.Hex), "POST&/"+bucketname+"&"+policy);
                            var index1 = newFile.file.name.lastIndexOf(".");
                            var index2 = newFile.file.name.length;
                            var suffix = newFile.file.name.substring(index1 + 1, index2);
                            let that=this;
                            let formData = new FormData();
                            formData.append("file",newFile.file);
                            formData.append("policy",policy);
                            formData.append("authorization",signature);
                            axios.post(url, formData).then(function (response) {
                                that.postSalesImgList.push("https://img.chaochujue.cn"+response.data.url);
                              that.postSalesImgstr=that.postSalesImgList.join(",");
            }).catch(function (error) {
                        　　alert(error);
                            })
                    }
            }else{
               this.postSalesImgList.map(item => {
                    if(item.indexOf(oldFile.file.name.substring(0, oldFile.file.name.indexOf('.'))) != -1 ){
                        this.imgRemoveIndexcur=item;
                  }
               })

               let index = this.postSalesImgList.indexOf(this.imgRemoveIndexcur);
               this.postSalesImgList.splice(index, 1);
               this.postSalesImgstr=this.postSalesImgList.join(",");
            }
        }

      },
      inputFilter: function (newFile, oldFile, prevent) {
        if (newFile && !oldFile) {
          // 过滤不是图片后缀的文件
          if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
            return prevent()
          }
        }
        // 创建 blob 字段 用于图片预览
        if (!newFile && oldFile) {
        }else{
        newFile.blob = ''
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }
        }
        

         
      },
      remove(file){
         this.$refs.upload.remove(file)
      },
      commitMsg(){
          if(!this.item_status){
              Toast({duration: 1000,message: '请选择商品状态'})
              return;
          }
          if(!this.reason){
              Toast({duration: 1000,message: '请选择退款原因'})
              return;
          }
        this.$store.dispatch('CommitMessage',{
              order_item_id:this.order_item_id,
              post_sales_type:this.$route.query.post_sales_type,
              item_status:this.item_status,
              reason:this.reason,
              post_sales_explain:this.post_sales_explain,
              post_sales_img:this.postSalesImgstr
            }).then(response=>{
                if(response.code==10000){
                setTimeout(()=>{
                  this.$router.push({path: '/afterSaleDetail',query: {post_sales_id:response.data.post_sales_id}})
                 },1000)
                }else{
                  Toast({duration: 1000,
                  message: response.msg
                  })
                }
            })
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
      if(getSessionStorage('distributorTitle')){
         document.title=getSessionStorage('distributorTitle');
      }
      this.initData();
      this.order_item_id=this.$route.query.order_item_id
    }
  }

</script>
<style lang='scss' scoped>


</style>
