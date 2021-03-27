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
		<view class="messagePro">
			<image class="pro_img" src="../../static/logo.png"></image>
			<view class="message_row">
				<view class="msg">
					<view class="msg_tit">·班级更新了动态</view>
					<view class="msg_time">30分钟前</view>
				</view>
				<view class="msg">
					<view class="msg_tit">·数学老师发布的家庭作业</view>
					<view class="msg_time">1小时前</view>
				</view>
			</view>
			<view class="right_row">
				<view class="dot"></view>
				<image class="more_msg" src="../../static/index_img/arrow_right_sm_black.png"></image>
			</view>
		</view>
		<!-- 班级信息 -->
		<view class="tips">班级动态</view>
		<view class="classNews">
			<view v-for="(item,index) in publisherList" class="publisher_item">
				<view class="left_row">
					<view class="publisher_info">
						<image class="item_icon" mode="scaleToFill" :src="item.src"></image>
						<view class="item_name">{{item.name}}</view>
					</view>
					<view class="publisher_tit">{{item.tit}}</view>
					<view class="publisher_article">{{item.article}}</view>
				</view>
				<view class="right_row">
					<image mode="aspectFill" :src="item.publisherSrc"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 导航栏数据
				navigationList:[
					{
						src:"../../static/index_img/curriculum.png",
						tit:"课程表"
					},
					{
						src:"../../static/index_img/recipes.png",
						tit:"宝宝食谱"
					},
					{
						src:"../../static/index_img/leave.png",
						tit:"请假"
					},
					{
						src:"../../static/index_img/pay.png",
						tit:"缴费"
					},
					{ 
						src:"../../static/index_img/introduction.png",
						tit:"幼儿园简介"
					}
				],
				// 班级动态数据源
				publisherList:[
					{
						src:"https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3470963835,2900456313&fm=26&gp=0.jpg",
						name:"迪迦老师",
						tit:"如何成为一个近战法师",
						article:"技能全部抠掉,能用拳头不放技能,空血不空蓝，这是至关重要的一点。",
						publisherSrc:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269829245,1908521181&fm=26&gp=0.jpg"
					},
					{
						src:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2921004651,2324678182&fm=26&gp=0.jpg",
						name:"赛文老师",
						tit:"关于我儿子那些事",
						article:"☑☺◐☑◆◑☚▆▆☛θευυΦΦΤΤΣΣΣÄÑÓÔへにせてねねへツクеЫОЬТУИЗЖР＜＞∵∵＝∵∵∵∨∉ŋtskθtru:eəɪəɜːㄡㄜㄠㄈㄸㅃ㉤㉣ㄹㄹㅁㅁㅃㄹㄹㅁ吉肆亿ΖÄÃ",
						publisherSrc:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=311645628,926795478&fm=26&gp=0.jpg"
					},
					{
						src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1712550423,410802020&fm=26&gp=0.jpg",
						name:"盖亚老师",
						tit:"怎么完美落地",
						article:"大家都知道盖亚是地球的大地守护者，他的力量就是代表着大地的力量，所以圆谷的拍摄组在拍摄盖亚的时候，对于落地这一方面就要偏袒盖亚很多，在拍摄的时候，就会尽量要求地上的尘土泛得越高越好，这第一部就是对于盖亚的落地姿势设计，当然首先是导演或者其它人先来摆一个姿势。",
						publisherSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3267247715,3938567685&fm=26&gp=0.jpg"
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
				        	url:"../curriculum/curriculum"
				        })
				        break;
				    case 1:
				        uni.navigateTo({
				        	url:"../recipes/recipes"
				        })
				         break;
				    case 2:
				        uni.navigateTo({
				        	url:"../leave/leave"
				        })
				         break;
				    case 3:
				        uni.navigateTo({
				        	url:"../pay/pay"
				        })
				         break;
				    case 4:
				        uni.navigateTo({
				        	url:"../introduction/introduction"
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
		// height: 100%;
		background: #FFFFFF;
		.user_business_card{
			width: 100%;
			height: calc(100vh*0.24);
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
				margin: 20rpx 0;
				.uname{
					font-size: 34rpx;
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
				box-shadow: 2rpx 2rpx 15rpx 2rpx #C0C0C0;
				display: flex;
				align-items: center;
				flex-direction: row;
				.user_icon{
					width: calc(100vh*0.24*0.7*0.65);
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
							width: 40rpx;
							height: 40rpx;
							margin: 10rpx;
						}
					}
					.infoBottom{
						width: 100%;
						height: 48%;
						display: flex;
						align-items: center;
						.cname,.addTime{
							background: #FFFFFF;
							height: 60%;
							padding: 2rpx 10rpx;
							font-size: 26rpx;
							border-radius: 30rpx;
							margin: 0 10rpx;
							display: flex;
							justify-content: center;
							align-items: center;
						}
					}
				}
			}
		}
		.navigation_list{
			width: 100%;
			height: calc(100vh*0.13);
			display: flex;
			justify-content: center;
			background: #FFFFFF;
			margin: 20rpx 0;
			.coating{
				// border: 1px solid red;
				width: 94%;
				height: 100%;
				margin: auto;
				display: flex;
				justify-content: space-around;
				// flex-wrap: wrap;
				align-items: center;
				.nav_item{
					// border: 1px solid #555555;
					flex: 1;
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
		
		.messagePro{
			width: 96%;
			height: calc(100vh*0.10);
			margin: auto;
			border-radius: 20rpx;
			box-shadow: 0 0 10rpx 2rpx #C8C7CC;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.pro_img{
				width: calc(100vh*0.10*0.8);
				height: 80%;
				margin: 0 30rpx;
			}
			.message_row{
				// border: 1px solid #DD524D;
				flex: 1;
				height: 75%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.msg{
					display: flex;
					justify-content: space-between;
					font-size: 24rpx;
					width: 100%;
					height: 45%;
					.msg_tit,.msg_time{
						display: flex;
						justify-content: center;
						align-items: center;
					}
					
				}
			}
			.right_row{
				// border: 1px solid #007AFF;
				width: 10%;
				height: 50%;
				margin: 0 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.dot{
					width: 20rpx;
					height: 20rpx;
					border-radius: 50%;
					background: red;
					margin: 0 5rpx;
				}
				.more_msg{
					width: 35rpx;
					height: 35rpx;
				}
			}
		}
			
		.tips{
			width: 96%;
			height: calc(100vh*0.08);
			display: flex;
			align-items: center;
			margin: auto;
		}
		.classNews{
			// border: 1px solid #ee6633;
			width: 100%;
			height: calc(100vh*0.32);
			display: flex;
			flex-direction: column;
			align-items: center;
			overflow: scroll;
			.publisher_item{
				box-shadow: 0 0 15rpx 2rpx #C8C7CC;
				border-radius: 10rpx;
				width: 96%;
				height: calc(100vh*0.22);
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin: 10rpx 0;
				.left_row{
					// border: 1px solid #aa2233;
					width: 65%;
					height: 85%;
					color: #505053;
					.publisher_info{
						width: 100%;
						height: 24%;
						// border: 1px solid #7788ff;
						display: flex;
						align-items: center;
						.item_icon{
							border-radius: 50%;
							width: 60rpx;
							height: 60rpx;
							margin: 0 20rpx;
						}
						.item_name{
							font-size: 28rpx;
						}
					}
					.publisher_tit{
						margin: 15rpx 0;
						margin-left: 20rpx;
						font-size: 28rpx;
					}
					.publisher_article{
						font-size: 28rpx;
						text-indent: 2.5rem;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
					}
				}
				.right_row{
					// border: 1px solid #aa2233;
					width: 24%;
					height: 85%;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					align-items: center;
					image{
						box-shadow: 0 2rpx 5rpx 1rpx #999999;
						border-radius: 10rpx;
						width: 150rpx;
						height: 150rpx;
					}
				}
			}
		}
	}
</style>