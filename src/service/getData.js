import Http from '@/utils/axios';

//member
export const login = (params) => new Http().require({api: '/api/login/sms',param:params}); //登录

export const loginpass = (params) => new Http().require({api: '/api/login',param:params}); //密码登录

export const loginInit = (params) => new Http().require({api: '/api/login/token/get',param:params}); //登录

export const loginUsreInit = (params) => new Http().require({api: '/api/login/token/user/get',param:params}); //登录

export const loginBind = (params) => new Http().require({api: '/api/bind/phone',param:params}); //登录

export const getUserInfo = (params) => new Http().require({api: '/api/member/info',param:params}); //获取个人信息

export const sendLoginMessage = (params) => new Http().require({api: '/api/sms/login',param: params}); //获取短信验证码  

export const sendPhoneMessage = (params) => new Http().require({api: '/api/sms/bind/phone',param: params}); //获取短信验证码  

export const registered = (params) => new Http().require({api: '/api/member/Registered',param: params}); //注册账号

export const editUserInfo = (params) => new Http().require({api: '/api/member/EditUserInfo',param: params}); //编辑用户信息

export const setPassword = (params) => new Http().require({api: '/api/register/password',param: params}); //设置密码

export const cardCoupon = (params) => new Http().require({api: '/api/member/Coupon',param: params}); //获取卡券


export const saveAddress = (params) => new Http().require({api: '/api/consignee/add',param: params}); //新建地址

export const updataAddress = (params) => new Http().require({api: '/api/consignee/upd',param: params}); //编辑地址

export const getAddressList = (params) => new Http().require({api: '/api/consignee/list',param: params}); //获取地址信息

export const getAddress = (params) => new Http().require({api: '/api/consignee/get',param: params}); //获取地址详细信息

export const getDefaultAddress = (params) => new Http().require({api: '/api/consignee/get',param: params}); //获取默认地址信息

export const removeAddress = (params) => new Http().require({api: '/api/consignee/del',param: params}); //删除地址

export const payByWallet = (params) => new Http().require({api: '/api/member/PayByWallet',param: params}); //余额支付

export const payToken = (params) => new Http().require({api: '/api/order/generate/token',param: params}); //余额支付

export const getSignature = (params) => new Http().require({api: '/api/jsapi/signature',param: params}); //分享

export const goshare = (params) => new Http().require({api: '/api/redirect',param: params}); //分享

export const payGetData = (params) => new Http().require({api: '/api/order/generate',param: params}); //余额支付

export const payDirect = (params) => new Http().require({api: '/api/order/pay',param: params}); //余额支付

export const shopFavorite = (params) => new Http().require({api: '/api/member/ShopFavorite',param: params}); //收藏店铺

export const getMyShopFavorite = (params) => new Http().require({api: '/api/member/GetMyShopFavorite',param: params}); //获取我收藏的店铺


//shop
export const getCategoryList = (params) => new Http().require({api: '/api/item/Category',param:params}); //获取分类列表

export const getSelectedProductList = (params) => new Http().require({api: '/api/member/shopping/cart/list',param:params}); //获取购物车列表

export const searchGoods = (params) => new Http().require({api: '/api/items',param:params}); //获取购物车列表


export const searchshopGoods = (params) => new Http().require({api: '/api/distributor/item/page',param:params}); //获取购物车列表

export const searchtwoGoods = (params) => new Http().require({api: '/api/ad/appoint/obj/list',param:params}); //获取购物车列表

export const searchhotGoods = (params) => new Http().require({api: '/api/hot/search/word/list',param:params}); //获取购物车列表

export const getProduct = (params) => new Http().require({api: '/api/item/details',param:params}); //获取购物车列表

export const getpageCount = (params) => new Http().require({api: '/api/distributor/item/count',param:params}); //获取购物车列表

export const itemUpd = (params) => new Http().require({api: '/api/distributor/item/upd',param:params}); //获取购物车列表

export const distributorItemDel = (params) => new Http().require({api: '/api/distributor/item/del',param:params}); //获取购物车列表

export const addProduct = (params) => new Http().require({api: '/api/distributor/spread/item',param:params}); //一键铺店

export const addProductAll = (params) => new Http().require({api: '/api/distributor/put/store/item',param:params}); //一键铺店


export const clearOldcartDate = (params) => new Http().require({api: '/api/member/shopping/cart/clean',param:params}); //清除失效购物车商品

export const clearOlditemDate = (params) => new Http().require({api: '/api/distributor/item/clean',param:params}); //一键铺店


export const lowerShelfgood = (params) => new Http().require({api: '/api/distributor/item/lowerShelf',param:params}); //商品下架

export const upperShelfgood = (params) => new Http().require({api: '/api/distributor/item/upperShelf',param:params}); //商品上架

export const getProductList = (params) => new Http().require({api: '/api/shop/GetProductList',param: params}); //获取

export const selectProduct = (params) => new Http().require({api: '/api/member/shopping/cart/add',param: params}); //获取


export const editCart = (params) => new Http().require({api: '/api/b/shopping/cart/add',param: params}); //获取

