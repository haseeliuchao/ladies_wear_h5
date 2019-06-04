<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss'; // @include flexbox()
  
</style>
<template>
  <div style="background:#fff;height:100%">
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
      }
    },
    components: {},
    watch:{
        $route(to,from){
            console.log(to.path);
            if(to.path=='/loginBlank'){
                this.$router.push('/index')
            }
        }
},
    methods: {
      
     
    },
    
    mounted: function () {

    }
  }

</script>
