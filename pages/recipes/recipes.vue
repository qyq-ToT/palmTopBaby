<template>
	<view class="content">
		<!-- 头部导航栏 -->
		<view class="pageHead">
			<image class="back_icon" @click="navBack" src="../../static/mineImgs/arrow_right_sm_black.png"></image>
			<view class="page_tit">宝宝食谱</view>
			<view class="ph_right">
				<view class="rtxt">第十周</view>
				<image class="ricon" src="../../static/mineImgs/arrow_right_sm_black.png"></image>
			</view>
		</view>
		
		<!-- 索引列表 -->
		<view class="tabsRow">
			<u-tabs class="indexNav" @change="indexChange" font-size="32rpx" :bold="isBold" :is-scroll="isScroll"
			:current="current" :list="indexList" active-color="#FFFFFF" bg-color="#FD766E" inactive-color="#FFFFFF"
			height="110">
			</u-tabs>
		</view>
		
		<!-- 食谱信息 -->
		<view class="recipes_row">
			<view class="r_tit">早&nbsp;&nbsp;&nbsp;餐</view>
			<view class="r_infos">
				<!-- lunch Fruits -->
				<view class="r_item" v-for="(item,index) in breakfast">{{item}}</view>
			</view>
		</view>
		
		<view class="recipes_row">
			<view class="r_tit">午&nbsp;&nbsp;&nbsp;餐</view>
			<view class="r_infos">
				<!-- lunch Fruits -->
				<view class="r_item" v-for="(item,index) in lunchList">{{item}}</view>
			</view>
		</view>
		
		<view class="recipes_row">
			<view class="r_tit">水&nbsp;&nbsp;果</view>
			<view class="r_infos">
				<!-- lunch Fruits -->
				<view class="r_item" v-for="(item,index) in fruitsList">{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 是否允许滑动
				isScroll:false,
				// 选中块是否加粗
				isBold:false,
				// 选中块的索引
				current:2,
				// 索引列表数据
				indexList:[
					{
						name:"星期一"
					},
					{
						name:"星期二"
					},
					{
						name:"星期三"
					},
					{
						name:"星期四"
					},
					{
						name:"星期五"
					}
				],
				// 早餐
				breakfast:["板蓝根泡面","坏掉的牛奶","面包虫"],
				// 中餐
				lunchList:["榴莲火锅","爆炒拖把丝","大肠刺身","72味大粘痰"],
				// 水果
				fruitsList:["山核桃"]
			};
		},
		methods: {
			// 返回上一级
			navBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 索引块点击事件
			indexChange(e){
				this.current = e
			}
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 100vh;
		.pageHead {
			border-bottom: 1rpx solid #e2e2e2;
			width: 100%;
			height: calc(44px + env(safe-area-inset-top));
			display: flex;
			justify-content: space-between;
			align-items: center;

			.back_icon {
				width: 40rpx;
				height: 40rpx;
				padding: 15rpx;
				transform: rotate(180deg);
			}

			.page_tit {
				font-size: 34rpx;
				font-weight: bold;
			}

			.ph_right {
				display: flex;
				align-items: center;
				.rtxt {
					font-size: 25rpx;
				}

				image {
					padding: 5rpx 20rpx;
					width: 25rpx;
					height: 25rpx;
					transform: rotate(90deg);
					transition: transform 0.5s;
				}
			}
		}
		.tabsRow{
			width: 95%;
			height: auto;
			margin: auto;
			margin-top: 20rpx;
			.indexNav{
				background: linear-gradient(top,#FD766E,#FD997E,#FDA584) !important;
				border-radius: 15rpx;
			}
		}
		.recipes_row{
			width: 92%;
			height: auto;
			padding: 30rpx 0;
			box-shadow: 2rpx 2rpx 5rpx 2rpx #e6e6e6;
			border-radius: 15rpx;
			margin: auto;
			margin-top: 40rpx;
			display: flex;
			align-items: center;
			.r_tit{
				width: 25%;
				height: calc(100vh*0.05);
				writing-mode: tb-rl;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28rpx;
				font-weight: bold;
			}
			.r_infos{
				width: 50%;
				height: auto;
				margin-left: 40rpx;
				.r_item{
					// border: 1px solid #007AFF;
					width: 100%;
					height: calc(100vh*0.035);
					font-size: 28rpx;
					display: flex;
					align-items: center;
				}
			}
		}
	}
</style>
