<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.onTabBarMidButtonTap(()=>{
				uni.navigateTo({
					url:'../release/release?'+"123",
					success: (res) => {
						console.log(res)
					},
					fail: (res) => {
						console.log(res)
					}
				})
			})
		},
		onShow: function() {
			console.log('App Show')
			
		},
		onHide: function() {
			console.log('App Hide')
		},
		onLoad:function(){
			
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.uni-tabbar__item:nth-child(4){
		margin: 0 15px;
	}
	.uni-tabbar__mid{
		// background-color: #FD706B;
		background-color: #ff3d36;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 50rpx;
		margin-bottom: 10rpx;
	}
</style>
