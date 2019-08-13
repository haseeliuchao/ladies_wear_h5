<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
.vipinvite{
        border-top: .213333rem solid #f2f2f2;
        background: #fff;
        min-height: 100%;
        .vipinvite-title{
            line-height: 1.28rem;
            margin-top: .133333rem;
            color: #333;
            font-size: .48rem;
            padding-left: .32rem;
        }
        .vipinvite-input{
            padding: 0 .32rem;
            input{
               height: 1.04rem;
               line-height: 1.04rem;
               border: 1px solid #cbcbcb;
               border-radius: 6px;
               width: 100%;;
               padding:0 .266667rem;
               color: #333;
               font-size: .4rem;
               background: #fcfcfc;
            }
        }
        .error-text{
            height: .64rem;
            padding: 0 .32rem;
            p{
                color: #ff5527;
                font-size: .373333rem;
                line-height: .64rem;
            }
        }
        .vipinvite-btn{
            width: 9.36rem;
            margin-left: .32rem;
            height: 1.2rem;
            line-height: 1.2rem;
            text-align: center;
            font-size: .48rem;
            color: #fff;
            background: $red;
            border-radius: 6px;
            margin-top: .6rem;
           
        }
        
    }
</style>

<template>
    <div class="vipinvite">
                <p class="vipinvite-title">兑换码</p>
                <div class="vipinvite-input"  @click= "errorStatus=false; $refs.vipinviteInput.focus()"><input type="text" v-model="vipinvitevalue" maxlength="6" placeholder="输入兑换码，不区分大小写" ref="vipinviteInput"></div>
                <div class="error-text">
                    <p v-if="errorStatus">请输入兑换码，不区分大小写</p>
                </div>
                <div class="vipinvite-btn" @click="savevipinvite()">立即兑换</div>
    </div>
</template>

<script>
import BackRouter from 'common/backRouter';
  import {
    Toast,Popup
  } from 'mint-ui'
  import {
    vipinviteData
  } from '@/service/getData';
  export default {
    data() {
      return {
         vipinvitevalue:null,
         errorStatus:false
      };
    },

    watch: {},

    components: {
      BackRouter
    },

    computed: {},

    methods: {
            async savevipinvite(){
                if(!this.vipinvitevalue||this.vipinvitevalue.trim().length<1){
                    return this.errorStatus=true;
                }
                let res = await vipinviteData({
                    code:this.vipinvitevalue
                })
                if(res.code!=10000){
                    return Toast({duration: 1000,
                            message: res.msg
                    }) 
                }else{
                    this.$router.push({path:'/VipPaystatus?pay_status=1'})
                }
             

            }
    },
    filters:{},
    mounted: function () {


    }
  }

</script>
