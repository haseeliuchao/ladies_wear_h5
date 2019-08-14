<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .invite-modeltitle{
      position: relative;
          height: .88rem;
          width: 100%;
          text-align: center;
          line-height: .88rem;
          background: url('~jd/images/invite-modeltitlebg.png') no-repeat center;
          background-size: contain;
          font-size: .613333rem;
          color: #fff;
          top:-0.426667rem;
          left: 0; 
          margin-bottom: .2rem;
         
      }

      .order-nomore-tip {
        margin-top: 6%;
        @include flexbox(space-between,
        center,
        column,
        wrap);
        i {
          display: block;
          width: 60px;
          height: 60px;
          background: url('~jd/images/order.png') no-repeat;
          background-size: 100%;
        }
        span {
          font-size: 17px;
          font-weight: normal;
          padding: 30px 0;
          color: $gray;
        }
      }
      
  .invite-special{
      width: 10rem;
      background: #fff;
      padding-bottom: 2.666667rem;
      .banner{
          width: 100%;
          height: 6.56rem;
      }
      
      .invite-model{
          width: 100%;
          background: #fefcf3;
          margin-top: 1.093333rem;
          padding: 0 .32rem;
          text-align: center;
          .invite-process{
          width: 8.96rem;
          height: 2.16rem;
          margin: .8rem 0 .666667rem;
      }
          .invite-reward{
            width: 100%;
            border-radius: 6px;
            padding: .346667rem .186667rem;
            background: #fae4c6;
            margin-bottom: .4rem;
            p{
                line-height: .533333rem;
                color: #333;
                font-size: .4rem;
                text-align: justify;
            }
          }
          .invite-rule{
            width: 100%;
            margin-bottom: .4rem;
            .invite-rule-one{
                @include flexbox(flex-start,
                    flex-start,
                    row,
                    nowrap);
                color: #403f3d;
                font-size: .4rem;
                line-height: .533333rem;
                text-align: left;
                .invite-rule-onesort{
                    width: .533333rem;
                    height: .533333rem;
                    border-radius: 50%;
                    background: #f0c33a;
                    color: #fff;
                    margin-right: .266667rem;
                    text-align: center;
                }
            }
            .invite-rule-two{
                @include flexbox(flex-start,
                    center,
                    row,
                    nowrap);
                color: #403f3d;
                font-size: .373333rem;
                line-height: .64rem;
                .invite-rule-twosort{
                    width: .16rem;
                    height: .16rem;
                    border-radius: 50%;
                    background: #d8222e;
                    margin-right: .133333rem;
                    margin-left: .826667rem;
                }
            }
          }
          .invite-myrecord{
              width: 8.533333rem;
              margin-left: .413333rem;
              
              .invite-myrecord-listbox{
              max-height: 3.56rem;
              overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
              }
              p{
                   @include flexbox(space-around,
                    center,
                    row,
                    nowrap);
                    height: .72rem;
                    color: #403f3d;
                    border-bottom:.04rem solid #fff;
                    
                    span{
                        @include flexbox(center,
                            center,
                            row,
                            nowrap,1);
                    }
              }
              .invite-myrecordtitle{
                  background: #f1c43a;
                  font-size: .373333rem;
              }
              .invite-myrecord-list{
                  background: #fbe4e0;
                  font-size: .346667rem;
                  
              }
          }
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
</style>

<template>
    
    <div class="invite-special">
          <img class="banner" src="~jd/images/invite-banner.png">
          <div class="invite-model">
            <p class="invite-modeltitle">奖励</p>
            <div class="invite-reward">
                <p>奖励一：好友通过邀请链接注册惠眼识货后，6个月内自己购或开店所产生的订单，返商品金额1%</p>
            </div>
            <div class="invite-reward">
                <p>奖励二：好友通过邀请链接注册惠眼识货后，6个月内好友开通惠眼识货超级会员，奖100元现金</p>
            </div>
            <p class="invite-modeltitle" style="top: .266667rem">邀请流程</p>
            <img class="invite-process" src="~jd/images/invite-process.png">
          </div>
          <div class="invite-model" style="padding-bottom: .666667rem;">
            <p class="invite-modeltitle">我的战绩</p>
            <div class="invite-myrecord" >
                <p class="invite-myrecordtitle">
                    <span>好友微信</span>
                    <span>好友状态</span>
                    <span>操作</span>
                </p>
                
                <div class="invite-myrecord-listbox">
                    <load-more style="width:100%;" v-if="$route.name=='inviteSpecial'"  @loadMore="infiniteCallback" :commad="commad" :param="params" 
                 :loadMoreIconVisible="false" :nolistTip="nolistTip" ref="inviteSpecialLoadmore">
                <div v-if="inviteSpecialList!=''">
                <p class="invite-myrecord-list" v-for="(item,index) in inviteSpecialList" :key="index"><span>{{item.nick}}</span>
                <span v-if="item.is_v_i_p==0&&item.phone">普通用户</span>
                <span v-if="item.is_v_i_p==1&&item.phone">超级会员</span>
                <span v-if="!item.phone">暂未注册</span>
                <span>联系ta</span></p>
                </div>
                <div class="order-nomore-tip" v-if="inviteSpecialList==''">
                <i></i>
                </div>

                </load-more>
                </div>
                
            </div>
          </div>
          <div class="invite-model" style="padding-bottom: .4rem">
            <p class="invite-modeltitle">活动规则</p>
            <div class="invite-rule">
                <p class="invite-rule-one" style="margin-bottom: .4rem"><span class="invite-rule-onesort">1</span><span>活动时间：2019-08-01至2020-07-30</span></p>
                <p class="invite-rule-one" style="margin-bottom: .1rem"><span class="invite-rule-onesort">2</span><span>奖励发放：</span></p>
                    <p class="invite-rule-two"><span class="invite-rule-twosort"></span><span>邀请好友，开通会员成功，24小时内发100元奖励</span></p>
                    <p class="invite-rule-two"><span class="invite-rule-twosort"></span><span>订单返现，订单确认收货7天后发放返现奖励</span></p>
                    <p class="invite-rule-two"><span class="invite-rule-twosort"></span><span>所有奖励发放至用户可提现账户中</span></p>
                <p class="invite-rule-one" style="margin-bottom: .4rem;margin-top: .2rem"><span class="invite-rule-onesort">3</span><span>本次活动邀请好友数不限，多邀多得，上不封顶</span></p>
                <p class="invite-rule-one"><span class="invite-rule-onesort">4</span><span style="width:90%;">注意：若发现作弊，刷奖等行为，以及任何未满
足活动规则而获得的返现均视为无效</span></p>
            </div>
          </div>
          <p class="vip-btn" @click= "()=>$router.push({path: '/vipPay'})">分享好友赚钱</p>
    <BackRouter :fixePosition='2'/>
    </div>

 
</template>

<script>
import BackRouter from 'common/backRouter';
  import {
    Toast,Popup
  } from 'mint-ui'
  import LoadMore from 'common/loadMore';
    import {inviteSpecialData} from '@/service/getData';
  export default {
    data() {
      return {
        inviteSpecialList:[],
         commad: inviteSpecialData,
        params: {
          page_size: 10,
          current_page: 1,
        },
        nolistTip:'暂无更多战绩'
      };
    },

    watch: {},

    components: {
      BackRouter,
      LoadMore
    },

    computed: {},

    methods: {
       async onRefreshCallback() { //下拉刷新
        this.params.page_size = 10;
        this.params.current_page = 1;
        this.inviteSpecialList = [];
        this.$refs.inviteSpecialLoadmore.onTopLoaded(this.$refs.inviteSpecialLoadmore.uuid);
      },
       async infiniteCallback(response) { //加载更多订单
      if (response.data.data){
        if (response.data.data.length > 0) {
          response.data.data.map(i => {
            this.inviteSpecialList.push(i)
            console.log(this.inviteSpecialList)

          })
        }
      }
      },
    },
    filters:{},
    mounted: function () {
     this.onRefreshCallback();
    }
  }

</script>
<style>
.loadmore-content{
        min-height: 40vh!important;
      }
</style>

