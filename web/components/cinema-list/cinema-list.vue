<template>
	<view class="cinemaList">
		<view class="cinema-item" v-for="item in cinemaList" :key="item._id">
			<view class="cinema-header">
				<view class="cinema-name">
					<text>{{item.name}}</text>
				</view>
				<view class="cinema-price">
					<text>{{`${item.demand}元`}}</text>
					<text>起</text>
				</view>
			</view>
			<view class="cinema-main">
				<view class="cinema-address ">
					<text class="text-ellipsis">
						<u-icon name="map"></u-icon>
						{{item.address}}
					</text>
				</view>
				<view class="cinema-phone">
					<text class="text-ellipsis">
						<u-icon name="phone"></u-icon>
						{{`联系电话${item.phone}`}}
					</text>
				</view>
			</view>
			<scroll-view scroll-x="true" class="cinema-footer">
					<text class="cinema-desc1" v-for="item1 in item.desc1">{{item1}}</text>
					<text class="cinema-desc2" v-for="item2 in item.desc2">{{item2}}</text>
			</scroll-view>
		</view>
	</view>
</template>

<script setup lang="ts">
	interface Props {
		cinemaList: any[]
	}
	const props = withDefaults(defineProps < Props > (), {
		cinemaList: []
	})
</script>

<style lang="scss" scoped>
	.cinemaList {
		box-sizing: border-box;
		width: 95%;
		background-color: #fff;
		margin: 20rpx auto;
		border-radius: 30rpx;
		overflow: hidden;
		.cinema-item {
			border-bottom: 1px solid #ccc;
			font-size: 26rpx;
			color: #6f6f6f;
			margin: 40rpx;	
			padding-bottom: 20rpx;
			.cinema-header {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.cinema-name {
					color: black;
					font-weight: 700;
					font-size: 30rpx
				}

				.cinema-price {
					text:nth-child(1) {
						color: #de0000;
						font-size: 30rpx
					}
				}
			}

			.cinema-main {
				height: 100rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				margin: 10rpx 0;
			}
			
			.cinema-footer{
				white-space: nowrap;
				text{
					display: inline-block;
					margin: 0 10rpx;
					padding: 5rpx;
					border-radius: 10rpx;

				}
				.cinema-desc1{
						color: #f00000;
						border: 1px solid #f00000;
				}
				.cinema-desc2{
						color: #ffaa00;
						border: 1px solid #ffaa00;
				}
			}
		}
	}
</style>
