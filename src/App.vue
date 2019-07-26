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
    watch: {  
    '$route' () {
        if (window._czc) {
          // window._czc.push(["_setAutoPageview", false]);
          let location = window.location;//路由变化
          let contentUrl = location.hash;//自定义当前url，可带上路由以此区分每个页面
          // console.log(contentUrl);
          let refererUrl = '/';
          window._czc.push(["_setAutoPageview", false]);
          window._czc.push(["_trackPageview", contentUrl, refererUrl])
 
        }
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
            // console.log(unicodestr)
            // /indexToC/10
            
            // /productToC/191070?distributor_id=13
            let distributorId=''
            if(unicodestr.indexOf('indexToC')!=-1){
              distributorId=unicodestr.substr(10)
            }
            if(unicodestr.indexOf('productToC')!=-1){
              distributorId=unicodestr.split('=')[1]
            }

            if(unicodestr.indexOf('productToC')!=-1||unicodestr.indexOf('indexToC')!=-1){
              let Datauser = await this.$store.dispatch('LoginUsreInit', {
                code:utils.getUrlKey('code'),
                distributor_id:distributorId
              })
              if(Datauser.code==10000){
                setSessionStorage('session_token',Datauser.data.session_token);
                setSessionStorage('access_token',Datauser.data.access_token);
                setSessionStorage('nickname',Datauser.data.nick);
                setSessionStorage('user_id',Datauser.data.user_id);
              }
            }else{
              let Data = await this.$store.dispatch('LoginInit', {
                code:utils.getUrlKey('code')
              })
              if(Data.code==10000){
                setSessionStorage('session_token',Data.data.session_token);
                setSessionStorage('access_token',Data.data.access_token);
                setSessionStorage('nickname',Data.data.nick);
                setSessionStorage('user_id',Data.data.user_id);
                setSessionStorage('open_id',Data.data.open_id);
              }
            }
            
            }

            
            }
        
     },
     mounted: function () {

     
      const script = document.createElement('script')  
      script.src = `http://s95.cnzz.com/z_stat.php?id=1277859167&web_id=1277859167`  
      script.language = 'JavaScript'  
      document.body.appendChild(script)  
      //  console.log('33')
      // this.loginData();
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
