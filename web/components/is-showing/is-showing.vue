<template>
	<view class="isShowing">
		<view class="isShowing-title">
			<view class="title-left">{{ title }}</view>
			<view class="title-right" @click="goToMovie(title)">
				<text>全部{{data.length}}部</text>
				<u-icon name="arrow-right" ></u-icon>
			</view>
		</view>
		<view class="isShowing-content">
			<scroll-view scroll-x="true"  >
				<view class="movie-list">
					<view class="movie-item" v-for="item in data" :key="item._id" @click="goToDetail(item)">
						<view class="movie-item-image">
							<image :src="item.image" mode="widthFix" />
							<view class="score">
								{{item.movieScoreHalf !==0 ? `${item.movieScoreHalf*2}分` : `暂未评分`}}
							</view>
						</view>
						<view class="movie-item-content" >
							<text class="movie-name text-ellipsis">{{item.name}}</text>
							<u-button size='mini' type='error' @click="goToDetail(item)">购票</u-button>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup lang="ts">
	interface Props {
		title ? : string;
		data  : any[];
	}
	const props = withDefaults(defineProps < Props > (), {
		title: "请传入标题",
	});
	const emit = defineEmits<{
		(e:'goToMovieClick',title:string)
		(e:'goToDetailClick',detail:any)
	}>()
	const goToMovie = (title)=>{
		emit('goToMovieClick',title)
	}
	const goToDetail = (detail)=>{
		emit('goToDetailClick',detail)
	}
</script>

<style lang="scss" scoped>
	.isShowing {
		background-color: #fff;
		border-radius: 20rpx;
		padding: 25rpx;

		.isShowing-title {
			display: flex;
			justify-content: space-between;
			margin-bottom: 10rpx;

			.title-left {
				color: #ff0000;
				font-weight: 700;
				font-size: 34rpx
			}
		}

		.isShowing-content {
			.movie-list {
				width: 100%;
				display: flex;
				.movie-item {
					flex-shrink: 0;
					width: 25%;
					padding: 5rpx;
					.movie-item-image{
						position: relative;
						image {
							width: 100%;
							border-radius: 20rpx;
						}
						.score{
							position: absolute;
							bottom: 5px;
							left: 3px;
							color: #fa9005;
							font-weight: 700;
						}
					}
					.movie-item-content {
						text-align: center;
						.movie-name {
							width: 100%;
							font-size: 22rpx;

						}

						.movie-pay {
							box-sizing: border-box;
							color: #fff;
							background-color: #ff0000;
							border-radius: 10rpx;
						}
					}
				}
			}
		}
	}
</style>
