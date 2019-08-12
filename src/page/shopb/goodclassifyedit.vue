<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .right-menu {
        width: 10px;
        height: 10px;
        background-image: url('~jd/images/product-detail-sprites-mjs.png');
        background-repeat: no-repeat;
        background-size: 100px 100px;
        background-position: 5px -20px;
        margin-left: 4px;
      }
   .goodclassify{
       width: 10rem;
       border-top: .213333rem solid #f2f2f2;
       min-height: 100vh;
       padding-bottom: 1.6rem;
       background: #fff;
      .goodclassify-list{
          width: 10rem;
          padding: 0 .3rem;
          height: 1.28rem;
          background: #fff;
          border-bottom: 1px solid #e4e4e4;
          @include flexbox(space-between, center, row, nowrap);
          .goodclassify-listleft{
              font-size: .4rem;
              color: #333;
          }
          .goodclassify-listright{
              @include flexbox(flex-end, center, row, nowrap);
              font-size: .4rem;
              color: #666;  
          }
      }
      .changehiden{
        max-height: 0;
        overflow: hidden;
        .goodclassify-list{
         padding-left: 1.093333rem;
        .goodclassify-listleft{
              font-size: .373333rem;
              color: #333;
          }
        }
          
      }
      .changeshow{
         max-height: 12.8rem;
         transition: max-height ease-out 1s;
      }
      

    .cart-shop-fixed{
    position: fixed;
    bottom: -1px;
    left: 0;
    right: 0;
    width: 100%;
    padding: .186667rem .32rem;
    background: #fcfcfc;
   @include flexbox(space-between,
    center,
    row,
    nowrap);
        div{
          width: 2.933333rem;
          height: .906667rem;
          line-height: .906667rem;
          text-align: center;
          font-size: .426667rem;
          color: $red;
          border:1px solid $red;
          border-radius: 6px;
        }
    }
    .classifyeditone{
        border-top: .213333rem solid #f2f2f2;
        .classifyeditone-input{
            padding: .666667rem .32rem 0;
            input{
               height: 1.04rem;
               line-height: 1.04rem;
               border: 1px solid #cbcbcb;
               border-radius: 6px;
               width: 100%;;
               padding:0 .266667rem;
               color: #333;
               font-size: .4rem;
               background: #fcfcfc;
            }
            .select-two{
                background:#fcfcfc url("~jd/images/select-down.png") no-repeat 8.6rem center;
                background-size: 4%;
            }
        }
        .error-text{
            height: .64rem;
           
            padding: 0 .32rem;
            p{
                color: #ff5527;
                font-size: .373333rem;
                line-height: .64rem;
            }
        }
        .classifyeditone-btn{
            @include flexbox(space-around,center,row,nowrap);
            div{
            width: 3.466667rem;
            height: .906667rem;
            line-height: .906667rem;
            text-align: center;
            font-size: .48rem;
            color: $red;
            border:1px solid $red;
            border-radius: 6px;
             margin-top: 1.6rem;
            }
        }
            .selectededittwopop{
                max-height: 10rem;
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
                .selectededittwo{
                
                    .selectededittwo-title{
                        height: 1.173333rem;
                        text-align: center;
                        line-height: 1.173333rem;
                        font-size: .453333rem;
                        color: #333;
                        border-bottom: 1px solid #ececec;
                    }
                    .selectededittwo-listall{
                        max-height: 8.826666rem;
                        overflow-y: scroll;
                    -webkit-overflow-scrolling: touch;
                    .selectededittwo-list{
                       padding: 0 .32rem;
                       height: 1.28rem;
                       border-bottom: 1px solid #ececec;
                       @include flexbox(space-between,center,row,nowrap);
                       .selectededittwo-list-left{
                           font-size: .4rem;
                           color: #333
                       }
                    }
                    }
                }
            }
            
        
    }


   }

</style>

