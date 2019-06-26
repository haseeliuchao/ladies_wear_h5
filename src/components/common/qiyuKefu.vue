<!-- footer -->
<style lang='scss' scoped>
.contact-sever{
      width: 100%;
      text-align: center;
      padding: 16px 0;
      background: #fff;
      margin-bottom: 10px;
      .contact-severtop{
          line-height: 24px;
          
          color: #333;
          height: 24px;
          img{
              height: 24px;
          }
          span{
                  vertical-align: top;
                  font-size: 15px;
                  margin-left: 6px;
          }
      }
      .contact-severbot{
          line-height: 26px;
          color: #666;
          font-size: 14px;
      }
  }

</style>
<template>
  <div class="contact-sever">
        <p class="contact-severtop" @click= "openSdk"><img src="~jd/images/help_sever.png" alt=""><span>联系客服</span></p>
        <p class="contact-severbot">服务时间9:00-18:00</p>
  </div>
</template>
<script>
  import {

    getSessionStorage,
 
  } from '@/utils/mixin';
  export default {
    data() {
      return {

      };
    },

    watch: {},

    components: {},

    computed: {},
    methods: {
        openSdk(){
          // window.openSdk();
          window.openSdk({user_id: getSessionStorage.user_id,nickname: getSessionStorage.nickname}); 
        }
    },

    mounted: function () {}
  }

</script>
