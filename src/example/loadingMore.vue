<template>
  <div class="loader">
    <Loadmore  @loadMore="test" :commad="commad" :param="param" :topMethod="loadTop" ref="loadmore">
      <div v-for="(item,index) in data" :key="index" style="font-size:.45rem;padding: .1rem .3rem;border-bottom:1px solid #eee;background:#Fff;">
        <p>{{item.address}}</p>
        <p>{{item.province}}</p>
        <p>{{item.city}}</p>
        <p>{{item.area}}</p>
      </div>
    </Loadmore>
    <BackHead/>
  </div>
</template>

<script>
  import Http from '@/utils/axios';
  import Loadmore from 'common/Loadmore'
  import BackHead from 'common/backHead'
  import {
    getAddressList
  } from '@/service/getData'
  
  export default {
    data() {
      return {
        data: [],
        commad: getAddressList,
        param: {
          page_size: 10,
          current_page: 1
        }
      }
    },
    components: {
      Loadmore,
      BackHead
    },
    methods: {
      test(res) {
        if (res.Data.length > 0) {
          res.Data.map(item => {
            this.data.push(item);
          })
        }
      },
      async loadTop() {
        this.param.page_size = 10;
        this.param.current_page = 1;
        let response = await this.commad(this.param);
        setTimeout(() => {
          this.data = response.data;
          this.$refs.loadmore.onTopLoaded(this.$refs.loadmore.uuid);
        }, 1000);
      }
    },
    mounted: function () {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .loader {
    height: 100%;
  }
</style>
