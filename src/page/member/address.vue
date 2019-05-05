<!-- address -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .address-from {
    background: #fff;
    .cell-from-item {
      @include flexbox(flex-start, center, row, nowrap);
      padding: 15px $padding;
      border-bottom: 1px solid #eee;
      .title {
        font-size: $subtitle;
        color: #333;
        white-space: nowrap;
      }
      .content {
        width: 70%;
        @include placeholderColor($gray);
        input {
          width: 100%;
          border: none;
          outline: none;
          box-shadow: none;
          text-shadow: none;
          text-align: left;
          font-size: $subtitle;
          color: #333;
        }
      }
    }
    .save-address {
      position: fixed;
      bottom: .2rem;
      width: 70%;
      text-align: center;
      padding: $padding 0;
      background: $red;
      font-size: $title;
      color: #fff;
      margin: 0 1.5rem;
      border-radius: 2px;
    }
  }

  .address-pricker {
    @include wh(100%, 180px);
    .address-picker-header {
      position: relative;
      p {
        padding: $padding 0;
        font-size: 15px;
        color: #333;
        text-align: center;
      }
      .picker-close {
        position: absolute;
        right: 10px;
        bottom: 7px;
        font-weight: normal;
        font-size: 25px;
        color: #999;
        opacity: .7;
      }
    }
  }

  // .popupVisible {
  //   transform: scale(0.95) !important;
  // }

</style>
<template>
  <div style="height:100%;">
    <div style="transition:1s;background:#000;height:100%;">
      <div class="address-from" style="transition:1s;height:100%;transform: scale(1);" :class="addressVisible? 'popupVisible' : ''">
        <div class="cell-from-item">
          <span class="title">收货人：</span>
          <div class="content">
            <input type="text" v-focus v-model="addressForm.name">
          </div>
        </div>
        <div class="cell-from-item">
          <span class="title">联系方式：</span>
          <div class="content">
            <input type="text" v-model="addressForm.phone">
          </div>
        </div>
        <div class="cell-from-item" @click="()=>addressVisible=true" style="justify-content:space-between;">
          <span class="title">所在地区：</span>
          <div class="content">
            <input type="text" readonly="readonly" :value="addressForm.province + addressForm.city + addressForm.area" placeholder="">
          </div>
          <i class="arrow-right" style="opacity: .4"></i>
        </div>
        <div class="cell-from-item">
          <span class="title">详细地址：</span>
          <div class="content">
            <input type="text" placeholder="街道、楼牌号" v-model="addressForm.address">
          </div>
        </div>
        <div class="cell-from-item">
          <span class="title">设为默认地址：</span>
          <div class="content">
            <mt-switch v-model="addressForm.selected"></mt-switch>
          </div>
        </div>
        <div class="save-address" @click="saveAddress">保存</div>
      </div>
    </div>
    <div>
      <mt-popup v-model="addressVisible" position="bottom"  class="address-pricker">
        <!-- <div class="address-picker-header">
          <p>配送至</p>
          <span class="picker-close">&times;</span>
        </div>
        <v-distpicker :placeholders="{ province: '请选择', city: '请选择', area: '请选择' }" wrapper="address-pricker-wrapper" type="mobile"
          @selected="onSelected"></v-distpicker> -->
          <mt-picker :slots="myAddressSlots" @change="onMyAddressChange" @touchmove.native.stop.prevent></mt-picker>
      </mt-popup>
    </div>
  </div>
</template>

<script>
  import {
    Switch,
    Toast,Picker
  } from 'mint-ui'
  // import VDistpicker from 'v-distpicker'
  import myaddress from '@/utils/address3.json'
  export default {
    data() {
      return {
        addressForm: {
          name: '',
          phone: '',
          province: '',
          city: '',
          area: '',
          address: '',
          selected: false
        },
        addressVisible: false,
        myAddressSlots: [
          {
            flex: 1,
            defaultIndex: 1,    
            values: Object.keys(myaddress),  //省份数组
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'center'
          },
          {
            divider: true,
            content: '-',
            className: 'slot4'
          },
          {
            flex: 1,
            values: [],
            className: 'slot5',
            textAlign: 'center'
          }
        ]
      };
    },

    watch: {},

    components: {
      // VDistpicker
      'mt-picker': Picker
    },

    computed: {},

    methods: {
      async saveAddress(){
        let params = {
          name:this.addressForm.name,
          phone: this.addressForm.phone,
          province:this.addressForm.province,
          city: this.addressForm.city,
          area:this.addressForm.area,
          address: this.addressForm.address,
          if_default: this.addressForm.selected ? 1 : 0,
        };
        if(this.$route.params.Id){ //有传Id则是编辑模式 没传是新增
          params.Id = this.$route.params.Id
        }
        this.$store.dispatch('SaveAddress',params).then(response=>{
          if(response.code != 200){
            Toast({
              message: '保存失败',
            })
          }else if(response.code == 200){
            Toast({
              message: response.Message
            })
          }
        }).catch(error=>{
            Toast({
              message: '访问接口失败'
            })
        })
      },
      
      onMyAddressChange(picker, values) {
       if(myaddress[values[0]]){  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
          picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
          picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
          this.myAddressProvince = values[0];
          this.myAddressCity = values[1];
          this.myAddresscounty = values[2];

          this.addressForm.province=values[0];
          this.addressForm.city= values[1];
          this.addressForm.area= values[2];
        }
      },
      onSelected(data) {
        this.addressVisible = false;
        this.addressForm.province = data.province.value;
        this.addressForm.city = data.city.value;
        this.addressForm.area = data.area.value;
      },
      async initData(){
        if(this.$route.params.Id){
          let { Data } = await this.$store.dispatch('GetAddress',{Id:this.$route.params.Id});
          this.addressForm.name = Data.name;
          this.addressForm.phone = Data.phone;
          this.addressForm.province = Data.province;
          this.addressForm.city = Data.city;
          this.addressForm.area = Data.area;
          this.addressForm.address = Data.address;
          this.addressForm.selected = Data.if_default===1 ? true : false;
        }
      }
    },

    mounted: function () {
      this.initData();
      this.$nextTick(() => { //vue里面全部加载好了再执行的函数  （类似于setTimeout）
        this.myAddressSlots[0].defaultIndex = 0    
        // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
        //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
      });
    }
  }

</script>
<style lang="scss" scoped>


</style>
