<!-- 店铺列表项 -->
<template>
	<div class="product-list-item-box" @click="toShopPage">
		<div class="product-list-item">
			<div class="head-photo"></div>
			<div class="product-message">
				<div class="product-name">
					店铺名
				</div>
				<div class="score">
					<Rate size="12px" class="star" allow-half readonly v-model="a" />
					<span>{{ a }}</span>
					<span>月售100单</span>
				</div>
				<div class="price">
					￥50起送/配送费约￥5
				</div>
			</div>
			<div class="take-out-message">
				<div class="top">
					保准票
				</div>
				<div class="center">
					<div class="tag">准时达</div>
					<div class="tag">蜂鸟专送</div>
				</div>
				<div class="bottom">10公里/40分钟</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { Rate } from 'vant'
import { useRouter } from "vue-router";
const $router = useRouter()
const a = 2.3
//跳转到商品详情页
const toShopPage = () => $router.push({ name: 'shopPage' }) 
</script>
<style>
.product-message .score .star > * {
	padding-right: 0 !important;
}
</style>
<style lang="less" scoped>
.product-list-item-box {
	width: 100%;
	height: 6rem;
	display: flex;
	align-items: center;
	background-color: #fff;
	padding: 0 @app-padding;
	border-radius: 5px;
	overflow: hidden;

	.product-list-item {
		width: 100%;
		height: 4rem;

		.head-photo {
			width: 4rem;
			height: 4rem;
			background-color: yellow;
			float: left;
			margin-right: 10px;
		}

		.product-message {
			height: 100%;
			float: left;
			font-size: 12px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			color: rgba(00, 00, 00, .5);

			.product-name {
				font-weight: bold;
				font-size: 1rem;
				color: #000;
			}

			.score {
				.star + span {
					color: red;
					margin: 0 .5em;
				}
			}
		}

		.take-out-message {
			font-size: 12px;
			height: 100%;
			text-align: right;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			color: rgba(00, 00, 00, .5);
			min-width: 7em;

			.center {

				.tag {
					border: 1px solid @app-color-left;
					float: right;
					color: @app-color-left;
					transform: scale(70%);

					&:last-child {
						background-color: @app-color-left;
						color: #fff;
						transform: scale(70%) translateX(1em);
					}
				}
			}
		}
	}
}
</style>