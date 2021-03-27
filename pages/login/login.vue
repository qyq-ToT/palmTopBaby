<template>
	<view class="content">
		<view class="bg_img">
			<image mode="widthFix" class="img" src="../../static/login_bg.png"></image>
			<view class="tips">欢迎登陆</view>
		</view>
		<view class="input_row">
			<input @input="inum" class="i_num" type="number" placeholder="请输入手机号" />
			<view class="code_row">
				<input class="i_code" @input="ipwd" type="text" placeholder="验证码" />
				<view class="code_state" @click="getUserInfo">验证码登陆</view>
				<!-- <button class="code_state" @getuserinfo="getUserInfo()">验证码登陆</button> -->
				<!-- <view class="code_state">30S后重新发送</view> -->
			</view>
			<u-button class="subBtn" :ripple="true" ripple-bg-color="rgba(255,255,255,0.5)"
			:class="(uphone_num=='' || upassword=='')?'disable':''"  @click="navtoIndex">登 陆</u-button>
			<!-- {{res}} -->
			<!-- {{res}} -->
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logRes:"",
				uphone_num:"",
				upassword:"",
				res:{}
			};
		},
		methods:{
			inum(e){
				this.uphone_num = e.detail.value
				console.log(this.uphone_num)
			},
			ipwd(e){
				this.upassword = e.detail.value
			},
			getUserInfo(){
				uni.getProvider({
					service:"oauth",
					success: (res) => {
						console.log(res)
						this.res = res
					}
				})
			},
			navtoIndex(){
				uni.switchTab({
				    url: '../index/index',
					success: () => {
						uni.setStorageSync("role",this.role)
					}
				});
				// uni.getProvider({
				//     service: 'oauth',
				//     success: function (res) {
				//         console.log(res.provider)
				// 		// uni.login({
				// 		// 	provider:"weixin",
				// 		// 	success: (logRes) => {
				// 		// 		this.logRes = logRes
				// 		// 	}
				// 		// })
				//     }
				// });
			},
			
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: auto;
		position: relative;
		.bg_img{
			width: 100%;
			height: auto;
			position: relative;
			.img{
				width: 100%;
			}
			.tips{
				position: absolute;
				top: 0;
				bottom: 0;
				left: 40rpx;
				margin: auto;
				color: #FFFFFF;
				font-size: 44rpx;
				font-weight: bold;
				width: auto;
				height: 60rpx;
				letter-spacing: 6rpx;
			}
		}
	
		.input_row{
			position: absolute;
			top: 350rpx;
			left: 0;
			right: 0;
			margin: auto;
			width: 82%;
			height: calc(100vh*0.38);
			background: #FFFFFF;
			border-radius: 30rpx;
			box-shadow: 0 0 5rpx 2rpx #C0C4CC;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.i_num{
				width: 78%;
				height: 20%;
				border-bottom: 1rpx solid #999999;
			}
			.code_row{
				width: 78%;
				height: 20%;
				border-bottom: 1rpx solid #999999;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 80rpx;
				.i_code{
					width: 32%;
					
				}
				.code_state{
					// border: 1px solid #19BE6B;
					width: 55%;
					font-size: 24rpx;
					text-align: end;
					letter-spacing: 3rpx;
					color: #FD756D;
					// color: #CFCFCF;
				}
			}
			.subBtn{
				border-radius: 45rpx;
				width: 68%;
				height: 12%;
				border: none !important;
				background: #007AFF;
				color: #FFFFFF;
				font-size: 28rpx;
				background: linear-gradient(top,#FD756D,#FD8D78,#FDA986);
			}
			.disable{
				background: #CFCFCF;
				pointer-events: none;
			}
		}
		
	}
</style>
