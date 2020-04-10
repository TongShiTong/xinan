<template>
	<view class="receive">
		<view class="gift-box">
			<view class="xzgift">
				<view class="xzlb"><text class="juxing"></text>选择礼包</view>
				<view class="fanhui" @click="fabhui"></view>
			</view>
			<view class="gift-item" v-for="(item,index) in lqgiftList" :key="index">
				<view class="gift-img"><image :src="$ANNEX_URL+item.image"></image></view>
				<view class="title-box">
					<view>
						<view class="zhengbt">{{item.title}}</view>
						<view class="fubt">{{item.subtitle}}</view>
					</view>
					<view class="jiaqian">
						<!-- <view><text class="text1">￥</text><text class="text2">{{item.price}}</text></view> -->
						<view>x1</view>
					</view>
				</view>
			</view>
			<view class="yuan-box">
				<view class="yuan1"></view>
				<view class="yuan2"></view>
			</view>
			<view class="xzgift" style="margin-bottom: 60rpx;">
				<view class="xzlb"><text class="juxing"></text>填写收货地址</view>
			</view>
			<view class="input-title">收件人姓名</view>
			<view><input type="text" placeholder-style="color:#ccc" value="" v-model="param.name" placeholder="请输入收件人姓名" @blur="inputBlur1"/></view>
			<view class="input-title">手机号码</view>
			<view><input type="text" placeholder-style="color:#ccc" value="" v-model="param.mobile" placeholder="请输入手机号码" @blur="inputBlur2" /></view>
			<view @click="chooseLocation">
				<view class="input-title">选择省市区</view>
				<view><input type="text" placeholder-style="color:#ccc" value="" placeholder="请选择" disabled="true" v-model="param.province_city"/></view>
			</view>
			<view class="input-title">详细地址</view>
			<view><input type="text" placeholder-style="color:#ccc" value="" v-model="param.address" placeholder="请输入" @blur="inputBlur4" /></view>
			<!-- <view class="input-title">发货日期</view>
			<view><input type="text" placeholder-style="color:#ccc" value="" placeholder="请选择" /></view> -->
			<view class="yzm" v-if="yzm=='1'">
				<view>
					<view class="input-title">验证码</view>
					<view><input style="margin-bottom: 0;" placeholder-style="color:#ccc" type="text" value="" placeholder="点击更换验证码" @blur="inputBlur5" v-model="param.code" /></view>
				</view>
				<view class="yzn-img" @click="GetValidCode"><image :src="$ANNEX_URL + 'index.php?s=/captcha&j=' + j"></image></view>
			</view>
			<view class="input-title">备注</view>
			<view style="height: 80rpx;"><textarea style="width: 100%;height: 100%;" v-model="param.comments" type="text" placeholder-style="color:#ccc" value="" placeholder="选填, 请输入"  @blur="inputBlur6"/></view>
		</view>
		<w-picker
		    mode="region"
		    :defaultVal="['浙江省','杭州市','江干区']"
		    :areaCode="['33','3301','330108']"
		    :hideArea="false"
		    @confirm="onConfirm" 
			@cancel="onCancel"
		    ref="region" 
		    themeColor="#FF5A1F">
		</w-picker>
		<view class="xyb" @click="submit">
			确定
		</view>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components: {wPicker},
		data() {
			return {
				lqgiftList: [],
				yzm: '0',
				j: '',
				erweima: '',
				ismobile: true,
				param: {
					gp_id: '',
					gg_ids: '',
					name: '',
					mobile: '',
					province_city: '',
					address: '',
					comments: '',
					code: '',
					card_id: '',
					card_pwd: '',
				}
			}
		},
		onLoad(e) {
			console.log(e)
			this.yzm = uni.getStorageSync("captcha");
			this.lqgiftList = uni.getStorageSync("lqgiftList");
			this.param.gp_id = e.gp_id;
			this.param.gg_ids = e.gg_ids;
			this.param.name = uni.getStorageSync("name");
			this.param.mobile = uni.getStorageSync("mobile");
			this.param.province_city = uni.getStorageSync("province_city");
			this.param.address = uni.getStorageSync("address");
			this.param.code = uni.getStorageSync("code");
			this.param.comments = uni.getStorageSync("comments");
			this.param.card_id = uni.getStorageSync("card_id");
			this.param.card_pwd = uni.getStorageSync("card_pwd");
			if(this.yzm == '1') {
				this.GetValidCode()
			}
			console.log(this.lqgiftList)
		},
		methods: {
			fabhui() {
				uni.navigateBack({
					delta:1
				})
			},
			xiayibu() {
				uni.navigateTo({
					url: "/pages/logistics/logistics"
				})
			},
			chooseLocation: function () {
				if(this.ismobile) {
					this.$refs.region.show()
				}
			},
			onConfirm(val){
				this.param.province_city = val.result
				uni.setStorageSync("province_city",this.param.province_city)
				this.$refs.region.hide()
				//如果页面需要调用多个mode类型，可以根据mode处理结果渲染到哪里;
				// switch(this.mode){
				// 	case "date":
				// 		break;
				// }
			},
			onCancel(val) {
				this.$refs.region.hide()
			},
			GetValidCode() {
				// var oldstr = "http://jz.jiuduanfw.com/index.php?s=/captcha";
				// var newStr = oldstr + '&j=' + Math.random();
				var j = Math.random()
				this.j = j
				// this.$GET_FUN('index.php?s=/captcha', {'j': j}, res => {
				// 	console.log('2',res)
				// 	if (res.data.code == 1) {
				// 		this.erweima = res.data.data.image
				// 	}else {
						
				// 	}
				// });
			},
			inputBlur1(val) {
				var inputValue = event.target.value
				uni.setStorageSync("name",inputValue)
			},
			inputBlur2(val) {
				var inputValue = event.target.value
				uni.setStorageSync("mobile",inputValue)
				var mobileReg = /^1[3456789]\d{9}$/;
				if (!mobileReg.test(inputValue)) {
					this.ismobile = false
					uni.showToast({
						title: '请输入正确的手机号码'
					});
				}else {
					this.ismobile = true
				}
			},
			// inputBlur3(val) {
			// 	console.log(123,val)
			// 	var inputValue = event.target.value
			// 	uni.setStorageSync("province_city",inputValue)
			// },
			inputBlur4(val) {
				var inputValue = event.target.value
				uni.setStorageSync("address",inputValue)
			},
			inputBlur5(val) {
				var inputValue = event.target.value
				uni.setStorageSync("code",inputValue)
			},
			inputBlur6(val) {
				var inputValue = event.target.value
				uni.setStorageSync("comments",inputValue)
			},
			submit() {
				var _this = this
				var mobileReg = /^1[3456789]\d{9}$/;
				if (!mobileReg.test(this.param.mobile)) {
					uni.showToast({
						title: '请输入正确的手机号码'
					});
				}else {
					_this.$GET_FUN('api/gift_package/setGiftOrder', this.param, res => {
						if (res.data.code == 1) {
							uni.reLaunch({
								url: "/pages/success/success"
							})
						}else {
							uni.showToast({
								title: res.data.msg
							});
						}
					});
				}
			}
		}
	}
