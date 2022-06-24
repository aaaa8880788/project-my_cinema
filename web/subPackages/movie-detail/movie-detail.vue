<template>
	<view class="movie-detail d-flex flex-column h-100" v-if="Object.keys(movieData).length">
		<view class="movie-header p-l-10 p-r-10 d-flex jc-between">
			<view class="movie-image w-30">
				<image class="w-100 br-10" :src="movieData.image" mode="widthFix"></image>
			</view>
			<view class="movie-content w-70 p-l-10 d-flex flex-column">
				<view class="movie-name fs-22 text-white">
					<text class="text-ellipsis">{{movieData.name}}</text>
				</view>
				<view class="movie-performer">
					<text class="text-ellipsis">主演：{{movieData.performer}}</text>
				</view>
				<view class="movie-type">
					<text class="m-r-10">{{movieData.type?.join('、')}}</text>
					<text class="fs-12 bgc-movie-detail-1 br-5 p-3 text-white">{{movieData.language + movieData.vision}}</text>
				</view>
				<view class="movie-time">
					<text>上映时间：{{movieData.time}}</text>
				</view>
				<view class="movie-duration">
					<text>影片时长：{{movieData.duration}}</text>
				</view>
				<view class="movie-status d-flex jc-between text-white flex-1 ai-center text-center fs-12">
					<view class="wish-watch bgc-movie-detail-2 flex-1 br-5 p-5 m-r-20">
						<u-icon class="m-r-5" name="heart-fill"></u-icon>
						<text>想看</text>
					</view>
					<view class="watched bgc-movie-detail-2 flex-1 br-5 p-5">
						<u-icon class="m-r-5" name="star-fill"></u-icon>
						<text>看过</text>
					</view>
				</view>
			</view>
		</view>
		<view class="movie-welcome bgc-movie-detail-1 m-l-10 m-r-10 m-t-10 p-15 br-10">
			<view class="movie-welcome-top text-white d-flex jc-between ai-center">
				<view class="movie-title">
					<text class="fs-18">电影口碑</text>
				</view>
				<view class="movie-person">
					<text class="m-r-10 bgc-movie-detail-2 p-5 br-5 fs-12">{{movieData.wishWatch?.length}}人想看</text>
					<text class="bgc-movie-detail-2 p-5 br-5 fs-12">{{movieData.comments?.length}}人看过</text>
				</view>
			</view>
			<view class="movie-welcome-bottom d-flex jc-between ai-center text-yellow m-t-20">
				<view class="score-star">
					<u-rate
					 :current="movieData.movieScoreHalf" 
					 disabled 
					 inactive-color='#eff2f7'
					 active-color='#f7ba2a'
					 inactive-icon='star-fill'
					 size='45'
					 ></u-rate>
				</view>
				<view class="score-show m-r-10">
					<text class="fs-22">{{movieData.movieScoreHalf ?  movieData.movieScoreHalf* 2 : '暂未评分'}}</text>
					<text v-if="movieData.movieScoreHalf">分</text>
				</view>
			</view>
		</view>
		<view class="movie-sign bgc-movie-detail-1 m-l-10 m-r-10 m-t-10 p-15 br-10 text-white">
			<view class="movie-title text-justify">
				<text class="fs-18">简介</text>
			</view>
			<view class="movie-summary m-t-10">
				<text>{{movieData.summary}}</text>
			</view>
		</view>
		<view class="movie-comment bgc-white m-t-20 flex-1 p-15 text-black d-flex flex-column">
			<view class="comment-top d-flex jc-between ai-center">
				<view class="comment-top-left fs-18">
					<text class="fw m-r-10">观众热评</text>
					<text class="text-grey">({{movieData.comments?.length}})</text>
				</view>
				<view class="comment-top-right">
					<text class="text-white bgc-red-1 br-5 p-5">参与评论</text>
				</view>
			</view>
			<view class="comment-none d-flex ai-center jc-center flex-1" v-if="!movieData.comments?.length">
				<text class="m-30 fs-22">暂未有人评论</text>
			</view>
			<view class="comment-content p-t-20" v-else>
				<view class="comment-item d-flex m-b-20" v-for="item in movieData.comments">
					<view class="comment-item-left w-20">
						<image style="width: 120rpx; height: 120rpx;border-radius: 100%;" :src="item.userId.avatar" mode="widthFix"></image>
					</view>
					<view class="comment-item-right w-80 p-b-10" style="border-bottom: 1px solid #ccc;">
						<view class="user-name">
							<text class="text-ellipsis fw fs-18">{{item.userId.username}}</text>
						</view>
						<view class="movie-score">
							<u-rate
							 :current="item.userScore/2" 
							 disabled 
							 inactive-color='#eff2f7'
							 active-color='#f7ba2a'
							 inactive-icon='star-fill'
							 size='35'
							 ></u-rate>
							 <text class="m-l-10 text-yellow">{{item.userScore}}分</text>
						</view>
						<view class="user-comment m-t-10">
							<text>{{item.userComment}}</text>
						</view>
						<view class="comment-time m-t-10 d-flex jc-between ai-center">
							<view class="comment-time-left">
								<text>{{formData(item.updatedAt,'YYYY-MM-DD HH:mm:ss')}}</text>
							</view>
							<view class="comment-time-right p-3 br-10" style="border: 1px solid #ccc;">
								<u-icon name="thumb-up"></u-icon>
								<text class="m-l-5">{{item.supportUserId.length}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import formData from '@/utils/formdata-time.ts'
interface Props {
	movieId?:string
}
const props = withDefaults(defineProps<Props>(),{
	movieId:''
})
import useMovieDetailStore from '@/store/movie-detail/movie-detail.js'
const movieDetail = useMovieDetailStore()
// 发送网络请求获取电影详情数据
movieDetail.getMovieDetailData({movieId:props.movieId})
const movieData = computed(()=>{
	return movieDetail.movieData
})

</script>

<style lang="scss" scoped>
.movie-detail{
	color: #7d929a;
}
.movie-comment{
	border-radius: 20rpx 20rpx 0 0;
}
</style>
<style>
	::v-deep page{
		background-color: #4c6a72;
		height: 100%;
	}
</style>
