import 'babel-polyfill'
import Vue from 'vue'
import Router from 'vue-router'
import wxapi from '@/utils/wxapi';
/* cms */
const Index = () => import ('page/cms/index')
const Article = () =>   import ('page/cms/article')
const ArticleDetail = () => import ('page/cms/articleDetail')
const IndexToC= () => import ('page/cmsc/indexToC')
    /* cms */

/* member */
const Pop = () => import ('page/member/pop')
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
const CartToc = () =>  import ('page/shopc/cartToc')
const Category = () =>  import ('page/shop/category')
const Order = () => import ('page/shop/order')
const OrderRusult = () => import ('page/shop/orderRusult')
const OrderList = () => import ('page/shop/orderList')
const Product = () =>   import ('page/shop/product')
const ProductToc = () =>   import ('page/shopc/productToc')
const SearchRusult = () =>  import ('page/shop/searchRusult')
const SearchImg = () =>   import ('page/shop/searchImg')
const SearchRenew = () =>   import ('page/shop/searchRenew')
const Shop = () =>  import ('page/shop/shop')
const CreateOrder = () =>   import ('page/shop/createOrder')
const Review = () =>    import ('page/shop/review')
const LogisticsInfo = () =>    import ('page/shop/logisticsInfo')
const AfterSaleChoice = () =>    import ('page/shop/afterSaleChoice')
const AfterSale = () =>    import ('page/shop/afterSale')
const AfterSaleDetail = () =>    import ('page/shop/afterSaleDetail')
/* shop */

/* shopb */
const Goodslist = () =>  import ('page/shopb/goodslist')
const GoodorderList = () =>  import ('page/shopb/goodorderList')
const Goodedit = () =>  import ('page/shopb/goodedit')
/* shopb */



/* shopToB */
const MyShop = () => import ('page/shopToB/myShop')
const ShopApplicate = () => import ('page/shopToB/shopApplicate')
const ShopManage = () => import ('page/shopToB/shopManage')
const MemberList = () => import ('page/shopToB/memberList')
const MemberDetails = () => import ('page/shopToB/memberDetails')
/* shopToB */

const appRouter = {
        // mode: 'history',
        routes: [{
                path: '',
                redirect: '/loginBlank'
            },
            /*C端店铺首页 */
            {
                path: '/indexToC',
                name: 'indexToC',
                component: IndexToC,
                meta: { keepAlive: false }
            },
            /*C端店铺首页 */
            {
                path: '/index',
                name: 'index',
                component: Index,
                meta: { 
                    keepAlive: true,
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png',
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
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
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
                meta: { keepAlive: false }
            },
            {
                path: '/myhome',
                name: 'myhome',
                component: Myhome,
                meta: { keepAlive: false ,
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            },
            {
                path: '/cardCoupon',
                name: 'cardCoupon',
                component: CardCoupon,
                meta: { keepAlive: false ,
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
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
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            },
            {
                path: '/category',
                name: 'category',
                component: Category,
                meta: { 
                    keepAlive: true ,
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path='+BASE64.encoder('/category')+'', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png',
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
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            },
            {
                path: '/createOrder',
                name: 'createOrder',
                component: CreateOrder,
                meta: { keepAlive: false ,
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            },
            {
                path: '/orderList/:tab?',
                name: 'orderList',
                component: OrderList,
                meta: { keepAlive: false ,
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            }
            ,
            {
                path: '/product/:id',
                name: 'product',
                component: Product,
                meta: { keepAlive: false }
            }
            ,
            {
                path: '/productToc/:id',
                name: 'productToc',
                component: ProductToc,
                meta: { keepAlive: false }
            }
            ,
            {
                path: '/searchImg',
                name: 'searchImg',
                component: SearchImg,
                meta: { keepAlive: false ,
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
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
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            },
            {
                path: '/shop',
                name: 'shop',
                component: Shop,
                meta: { keepAlive: false }
            },
            {
                path: '/cartToc/:distributor_id',
                name: 'cartToc',
                component: CartToc,
                meta: { keepAlive: false }
            },
            {
                path: '/myShop',
                name: 'myShop',
                component: MyShop,
                meta: { keepAlive: false }
            },
            {
                path: '/shopApplicate',
                name: 'shopApplicate',
                component: ShopApplicate,
                meta: { keepAlive: false }
            },
            {
                path: '/shopManage',
                name: 'shopManage',
                component: ShopManage,
                meta: { keepAlive: false }
            },
            {
                path: '/memberList',
                name: 'memberList',
                component: MemberList,
                meta: { keepAlive: false }
            },
            {
                path: '/memberDetails',
                name: 'memberDetails',
                component: MemberDetails,
                meta: { keepAlive: false }
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
                meta: { keepAlive: false ,
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            },
            {
                path: '/address/:consignee_id?',
                name: 'address',
                component: Address,
                meta: { keepAlive: false ,
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            },
            {
                path: '/logisticsInfo',
                name: 'logisticsInfo',
                component: LogisticsInfo,
                meta: { keepAlive: false ,
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            },
            {
                path: '/afterSaleChoice',
                name: 'afterSaleChoice',
                component: AfterSaleChoice,
                meta: { keepAlive: false ,
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            },
            {
                path: '/afterSale',
                name: 'afterSale',
                component: AfterSale,
                meta: { keepAlive: false ,
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            },
            {
                path: '/afterSaleDetail',
                name: 'afterSaleDetail',
                component: AfterSaleDetail,
                meta: { keepAlive: false ,
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            },
            {
                path: '/orderRusult',
                name: 'orderRusult',
                component: OrderRusult,
                meta: { keepAlive: false ,
                    title: '送你开店秘籍，还不来取？', // 分享标题, 请自行替换
                    desc: '开店就用惠眼识货，7*12小时技术支持，专业客服全天候答疑解问', // 分享描述, 请自行替换
                    link: 'http://tencent-ai.com/mop/api/redirect?path=', // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'http://imagechao.test.upcdn.net/ICON/2019/5/3/xiazai15591333517411559699219825.png'}
            },
            {
                path: '/goodslist/:distributor_id',
                name: 'goodslist',
                component: Goodslist,
                meta: { keepAlive: false }
            }
            ,
            {
                path: '/goodedit/:itemId',
                name: 'goodedit',
                component: Goodedit,
                meta: { keepAlive: false }
            }
            ,
            {
                path: '/goodorderList/:distributor_id',
                name: 'goodorderList',
                component: GoodorderList,
                meta: { keepAlive: false }
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
                        y: 0
                    }
                }
            }
          
        
    }
    // import example from '@/router/example'
    // example.map(i=>{appRouter.routes.push(i)}) // 部署线上记得吧这行代码注释掉

Vue.use(Router)


export default new Router(appRouter);