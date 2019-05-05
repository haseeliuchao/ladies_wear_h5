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
import utils from '@/utils/urlfun'

import zh_CN from 'vee-validate/dist/locale/zh_CN';
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

 Vue.use(VeeValidate, config); //一般插件都要use一下

// Vue.use(VeeValidate);
router.beforeEach((to,from,next)=>{
    next();
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
