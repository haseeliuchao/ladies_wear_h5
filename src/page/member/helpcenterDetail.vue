<!-- sttings -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .helpDetail{
      min-height: 100%;
      background: #fff;
      width: 10rem;
      .helpDetailModel{
          padding: 0 12px;
          em{
              font-size: 20px;
              color: #999;
              font-weight: bold;
              font-style: italic;
          }
          .helpDetailModelQ{
              font-size: 16px;
              color: #333;
              line-height: 46px;
              border-bottom: 1px solid #e4e4e4;
          }
          .helpDetailModelA{
              margin-top: 8px;
              line-height: 24px;
              color: #333;
              font-size: 15px;
          }
      }
  }
   

</style>

<template>
  <div class="helpDetail">
         <div class="helpDetailModel" v-if="$route.query.helpId==1">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                  7天无理由退货
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                   对您在惠眼识货购买的所有商品，如商品能够保持出售时原装且吊牌、配件、赠品（如有）齐全，且不影响二次销售的，则自商品签收之日起，可享受“7天无理由退货”政策。
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==2">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                  发什么快递
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                   不同品牌商发货快递不一样，具体可查看商品详情页说明或咨询人工客服。
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==3">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                  商品选码
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                   您好，关于商品的尺寸规格，您可以通过查看商品标签、选项以及详情展示介绍，商品详情页中会有具体说明，请结合您的尺码信息，参考商品尺码表匹配挑选。
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==4">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                  如何查询订单
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                   进入惠眼识货，点击【我的】-【订单管理-全部订单】即可查到您提交的订单。
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==5">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                  修改订单信息
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                  订单提交成功后，暂不支持修改。如您需要修改订单信息可联系在线客服。
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==6">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                   超时未支付
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                  您好，订单提交24小时未支付，订单自动取消，您可通过您的微信账单核实支付情况。
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==7">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                   支付方式
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                  付款时可使用微信支付
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==8">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                   退款规则
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                  订单产生退款，将按照商品实付金额进行退款，订单使用的运费券、优惠券将不予退还。
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==9">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                   指定物流发货
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                   商品由惠眼识货仓库直发，如需指定快递，请联系客服
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==10">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                   超时未收到货
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                   若您长时间未收到货，物流信息一直未更新，建议您在订单上自助申请售后或联系客服处理。
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==11">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                   商品损坏
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                   请先验货后再签收；如已签收后发现商品损坏，建议在订单上自助申请售后或联系客服处理。
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==12">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                   如何申请退货
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                   进入惠眼识货，在订单详情页中点击【申请售后】--选择对应的售后类型--描述售后原因，上传有效凭证申请，等待客服处理。
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==13">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                   商品漏发/少件
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                   您好，若收到商品核实少发，您可联系客服申请退款或者补寄。路径：【我的】-【在线客服】
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==14">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                   能否换货
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                   暂不支持换货，如您需要换货，可申请退货后重新购买
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==15">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                   退货运费
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                   ①因商品质量问题，如破损、错发等非买家原因导致的退货，支持7天无理由退货，退货运费由平台承担，请提前联系客服 ②非质量问题退货，运费由消费者承担
              </p>
         </div>
         <div class="helpDetailModel" v-if="$route.query.helpId==16">
              <p class="helpDetailModelQ">
                  <em>Q:</em>&nbsp;
                   退款到账时效
              </p>
              <p class="helpDetailModelA">
                  <em>A:</em>&nbsp;
                   订单退款，款项将由原路返回支付账户。微信月退款会在24小时内退还至余额；微信绑定银行卡支付退款会在1-7个工作日退还对应银行卡
                   </p>
         </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
         
      };
    },

    watch: {},

    components: {},

    computed: {},

    methods: {
     
    },

    mounted: function () {
     
    }
  }

</script>
<style lang='css' scoped>
    
</style>
