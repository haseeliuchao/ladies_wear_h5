<!-- backRouter -->
<style lang='scss' scoped>
@import '~assets/common/css/mixin.scss';
  .back-router{
      position: fixed;
      bottom: 6px;
      left: .186667rem;
      z-index: 999;
      .back-routermain{
          position: relative;
          width: 2rem;
          height: .8rem;
          border-radius: 30px;
          overflow: hidden;
          .back-routermaindetail{
              position: absolute;
              width: 2rem;
          height: .8rem;
          font-size: .4rem;
          color: #d0d0d1;
          padding: 0 .32rem;
            @include flexbox(space-between,
                center,
                row,
                nowrap);
                img{
                    height: .453333rem;
                    width: .453333rem;
                }
          }
      }
      .back-routerbg{
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background: rgba($color: #2b2e37, $alpha: .85);
      }
  }
  .back-routerheight{
      bottom: 56px;
  }
</style>
<template>
   <div class="back-router" :class="[fixePosition==2?'back-routerheight':'']" @click="$router.go(-1)">
      <div class="back-routermain">
          <div class="back-routerbg"></div>
          <div class="back-routermaindetail">
            <img src="~jd/images/backrouter-icon.png"><p>返回</p>
            </div>
      
      </div>
   </div>
</template>
<script>
  export default {
    props:{
        fixePosition:{
          type:Number,
          default: 1
        }
    },
    data() {return {}},
    watch: {},
    components: {},
    computed: {},
    methods: {},
    mounted: function () {}
  }

</script>
