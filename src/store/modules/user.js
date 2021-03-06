import {
  login,
  loginpass,
  loginInit,
  loginUsreInit,
  loginBind,
  getUserInfo,
  sendPhoneMessage,
  sendLoginMessage,
  registered,
  editUserInfo,
  setPassword,
  saveAddress,
  updataAddress,
  saveBankCard,
  getAddressList,
  getDefaultAddress,
  removeAddress,
  getAddress,
  payByWallet,
  shopFavorite,
  getMyShopFavorite,
  cardCoupon,
  searchImg,
  searchRenew,
  logisticsInfo
} from '@/service/getData';
import {
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage
} from '@/utils/mixin';
import {
  Toast
} from 'mint-ui';
const user = {
  state: {
    userInfo: null, //用户信息数据
    addressList: null, //用户地址数据
  },
  mutations: {
    SET_USERINFO_DATA(state, userInfo) {
      state.userInfo = userInfo
    },
    SET_ADDRESSLIST_DATA(state, addressList) {
      state.addressList = addressList
    }
  },
  actions: {
    LogOut({ //退出登录
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        removeSessionStorage('MemberToken');
        commit('SET_USERINFO_DATA',null)        
        resolve();
      })
    },
    Login({ //登录
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        login(parameterData).then(response => {
          setSessionStorage('MemberToken', response.Data);
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    Loginpass({ //登录
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        loginpass(parameterData).then(response => {
          setSessionStorage('MemberToken', response.Data);
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    LoginInit({ //登录
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        loginInit(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    LoginUsreInit({ //登录
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        loginUsreInit(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    LoginBind({ //登录
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        loginBind(parameterData).then(response => {
          // setSessionStorage('MemberToken', response.Data);
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    CardCoupon({ //卡券
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        cardCoupon(parameterData).then(response => {
          // setSessionStorage('MemberToken', response.Data);
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    ShopFavorite({ //收藏店铺
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        shopFavorite(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    PayByWallet({ //余额支付
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        payByWallet(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetDefaultAddress({ //获取默认地址信息
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getDefaultAddress(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetAddress({ //获取地址详情
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getAddress(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    SaveAddress({ //新增地址
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        saveAddress(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    UpdataAddress({ //编辑地址
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        updataAddress(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    SaveBankCard({ //编辑地址
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        saveBankCard(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    RemoveAddress({ //删除地址
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        removeAddress(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetAddressList({ //获取用户地址信息
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getAddressList(parameterData).then(response => {
          commit('SET_ADDRESSLIST_DATA', response)
          resolve(response);
        }, err => {
          reject(err)
        })
      })
    },
    GetUserInfo({ //获取用户信息
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getUserInfo(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    Registered({ //注册账号
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        registered(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    SetPassword({ //设置密码
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        setPassword(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    SendPhoneMessage({ //获取验证码
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        sendPhoneMessage(parameterData).then(response => {
          if (response.code !== 10000) return Toast({duration: 1000,
            message: response.msg
          })
          return resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    SendLoginMessage({ //获取验证码
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        sendLoginMessage(parameterData).then(response => {
          if (response.code !== 10000) return Toast({duration: 1000,
            message: response.msg
          })
          return resolve(response)
        }, err => {
          reject(err)
        })
      })
    },

    LogisticsInfo({ //获取物流信息
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        sendPhoneMessage(parameterData).then(response => {
          if (response.Code !== 0) return Toast({duration: 1000,
            message: response.Message,
            position: 'bottom'
          })
          return resolve(response)
        }, err => {
          reject(err)
        })
      })
    },

    SearchRenew({//获取续费信息
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        sendPhoneMessage(parameterData).then(response => {
          if (response.Code !== 0) return Toast({duration: 1000,
            message: response.Message,
            position: 'bottom'
          })
          return resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    
  }
}

export default user
