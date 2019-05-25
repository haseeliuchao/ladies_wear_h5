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
  export default {
    name: 'app',
    data() {
      return {
       
        guideindex:null
      }
    },
    components: {},
    methods: {
      //   isWeiXin() {
      //   var ua = window.navigator.userAgent.toLowerCase();
      //   if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      //       return true;
      //   }
      //   else {
      //       return false;
      //   }
      // },
      async loginData() { //更新数据
       if(isWeiXin('state')){
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
                that.guideindex=getLocalStorage('guideindex');
                if(!that.guideindex){
                   setLocalStorage('guideindex',1);
                }else{
                   setLocalStorage('guideindex',2);
                }  
              }
              if(unicodestr.indexOf('@')!=-1){
                if(unicodestr.split("@")[1].indexOf('product')!=-1){
                  this.$router.push(unicodestr.split("@")[1].slice(5))
                }
              }
              

       }
        
      }
     },
     mounted: function () {
      this.loginData();
    }
  
  }

</script>

<style lang="scss">
  @import './assets/common/css/theme.scss';
  @import 'normalize.css';
  @import 'mint-ui/lib/style.css';
</style>
