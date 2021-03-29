<template>
	<view class="content">
		<view class="input_row">
			<view class="rows_tit">验证手机号</view>
			<input @input="inum" class="i_num" type="number" placeholder="请输入手机号" />
			<view class="code_row">
				<input class="i_code" @input="ipwd" type="text" placeholder="验证码" />
				<view :class="canSendCode?'':'noSend'" class="code_state" @click="sendCode">{{codeState}}</view>
			</view>
			<u-button class="subBtn" :ripple="true" ripple-bg-color="rgba(255,255,255,0.5)"
			:class="(uphone_num=='' || upassword=='')?'disable':''"  @click="determine">确 定</u-button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
			determine(){
				uni.showLoading({
					mask:true,
					title:"验证中",
					success: () => {
						setTimeout(()=>{
							uni.hideLoading()
							uni.showToast({
								title:"验证通过",
								success: () => {
									uni.navigateTo({
										url:'../set_password/set_password'
									})
								}
							})
						},2000)
					}
				})
				console.log(111)
			}
		}
	}
</script>

<style lang="scss">
	.content{
		margin-top: 5rpx;
		width: 100%;
		height: auto;
		border-top: 2rpx solid #e2e2e2;
		box-shadow: 0 -10rpx 5rpx 2rpx #C0C4CC;
		.input_row{
			margin: auto;
			margin-top: 60rpx;
			width: 82%;
			height: calc(100vh*0.42);
			background: #FFFFFF;
			border-radius: 30rpx;
			box-shadow: 0 0 5rpx 2rpx #C0C4CC;
			display: flex;
			flex-direction: column;
			align-items: center;
			.rows_tit{
				width: 90%;
				height: 8%;
				border-left: 4rpx solid #999999;
				text-indent: 1em;
				font-size: 36rpx;
				font-weight: 600;
				margin-top: 1em;
				color: #565758;
				display: flex;
				align-items: center;
			}
			.i_num{
				width: 78%;
				height: 14%;
				border-bottom: 1rpx solid #999999;
				margin-top: 40rpx;
			}
			.code_row{
				width: 78%;
				height: 14%;
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
				width: 64%;
				height: 14%;
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
