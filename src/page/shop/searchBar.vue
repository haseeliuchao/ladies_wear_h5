<!-- searchRusult -->
<style lang="scss" scoped>
@import "~assets/common/css/mixin.scss";
.scrollbtm {
  background: #ffffff !important;
  .searchInput {
    .search-box {
      background: #f5f5f5!important;
    }
    .search-boxbg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: none;
        opacity: 0;
        z-index: 1;
        border-radius: 0.9rem;
      }
  }
}
.searchRusultall {
  position: fixed;
  top: 0;
  transition: 0.6s;
  // background: #fff;
  width: 10rem;

  max-width: 10rem;
  min-height: 1.2rem;
  margin: 0 auto;
  z-index: 2000;
  .homesearch-hot {
    height: 1rem;
    padding-bottom: 10px;
    @include flexbox(space-between, center, row, nowrap);
    p {
      padding-left: 0.4rem;
      color: #666;
      @include flexbox(space-between, center, row, nowrap);
    }
    ul {
      @include flexbox(start, center, row, nowrap);
      flex: 7;
      li {
        padding: 5px 10px;
        background: #f2f2f2;
        border-radius: 10rem;
        margin-right: 10px;
        color: #666;
      }
    }
  }
}

.scanCode {
  min-width: 1.2rem;
  @include flexbox(center, center, column, wrap);
  color: #fff;
  font-size: 10px;
  margin-left: 0.2rem;
  span {
    padding-top: 2px;
    color: #333;
  }
  .searchQrcodeIcon {
    width: 21px;
    height: 18px;
    background-position: 0 0;
  }
}

.searchIcon {
  display: block;
  background: url("~jd/images/camera2.png") no-repeat;
  background-size: 100%;
}

.searchContentIcon {
  height: 0.45rem;
  width: 0.45rem;
  margin-right: 0.3rem;
  background: url("~jd/images/sarchicon.png") no-repeat;
  background-size: 100% 100%;
}
.searchRusult {
  @include flexbox(space-between, center, row, nowrap);
  // min-height: 40px;
  padding: 0.33rem;
  .logoIcon {
    width: 1.3rem;
    // height:.9rem;
    margin-right: 0.24rem;
    font-size: 15px;
    font-weight: bold;
    color: $red;
    // background:url('~jd/images/logoicon.png') no-repeat;
    // background-size:100% 100%;
  }

  .searchInput {
    width: 100%;
    position: relative;
    .search-boxbg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        opacity: .6;
        z-index: 1;
        border-radius: 0.9rem;
      }
    .search-box {
      position: relative;
      z-index: 20;
      height: 0.9rem;
      border-radius: 0.9rem;
      @include flexbox(space-between, center, row, nowrap);
      padding: 0 0.3rem;
      
      span {
        color: #999;
        font-size: 14px;
      }
    }
  }

  .searchMsg {
    min-width: 1rem;
    @include flexbox(center, center, column, wrap);
    color: #fff;
    font-size: 12px;
    visibility: hidden;
    span {
      padding-top: 2px;
    }
    .searchMsgIcon {
      height: 0.65rem;
      min-width: 0.65rem;
      background-position: -1.3rem 0;
    }
  }
}