<template>
  <div class="goodclassify">
        <mt-popup v-model="visiblePopup.classifyeditone" :closeOnClickModal="true" :modal="false" position="bottom" class="modal-popup">
            <div class="classifyeditone">
                
                <div class="classifyeditone-input"  @click= "$refs.classifyeditoneInput.focus()"><input type="text" v-model="classifyeditonevalue" placeholder="请输入分类名称" ref="classifyeditoneInput"></div>
                <div class="error-text">
                    <p v-if="errorStatus">输入1-10个字符，支持特殊字符；不支持表情符号</p>
                </div>
                <div class="classifyeditone-btn">
                    <div @click="closeclassifyPop">取消</div>
                    <div @click="saveClassifyeditOne(1)" style="background:#ff2741;color:#fff">保存</div>
                </div>
            </div>
       </mt-popup>
       <mt-popup v-model="visiblePopup.classifyedittwo" :closeOnClickModal="true" :modal="false" position="bottom" class="modal-popup">
            <div class="classifyeditone">
                <div class="classifyeditone-input"><input type="text" class="select-two" readonly="readonly" v-model="classifyedittwoselectvalue" @click= "()=>visiblePopup.selectededittwo=true"></div>
                <div class="error-text">
                    <p v-if="errorStatustwotop">请选择上级分类</p>
                </div>
                <div class="classifyeditone-input" style="padding-top:0"  @click= "$refs.classifyedittwoInput.focus()"><input type="text" v-model="classifyedittwovalue" placeholder="请输入分类名称" ref="classifyedittwoInput"></div>
                <div class="error-text">
                    <p v-if="errorStatustwo">输入1-10个字符，支持特殊字符；不支持表情符号</p>
                </div>
                <div class="classifyeditone-btn">
                    <div @click="closeclassifyPop">取消</div>
                    <div @click="saveClassifyeditOne(2)" style="background:#ff2741;color:#fff">保存</div>
                </div>

                <mt-popup v-model="visiblePopup.selectededittwo" :closeOnClickModal="true" :modal="true" position="bottom" class="modal-popup selectededittwopop" >
                    <div class="selectededittwo">
                        <p class="selectededittwo-title">选择上级分类</p>
                        <div class="selectededittwo-listall">
                        <div class="selectededittwo-list" v-for="(item,index) in categoryRootB.data" :key="index" @click="selectClassify(item)">
                            <div class="selectededittwo-list-left">{{item.name}}</div>
                            <i :class="['selectclassify-default-icon',item.checked ? 'selectclassify-icon' : '']"></i>
                        </div>
                        </div>
                    </div>
                </mt-popup>
            </div>
       </mt-popup>

        <div class="goodclassify-all-list" v-for="(item,index) in categoryRootB.data" :key="index">
            <div class="goodclassify-list" @click="rootScrollTo(item)">
                <div class="goodclassify-listleft">{{item.name}}</div>
                
                <div class="goodclassify-listright" v-if="item.up_levl_list">
                    <img v-if="!item.change" src="~jd/images/classifyopen.png" style="width: .48rem">
                    <img v-if="item.change" src="~jd/images/classifyclose.png" style="width: .48rem">
                </div>
            </div>
            <div :class="['changehiden',item.change?'changeshow':'']" >
                <div class="goodclassify-list"  v-for="(itemDetial,index1) in item.up_levl_list" :key="index1" >
                    <div class="goodclassify-listleft">{{itemDetial.name}}</div>
                </div> 
            </div>

        </div>
        <div class="cart-shop-fixed">
                <div @click="visiblePopup.classifyeditone=true" style="background:#ff2741;color:#fff">添加一级分类</div>
                <div @click="visiblePopup.classifyedittwo=true">添加二级分类</div>
                <div @click="$router.push({path:'/goodclassifyeditall'})">批量管理</div>
        </div>
    <BackRouter :fixePosition='2'/>
  </div>
</template>

<script>
import BackRouter from 'common/backRouter';

  import {
    getCategoryListB,
    saveClassifyeditOneData
  } from '@/service/getData';

  import {
    Toast
  } from 'mint-ui'
  export default {
    data() {
      return {
        categoryRootB: [],
        visiblePopup:{
            classifyeditone:false,
            classifyedittwo:false,
            selectededittwo:false,
        },
        classifyeditonevalue:null,
        classifyedittwovalue:null,
        classifyedittwoselectvalue:'选择上级分类',
        errorStatus:false,
        errorStatustwo:false,
        errorStatustwotop:false,
        parentId:0
      };
    },

    watch: {},

    components: {
      // LoadMore
      BackRouter
    },

    computed: {
   
    },

    methods: {
        closeclassifyPop(){
              this.errorStatus=false;
              this.errorStatustwo=false;
              this.errorStatustwotop=false;
              this.visiblePopup.classifyeditone=false;
              this.classifyeditonevalue=null
              this.visiblePopup.classifyedittwo=false;
              this.classifyedittwovalue=null;
              this.parentId=0;
              this.classifyedittwoselectvalue='选择上级分类';
              if(this.categoryRootB.data){
                 this.categoryRootB.data.map(i=>{
                i.checked=false;
              })
              }
              
        },
      async initData(){
          let res = await getCategoryListB()
          if(res.code!=10000){
              return Toast({duration: 1000,
                    message: res.msg
              }) 
          }
          this.categoryRootB = res.data;
          if(this.categoryRootB.data){
           this.categoryRootB.data.map(i=>{
             i.change=false;
           })
          }
      },
      selectClassify(item){
           this.categoryRootB.data.map(i=>{
             i.checked=false;
           })
           item.checked=true;
           this.classifyedittwoselectvalue=item.name;
           this.parentId=item.distributor_item_category_id;
           this.visiblePopup.selectededittwo=false;
           this.errorStatustwotop=false;
      },
      async saveClassifyeditOne(type){
          let value=null;
          if(type==1){
              
            if(!this.classifyeditonevalue){
              return this.errorStatus=true;
            }else{
                value=this.classifyeditonevalue;
                 this.errorStatus=false
            }
          }else{
            if(this.parentId==0){
              return this.errorStatustwotop=true  
            }
            if(!this.classifyedittwovalue){
              return this.errorStatustwo=true
            }else{
              this.errorStatustwo=false
              value=this.classifyedittwovalue;
            }
            
            
          }
          
         let res = await saveClassifyeditOneData({
             name:value,
             parent_id:this.parentId
         })
          if(res.code!=10000){
              return Toast({duration: 1000,
                    message: res.msg
              }) 
          }else{
              this.visiblePopup.classifyeditone=false;
              this.visiblePopup.classifyedittwo=false;
              this.classifyeditonevalue=null;
              this.classifyedittwovalue=null;
              this.classifyedittwoselectvalue='选择上级分类';
              this.parentId=0;
              if(this.categoryRootB.data){
                 this.categoryRootB.data.map(i=>{
                i.checked=false;
              })
              }
              this.initData()
              return Toast({duration: 1000,
                    message: '添加成功'
              }) 
              
          }
      },

      async rootScrollTo(item) {
            return item.change=!item.change;
      },
       
    },
    mounted: function () {
     this.initData()
    }
  }

</script>
<style lang='scss' scoped>


</style>
