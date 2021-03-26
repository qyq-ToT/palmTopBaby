<template>
	<view class="content">
		<view class="mine_card">
			<image lazy-load="true" class="mine_icon" mode="scaleToFill" src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1174701681,3917824445&fm=26&gp=0.jpg"></image>
			<view class="mine_name">如花姑娘</view>
		</view>
		<view class="navToList">
			<view v-for="(item,index) in topNavToList" class="item">
				<image class="left_icon" :src="item.src"></image>
				<view class="right_row" :style="index==2?'border:none':''">
					<view class="right_tit">{{item.tit}}</view>
					<image class="right_icon" src="../../static/mineImgs/arrow_right_sm_black.png"></image>
				</view>
			</view>
		</view>
		<view class="navToList bottomList">
			<view v-for="(item,index) in bottomNavToList" class="item">
				<image class="left_icon" :src="item.src"></image>
				<view class="right_row" :style="index==2?'border:none':''">
					<view class="right_tit">{{item.tit}}</view>
					<image class="right_icon" src="../../static/mineImgs/arrow_right_sm_black.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topNavToList:[
					{
						src:"../../static/mineImgs/mine_info.png",
						tit:"个人信息"
					},
					{
						src:"../../static/mineImgs/record.png",
						tit:"记录成长"
					},
					{
						src:"../../static/mineImgs/collection.png",
						tit:"我的收藏"
					}
				],
				bottomNavToList:[
					{
						src:"../../static/mineImgs/video.png",
						tit:"视频监控"
					},
					{
						src:"../../static/mineImgs/curriculum.png",
						tit:"课程详情"
					},
					{
						src:"../../static/mineImgs/mine_school.png",
						tit:"我的学校"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: auto;
		.mine_card{
			width: 95%;
			height: calc(100vh*0.22);
			margin: auto;
			background-image: url('https://img95.699pic.com/photo/40141/0737.gif_wh860.gif');
			background-size: 100% 100%;
			background-repeat: no-repeat;
			border-radius: 25rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.mine_icon{
				width: calc(100vh*0.22*0.4);
				height: 40%;
				border: 3rpx solid #FFFFFF;
				border-radius: 50%;
			}
			.mine_name{
				color: #FFFFFF;
				margin-top: 20rpx;
				font-size: 26rpx;
				letter-spacing: 4rpx;
			}
		}
	
		.navToList{
			width: 100%;
			height: calc(100vh*0.2);
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 60rpx;
			.item{
				width: 92%;
				height: 32%;
				display: flex;
				align-items: center;
				.left_icon{
					width: calc(100vh*0.32*0.2*0.5);
					height: 50%;
					margin: 0 25rpx;
				}
				.right_row{
					width: 80%;
					height: 100%;
					border-bottom: 1rpx solid #d2d2d2;
					margin-left: 15rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.right_icon{
						width: 30rpx;
						height: 30rpx;
					}
					.right_tit{
						font-size: 26rpx;
						color: #5F5E5E;
					}
				}
			}
		}
		.bottomList{
			margin-top: 0rpx;
			border-top: 5rpx solid #d2d2d2;
			border-bottom: 5rpx solid #d2d2d2;
		}
	}

</style>
