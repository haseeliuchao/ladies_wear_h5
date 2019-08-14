import 'babel-polyfill'
import Vue from 'vue'
import Router from 'vue-router'
/* cms */
const Index = () => import ('page/cms/index')
const Article = () =>   import ('page/cms/article')
const ArticleDetail = () => import ('page/cms/articleDetail')
const IndexToC= () => import ('page/cmsc/indexToC')
    /* cms */

/* member */
const Pop = () => import ('page/member/pop')
const Helpcenter = () => import ('page/member/helpcenter')
const HelpcenterDetail = () => import ('page/member/helpcenterDetail')
const CustomerSever = () => import ('page/member/customerSever')
const Login = () => import ('page/member/login')
const LoginBlank = () => import ('page/member/loginBlank')
const BrowserLogin = () => import ('page/member/browserLogin')
const Myhome = () =>    import ('page/member/myhome')
const Register = () =>  import ('page/member/register')
const Forget = () =>    import ('page/member/forget')
const Sttings = () =>   import ('page/member/sttings')
const AddressList = () =>   import ('page/member/addressList')
const Address = () =>   import ('page/member/address')
const CardCoupon = () =>   import ('page/member/cardCoupon')
    /* member */

/* shop */
const Cart = () =>  import ('page/shop/cart')
const CartToC = () =>  import ('page/shopc/cartToc')
const CategoryToC = () =>  import ('page/shopc/categoryToc')
const Category = () =>  import ('page/shop/category')
const Order = () => import ('page/shop/order')
const OrderToC = () => import ('page/shopc/orderToc')
const OrderRusult = () => import ('page/shop/orderRusult')
const OrderList = () => import ('page/shop/orderList')
const OrderListToC = () => import ('page/shopc/orderListToc')
const Product = () =>   import ('page/shop/product')
const ProductToC = () =>   import ('page/shopc/productToc')
const SearchRusult = () =>  import ('page/shop/searchRusult')
const SearchImg = () =>   import ('page/shop/searchImg')
const SearchRenew = () =>   import ('page/shop/searchRenew')
const Shop = () =>  import ('page/shop/shop')
const CreateOrder = () =>   import ('page/shop/createOrder')
const CreateOrderToC = () =>   import ('page/shopc/createOrderToc')
const Review = () =>    import ('page/shop/review')
const LogisticsInfo = () =>    import ('page/shop/logisticsInfo')
const AfterSaleChoice = () =>    import ('page/shop/afterSaleChoice')
const AfterSale = () =>    import ('page/shop/afterSale')
const AfterSaleDetail = () =>    import ('page/shop/afterSaleDetail')
/* shop */

/* shopb */
const Goodslist = () =>  import ('page/shopb/goodslist')
const Goodclassifyenter = () =>  import ('page/shopb/goodclassifyenter')
const Goodclassifyedit = () =>  import ('page/shopb/goodclassifyedit')
const Goodclassifyeditall = () =>  import ('page/shopb/goodclassifyeditall')
const GoodorderList = () =>  import ('page/shopb/goodorderList')
const Goodorderdetail = () =>  import ('page/shopb/goodorderdetail')
const Goodedit = () =>  import ('page/shopb/goodedit')
const Goodeditall = () =>  import ('page/shopb/goodeditall')
/* shopb */


/* vip */
const VipGuide = () =>  import ('page/menbervip/vipGuide')
const VipPay = () =>  import ('page/menbervip/vipPay')
const VipPage = () =>  import ('page/menbervip/vipPage')
const VipInvite = () =>  import ('page/menbervip/vipInvite')
const VipPaystatus = () =>  import ('page/menbervip/vipPaystatus')
const InviteSpecial = () =>  import ('page/menbervip/inviteSpecial')
/* vip */

/* shopToB */
const MyShop = () => import ('page/shopToB/myShop')
const ShopApplicate = () => import ('page/shopToB/shopApplicate')
const ShopManage = () => import ('page/shopToB/shopManage')
const ShopManageTransition = () => import ('page/shopToB/shopManageTransition')
const MemberList = () => import ('page/shopToB/memberList')
const MemberDetails = () => import ('page/shopToB/memberDetails')
/* shopToB */


