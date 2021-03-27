<template>
	<view class="content">
		<!-- <view class="swiperNav">
			<view class="snItem"
			@click="switchConten(index)" v-for="(item,index) in swiperNavList"
			:class="index==swiperCurrent?'snActive':''" :style="index==swiperCurrent?'':'border:none'"
			>{{item}}</view>
		</view> -->
		<u-tabs class="swiperNav" @change="switchConten" font-size="32rpx" bold="false"
		:current="swiperCurrent" :list="swiperNavList" active-color="#FD706B"></u-tabs>
		<swiper class="swiperRow" :current="swiperCurrent" @change="swiperChange">
			<swiper-item class="sw_child">
				<FindSelected></FindSelected>
			</swiper-item>
			<swiper-item class="sw_child">
				<FindDynamic></FindDynamic>
			</swiper-item>
			<swiper-item class="sw_child">
				<FindVideo></FindVideo>
			</swiper-item>
			<swiper-item class="sw_child">
				<FindFollow></FindFollow>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import FindSelected from "../find_selected/find_selected.vue"
	import FindDynamic from "../find_dynamic/find_dynamic.vue"
	import FindVideo from "../find_FindVideo/find_FindVideo.vue"
	import FindFollow from "../find_FindFollow/find_FindFollow.vue"
	export default {
		data() {
			return {
				// swiperNavList: ["精选", "班级动态", "短视频", "我的关注"],
				swiperNavList: [{
					name: '精选',
					count: 5
				}, {
					name: '班级动态',
					count: 0
				}, {
					name: '短视频',
					count: 5
				}, {
					name: '我的关注',
					count: 5
				}],
				swiperCurrent: 0
			}
		},
		methods: {
			switchConten(index) {
				this.swiperCurrent = index
			},
			swiperChange(e) {
				// console.log(e.detail.current)
				this.swiperCurrent = e.detail.current
			},
			ccc(e){
				console.log(e)
			}
		},
		components: {
			FindSelected,
			FindDynamic,
			FindVideo,
			FindFollow
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;

		.swiperNav {
			width: 100%;
			height: 7%;
			// border: 1px solid #007AFF;
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-shadow: -2rpx 0 15rpx 2rpx #808080;
			margin-bottom: 6rpx;
			background-color: #FFFFFF;
			font-size: 40rpx;
		}

		.swiperRow {
			flex: 1;
			width: 100%;
			// border: 1px solid #007AFF;
		}
	}
</style>
