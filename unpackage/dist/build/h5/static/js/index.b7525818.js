(function(e){function n(n){for(var o,r,s=n[0],c=n[1],u=n[2],g=0,f=[];g<s.length;g++)r=s[g],i[r]&&f.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,r=1;r<t.length;r++){var c=t[r];0!==i[c]&&(o=!1)}o&&(a.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},i={index:0},a=[];function r(e){return s.p+"static/js/"+({"pages-gift-gift":"pages-gift-gift","pages-home-home":"pages-home-home","pages-index-index":"pages-index-index","pages-logistics-logistics":"pages-logistics-logistics","pages-receive-receive":"pages-receive-receive","pages-success-success":"pages-success-success"}[e]||e)+"."+{"pages-gift-gift":"e73242f7","pages-home-home":"b0637c00","pages-index-index":"9b2d681f","pages-logistics-logistics":"01496d14","pages-receive-receive":"e6fdcb39","pages-success-success":"843ac0af"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=i[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=i[e]=[n,o]}));n.push(t[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(e),a=function(n){c.onerror=c.onload=null,clearTimeout(u);var t=i[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");r.type=o,r.request=a,t[1](r)}i[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var g=0;g<c.length;g++)n(c[g]);var p=u;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("65ef")},"0112":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={pages:{"pages/home/home":{},"pages/index/index":{navigationBarTitleText:"卡密验证"},"pages/gift/gift":{navigationBarTitleText:"选择礼包"},"pages/receive/receive":{navigationBarTitleText:"领取礼包"},"pages/logistics/logistics":{navigationBarTitleText:"溪楠"},"pages/success/success":{navigationBarTitleText:"兑换成功"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#EBEBEB",backgroundColor:"#EBEBEB"}};n.default=o},"2ec2":function(e,n,t){"use strict";var o,i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},a=[];t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}))},3089:function(e,n,t){"use strict";(function(e){var n=t("4ea4"),o=n(t("e143"));e["____AA0B5BE____"]=!0,delete e["____AA0B5BE____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#EBEBEB",backgroundColor:"#EBEBEB"}},e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},o.default.component("pages-home-home",(function(e){var n={component:t.e("pages-home-home").then(function(){return e(t("32a1"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-index-index",(function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("b706"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-gift-gift",(function(e){var n={component:t.e("pages-gift-gift").then(function(){return e(t("7d47"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-receive-receive",(function(e){var n={component:t.e("pages-receive-receive").then(function(){return e(t("dc5e"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-logistics-logistics",(function(e){var n={component:t.e("pages-logistics-logistics").then(function(){return e(t("12bb"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-success-success",(function(e){var n={component:t.e("pages-success-success").then(function(){return e(t("8832"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-home-home",(function(e){var n={component:t.e("pages-home-home").then(function(){return e(t("32a1"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/home/home",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"卡密验证"})},[e("pages-home-home",{slot:"page"})])}},meta:{id:1,name:"pages-home-home",isNVue:!1,pagePath:"pages/home/home",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"卡密验证"})},[e("pages-index-index",{slot:"page"})])}},meta:{name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",windowTop:44}},{path:"/pages/gift/gift",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"选择礼包"})},[e("pages-gift-gift",{slot:"page"})])}},meta:{name:"pages-gift-gift",isNVue:!1,pagePath:"pages/gift/gift",windowTop:44}},{path:"/pages/receive/receive",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"领取礼包"})},[e("pages-receive-receive",{slot:"page"})])}},meta:{name:"pages-receive-receive",isNVue:!1,pagePath:"pages/receive/receive",windowTop:44}},{path:"/pages/logistics/logistics",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"溪楠"})},[e("pages-logistics-logistics",{slot:"page"})])}},meta:{name:"pages-logistics-logistics",isNVue:!1,pagePath:"pages/logistics/logistics",windowTop:44}},{path:"/pages/success/success",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"兑换成功"})},[e("pages-success-success",{slot:"page"})])}},meta:{name:"pages-success-success",isNVue:!1,pagePath:"pages/success/success",windowTop:44}},{path:"/",alias:"/pages/home/home",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{})},[e("pages-home-home",{slot:"page"})])}},meta:{id:2,name:"pages-home-home",isNVue:!1,pagePath:"pages/home/home",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))},4252:function(e,n,t){var o=t("87d1");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=t("4f06").default;i("2e13d688",o,!0,{sourceMap:!1,shadowMode:!1})},"4bb1":function(e,n,t){"use strict";t.r(n);var o=t("8cce"),i=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=i.a},"65ef":function(e,n,t){"use strict";var o=t("4ea4");t("8e6e"),t("ac6a"),t("456d");var i=o(t("bd86"));t("cadf"),t("551c"),t("f751"),t("097d"),t("3089"),t("1c31"),t("921b");var a=o(t("e143")),r=o(t("c409"));function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}a.default.config.productionTip=!1,a.default.prototype.$BASE_URL="http://gift.jiuduanfw.com/",a.default.prototype.$ANNEX_URL="http://gift.jiuduanfw.com/",a.default.prototype.$PIC=function(e){return-1==e.indexOf("https://")&&-1==e.indexOf("http://")&&-1==e.indexOf("//")&&(e=this.$ANNEX_URL+e),e},a.default.prototype.$GET_FUN=function(e,n,t,o){-1==e.indexOf("https://")&&-1==e.indexOf("http://")&&(e=this.$BASE_URL+e);var i=uni.getStorageSync("token");uni.request({url:e,data:n,method:"GET",dataType:"json",header:{"content-type":"multipart/form-data",Accept:"application/json, text/javascript, ","X-Requested-With":"XMLHttpRequest",token:i},success:function(e){"function"===typeof t&&t(e)},fail:function(e){"function"===typeof o&&o(e)}})},a.default.prototype.$POST_FUN=function(e,n,t,o){-1==e.indexOf("https://")&&-1==e.indexOf("http://")&&(e=this.$BASE_URL+e);var i=uni.getStorageSync("token");uni.request({url:e,data:n,method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded",token:i},success:function(e){"function"===typeof t&&t(e)},fail:function(e){"function"===typeof o&&o(e),uni.getNetworkType({success:function(e){console.log(e.networkType),"none"==e.networkType&&uni.showToast({title:"请检查网络",icon:"none"})}})}})},r.default.mpType="app";var u=new a.default(c({},r.default));u.$mount()},"87d1":function(e,n,t){var o=t("24fb");n=o(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),e.exports=n},"8cce":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o},c409:function(e,n,t){"use strict";t.r(n);var o=t("2ec2"),i=t("4bb1");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("e891");var r,s=t("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=c.exports},e891:function(e,n,t){"use strict";var o=t("4252"),i=t.n(o);i.a},fce2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={appid:"__UNI__AA0B5BE"};n.default=o}});