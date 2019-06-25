<!-- sttings -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .helpTable{
      background: #ffffff;
       table{
       width: 10rem;
       border-spacing:0;
       tr{
           border-bottom: 1px solid #e4e4e4;
           td{
               border-bottom: 1px solid #e4e4e4;
               height: 42px;
               color: #333;
               
           }
           .rowspanTd{
                    text-align: center;
                    border-right: 1px solid #e4e4e4;
                    font-size: 16px;
                    img{
                        margin-bottom: 4px;
                        width: 23px;
                    }
               }
               .nospanTd{
                    font-size: 14px;
                    padding: 0 12px;
                    
                    p{
                        @include flexbox(space-between,
                    center,
                    row,
                    nowrap);
                        span{
                            display: inline-block
                        }
                        .right-menu {
                            width: 10px;
                            height: 10px;
                            background-image: url('~jd/images/product-detail-sprites-mjs.png');
                            background-repeat: no-repeat;
                            background-size: 100px 100px;
                            background-position: 5px -20px;
                        }
                    }
               }
       }
   }
  }

  .contact-sever{
      width: 100%;
      text-align: center;
      padding: 16px 0;
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
  <div class="helpTable">
    <table>
        <tr>
            <td rowspan="3" class="rowspanTd"><img src="~jd/images/help1.png" alt="" style="width:22px"><br>购物指南</td>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:1}})"><p><span>7天无理由退货</span><span class="right-menu"></span></p></td>
        </tr>
        <tr>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:2}})"><p><span>发什么快递</span><span class="right-menu"></span></p></td>
        </tr>
        <tr>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:3}})"><p><span>商品选码</span><span class="right-menu"></span></p></td>
        </tr>
        <tr>
            <td rowspan="2" class="rowspanTd"><img src="~jd/images/help2.png" alt="" style="width:20.5px"><br>订单指南</td>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:4}})"><p><span>如何查询订单</span><span class="right-menu"></span></p></td>
        </tr>
        <tr>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:5}})"><p><span>修改订单信息</span><span class="right-menu"></span></p></td>
        </tr>

        <tr>
            <td rowspan="3" class="rowspanTd"><img src="~jd/images/help3.png" alt="" style="width:24.5px"><br>支付问题</td>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:6}})"><p><span>超时未支付</span><span class="right-menu"></span></p></td>
        </tr>
        <tr>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:7}})"><p><span>支付方式</span><span class="right-menu"></span></p></td>
        </tr>
        <tr>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:8}})"><p><span>退款规则</span><span class="right-menu"></span></p></td>
        </tr>

        <tr>
            <td rowspan="3" class="rowspanTd"><img src="~jd/images/help4.png" alt="" style="width:25.5px"><br>物流信息</td>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:9}})"><p><span>指定物流发货</span><span class="right-menu"></span></p></td>
        </tr>
        <tr>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:10}})"><p><span>超时未收到货</span><span class="right-menu"></span></p></td>
        </tr>
        <tr>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:11}})"><p><span>商品损坏</span><span class="right-menu"></span></p></td>
        </tr>


        <tr>
            <td rowspan="5" class="rowspanTd"><img src="~jd/images/help5.png" alt="" style="width:26.5px"><br>售后问题</td>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:12}})"><p><span>如何申请退货</span><span class="right-menu"></span></p></td>
        </tr>
        <tr>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:13}})"><p><span>商品漏发/少件</span><span class="right-menu"></span></p></td>
        </tr>
        <tr>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:14}})"><p><span>能否换货</span><span class="right-menu"></span></p></td>
        </tr>
        <tr>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:15}})"><p><span>退货运费</span><span class="right-menu"></span></p></td>
        </tr>
        <tr>
            <td class="nospanTd" @click= "()=>$router.push({path: '/helpcenterDetail',query: {helpId:16}})"><p><span>退款到账时效</span><span class="right-menu"></span></p></td>
        </tr>
    </table>
    <div class="contact-sever">
        <p class="contact-severtop"><img src="~jd/images/help_sever.png" alt=""><span>联系客服</span></p>
        <p class="contact-severbot">服务时间9:00-18:00</p>
    </div>
  </div>
</template>

<script>
  import {
    getUserInfo
  } from '@/service/getData';
  export default {
    data() {
      return {
        userInfo: null
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
<style lang='scss' scoped>


</style>
