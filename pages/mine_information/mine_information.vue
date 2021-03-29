<template>
	<view class="content">
		<!-- 头像 -->
		<view class="parent_icon_row">
			<view class="icon_row">
				<image class="parent_icon" src="https://img2.woyaogexing.com/2021/03/27/e234e1ea3eea45268e23fac77d1a872a!400x400.jpeg"></image>
				<view class="camera_icon_row">
					<image class="camera_icon" src="../../static/mineImgs/mine_i_camera.png"></image>
				</view>
			</view>
		</view>
		<!-- 家长信息 -->
		<view class="info_list parent_info">
			<view class="kb"></view>
			<view class="item">
				<view class="i_left">家长</view>
				<view class="i_right">
					<view class="ir_res">贾斯汀比伯</view>
					<image src="../../static/index_img/arrow_right_sm_black.png"></image>
				</view>
			</view>
			<view class="item">
				<view class="i_left">性别</view>
				<view class="i_right">
					<view class="ir_res">
						<view class="sex_redio">
							<view class="redio"></view>
							<view class="redio_name">爸爸</view>
						</view>
						<view class="sex_redio">
							<view class="redio"></view>
							<view class="redio_name">妈妈</view>
						</view>
					</view>
					<image src="../../static/index_img/arrow_right_sm_black.png"></image>
				</view>
			</view>
			<view style="border: none;" class="item">
				<view class="i_left">手机号</view>
				<view class="i_right">
					<view class="ir_res">14455667788</view>
					<image src="../../static/index_img/arrow_right_sm_black.png"></image>
				</view>
			</view>
		</view>
		<!-- 孩子信息 -->
		<view class="info_list child_info">
			<view class="kb"></view>
			<view class="item">
				<view class="i_left">宝宝头像</view>
				<view class="i_right">
					<view class="ir_res">
						<image src="../../static/mineImgs/student_status.png" class="child_icon"></image>
					</view>
					<image src="../../static/index_img/arrow_right_sm_black.png"></image>
				</view>
			</view>
			<view class="item">
				<view class="i_left">宝宝昵称</view>
				<view class="i_right">
					<view class="ir_res">14455667788</view>
					<image src="../../static/index_img/arrow_right_sm_black.png"></image>
				</view>
			</view>
			<view class="item">
				<view class="i_left">性别</view>
				<view class="i_right">
					<view class="ir_res">
						<view class="sex_redio">
							<view class="redio"></view>
							<view class="redio_name">男宝宝</view>
						</view>
						<view class="sex_redio">
							<view class="redio"></view>
							<view class="redio_name">女宝宝</view>
						</view>
					</view>
					<image src="../../static/index_img/arrow_right_sm_black.png"></image>
				</view>
			</view>
			<view class="item">
				<view class="i_left">出生日期</view>
				<u-picker @confirm="confirm_1" v-model="show" mode="time" :params="params" safe-area-inset-bottom
					title="选择出生日期"></u-picker>
				<view class="i_right">
					<view class="ir_res">{{time_1}}</view>
					<image @click="show = true" src="../../static/index_img/arrow_right_sm_black.png"></image>
				</view>
			</view>
			<view class="item">
				<view class="i_left">入园时间</view>
				<u-picker @confirm="confirm_2" v-model="show_2" mode="time" :params="params" safe-area-inset-bottom
					title="选择入园时间"></u-picker>
				<view class="i_right">
					<view class="ir_res">{{time_2}}</view>
					<image @click="show_2 = true" src="../../static/index_img/arrow_right_sm_black.png"></image>
				</view>
			</view>
			<view style="border: none;" class="item">
				<view class="i_left">所在班级</view>
				<u-select v-model="show_3" mode="single-column" :list="classList" @confirm="confirm_3"></u-select>
				<view class="i_right">
					<view class="ir_res">{{className}}</view>
					<image @click="show_3 = true" src="../../static/index_img/arrow_right_sm_black.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				show_2: false,
				show_3:false,
				mode: "",
				params: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				},
				// 家长性别
				p_sex:true,
				// 小孩性别
				c_sex:false,
				time_1: "1950-01-01",
				time_2: "1950-01-01",
				className:"没有人的班",
				classList:[
					{
						value:'1',
						label:"就是这个班"
					},
					{
						value:'2',
						label:"386旅独立团炊事班"
					},
					{
						value:'2',
						label:"GAY班"
					}
				]
			};
		},
		methods:{
			confirm_1(e) {
				console.log(e)
				let str = e.year + '-' + e.month + '-' + e.day
				this.time_1 = str
				this.has_1 = true
			},
			confirm_2(e) {
				console.log(e)
				let str = e.year + '-' + e.month + '-' + e.day
				this.time_2 = str
				this.has_2 = true
			},
			confirm_3(e){
				console.log(e[0].label)
				this.className = e[0].label
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: auto;
		.parent_icon_row{
			width: 100%;
			height: calc(100vh*0.12);
			border-top: 4rpx solid #d2d2d2;
			border-bottom: 4rpx solid #d2d2d2;
			display: flex;
			justify-content: center;
			align-items: center;
			.icon_row{
				position: relative;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				border: 2px solid #FD706B;
				border-radius: 50%;
				width: calc(100vh*0.12*0.8);
				height: 80%;
				.parent_icon{
					border-radius: 50%;
					width: 100%;
					height: 100%;
				}
				.camera_icon_row{
					position: absolute;
					bottom: -5px;
					right: -5px;
					width: 55rpx;
					height: 55rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					background: #FD706B;
					border-radius: 50%;
					.camera_icon{
						width: 35rpx;
						height: 35rpx;
					}
				}
				
			}
		}
	
		.info_list{
			width: 100%;
			height: calc(100vh*0.2);
			border-bottom: 4rpx solid #d2d2d2;
			display: flex;
			flex-direction: column;
			align-items: center;
			box-shadow: 0rpx 5rpx 6rpx 2rpx #e6e6e6;
			.kb{
				width: 100%;
				height: calc(100vh*0.02);
			}
			.item{
				flex: 1;
				width: 90%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx solid #d2d2d2;
				
				.i_left{
					font-weight: 550;
					letter-spacing: 4rpx;
					
				}
				.i_right{
					display: flex;
					align-items: center;
					width: 70%;
					height: 100%;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					.child_icon{
						width: 45rpx;
						height: 45rpx;
					}
					.ir_res{
						margin-right: 16rpx;
						display: flex;
						.sex_redio{
							// border: 1px solid #007AFF;
							display: flex;
							align-items: center;
							.redio{
								width: 24rpx;
								height: 24rpx;
								border-radius: 50%;
								margin-right: 10rpx;
								background: #C1C1C1;
								// background: #FD706B;
							}
							.redio_name{
								// margin: 0 20rpx;
							}
							.active_redio{
								background: #FD706B;
							}
						}
						.sex_redio:nth-child(1){
							margin-right: 30rpx;
						}
					}
					image{
						width: 35rpx;
						height: 35rpx;
					}
				}
			}
		}
		.child_info{
			margin-top: 20rpx;
			height: calc(100vh*0.41);
			box-shadow: 0rpx -5rpx 6rpx 2rpx #e6e6e6;
		}
	}
</style>
