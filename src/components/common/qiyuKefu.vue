<!-- footer -->
<style lang='scss' scoped>
@import '~assets/common/css/mixin.scss';
.contact-sever{
      width: 100%;
      text-align: center;
      padding: 12px 0;
      background: #fff;
      .contact-severtop{
          line-height: .64rem;
          
          color: #333;
          height: .64rem;
          img{
              height: .64rem;
          }
          span{
                  vertical-align: top;
                  font-size: .4rem;
                  margin-left: 6px;
          }
      }
      .contact-severbot{
          line-height: .693333rem;
          color: #666;
          font-size: .373333rem;
      }
      
  }
  .contact-severb{
   @include flexbox(space-between,center,row,nowrap);
   background: #fff;
   padding: 19px 0;
   .contact-severb-left{
     width: 50%;
     
     p{
       text-align: center;
       font-size: .4rem;
       color: #333;
       line-height: .586667rem;
     }
     img{
       height: .64rem;
     }

   }
   a{
     width: 50%;
     .contact-severb-right{
        p{
       text-align: center;
       font-size: .4rem;
       color: #333;
       line-height: .586667rem;
     }
     img{
       height: .64rem
     }
     }
   }
  }
  .contact-sever-tip{
        font-size: 0.346rem;
        line-height: 1.07rem;
        color: #999;
        padding: 0 .3rem;
        em{
          color: $red;
        }
      }
  
</style>
<template>
   <div style="padding-top:8px;">
      <div class="contact-sever" v-if="toBorC==2">
            <p class="contact-severtop" @click= "openSdk"><img src="~jd/images/help_sever.png" alt=""><span>联系客服</span></p>
      </div>
       
      <div class="contact-severb" v-if="toBorC==1">
            <div class="contact-severb-left" @click= "openSdk" style=" border-right: 1px solid #e4e4e4">
              <p><img src="~jd/images/help_sever.png" alt=""></p>
              <p>联系客服</p>
            </div>
            <a href="tel:18072719364">
            <div class="contact-severb-right">
              <p><img src="~jd/images/help_phone.png" alt=""></p>
              <p>18072719364</p>
            </div>
            </a>
      </div>
      <p class="contact-sever-tip"><em>* </em>温馨提示：客服工作时间 9:00-18:00。</p>
  </div>
</template>
<script>
  import {getSessionStorage} from '@/utils/mixin';
  export default {
    props:{
        toBorC:{
          type:Number,
          default: 2
        }
    },
    data() {
      return {

      };
    },

    watch: {},

    components: {},
    computed: {},
    methods: {
        openSdk(){
          window.openSdk({user_id: getSessionStorage('user_id'),nickname: getSessionStorage('nickname')}); 
        }
    },

    mounted: function () {}
  }

</script>
