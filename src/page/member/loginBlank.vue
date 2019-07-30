<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss'; // @include flexbox()
  
</style>
<template>
  <div style="background:#fff;height:100%">
  </div>
</template>
<script>




  import {
    getSignature,
} from '@/service/getData';
import {
    setSessionStorage,
  } from '@/utils/mixin';

  export default {
    data() {
      return {
      }
    },
    components: {},
    
    methods: {
      // async loginData() { //更新数据
      //   let wxData = await getSignature({
      //       url: BASE64.encoder(location.href.split("#")[0])
      //   });
      //   setSessionStorage('wxData',JSON.stringify(wxData.data))
      //   } 
    },
    mounted: function () {
        // this.loginData()
    }
  }

</script>
