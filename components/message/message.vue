<template>
	<view class="content">
		<!-- 顶部导航栏 -->
		<view class="navHead">
			<view @click="changeContent(1)" class="navItem">
				<view :class="navActive==1?'active':''" class="tit">通知</view>
				<u-badge show-zero type="error" :count="noticeUnread"></u-badge>
			</view>
			<view @click="changeContent(2)" class="navItem">
				<view :class="navActive==2?'active':''" class="tit">消息</view>
				<u-badge show-zero type="error" count="15"></u-badge>
			</view>
			<image class="drop_icon" src="../../static/message_imgs/solid_inverted_triangle.png"
			@click="drop()" :class="dropActive?'dropActive':''"></image>
		</view>
		<!-- 顶部导航栏 -->
		
		<!-- 遮罩层以及下拉菜单 -->
		<u-mask class="mask" :show="dropActive" :custom-style="{background: 'rgba(0, 0, 0, 0.2)'}" 
		:duration="400" :zoom="true" @click="drop()">
			<view class="t_drop_list">
				<view class="d_item" v-for="(item,index) in tDropList" @click="selectDrop(index)">{{item}}</view>
			</view>
		</u-mask>
		<!-- 遮罩层以及下拉菜单 -->
		<view class="notice" v-show="navActive==1">
			<view v-for="(item,index) in noticeLsit" class="notice_item">
				<view class="item_content">
					<view class="item_tit">{{item.tit}}</view>
					<view class="item_info">
						<view class="ymd_time">{{item.ymd_time}}</view>
						<view class="hm_time">{{item.hm_time}}</view>
						<view class="author_name">{{item.author_name}}</view>
					</view>
				</view>
				<view class="item_state" :class="item.state?'isRead':''">{{item.state | stateFil}}</view>
				<view v-if="item.type==1" class="label label_1"></view>
				<view v-if="item.type==2" class="label label_2"></view>
				<view v-if="item.type==3" class="label label_3"></view>
				<view class="label_text">通知</view>
				
			</view>
			<view class="empty"></view>
		</view>
		<view class="news" v-show="navActive==2">
			<view class="news_head">
				<view v-for="(item,index) in newsHeadList" class="head_item">
					<view class="icon_row">
						<u-badge show-zero :offset="bageOffset" type="error" :count="item.uread"></u-badge>
						<image mode="aspectFill" class="item_icon" :src="item.src"
						:style="index==1?'background:#FD706B':(index==2?'background:#8AE4DA':'')"></image>
					</view>
					
					<view class="item_tit">{{item.tit}}</view>
				</view>
			</view>
			<view class="newsContent">
				<view class="new_item" v-for="(item,index) in newsList">
					<image class="user_icon" :src="item.src"></image>
					<view class="news_center">
						<view class="user_name">{{item.name}}</view>
						<view class="user_msg">{{item.msg}}</view>
					</view>
					<view class="msg_info">
						<view class="msg_info_time">{{item.last_time}}</view>
						<view class="msg_unread"
						:class="item.unread_count>99?'bp':''">{{item.unread_count | uReadHandle}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 头部下拉列表激活状态
				dropActive:false,
				tDropList:["全部通知","普通消息","活动","投票"],
				bageOffset:[-15,0],
				noticeUnread:0,
				navActive:1,
				noticeLsit:[
					{
						type:1,
						tit:"清明节放假",
						ymd_time:"2020-03-25",
						hm_time:"14:53",
						author_name:"The Shy",
						state:true
					},
					{
						type:2,
						tit:"清明节放假",
						ymd_time:"2020-03-25",
						hm_time:"14:53",
						author_name:"The Shy",
						state:false
					},
					{
						type:3,
						tit:"清明节放假",
						ymd_time:"2020-03-25",
						hm_time:"14:53",
						author_name:"The Shy",
						state:false
					},
					{
						type:2,
						tit:"清明节放假",
						ymd_time:"2020-03-25",
						hm_time:"14:53",
						author_name:"The Shy",
						state:true
					},
					{
						type:3,
						tit:"清明节放假",
						ymd_time:"2020-03-25",
						hm_time:"14:53",
						author_name:"The Shy",
						state:true
					},
					{
						type:2,
						tit:"清明节放假",
						ymd_time:"2020-03-25",
						hm_time:"14:53",
						author_name:"The Shy",
						state:true
					}
				],
				newsHeadList:[
					{
						src:"../../static/message_imgs/mail_list.png",
						tit:"通讯录",
						uread:"82"
					},
					{
						src:"../../static/message_imgs/fabulous.png",
						tit:"点赞",
						uread:"99+"
					},
					{
						src:"../../static/message_imgs/comment.png",
						tit:"评论",
						uread:"6"
					}
				],
				newsList:[
					{
						src:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2336406242,3321157055&fm=26&gp=0.jpg",
						name:"马化腾",
						msg:"还不充钱？",
						last_time:"00:04",
						unread_count:98
					},
					{
						src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1224304466,3911990549&fm=26&gp=0.jpg",
						name:"马云",
						msg:"帅哥，来淘宝逛逛呗~~~",
						last_time:"20:21",
						unread_count:4
					},
					{
						src:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3081424985,1797611456&fm=26&gp=0.jpg",
						name:"王健林",
						msg:"定个小目标，比方说:我先挣它一个亿",
						last_time:"09:43",
						unread_count:105
					},
					{
						src:"https://pic.cyol.com/img/20200810/img_964041df4d80a893a20354e9b7cde66c7d_c.jpg",
						name:"习近平",
						msg:"党的100大人民大会将在2021-04-01召开,请及时参加!!!",
						last_time:"08:00",
						unread_count:1
					},
					{
						src:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2336406242,3321157055&fm=26&gp=0.jpg",
						name:"马化腾",
						msg:"还不充钱？",
						last_time:"00:04",
						unread_count:1
					},
					{
						src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1224304466,3911990549&fm=26&gp=0.jpg",
						name:"马云",
						msg:"帅哥，来淘宝逛逛呗~~~",
						last_time:"20:21",
						unread_count:4
					},
					{
						src:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3081424985,1797611456&fm=26&gp=0.jpg",
						name:"王健林",
						msg:"定个小目标，比方说:我先挣它一个亿",
						last_time:"09:43",
						unread_count:105
					},
					{
						src:"https://pic.cyol.com/img/20200810/img_964041df4d80a893a20354e9b7cde66c7d_c.jpg",
						name:"习近平",
						msg:"党的100大人民大会将在2021-04-01召开,请及时参加!!!",
						last_time:"08:00",
						unread_count:1
					}
				]
			}
		},
		methods: {
			//切换内容
			changeContent(val){
				this.navActive = val
			},
			// 顶部导航栏下拉列表
			drop(){
				this.dropActive = !this.dropActive
			},
			// 顶部导航栏下拉列表点击事件
			selectDrop(index){
				console.log(index)
			}
		},
		filters:{
			stateFil(val){
				if(val){
					return "已读"
				}else{
					return "未读"
					
				}
			},
			uReadHandle(val){
				if(val>99){
					return "99+"
				}else{
					return val
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		width: 100%;
		height: calc(100vh*0.92);
		overflow: hidden;
		background: #F5F5F5;
		.mask{
			display: flex;
			flex-direction: row-reverse;
			.t_drop_list{
				margin-top: calc(100vh*0.075);
				margin-right: 30rpx;
				width: 30%;
				height: 17%;
				background: #FFFFFF;
				border-radius: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.d_item{
					width: 80%;
					height: 22%;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 26rpx;
					border-bottom: 1rpx solid #e0e0e0;
					
				}
				.d_item:active{
					background: #F8F8F8;
				}
				.d_item:nth-child(4){
					border: none;
				}
			}
		}
		.navHead{
			// border: 1px solid #007AFF;
			width: 100%;
			height: 7%;
			display: flex;
			justify-content: center;
			background: #FFFFFF;
			position: relative;
			.drop_icon{
				position: absolute;
				top: 0;
				bottom: 0;
				right: 0;
				margin: auto;
				width: 30rpx;
				height: 20rpx;
				padding: 30rpx;
				transition: transform 0.5s;
				
			}
			.dropActive{
				transform: rotate(180deg);
			}
			.navItem{
				// border: 1px solid #2C405A;
				width: 20%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 40rpx;
				position: relative;
				.tit{
					font-size: 36rpx;
					margin: 0 15rpx;
					color: #9E9E9E;
					font-weight: bold;
				}
				.active{
					color: #5E5E5E;
				}
				.prop{
					width: 40rpx;
					height: 40rpx;
					background: #FD706B;
					border-radius: 50%;
					font-size: 24rpx;
					color: #FFFFFF;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
		.notice{
			width: 100%;
			height: 100%;
			overflow: scroll;
			.notice_item{
				// border: 1px solid #007AFF;
				width: 100%;
				height: 16%;
				margin: 20rpx 0;
				background: #FFFFFF;
				border-radius: 35rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: relative;
				box-shadow: 0 5rpx 5rpx 1rpx #d2d6da;
				.label{
					position: absolute;
					top: 0;
					width: 0;
					height: 0;
					border-top: 130rpx solid #3FDAB8;
					border-right: 130rpx solid transparent;
					z-index: 222;
				}
				.label_1{
					border-top-color: #3FDAB8;
				}
				.label_2{
					border-top-color: #FEAD88;
				}
				.label_3{
					border-top-color: #6DCFF5;
				}
				.label_text{
					position: absolute;
					top: 25rpx;
					font-size: 34rpx;
					color: #FFFFFF;
					text-align: center;
					transform: rotate(-45deg);
					letter-spacing: 4rpx;
					z-index: 333;
				}
				.item_content{
					// border: 1px solid #2233ee;
					width: 46%;
					height: 52%;
					margin-left: 120rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.item_tit{
						font-size: 36rpx;
						font-weight: bold;
						letter-spacing: 10rpx;
					}
					.item_info{
						font-size: 26rpx;
						color: #9E9E9E;
						display: flex;
						justify-content: space-between;
						.ymd_time{}
						.hm_time{}
						.author_name{}
					}
				}
				.item_state{
					width: 14%;
					height: 24%;
					background: linear-gradient(top,#FD736C,#FD957C,#FDAB87);
					border-radius: 35rpx;
					color: #FFFFFF;
					font-size: 26rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 0 40rpx;
				}
				.isRead{
					background: #BFBCBC;
				}
			}
			.notice_item:active{
				background-color: #eaeaea;
			}
			.empty{
				width: 100%;
				height: 20%;
			}
		}
		.news{
			width: 100%;
			height: 100%;
			// border: 1px solid #007AFF;
			display: flex;
			flex-direction: column;
			align-items: center;
			.news_head{
				width: 95%;
				height: 12%;
				margin-top: 40rpx;
				background: #FFFFFF;
				box-shadow: 0 5rpx 5rpx 1rpx #d2d6da;
				border-radius: 25rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				.head_item{
					display: flex;
					align-items: center;
					.icon_row{
						display: flex;
						justify-content: center;
						align-items: center;
						position: relative;
						.item_icon{
							margin: 0 15rpx;
							width: 50rpx;
							height: 50rpx;
							background: #CB8DF3;
							border-radius: 50%;
							padding: 15rpx;
						}
					}
					
					.item_tit{
						font-size: 36rpx;
						font-weight: 550;
						margin-left: 10rpx;
					}
				}
			}
			.newsContent{
				margin-top: 15rpx;
				width: 95%;
				height: 80%;
				// border: 1px solid #F0AD4E;
				overflow: scroll;
				.new_item{
					width: 100%;
					height: 15%;
					background: #FFFFFF;
					border-radius: 25rpx;
					margin: 30rpx 0;
					display: flex;
					justify-content: center;
					align-items: center;
					.user_icon{
						// border: 1px solid #007AFF;
						width: calc(100vh*0.65*0.16*0.74*0.92);
						height: 65%;
						border-radius: 50%;
					}
					.news_center{
						// border: 1px solid #007AFF;
						width: 50%;
						height: 60%;
						margin:0 20rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						font-family: "思源黑体";
						.user_name{
							font-size: 36rpx;
							font-weight: 550;
						}
						.user_msg{
							font-size: 28rpx;
							color: #343434;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
					}
					.msg_info{
						// border: 1px solid #007AFF;
						width: 23%;
						height: 70%;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-left: 20rpx;
						.msg_info_time{
							color: #6A6A6A;
						}
						.msg_unread{
							width: 40rpx;
							height: 40rpx;
							border-radius: 50%;
							display: flex;
							justify-content: center;
							align-items: center;
							font-size: 12rpx;
							margin: 0 20rpx;
							color: #FFFFFF;
							background: #FD706B;
						}
						.bp{
							width: 70rpx;
							height: 30rpx;
							border-radius: 40rpx;
						}
					}
				}
				.new_item:active{
					background-color: #eaeaea;
				}
			}
		}
	}
</style>
