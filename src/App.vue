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
    '$route': {
      handler(to, from) {
        setTimeout(() => {
          if (window._czc) {  
            let location = window.location; 
            let contentUrl = location.pathname + location.hash;  
            let refererUrl = '/';  
            window._czc.push(['_trackPageview', contentUrl, refererUrl])  
          }
        }, 300) 
      },
      immediate: true 
    }  
    
  },
    components: {},
    methods: {},
     mounted: function () {
    }
  
  }

</script>

<style lang="scss">
  @import './assets/common/css/theme.scss';
  @import 'normalize.css';
  @import 'mint-ui/lib/style.css';
</style>
