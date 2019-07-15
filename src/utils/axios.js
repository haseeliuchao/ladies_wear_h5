var root = process.env.API_ROOT 
import axios from 'axios';
import qs from 'qs';
import {
  Indicator,
  Toast
} from 'mint-ui';
import router from '@/router';
import {
	setSessionStorage,
	setLocalStorage,
  getSessionStorage,
  getLocalStorage,
  removeSessionStorage,
  isWeiXin
} from '@/utils/mixin';
import {Format} from '@/utils/filters'
import {md5} from '@/utils/md5'
import utils from '@/utils/urlfun';
import {
  mapGetters,
  mapMutations
} from 'vuex';
class Http {
  constructor(){
    // this.Domain = 'http://tencent-ai.com/mop/';
    // this.Domain = 'http://192.168.9.250:8182';
    // this.Domain = 'http://192.168.11.242:8080';
    // this.Domain = 'http://param.iask.in/mop/';
    this.Domain = root;
  }
  
     

  require(options) {
    if (!options.api) throw new Error('api 不能为空');
    if (!options.param) { options.param = {} }; 
    if (!options.methods) { options.methods = 'POST' }; //不传递方法默认为POST
    if (!options.loadingVisble) { options.loadingVisble = true }; // 不传递默认开启loading
    if (!options.loadingText) { options.loadingText = '加载中...' };
    if(options.loadingVisble){
      if(options.param.url==undefined||options.param.url==null||options.param.url.length==0){
        Indicator.open({
          text: options.loadingText,
          spinnerType: 'snake'
        })
      }
    };
    options.param.api_sign=null;
    const postLogin=function(data){
        var app_key="";
        var pwd="";
        if(isWeiXin('code')){
          app_key='CFBF6F4C8292010FF4193C507B2D9F80';
          pwd='C6DB7C0AE306CDDAA1087A9542762B10'
        }else{
          app_key='65E232ED43477B2F5CB4413023548FCE';
          pwd='7BB4CB59062C7C9D3717689B901013DD'
        }
        data.api_sign=null;
        var myJsDate=Format(new Date(),"yyyyMMddhhmmss");
        data.access_token=getSessionStorage('access_token');
        data.session_token=getSessionStorage('session_token');
        data.app_key=app_key
        data.date=myJsDate;
        for (var j in data) {
          // arr.push(i+"="+data[i]); //属性
          if(data[j]==undefined){
            delete data[j]
          }
        }
        Array.prototype.unique3 = function(){           //去重
          var res = [];
          var json = {};
          for(var i = 0; i < this.length; i++){
            if(!json[this[i]]){
              res.push(this[i]);
              json[this[i]] = 1;
            }
          }
          return res;
        };
        var  ifurl=function (){
            var arr = [];
            for (var i in data) {
                arr.push(i+"="+data[i]); //属性
            }
            var arrstr= arr.unique3().sort().join("&")
            return arrstr;
        };
        if(data!=undefined){
            data.api_sign=md5(pwd+ifurl()+pwd);
          }else{
            data={
              access_token:window.sessionStorage.access_token,
              app_key:app_key,
              date:myJsDate,
              session_token:window.sessionStorage.session_token
            };
            data.api_sign=md5(pwd+"access_token="+window.sessionStorage.access_token+"&app_key="+app_key+"&date="+myJsDate+"&session_token="+window.sessionStorage.session_token+pwd);
          }
          var arr = [];
            for (var i in data) {
                arr.push(i+"="+data[i]); //属性
            }
            // return arr.unique3().sort().join("&");
          return data;
        }
    // options.param.MemberToken = options.param.MemberToken ? options.param.MemberToken : getSessionStorage('MemberToken');
    return new Promise((resolve,reject) => {
      
        return axios({
            method: options.methods,
            url: options.api,
            baseURL: this.Domain,  
            // `withCredentials` indicates whether or not cross-site Access-Control requests
            // should be made using credentials
            // withCredentials: true, // default
            headers: {
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
                // 'Content-Type':'text/plain'
            },
            
            // data:options.param
            data:qs.stringify(postLogin(options.param)) 
        }).then(response => {
            Indicator.close();
            if(response.data.code!=10000){
              if(response.data.code==20025||response.data.code==20028||response.data.code==20026){
                if(!isWeiXin('code')){
                  router.push('/browserLogin')
                }else{
                  router.push('/login')
                  // window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx920d461e1d3ba79b&redirect_uri=http%3A%2F%2Ftencent-ai.com%2Fm%2F&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
                }
              }
              else if(response.data.code==30029){
                if(isWeiXin('code')){
                  setSessionStorage('session_token',response.data.data.session_token);
                  setSessionStorage('access_token',response.data.data.access_token);
                  setSessionStorage('open_id',response.data.data.open_id);
                  router.push('/login')
                }
              }else if(response.data.code!=20018){
                if(response.data.code!=40003){
                  Toast({duration: 1000,
                    message: response.data.msg
                  });
                }
                return resolve(response.data)
              }
           }
           return resolve(response.data)
        },error => {
            Indicator.close();
            Toast({duration: 1000,
                message: error,
                position: 'bottom'
            });
            return reject()
        })
    })
  }
}

export default Http;
