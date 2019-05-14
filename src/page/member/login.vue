<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss'; // @include flexbox()
  .user-container {
    @include wh(10rem, 100%);
    .clear {
      width: 15px;
      height: 15px;
      margin: 0;
      position: absolute;
      right: 10px;
      @include bg('~jd/images/close.png');
    }
    /* 注册 */
    .registered-container {
      height: 100%;
      .cell-box {
        padding: 30px 30px;
        >p {
          padding: 15px 0;
          font-size: $title;
          color: #333;
          text-align: left;
          padding: 16px;
        }
        .phone-cell {
          position: relative;
          padding:0 7px;
          @include flexbox(start,
            center,
            row,
            wrap);
          @include placeholderColor($gray);
          width: 100%;
          border-bottom: 1px solid #e4e4e4;
          margin-bottom: 6px;
          .phone-cellimg{
           width: .7rem
          }
          input {
            width: 90%;
            border: none;
            outline: none;
            box-shadow: none;
            text-shadow: none;
            text-align: left;
            font-size: 15px;
            color: #999;
            line-height: normal;
            height: 34px;
          }
        }
        .code-all{
           @include flexbox(space-between,
            center,
            row,
            wrap);
            border-bottom: 1px solid #e4e4e4;
             margin-top: 8px;
            margin-bottom: 6px;
           .code-cell {
            width: 50%;
            background: #fff;
            position: relative;
            padding:0 7px;
           
            @include flexbox(start,
            center,
            row,
            wrap);
            @include placeholderColor($gray);
            .code-cellimg{
             width: .7rem;
             margin-top: 2px;
            
            }
            input {
              width: 80%;
              border: none;
              outline: none;
              box-shadow: none;
              text-shadow: none;
              text-align: left;
              font-size: 15px;
              color: #999;
              line-height: normal;
              height: 34px;
            }
          }
          .registered-getCode {
            
            color: #999;
            font-size: 15px;
            text-align: right;
            
            width: 44%;
    padding: 7px 10px 7px 0;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="user-container">
    <!-- 登陆 -->
    <mt-popup v-model="visiblePopup.login" :closeOnClickModal="true" :modal="false" position="bottom" class="modal-popup">
      <div class="registered-container">
        <div class="cell-box">
          <div class="phone-cell">
            <div class="phone-cellimg">
            <img src="~jd/images/login-phone.png" style="height:20px;" alt="">
            </div>
            <input v-focus v-validate="'required|mobile'" name="mobile" type="tel" v-model="registeredForm.phone" placeholder="请输入手机号">
            <i class="clear" v-show="registeredForm.phone.length>0" @click="registeredForm.phone=''" style="right: 10px;top:12px;"></i>
          </div>
          <div style="height:18px;">
          <span v-show="errors.has('mobile')" style="color: #ff2741;margin-left:6px;font-size: 13px;" >该手机号格式有误，请重新输入</span>
          </div>
          <div class="code-all">
             <div class="code-cell">
                <div class="code-cellimg">
                <img src="~jd/images/login-msg.png" style="height:13px;" alt="">
                </div>
                <input v-focus v-validate.initial="'required'" name="registeredCode" type="tel" v-model="registeredForm.code" placeholder="请输入验证码">
                <i class="clear" v-show="registeredForm.code.length>0" @click="registeredForm.code=''" style="right: 10px;top:10px;"></i>
            </div>
              <div :class="['registered-getCode',errors.has('mobile')?'disabled-btn':'']" @click="registeredSendPhoneMessage"
                    :disabled="errors.has('mobile')">{{registeredForm.resetSendPhoneMessage ? `${registeredForm.resetSendPhoneMessage}S后重新获取` : '获取验证码'}}</div>
              </div>
              <div style="height:18px;">
          <span v-show="errors.has('registeredCode')" style="color: #ff2741;margin-left:6px;font-size: 13px;" >请输入六位数验证码</span>
              </div>
          <div :class="['cell-btn',errors.has('mobile')?'disabled-btn':'']" @click="LoginBind">确定</div>
          </div>
          
      </div>
    </mt-popup>
    <!-- 登录 -->
  </div>
</template>
<script>

  import {
    Field,
    Button,
    Toast,
    Popup
  } from 'mint-ui';
  export default {
    data() {
      return {
        visiblePopup: {
          login: true,
          registered: false,
          registeredCode: false,
          forget: false,
          forgetCode: false,
          registeredFormId: false,
          forgetResetPassword: false
        },
        loginForm: {
          username: '',
          password: '',
          passwordFormType: 'password'
        },
        registeredForm: {
          phone: '',
          username: '',
          password: '',
          confirmpassword: '',
          passwordFormType: 'password',
          passwordConfirmFormType: 'password',
          resetSendPhoneMessage: null,
          code: ''
        },
        forgetForm: {
          resetSendPhoneMessage: null,
          userName: null,
          password: '',
          passwordFormType: 'password',
          confirmPasswordFormType: 'password',
          confirmPassword: '',
          phone: '',
          code: ''
        }
      }
    },
    components: {},
    methods: {
      closeOpen() {
        this.visiblePopup.login = false;
        setTimeout(() => {
          this.$router.go(-1)
        }, 200)
      },
      async setPassword() { //设置密码
        let {
          Code,
          Message
        } = await this.$store.dispatch('SetPassword', {
          phone: this.forgetForm.phone,
          challengecode: this.forgetForm.code,
          newpassword: this.forgetForm.confirmPassword
        })
        Toast({
          message: Code === 0 ? '修改成功' : Message,
          position: 'bottom'
        })
        this.visiblePopup.forget = false;
        this.visiblePopup.forgetCode = false;
        this.visiblePopup.forgetResetPassword = false;
      },
      async registered() { //注册账号
        let formData = {
          username: this.registeredForm.username,
          password: this.registeredForm.confirmpassword,
          phone: this.registeredForm.phone,
          challengecode: this.registeredForm.code,
        }
        this.$store.dispatch('Registered', formData).then(response => {
          Toast({
            message: '注册成功',
            position: 'bottom'
          })
          this.visiblePopup.registered = false;
          this.visiblePopup.registeredCode = false;
          this.visiblePopup.registeredFormId = false;
        }, err => {
          return Toast({
            message: err.message,
            position: 'bottom'
          })
        })
      },
      async registeredNext() { //注册账号发送短信
        this.$store.dispatch('GetUserInfo', {
          MemberToken: this.registeredForm.phone
        }).then(response => {
          if (response.Code === 0) return Toast({
            message: '该手机已被注册',
            position: 'bottom'
          })
        }, err => {
          this.visiblePopup.registeredCode = true
        })
      },
      async setPasswordNext() { //忘记密码
        let {
          Code,
          Message,
          Data,
        } = await this.$store.dispatch('GetUserInfo', {
          MemberToken: this.forgetForm.phone
        });
        if (Code !== 0) return Toast({
          message: Message,
          position: 'bottom'
        })
        this.forgetForm.userName = Data.username;
        this.visiblePopup.forgetCode = true
      },
      async registeredSendPhoneMessage() { //获取验证码
        await this.$store.dispatch('SendPhoneMessage', {
          phone: this.registeredForm.phone
        });
        this.registeredForm.resetSendPhoneMessage = 60;
        let times = setInterval(() => {
          if (this.registeredForm.resetSendPhoneMessage <= 0) {
            this.registeredForm.resetSendPhoneMessage = null;
            clearInterval(times);
          } else {
            this.registeredForm.resetSendPhoneMessage--;
          }
        }, 1000)
      },
      async forgetSendPhoneMessage() { //获取验证码
        await this.$store.dispatch('SendPhoneMessage', {
          phone: this.forgetForm.phone
        });
        this.forgetForm.resetSendPhoneMessage = 120;
        let times = setInterval(() => {
          if (this.forgetForm.resetSendPhoneMessage <= 0) {
            this.forgetForm.resetSendPhoneMessage = null;
            clearInterval(times);
          } else {
            this.forgetForm.resetSendPhoneMessage--;
          }
        }, 1000)
      },
      async LoginBind() { //登录
        let Data = await this.$store.dispatch('LoginBind', {
          phone: this.registeredForm.phone,
          code: this.registeredForm.code
        })
        if (Data.code !== 10000) return Toast({
          message: Data.msg
        })
        this.$router.go(-1);
      }
    },
    mounted: function () {}
  }

</script>
