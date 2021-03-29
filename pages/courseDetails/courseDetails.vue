<template>
	<view class="content">
		<view v-for="(item,index) in courseList" class="courseItem">
			<image mode="aspectFill" class="course_img" :src="item.src"></image>
			<view class="course_info">{{item.info}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				courseList:[
					{
						src:"https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=539734691,2078242989&fm=26&gp=0.jpg",
						info:"【龙跃教育】寒假辅导班火热招生中"
					},
					{
						src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3436517804,1636904220&fm=26&gp=0.jpg",
						info:"【暑假补习班】两年高考三年模拟"
					}
				]
			};
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		.courseItem{
			margin-top: 50rpx;
			width: 80%;
			height: calc(100vh*0.22);
			box-shadow: 0 0 15rpx 2rpx #e6e6e6;
			border-radius: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.course_img{
				width: 88%;
				height: 70%;
				border-radius: 20rpx;
			}
			.course_info{
				width: 82%;
				font-size: 24rpx;
				margin-top: 20rpx;
			}
		}
	}
</style>
