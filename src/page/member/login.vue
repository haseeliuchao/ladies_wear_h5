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
        .cell-item {
        @include flexbox(flex-start,
        center,
        row,
        nowrap);
        border-bottom: 1px solid #eee;
        
        margin: $margin 0;
        margin-bottom: 6px;
        position: relative;
        .code-cellimg{
            width:.7rem;
        }
        .left {
          span {
            font-size: $title;
            color: #333;
          }
        }
        .right {
          width: 70%;
          margin-left: 10px;
          @include placeholderColor($gray);
          input {
            width: 100%;
            border: none;
            outline: none;
            box-shadow: none;
            text-shadow: none;
            text-align: left;
            font-size: $title;
            height: 34px;
            line-height: normal;
            color: #333;
          }
          .arrow-right {
            display: block;
            width: 16px;
            height: 20px;
            background: url('~jd/images/arrow-right.png') no-repeat;
            background-size: 100%;
          }
        }
      }


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
            
            color: #333;
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
        <p style="text-align:center">
        <img src="~jd/images/huiyanlogo.png" style="height:90px;margin-top:40px;">
        </p>
        <div class="cell-box">
          <div class="phone-cell">
            <div class="phone-cellimg" @click="focusphoneoneclick">
            <img src="~jd/images/login-phone.png" style="height:20px;" alt="">
            </div>
            <input @click="focusphoneoneclick" @blur="gotoView" v-focus="focusphoneoneState" v-validate="'required|mobile'" name="mobile" type="tel" v-model="registeredForm.phone" placeholder="请输入手机号">
            <i class="clear" v-show="registeredForm.phone.length>0" @click= "registeredForm.phone=''" style="right: 10px;top:12px;"></i>
          </div>
          <div style="height:18px;">
          <span v-show="errors.has('mobile')" style="color: #ff2741;margin-left:6px;font-size: 13px;" >请输入正确的手机号码</span>
          </div>
          
         
          <div class="code-all">
             <div class="code-cell">
                <div class="code-cellimg" @click="focuscodetwoclick">
                <img src="~jd/images/login-msg.png" style="height:13px;" alt="">
                </div>
                <input @click="focuscodetwoclick" @blur="gotoView" v-focus="focuscodetwoState" v-validate="'required|registeredCode'" name="registeredCode" type="num" v-model="registeredForm.code" placeholder="请输入验证码">
                <i class="clear" v-show="registeredForm.code.length>0" @click= "registeredForm.code=''" style="right: 10px;top:10px;"></i>
            </div>
              <div style="background:none!important" :class="['registered-getCode',errors.has('mobile')||registeredForm.phone.length==0||registeredForm.resetSendPhoneMessage?'disabled-btn':'']" @click= "registeredSendPhoneMessage"
                    :disabled="errors.has('mobile')||registeredForm.phone.length==0||registeredForm.resetSendPhoneMessage">{{registeredForm.resetSendPhoneMessage ? `${registeredForm.resetSendPhoneMessage}S后重新获取` : '获取验证码'}}</div>
              </div>
              <div style="height:18px;">
          <span v-show="errors.has('registeredCode')" style="color: #ff2741;margin-left:6px;font-size: 13px;" >请输入六位数验证码</span>
              </div>

               <div class="cell-item" >
           <div class="code-cellimg" @click="focuscodeoneclick">
                <img src="~jd/images/login-msg.png" style="height:13px;margin-left:6px;" alt="">
            </div>
            <div class="right" @click="focuscodeoneclick" >
              <input @blur="gotoView" v-focus="focuscodeoneState" v-validate="'required|password'" name="password" :type="registeredForm.passwordFormType" v-model="registeredForm.password" placeholder="请输入密码">
            </div>
            <i class="clear" v-show="registeredForm.password.length>0" @click="registeredForm.password=''" style="right: 40px;"></i>
            <i :class="['eye-icon', registeredForm.passwordFormType=='password'?'eye-close-icon':'']" style="position: absolute;right: 10px;"
              @click="registeredForm.passwordFormType=registeredForm.passwordFormType=='password'?'text':'password'"></i>
          </div>
           <div style="height:18px;">
          <span v-show="errors.has('password')" style="color: #ff2741;margin-left:6px;font-size: 13px;" >密码为6-20位，含字母和数字 如：pl9999</span>
          </div>


          <div :class="['cell-btn',errors.has('mobile')||errors.has('registeredCode')||errors.has('password')||registeredForm.phone.length==0||registeredForm.code.length==0||registeredForm.password.length==0?'disabled-btn':'']" @click= "LoginBind">确定</div>
          </div>
          
      </div>
    </mt-popup>
    <!-- 登录 -->
  </div>
