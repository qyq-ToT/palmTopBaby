<template>
	<view class="content">
		<!-- 时间选择 -->
		<view class="selctTime">
			<view class="tits">开始时间</view>
			<u-picker @confirm="confirm_1" v-model="show" mode="time" :params="params" safe-area-inset-bottom
				title="选择时间"></u-picker>
			<view class="time">{{time_1}}</view>
			<view class="tips">请选择</view>
			<image src="../../static/mineImgs/arrow_right_sm_black.png" @click="show = true"></image>
		</view>
		<view class="selctTime">
			<view class="tits">开始时间</view>
			<u-picker @confirm="confirm_2" v-model="show_2" mode="time" :params="params" safe-area-inset-bottom
				title="选择时间"></u-picker>
			<view class="time">{{time_2}}</view>
			<view class="tips" :style="has_2?'opacity: 0':''">请选择</view>
			<image src="../../static/mineImgs/arrow_right_sm_black.png" @click="show_2 = true"></image>
		</view>
		<!-- 请假原因 -->
		<view class="reason">
			<view class="tit">请假原因</view>
			<textarea v-model="reason" :placeholder="placeholder"></textarea>
		</view>
		<!-- 请假类型 -->
		<view class="tit">请假原因</view>
		<radio-group class="leave_type" @change="radioChange">
			<view class="redio_row" v-for="(item,index) in redioList">
				<radio :checked="item.checked" color="#FD706B" style="transform:scale(0.7)" :value="item.value"></radio>
				<view class="redio_name">{{item.name}}</view>
			</view>
		</radio-group>
		<!-- 审批人 -->
		<view class="tit">审批人</view>
		<view class="spproved_row">
			<view class="item" v-for="(item,index) in spprovedList">
				<view class="spproved_icon">
					<image class="spproved_icon" :src="item.src"></image>
				</view>
				<view class="spproved_name">{{item.name}}</view>
			</view>
			<view class="add_spproved" @click="addSpproved">+</view>
		</view>
		
		<u-button @click="commitLeave()" class="subBtn" :ripple="true" ripple-bg-color="#909399">提价申请</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				show_2: false,
				mode: "",
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: false,
					second: false
				},
				time_1: "",
				time_2: "",
				has_1: false,
				has_2: false,
				placeholder: "如:小朋友今天身体不舒服,需要请假看医生,希望老师知晓",
				reason: "",
				redioList:[
					{
						value:"cl",
						name:"事假"
					},
					{
						value:"sl",
						name:"病假",
						checked:"true"
					},
					{
						value:"other",
						name:"类型"
					}
				],
				// 审批人数据源
				spprovedList:[
					{
						src:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912439891,3274383482&fm=26&gp=0.jpg",
						name:"宇智波斑"
					},
					{
						src:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912439891,3274383482&fm=26&gp=0.jpg",
						name:"宇智波斑"
					}
				]
			};
		},
		methods: {
			confirm_1(e) {
				console.log(e)
				let str = e.year + '-' + e.month + '-' + e.day + '  ' + e.hour + ":00"
				this.time_1 = str
				this.has_1 = true
			},
			confirm_2(e) {
				console.log(e)
				let str = e.year + '-' + e.month + '-' + e.day + '-' + e.hour + ":00"
				this.time_2 = str
				this.has_2 = true
			},
			radioChange(e) {
				console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				console.log(e);
			},
			// 提交请假申请
			commitLeave(){
				uni.showLoading({
					mask:true,
					title:"提交中...",
					success: () => {
						setTimeout(()=>{
							uni.hideLoading()
							uni.showModal({
								title:"系统提示",
								content:"提交成功!!!",
								showCancel:false
							})
						},3000)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: calc(100vh*0.92);
		overflow: hidden;
		border-top: 4rpx solid #eae9e9;
		display: flex;
		flex-direction: column;
		align-items: center;

		.selctTime {
			// border: 1px solid #007AFF;
			width: 90%;
			height: 8%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #eaeaea;
			color: #8F8F8F;

			.tits {
				font-size: 30rpx;
				font-weight: bold;
				color: #333333;
			}

			.time {
				width: 50%;
				font-size: 26rpx;
			}

			.tips {
				color: #444444;
			}

			image {
				width: 30rpx;
				height: 30rpx;
				padding: 15rpx;
			}
		}

		.reason {
			border-bottom: 1px solid #eaeaea;
			width: 90%;
			height: 25%;

			.tit {
				font-size: 30rpx;
				font-weight: bold;
				color: #333333;
				margin: 25rpx 0;
			}

			textarea {
				// border: 1px solid #F0AD4E;
				width: 100%;
				height: 60%;
			}
		}
	
		.leave_type{
			margin-top: 30rpx;
			width: 65%;
			height: 5%;
			display: flex;
			justify-content: space-around;
			.redio_row{
				display: flex;
				.radio{
					
				}
				.redio_name{
					font-size: 34rpx;
					color: #828282;
				}
			}
		}
		
		.spproved_row{
			// border: 1px solid #007AFF;
			margin-top: 40rpx;
			width: 75%;
			height: auto;
			display: flex;
			.item{
				display: flex;
				flex-direction: column;
				align-items: center;
				margin: 0 15rpx;
				.spproved_icon{
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					border: 3rpx solid #FFFFFF;
					box-shadow: 1rpx 4rpx 8rpx 2rpx #c5c5c5;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.spproved_name{
					font-size: 24rpx;
					margin-top: 15rpx;
				}
			}
			.add_spproved{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				box-shadow: 0 4rpx 8rpx 2rpx #c5c5c5;
				font-size: 70rpx;
				margin-left: 15rpx;
				background: #F8F8F8;
			}
		}
		.subBtn{
			margin-top: 60rpx;
			border-radius: 45rpx;
			width: 45%;
			height: 5%;
			border: none !important;
			background: #007AFF;
			color: #FFFFFF;
			font-size: 28rpx;
			background: linear-gradient(top,#FD756D,#FD8D78,#FDA986);
		}
		.tit{
			width: 90%;
			font-size: 30rpx;
			font-weight: bold;
			color: #333333;
			margin-top: 20rpx;
		}
	}
	
</style>
