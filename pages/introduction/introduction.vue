<template>
	<view class="content">
		<image @click="previewImage_av()" mode="aspectFill" class="aerialView" src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1891230489,478470516&fm=26&gp=0.jpg"></image>
		<view class="tips"><text>园 区 介 绍</text></view>
		<view class="intro_text">
			欢迎来到美丽的清华,清华大学校园占地356公顷，建筑面积168万平方米，校内绿草青青树木成荫，景色优雅。
			清华大学是中国著名高等学府，坐落于北京西北郊风景秀丽的清华园，是中国高层次人才培养和科学技术研究的重要基地
		</view>
		<view class="show_img_row">
			<!-- <image class="show_img" lazy-load @click="previewImage(index)" v-for="(item,index) in showImgList" :src="item"></image> -->
			<u-image class="show_img" lazy-load width="48%" height="42%"
			@click="previewImage(index)" v-for="(item,index) in showImgList" :src="item"></u-image>
		</view>
		<view class="tips"><text>联 系 方 式</text></view>
		
		<view class="contact_infos">
			<view class="item">地点&nbsp;:北京市海淀区清华大学</view>
			<view class="item">邮编&nbsp;:000000</view>
			<view class="item">电话&nbsp;:010-62793001</view>
			<view class="item">传真&nbsp;:15006448</view>
			<view class="item">电子邮件&nbsp;:webmaster@tsinghua.cn</view>
		</view>
		
		<view class="bottom_info">
			<view>幼儿园招生办</view>
			<view>2021年3月24日</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showImgList:[
					"https://www.tsinghua.edu.cn/images/20/04/26/1jzq01kxfy/DJI_0814.jpg",
					"https://www.tsinghua.edu.cn/images/20/04/25/5xbjd7p1bj/7kexuelou.jpg",
					"https://www.tsinghua.edu.cn/images/20/04/25/5xbjd7p1bj/11likelou.jpg",
					"https://www.tsinghua.edu.cn/images/20/04/29/25rbqm7ka5/6erxiaomen-1.jpg"
					
				]
			};
		},
		methods:{
			previewImage(index){
				uni.previewImage({
					urls:this.showImgList,
					current:index,
					loop:true,
					indicator:"default"
				})
			},
			previewImage_av(){
				uni.previewImage({
					urls:["https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1891230489,478470516&fm=26&gp=0.jpg"],
					current:0
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: calc(100vh*0.94);
		background: #F5FAFF;
		border-top: 1px solid #e2e2e2;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		.aerialView{
			width: 86%;
			height: 20%;
			border-radius: 30rpx;
			margin: 40rpx 0;
		}
		.tips{
			width: 90%;
			// background: #7CC8F6;
			color: #FFFFFF;
			margin: 30rpx 0;
			text{
				padding: 10rpx 25rpx;
				background: #7CC8F6;
				border-radius: 45rpx;
				
			}
		}
		.intro_text{
			width: 90%;
			height: 8%;
			overflow: scroll;
			text-indent: 2em;
			letter-spacing: 6rpx;
			line-height: 35rpx;
			font-size: 24rpx;
		}
		.show_img_row{
			width: 85%;
			height: 24%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			.show_img{
				width: 48%;
				height: 42%;
				border-radius: 10rpx;
			}
		}
		.contact_infos{
			width: 85%;
			.item{
				margin: 5rpx;
				letter-spacing: 5rpx;
				font-size: 24rpx;
			}
		}
		.bottom_info{
			position: absolute;
			bottom: 20rpx;
			right: 40rpx;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			font-size: 24rpx;
		}
	}
</style>