</script>

<style>
.receive {
	line-height: 1;
	background: linear-gradient(to top ,#FDC2B9 ,#FCC295);
	padding-bottom: 30rpx;
}
.gift-box {
	position: relative;
	top: 30rpx;
	margin: 0rpx 20rpx 70rpx;
	padding: 30rpx 30rpx 56rpx 42rpx;
	background: #fff;
	border-radius:24rpx;
}
.xzgift {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 44rpx;
	position: relative;
	left: -12rpx;
}
.fanhui {
	width: 18rpx;
	height: 18rpx;
	border-top: 4rpx solid #999999;
	border-right: 4rpx solid #999999;
	transform: rotate(45deg);
}
.xzlb {
	font-size: 34rpx;
	color: #1A1A1A;
	font-weight: bold;
}
.juxing{
	display: inline-block;
	width: 12rpx;
	height: 30rpx;
	background: #B32424;
	margin-right: 16rpx;
}
.gift-item {
	border-radius: 16rpx;
	display: flex;
	align-items: center;
	margin-bottom: 30rpx;
}
.gift-img {
	width: 200rpx;
	height: 200rpx;
	border-radius: 16rpx;
	margin-right: 24rpx;
	overflow: hidden;
}
.gift-img image {
	width: 100%;
	height: 100%;
}
	.title-box {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 28rpx;
		color: #1A1A1A;
		font-weight: 500;
		height: 200rpx;
		padding: 15rpx 0;
		box-sizing: border-box;
		width: 410rpx;
		line-height: 1.3;
	}
	.zhengbt {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.fubt {
		font-size: 24rpx;
		color: #999999;
		margin-top: 10rpx;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.jiaqian {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		font-size: 24rpx;
		color: #999999;
		font-weight: 500;
	}
	.text1 {
		font-size: 22rpx;
		color: #EB3026;
		font-weight: bold;
	}
	.text2 {
		font-size: 40rpx;
		color: #EB3026;
		font-weight: bold;
	}
	.yuan-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		margin: 45rpx 0;
	}
	.yuan1 {
		width: 30rpx;
		height: 30rpx;
		background: rgb(255, 195, 159);
		border-radius: 50%;
		position: absolute;
		left: -58rpx;
	}
	.yuan2 {
		width: 30rpx;
		height: 30rpx;
		background: rgb(255, 195, 159);
		border-radius: 50%;
		position: absolute;
		right: -44rpx;
	}
	.input-title {
		font-size: 28rpx;
		color: #050505;
		font-weight: bold;
		margin-bottom: 30rpx;
	}
	input {
		font-size: 36rpx;
		margin-bottom: 68rpx;
	}
	.yzm {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 68rpx;
	}
	.yzn-img {
		width: 190rpx;
		height: 86rpx;
		flex: 1;
	}
	.yzn-img image {
		width: 100%;
		height: 100%;
	}
	.xiayibu {
		width: 690rpx;
		height: 94rpx;
		border-radius:6rpx;
		line-height: 94rpx;
		text-align: center;
		margin: 92rpx auto 30rpx;
		background: #999999;
		font-size: 36rpx;
		color: #fff;
		font-weight: 500;
	}
	.xyb {
		width: 690rpx;
		height: 94rpx;
		border-radius:6rpx;
		line-height: 94rpx;
		text-align: center;
		margin: 92rpx auto 30rpx;
		background: linear-gradient(to top, #C82D2D, #E06363);
		font-size: 36rpx;
		color: #fff;
		font-weight: 500;
	}
</style>
