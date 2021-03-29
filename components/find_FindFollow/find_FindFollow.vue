<template>
	<view class="content">
		<!-- 今日更新 -->
		<view class="updatesRow">
			<view class="tip">
				<view class="tip_tit">今日更新</view>
				<image mode="scaleToFill" class="tip_icon" src="../../static/find_imgs/arrow_right_sm_grey.png"></image>
			</view>
			<view class="updatesList">
				<view class="updatesItem" v-for="(item,index) in updatesList">
					<image :src="item.src"></image>
					<view class="item_info">{{item.info}}</view>
				</view>
			</view>
		</view>
		<!-- 今日更新 -->
		
		<!-- 今日关注 attentions-->
		<view class="updatesRow">
			<view class="tip">
				<view class="tip_tit">热门文章</view>
				<image mode="scaleToFill" class="tip_icon" src="../../static/find_imgs/arrow_right_sm_grey.png"></image>
			</view>
			<view class="updatesList">
				<view class="updatesItem" v-for="(item,index) in updatesList">
					<image :src="item.src"></image>
					<view class="item_info">{{item.info}}</view>
				</view>
			</view>
		</view>
		<!-- 今日关注 -->
		
		<!-- 防止tabbar遮挡内容 -->
		<increase></increase>
		<!-- 防止tabbar遮挡内容 -->
	</view>
</template>

<script>
	import increase from '../increase.vue'
	export default {
		data() {
			return {
				updatesList: [{
						src: "../../static/find_imgs/up_1.jpg",
						info: "幼儿在6月前必须养成的30个好习惯，家长必看!"
					},
					{
						src: "../../static/find_imgs/up_2.jpg",
						info: "打孩子的36中武器,您了解过吗??"
					},
					{
						src: "../../static/find_imgs/up_3.jpg",
						info: "打了孩子之后涂什么药回复的快?来看看专家的推荐吧!欢迎收藏、转发"
					},
					{
						src: "../../static/find_imgs/up_4.jpg",
						info: "小葵花妈妈课堂教学计划"
					}
				]
			};
		},
		methods:{
			
		},
		components:{
			increase
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		// margin-top: calc(100vh*0.075);
		overflow: scroll;
		.selectedSwiper {
			width: 100%;
			height: calc(100vh*0.24);

			// margin-top: 4rpx;
			.sswItem {
				width: 100%;
				height: 100%;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.updatesRow {
			width: 95%;
			height: calc(100vh*0.45);
			display: flex;
			flex-direction: column;
			align-items: center;

			.tip {
				// border: 1px solid #007AFF;
				width: 100%;
				// height: 10%;
				display: flex;
				align-items: center;
				margin: 15rpx 0;

				.tip_tit {
					width: 25%;
					height: 80%;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 30rpx;
				}

				.tip_icon {
					width: 25rpx;
					height: 25rpx;
					// margin-left: 5rpx;
				}
			}

			.updatesList {
				// border: 1px solid #4CD964;
				width: 100%;
				height: 90%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				align-items: center;

				.updatesItem {
					width: 48%;
					height: 47%;
					border-radius: 10rpx;
					box-shadow: 0 0 15rpx 2rpx #C0C0C0;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					border: 3rpx solid #FFFFFF;

					image {
						margin-top: 5rpx;
						width: 96%;
						height: 62%;
					}

					.item_info {
						width: 96%;
						height: 25%;
						min-height: 30px;
						max-height: 34px;
						font-size: 24rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
					}
				}
			}
		}
	
	}
</style>
