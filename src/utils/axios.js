import axios from 'axios';
import qs from 'qs';
import {
  Indicator,
  Toast
} from 'mint-ui';
import router from '@/router';
import {
	setSessionStorage,
	getSessionStorage,
	removeSessionStorage
} from '@/utils/mixin';
import {Format} from '@/utils/filters'
import {md5} from '@/utils/md5'
class Http {
  constructor(){
    this.Domain = 'https://awei.fun:3032';
  }
  
     

  require(options) {
    
    if (!options.api) throw new Error('api 不能为空');
    if (!options.param) { options.param = {} }; 
    if (!options.methods) { options.methods = 'POST' }; //不传递方法默认为POST
    if (!options.loadingVisble) { options.loadingVisble = true }; // 不传递默认开启loading
    if (!options.loadingText) { options.loadingText = '加载中...' };
    if(options.loadingVisble){
        Indicator.open({
            text: options.loadingText,
            spinnerType: 'snake'
        })
    };
    // const postLogin=function(data){
    //     var app_key="689cf76eb3c96b7cb3ddb07e4e5efe54";
    //     var pwd="5ef962cdf5700cc8e97e3660ca065e72";
    //     var myJsDate=Format(new Date(),"yyyyMMddhhmmss");
    //     Array.prototype.unique3 = function(){           //去重
    //       var res = [];
    //       var json = {};
    //       for(var i = 0; i < this.length; i++){
    //         if(!json[this[i]]){
    //           res.push(this[i]);
    //           json[this[i]] = 1;
    //         }
    //       }
    //       return res;
    //     };
    //     var  ifurl=function (){
    //         data.app_key=app_key;
    //         data.date=myJsDate;
    //         data.access_token=undefined;
    //         data.session_token=undefined;
    //         var arr = [];
    //         for (var i in data) {
    //             arr.push(i+"="+data[i]); //属性
    //         }
    //         return arr.unique3().sort().join("&");
    //     };
    //     if(data!=undefined){
    //         data.api_sign=md5(pwd+ifurl()+pwd);
    //       }else{
    //         data={
    //           access_token:window.localStorage.access_token,
    //           app_key:app_key,
    //           date:myJsDate,
    //           session_token:window.localStorage.session_token
    //         };
    //         data.api_sign=md5(pwd+"access_token="+window.localStorage.access_token+"&app_key="+app_key+"&date="+myJsDate+"&session_token="+window.localStorage.session_token+pwd);
    //       }
    //       var arr = [];
    //         for (var i in data) {
    //             arr.push(i+"="+data[i]); //属性
    //         }
    //         // return arr.unique3().sort().join("&");
    //       return data;
    //     }
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
                // 'Content-Type':'application/x-www-form-urlencoded'
                'Content-Type':'text/plain'
            },
            // qs.stringify(postLogin(options.param))
            data:options.param
        }).then(response => {
            Indicator.close();
            if(response.data.Code === 0){ //请求成功
                return resolve(response.data)
            }else{
                if(response.data.Code === 2){ //未登录
                //   router.push('/Login')
                }
                Toast({
                    message: response.data.Message,
                    position: 'bottom'
                });
                return reject(response.data)
            }
        },error => {
            Indicator.close();
            Toast({
                message: error,
                position: 'bottom'
            });
            return reject()
        })
    })
  }
}

export default Http;
