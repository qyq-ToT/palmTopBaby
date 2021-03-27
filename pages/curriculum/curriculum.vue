<template>
	<view class="content">
		<!-- 头部导航栏 -->
		<view class="page_head">
			<image class="back_icon" @click="navBack" src="../../static/page_back.png"></image>
			<view class="page_tit">课程表</view>
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
			<view class="r_tit">上&nbsp;&nbsp;&nbsp;午</view>
			<view class="r_infos">
				<!-- lunch Fruits -->
				<view class="r_item" v-for="(item,index) in breakfast">
					<view class="item_tit">{{item.tit}}</view>
					<view class="item_time">{{item.time}}</view>
				</view>
			</view>
		</view>
		
		<view class="recipes_row">
			<view class="r_tit">下&nbsp;&nbsp;&nbsp;午</view>
			<view class="r_infos">
				<!-- lunch Fruits -->
				<view class="r_item" v-for="(item,index) in lunchList">
					<view class="item_tit">{{item.tit}}</view>
					<view class="item_time">{{item.time}}</view>
				</view>
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
				// 上午
				breakfast:[
					{
						tit:"量子力学",
						time:"7:30 -- 8:40"
					},
					{
						tit:"相对论",
						time:"9:00 -- 10:30"
					},
					{
						tit:"经典物理学",
						time:"9:00 -- 10:30"
					},
					{
						tit:"分子动力学",
						time:"10:40 -- 11:40"
					}
				],
				// 下午
				lunchList:[
					{
						tit:"量子力学",
						time:"7:30 -- 8:40"
					},
					{
						tit:"相对论",
						time:"9:00 -- 10:30"
					},
					{
						tit:"分子动力学",
						time:"10:40 -- 11:40"
					}
				]
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
		.page_head {
			width: 100%;
			height: calc(50px + env(safe-area-inset-top));
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #FFFFFF;
			border-bottom: 1rpx solid #eae9e9;

			.back_icon {
				width: 36rpx;
				height: 36rpx;
				padding: 30rpx;
			}

			.page_tit {
				font-weight: 700;
				font-size: 36rpx;
				width: 50%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
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
				width: 60%;
				height: auto;
				margin-left: 40rpx;
				.r_item{
					// border: 1px solid #007AFF;
					width: 100%;
					height: calc(100vh*0.04);
					font-size: 28rpx;
					display: flex;
					justify-content: space-around;
					align-items: center;
					.item_tit{
						width: 40%;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.item_time{
						width: 60%;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}
		}
	}
</style>
