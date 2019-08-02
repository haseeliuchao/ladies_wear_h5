



<!-- address -->
<style lang="scss" scoped>
@import "~assets/common/css/mixin.scss";
.right-menu {
  width: 10px;
  height: 10px;
  background-image: url("~jd/images/product-detail-sprites-mjs.png");
  background-repeat: no-repeat;
  background-size: 100px 100px;
  background-position: 5px -20px;
  margin-left: 4px;
  display: inline-block;
}
.withdrawal {
  width: 10rem;
  height: 100%;

  position: relative;
  .withdrawal-tip {
    font-size: 14px;
    color: #999;
    line-height: 44px;
    padding: 0 0.3rem;
    em {
      color: $red;
    }
  }
  .withdrawal-list {
    width: 10rem;
    padding: 0 0.3rem;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #e4e4e4;
    @include flexbox(start, center, row, nowrap);
    .withdrawal-listleft {
      font-size: 15px;
      color: #333;
      width: 2.8rem;
    }
    .withdrawal-listright {
      @include flexbox(space-between, center, row, nowrap);
      font-size: 15px;
      color: #999;
      width: 6.6rem;
      height: 49px;
      input {
        height: 49px;
        line-height: normal;
        width: 100%;
        font-size: 15px;
      }
      .msgcode {
        height: 28px;
        border: 1px solid #e4e4e4;
        width: 60%;
        text-align: center;
        margin-right: 8px;
      }
    }
    .withdrawal-listright1 {
      @include flexbox(start, center, row, nowrap);
      span {
        color: $red;
        font-size: 13px;
      }
    }
  }
}

.save-address {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 14px 0;
  background: $red;
  font-size: 18px;
  color: #fff;
}
.address-pricker {
  @include wh(100%, 220px);
  .address-picker-header {
    position: relative;
    p {
      padding: $padding 0;
      font-size: 15px;
      color: #333;
      text-align: center;
    }
    .picker-close {
      position: absolute;
      right: 10px;
      bottom: 7px;
      font-weight: normal;
      font-size: 25px;
      color: #999;
      opacity: 0.7;
    }
  }
  .pop-btn {
    @include flexbox(space-between, center, row, nowrap);
    font-size: 16px;
    padding: 10px 0.3rem;
    .cancle {
      color: #999;
    }
    .confirm {
      color: #333;
    }
  }
}
.disabled-btn {
  margin: 0;
  border-radius: 0;
  background-color: #b4b4b4 !important;
  color: #fff !important;
}
.cell-btn {
  margin: 0;
  border-radius: 0;
}
// .popupVisible {
//   transform: scale(0.95) !important;
// }

.error-pop{
    background: rgba(0, 0, 0, 0.6);
     p{
        width: 10rem;
        color: #fff;
        font-size: 15px;
        line-height: 44px;
        padding: 0 10px;
    }
    
}

.my-header {
      padding: $padding;
      background: #fff;
      @include flexbox(space-between, center, row, nowrap);
      border-bottom: 1px solid #eee;
      .back {
        display: block;
        width: .56rem;
        height: .56rem;
        background: url('~jd/images/close.png') no-repeat;
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
        opacity: 0;
        background-position: -2.6rem 0;
      }
    }
