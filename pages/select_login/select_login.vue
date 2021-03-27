<template>
	<view class="content">
		<h2 style="color: #333333;margin-top: 120rpx;" >
			请&nbsp;&nbsp;选&nbsp;&nbsp;择&nbsp;&nbsp;你&nbsp;&nbsp;的&nbsp;&nbsp;角&nbsp;&nbsp;色
		</h2>
		<div style="color: #333333;margin-top: 20rpx;margin-bottom: 40rpx;">进入后可在"我的"界面切换登陆</div>
		<view @click="selectRole(1)" :class="role=='1'?'selectRole':''" class="parent">
			<image mode="aspectFit" src="../../static/parent.png"></image>
			<view class="tit1">家&nbsp;&nbsp;&nbsp;&nbsp;长</view>
			<view class="tit2">P&nbsp;A&nbsp;R&nbsp;E&nbsp;N&nbsp;T</view>
		</view>
		<view class="divid_line">—————&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—————</view>
		<view @click="selectRole(2)" :class="role=='2'?'selectRole':''" class="gardener">
			<image lazy-load="true" mode="aspectFit" src="../../static/gardener.png"></image>
			<view class="tit1">园&nbsp;&nbsp;&nbsp;&nbsp;丁</view>
			<view class="tit2">G&nbsp;A&nbsp;R&nbsp;D&nbsp;E&nbsp;N&nbsp;E&nbsp;R</view>
		</view>
		<view :class="isDisable==false?'loginBtnDisable':''" class="loginBtn" @click="navtoIndex()">确 认 登 陆</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 登陆按钮的状态
				isDisable:false,
				role:""
			};
		},
		methods:{
			navtoIndex(){
				// uni.switchTab({
				//     url: '../index/index',
				// 	success: () => {
				// 		uni.setStorageSync("role",this.role)
				// 	}
				// });
				uni.navigateTo({
					url:"../login/login",
					success: () => {
						uni.setStorageSync("role",this.role);
					}
				})
			},
			selectRole(val){
				this.isDisable = true
				if(val==1){
					this.role = "1"
				}else if(val==2){
					this.role = "2"
				}
			}
		}
	}
</script>

<style lang="scss">
	*{
		padding: 0;
		margin: 0;
		font-family: "楷书";
	}
	.content{
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		// justify-content: center;
		align-items: center;
		.parent,.gardener{
			width: 52%;
			height: 25%;
			// border: 1px solid red;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			margin: 10rpx 0;
			image{
				width: 90%;
				height: 50%;
			}
			.tit1{
				font-size: 36rpx;
				margin-top: 25rpx;
				font-weight: bolder;
			}
			.tit2{
				font-size: 28rpx;
				margin-top: 10rpx;
			}
		}
		.divid_line{
			font-size: 24rpx;
			color: #B6B5B5;
		}
		.loginBtn{
			margin-top: 32rpx;
			width: 60%;
			height: 6%;
			padding: 10rpx 10rpx;
			font-size: 40rpx;
			color: #FFFFFF;
			font-size: 28rpx;
			background: linear-gradient(left,#FD726C,#FD957C,#FEAD88);
			border-radius: 30rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.loginBtnDisable{
			pointer-events: none;
			background: #C9C9C9;
		}
		.selectRole{
			border-radius: 30rpx;
			box-shadow: 0 0 18rpx 1rpx #e2e2e2;
		}
	}
</style>
