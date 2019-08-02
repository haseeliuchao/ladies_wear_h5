<!-- sttings -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .default-question{
      @include flexbox(space-between,center,row,nowrap);
      background: #fff;
      padding: 10px 0;
      margin-bottom: 8px;
      .default-questionleft{
          width: 32%;
          p{
              text-align: center;
                font-size: 0.4rem;
                color: #333;
              img{
                  height: 28px;
              }
          }
      }
      .default-questionright{
          width: 68%;
          ul{
              @include flexbox(space-between,center,row,wrap);
              padding: 0 0.9rem 0 1.2rem;
              background: url('~jd/images/default-questionleftbg.png') no-repeat left center ;
              background-size: 4%;
              li{
                 width: 2rem;
                 font-size: 0.37rem;
                 text-align: center;
                 height: 0.56rem;
                 line-height: 0.56rem;
                 color: #666;
                 border: 1px solid #999;
                 margin: 5px 0;
                 border-radius: 3px;
              }
          }
      }
  }
  
  .default-qr{
      padding: 0.6rem 0.933rem;
      background: #fff;
      @include flexbox(space-between,center,row,nowrap);
      .default-qrleft{
          p{
              line-height: .56rem
          }
          .default-qrleft-top{
             font-size: .533333rem;
             color: #333;
          }
          .default-qrleft-mid{
              font-size: .346667rem;
              color: #666;
          }
          .default-qrleft-bot{
              font-size: .346667rem;
              color: #666;
          }
          
      }
      .default-qrright{
          img{
              height: 2.13rem;
          }
      }
  }
   

</style>

<template>
   <div>
     <QiyuKefu :toBorC='1'/>
     <div class="default-question">
         <div class="default-questionleft">
             <p style="margin-bottom: 10px;"><img src="~jd/images/default-questionicon.png" alt=""></p>
             <p>常见问题</p>
         </div>
         <div class="default-questionright" @click= "()=>$router.push({path: '/helpcenter'})">
              <ul>
                  <li>购物指南</li>
                  <li>订单指南</li>
                  <li>支付问题</li>
                  <li>物流信息</li>
                  <li>售后问题</li>
                  <li>开店问题</li>
              </ul>
         </div>
     </div>

     <div class="default-qr">
         <div class="default-qrleft">
             <p class="default-qrleft-top">微信私人助理</p>
             <p class="default-qrleft-mid">长按右侧二维码识别后添加</p>
             <p class="default-qrleft-bot">或搜索(ID：huiyanshihuo0001)</p>
         </div>
         <div class="default-qrright">
             <img src="https://img.chaochujue.cn/ICON/2019/6/3/qr1563344451761.png" alt="" >
         </div>
     </div>
     <BackRouter/>
   </div>
</template>

<script>
import BackRouter from 'common/backRouter';
import QiyuKefu from 'common/qiyuKefu';

  export default {
    data() {
      return {
        userInfo: null
      };
    },

    watch: {},

    components: {
        QiyuKefu,
        BackRouter
    },

    computed: {},

    methods: {
     
    },

    mounted: function () {
    }
  }

</script>
<style lang='scss' scoped>


</style>
