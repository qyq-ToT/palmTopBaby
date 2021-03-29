<template>
	<view class="content">
		<view class="input_row">
			<view class="rows_tit">设置密码</view>
			<input @input="inum" class="i_num" type="text" placeholder="请输入新密码" />
			<view class="code_row">
				<input class="i_code" @input="ipwd" type="text" placeholder="请再次输入新密码" />
			</view>
			<u-button class="subBtn" :ripple="true" ripple-bg-color="rgba(255,255,255,0.5)"
			:class="(new_password==old_password&&old_password!='')?'':'disable'"  @click="setPassword">确 定</u-button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				old_password:"",
				new_password:"",
				res:{},
				codeState:"验证码登陆",
				canSendCode:true
			};
		},
		methods:{
			inum(e){
				this.old_password = e.detail.value
				console.log(this.uphone_num)
			},
			ipwd(e){
				this.new_password = e.detail.value
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
			setPassword(){
				uni.showLoading({
					mask:true,
					title:"提交中",
					success: () => {
						setTimeout(()=>{
							uni.hideLoading()
							uni.showModal({
							    title: '设置成功',
							    content: '请返回登陆界面重新登陆',
							    success: function (res) {
							        if (res.confirm) {
							            console.log('用户点击确定');
										uni.navigateTo({
											url:"../login/login"
										})
							        } else if (res.cancel) {
							            console.log('用户点击取消');
							        }
							    }
							});
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
