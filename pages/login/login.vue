<template>
	<view>
		<view @click="navtoIndex()">进入index页面</view>
		{{logRes}}
		<view @click="getAuthorize" class="aaa">1234</view>
		<u-icon name="level" color="#2979ff" size="28"></u-icon>
		<u-button type="error">危险按钮</u-button>
		<u-badge size="mini" type="success"></u-badge>

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
			getAuthorize(){
				// uni.authorize({
				//     scope: 'scope.userInfo',
				//     success() {
				//         uni.getUserInfo({
				//         	success: (res) => {
				//         		console.log(res)
				//         	}
				//         })
				//     }
				// })
				uni.getProvider({
					service: 'oauth',
					success: (res) => {
						console.log(res)
					},
					fail: (res) => {
						console.log(res)
					}
				})
			},
			navtoIndex(){
				uni.switchTab({
				    url: '../index/index',
					success: () => {
						uni.setStorageSync("role",this.role)
					}
				});
				// uni.getProvider({
				//     service: 'oauth',
				//     success: function (res) {
				//         console.log(res.provider)
				// 		// uni.login({
				// 		// 	provider:"weixin",
				// 		// 	success: (logRes) => {
				// 		// 		this.logRes = logRes
				// 		// 	}
				// 		// })
				//     }
				// });
			},
			
		}
	}
</script>

<style lang="scss">

</style>
