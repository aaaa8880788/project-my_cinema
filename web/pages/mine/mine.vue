<template>
	<view class="mine">
		<view class="mine-top">
			<view class="user-info">
				<view class="avatar">
					<u-avatar  size='140' src="/static/image/mine/userIcon.png"></u-avatar>
				</view>
				<view class="name">
					<text>游客</text>
				</view>
				<view class="sign">
					<text>同学很懒，什么也没有留下~</text>
				</view>
			</view>
		</view>
		<view class="mine-main">
			<mine-content :data="mainContentData"></mine-content>
		</view>
	</view>
</template>

<script setup lang="ts">
	// 获取可视高度后计算获得主要内容盒子高度
	const wh = uni.getSystemInfoSync().windowHeight -200 + 'px'
	// 主体内容区域数据
	const mainContentData = [
		{name:'个人信息',icon:'account'},
		{name:'我的订单',icon:'shopping-cart'},
		{name:'想看的电影',icon:'heart'},
		{name:'看过的电影',icon:'thumb-up'},
		]
</script>

<style lang="less" scoped>
.mine-top{
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	.user-info{
		padding: 0 50rpx;
		.avatar{
			margin: 0 auto;
			width: 140rpx;
			height: 140rpx;
			border-radius: 100%;
			box-shadow: 0 0 15rpx 10rpx #ccc;
		}
		.name{
			font-weight: 700;
			font-size: 40rpx;
			margin: 20rpx;
		}
		.sign{
			display:-webkit-box;         //将对象作为弹性伸缩盒子模型显示。
					-webkit-box-orient:vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
					-webkit-line-clamp:1;        //限制行数
					overflow:hidden;             //超出部分隐藏
					text-overflow:ellipsis;      //用一个省略号代替超出的内容
				}
	}
}
.mine-main{
	background-color: #f6f6f6;
	height: v-bind(wh);
	overflow: hidden;
}
</style>
