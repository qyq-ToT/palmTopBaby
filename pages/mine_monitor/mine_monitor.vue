<template>
	<view class="content">
		<view class="card_list">
			<view v-for="(item,index) in monitorList" class="card_item">
				<view @click="navToPage(index)" class="icon_row">
					<image class="monitor_bg" :src="item.src"></image>
					<image class="player_icon" src="../../static/mineImgs/mine_player.png"></image>
				</view>
				<view class="card_tit">{{item.info}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				monitorList:[
					{
						src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00774-619.jpg",
						info:"教室"
					},
					{
						src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00013-51.jpg",
						info:"食堂"
					},
					{
						src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00729-782.jpg",
						info:"田径场"
					}
				]
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
		height: calc(100vh*0.94);
		border-top: 4rpx solid #d2d2d2;
		.card_list{
			// border: 1px solid #007AFF;
			margin: auto;
			margin-top: 40rpx;
			width: 78%;
			height: auto;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			flex-wrap: wrap;
			.card_item{
				// border: 1px solid #007AFF;
				width: 46%;
				height: calc(100vh*0.18);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-top: 30rpx;
				.icon_row{
					width: 100%;
					height: 90%;
					background: #FFFFFF;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 30rpx;
					box-shadow: 0rpx 6rpx 10rpx 2rpx #e6e6e6;
					position: relative;
					.monitor_bg{
						width: 100%;
						height: 100%;
						border-radius: 30rpx;
					}
					.player_icon{
						position: absolute;
						bottom: 0;
						top: 0;
						margin: auto;
						width: 100rpx;
						height: 100rpx;
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
				margin-top: 15rpx;
			}
		}
	}
</style>
