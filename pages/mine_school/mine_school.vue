<template>
	<view class="content">
		<view class="card_list">
			<view class="card_item">
				<view @click="navToPage(1)" class="icon_row">
					<image src="../../static/mineImgs/student_status.png"></image>
				</view>
				<view class="card_tit">学 籍 信 息</view>
			</view>
			<view class="card_item">
				<view @click="navToPage(2)" class="icon_row">
					<image src="../../static/mineImgs/teachers_info.png"></image>
				</view>
				<view class="card_tit">教 师 资 源</view>
			</view>
			<view class="card_item">
				<view @click="navToPage(3)" class="icon_row">
					<image src="../../static/mineImgs/school_style.png"></image>
				</view>
				<view class="card_tit">学 校 风 貌</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			navToPage(index){
				uni.showModal({
				    title: '提示',
				    content: '这是'+index,
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 94vh;
		background: #F5FAFF;
		border-top: 4rpx solid #d2d2d2;
		.card_list{
			margin: auto;
			width: 75%;
			height: auto;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			flex-wrap: wrap;
			.card_item{
				// border: 1px solid #007AFF;
				width: 46%;
				height: 45%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-top: 60rpx;
				.icon_row{
					width: 120px;
					height: 120px;
					background: #FFFFFF;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 30rpx;
					box-shadow: 0rpx 6rpx 10rpx 2rpx #e6e6e6;
					image{
						width: 50%;
						height: 50%;
					}
				}
				.icon_row:active{
					background: #FFB5B5;
				}
			}
			.card_tit{
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 32rpx;
				margin-top: 36rpx;
			}
		}
	}
</style>
