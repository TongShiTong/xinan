import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$BASE_URL = "http://gift.jiuduanfw.com/" //测试版  平时开发用这个
Vue.prototype.$ANNEX_URL = "http://gift.jiuduanfw.com/" //测试版  平时开发用这个

//复制粘贴的功能
Vue.prototype.$PIC = function(picUrl) {
	if (picUrl.indexOf('https://') == -1 && picUrl.indexOf('http://') == -1&& picUrl.indexOf('//') == -1) {
		picUrl = this.$ANNEX_URL + picUrl;
	}
	return picUrl;
}
// get请求方法
Vue.prototype.$GET_FUN = function(url, data, Success, Fail) {
	if (url.indexOf('https://') == -1 && url.indexOf('http://') == -1) {
		url = this.$BASE_URL + url;
	}
	let TOKEN=uni.getStorageSync("token");
	//console.log(TOKEN);
	uni.request({
		url: url, //接口地址
		data: data, //传入的数据
		method: "GET",
		dataType: "json",
		header: {
			// 'content-type': 'application/x-www-form-urlencoded' ,//自定义请求头信息
			'content-type': 'multipart/form-data' ,//自定义请求头信息
			'Accept': 'application/json, text/javascript, ' ,//自定义请求头信息
			'X-Requested-With': 'XMLHttpRequest' ,//自定义请求头信息
			'token':TOKEN,
		},
		success: (res) => {
			if (typeof Success === "function") {
				Success(res)
			}
		},
		fail: (errMsg) => {
			if (typeof Fail === "function") {
				Fail(errMsg)
			}
		}
	});
}

// post请求方法
Vue.prototype.$POST_FUN = function(url, data, Success, Fail) {
	if (url.indexOf('https://') == -1 && url.indexOf('http://') == -1) {
		url = this.$BASE_URL + url;
	}
	let TOKEN=uni.getStorageSync("token");
	uni.request({
		url: url, //接口地址
		data: data, //传入的数据
		method: "POST",
		dataType: "json",
		header: {
			'content-type': 'application/x-www-form-urlencoded' ,//自定义请求头信息
			'token':TOKEN,
		},
		success: (res) => {
			if (typeof Success === "function") {
				Success(res)
			}
		},
		fail: (errMsg) => {
			if (typeof Fail === "function") {
				Fail(errMsg)
			}
			uni.getNetworkType({
				success: function(res) {
					console.log(res.networkType);
					if (res.networkType == 'none') {
						uni.showToast({
							title: "请检查网络",
							icon: "none"
						})
					}
				}
			});
		}
	});
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
