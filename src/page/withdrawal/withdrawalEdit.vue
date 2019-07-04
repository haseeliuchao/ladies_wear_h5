



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
      font-size: 14px;
      color: #666;
      width: 6.6rem;
      height: 49px;
      input {
        height: 49px;
        line-height: normal;
        width: 100%;
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
      <em>*</em>提现请填写银行预留信息
    </p>
    <!-- @click="errorVisible=true" -->
    <div class="withdrawal-list" >
      <div class="withdrawal-listleft">户名</div>
      <div class="withdrawal-listright">
        <input type="text" v-model="withdrawalForm.bank_card_holder" @blur="gotoView(1)" placeholder="请输入户名">
      </div>
    </div>
    <div class="withdrawal-list">
      <div class="withdrawal-listleft">账户</div>
      <div class="withdrawal-listright">
        <input type="number" v-model="withdrawalForm.bank_card_number" placeholder="请输入银行卡卡号">
      </div>
    </div>
    <div class="withdrawal-list">
      <div class="withdrawal-listleft">开户行</div>
      <div class="withdrawal-listright">
        <span>{{withdrawalForm.bank_name}}</span>
        <span class="right-menu"></span>
      </div>
    </div>
    <div class="withdrawal-list">
      <div class="withdrawal-listleft">开户支行</div>
      <div class="withdrawal-listright">
        <input type="text" v-model="withdrawalForm.bank_card_branch_name" placeholder="请输入开户支行">
      </div>
    </div>

    <div class="withdrawal-list" style="border-bottom:none;">
      <div class="withdrawal-listleft">开户省份</div>
      <div class="withdrawal-listright" @click="()=>addressVisible=true">
        <span>{{withdrawalForm.bank_card_province}} {{withdrawalForm.bank_card_city}}</span>
        <span class="right-menu"></span>
      </div>
    </div>

    <div class="withdrawal-list" style="margin-top:8px;border-bottom:none;">
      <div class="withdrawal-listleft">手机验证码</div>
      <div class="withdrawal-listright withdrawal-listright1">
        <input type="text" v-model="withdrawalForm.sms_code" class="msgcode" placeholder="请输入短信验证码">
        <span :class="[resetSendPhoneMessage?'disabled-btnspan':'']" @click= "registeredSendPhoneMessage"
                    :disabled="resetSendPhoneMessage">{{resetSendPhoneMessage ? `${resetSendPhoneMessage}S后重新获取` : '获取验证码'}}</span>
      </div>
    </div>
    <p class="withdrawal-tip" style="line-height: 20px;padding: 6px .3rem 0;">
      <em>*</em>提现需要1-3个工作日的人工审核，审核通过后，相应款
      项会进入你的提现账户。
    </p>
    <!-- <div class="fixed-btn">保存</div> -->
    <div
      class="save-address"
      :class="['cell-btn']"
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
    <p>请输入户名</p>
    </mt-popup>
  </div>
</template>
<script>
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
        bank_name: '招商银行',
        bank_card_branch_name: null,
        bank_card_city: null,
        sms_code: null,
        phone: null,
      },
      resetSendPhoneMessage:null,
      addressVisible: false,
      errorVisible: false,
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
    }
  },

  components: {
    // VDistpicker
    "mt-picker": Picker
  },

  computed: {},

  methods: {
      async registeredSendPhoneMessage() { //获取验证码
        let Data= await this.$store.dispatch('SendPhoneMessage', {
          phone: this.withdrawalForm.phone,
          open_id:getSessionStorage('open_id')
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
      };
      
        this.$store.dispatch("SaveBankCard", params).then(response => {
            if (response.code != 10000) {
            //   Toast({ duration: 1000, message: "保存失败" });
            } else {
            //   Toast({ duration: 1000, message: "保存成功" });
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
        if(Data.data.member_bank_bo){
          this.withdrawalForm=Data.data.member_bank_bo
        }
        if(Data.data.phone){
            this.withdrawalForm.phone=Data.data.phone
        }
        
    },
    gotoView(type) {
      window.scroll(0, 0);

      let reg1 = /^[\u4e00-\u9fa5]{2,4}$/;
        if(reg.test(a)){
            alert("true");
        }else{
            alert("false");
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
