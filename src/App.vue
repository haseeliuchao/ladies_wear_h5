<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import utils from '@/utils/urlfun';
  import {
  Indicator,
  Toast
} from 'mint-ui';
  import {
    mapGetters,
    mapMutations
  } from 'vuex';
import {
 getLocalStorage,
    setLocalStorage,
    setSessionStorage,
    isWeiXin
  } from '@/utils/mixin';
  import {
    getSignature,
} from '@/service/getData';
  export default {
    name: 'app',
    data() {
      return {
       
        guideindex:null
      }
    },
    components: {},
    methods: {
      async loginData() { //更新数据
      // document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
      //           WeixinJSBridge.call('showToolbar');        // 显示底部状态栏
      // });
       if(isWeiXin('code')){
          let that=this;
          var retstr='';
          var unicode=BASE64.decoder(utils.getUrlKey('state'));
          var unicodestr = '';
          var app_keystr=''
          for(var i = 0 , len =  unicode.length ; i < len ;++i){
              unicodestr += String.fromCharCode(unicode[i]);
          }
          
            let Data = await this.$store.dispatch('LoginInit', {
                code:utils.getUrlKey('code')
              })
              if(Data.code==10000){
                setSessionStorage('session_token',Data.data.session_token);
                setSessionStorage('access_token',Data.data.access_token);
                setSessionStorage('cartnum',Data.data.add_cart_count);
                that.guideindex=getLocalStorage('guideindex');
                if(!that.guideindex){
                   setLocalStorage('guideindex',1);
                }else{
                   setLocalStorage('guideindex',2);
                }  
              }
       }
        } 
     },
     mounted: function () {
      this.loginData();
      // window.addEventListener('scroll',function(){
      //          document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
      //           WeixinJSBridge.call('showToolbar');        // 显示底部状态栏
      // });
      //         },true)
     
    }
  
  }

</script>

<style lang="scss">
  @import './assets/common/css/theme.scss';
  @import 'normalize.css';
  @import 'mint-ui/lib/style.css';
</style>