/* withdrawal */
const WithdrawalEntrance = () => import ('page/withdrawal/withdrawalEntrance')
const WithdrawalInfo = () => import ('page/withdrawal/withdrawalInfo')
const WithdrawalAccount = () => import ('page/withdrawal/withdrawalAccount')
const WithdrawalEdit = () => import ('page/withdrawal/withdrawalEdit')
const WithdrawalSuccess = () => import ('page/withdrawal/withdrawalSuccess')
const WithdrawalAccountBook = () => import ('page/withdrawal/withdrawalAccountBook')
const WithdrawalRecord = () => import ('page/withdrawal/withdrawalRecord')
/* withdrawal */

const appRouter = {
        // mode: 'history',
        routes: [{
                path: '',
                redirect: '/loginBlank'
            },
            /*C端店铺首页 */
            {
                path: '/indexToC/:distributor_id',
                name: 'indexToC',
                component: IndexToC,
                meta: { keepAlive: false}
            },
            /*C端店铺首页 */
            {
                path: '/index',
                name: 'index',
                component: Index,
                meta: { 
                    keepAlive: true,
                    Title:'惠眼识货',
                    title: '每天上新千款好货 快来开店赚钱', // 分享标题, 请自行替换
                    desc: '上万女装档口联合支持，专业客服提供五星级服务，卖女装速来惠眼识货', // 分享描述, 请自行替换
                    link: ''+process.env.API_ROOT+'/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'https://img.chaochujue.cn/ICON/2019/5/3/xiazai15591333517411559699219825.png',
                }
            }, 
            {
                path: '/article',
                name: 'article',
                component: Article,
                meta: { keepAlive: false }
            },
            {
                path: '/articleDetail/:Id',
                name: 'articleDetail',
                component: ArticleDetail,
                meta: { KeepAlive: false }
            },
            {
                path: '/login',
                name: 'login',
                component: Login,
                meta: { keepAlive: false ,
                    Title:'绑定手机号',
                   }
            },
            {
                path: '/loginBlank',
                name: 'loginBlank',
                component: LoginBlank,
                meta: { keepAlive: false }
            },
            {
                path: '/browserLogin',
                name: 'browserLogin',
                component: BrowserLogin,
                meta: { keepAlive: false ,
                    Title:'登录/注册',}
            },
            {
                path: '/myhome',
                name: 'myhome',
                component: Myhome,
                meta: { keepAlive: false,
                        Title:'我的'
                    }
            },
            {
                path: '/cardCoupon',
                name: 'cardCoupon',
                component: CardCoupon,
                meta: { keepAlive: false ,
                    Title:'优惠券',
                   }
            },
            {
                path: '/register',
                name: 'register',
                component: Register,
                meta: { keepAlive: false }
            },
            {
                path: '/forget',
                name: 'forget',
                component: Forget,
                meta: { keepAlive: false }
            },
            {
                path: '/cart',
                name: 'cart',
                component: Cart,
                meta: { keepAlive: false ,
                    Title:'购物车'
                    }
            },
            {
                path: '/category',
                name: 'category',
                component: Category,
                meta: { 
                    keepAlive: true ,
                    Title:'分类'
                    
                }
            },
            {
                path: '/review/:OrderNo',
                name: 'review',
                component: Review,
                meta: { keepAlive: false }
            },
            {
                path: '/order/:OrderNo',
                name: 'order',
                component: Order,
                meta: { keepAlive: false ,
                    Title:'订单详情',
                    }
            },
            {
                path: '/createOrder',
                name: 'createOrder',
                component: CreateOrder,
                meta: { keepAlive: false ,
                    Title:'创建订单',
                    }
            },
            {
                path: '/orderList/:tab?',
                name: 'orderList',
                component: OrderList,
                meta: { keepAlive: false ,
                    Title:'全部订单',
                    }
            }
            ,
            {
                path: '/orderListToC/:tab',
                name: 'orderListToC',
                component: OrderListToC,
                meta: { keepAlive: false}
            }
            ,
            {
                path: '/orderToC/:OrderNo',
                name: 'orderToC',
                component: OrderToC,
                meta: { keepAlive: false}
            }
            ,
            {
                path: '/createOrderToC',
                name: 'createOrderToC',
                component: CreateOrderToC,
                meta: { keepAlive: false }
            }
            ,
            {
                path: '/product/:id',
                name: 'product',
                component: Product,
                meta: { keepAlive: false,
                        Title:'商品详情'}
            }
            ,
            {
                path: '/productToC/:id',
                name: 'productToC',
                component: ProductToC,
                meta: { keepAlive: false }
            }
            ,
            {
                path: '/searchImg',
                name: 'searchImg',
                component: SearchImg,
                meta: { keepAlive: false ,
                    Title:'图搜',
                    title: '每天上新千款好货 快来开店赚钱', // 分享标题, 请自行替换
                    desc: '上万女装档口联合支持，专业客服提供五星级服务，卖女装速来惠眼识货', // 分享描述, 请自行替换
                    link: ''+process.env.API_ROOT+'/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'https://img.chaochujue.cn/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            },
            {
                path: '/searchRenew',
                name: 'searchRenew',
                component: SearchRenew,
                meta: { keepAlive: false }
            },
            {
                path: '/searchRusult',
                name: 'searchRusult',
                component: SearchRusult,
                meta: { keepAlive: true ,
                    Title:'搜索',
                    title: '每天上新千款好货 快来开店赚钱', // 分享标题, 请自行替换
                    desc: '上万女装档口联合支持，专业客服提供五星级服务，卖女装速来惠眼识货', // 分享描述, 请自行替换
                    link: ''+process.env.API_ROOT+'/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'https://img.chaochujue.cn/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            },
            {
                path: '/shop',
                name: 'shop',
                component: Shop,
                meta: { keepAlive: false }
            },
            {
                path: '/cartToC/:distributor_id',
                name: 'cartToC',
                component: CartToC,
                meta: { keepAlive: false }
            },
            {
                path: '/categoryToC/:distributor_id',
                name: 'categoryToC',
                component: CategoryToC,
                meta: { keepAlive: true }
            },
            {
                path: '/myShop',
                name: 'myShop',
                component: MyShop,
                meta: { keepAlive: false ,
                        Title:'我的小店',}
            },
            {
                path: '/shopApplicate',
                name: 'shopApplicate',
                component: ShopApplicate,
                meta: { keepAlive: false ,
                    Title:'申请开店'}
            },
            {
                path: '/shopManage',
                name: 'shopManage',
                component: ShopManage,
                meta: { keepAlive: false ,
                    Title:'店铺管理'}
            },
            {
                path: '/shopManageTransition',
                name: 'shopManageTransition',
                component: ShopManageTransition,
                meta: { keepAlive: false ,
                    Title:'店铺管理'}
            },
            {
                path: '/memberList',
                name: 'memberList',
                component: MemberList,
                meta: { keepAlive: false ,
                    Title:'客户列表'}
            },
            {
                path: '/memberDetails',
                name: 'memberDetails',
                component: MemberDetails,
                meta: { keepAlive: false ,
                    Title:'客户订单'}
            },
            {
                path: '/sttings',
                name: 'sttings',
                component: Sttings,
                meta: { keepAlive: false }
            },
            {
                path: '/addressList',
                name: 'addresslist',
                component: AddressList,
                meta: { keepAlive: false ,Title:'地址管理'}
            },
            {
                path: '/address/:consignee_id?',
                name: 'address',
                component: Address,
                meta: { keepAlive: false ,Title:'地址编辑'}
            },
            {
                path: '/logisticsInfo',
                name: 'logisticsInfo',
                component: LogisticsInfo,
                meta: { keepAlive: false ,
                    Title:'物流查询'}
            },
            {
                path: '/afterSaleChoice',
                name: 'afterSaleChoice',
                component: AfterSaleChoice,
                meta: { keepAlive: false ,
                    Title:'售后选择',
                    }
            },
            {
                path: '/afterSale',
                name: 'afterSale',
                component: AfterSale,
                meta: { keepAlive: false ,
                    Title:'售后编辑'}
            },
            {
                path: '/afterSaleDetail',
                name: 'afterSaleDetail',
                component: AfterSaleDetail,
                meta: { keepAlive: false ,
                    Title:'售后详情'}
            },
            {
                path: '/orderRusult',
                name: 'orderRusult',
                component: OrderRusult,
                meta: { keepAlive: false ,
                    Title:'支付结果'}
            }
            ,
            {
                path: '/goodslist/:distributor_id',
                name: 'goodslist',
                component: Goodslist,
                meta: { keepAlive: false ,Title:'全部商品',}
            }
            ,
            {
                path: '/goodclassifyenter',
                name: 'goodclassifyenter',
                component: Goodclassifyenter,
                meta: { keepAlive: false ,Title:'批量管理',}
            }
            ,
            {
                path: '/goodclassifyedit',
                name: 'goodclassifyedit',
                component: Goodclassifyedit,
                meta: { keepAlive: false ,Title:'管理分类',}
            }
            ,
            {
                path: '/goodclassifyeditall',
                name: 'goodclassifyeditall',
                component: Goodclassifyeditall,
                meta: { keepAlive: false ,Title:'调整分类',}
            }
            ,
            {
                path: '/vipGuide',
                name: 'vipGuide',
                component: VipGuide,
                meta: { keepAlive: true ,Title:'开通会员',}
            }
            ,
            {
                path: '/vipPay',
                name: 'vipPay',
                component: VipPay,
                meta: { keepAlive: false ,Title:'开通会员',}
            }
            ,
            {
                path: '/vipPage',
                name: 'vipPage',
                component: VipPage,
                meta: { keepAlive: false ,Title:'我的',}
            }
            ,
            {
                path: '/vipInvite',
                name: 'vipInvite',
                component: VipInvite,
                meta: { keepAlive: false ,Title:'兑换会员',}
            }
            ,
            {
                path: '/vipPaystatus',
                name: 'vipPaystatus',
                component: VipPaystatus,
                meta: { keepAlive: false ,Title:'支付结果',}
            }
            ,
            {
                path: '/inviteSpecial',
                name: 'inviteSpecial',
                component: InviteSpecial,
                meta: { keepAlive: false ,Title:'慧眼识货',}
            }
            ,
            {
                path: '/goodorderdetail/:OrderNo',
                name: 'goodorderdetail',
                component: Goodorderdetail,
                meta: { keepAlive: false ,Title:'订单详情'}
            }
            ,
            {
                path: '/goodedit/:itemId',
                name: 'goodedit',
                component: Goodedit,
                meta: { keepAlive: false ,Title:'商品编辑'}
            }
            ,
            {
                path: '/goodeditall/:distributor_id',
                name: 'goodeditall',
                component: Goodeditall,
                meta: { keepAlive: false ,Title:'商品分类'}
            }
            ,
            {
                path: '/goodorderList/:tab',
                name: 'goodorderList',
                component: GoodorderList,
                meta: { keepAlive: false ,Title:'全部订单' }
            }
            ,
            {
                path: '/helpcenter',
                name: 'helpcenter',
                component: Helpcenter,
                meta: { keepAlive: false , Title:'客服中心'}
            }
            ,
            {
                path: '/helpcenterDetail',
                name: 'helpcenterDetail',
                component: HelpcenterDetail,
                meta: { keepAlive: false , Title:'客服中心'}
            }
            ,
            {
                path: '/customerSever',
                name: 'customerSever',
                component: CustomerSever,
                meta: { keepAlive: false , Title:'客服服务'}
            }
            ,
            {
                path: '/withdrawalEntrance',
                name: 'withdrawalEntrance',
                component: WithdrawalEntrance,
                meta: { keepAlive: false , Title:'小店营收'}
            }
            ,
            {
                path: '/withdrawalInfo',
                name: 'withdrawalInfo',
                component: WithdrawalInfo,
                meta: { keepAlive: false , Title:'提现账户'}
            }
            ,
            {
                path: '/withdrawalAccount',
                name: 'withdrawalAccount',
                component: WithdrawalAccount,
                meta: { keepAlive: false , Title:'提现账户'}
            }
            ,
            {
                path: '/withdrawalEdit',
                name: 'withdrawalEdit',
                component: WithdrawalEdit,
                meta: { keepAlive: false , Title:'提现账户'}
            }
            ,
            {
                path: '/withdrawalSuccess',
                name: 'withdrawalSuccess',
                component: WithdrawalSuccess,
                meta: { keepAlive: false , Title:'提现账户'}
            }
            ,
            {
                path: '/withdrawalAccountBook',
                name: 'withdrawalAccountBook',
                component: WithdrawalAccountBook,
                meta: { keepAlive: false , Title:'我的账本'}
            }
            ,
            {
                path: '/withdrawalRecord',
                name: 'withdrawalRecord',
                component: WithdrawalRecord,
                meta: { keepAlive: false , Title:'提现记录'}
            }
            ,
            {
                path: '/pop',
                name: 'pop',
                component: Pop,
                meta: { keepAlive: false }
            }
        ],
       
            scrollBehavior(to, from, savedPosition) {
               
                if(savedPosition) {
                    return savedPosition
                } else {
                    return {
                        x: 0,
                        y: 1
                    }
                }
            }
          
        
    }
    // import example from '@/router/example'
    // example.map(i=>{appRouter.routes.push(i)}) // 部署线上记得吧这行代码注释掉

Vue.use(Router)


export default new Router(appRouter);