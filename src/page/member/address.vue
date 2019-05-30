<!-- address -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .address-tip{
    padding:.3rem;
    color:#999;
    font-size:14px;
    i{
      color:$red;
      margin-right:6px;
    }
  }
  .address-from {
    background: #f2f2f2;
    .cell-from-item {
      @include flexbox(flex-start, center, row, nowrap);
      padding: 15px $padding;
      border-bottom: 1px solid #e4e4e4;
      background:#fff;
      .title {
        width:2.4rem;
        font-size: 15px;
        color: #999;
        white-space: nowrap;
      }
      .content {
        width: 70%;
        @include placeholderColor($gray);
        input,textarea {
          width: 100%;
          border: none;
          outline: none;
          box-shadow: none;
          text-shadow: none;
          text-align: left;
          font-size: 15px;
          color: #333;
        }
      }
    }
    .detail-address,.default-address,.del-address{
      border:none;
    }
    .del-address{
      color:$red;
      font-size:15px;
    }
    
  }
  .save-address {
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      padding: 14px 0;
      background: $red;
      font-size: 18px;
      color: #fff;
    }
  .address-pricker {
    @include wh(100%, 220px);
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
    .pop-btn{
      @include flexbox(space-between, center, row, nowrap);
      font-size:16px;
      padding:10px .3rem;
      .cancle{
        color:#999;
      }
      .confirm{
        color:#333;
      }
    }
  }
  // .popupVisible {
  //   transform: scale(0.95) !important;
  // }

</style>
<style>
  /* 弹窗样式 */
  .mint-msgbox-message{
    color:#333;
  }
  .cancelButton{
      color:#333 !important;
  }
  .confirmButton{
    color:#ff2741 !important;
  }
  /* 收货地址城市选择样式 */
  .picker-item{
    color:#333;
    font-size:16px;
  }
  .picker-item.picker-selected{
    color:#333;
  }
  .picker-center-highlight{
    border:none;
    background:#f2f2f2;
    z-index:-1
  }
  

</style>
<template>
  <div style="height:100%;">
    <div style="transition:1s;background:#f2f2f2;height:100%;">
      <p class="address-tip"><i>*</i>为了提高发货速度，请填写真实信息</p>
      <div class="address-from" style="transition:1s;transform: scale(1);" :class="addressVisible? 'popupVisible' : ''">
        <div class="cell-from-item">
          <span class="title">姓名</span>
          <div class="content">
            <input type="text" v-focus v-model="addressForm.name">
          </div>
        </div>
        <div class="cell-from-item">
          <span class="title">手机</span>
          <div class="content">
            <input type="text" v-model="addressForm.phone">
          </div>
        </div>
        <div class="cell-from-item" @click= "()=>addressVisible=true" >
          <span class="title">选择城市</span>
          <div class="content">
            <input type="text" readonly="readonly" :value="addressForm.province + addressForm.city + addressForm.area" placeholder="">
          </div>
          <!-- <i class="arrow-right" style="opacity: .4"></i> -->
        </div>
        <div class="cell-from-item detail-address" style="height:80px;line-height:2;align-items:flex-start">
          <span class="title">详细地址</span>
          <div class="content">
            <textarea type="text" placeholder=" 街道、楼牌号" v-model="addressForm.address"></textarea>
          </div>
        </div>
        <div class="cell-from-item default-address" style="margin:8px 0">
          <span class="title" style='width:3rem;color:#333'>设为默认地址</span>
          <div class="content">
            <mt-switch v-model="addressForm.selected" style="justify-content:flex-end"></mt-switch>
          </div>
        </div>
        <div class="cell-from-item del-address" v-if="$route.params.consignee_id" @click= "deleteAddresspop">删除收货地址</div>
      </div>
      <div class="save-address" @click= "saveAddress">保存</div>
    </div>
    <div>
      <mt-popup v-model="addressVisible" position="bottom"  class="address-pricker">
        <!-- <div class="address-picker-header">
          <p>配送至</p>
          <span class="picker-close">&times;</span>
        </div>
        <v-distpicker :placeholders="{ province: '请选择', city: '请选择', area: '请选择' }" wrapper="address-pricker-wrapper" type="mobile"
          @selected="onSelected"></v-distpicker> -->
          <div class="pop-btn clearfix">
            <p class="cancle" @click= "cancle">取消</p>
            <p class="confirm" @click= "confirm">完成</p>
          </div>
          <mt-picker v-model="addressVisible" :slots="myAddressSlots" :show-toolbar="false" ref="picker" :item-height="44" @change="onMyAddressChange" @touchmove.native.stop.prevent>
          </mt-picker>
      </mt-popup>
    </div>
  </div>
