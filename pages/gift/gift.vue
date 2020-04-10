<template>
	<view class="gift">
		<view class="qxz">请选择{{item}}件礼品</view>
		<view class="gift-box">
			<view v-for="(item,index) in giftList" :key="index" class="gift-info">
				<view :class="{'mengban':item.buxuan}"></view>
				<view class="gift-item" @tap="chooseGift" :data-index="index" :data-itemid="item.id">
					<view class="xuanz" :class="{'active':item.ischoose}"><view class="dui" v-if="item.ischoose"></view></view>
					<view class="gift-img"><image :src="$ANNEX_URL+item.image"></image></view>
					<view class="title-box">
						<view>
							<view class="zhengbt">{{item.title}}</view>
							<view class="fubt">{{item.subtitle}}</view>
						</view>
						<view class="jiaqian">
							<!-- <view class="jz-box">价值<text class="text1">￥</text><text class="text2">{{item.price}}</text></view> -->
							<view>x1</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="xiayibu" v-if="xzindex==-1">
			下一步
		</view>
		<view class="xyb" @click="xiayibu" v-else>
			下一步
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				xzindex:-1,
				item:1,
				itemNum: 1,
				gp_id: "",
				giftList: [
					{
						id: 1,
						image: '/static/logo.png',
						title: '溪楠玻尿酸原液大礼包套餐1',
						subtitle: '我是副标题',
						price: '1888',
					},
					{
						id: 2,
						image: '/static/logo.png',
						title: '溪楠玻尿酸原液大礼包套餐2',
						subtitle: '我是副标题',
						price: '1888',
					},
					{
						id: 3,
						image: '/static/logo.png',
						title: '溪楠玻尿酸原液大礼包套餐3',
						subtitle: '我是副标题',
						price: '1888',
					},
					{
						id: 4,
						image: '/static/logo.png',
						title: '溪楠玻尿酸原液大礼包套餐4',
						subtitle: '我是副标题',
						price: '1888',
					},
					{
						id: 5,
						image: '/static/logo.png',
						title: '溪楠玻尿酸原液大礼包套餐5',
						subtitle: '我是副标题',
						price: '1888',
					},
				],
				items: []
			}
		},
		onLoad(e) {
			console.log(e)
			var _this = this
			_this.gp_id = e.gp_id
			_this.$GET_FUN('api/gift_package/getGiftPackage', {'id': _this.gp_id}, res => {
				console.log(res)
				if (res.data.code == 1) {
					this.giftList = res.data.data.goods_list
					this.itemNum = res.data.data.gift.max_select
				}else {
					uni.showToast({
						title: res.data.msg
					});
				}
			});
		},
		methods: {
			chooseGift(e) {
				var index = e.currentTarget.dataset.index;
				var itemid = e.currentTarget.dataset.itemid;
				// var items = new Array();
				
				if(this.giftList[index].ischoose) {
					for(let j=0;j<this.giftList.length;j++) {
						for(let i=0;i<this.items.length;i++) {
							if(this.items[i].id==this.giftList[index].id) {
								this.items.splice(i, 1)
								this.giftList[index].ischoose=false;
							}
							this.$set(this.giftList,j,this.giftList[j]);
						}
						this.xzindex = -1;
						this.giftList[j].buxuan = false
					}
				}else {
					if(this.items.length<this.itemNum) {
						this.giftList[index].ischoose=true;
						this.items.push(this.giftList[index])
						
						for(let j=0;j<this.giftList.length;j++) {
							for(let i=0;i<this.items.length;i++) {
								this.items[i].ischoose=true;
								this.giftList[index].ischoose=true;
								if(this.giftList[j].id==this.items[i].id) {
									this.$set(this.giftList,j,this.items[i]);
								}
							}	
						};
						if(this.items.length==this.itemNum) {
							this.xzindex = index;
							// console.log(this.items)
							for(let m=0;m<this.giftList.length;m++) {
								for(let n=0;n<this.items.length;n++) {
									if(this.items[n].id==this.giftList[m].id) {
										this.giftList[m].buxuan = true
									}else {
										// this.giftList[m].buxuan = true
									}
								}
								if(this.giftList[m].buxuan) {
									this.giftList[m].buxuan = false
								}else{
									this.giftList[m].buxuan = true
								}
							}
						}
					}
				}
				
				// this.giftList[index].ischoose = !this.giftList[index].ischoose
				
				// for(let i=0; i<this.giftList.length; i++) {
				// 	if(this.giftList[index].ischoose) {
				// 		this.giftList[i].buxuan=true
				// 		this.giftList[index].buxuan=false
				// 		this.xzindex = index;
				// 	}else {
				// 		this.giftList[i].buxuan=false
				// 		this.xzindex = -1;
				// 	}
				// }
			},
			xiayibu() {
				var gg_ids = '' 
				for(let i=0;i<this.items.length;i++) {
					gg_ids = gg_ids + ',' + this.items[i].id
				}
				uni.setStorageSync("lqgiftList",this.items)
				gg_ids = gg_ids.slice(1)
				uni.navigateTo({
					url: "/pages/receive/receive?gp_id=" + this.gp_id + '&gg_ids=' + gg_ids
				})
			}
		}
	}
</script>

<style>
	.gift {
		line-height: 1;
		background: url(../../static/bg.png) no-repeat;
		background-size: 100% 100%;
		padding-bottom: 30rpx;
	}
	.qxz {
		font-size: 32rpx;
		color: #000000;
		font-weight: 500;
		text-align: center;
		padding: 50rpx 0 45rpx;
	}
	.gift-box {
		margin: 0 20rpx;
	}
	.gift-info {
		position: relative;
	}
	.gift-item {
		width: 710rpx;
		height: 280rpx;
		padding: 38rpx 42rpx 42rpx 24rpx;
		box-sizing: border-box;
		background: #fff;
		border-radius: 16rpx;
		display: flex;
		align-items: center;
		/* box-shadow: 0 0 20rpx 0 #f2f2f2; */
		margin-bottom: 30rpx;
	}
	.mengban {
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 16rpx;
		z-index: 1;
		width: 710rpx;
		height: 280rpx;
		background: #000000;
		opacity: 0.2;
	}
	.xuanz {
		width: 38rpx;
		height: 38rpx;
		border-radius: 50%;
		border: 3rpx solid #999999;
	}
	.dui {
		width: 10rpx;
		height: 18rpx;
		border-right:3rpx solid #EB3026;
		border-bottom: 3rpx solid #EB3026;
		margin: 6rpx auto 0; 
		transform:rotate(45deg);
	}
	.active {
		border: 3rpx solid #EB3026;
	}
	.gift-img {
		width: 200rpx;
		height: 200rpx;
		border-radius: 16rpx;
		margin: 0 25rpx;
	}
	.gift-img image {
		width: 100%;
		height: 100%;
	}
	.title-box {
		display: flex;
		width: 350rpx;
		flex-direction: column;
		justify-content: space-between;
		font-size: 28rpx;
		color: #1A1A1A;
		font-weight: 500;
		height: 200rpx;
		padding: 10rpx 0 15rpx;
		box-sizing: border-box;
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
		margin-top: 22rpx;
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
		width: 352rpx;
	}
	.jz-box {
		font-size: 26rpx;
		color: #EC433A;
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