.searchContainer {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background: #f8f8f8;
  .search-top {
    @include flexbox(space-between, center, row, nowrap);
    @media all and(max-width:320px) {
      padding-left: 10px;
    }
    padding: 10px 0 10px 5px;
    background: #fff;
    .searchInput {
      width: 90%;
      .search-box {
        width: 100%;
        position: relative;
        background: #fff;
        padding: 0px 14px;
        border-radius: 26px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        height: 0.86rem;
        @include flexbox(space-between, center, row, nowrap);
        input {
          width: 100%;
          color: #333;
          font-size: $subtitle;
          outline: none;
          border: none;
          box-shadow: none;
          text-shadow: none;
          font-weight: normal;
          background: transparent;
          height: 0.86rem;
          line-height: normal;
        }
        .clear {
          width: 0.42rem;
          height: 0.42rem;
          margin: 0;
          position: absolute;
          right: 10px;
          padding: 5px;
          @include flexbox(center, center, row, nowrap);
          color: #fff;
          font-size: 15px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.15);
        }
        .searchIcon {
          display: block;
          height: 0.48rem;
          margin-right: 0.05rem;
          width: 0.52rem;
        }
      }
    }
    > span {
      text-align: center;
      font-size: 15px;
      min-width: 1.5rem;
      color: $gray;
    }
  }
  .search-hot {
    padding: $padding;
    background: #fff;
    > p {
      font-size: $title;
      // font-weight: bold;
      color: #333;
      text-align: left;
      // padding: $padding;
      margin-bottom: $margin;
    }
    .search-hot-list {
      @include flexbox(flex-start, center, row, wrap);
      padding: $padding 0 0;
      .search-hot-item {
        border-radius: 10px;
        color: #666;
        padding: 5px 16px 8px 0;
        // margin: 6px 6px 0px;
        font-size: $subtitle;
        text-align: center;
      }
    }
  }
  .search-history {
    // margin-top: $margin;
    background: #fff;
    padding: $padding 0 $padding $padding;
    > p {
      font-size: $title;
      // font-weight: bold;
      margin-bottom: $margin;
      color: #333;
      text-align: left;
      // border-bottom: 1px solid $border;
      span {
        display: inline-block;
        background: url("~jd/images/hositoytdel.png") no-repeat;
        width: 0.41rem;
        height: 0.41rem;
        background-size: 100%;
        float: right;
        margin-right: 0.4rem;
      }
    }
    .clear-history {
      width: 5rem;
      padding: $padding 0;
      margin: $margin auto;
      border: 1px solid $border;
      border-radius: 2px;
      font-size: $subtitle;
      color: $gray;
      @include flexbox(center, center, row, nowrap);
    }
    .search-history-list {
      @include flexbox(flex-start, center, row, wrap);
      padding: $padding 0 0;
      .search-history-item {
        background: #f2f2f2;
        border-radius: 10px;
        color: #666;
        padding: 5px 14px;
        margin: 0 10px 10px 0;
        font-size: $subtitle;
        text-align: center;
      }
    }
  }
  .search-rusult-content {
    .search-rusult-goods {
      @include flexbox(flex-start, center, row, nowrap);
      padding: $padding;
      span {
        font-size: $subtitle;
        margin-left: 5px;
        color: $gray;
      }
      i {
        display: block;
        width: 17px;
        height: 16px;
        background: url("~jd/images/store.png") no-repeat;
        background-size: 100%;
      }
    }
    .search-rusult-list {
      @include flexbox(flex-start, center, column, wrap);
      .search-rusult-item {
        width: 100%;
        text-align: left;
        padding: $padding;
        color: $gray;
        font-size: $subtitle;
        border-bottom: 1px solid $border;
        p {
          @include textoverflow(1);
        }
      }
    }
  }
}
</style>
<template>
  <div style="position:relative;">
    <div class="searchRusultall" :class="Status?'scrollbtm':''" v-if="!searchVisiblie">
      <div class="searchRusult">
        <!-- <slot name="left-icon">
          <i class="logoIcon logoQrcodeIcon">惠眼识货</i>
        </slot>-->
        <div class="searchInput">
          
          <slot name="title-icon">
            <div class="search-box" >
              <div  style="width:90%" @click="()=>searchVisiblie=true">
                <i class="searchIcon searchContentIcon" style="display:inline-block;vertical-align: bottom;margin-right: 0.1rem;"></i>
                <span>品质生活必备</span>
              </div>
              <img src="~jd/images/searchImgIcon.png" @click= "$router.push(`/searchImg`)" height="16" />
            </div>
          </slot>
          <div class="search-boxbg"></div>
        </div>
        <!-- <slot name="right-icon">
          <div class="scanCode" @click= "$router.push(`/searchImg`)">
            <i class="searchIcon searchQrcodeIcon"></i>
            <span>找同款</span>
          </div>
        </slot>-->
      </div>
    </div>
    <!-- 文字搜索 -->
    <mt-popup
      v-model="searchVisiblie"
      :closeOnClickModal="true"
      :modal="false"
      position="right"
      class="modal-popup"
    >
      <div class="searchContainer">
        <div class="search-top">
          <slot name="right-icon">
            <div
              style="margin-right:.2rem;margin-left:0"
              class="scanCode"
              @click="()=>{$router.push(`/searchImg`);popupVisible=false}"
            >
              <i class="searchIcon searchQrcodeIcon"></i>
              <span>找同款</span>
            </div>
          </slot>
          <div class="searchInput" @click="$refs.searchInput.focus()">
            <div class="search-box">
              <input
                type="search"
                @click="focuskeyworldclick"
                @blur="gotoView"
                v-focus="focuskeyworldState"
                v-model="title"
                @keypress="truesearchGoods"
                placeholder="品质生活必备"
                ref="searchInput"
              />
              <i class="searchIcon searchContentIcon" @click="selectedProd(title)"></i>
            </div>
          </div>
          <span @click="()=>{title='';searchVisiblie=false}">取消</span>
        </div>
        <load-more style="width:100%;height:100%;background:#fff;">
          <div class="search-history" v-if="searchHistoryData.length>0">
            <p>
              历史记录
              <span @click="clearProd"></span>
            </p>
            <ul class="search-history-list">
              <li
                class="search-history-item"
                v-for="(item,index) in searchHistoryData"
                @click="selectedProd(item.keywords)"
                :key="index"
              >{{item.keywords}}</li>
            </ul>
            <!-- <div class="clear-history">
              <i></i>
              <span>清空历史搜索</span>
            </div>-->
          </div>
          <div class="search-hot">
            <p>热门搜索</p>
            <ul class="search-hot-list">
              <li
                class="search-hot-item"
                v-for="(item,index) in searchHotData"
                :key="index"
                @click="selectedProd(item.title)"
              >{{item.title}}</li>
            </ul>
          </div>
        </load-more>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { searchGoods, searchhotGoods } from "@/service/getData";
