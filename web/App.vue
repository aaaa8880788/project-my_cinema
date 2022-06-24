<script setup lang="ts">
	import {
		onLaunch,
		onShow,
		onHide
	} from '@dcloudio/uni-app'
	onLaunch(()=>{
		// console.log('onLaunch触发');
	})
	onShow(()=>{
		// console.log('onShow触发');
	})
	onHide(()=>{
		// console.log('onHide触发');
	})
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "./static/css/global.scss";
	@import "./static/font-icon/iconfont.css";
	@import "./uni_modules/vk-uview-ui/index.scss";
</style>
