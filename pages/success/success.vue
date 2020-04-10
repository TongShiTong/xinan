<template>
	<view class="receive">
		<view class="info-box">
			<view class="lqcg-img"><image src="../../static/zu7.png" mode=""></image></view>
			<view class="info">
				<view class="title">您的礼品已经兑换成功</view>
				<view class="jkfh">我们会尽快为您发货</view>
				<view class="ckxx" @click="chanKan">查看信息</view>
				<view class="lpk">礼品卡兑换成功后，即刻失效</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			chanKan() {
				uni.navigateTo({
					url: "/pages/logistics/logistics"
				})
			}
		}
	}
</script>

<style>
.receive {
	line-height: 1;
	background: linear-gradient(to top ,#FDC2B9 ,#FCC295);
	padding-bottom: 30rpx;
	padding-top: 30rpx;
	min-height: 91vh;
}
.info-box {
	width: 710rpx;
	margin: 0 auto;
	border-radius: 24rpx;
	overflow: hidden;
}
.lqcg-img {
	width: 100%;
	height: 310rpx;
}
.lqcg-img image {
	width: 100%;
	height: 100%;
}
.info {
	width: 100%;
	text-align: center;
	color: #666666;
	font-weight: bold;
	font-size: 24rpx;
	background: #FFFFFF;
	padding-bottom: 100rpx;
}
.title {
	color: #1A1A1A;
	font-size: 34rpx;
	padding-top: 90rpx;
}
.jkfh {
	font-size: 28rpx;
	margin: 32rpx 0 96rpx;
}
.ckxx {
	width: 500rpx;
	height: 94rpx;
	border-radius:6rpx;
	line-height: 94rpx;
	text-align: center;
	margin: 92rpx auto 40rpx;
	background: linear-gradient(to top, #C82D2D, #E06363);
	font-size: 36rpx;
	color: #fff;
	font-weight: 500;
}
</style>