import { getLocalStorage, setLocalStorage } from "@/utils/mixin";
import LoadMore from "common/loadMore";
import { MessageBox, Toast } from "mint-ui";
export default {
  data() {
    return {
      searchVisiblie: false,
      popupVisible: false,
      focuskeyworldState: false,
      title: "",
      searchHistoryData: [],
      searchHotData: [],
      searchRusultData: []
    };
  },
  props: {
    Status: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    $route(to, from) {
      if (to.path != "/index" && to.path != "/searchRusult") {
        this.searchVisiblie = false;
      }
      this.searchHistoryData = JSON.parse(getLocalStorage("searchHistoryData"))
        ? JSON.parse(getLocalStorage("searchHistoryData"))
        : [];
    }
  },
  components: {
    LoadMore
  },

  computed: {},

  methods: {
    cnzzTrackEvent(category, action, label){
           _czc.push(["_trackEvent",category,action,label]);
      },
    async searchRusult(keyWords) {
      this.searchRusultData = [];
      let { Data } = await searchGoods({
        title: keyWords,
        page_size: 10,
        current_page: 1
      });
      this.searchRusultData = Data;
    },
    clearProd() {
      MessageBox.confirm("", {
        message: "确认删除全部历史记录吗?",
        title: "",
        cancelButtonClass: "cancelButton",
        confirmButtonClass: "confirmButton"
      })
        .then(action => {
          if (action == "confirm") {
            //确认的回调
            this.searchHistoryData = [];
            localStorage.removeItem("searchHistoryData");
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
          }
        });
    },
    async initData() {
      let Data = await searchhotGoods({});
      this.searchHotData = Data.data;
    },
    async selectedProd(prod) {
      if (prod.length < 1) {
        Toast("请输入搜索词");
        return;
      }
      this.cnzzTrackEvent('文字搜索','跳转搜索结果页','搜索内容：'+prod);
      this.$router.push({ path: "/searchRusult", query: { title: prod } });
      let HistoryData = getLocalStorage("searchHistoryData");
      if (!HistoryData)
        return setLocalStorage("searchHistoryData", [
          { keywords: prod, Date: new Date() }
        ]);
      try {
        let Data = JSON.parse(HistoryData);
        Data.unshift({ keywords: prod, Date: new Date() });
        var hash = {};
        Data = Data.reduce(function(arr, current) {
          hash[current.keywords]
            ? ""
            : (hash[current.keywords] = true && arr.push(current));
          return arr;
        }, []);

        setLocalStorage("searchHistoryData", Data);
      } catch (err) {}
    },

    truesearchGoods(event) {
      if (event.keyCode == 13) {
        //如果按的是enter键 13是enter
        event.preventDefault(); //禁止默认事件（默认是换行）
        this.selectedProd(this.title);
      }
    },
    focuskeyworldclick() {
      this.focuskeyworldState = true;
    },
    gotoView() {
      window.scroll(0, 0);
      this.focuskeyworldState = false;
    }
  },
  directives: {
    focus: {
      update: function(el, { value }) {
        if (value) {
          el.focus();
        }
      }
    }
  },
  mounted: function() {
    this.initData();

    try {
      this.searchHistoryData = JSON.parse(getLocalStorage("searchHistoryData"))
        ? JSON.parse(getLocalStorage("searchHistoryData"))
        : [];
    } catch (err) {}
  }
};
</script>
