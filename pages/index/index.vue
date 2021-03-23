<template>
	<view class="content">
		<!-- 用户名片 -->
		<view class="user_business_card">
			<view class="card_top">
				<text class="uname">四字名字</text>
				<image @click="card_more()" src="../../static/tabbarImgs/ic_tab_more_select.png"></image>
			</view>
			<view class="card_bottom">
				<image src="../../static/logo.png" class="user_icon"></image>
				<view class="user_info">
					<view class="infoTop">
						<view class="uname">王五麻子</view>
						<image src="../../static/index_img/man.png" class="sex"></image>
					</view>
					<view class="infoBottom">
						<view class="cname">北京清华大学</view>
						<view class="addTime">入园1年12月29天</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 导航列表 -->
		<view class="navigation_list">
			<!-- 包覆层，方便实现样式而已 -->
			<view class="coating">
				<view @click="navigationTo(index)" class="nav_item" v-for="(item,index) in navigationList">
					<image class="item_icon" :src="item.src"></image>
					<view class="item_tit">{{item.tit}}</view>
				</view>
			</view>
		</view>
		<!-- 消息提示 -->
		<view class="messagePro"></view>
		<!-- 宝贝之星 -->
		<view class="babyStar"></view>
		<!-- 班级信息 -->
		<view class="classNews"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 导航栏数据组
				navigationList:[
					{
						src:"../../static/index_img/attendance.png",
						tit:"宝宝考勤"
					},
					{
						src:"../../static/index_img/recipes.png",
						tit:"宝宝食谱"
					},
					{
						src:"../../static/index_img/car.png",
						tit:"校车"
					},
					{
						src:"../../static/index_img/healthy.png",
						tit:"健康"
					},
					{
						src:"../../static/index_img/mailList.png",
						tit:"通讯录"
					},
					{
						src:"../../static/index_img/curriculum.png",
						tit:"课程表"
					},
					{
						src:"../../static/index_img/sing.png",
						tit:"儿歌"
					},
					{
						src:"../../static/index_img/more.png",
						tit:"更多"
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			navigationTo(index){
				switch (index) {
				    case 0:
				        uni.navigateTo({
				        	url:"../attendance/attendance"
				        })
				        break;
				    case 1:
				        uni.navigateTo({
				        	url:"../recipes/recipes"
				        })
				         break;
				    case 2:
				        uni.navigateTo({
				        	url:"../car/car"
				        })
				         break;
				    case 3:
				        uni.navigateTo({
				        	url:"../healthy/healthy"
				        })
				         break;
				    case 4:
				        uni.navigateTo({
				        	url:"../mailList/mailList"
				        })
				         break;
				    case 5:
				        uni.navigateTo({
				        	url:"../curriculum/curriculum"
				        })
				         break;
				    case 6:
				        uni.navigateTo({
				        	url:"../sing/sing"
				        })
						break;
					case 7:
						uni.navigateTo({
							url:"../more/more"
						})
				}
			},
			card_more(){
				console.log("我点了")
			}
		}
	}
</script>

<style lang="scss">
	.content {
		font-family: "楷书";
		width: 100%;
		height: auto;
		overflow: scroll;
		background: #F1F1F1;
		min-height: 100vh;
		.user_business_card{
			width: 100%;
			height: calc(100vh*0.22);
			background: #FFFFFF;
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-direction: column;
			.card_top{
				// border: 1px solid gold;
				width: 95%;
				height: 20%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.uname{
					font-size: 44rpx;
					color: #161616;
				}
				image{
					width: calc(100vh*0.22*0.2*0.75);
					height: 75%;
				}
			}
			.card_bottom{
				width: 95%;
				height: 70%;
				background: linear-gradient(left,#FD716B,#FEA986);
				border-radius: 30rpx;
				box-shadow: 5rpx 5rpx 5rpx 5rpx #C0C0C0;
				display: flex;
				align-items: center;
				flex-direction: row;
				.user_icon{
					width: calc(100vh*0.22*0.7*0.65);
					height: 65%;
					border: 4rpx solid #FFFFFF;
					margin: 0 45rpx;
					border-radius: 50%;
				}
				.user_info{
					// border: 1px solid #FFFFFF;
					width: 65%;
					height: 65%;
					.infoTop{
						width: 100%;
						height: 48%;
						display: flex;
						align-items: center;
						.uname{
							font-size: 42rpx;
							color: #FFFFFF;
							letter-spacing: 6rpx;
						}
						.sex{
							width: 45rpx;
							height: 45rpx;
							margin: 15rpx;
						}
					}
					.infoBottom{
						width: 100%;
						height: 48%;
						display: flex;
						align-items: center;
						.cname,.addTime{
							background: #FFFFFF;
							height: 50%;
							padding: 2rpx 10rpx;
							font-size: 26rpx;
							border-radius: 30rpx;
							margin: 0 10rpx;
						}
					}
				}
			}
		}
		.navigation_list{
			width: 100%;
			height: calc(100vh*0.24);
			display: flex;
			justify-content: center;
			background: #FFFFFF;
			.coating{
				// border: 1px solid red;
				width: 85%;
				height: 100%;
				margin: auto;
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				align-items: center;
				.nav_item{
					// border: 1px solid #555555;
					width: 23%;
					height: 48%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.item_icon{
						width: 65rpx;
						height: 65rpx;
					}
					.item_tit{
						font-size: 24rpx;
						margin-top: 15rpx;
					}
				}
			}
		}
		
		.messagePro{}
		.babyStar{}
		.classNews{}
	}
</style>