.noScroll {
  overflow-y: hidden;
  }
  .addressList {
    .my-header {
      padding: $padding;
      background: #fff;
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
        opacity: 0;
        background-position: -2.6rem 0;
      }
    }
    .addNewAddressbtn {
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      padding: 14px 0;
      background: $red;
      font-size: 18px;
      color: #fff;
    }
    
    .address-container {
      height: 335px;
      // overflow: auto;
      overflow-y: scroll;
  /* ios需要下面这个属性 */
  -webkit-overflow-scrolling: touch;
      .address-item {
        // @include flexbox(space-between,
        // flex-start,
        // column,
        // wrap);
        @include flexbox(space-between,
        center,
        row,
        nowrap);
        background: #fff;
        border-bottom: 1px solid #e4e4e4;
        // padding-left: 60px;
        position: relative;
        .address-itemleft{
           @include flexbox(start,
        center,
        row,
        wrap);
        padding-left: $padding;
        padding-right: $padding;
            >p {
          width: 100%;
           span{
            
             margin-right: $margin;
           }
          }
        
        }
        .address-itemright{
              width: 1.34rem;
              text-align: center;
              
              img{
                margin-bottom: 5px;
                height: 15px;
              }
              p{
                color: #999;
                font-size: 12px;
              }
        }
        
        .name {
          font-size: 14px;
          color: #333;
          padding: 8px 0;
           @include flexbox(start,
            center,
            row,
            nowrap);
        }
        .address {
          font-size: 13px;
          color: #333;
          padding: 0 0 15px;
          @include textoverflow(2);
          
          line-height: 18px;
        }
        .address-status {
          width: 100%;
          @include flexbox(space-between,
          center,
          row,
          nowrap);
          padding: $padding 0;
          .left {
            @include flexbox(flex-start,
            center,
            row,
            nowrap);
            flex: initial;
            font-size: $subtitle;
            letter-spacing: 1px;
            color: $gray;
            i {
              vertical-align: middle;
              margin-right: $margin;
            }
          }
          .right {
            @include flexbox(space-between,
            center,
            row,
            nowrap); // width: 4rem;
            flex: initial;
            font-size: $subtitle;
            color: $gray;
            letter-spacing: 1px;
            >div {
              margin-right: 10px;
              @include flexbox(space-between,
              center,
              row,
              nowrap);
              i {
                margin-right: 5px;
              }
            }
            .edit {
              .edit-address-icon {
                display: block;
                @include wh(16px,
                16px);
                @include bg('~jd/images/edit.png');
              }
            }
            .delect {
              .delect-address-icon {
                display: block;
                @include wh(16px,
                16px);
                @include bg('~jd/images/edit.png');
              }
            }
          }
        }
      }
      .coupon-item{
        height: 99px;
        width: 9.6rem;
        margin-left: .2rem;
        background: url('~jd/images/coupon-itembg.png') no-repeat center;
        background-size: 100%;
        @include flexbox(space-between,
      center,
      row,
      nowrap);
        .coupon-itemleft{
             width: 66%;
             height: 80%;
             padding-left: 20px;
             .coupon-price{
                color: $red;
                font-size: 14px;
                padding: 3px 0;
                em{
                  font-size: 22px;
                }
             }
             .coupon-text{
               line-height: 23px;
               font-size: 13px;
               color: #999;
             }
        }
        i{
          margin-right: 1.1rem;
          width: 35px;
          height: 35px;
        }
      }
    }
  }
</style>
<style>
/* 弹窗样式 */
.mint-msgbox-message {
  color: #333;
}
.cancelButton {
  color: #333 !important;
}
.confirmButton {
  color: #ff2741 !important;
}
/* 收货地址城市选择样式 */
.picker-item {
  color: #333;
  font-size: 16px;
  padding: 0 28px !important;
}
.picker-item.picker-selected {
  color: #333;
}
.picker-center-highlight {
  border: none;
  background: #f2f2f2;
  z-index: -1;
}



