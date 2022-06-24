<template>
	<view class="movie">
		<!-- 顶部导航栏部分 -->
		<view class='top-nav'>
			<nav-top>
				<template #center>
					<view class="flex-1">
						<my-tabs :tabsList="tabsList" v-model="currentIndex"></my-tabs>
					</view>
				</template>
				<template #right>
					<view class="w-10 d-flex ai-center jc-center">
						<u-icon name="search" size="40"></u-icon>
					</view>
				</template>
			</nav-top>
		</view>
		<!-- 电影列表部分 -->
		<view class="movie-list m-5">
			<movie-list :movieListData="isShowingData" v-if="currentIndex === 0 &&isShowingData.length!==0"></movie-list>
			<movie-list :movieListData="willShowingData" v-if="currentIndex === 1 &&willShowingData.length!==0"></movie-list>
			<movie-list :movieListData="movieListData" v-if="currentIndex === 2 &&movieListData.length!==0"></movie-list>
		</view>
		<!-- 背景 -->
		<view 
		class="bgc-image" 
		v-if="
		currentIndex===0&&isShowingData.length==0 ||
		currentIndex===1&&willShowingData.length==0 ||
		currentIndex===2&&movieListData.length==0 
		">
			<view >
				<text class="iconfont icon-nothing"></text>
				<text >暂无内容</text>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		computed,
		ref
	} from "vue";
	import useMovieStore from "../../store/movie/movie.js";
	interface Props {
		tabTitle?:string
	}
	const props = withDefaults(defineProps<Props>(),{
		tabTitle:''
	})
	
	const movie = useMovieStore();
	const tabsList = [{
		name: '正在热映'
	}, {
		name: '即将上映'
	}, {
		name: '电影列表'
	}]
	
	// 当前活跃tabs索引
	let currentIndex = ref(0)
	
	movie.getIsShowingData();
	const isShowingData = computed(() => {
		return movie.isShowingData
	});
	movie.getMovieListData();
	const movieListData = computed(() => {
		return movie.movieListData
	});
	movie.getWillShowingData();
	const willShowingData = computed(() => {
		return movie.willShowingData
	});
	
	if(props.tabTitle ==='电影列表'){
		currentIndex.value = 2
	}else if(props.tabTitle ==='即将上映'){
		currentIndex.value = 1
	}else{
		currentIndex.value = 0
	}
</script>

<style lang="scss" scoped>
</style>
