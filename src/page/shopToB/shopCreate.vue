<!-- storeCreate -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .content{
    min-height:100vh;
    background-color:#f2f2f2;
  }
  .store-con{
    background:#fff;
    p{
      @include flexbox(space-between,center,row,nowrap);
      padding:0 .3rem;
      border-top:1px solid #e4e4e4;
      font-size:16px;
      color:#999;
      line-height:38px;
      input{
        width:7rem;
        color:#333;
      }
      select{
        width:7.1rem;
      }
      span:last-child{
        color:#333;
      }
      &:first-child{
        position:relative;
        span:last-child{
          position:absolute;
          right: .4rem;
          color:$red;
          font-size:14px;
        }
      }
      &:nth-child(3){
        position:relative;
        span:last-child{
          position:absolute;
          right: .4rem;
        }
      }
    }
  }
  .tip{
    padding: 10px .3rem;
    font-size:14px;
    color:#999;
    span{
      margin-right: 5px;
      color:$red;
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
    <div class="storeCreate-con store-con">
      <p>
        <label for="name">店铺名称</label>
        <input type="text" name="name"  value="" placeholder="店铺为2-10个字符" id="name">
        <span style="display:none;">请输入合格店铺名称</span>
      </p>
      <p>
        <label for="category">主营类目</label>
        <input type="text" name="category" value="女装" readonly="readonly" id="category">
      </p>
      <p>
        <label for="markup">商品加价</label>
        <input type="text" name="markup" value="1" placeholder="" id="markup">
        <span>倍</span>
      </p>
      <p>
        <label for="freight">商品包邮</label>
        <select id="freight">
          <option>不包邮</option>
          <option>包邮</option>
        </select>
      </p>
    </div>
    <p class="tip"><span>*</span>包邮产生的退货运费由您承担</p>
    <p class="create-btn btns" @click="$router.push('/myShop')">创建店铺</p>
  </div>
</div>
</template>

<script>
</script>
<style lang="scss" scoped>


</style>
