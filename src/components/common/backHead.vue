<!-- backHead -->
<template>
  <div class="backHead" v-if="Status" @click= "backHead"></div>
</template>

<script>
  import {
    showBack
  } from '@/utils/mixin';
  export default {
    data() {
      return {
        Status: false
      };
    },

    watch: {},
    props: {
      backRouters: {
        type: String,
        default: '/'
      }
    },

    components: {},

    computed: {},

    methods: {
      backHead() {
        let times = setInterval(() => {
          let top = document.body.scrollTop | document.documentElement.scrollTop;
          if (top <= 0) {
            clearInterval(times);
          }
          document.body.scrollTop = top - (top / 50);
          document.documentElement.scrollTop = top - (top / 50);
        }, 1)
        document.addEventListener('touchstart', () => {
          clearInterval(times);
        }, {
          passive: true
        })

        document.addEventListener('touchmove', () => {
          clearInterval(times);
        }, {
          passive: true
        })
      }
    },

    mounted: function () {
      showBack(status => {
        this.Status = status;
      })
    }
  }

</script>
<style lang='scss' scoped>
  @import '~assets/common/css/mixin.scss';
  .backHead {
    position: fixed;
    bottom: 100px;
    right: 9px;
    z-index: 2000;
    @include wh(38px, 38px);
    @include bg("~jd/images/backHand.png");
  }

</style>