export const updselectProduct = (params) => new Http().require({api: '/api/member/shopping/cart/upd',param: params}); //获取

export const removeSelectedProduct = (params) => new Http().require({api: '/api/member/shopping/cart/del',param: params}); //获取

export const confirmSelectProduct = (params) => new Http().require({api: '/api/shop/ConfirmSelectProduct',param: params}); //获取

export const getConfirmSelectedProductList = (params) => new Http().require({api: '/api/order/preview',param: params}); //获取

export const createOrder = (params) => new Http().require({api: '/api/shop/CreateOrder',param: params}); //获取

export const finishOrder = (params) => new Http().require({api: '/api/order/receipt',param: params}); //确认收货

export const cancelOrder = (params) => new Http().require({api: '/api/order/cancel',param: params}); //取消订单

export const getOrderList = (params) => new Http().require({api: '/api/b/order/my',param: params}); //b端订单列表、


export const getOrderListC = (params) => new Http().require({api: '/api/c/order/my',param: params}); //c端订单列表


export const getOrderListB = (params) => new Http().require({api: '/api/distributor/order/list',param: params}); //获取B端店铺订单


export const getOrderListMemberC = (params) => new Http().require({api: '/api/distributor/client/order/list',param: params}); //获取B端某个用户订单



export const getOrderDetail = (params) => new Http().require({api: '/api/order/details',param: params}); //获取

export const getSaleDetail = (params) => new Http().require({api: '/api/post/sales/details',param: params}); //获取

export const logisticsSend = (params) => new Http().require({api: '/api/post/sales/logistics',param: params}); //获取

export const getOrder = (params) => new Http().require({api: '/api/items',param: params}); //获取

// export const getShopInfo = (params) => new Http().require({api: '/api/shop/GetShopInfo',param: params}); //获取

export const getCommentList = (params) => new Http().require({api: '/api/shop/GetCommentList',param: params}); //获取

export const logisticsInfo = (params) => new Http().require({api: '/api/order/query/logistics/info',param: params}); //获取物流信息
export const commitMessage = (params) => new Http().require({api: '/api/post/sales/add',param: params}); //获取

export const searchRenew = (params) => new Http().require({api: '/api/order/query/logistics/info',param: params}); //获取续费信息

export const getImgToken = (params) => new Http().require({api: '/api/token/get',param: params}); //获取续费信息

export const getImgCode = (params) => new Http().require({api: '/api/captcha/get',param: params}); //获取续费信息


//cms
export const getArticle = (params) => new Http().require({api: '/api/cms/GetArticle',param:params}); //获取文章信息

export const getArticleList = (params) => new Http().require({api: '/api/items',param:params}); //获取文章列表

export const getGoodsCategoryList = (params) => new Http().require({api: '/api/cms/GetGoodsCategoryList',param:params}); //获取咨询分类列表

export const getGoodsCategory = (params) => new Http().require({api: '/api/cms/GetGoodsCategory',param:params}); //获取咨询分类信息

export const getRecommend = (params) => new Http().require({api: '/api/cms/GetRecommend',param:params}); //获取咨询分类信息

export const getIndexCmsData = (params) => new Http().require({api: '/api/ad/advertising/list',param:params}); //获取首页的全部资讯

export const getShop = (params) => new Http().require({api: '/system/GetShop',param:params}); //获取购物车列表

// shopToB
export const getShopStastistics = (params) => new Http().require({api: '/api/distributor/stastistics',param: params}); //B端店铺统计信息
export const getShopInfo = (params) => new Http().require({api: '/api/distributor/details',param: params}); //B端店铺信息
export const saveShop = (params) => new Http().require({api: '/api/distributor/add',param: params}); //B端店铺创建修改

export const getMemberList = (params) => new Http().require({api: '/api/distributor/member/page',param: params}); //B端客户列表
export const getMemberDetails = (params) => new Http().require({api: '/api/distributor/member/details',param: params}); //B端客户详情（包括订单）
export const updMemberNick = (params) => new Http().require({api: '/api/distributor/member/upd',param: params}); //B端客户修改备注昵称
export const getOrderCount = (params) => new Http().require({api: '/api/order/count',param: params}); //B端客户管理查询订单总数


//withdrawal
export const accountRevenue = (params) => new Http().require({api: '/api/distributor/account/revenue',param: params}); //提现管理
export const accountRevenueDetail = (params) => new Http().require({api: '/api/search/bind/bank/card',param: params}); //提现账号详情
export const applyWithdrawsend = (params) => new Http().require({api: '/api/apply/withdraw',param: params}); //提现账号详情
export const saveBankCard = (params) => new Http().require({api: '/api/bind/bank/card',param: params}); //提现管理
export const withdrawBillList = (params) => new Http().require({api: '/api/withdraw/bill/list',param: params}); //提现管理
export const withdrawBillDetails = (params) => new Http().require({api: '/api/withdraw/bill/details',param: params}); //提现管理
export const settlementOrderB = (params) => new Http().require({api: '/api/b/distributor/settlement/order/list',param: params}); //提现管理


