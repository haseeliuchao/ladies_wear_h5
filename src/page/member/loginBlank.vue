<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss'; // @include flexbox()
  
</style>
<template>
  <div id="cnzz_box" style="background:#fff;height:100%">
  </div>
</template>
<script>





import '@/utils/cnzz';
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
        $("#cnzz_box").append($("#cnzz_stat_icon_1277859167"));
        var _czc=window._czc||[];
        _czc.push(["_setAutoPageview", false]);
    }
  }

</script>
