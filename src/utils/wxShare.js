// wxShare.js
import Vue from 'vue'

import wx from 'weixin-js-sdk'
// import Axios from 'axios'
import utils from '@/utils/urlfun';
import {
    getSignature,
    goshare
} from '@/service/getData';

let mBasePath = '';
// 在组件外使用vux集成的微信jssdk
// import { WechatPlugin, AjaxPlugin } from 'vux'
// Vue.use(WechatPlugin)
// Vue.use(AjaxPlugin)

export default function wxShare({ title, desc, link, imgUrl} = {}) {
    const foo = async () => {
        let Data = await getSignature({
            url: BASE64.encoder(location.href.split("#")[0])
        });
        let data = Data.data
        wx.config({
            debug: false, // 开启调试模式
            appId: data.app_id, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonce_str, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
    }
    foo();
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