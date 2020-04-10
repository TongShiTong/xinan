<template>
	<view class="content">
		<image class="logo" :src="$ANNEX_URL + giftimg"></image>
		<view class="text-area">
			<view style="height: 336rpx;"></view>
			<view class="info-box">
				<view class="title">礼品兑换中心</view>
				<view class="input-title">输入卡号</view>
				<view><input type="text" placeholder-style="color:#ccc" value="" placeholder="请输入礼品卡号" v-model="giftInfo.card_id"/></view>
				<view class="input-title">输入密码</view>
				<view><input type="text" value="" placeholder-style="color:#ccc" placeholder="请输入涂层密码" v-model="giftInfo.card_pwd"/></view>
				<view class="yzm" v-if="captcha=='1'">
					<view>
						<view class="input-title">验证码</view>
						<view><input style="margin-bottom: 0;" placeholder-style="color:#ccc" type="text" value="" placeholder="点击更换验证码" v-model="giftInfo.code"/></view>
					</view>
					<view class="yzn-img" @click="GetValidCode"><image :src="$ANNEX_URL + 'index.php?s=/captcha&j=' + j"></image></view>
				</view>
				<view class="btn" @click="submit">提交 </view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				giftimg: '',
				j:'',
				captcha: '0',
				erweima: '',
				giftInfo: {
					card_id: '',
					card_pwd: '',
					code: ''
				}
			}
		},
		onLoad(e) {
			var id = e.id
			var _this = this;
			_this.$GET_FUN('api/gift_package/getGiftPackage', {'id': id}, res => {
				// console.log(res)
				if (res.data.code == 1) {
					this.giftimg = res.data.data.gift.image
				}else {
					uni.showToast({
						title: res.data.msg
					});
				}
			});
			_this.$GET_FUN('api/gift_package/config',{}, res => {
				if (res.data.code == 1) {
					uni.setStorageSync("captcha",res.data.data.captcha)
					// uni.setStorageSync("card_pwd",card_pwd)
					if(res.data.data.captcha=='1') {
						this.captcha = res.data.data.captcha
						this.GetValidCode()
					}
				}else {
					
				}
			}, res => {console.log(4567)});
		},
		methods: {
			submit() {
				var _this = this;
				var card_id = this.giftInfo.card_id
				var card_pwd = this.giftInfo.card_pwd
				var code = this.giftInfo.code
				// console.log(this.giftInfo)
				// 兑换礼包
				if(this.giftInfo.card_id) {
					if(this.giftInfo.card_pwd) {
						_this.$GET_FUN('api/gift_package/receiveGiftPackage', this.giftInfo, res => {
							console.log(res)
							if (res.data.code == 1) {
								uni.setStorageSync("card_id",card_id)
								uni.setStorageSync("card_pwd",card_pwd)
								let gp_id = res.data.data.giftCardcode.gp_id
								if(res.data.data.giftCardcode.card_status=="2") {
									uni.navigateTo({
										url: "/pages/gift/gift?gp_id=" + gp_id
									})
								}else if(res.data.data.giftCardcode.card_status=="3") {
									uni.navigateTo({
										url: "/pages/success/success"
									})
								}else {
									uni.showToast({
										title: res.data.msg
									});
								}
								
							}else {
								uni.showToast({
									title: res.data.msg
								});
							}
						});
					}else {
						uni.showToast({
							title: '请输入密码'
						});
					}
				}else{
					uni.showToast({
						title: '请输入卡号'
					});
				}
			},
			GetValidCode() {
				// var oldstr = "http://jz.jiuduanfw.com/index.php?s=/captcha";
				// var newStr = oldstr + '&j=' + Math.random();
				var j = Math.random()
				this.j = j
				// this.$GET_FUN('index.php?s=/captcha', {'j': j}, res => {
				// 	console.log('2',res)
				// 	if (res.data.code == 1) {
					
				// 	}else {
						
				// 	}
				// });
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.logo {
		height: 366rpx;
		width: 750rpx;
	}

	.text-area {
		width: 100%;
		position: absolute;
		top: 0;
	}
	.info-box {
		background: #FFFFFF;
		border-top-left-radius: 24rpx;
		border-top-right-radius: 24rpx;
		line-height: 1;
		padding: 80rpx 30rpx 240rpx;
		box-sizing: border-box;
	}
	.title {
		font-size: 56rpx;
		color: #1A1A1A;
		font-weight: 800;
		margin-bottom: 140rpx;
	}
	.input-title {
		font-size: 30rpx;
		color: #050505;
		font-weight: bold;
		margin-bottom: 30rpx;
	}
	input {
		font-size: 36rpx;
		margin-bottom: 74rpx;
	}
	.yzm {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 82rpx;
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
	.btn {
		width: 500rpx;
		height: 94rpx;
		margin: 0 auto;
		text-align: center;
		line-height: 94rpx;
		border-radius: 6rpx;
		background: linear-gradient(to top, #C82D2D, #E06363);
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
</style>
