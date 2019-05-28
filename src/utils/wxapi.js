import wx from 'weixin-js-sdk'
// import Axios from 'axios'
import utils from '@/utils/urlfun';
import {
    getSignature,
    goshare
  } from '@/service/getData';

let mBasePath='';
const wxApi = {
  /**
  * [wxRegister 微信Api初始化]
  * @param  {Function} callback [ready回调函数]
  */
  wxRegister (callback) {
    // 这边的接口请换成你们自己的
    // , { timeout: 5000, withCredentials: true }
       const foo= async () =>{
        let Data = await getSignature({
            url: BASE64.encoder(location.href.split("#")[0])
        });
        let data = Data.data// PS: 这里根据你接口的返回值来使用
        mBasePath = Data.data.url;
        // mBasePath = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx920d461e1d3ba79b&redirect_uri=http%3A%2F%2Ftencent-ai.com%2Fm%2F&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';
        
        // let Datalink = await goshare({
        //   path: BASE64.encoder(location.href.split("#")[1])
        // });

        // http://tencent-ai.com/m/?code=071FjLBd0QmaRA1rdtCd0VkTBd0FjLB1&state=1
      wx.config({
        debug: false, // 开启调试模式
        appId: data.app_id, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonce_str, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      })
  
            wx.ready((res) => {
            // 如果需要定制ready回调方法
            if (callback) {
                callback()
            }
            })
      };

      foo();
      
  },
  /**
  * [ShareTimeline 微信分享到朋友圈]
  * @param {[type]} option [分享信息]
  * @param {[type]} success [成功回调]
  * @param {[type]} error   [失败回调]
  */
  ShareTimeline (option) {
    wx.onMenuShareTimeline({
      title: option.title, // 分享标题
      desc: option.desc, // 分享描述
      link: '/api/redirect?path='+BASE64.encoder(location.href.split("#")[1])+'', // 分享链接
      imgUrl: option.imgUrl, // 分享图标
      success () {
        // 用户成功分享后执行的回调函数
        option.success()
      },
      cancel () {
        // 用户取消分享后执行的回调函数
        option.error()
      }
    })
  },
  /**
  * [ShareAppMessage 微信分享给朋友]
  * @param {[type]} option [分享信息]
  * @param {[type]} success [成功回调]
  * @param {[type]} error   [失败回调]
  */
  ShareAppMessage (option) {
    wx.onMenuShareAppMessage({
      title: option.title, // 分享标题
      desc: option.desc, // 分享描述
      link: '/api/redirect?path='+BASE64.encoder(location.href.split("#")[1])+'', // 分享链接
      imgUrl: option.imgUrl, // 分享图标
      success () {
        // 用户成功分享后执行的回调函数
        option.success()
      },
      cancel () {
        // 用户取消分享后执行的回调函数
        option.error()
      }
    })
  }
}
export default wxApi