<template>
	<view class="movie-list" v-if="movieListData">
		<view class="movie-item" v-for="item in movieListData" :key="item._id">
			<view class="movie-item-left">
				<image :src="item.image" mode="widthFix"></image>
			</view>
			<view class="movie-item-center">
				<view class="movie-name">
					<text>{{item.name}}</text>
				</view>
				<view class="movie-score">
					<u-rate class="score" v-model="item.movieScoreHalf"  :disabled="disabled" :activeColor="activeColor"></u-rate>
					<text>{{item.movieScoreHalf !==0 ?  `${item.movieScoreHalf*2}分` : '暂未评分'}}</text>
				</view>
				<view class="movie-detail">
					<view>
						<text>类型：{{item.type.join('、')}}</text>
					</view>
					<view>
						<text>主演：{{item.performer}}</text>
					</view>
				</view>
			</view>
			<view class="movie-item-right">
				<u-button size='mini' type='error'>购票</u-button>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	interface Props{
		disabled?:Boolean
		activeColor?:string
		movieListData:any[]
	}
	const props  = withDefaults(defineProps<Props>(),{
		disabled:true,
		activeColor:'#f7ba2a'
	})
</script>

<style lang="scss" scoped>
	.movie-list{
		background-color: #fff;
		border-radius: 30rpx;
		padding: 20rpx;
	}
	.movie-item{
		display: flex;
		border-bottom: 1px solid #ccc;
		padding: 30rpx 20rpx;
		.movie-item-left{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 20%;
			image{
				width: 100%;
				border-radius: 10rpx;
			}
		}
		.movie-item-center{
			flex: 1;
			padding: 5rpx 20rpx;
			.movie-name{
				height: 25%;
				font-size: 32rpx;
				font-weight: 700;
			}
			.movie-score{
				display: flex;
				align-items: center;
				height: 30%;
				.score{
					margin-right: 10rpx;
				}
			}
			.movie-detail{
				height: 45%;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
			}
		}
		.movie-item-right{
			width: 20%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>