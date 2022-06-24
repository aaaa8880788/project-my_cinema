<template>
	<view class="content" v-for="item in data" :key="item.name">
		<view class="content-left">
			<u-icon class="icon" size='40' :name="item.icon"></u-icon>
			<text>{{item.name}}</text>
		</view>
		<view class="content-right">
			<u-icon size='40' name="arrow-right"></u-icon>
		</view>
	</view>
</template>

<script setup lang="ts">
	interface Props {
		data:any[]
	}
	const props = withDefaults(defineProps<Props>(),{
		data:[]
	})
</script>

<style lang="scss" scoped>
.content{
		margin: 20rpx 0;
		font-size: 35rpx;
		background-color: #fff;
		padding: 20rpx 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.content-left{
			display: flex;
			.icon{
				margin-right: 20rpx;
			}
		}
	}
</style>