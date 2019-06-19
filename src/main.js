// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise').polyfill()       
import Vue from 'vue'

import App from './App'
import router from './router'
import 'babel-polyfill'
// import 'promise-polyfill/src/polyfill'
import '@/plugins/flexible'
import MintUI from 'mint-ui'
import store from '@/store'
import FastClick from 'fastclick'
import '@/utils/directives'
import '@/utils/filters'
// import '@/utils/hash'
import utils from '@/utils/urlfun'
import wxShare from '@/utils/wxShare'

import zh_CN from 'vee-validate/dist/locale/zh_CN';
import {
  getShopInfo,
} from '@/service/getData';
import {
  getLocalStorage,
     setLocalStorage,
     setSessionStorage,
     isWeiXin
   } from '@/utils/mixin';
import VeeValidate from 'vee-validate';
// VeeValidate.addLocale(zh_CN);
VeeValidate.Validator.localize('zh_CN');
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
// Vue.prototype.$utils = utils
Vue.use(MintUI)
const config = {
  errorBagName: 'errors', 
  fieldsBagName: 'fields',
  delay: 100,  
  locale: 'zh_CN', 
  strict: true, 
  enableAutoClasses: true,
  // events: 'blur', 
  inject: true
 };

 // 自定义规则

 VeeValidate.Validator.extend('mobile', {
    messages: {
      zh_CN:field => field + '必须是11位手机号码',
    },
    validate: value => {
      return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
  });

 VeeValidate.Validator.extend('mobileuser', {
    messages: {
      zh_CN:field => field + '必须是11位手机号码',
    },
    validate: value => {
      return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
  });

 VeeValidate.Validator.extend('password', {
    messages: {
      zh_CN:field => field + '密码为6-20位，含字母和数字 如：pl9999',
    },
    validate: value => {
      return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value)
    }
  });

  VeeValidate.Validator.extend('loginCode', {
      messages: {
        zh_CN:field => field + '必须是6位验证码',
      },
      validate: value => {
        return value.length ==6 && /^\d{6}$/.test(value)
      }
   });
  VeeValidate.Validator.extend('registeredCode', {
      messages: {
        zh_CN:field => field + '必须是6位验证码',
      },
      validate: value => {
        return value.length ==6 && /^\d{6}$/.test(value)
      }
   });

 Vue.use(VeeValidate, config); 



var routerindex=0
router.beforeEach((to,from,next)=>{
  
  routerindex++;
  
  
  var shareImgurl='';
  if(to.meta.imgUrl==undefined){
    shareImgurl='http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'
  }else{
    shareImgurl=to.meta.imgUrl
  }
  wxShare({ title: to.meta.title, desc: to.meta.desc, link: to.meta.link, imgUrl: shareImgurl})
    var statecur='';
    var unicodestr = '';
    if(utils.getUrlKey('state')==undefined||utils.getUrlKey('state')=='#/'){
      statecur=1
    }else{
      statecur=utils.getUrlKey('state')
      var unicode=BASE64.decoder(statecur);
          unicodestr = '';
          for(var i = 0 , len =  unicode.length ; i < len ;++i){
              unicodestr += String.fromCharCode(unicode[i]);
          }
    }

    const getshop = async () => { 
      let ShopInfo = await getShopInfo({
        distributor_id: unicodestr.split("=")[1]
    });
      if(ShopInfo.code==10000){
        setSessionStorage('shopInfodata',JSON.stringify(ShopInfo.data))
        to.meta.Title=ShopInfo.data.title;
      }
    }
    if(routerindex==1&&isWeiXin('code')&&unicodestr.indexOf('distributor_id')!=-1){
      getshop()
    }
    if (to.meta.Title) {
      document.title = to.meta.Title
    }
    if((to.path=='/loginBlank'&&routerindex>1)||(to.path=='/loginBlank'&&statecur==1)){
        next({path: '/index'});
    }else{
      if(statecur!=1){
        if (to.path === unicodestr||routerindex>1){
          next()
        }else{
          next({path:unicodestr});
        }
      }else{
      next();
      }
    }
    
})


Vue.config.productionTip = false
/* fundebug */
function formatComponentName(vm)
{
  if (vm.$root === vm) return 'root';

  var name = vm._isVue ? (vm.$options && vm.$options.name) || (vm.$options && vm.$options._componentTag) : vm.name;
  return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options && vm.$options.__file ? ' at ' + (vm.$options && vm.$options.__file) : '');

}

Vue.config.errorHandler = function(err, vm, info)
{
  var componentName = formatComponentName(vm);
  var propsData = vm.$options && vm.$options.propsData;

  fundebug.notifyError(err,
  {
      metaData:
      {
          componentName: componentName,
          propsData: propsData,
          info: info
      }
   });
};


/* eslint-disable no-new */
Vue.prototype.errorEvent = e => { e.target.src = './assets/images/logo.png' }
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
