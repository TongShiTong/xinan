<template>
	<view class="receive">
		<view class="qxz">您已经领取过该礼包</view>
		<view class="wl-box">
			<view class="ckwl">物流信息</view>
			<view v-if="status==1" v-for="(item,index) in talk" :key="index" class="wlbcz">
				<view class="timebcz">{{item.time}}</view>
				<view>{{item.context}}</view>
			</view>
			<view v-if="status==2">
				<view class="kuaidi" @click="copy">{{kd_company}}<text style="color: #2434C6;margin: 0 22rpx;" selectable="true">{{kd_number}}</text><image src="/static/copy.png"></image></view>
				<view class="set_box" v-for="(item,index) in talk" :key="index">
					<view class="set_time">
						<view>{{item.mmdd}}</view>
						<view style="font-size: 22rpx;">{{item.hhss}}</view>
					</view>
					<!-- 步骤条 -->
					<view class="set-1">
						<view class="set-2">
							<!-- <view class="tlak_o" v-for="(cItem,index_) in item.data" :key="index_"> -->
							<view class="tlak_o">
								<view class="docter like_">
									<view class="doc_say like_o">
										<!-- <view class="doc_head like_h">
											<text class="doc_name name_">{{cItem.doc.d_name}}</text><text class="doc_time time_">{{cItem.doc.HMS}}</text>
										</view> -->
										<view class="doc_talk like_talk">
											<text selectable="true">{{item.context}}</text>
										</view>
									</view>
								</view>
								<!-- <view class="user like_">
									<view class="user_say like_o">
										<view class="user_head like_h">
											<text class="doc_name name_">{{cItem.user.u_name}}</text><text class="doc_time time_">{{cItem.user.HMS}}</text>
										</view>
										<view class="user_talk like_talk">
											<text>{{cItem.user.talk}}</text>
											<view class="like_img" v-if="cItem.user.imgUrl">
												<image :src="pic" v-for="(pic, index1) in cItem.user.imgUrl" :key="index1"></image>
											</view>
										</view>
									</view>
								</view> -->
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="status==3" v-for="(item,index) in talk" :key="index">
				<view class="kuaidi" @click="copy">{{kd_company}}<text style="color: #2434C6;margin: 0 22rpx;" selectable="true">{{kd_number}}</text><image src="/static/copy.png"></image></view>
			</view>
		</view>
	</view>
</template>

<script>
	import clipboard from "@/components/ican-clipBoard_0.38/ican-clipBoard.js"
	export default {
		data() {
			return {
				talk: [
					// {
				// 		"id": 1,
				// 		"MMDD": "1月21",
				// 		"data": [{
				// 			"doc": {
				// 				"d_name": "张三",
				// 				"HMS": "10:30:48",
				// 				"talk": "【杭州市转运中心】安排投递，投递员：公会，电话："
				// 			},
				// 			"user": {
				// 				"u_name": "李四",
				// 				"HMS": "10:20:18",
				// 				"talk": "测试数据测试数据测试数据",
				// 				"imgUrl": ["/static/p2.jpg", "/static/logo.png",
				// 					"/static/logo.png"
				// 				]
				// 			}
				// 		}]
				// 	},
				// 	{
				// 		"id": 2,
				// 		"MMDD": "1月20",
				// 		"data": [{
				// 				"doc": {
				// 					"d_name": "张三",
				// 					"HMS": "10:30:48",
				// 					"talk": "测试数据测试数据测试数据测试数据"
				// 				},
				// 				"user": {
				// 					"u_name": "李四",
				// 					"HMS": "10:30:22",
				// 					"talk": "测试数据测试数据测试数据测试数据",
				// 					"imgUrl": ["/static/p2.jpg", "/static/logo.png",
				// 						"/static/logo.png"
				// 					]
				// 				}
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"id": 3,
				// 		"MMDD": "10月20",
				// 		"data": [{
				// 				"doc": {
				// 					"d_name": "张三",
				// 					"HMS": "10:30:48",
				// 					"talk": "测试数据测试数据测试数据测试数据"
				// 				},
				// 				"user": {
				// 					"u_name": "李四",
				// 					"HMS": "10:30:22",
				// 					"talk": "测试数据测试数据测试数据测试数据",
				// 					"imgUrl": ["/static/p2.jpg", "/static/logo.png",
				// 						"/static/logo.png"
				// 					]
				// 				}
				// 			},
				// 			{
				// 				"doc": {
				// 					"d_name": "张三",
				// 					"HMS": "10:29:02",
				// 					"talk": "测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据"
				// 				},
				// 				"user": {
				// 					"u_name": "李四",
				// 					"HMS": "10:29:10",
				// 					"talk": "测试数据测试数据测试数据",
				// 					"imgUrl": ["/static/p2.jpg", "/static/logo.png",
				// 						"/static/logo.png"
				// 					]
				// 				}
				// 			}
				// 		]
				// 	}
				],
				param: {
					card_id:'',
					card_pwd: ''
				},
				status: 0,
				kd_company:'',
				kd_number: '',
			}
		},
		onLoad() {
			var _this = this
			_this.param.card_id = uni.getStorageSync("card_id");
			_this.param.card_pwd = uni.getStorageSync("card_pwd");
			// console.log(_this.param)
			_this.$GET_FUN('api/gift_package/getKuaidiInfo', _this.param, res => {
				// console.log(res)
				if (res.data.code == 1) {
					this.status = res.data.data.status
					this.talk = res.data.data.list
					this.kd_company = res.data.data.kd_company
					this.kd_number = res.data.data.kd_number
					for(let i=0; i<this.talk.length; i++) {
						let mmdd = this.talk[i].time.slice(5,10)
						this.talk[i].mmdd = mmdd
						let hhss = this.talk[i].time.slice(11,16)
						this.talk[i].hhss = hhss
					}
				}else {
					uni.showToast({
						title: res.data.msg
					});
				}
			});
		},
		methods: {
			copy() {
				clipboard.setText(this.kd_number);
				uni.showToast({
					title: '复制成功'
				});
			}
		}
	}
