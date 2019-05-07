<!-- addressList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .addressList {
    .my-header {
      padding: $padding;
      background: #fff;
      @include flexbox(space-between, center, row, nowrap);
      border-bottom: 1px solid #eee;
      .back {
        display: block;
        width: .65rem;
        height: .65rem;
        background: url('~jd/images/arrow-left.png') no-repeat;
        background-size: 100%;
      }
      strong {
        font-size: 18px;
        font-weight: normal;
        color: #333;
      }
      .myMsg {
        display: block;
        background: url('~jd/images/searchIcon.png') no-repeat;
        background-size: 600% 100%;
        height: .65rem;
        width: .65rem;
        opacity: 0;
        background-position: -2.6rem 0;
      }
    }
    .addNewAddressbtn {
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      padding: 14px 0;
      background: $red;
      font-size: 18px;
      color: #fff;
      margin: 0;
    }
    .address-container {
      .address-item {
        @include flexbox(center,
        center,
        row,
        wrap);
        height:82px;
        background: #fff;
        padding:14px .3rem;
        border-bottom: 1px solid #e4e4e4;
        // >p {
        //   width: 100%;
        // }
        >div{
          @include flexbox(flex-start,
        flex-start,
        row,
        wrap);
        }
        .name {
          width:auto;
          font-size: 14px;
          color: #333;
          padding-bottom:$padding ;
          @include textoverflow(1);
        }
        .address {
          width:96%;
          font-size: $subtitle;
          color: #333;
          @include textoverflow(2);
        }
        .address-status{
          padding:2px 5px;
          background:rgba(255,89,39,.15);
          color:$red;
          font-size:12px;
          margin:9px;
          margin-top:-1px;
          border-radius: 2px;
        }
        .address-edit {
          // width: 100%;
          @include flexbox(space-between,
          center,
          row,
          nowrap);
          padding: 3px 0 3px .44rem;
          border-left:1px solid #e4e4e4;
          // .left {
          //   @include flexbox(flex-start,
          //   center,
          //   row,
          //   nowrap);
          //   flex: initial;
          //   font-size: $subtitle;
          //   letter-spacing: 1px;
          //   color: $gray;
          //   i {
          //     vertical-align: middle;
          //     margin-right: $margin;
          //   }
          //   span{
          //     padding:2px 5px;
          //     background:rgba(256,230,223,.15)
          //   }
          // }
            flex: initial;
            font-size: $subtitle;
            color: $gray;
            letter-spacing: 1px;
            >div {
              @include flexbox(center,
              center,
              column,
              nowrap);
            }
            .edit {
              .edit-address-icon {
                display: block;
                @include wh(16px,
                16px);
                @include bg('~jd/images/edit.png');
                margin-bottom:6px;
              }
              span{
                font-size:12px;
                color:#999;
              }
            }
            .delect {
              .delect-address-icon {
                display: block;
                @include wh(16px,
                16px);
                @include bg('~jd/images/edit.png');
              }
            }
        }
      }
    }
  }

</style>
<template>
  <div class="addressList">
      <div class="address-container" v-if="addressList!=''">
        <div class="address-item" v-for="(item,index) in addressList" :key="index">
          <div>
            <p class="name">{{item.name}} {{item.phone}}</p>
            <span v-if="item.if_default===0" class="address-status">默认</span>
            <p class="address">{{item.province + item.city + item.area}} &nbsp;&nbsp;{{item.address}}</p>
          </div>
          <div class="address-edit">
              <div class="edit" @click="$router.push(`/address/${item.consignee_id}`)">
                <i class="edit-address-icon"></i>
                <span>编辑</span>
              </div>
              <!-- <div class="delect" @click="deleteAddress(item)">
                <i class="delect-address-icon"></i>
                <span>删除</span>
              </div> -->
          </div>
        </div>
      </div>
    <div class="addNewAddressbtn" @click="$router.push('/address')">添加新地址</div>
  </div>
</template>

<script>
  import {
    getAddressList
  } from '@/service/getData';
  import LoadMore from 'common/loadMore';
  import {
    getLocalStorage,
    setLocalStorage
  } from '@/utils/mixin';
  export default {
    data() {
      return {
        addressList: [],
        params: {
          
        },
        commad: getAddressList
      };
    },

    watch: {},

    components: {
      LoadMore
    },

    computed: {},

    methods: {
      // async deleteAddress(item) {
      //   this.$store.dispatch('RemoveAddress', {
      //     Id: item.consignee_id
      //   }).then(response => {
      //     this.onRefreshCallback();
      //     Toast({
      //       message: response.message
      //     })
      //   });
      //   //删除数据时缓存
      //   this.addressList.splice(item,1);
      //   setLocalStorage('addressList',this.addressList)
      // },
      // async onRefreshCallback() {
      //   this.addressList = []

      //   this.$refs.recommendLoadmore.onTopLoaded(this.$refs.recommendLoadmore.uuid);
      // },
      // async infiniteCallback(response) { //下拉加载
      //   if (response.Data.length > 0) {
      //     response.Data.map(i => {
      //       this.addressList.push(i)
      //     })
      //   }
      // },
      async initData() {
        let Data = await getAddressList({});
        if(Data.code!=10000){
          Toast({
            message: Data.msg,
            position: 'bottom'
          })
          return
        }else{
          this.addressList=Data.data;
          //初始化数据时缓存
          setLocalStorage('addressList',this.addressList)
        }
        

      },
      // async updData() { //更新数据
      //   setLocalStorage('session_token','797794855ec9448bf36e3b7ad1a2e659');
      //   setLocalStorage('access_token','1c1a99e5a52e557236f0efedd17652df');
      // }
       
    },

    mounted: function () {
          this.initData()
    }
  }

</script>
<style lang="scss" scoped>


</style>