</template>
<script>





import {
getLocalStorage,
    setLocalStorage,
    setSessionStorage,
    getSessionStorage,pushHistory
  } from '@/utils/mixin';
  import {
    Field,
    Button,
    Toast,
    Popup
  } from 'mint-ui';
  export default {
    data() {
      return {
        ranges : [
        '\ud83c[\udf00-\udfff]', 
        '\ud83d[\udc00-\ude4f]', 
        '\ud83d[\ude80-\udeff]'
               ],
          focusphoneoneState : false,
          focuscodeoneState : false,
          focuscodetwoState : false,
        visiblePopup: {
          login: true,
          registered: false,
          registeredCode: false,
          forget: false,
          forgetCode: false,
          registeredFormId: false,
          forgetResetPassword: false
        },
        registeredForm: {
          phone: '',
          code: '',
          password:'',
          passwordFormType: 'password',
          resetSendPhoneMessage: null,
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
      async registeredSendPhoneMessage() { //获取验证码
        let Data= await this.$store.dispatch('SendPhoneMessage', {
          phone: this.registeredForm.phone,
          open_id:getSessionStorage('open_id')
        });
        this.registeredForm.resetSendPhoneMessage = 60;
        if (Data.code !== 10000) return Toast({
          message: Data.msg
        })
        Toast({
            message: '发送成功',
            position: 'center'
          })
        let times = setInterval(() => {
          if (this.registeredForm.resetSendPhoneMessage <= 0) {
            this.registeredForm.resetSendPhoneMessage = null;
            clearInterval(times);
          } else {
            this.registeredForm.resetSendPhoneMessage--;
          }
        }, 1000)
      },
      async LoginBind() { //登录
        var nickName='';
        var regRule = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g; //校验是否包含表情符
        if(getLocalStorage('nickname').match(regRule)){
        nickName=getLocalStorage('nickname').replace(new RegExp(this.ranges.join('|'), 'g'), '')
       }else{
         nickName=getLocalStorage('nickname')
       }

        let Data = await this.$store.dispatch('LoginBind', {
          phone: this.registeredForm.phone,
          code: this.registeredForm.code,
          password:this.registeredForm.password,
          head_img_url:getSessionStorage('head_img_url'),
          nickname:nickName,
          open_id:getSessionStorage('open_id')
        })
        if (Data.code !== 10000) return Toast({
          message: Data.msg
        })
        setSessionStorage('session_token',Data.data.session_token);
        setSessionStorage('access_token',Data.data.access_token);
        this.$router.go(-1);
      },
      focusphoneoneclick () {
      this.focusphoneoneState = true
      },
      focuscodeoneclick () {
      this.focuscodeoneState = true
      },
      focuscodetwoclick () {
      this.focuscodetwoState = true
      },gotoView () {
      window.scroll(0,0)
      this.focusphoneoneState = false;
      this.focuscodeoneState = false;
      this.focuscodetwoState = false;
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
    mounted: function () {
      pushHistory()
       // 监听历史记录点, 添加返回事件监听
        window.onpopstate = (state) => {
          console.log(state)
        this.$router.push('/index')  //输入要返回的上一级路由地址
        }
    }
  }

</script>
