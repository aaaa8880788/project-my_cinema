<template>
	<view class="cinema">
		<!-- 顶部nav部分	    -->
		<view class='top-nav'>
			<nav-top ></nav-top>
		</view>	
		<!-- 影院列表部分 -->
		<cinema-list :cinemaList="cinemaListData"></cinema-list>
	</view>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import useCinemaStore from '@/store/cinema/cinema.js'
const cinema = useCinemaStore()
// 发送网络请求获取影院数据
cinema.getCinemaData()
const cinemaListData = computed(()=>{
	return cinema.cinemaData
})
</script>

<style lang="scss" scoped>

</style>
