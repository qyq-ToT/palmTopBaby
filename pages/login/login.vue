<template>
	<view class="content">
		<view class="bg_img">
			<image mode="widthFix" class="img" src="../../static/login_bg.png"></image>
			<view class="tips">欢迎登陆</view>
		</view>
		<view class="input_row">
			<input @input="inum" class="i_num" type="number" placeholder="请输入手机号" />
			<view class="code_row">
				<input class="i_code" @input="ipwd" type="text" placeholder="密码" />
				<view :class="canSendCode?'':'noSend'" class="code_state" @click="sendCode">{{codeState}}</view>
				<!-- <button class="code_state" @getuserinfo="getUserInfo()">验证码登陆</button> -->
				<!-- <view class="code_state">30S后重新发送</view> -->
			</view>
			<u-button class="subBtn" :ripple="true" ripple-bg-color="rgba(255,255,255,0.5)"
			:class="(uphone_num=='' || upassword=='')?'disable':''"  @click="navtoIndex">登 陆</u-button>
			<!-- {{res}} -->
			<!-- {{res}} -->
			<view class="input_bottom">
				<view class="wexin">
					<image src="../../static/wexin.png"></image>
					<view class="tit">微信登陆</view>
				</view>
				<view class="cline"></view>
				<!-- <navigator class="forget" @click="findPassword">忘记密码？</navigator> -->
				<view @click="findPassword" class="forget">忘记密码？</view>
			</view>
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
				res:{},
				codeState:"验证码登陆",
				canSendCode:true
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
			sendCode(){
				let second = 30
				
				let timer =  setInterval(()=>{
					second = second - 1
					this.codeState = second + "S后重新发送"
					
					if(second==0){
						this.codeState = "验证码登陆"
						clearInterval(timer)
						this.canSendCode = true
						console.log(123)
					}
				},1000)
				setTimeout(()=>{this.canSendCode = false},1000)
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
			findPassword(){
				uni.navigateTo({
					animationType:"pop-in",
					url:"../find_password/find_password"
				})
			}
			
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
				margin: auto;
				color: #FFFFFF;
				font-size: 44rpx;
				font-weight: bold;
				width: auto;
				height: 60rpx;
				letter-spacing: 6rpx;
				text-indent: 2em;
			}
		}
	
		.input_row{
			position: absolute;
			bottom: calc(-100vh*0.3);
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
			// justify-content: center;
			align-items: center;
			.i_num{
				width: 78%;
				height: 12%;
				border-bottom: 1rpx solid #999999;
				margin-top: 80rpx;
			}
			.code_row{
				width: 78%;
				height: 12%;
				border-bottom: 1rpx solid #999999;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 40rpx;
				.i_code{
					width: 40%;
					
				}
				.code_state{
					// border: 1px solid #19BE6B;
					width: auto;
					font-size: 24rpx;
					text-align: end;
					letter-spacing: 3rpx;
					color: #FD756D;
					// color: #CFCFCF;
				}
				.noSend{
					pointer-events: none;
					color: #cfcfcf;
				}
			}
			.subBtn{
				margin-top: 80rpx;
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
		
			.input_bottom{
				position: absolute;
				bottom: 20rpx;
				// border: 1px solid gold;
				width: 76%;
				height: 10%;
				display: flex;
				justify-content: center;
				align-items: center;
				.wexin{
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: center;
					image{
						width: 30rpx;
						height: 30rpx;
					}
					.tit{
						margin-left: 10rpx;
					}
				}
				.cline{
					width: 1rpx;
					height: 80%;
					background: #333333;
				}
				.forget{
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
		
	}
</style>
