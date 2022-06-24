<template>
  <view class="nav-top">
    <slot name="left">
      <view class="w-20 d-flex ai-center">
        <view class="iconfont icon-red-chongwugou fs-25 text-red"></view>
        <span>广州</span>
        <u-icon name="arrow-down"></u-icon>
      </view>
    </slot>
    <slot name="center">
      <view class="d-flex bgc-white br-20 p-t-5 p-b-5 p-l-10 flex-1">
        <u-icon name="search m-r-10" size="30"></u-icon>
        <input disabled type="text" placeholder="搜索想看的电影~" class="" />
      </view>
    </slot>
    <slot name="right"> </slot>
  </view>
</template>

<script setup></script>

<style lang="scss" scoped>
	.nav-top{
		// height: 50px;
		background-color: #b8f5ff;
		display: flex;
		padding: 10rpx;
	}
</style>
