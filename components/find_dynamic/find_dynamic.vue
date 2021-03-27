<template>
	<view class="content">
		<view class="dynamic_row" v-for="(item,index) in dynamicList">
			<view v-if="item.type=='video'" class="video_row">
				<view class="user_info">
					<image class="user_icon" :src="item.icon_src"></image>
					<view class="user_name">{{item.u_name}}</view>
				</view>
				<view class="dynamic_tit">{{item.dynamic_tit}}</view>
				<view class="video_box">
					<video class="video" :src="item.res_src"></video>
				</view>
				<view class="dynamic_infos">
					<view class="time">{{item.release_time}}</view>
					<view class="right_info">
						<view class="fabulous_info">
							<image class="f_icon" src="../../static/camera.png"></image>
							<view class="f_count">{{item.f_count}}</view>
						</view>
						<view class="comment_info">
							<image class="c_icon" src="../../static/camera.png"></image>
							<view class="c_count">{{item.c_count}}</view>
						</view>
					</view>
				</view>
				<view class="fabulous_row">
					<image class="fr_icon" src="../../static/index_img/car.png"></image>
					<view class="f_txt">张妈妈,多多老师等123人点赞</view>
				</view>
				<view class="comment_row">
					<image class="cr_icon" src="../../static/index_img/car.png"></image>
					<view class="self_row">
						<view class="sr_item">
							<view class="sr_u_name">你大爷: </view>
							<view class="sr_u_msg">去你大爷的</view>
						</view>
						<view class="sr_item">
							<view class="sr_u_name">你大爷: </view>
							<view class="sr_u_msg">去你大爷的</view>
						</view>
						<view class="sr_item">
							<view class="sr_u_name">你大爷: </view>
							<view class="sr_u_msg">去你大爷的</view>
						</view>
					</view>
				</view>
			</view>
			<view v-else class="png_row">
				<view class="pr_left">
					<view class="user_info">
						<image class="user_icon" :src="item.icon_src"></image>
						<view class="user_name">{{item.u_name}}</view>
					</view>
					<view class="dynamic_tit">{{item.dynamic_tit}}</view>
					<view class="dynamic_article">{{item.article}}</view>
				</view>
				<view class="dy_img_row">
					<image mode="aspectFill" :src="item.res_src"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dynamicList:[
					{
						type:"png",
						icon_src:"https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1174701681,3917824445&fm=26&gp=0.jpg",
						u_name:"大老师",
						dynamic_tit:"看我这波操作",
						release_time:"2021-03-07 14:57",
						f_count:4,
						c_count:2999,
						article:"毛泽东（1893年12月26日-1976年9月9日），字润之（原作咏芝，后改润芝），笔名子任。湖南湘潭人。中国人民的领袖，伟大的马克思主义者，无产阶级革命家、战略家和理论家，中国共产党、中国人民解放军和中华人民共和国的主要缔造者和领导人，政治家 [1]  ，军事家 [2]  ，诗人，书法家。 [3] 1949至1976年，毛泽东担任中华人民共和国最高领导人。他对马克思列宁主义的发展、军事理论的贡献以及对共产党的理论贡献被称为毛泽东思想。因毛泽东担任过的主要职务几乎全部称为主席，所以也被人们尊称为“毛主席”。",
						res_src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892145690,2677137013&fm=26&gp=0.jpg"
					},
					{
						type:"video",
						icon_src:"https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1174701681,3917824445&fm=26&gp=0.jpg",
						u_name:"大老师",
						dynamic_tit:"看我这波操作",
						release_time:"2021-03-07 14:57",
						f_count:4,
						c_count:2999,
						res_src:"https://apd-c723a51ac443dd08c6eb11bf3de33262.v.smtcdns.com/vweishi.tc.qq.com/A4twHb4uK8kvMfD3StAHIEIjTNFKRRRqg-wcHIONNyEo/j0864yax0ii.mp4?sdtfrom=v1010&guid=1e146e77d4280dcf14de5d40bb400209&vkey=038E0FBDC8682C2253A4499BD18A7268F403B26DCF35300DB5EE4497ED80E615572675315D072BB9550F74EF034D03E7A63CB9E87A4673DA492FB0AAF07A921C83239829E99171E7186EBA763DFAEAC1BAA156FFFACE907EDF74BF0FD0C2D01848F8BDB501D98AF4B9B59FCDCCE5C8C303D3010548F8373A92170CA9D17D01FE"
					},
					{
						type:"video",
						icon_src:"https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1174701681,3917824445&fm=26&gp=0.jpg",
						u_name:"大老师",
						dynamic_tit:"看我这波操作",
						release_time:"2021-03-07 14:57",
						f_count:4,
						c_count:2999,
						res_src:"https://apd-c723a51ac443dd08c6eb11bf3de33262.v.smtcdns.com/vweishi.tc.qq.com/A4twHb4uK8kvMfD3StAHIEIjTNFKRRRqg-wcHIONNyEo/j0864yax0ii.mp4?sdtfrom=v1010&guid=1e146e77d4280dcf14de5d40bb400209&vkey=038E0FBDC8682C2253A4499BD18A7268F403B26DCF35300DB5EE4497ED80E615572675315D072BB9550F74EF034D03E7A63CB9E87A4673DA492FB0AAF07A921C83239829E99171E7186EBA763DFAEAC1BAA156FFFACE907EDF74BF0FD0C2D01848F8BDB501D98AF4B9B59FCDCCE5C8C303D3010548F8373A92170CA9D17D01FE"
					},
					{
						type:"video",
						icon_src:"https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1174701681,3917824445&fm=26&gp=0.jpg",
						u_name:"大老师",
						dynamic_tit:"看我这波操作",
						release_time:"2021-03-07 14:57",
						f_count:4,
						c_count:2999,
						res_src:"https://apd-c723a51ac443dd08c6eb11bf3de33262.v.smtcdns.com/vweishi.tc.qq.com/A4twHb4uK8kvMfD3StAHIEIjTNFKRRRqg-wcHIONNyEo/j0864yax0ii.mp4?sdtfrom=v1010&guid=1e146e77d4280dcf14de5d40bb400209&vkey=038E0FBDC8682C2253A4499BD18A7268F403B26DCF35300DB5EE4497ED80E615572675315D072BB9550F74EF034D03E7A63CB9E87A4673DA492FB0AAF07A921C83239829E99171E7186EBA763DFAEAC1BAA156FFFACE907EDF74BF0FD0C2D01848F8BDB501D98AF4B9B59FCDCCE5C8C303D3010548F8373A92170CA9D17D01FE"
					}
				]
			};
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: calc(100vh*0.92);
		overflow: scroll;
		.dynamic_row{
			width: 94%;
			height: auto;
			border-radius: 10rpx;
			box-shadow: 0rpx 4rpx 6rpx 4rpx #e6e6e6;
			margin: auto;
			margin-top: 20rpx;
			.video_row{
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				padding-bottom: 30rpx;
				.user_info{
					// border: 1px solid #FF9900;
					width: 92%;
					height: calc(100vh*0.05);
					display: flex;
					align-items: center;
					margin-top: 40rpx;
					.user_icon{
						width: 70rpx;
						height: 70rpx;
						border-radius: 50%;
					}
					.user_name{
						font-size: 36rpx;
						margin-left: 20rpx;
						font-weight: bold;
						
					}
				}
				.dynamic_tit{
					width: 92%;
					font-size: 26rpx;
					margin-top: 25rpx;
				}
				.video_box{
					width: 92%;
					margin-top: 20rpx;
					background: #FFFFFF;
					.video{
						width: 70%;
						height: calc(100vh*0.16);
						
					}
				}
				.dynamic_infos{
					width: 92%;
					margin: 15rpx 0;
					display: flex;
					justify-content: space-between;
					.time{
						font-size: 24rpx;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.right_info{
						// border: 1px solid #007AFF;
						width: 35%;
						display: flex;
						.fabulous_info{
							flex: 1;
							display: flex;
							align-items: center;
							
							.f_icon{
								width: 40rpx;
								height: 40rpx;
							}
							.f_count{
								margin-left: 10rpx;
								font-size: 24rpx;
							}
						}
						.comment_info{
							flex: 1;
							display: flex;
							align-items: center;
							.c_icon{
								width: 40rpx;
								height: 40rpx;
							}
							.c_count{
								margin-left: 10rpx;
								font-size: 26rpx;
							}
						}
					}
				}
			
				.fabulous_row{
					width: 90%;
					height: 80rpx;
					display: flex;
					align-items: center;
					margin: 15rpx 0;
					border-bottom: 1rpx solid #ececec;
					.fr_icon{
						width: 40rpx;
						height: 40rpx;
					}
					.f_txt{
						font-size: 26rpx;
						margin-left: 15rpx;
					}
				}
				.comment_row{
					display: flex;
					align-items: flex-start;
					width: 90%;
					height: auto;
					.cr_icon{
						margin-top: 20rpx;
						width: 40rpx;
						height: 40rpx;
					}
					.self_row{
						margin-left: 15rpx;
						margin-top: 10rpx;
						.sr_item{
							// border: 1px solid #19BE6B;
							width: calc(100vw*0.7);
							display: flex;
							margin-top: 10rpx;
							.sr_u_name{
								font-size: 26rpx;
							}
							.sr_u_msg{
								text-indent: 0.5rem;
								font-size: 26rpx;
							}
						}
					}
				}
			}
		
		
		
			.png_row{
				// border: 1px solid #FF9900;
				width: 100%;
				height: calc(100vh*0.22);
				max-height: 155px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				overflow: hidden;
				font-size: 26rpx;
				.pr_left{
					// border: 1px solid #18B566;
					width: 68%;
					height: 100%;
					.user_info{
						width: 92%;
						display: flex;
						align-items: center;
						margin-top: 40rpx;
						.user_icon{
							width: 70rpx;
							height: 70rpx;
							border-radius: 50%;
							margin-left: calc(100vw*0.034);
						}
						.user_name{
							font-size: 36rpx;
							margin-left: 20rpx;
							font-weight: bold;
							
						}
					}
					.dynamic_tit{
						width: 92%;
						font-size: 26rpx;
						margin-top: 20rpx;
						margin-left: calc(100vw*0.034);
					}
					.dynamic_article{
						// border: 1px solid #2B85E4;
						width: 100%;
						margin-top: 15rpx;
						font-size: 26rpx;
						text-indent: 2rem;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
						margin-left: calc(100vw*0.034);
					}
				}
				.dy_img_row{
					// border: 1px solid #18B566;
					width: 30%;
					height: 80%;
					display: flex;
					justify-content: center;
					align-items: flex-end;
					image{
						width: 76%;
						height: 68%;
					}
				}
			}
		}
	}
</style>
