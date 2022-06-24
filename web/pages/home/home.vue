<template>
	<view class="home ">
		<!-- 顶部nav部分	    -->
		<view class='top-nav'>
			<nav-top ></nav-top>
		</view>	
		<!-- 轮播图部分 -->
		<view class="m-5">
			<u-swiper :list="swiperData" @click="swiperClickHandle"></u-swiper>
		</view>
		<!-- 正在热映部分 -->
		<view class="m-t-10 m-b-10 m-l-5 m-r-5" v-if="isShowingData.length">
			<is-showing title="正在热映" :data="isShowingData" @goToMovieClick="goToMovieHandle" @goToDetailClick="goToDetailHandle"></is-showing>
		</view>
		<!-- 即将上映部分 -->
		<view class="m-t-10 m-b-10 m-l-5 m-r-5" v-if="willShowingData.length">
			<is-showing title="即将上映" :data="willShowingData" @goToMovieClick="goToMovieHandle" @goToDetailClick="goToDetailHandle"></is-showing>
		</view>
		<!-- 电影列表部分 -->
		<view class="m-t-10 m-b-10 m-l-5 m-r-5" v-if="movieListData.length">
			<is-showing title="电影列表" :data="movieListData" @goToMovieClick="goToMovieHandle" @goToDetailClick="goToDetailHandle"></is-showing>
		</view>
	</view>
</template>

<script setup>
	import {
		computed
	} from "vue";
	import useHomeStore from "../../store/home/home.js";
	const home = useHomeStore();
	// 发送网络请求获取轮播图数据
	home.getSwiperData();
	const swiperData = computed(() => {
		return home.swiperData.map((item) => {
			return item.adImage;
		});
	});
	// 获取可用窗口高度
	const screenHeight = uni.getSystemInfoSync().windowHeight;
	// 发送网络请求获取正在热映,即将上映,电影列表数据
	home.getIsShowingData();
	const isShowingData = computed(() => {
		return home.isShowingData
	});
	home.getWillShowingData();
	const willShowingData = computed(() => {
		return home.willShowingData
	});
	home.getMovieListData();
	const movieListData = computed(() => {
		return home.movieListData
	});
	 // 点击了跳往电影页 
	const goToMovieHandle = (title)=>{
		uni.reLaunch({
			url:`/pages/movie/movie?tabTitle=${title}`
		})
	}
	// 轮播图点击触发
	const swiperClickHandle = (index)=>{
		const swiperData = home.swiperData
		if(swiperData.length!==0) {
			uni.navigateTo({
				url:`/subPackages/movie-detail/movie-detail?movieId=${swiperData[index].movieId}`
			})
		}
	}
	// 电影列表点击触发
	const goToDetailHandle = (detail)=>{
		uni.navigateTo({
			url:`/subPackages/movie-detail/movie-detail?movieId=${detail._id}`
		})
	}
</script>

<style lang="scss" scoped>
</style>
