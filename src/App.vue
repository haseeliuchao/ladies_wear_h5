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
    setLocalStorage
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
        isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        }
        else {
            return false;
        }
      },
      async loginData() { //更新数据
          let that=this;
       if(this.isWeiXin()){
            let Data = await this.$store.dispatch('Login', {
                code:utils.getUrlKey('code'),
                app_key:utils.getUrlKey('state').slice(8)
              })
             
              if(Data.code==10000){
                setLocalStorage('session_token',Data.data.session_token);
                setLocalStorage('access_token',Data.data.access_token);
                that.guideindex=getLocalStorage('guideindex');
                if(!that.guideindex){
                   setLocalStorage('guideindex',1);
                }else{
                   setLocalStorage('guideindex',2);
                }  
              }
       }
     }
     }
  }

</script>

<style lang="scss">
  @import './assets/common/css/theme.scss';
  @import 'normalize.css';
  @import 'mint-ui/lib/style.css';
</style>
