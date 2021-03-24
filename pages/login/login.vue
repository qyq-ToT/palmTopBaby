<template>
	<view @click="navtoIndex()">
		进入index页面
		{{logRes}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logRes:""
			};
		},
		methods:{
			navtoIndex(){
				uni.switchTab({
				    url: '../index/index',
					success: () => {
						uni.setStorageSync("role",this.role)
					}
				});
				uni.getProvider({
				    service: 'oauth',
				    success: function (res) {
				        console.log(res.provider)
						// uni.login({
						// 	provider:"weixin",
						// 	success: (logRes) => {
						// 		this.logRes = logRes
						// 	}
						// })
				    }
				});
			}
		}
	}
</script>

<style lang="scss">

</style>
