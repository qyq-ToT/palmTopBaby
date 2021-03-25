<template>
	<view class="content">
		<view class="input_row">
			<textarea placeholder="记录宝贝的点滴生活....." maxlength="300"
			v-model="input_val" @input="countVal()">{{input_val}}</textarea>
			<view class="textCount">{{ handle }}</view>
			<view class="select_img">
				<image @click="selectImg" v-if="hasImg==false" class="click_icon" src="../../static/camera.png"></image>
				<image v-else class="simg" :src="selectImgSrc"></image>
			</view>
		</view>
		<view class="redio_row">
			<image @click="redioChange" :src="redioIconSrc"></image>
			<view class="tit">分享到动态</view>
		</view>
		<view :class="input_count>0&&hasImg?'':'sub_disable'" @click="subContent" class="subBtn">发 布</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				input_val:"",
				input_count:0,
				hasImg:false,
				selectImgSrc:"",
				redioIconSrc:"../../static/share.png",
				isShare:false
			};
		},
		methods:{
			countVal(){
				// console.log(this.input_val)
				this.input_count = this.input_val.length
				// console.log(this.input_count)
			},
			selectImg(){
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
					success: (res) => {
						let src = JSON.stringify(res.tempFilePaths)
						console.log(res);
						this.selectImgSrc = src
						this.hasImg = true
					}
				});
			},
			redioChange(){
				if(!this.isShare){
					this.redioIconSrc = "../../static/share_select.png"
				}else{
					this.redioIconSrc = "../../static/share.png"
				}
				this.isShare = !this.isShare
			},
			subContent(){
				let inputVal = this.input_val
				let shareImg = this.selectImgSrc
				console.log(inputVal,shareImg)
			}
		},
		computed:{
			handle(){
				let res = this.input_count + '/' + 300
				return res
			}
		}
	}
</script>

<style lang="scss">
	*{
		font-family: "思源黑体";
	}
	.content{
		min-height: 100vh;
		height: auto;
		width: 100%;
		overflow: hidden;
		background: #efefef;
		.input_row{
			border-top: 6rpx solid #efefef;
			width: 100%;
			height: calc(100vh*0.45);
			background: #FFFFFF;
			display: flex;
			flex-direction: column;
			// justify-content: space-around;
			align-items: center;
			textarea{
				// border: 1px solid #007AFF;
				width: 80%;
				height: 40%;
				font-size: 28rpx;
				margin: 20rpx 0;
			}
			// textarea::placeholder{
				
			// }
			.textCount{
				// border: 1px solid #f4b2c3;
				width: 80%;
				height: 10%;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 26rpx;
			}
			.select_img{
				margin-top: 40rpx;
				width: 80%;
				height: 20%;
				.click_icon{
					border: 1rpx solid #161616;
					border-radius: 10rpx;
					width: 65rpx;
					height: 65rpx;
					padding: 50rpx;
				}
				.simg{
					width: 165rpx;
					height: 165rpx;
					border: 1rpx solid #161616;
					border-radius: 10rpx;
				}
			}
		}
	
		.redio_row{
			margin-top: 20rpx;
			// border: 1px solid gold;
			width: 100%;
			height: calc(100vh*0.03);
			display: flex;
			align-items: center;
			image{
				width: 45rpx;
				height: 45rpx;
				margin: 0 15rpx;
			}
			.tit{
				font-size: 24rpx;
			}
		}
	
		.subBtn{
			background: linear-gradient(left bottom,#FDA081,#FD9B7F,#FD7C70);
			width: 40%;
			height: calc(100vh*0.055);
			margin: auto;
			margin-top: 60rpx;
			border-radius: 40rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 30rpx;
			color: #FFFFFF;
		}
		.sub_disable{
			background: #C9C9C9;
			pointer-events: none;
		}
	}
</style>
