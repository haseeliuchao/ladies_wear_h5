import {
  getCategoryList,
  getSelectedProductList,
  searchshopGoods,
  searchtwoGoods,
  getProduct,
  itemUpd,
  distributorItemDel,
  getProductList,
  updselectProduct,
  removeSelectedProduct,
  confirmSelectProduct,
  finishOrder,
  cancelOrder,
  getConfirmSelectedProductList,
  createOrder,
  getOrderList,
  getOrder,
  getCommentList,
  commitMessage,

  getShopStastistics,
  getShopInfo,
  saveShop,
  getMemberList,
  getMemberDetails,
  updMemberNick,
  getOrderCount
} from '@/service/getData';
const shopToB = {
  state: {
    categoryData: null, //商品分类数据
    cartProductData: null, //加入的购物车数据
  },
  mutations: {
    SET_CATEGORY_DATA(state, categoryData) {
      state.categoryData = categoryData
    },
    SET_CARTPRODUCT_DATA(state, cartProductData) {
      state.cartProductData = cartProductData
    }
  },
  actions: {
    GetCategoryList({ //获取商品分类
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getCategoryList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    ConfirmSelectProduct({ //确认订单的商品
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        confirmSelectProduct(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetConfirmSelectedProductList({ //获取确认订单的商品
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getConfirmSelectedProductList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetCommentList({ //获取商品留言
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getCommentList(parameterData).then(response => {
          commit('SET_CARTPRODUCT_DATA', response);
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    CommitMessage({ //评价
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        commitMessage(parameterData).then(response => {
          commit('SET_CARTPRODUCT_DATA', response);
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetSelectedProductList({ //获取购物车信息
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getSelectedProductList(parameterData).then(response => {
          commit('SET_CARTPRODUCT_DATA', response);
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    SearchshopGoods({ // 搜索商品
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        searchshopGoods(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    SearchtwoGoods({ // 搜索商品
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        searchtwoGoods(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetProduct({ // 获取商品详情
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getProduct(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    ItemUpd({ // 获取商品详情
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        itemUpd(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    DistributorItemDel({ // 获取商品详情
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        distributorItemDel(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetProductList({ // 获取商品列表
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getProductList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    
    UpdselectProduct({ // 加入购物车
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        updselectProduct(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    RemoveSelectedProduct({ // 从购物车中移除
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        removeSelectedProduct(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    ConfirmSelectProduct({ // 确认下单商品
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        confirmSelectProduct(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetConfirmSelectedProductList({ // 获取确认下单商品
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getConfirmSelectedProductList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    CreateOrder({ // 创建订单
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        createOrder(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    FinishOrder({ // 确认收货
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        finishOrder(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    CancelOrder({ // 取消订单
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        cancelOrder(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetOrderList({ // 获取订单列表信息
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getOrderList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetOrder({ // 获取订单详情
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getOrder(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetShopStastistics({ // 获取店铺统计
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getShopStastistics(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetShopInfo({ // 获取店铺信息
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getShopInfo(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    SaveShop({ // 保存店铺信息
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        saveShop(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetMemberList({ // 获取客户列表
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getMemberList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetMemberDetails({ // 获取客户详情
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getMemberDetails(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    UpdMemberNick({ // 更新B端客户昵称
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        updMemberNick(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetOrderCount({ // 查询B端客户订单总数
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getOrderCount(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
  }
}

export default shopToB
