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
    @include bg("data:img/png;base64,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");
  }

</style>
