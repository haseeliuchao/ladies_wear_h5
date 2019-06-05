// wxShare.js
import Vue from 'vue'
import wx from 'weixin-js-sdk'
import {getSessionStorage} from '@/utils/mixin';
export default function wxShare({ title, desc, link, imgUrl} = {}) {
    // const foo = async () => {
    //     let Data = await getSignature({
    //         url: BASE64.encoder(location.href.split("#")[0])
    //     });
    //     let data = Data.data
    let wxData = JSON.parse(getSessionStorage("wxData"));
    console.log(wxData)
        wx.config({
            debug: false, // 开启调试模式
            appId: wxData.app_id, // 必填，公众号的唯一标识
            timestamp: wxData.timestamp, // 必填，生成签名的时间戳
            nonceStr: wxData.nonce_str, // 必填，生成签名的随机串
            signature: wxData.signature, // 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
    // }
    // foo();
    wx.ready(() => {
        wx.onMenuShareAppMessage({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接
            imgUrl:imgUrl, // 分享图标
        })
        wx.onMenuShareTimeline({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link:link, // 分享链接
            imgUrl: imgUrl, // 分享图标
        })
    })
    wx.error((res) => {
    })
}
// 为Vue的原型对象添加该方法，则所有vue实例都能继承该方法
Vue.prototype.$wxShare = wxShare