</style>
<template>
  <div class="withdrawal">
    <p class="withdrawal-tip">
      <em>* </em> 提现请填写银行预留信息
    </p>
    <!-- @click="errorVisible=true" -->
    <div class="withdrawal-list" @click= "$refs.holderInput.focus()">
      <div class="withdrawal-listleft">户名</div>
      <div class="withdrawal-listright">
        <input type="text" v-model="withdrawalForm.bank_card_holder" @blur="gotoView(1)" placeholder="请输入户名" ref="holderInput">
      </div>
    </div>
    <div class="withdrawal-list" @click= "$refs.numberInput.focus()">
      <div class="withdrawal-listleft">账户</div>
      <div class="withdrawal-listright">
        <input type="number" v-model="withdrawalForm.bank_card_number" @blur="gotoView(2)" placeholder="请输入银行卡卡号" ref="numberInput">
      </div>
    </div>
    <div class="withdrawal-list" @click="visiblePopup.selectedBankVisible=true">
      <div class="withdrawal-listleft">开户行</div>
      <div class="withdrawal-listright">
        <span :class="[withdrawalForm.bank_name!='请选择银行'? 'bankname-active':'']">{{withdrawalForm.bank_name}}</span>
        <span class="right-menu"></span>
      </div>
    </div>
    <div class="withdrawal-list"  @click= "$refs.branchnameInput.focus()">
      <div class="withdrawal-listleft">开户支行</div>
      <div class="withdrawal-listright">
        <input type="text" @blur="gotoView(3)" v-model="withdrawalForm.bank_card_branch_name" placeholder="请输入开户支行" ref="branchnameInput">
      </div>
    </div>

    <div class="withdrawal-list" style="border-bottom:none;">
      <div class="withdrawal-listleft">开户省份</div>
      <div class="withdrawal-listright" @click="()=>addressVisible=true">
        <span :class="[withdrawalForm.bank_card_province!='请选择开户省份'? 'bankname-active':'']">{{withdrawalForm.bank_card_province}} {{withdrawalForm.bank_card_city}}</span>
        <span class="right-menu"></span>
      </div>
    </div>

    <div class="withdrawal-list" style="margin-top:8px;border-bottom:none;">
      <div class="withdrawal-listleft">手机验证码</div>
      <div class="withdrawal-listright withdrawal-listright1" @click= "$refs.codeInput.focus()">
        <input type="tel" @blur="gotoView(4)" v-model="withdrawalForm.sms_code" maxlength="6" class="msgcode" placeholder="请输入短信验证码" ref="codeInput">
        <span :class="[resetSendPhoneMessage?'disabled-btnspan':'']" @click= "registeredSendPhoneMessage"
                    :disabled="resetSendPhoneMessage">{{resetSendPhoneMessage ? `${resetSendPhoneMessage}S后重新获取` : '获取验证码'}}</span>
      </div>
    </div>
    <p class="withdrawal-tip" style="line-height: 20px;padding: 6px .3rem 0;">
      <em>* </em> 提现需要1-3个工作日的人工审核，审核通过后，相应款项会进入你的提现账户。
    </p>
    <!-- <div class="fixed-btn">保存</div> -->
    <div
      class="save-address"
      :class="['cell-btn',
         withdrawalForm.bank_card_province=='请选择开户省份'||
         withdrawalForm.bank_card_province=='请选择'||
         withdrawalForm.bank_name=='请选择银行'||
        !withdrawalForm.bank_card_number||
        !withdrawalForm.bank_card_holder||
        !withdrawalForm.bank_card_branch_name||
          !flog1||
          !flog2||
          !flog3||
        !withdrawalForm.sms_code?'disabled-btn':'']"
      @click="saveBankCard"
    >保存</div>

    <mt-popup v-model="addressVisible"  position="bottom" class="address-pricker">
      <div class="pop-btn clearfix">
        <p class="cancle" @click="cancle">取消</p>
        <p class="confirm" @click="confirm">完成</p>
      </div>
      <mt-picker
        v-model="addressVisible"
        :slots="myAddressSlots"
        :show-toolbar="false"
        ref="picker"
        :item-height="44"
        @change="onMyAddressChange"
        @touchmove.native.stop.prevent
      ></mt-picker>
    </mt-popup>



    <mt-popup v-model="errorVisible" position="top" closeOnClickModal='false' class="error-pop" :modal="false">
    <p>{{errorText}}</p>
    </mt-popup>
    <mt-popup v-model="visiblePopup.selectedBankVisible" :closeOnClickModal="true" :modal="true" position="bottom" class="modal-popup" style="height:380px;" >
      <div class="my-header">
        <i class="myMsg"></i>
        <strong>提现账户</strong>
        <i class="back" @click= "()=>visiblePopup.selectedBankVisible=false"></i>
      </div>
      <div class="addressList">
          <div class="address-container">
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/2/zhaoshang1562034587881.png','招商银行',1)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/2/zhaoshang1562034587881.png"></span><span>招商银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===1">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/gs1562313297126.png','中国工商银行',2)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/gs1562313297126.png"></span><span>中国工商银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===2">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/js1562313378842.png','中国建设银行',3)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/js1562313378842.png"></span><span>中国建设银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===3">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/zg1562313416515.png','中国银行',4)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/zg1562313416515.png"></span><span>中国银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===4">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/jt1562313446765.png','交通银行',5)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/jt1562313446765.png"></span><span>交通银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===5">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/ny1562313702587.png','中国农业银行',6)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/ny1562313702587.png"></span><span>中国农业银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===6">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/yz1562313789572.png','中国邮政储蓄银行',7)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/yz1562313789572.png"></span><span>中国邮政储蓄银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===7">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/gd1562313831804.png','光大银行',8)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/gd1562313831804.png"></span><span>光大银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===8">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/ms1562313916803.png','民生银行',9)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/ms1562313916803.png"></span><span>民生银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===9">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/pa1562313981526.png','平安银行',10)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/pa1562313981526.png"></span><span>平安银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===10">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/pf1562314011160.png','浦发银行',11)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/pf1562314011160.png"></span><span>浦发银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===11">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/zx1562314049242.png','中信银行',12)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/zx1562314049242.png"></span><span>中信银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===12">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/xy1562314141040.png','兴业银行',13)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/xy1562314141040.png"></span><span>兴业银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===13">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/hx1562314215836.png','华夏银行',14)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/hx1562314215836.png"></span><span>华夏银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===14">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/gf1562314274257.png','广发银行',15)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/gf1562314274257.png"></span><span>广发银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===15">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/hzyh1562314315275.png','杭州银行',16)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/hzyh1562314315275.png"></span><span>杭州银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===16">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
            <div class="address-item" @click="bankCheck('http://img.chaochujue.cn/ICON/2019/6/5/rs1562314434015.png','农村商业银行',17)">
              <div class="address-itemleft">
              <p class="name"><span><img height='28' src="http://img.chaochujue.cn/ICON/2019/6/5/rs1562314434015.png"></span><span>农村商业银行</span></p>
              </div>
              <div class="address-itemright" v-if="bankCheckicon===17">
                <img src="~jd/images/bank_check.png" width='20'/>
              </div>
            </div>
           
          </div>
        <!-- </scroller> -->
        <!-- <div class="addNewAddressbtn" @click= "$router.push(`/address`)">添加新地址</div> -->
      </div>
    </mt-popup>

  <BackRouter :fixePosition='2'/>
  </div>