</template>

<script>
  import {
    Switch,
    Toast,Picker,
    MessageBox 
  } from 'mint-ui'
  // import VDistpicker from 'v-distpicker'
  import myaddress from '@/utils/address3.json'
  import {
    getLocalStorage,
    setLocalStorage
  } from '@/utils/mixin';
  export default {
    data() {
      return {
        addressForm: {
          id: '',
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
            textAlign: 'left'
          },
           {
            divider: true,
            content: '',
            className: 'slot2'
          }, 
          {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'center'
          },
          {
            divider: true,
            content: '',
            className: 'slot4'
          }, 
          {
            flex: 1,
            values: [],
            className: 'slot5',
            textAlign: 'right'
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
          consignee_id:this.addressForm.id,
          name:this.addressForm.name,
          phone: this.addressForm.phone,
          province: this.addressForm.province,
          city: this.addressForm.city,
          area: this.addressForm.area,
          address: this.addressForm.address,
          if_default: this.addressForm.selected ? 1 : 0,
        };
        if(this.$route.params.consignee_id){ //有传Id则是编辑模式 没传是新增
          params.consignee_id = this.$route.params.consignee_id
          params.if_default = this.$route.params.if_default
           this.$store.dispatch('UpdataAddress',params).then(response=>{
          if(response.code != 10000){
            Toast({
              message: '保存失败',
            })
          }else {
            Toast({
              message: '保存成功'
            })
            // this.$router.push({path: '/addressList'})
            this.$router.go(-1)
          }
        }).catch(error=>{
            Toast({
              message: '访问接口失败'
            })
        });
        }else{
           this.$store.dispatch('SaveAddress',params).then(response=>{
          if(response.code != 10000){
            Toast({
              message: '保存失败',
            })
          }else {
            Toast({
              message: '保存成功'
            })
            // this.$router.push({path: '/addressList'})
            this.$router.go(-1)
          }
        }).catch(error=>{
            Toast({
              message: '访问接口失败'
            })
        });
        }
        
        
      },

      deleteAddresspop(){
          MessageBox.confirm('', { 
            message: '确定要删除该地址吗？', 
            title: '',
            cancelButtonClass:'cancelButton', 
            confirmButtonClass:'confirmButton',
          }).then(action => {
            if (action == 'confirm') {     //确认的回调
              this.deleteAddress();
            }
          }).catch(err => { 
            if (err == 'cancel') {     //取消的回调
            } 
          });
      },
      async deleteAddress() {
        this.$store.dispatch('RemoveAddress', {
          consignee_id: this.$route.params.consignee_id
        }).then(response => {
          if(response.code != 10000){
            Toast({
              message: '删除失败',
            })
          }else {
            Toast({
              message: '删除成功'
            })
            // this.$router.push({path: '/addressList'})
            this.$router.go(-1)
          }
        });
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
      confirm(){
        this.addressVisible = false;
        // 获取变换后的城市数据
        var valueArr = this.$refs.picker.getValues()
        this.oldSlots = valueArr.concat();
        this.myAddressCity = this.$refs.picker.getSlotValues(1);
        this.myAddresscounty = this.$refs.picker.getSlotValues(2)
      },
      cancle(){
        this.addressVisible = false;
         // 把缓存的数据赋值给对应的slot
        this.$refs.picker.setSlotValues(1,this.myAddressCity);
        this.$refs.picker.setSlotValues(2,this.myAddresscounty);
        this.$refs.picker.setValues(this.oldSlots);

      },
      onSelected(data) {
        this.addressVisible = false;
        this.addressForm.province = data.province.value;
        this.addressForm.city = data.city.value;
        this.addressForm.area = data.area.value;
      },
      async initData(){
        if(this.$route.params.consignee_id){
          let that =this;
          let Data=JSON.parse(getLocalStorage('addressList'))
          Data.map(item => {
          if (item.consignee_id === parseInt(that.$route.params.consignee_id)) {
          that.addressForm.name = item.name;
          that.addressForm.phone = item.phone;
          that.addressForm.province = item.province;
          that.addressForm.city = item.city;
          that.addressForm.area = item.area;
          that.addressForm.address = item.address;
          that.addressForm.selected = item.if_default===1 ? true : false;
          }
        })
        }
      },
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
