<!-- myhome -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .right-menu {
        width: 10px;
        height: 12px;
        background-image: url('~jd/images/whilte_more.png');
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block
      }
  .right-menublack {
        width: 10px;
        height: 12px;
        background-image: url('~jd/images/black_more.png');
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block;
        margin-left: 10px;
      }
  .content {
    padding-bottom: 1.35rem;
    min-height: 100vh;
    background: #fff;
    .vip-pageimg{
        width: 9.36rem;
        margin: .533333rem .32rem;
        height: 11rem;
    }
  // 头部样式
    .my-header {
        height: 3rem;
        padding: .666667rem 0 .666667rem .33rem;
        background: -webkit-linear-gradient(left, #ff5527, #ff2741);
        background: linear-gradient( #ff5527, #ff2741);
        box-shadow: 0 2px 5px rgba(255, 98, 98, .4);
        position: relative;
        &:after {
        content: '';
        width: 100%;
        left: 0;
        top: 2.28rem;
        height: 1.333333rem;
        position: absolute;
        background: -webkit-linear-gradient(left, #ff2741, #ff2741);
        background: linear-gradient( #ff2741, #ff2741);
        -webkit-border-radius: 50% / 50%;
        -moz-border-radius: 50% / 50%;
        border-radius: 50% / 50%;
        }
        @include flexbox(flex-start, space-between, column, wrap);
        .userinfo {
        >div{
            @include flexbox(flex-start,
            flex-start,
            row,
            nowrap);
        }
        .avatar {
            img {
            border: 1px solid hsla(0, 0%, 100%, .4);
            border-radius: 60px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
            width: 1.6rem;
            height:1.6rem;
            z-index: 1;
            position: relative;
            }
        }
        .user{
            @include flexbox(center,
            flex-start,
            column,
            wrap);
            height:64px;
            margin-left:.4rem;
            .viptip{
                line-height: .64rem;
            img{
                width: .48rem;margin-right: .213333rem;
            }
            color: #ffe610;
            }

            .username,.userphone {
            color:#fff;
            font-size:.4rem;
            }
            .uservip{
            margin-left: .266667rem;
            padding: .04rem .2rem;
            height: .426667rem;
            text-align: center;
            line-height: .426667rem;
            font-size: .32rem;
            background: #ff7200;
            color: #fff;
            border-radius: 4px;
            }
        }
        }
    }
    .header-tip{
        position: relative;
        z-index: 2;
        text-align: center;
        color: #fff;
        top: -0.213333rem;
        font-size: .4rem;
    }
    .vip-btn{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1.3rem;
        text-align: center;
        line-height: 1.3rem;
        font-size: .48rem;
        color: #fff;
        background: -webkit-gradient(linear, 0 top, 0 bottom, from(#ff2741), to(#ff5527));
        box-shadow: 0 2px 4px rgba(255, 85, 39, 0.5);
        -webkit-box-shadow: 0 2px 4px rgba(255, 85, 39, 0.5);
    }

  }

  
  
  

  // 提示框样式
  .mint-toast{
    padding:15px .4rem!important;
    white-space:nowrap;
    opacity:.8
  }
</style>

<template>
  <div>
    <div class="content">
        <div class="my-header">
          <div class="userinfo">
            <div>
              <div class="avatar">
                <img :src="!memberInfo? 'https://static.hdslb.com/images/akari.jpg' : memberInfo.head_img" alt="">
              </div>
              <div class="user" @click= "()=>$router.push({path: '/vipGuide'})">
                <p style="line-height: .64rem;">
                  <span class="username" v-if="memberInfo">{{memberInfo.nick}}</span>
                  <span class="uservip">普通用户</span>
                </p>
              </div>
              
            </div>
          </div>
          
        </div>
        <p class="header-tip">一件也是批发价，年省5000元！</p>
        <img class="vip-pageimg" src="~jd/images/vip-page.png" >
        <p class="vip-btn" @click= "()=>$router.push({path: '/vipPay'})">续费会员¥399</p>
    </div>
     <BackRouter :fixePosition='2'/>
  </div>
  
</template>

<script>

  import BackRouter from 'common/backRouter';
  import {
    Toast
  } from 'mint-ui';
  import {
    setSessionStorage,
    getSessionStorage,
    removeSessionStorage
  } from '@/utils/mixin';
  import {
    mapGetters,
    mapMutations
  } from 'vuex';
  export default {
    data() {
      return {
        memberInfo:null
      };
    },

    watch: {},

    components: {
      BackRouter
    },

    computed: {
      ...mapGetters([
        'userInfo',
      ])
    },

    methods: {
      ...mapMutations([
        'SET_USERINFO_DATA'
      ]),
     
      async initData() {
          if(!this.userInfo){
              let res = await this.$store.dispatch('GetUserInfo');
                if(res.code==10000){
                    await this.SET_USERINFO_DATA(res.data);
                    this.memberInfo = res.data.memberInfo;
                }else{
                    this.memberInfo = null;
                }
          }else{
              this.memberInfo=this.userInfo.memberInfo
          }
          
      }
    },
    mounted: function () {
      this.initData();
    }
  }
</script>

<style lang='scss' scoped>
</style>