</template>
<script>
import BackRouter from 'common/backRouter';
import { Switch, Toast, Picker, MessageBox, Popup } from "mint-ui";
import myaddress from "@/utils/address3.json";
import {
  getLocalStorage,
  setLocalStorage,
  getSessionStorage
} from "@/utils/mixin";

import {
    accountRevenueDetail
  } from '@/service/getData';
export default {
  data() {
    return {
      blurVisible: false,
      addressFormcur: 1,
      withdrawalForm: {
        bank_card_province: '请选择开户省份',
        bank_card_number: null,
        bank_card_holder: null,
        bank_name: '请选择银行',
        bank_card_branch_name: null,
        bank_card_city: null,
        sms_code: null,
        phone: null,
      },
      visiblePopup:{
          selectedBankVisible:false
      },
      flog1:false,
      flog2:false,
      flog3:false,
      bankCheckicon:null,
      resetSendPhoneMessage:null,
      addressVisible: false,
      errorVisible: false,
      errorText:'',
      focusphoneoneState: false,
      focuscodeoneState: false,
      focuscodetwoState: false,
      focuscodethreeState: false,
      myAddressSlots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(myaddress), //省份数组
          className: "slot1",
          textAlign: "left"
        },
        {
          divider: true,
          content: "",
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "right"
        }
      ]
    };
  },

  watch: {
    errorVisible(val) {
      if (val) {
        setTimeout(() => {
          this.errorVisible = false;
        }, 2000);
      }
    },
     wcvisiblePopup:function(newvs,oldvs){
            if (newvs) {
                document.getElementsByTagName('html')[0].className='htmlover';
                document.body.className='htmlover';
              } else {
                document.getElementsByTagName('html')[0].className='htmlnoover';
                document.body.className='htmlnoover';
              }
              // 下面需要这两行代码，兼容不同浏览器
              document.body.scrollTop = this.pageScrollYoffset;
              window.scroll(0, this.pageScrollYoffset);
            }
  },

  components: {
    // VDistpicker
    "mt-picker": Picker,
    BackRouter
  },

  computed: {
      wcvisiblePopup(){
          return this.visiblePopup.selectedBankVisible;
        }
  },

  methods: {
    cnzzTrackEvent(category, action, label){
           _czc.push(["_trackEvent",category,action,label]);
         },
      bankCheck(icon,name,iconid){
          this.withdrawalForm.bank_name=name;
          this.withdrawalForm.bank_icon=icon;
          this.bankCheckicon=iconid;
          this.visiblePopup.selectedBankVisible=false;
      },
      async registeredSendPhoneMessage() { //获取验证码
        let Data= await this.$store.dispatch('SendPhoneMessage', {
          phone: this.withdrawalForm.phone,
          open_id:this.withdrawalForm.phone
        });
        this.resetSendPhoneMessage = 60;
        if (Data.code !== 10000) return Toast({duration: 1000,
          message: Data.msg
        })
        Toast({duration: 1000,
            message: '发送成功',
            position: 'center'
          })
        let times = setInterval(() => {
          if (this.resetSendPhoneMessage <= 0) {
            this.resetSendPhoneMessage = null;
            clearInterval(times);
          } else {
            this.resetSendPhoneMessage--;
          }
        }, 1000)
      },



    //   绑定银行卡：/bind/bank/card
    async saveBankCard() {
        console.log(this.withdrawalForm)
      let params = {
        bank_card_number: this.withdrawalForm.bank_card_number,
        bank_card_holder: this.withdrawalForm.bank_card_holder,
        bank_name: this.withdrawalForm.bank_name,
        bank_card_branch_name: this.withdrawalForm.bank_card_branch_name,
        bank_card_province: this.withdrawalForm.bank_card_province,
        bank_card_city: this.withdrawalForm.bank_card_city,
        sms_code: this.withdrawalForm.sms_code,
        bank_icon:this.withdrawalForm.bank_icon
      };
      
        this.$store.dispatch("SaveBankCard", params).then(response => {
            if (response.code != 10000) {
            //   Toast({ duration: 1000, message: "保存失败" });
            } else {
            //   Toast({ duration: 1000, message: "保存成功" });
            // this.$router.push({path: '/withdrawalEntrance'});
              this.$router.go(-1);
            }
          })
          .catch(error => {
            Toast({ duration: 1000, message: "访问接口失败" });
          });
    },

   
   
    onMyAddressChange(picker, values) {
        this.addressFormcur++;
       if(myaddress[values[0]]){  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
          picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
          picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
           if(this.addressFormcur>4){
             this.withdrawalForm.bank_card_province=values[0];
              this.withdrawalForm.bank_card_city= values[1];
           }
        }
      },
    confirm() {
      this.addressVisible = false;
      // 获取变换后的城市数据
      var valueArr = this.$refs.picker.getValues();
      this.oldSlots = valueArr.concat();
    //   this.myAddressCity = this.$refs.picker.getSlotValues(1);
    //   this.myAddresscounty = this.$refs.picker.getSlotValues(2);
    },
    cancle() {
      this.addressVisible = false;
      // 把缓存的数据赋值给对应的slot
      this.$refs.picker.setSlotValues(1, this.myAddressCity);
      this.$refs.picker.setSlotValues(2, this.myAddresscounty);
      this.$refs.picker.setValues(this.oldSlots);
    },
    onSelected(data) {
      this.addressVisible = false;
      this.withdrawalForm.bank_card_province = data.bank_card_province.value;
      this.withdrawalForm.bank_card_city = data.bank_card_city.value;
    //   this.withdrawalForm.area = data.area.value;
    },
    async initData() {
        let Data = await accountRevenueDetail();
        if(Data.code==10000){
            if(Data.data.member_bank_bo){
                this.withdrawalForm=Data.data.member_bank_bo;
                this.cnzzTrackEvent('账户提现','修改提现账户','提现账户名称：'+this.withdrawalForm.bank_card_holder);
                if(this.withdrawalForm.bank_card_holder){
                  this.flog1=true;
                }
                if(this.withdrawalForm.bank_card_number){
                  this.flog2=true;
                }
                if(this.withdrawalForm.bank_card_branch_name){
                  this.flog3=true;
                }
                if(this.withdrawalForm.bank_name.indexOf('招商')!=-1){
                    this.bankCheckicon=1
                }
                else if(this.withdrawalForm.bank_name.indexOf('工商')!=-1){
                    this.bankCheckicon=2
                }
                else if(this.withdrawalForm.bank_name.indexOf('建设')!=-1){
                    this.bankCheckicon=3
                }
                else if(this.withdrawalForm.bank_name.indexOf('中国银行')!=-1){
                    this.bankCheckicon=4
                }
                else if(this.withdrawalForm.bank_name.indexOf('交通')!=-1){
                    this.bankCheckicon=5
                }
                else if(this.withdrawalForm.bank_name.indexOf('农业')!=-1){
                    this.bankCheckicon=6
                }
                else if(this.withdrawalForm.bank_name.indexOf('邮政')!=-1){
                    this.bankCheckicon=7
                }
                else if(this.withdrawalForm.bank_name.indexOf('光大')!=-1){
                    this.bankCheckicon=8
                }
                else if(this.withdrawalForm.bank_name.indexOf('民生')!=-1){
                    this.bankCheckicon=9
                }
                else if(this.withdrawalForm.bank_name.indexOf('平安')!=-1){
                    this.bankCheckicon=10
                }
                else if(this.withdrawalForm.bank_name.indexOf('浦发')!=-1){
                    this.bankCheckicon=11
                }
                else if(this.withdrawalForm.bank_name.indexOf('中信')!=-1){
                    this.bankCheckicon=12
                }
                else if(this.withdrawalForm.bank_name.indexOf('兴业')!=-1){
                    this.bankCheckicon=13
                }
                else if(this.withdrawalForm.bank_name.indexOf('华夏')!=-1){
                    this.bankCheckicon=14
                }
                else if(this.withdrawalForm.bank_name.indexOf('广发')!=-1){
                    this.bankCheckicon=15
                }
                else if(this.withdrawalForm.bank_name.indexOf('杭州')!=-1){
                    this.bankCheckicon=16
                }
                else if(this.withdrawalForm.bank_name.indexOf('农村')!=-1){
                    this.bankCheckicon=17
                }

            }
            if(Data.data.phone){
                this.withdrawalForm.phone=Data.data.phone
            }
        }else{
          this.cnzzTrackEvent('账户提现','新增提现账户','新增账户');
        }
    },
    gotoView(type) {
      window.scroll(0, 0);
      if(type==1){
        let reg1 = /^[\u4e00-\u9fa5]{2,10}$/;
        if(!reg1.test(this.withdrawalForm.bank_card_holder)){
           this.flog1=false;
           this.errorText='请输入正确的户名';
           this.errorVisible=true;
        }else{
           this.flog1=true;
        }
      }

      if(type==2){
        let reg2 = /^([1-9]{1})(\d{15,18})$/;
        if(!reg2.test(this.withdrawalForm.bank_card_number)){
           this.flog2=false;
           this.errorText='请输入正确的银行卡号';
           this.errorVisible=true;
        }else{
           this.flog2=true;
        }
      }
      if(type==3){
        let reg1 = /^[\u4e00-\u9fa5]{2,20}$/;
        if(!reg1.test(this.withdrawalForm.bank_card_branch_name)){
           this.flog3=false;
           this.errorText='请输入正确的开户支行';
           this.errorVisible=true;
        }else{
           this.flog3=true;
        }
      }


    }
  },
   directives: {
        focus: {
        update: function (el, {value}) {
            if (value) {
            el.focus()
            }
        }
        }
    },
  mounted: function() {
    this.initData();
    this.$nextTick(() => {
      //vue里面全部加载好了再执行的函数  （类似于setTimeout）
      this.myAddressSlots[0].defaultIndex = 0;
      // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
      //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
    });
  }
};
</script>
<style lang="scss" scoped>
</style>
</style>
