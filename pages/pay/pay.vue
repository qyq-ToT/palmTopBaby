<template>
	<view class="content">
		<view class="page_head">
			<image @click="navBack()" class="back_icon" src="../../static/page_back.png"></image>
			<view class="page_tit">缴 费</view>
			<view class="page_right">已缴记录</view>
		</view>

		<!-- 缴费信息 -->
		<view class="pay_item">
			<view class="item_head">
				<view class="head_tit">2021春季学费</view>
				<view class="head_state">代缴费</view>
			</view>

			<view class="pay_name">
				<view class="p_l">名&nbsp;&nbsp;&nbsp;字 :</view>
				<view class="p_r">周树人</view>
			</view>

			<view class="detailedList">
				<view class="d_item">
					<view class="di_left">课本费&nbsp;:</view>
					<view class="di_right">1234.56元</view>
				</view>
				<view class="d_item">
					<view class="di_left">课本费&nbsp;:</view>
					<view class="di_right">5678元</view>
				</view>
				<view class="d_item">
					<view class="di_left">教学费&nbsp;:</view>
					<view class="di_right">9876元</view>
				</view>
			</view>

			<view class="pay_unit">消费单位&nbsp;:&nbsp;&nbsp;蓝翔挖掘机技术学院财务部</view>
			<view class="deadline">缴费时间&nbsp;:&nbsp;&nbsp;2021-04-30</view>
			<view class="statistics">
				共计 : <view class="money">我不知道多少</view>元
			</view>
		</view>
		<u-button @click="toPay()" class="pay_btn" :ripple="true" ripple-bg-color="#909399">去缴费</u-button>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			navBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			toPay(){
				console.log("123456789")
			}
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #F5F5F5;

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

			.page_right {
				margin-right: 30rpx;
			}
		}

		.pay_item {
			margin-top: 25rpx;
			width: 95%;
			height: 45%;
			box-shadow: 2rpx 2rpx 5rpx 2rpx #e6e6e6;
			border-radius: 20rpx;
			background: #FFFFFF;
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;

			.item_head {
				width: 86%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 36rpx 0;

				.head_tit {
					font-size: 38rpx;
					font-weight: bold;
				}

				.head_state {
					color: #FD706B;
					font-size: 32rpx;
					letter-spacing: 8rpx;
				}
			}

			.pay_name {
				width: 86%;
				display: flex;

				.p_l {
					letter-spacing: 4rpx;
				}

				.p_r {
					text-indent: 0.5rem;
					letter-spacing: 4rpx;
				}
			}

			.detailedList {
				width: 86%;
				margin: 44rpx 0;

				.d_item {
					width: 100%;
					display: flex;
					margin-top: 6rpx;

					.di_left {
						letter-spacing: 4rpx;
					}

					.di_right {
						text-indent: 0.5rem;
						letter-spacing: 4rpx;
					}
				}
			}

			.pay_unit {
				width: 86%;
				letter-spacing: 4rpx;
			}

			.deadline {
				width: 86%;
				letter-spacing: 4rpx;
			}

			.statistics {
				position: absolute;
				bottom: 40rpx;
				width: 86%;
				display: flex;
				justify-content: flex-end;
				align-items: flex-end;

				.money {
					margin: 0 16rpx;
					font-size: 50rpx;
					color: #FD706B;
				}
			}
		}

		.pay_btn {
			margin-top: 30px;
			-webkit-border-radius: 22px;
			border-radius: 22px;
			width: 40%;
			height: 5%;
			border: none !important;
			background: #007AFF;
			color: #FFFFFF;
			font-size: 14px;
			background: -webkit-gradient(linear, left top, left bottom, from(#FD756D), color-stop(#FD8D78), to(#FDA986));
			background: -webkit-linear-gradient(top, #FD756D, #FD8D78, #FDA986);
		}
	}
</style>
