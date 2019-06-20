<!-- storeApplicate -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .content{
    min-height: 100vh;
    background-color:#fff;
    text-align:center;
  }
  .storeImg{
    width: 165px;
    height: 125px;
    margin:50px 0 30px;
  }
  .store-explain{
    @include flexbox(space-between,center,row,wrap);
    padding:0 .3rem;
    li{
      display:flex;
      justify-content:center;
      align-items:center;
      width:50%;
      font-size:15px;
      color:#333;
      padding:10px 0;
      span{
        display:inline-block;
        text-align:center;
        width:22px;
        height:22px;
        line-height:22px;
        margin-right:.1rem;
        font-family: "PingFang SC";
        font-size:20px;
        color:#fff;
        border-radius:50%;
        
      }
      &:first-child{
        span{
          background:-webkit-linear-gradient(top, #e9176c,#f26a94);
          background:linear-gradient(top, #e9176c,#f26a94);
        }
      }
      &:nth-child(2){
        span{
          background:-webkit-linear-gradient(top, #5c76f8,#74aafc);
          background:linear-gradient(top, #5c76f8,#74aafc);
        }
      }
      &:nth-child(3){
        span{
          background:-webkit-linear-gradient(top, #4eaef1,#6ec8ef);
          background:linear-gradient(top, #4eaef1,#6ec8ef);
        }
      }
      &:nth-child(4){
        span{
          background:-webkit-linear-gradient(top, #e92a3c,#f5a0a4);
          background:linear-gradient(top, #e92a3c,#f5a0a4);
        }
      }
      &:nth-child(5){
        span{
          background:-webkit-linear-gradient(top, #fa952e,#f8c979);
          background:linear-gradient(top, #fa952e,#f8c979);
        }
      }
      &:last-child{
        span{
          background:-webkit-linear-gradient(top, #b60fbe,#d06cc4);
          background:linear-gradient(top, #b60fbe,#d06cc4);
        }
      }
    }

  }
  .btns{
    position:fixed;
    bottom:0;
    width:100%;
    line-height:49px;
    font-size:18px;
    color:#fff;
    background-color:$red;
    text-align:center;
  }
</style>
<template>
<div>
  <div class="content">
    <img class="storeImg" src="~jd/images/store_icon2.png"/>
    <ul class="store-explain">
      <li><span>1</span>解决网上开店问题</li>
      <li><span>2</span>提供多种促销活动</li>
      <li><span>3</span>免费获取海量服装</li>
      <li><span>4</span>专属客服答疑解惑</li>
      <li><span>5</span>提供一件代发服务</li>
      <li><span>6</span>7x12小时技术支持</li>
    </ul>
    <p class="applicate-btn btns" @click="$router.push('/shopManage')">我要开店</p>
  </div>
</div>
</template>
<style lang="scss" scoped>
</style>