</script>

<style lang="scss">
.receive {
	line-height: 1;
	background: linear-gradient(to top ,#FDC2B9 ,#FCC295);
	padding-bottom: 30rpx;
	min-height: 93vh;
}
.qxz {
	font-size: 36rpx;
	color: #1A1A1A;
	font-weight: bold;
	text-align: center;
	padding: 82rpx 0 52rpx;
}
	.wl-box {
		background: #fff;
		margin: 0 15px;
		border-radius:24rpx;
		padding: 78rpx 40rpx 73rpx;
		box-sizing: border-box;
	}
	.ckwl {
		font-size: 32rpx;
		color: #1A1A1A;
		font-weight: bold;
		text-align: center;
		padding: 0rpx 0 78rpx;
	}
	.wlbcz {
		font-size: 32rpx;
		color: #1A1A1A;
		font-weight:500;
		text-align: center;
	}
	.timebcz {
		font-size: 26rpx;
		margin-bottom: 20rpx;
	}
	.kuaidi {
		font-size: 26rpx;
		color: #1A1A1A;
		font-weight: 500;
		margin-bottom: 102rpx;
	}
	.kuaidi image {
		display: inline-block;
		width: 27rpx;
		height: 27rpx;
	}
	.set_box {
		// width: 100%;
		// height: 100%;
		display: flex;
		flex-direction: row;
		position: relative;
		left: -20rpx;
		width: 640rpx;
	}

	/* 左侧时间 */
	.set_time {
		width: 15%;
		position: relative;
		line-height: 1.5;
		text-align: right;
		top: -24rpx;
		view {
			width: 120%;
			// position: absolute;
			// margin-top: 60rpx;
			// right: -40rpx;
			color: #000000;
			font-size: 28rpx;
		}

	}


	/* 右侧内容 */


	.set-1 {
		width: 88%;
	}

	.set-2 {
		min-height: 100rpx;
		border-radius: 10rpx;
		width: 84%;
		margin-left: 84rpx;
		// margin-top: 60rpx;
		// padding-right: 10rpx;
		position: relative;

		.tlak_o {
			width: 100%;
			position: relative;
			top: -24rpx;
			// min-height: 300rpx;
			padding-bottom: 20rpx;

			.like_ {
				width: 100%;
				min-height: 120rpx;

				.like_o {
					width: 100%;
					height: 100%;

					.like_h {
						color: #999999;

						.name_ {
							margin-right: 20rpx;
							font-size: 32rpx;
						}

						.time_ {
							font-size: 24rpx;
						}
					}

					.like_talk {
						width: 100%;
						// min-height: 100rpx;
						// margin: 0 30rpx;

						text {
							color: #1A1A1A;
							line-height: 1.5;
							font-size: 26rpx;
							font-weight: 500;
						}

						.like_img {
							width: 100%;
							min-height: 100rpx;
							display: flex;
							justify-content: flex-start;
							flex-wrap: wrap;

							image {
								width: 30%;
								height: 180rpx;
								margin-bottom: 20rpx;
								margin-right: 2%;
							}
						}
					}
				}
			}
		}
	}

	.set-2::after {
		content: '';
		/* 必须存在如果没有图标就留空 */
		top: -20rpx;
		/* 定位 距离*/
		border-left: #999999 1px dashed;
		/* 横线颜色 */
		left: -44rpx;
		/* 定位 距离*/
		height: 100%;
		/* 高度 */
		position: absolute;
		/* 定位 */
	}

	.set-2::before {
		content: "\e64d";
		/* 必须存在如果没有图标就留空 */
		color: #666666;
		/* 设置颜色 */
		position: absolute;
		/* 定位 */
		left: -54rpx;
		top: 2rpx;
		/* 移动到左边 */
		font-weight: bold;
		/* 图标样式在复制的图标文件中复制相对应的图标样式必须存在 */
		font-family: "iconfont" !important;
		/* 图标样式在复制的图标文件中复制相对应的图标样式必须存在 */
		font-size: 14rpx;
		/* 图标大小 */
		font-style: normal;
		/* 图标样式在复制的图标文件中复制相对应的图标样式必须存在 */
		-webkit-font-smoothing: antialiased;
		/* 图标样式在复制的图标文件中复制相对应的图标样式必须存在 */
		-moz-osx-font-smoothing: grayscale;
		/* 图标样式在复制的图标文件中复制相对应的图标样式必须存在 */
	}

	@font-face {
		font-family: "iconfont";
		src: url('//at.alicdn.com/t/font_1337773_f06f5a7las.eot?t=1565581133395');
		/* IE9 */
		src: url('//at.alicdn.com/t/font_1337773_f06f5a7las.eot?t=1565581133395#iefix') format('embedded-opentype'),
			/* IE6-IE8 */
			url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOIAAsAAAAAB8QAAAM7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqCRIIjATYCJAMUCwwABCAFhG0HZhvNBsiemjwJqJERRCC3tX4YOM4iqNbCnr29uw8wKGBUsUAKqDyCjY5HcEzCALron1wr8wDk8hKBFpIc5yaXfWZJoIBIQkF1KlvVqWuFfZ3c/CBw0p8fcMJJsQY6uIuEMk8188LgXgfHTJceiXlrm0tGajTgaMCz2T6yyf5BXh+Ef9BdxMSIS9cTaKmvYGbzFhRXA1sZ2C0QO7cRAdhadnmkNTSEqufYLM4qNdKx9AJn+M/Hb2OiQVIWwL6rNufIIP1bj29voaZspAiK/byITqLAaEAmdvX6d7KQ+dEstCw2tjQL0FJDkvZald8e//3y+WglCIaW0E/e5R8vERWvuTWY5RYy3/ywXBtKXBEF395EBN++FCQ8V5CWsmEt4CBgHMz1Ad8rde7s2LbD7oUhT3l+eWHbhxwOB+LFrfkVL7I3FIAWdpdWvfHiYt8FltYWdzy1Pz/WfPhQ/elT7efPvUJiVlRsIj8+18X3az7+5Wb48vVrbnvo7OndVe1cPc55k2ebWG7OmMgYX01bT3vJnNlJWtemes0mn3vI/PJl80NQQqVErfcH/Ys5Fy3evrVoyyZNDLSq/cp5EyYsKTbb69bD/+5fmPs/cFwxG9ABoCNdTY+AKrwdi2npHk0Xu4vMH/Q7Wl+4+Yftkv83kMHXTiVutOlsnh68ZYPZit+hmDmRSxVwlDnvxvI8WOq3gz4VCy3xE8Id/d7H2GV2M6Ghi4ak1gcKDYORGTsaSq2Mg0rDTGhplLyTW+mEsRC5BUYadyC0dwpJWw+h0N53ZMb+glJX/6DSPgpoaUN4nLOVobGtZdYuJHAkQ7EbqiVqwMjF7UVrJSKKTmCmitNrETOpUzAiNLxZykMGxPY4wNRBIjnHEDOqh7nOzZBOR6GRUQ2SeKiKc2NiWBju+6JQieqBvbkYRMAhMkjUDVKTUAaYzufsW99fCSEUOgI20rMQr4UwJurloQihwmcg8/SGWT3v8hKTDkQkjsMgjKH0oFzHi+hgnoKM/VtpIBIulGpF1ihRmDcLz9WHnm/Uv0BZNAD40zJSFJGjjEq77dsEg1ahKoF2qbupYvP0KNS2e69WbmucSNZAOpEa5XpUagAAAA==') format('woff2'),
			url('//at.alicdn.com/t/font_1337773_f06f5a7las.woff?t=1565581133395') format('woff'),
			url('//at.alicdn.com/t/font_1337773_f06f5a7las.ttf?t=1565581133395') format('truetype'),
			/* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
			url('//at.alicdn.com/t/font_1337773_f06f5a7las.svg?t=1565581133395#iconfont') format('svg');
		/* iOS 4.1- */
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-yuandian:before {
		content: "\e64d";
	}

	.icon-dingweiweizhi:before {
		content: "\e619";
	}
</style>
