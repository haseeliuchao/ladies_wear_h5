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
            img {
              width: 74px;
              height: 74px;
            }
          }
          .file-data:nth-of-type(3){
           margin-right: 0px;
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
        margin-top: 50px;
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
                <div class="order-product-item" v-for="(item,index) in orderDetail.item_info_list" :key="index">
                  <div>
                    <img :src="item.item_img">
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
      <p class="choiceReasonList" style="border-bottom:1px solid #e4e4e4"><span>商品状态</span> <span style="color:#999" @click="()=>visiblePopup.selectedGoodStateVisible=true">请选择 ></span></p>
      <p class="choiceReasonList"><span>退款原因</span> <span style="color:#999" @click="()=>visiblePopup.selectedchoiceReasonVisible=true">请选择 ></span></p>
      <p class="choiceReasonList" style="line-height:20px;padding-bottom:8px;"><span>退款金额：<em style="color:#ff2741" v-for="(item,index) in orderDetail.item_info_list" :key="index">¥{{item.coupons_price/100.00|topriceafter}}.{{item.coupons_price/100.00|topricenext}}</em></span></p>
    </div>
    <p class="backMoneyTip" v-for="(item,index) in orderDetail.item_info_list" :key="index"><em style="color:#ff2741">*</em> 最多退￥{{item.coupons_price/100.00|topriceafter}}.{{item.coupons_price/100.00|topricenext}}，不含发货运费￥{{orderDetail.post_fee/100.00|topriceafter}}.{{orderDetail.post_fee/100.00|topricenext}}</p>
    <div class="choiceReason" style="margin-top:0">
       <p class="choiceReasonList" style="justify-content:start"><span>退款说明：</span> <input type="text" placeholder="选填"></p>
    </div>
    <div class="uploadImg">
        <p>上传截图</p>
        <div class="uploadFile-container">
            <file-upload ref="upload" v-model="item.uploadFiles" :multiple="true" accept="image/*" post-action="http://awei.fun:3333/Unit/uploadfile"
              :maximum="6" @input-file="inputFile" @input-filter="inputFilter">
              <div class="uploadFile">
                <i class="camera"></i>
                <span>上传凭证<br>
(最多6张)</span>
              </div>
            </file-upload>
           <div class="file-data" v-for="(file,fileIndex) in item.uploadFiles" :key="fileIndex">
              <img :src="file.blob" alt="" :key="fileIndex">
            </div>
            <!-- <span @click="commitMsg">发布</span> -->
          </div>
    </div>
    <p class="backMoneyTip" style="line-height: 20px;
    margin-top: 6px;"><em style="color:#ff2741">*</em> 如您对退款金额有疑问或需要修改退款金额，请提交退
款申请后联系“个人中心”-“在线客服”。</p>
    <div class="sand-data" @click="commitMsg">提交</div>
     

     <!-- 选择弹窗 -->
    <!-- <mt-popup v-model="visiblePopup.selectedGoodStateVisible" :closeOnClickModal="true" :modal="false" position="bottom" class="modal-popup" style="height:400px;" >
      <div class="my-header">
        <i class="myMsg"></i>
        <strong>商品状态</strong>
      </div>
    </mt-popup> -->
        <mt-popup v-model="visiblePopup.selectedGoodStateVisible" position="bottom" class="modal-popup">
          <p class="popup_title">商品状态</p>
          <div class="selectedList">
              <div>
              <div>
              <i :class="['select-default-icon',item.checked ? 'select-icon' : '']"></i>
              </div>
              <p>未收到货</p>
              </div>
              <div style="border-bottom:none">
                  <div style="border-bottom:none">
              <i :class="['select-default-icon',item.checked ? 'select-icon' : '']"></i>
                  </div>
              <p>已收到货</p>
              </div>
          </div>
          <div class="selectedTrue">选好了</div>
        </mt-popup>

        <mt-popup v-model="visiblePopup.selectedchoiceReasonVisible" position="bottom" class="modal-popup">
          <p class="popup_title">退款原因</p>
          <div class="selectedList">
              <div>
              <div>
              <i :class="['select-default-icon',item.checked ? 'select-icon' : '']"></i>
              </div>
              <p>拍多/错拍/不想要</p>
              </div>
              <div>
              <div>
              <i :class="['select-default-icon',item.checked ? 'select-icon' : '']"></i>
              </div>
              <p>颜色/尺码/参数不符</p>
              </div>
              <div>
              <div>
              <i :class="['select-default-icon',item.checked ? 'select-icon' : '']"></i>
              </div>
              <p>质量问题</p>
              </div>
              <div>
              <div>
              <i :class="['select-default-icon',item.checked ? 'select-icon' : '']"></i>
              </div>
              <p>未按时发货</p>
              </div>
              <div>
              <div>
              <i :class="['select-default-icon',item.checked ? 'select-icon' : '']"></i>
              </div>
              <p>物流信息无法跟踪</p>
              </div>


              <div style="border-bottom:none">
                  <div style="border-bottom:none">
              <i :class="['select-default-icon',item.checked ? 'select-icon' : '']"></i>
                  </div>
              <p>其他</p>
              </div>
          </div>
          <div class="selectedTrue">选好了</div>
        </mt-popup>
  </div>
</template>

<script>
  import {
    getOrderDetail
  } from '@/service/getData';
  import {
    getLocalStorage,
    setLocalStorage
  } from '@/utils/mixin';
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
        },
        visiblePopup: {
          selectedGoodStateVisible: false,
          selectedchoiceReasonVisible: false
        }
      };
    },

    watch: {},

    components: {
      FileUpload: VueUploadComponent
    },

    computed: {},

    methods: {
      async initData() {
       
        this.orderDetail=JSON.parse(getLocalStorage('salesList'))

      },

      inputFile: function (newFile, oldFile) {
        if (newFile && oldFile && !newFile.active && oldFile.active) {
          // 获得相应数据
          console.log('response', newFile.response)
          if (newFile.xhr) {
            //  获得响应状态码
            console.log('status', newFile.xhr.status)
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
        newFile.blob = ''
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }
      },
      commitMsg(){
        this.$store.dispatch('CommitMessage',{
              order_item_id:this.orderDetail.item_info_list[0].order_item_id,
              post_sales_type:this.$route.query.post_sales_type,
              item_status:1,
              reason:'颜色/尺码/参数不符',
              post_sales_explain:'不好看',
              post_sales_img:'https://laquimage.b0.upaiyun.com/activity/2019/5/9/img1557380743045_495.jpg'
            }).then(response=>{
                if(response.code==10000){
                setTimeout(()=>{
                  this.$router.push({path: '/afterSaleDetail',query: {post_sales_id:this.orderDetail.item_info_list[0].post_sales_id}})
                 },1000)
                }else{
                  Toast({
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
      this.initData()
    }
  }

</script>
<style lang='scss' scoped>


</style>
