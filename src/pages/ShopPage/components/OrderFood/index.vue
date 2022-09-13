<template>
	<div class="order-food" :ref="localLinkData.scrollBox" @scroll="localLinkData.setCheckedTitle">
		<!-- 广告位 -->
		<div class="ad-box">
			<div class="ad"></div>
		</div>
		<!-- 商品列表 -->
		<div class="list-box">
			<!-- 列表项链接 -->
			<div class="title-list">
				<div class="item" v-for="(val,index) in data" :key="val.id"
					@click="localLinkData.linkTo.value(localLinkData.targetElLists.value[index])"
					:class="localLinkData.checkedTitle.value==index ? 'checked' : ''">{{ val.title }}
				</div>
			</div>
			<!-- 列表详情 -->
			<div class="content">
				<div class="commodity-list" v-for="val in data" :key="val.id" :ref="localLinkData.targetElLists">
					<div class="title">{{ val.title }}</div>
					<div class="item" v-for="valVal in val.content" :key="val.title">
						<div class="head-photo"></div>
						<div class="message">
							<div class="commodity-name">商品名</div>
							<div class="commodity-introduce">介绍</div>
							<div class="sales-volume">月售:11</div>
							<div class="price">￥19.9</div>
						</div>
						<div class="add-btn">
							<van-icon name="add" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, watch, onBeforeUnmount, inject, Ref } from "vue";
import localLink from "@/utils/local-link";
const localLinkData = (() => {
	// 菜单锚点跳转功能
	const scrollBox = ref<HTMLElement | null>(null)//锚点跳转的父节点
	const targetElLists = ref<HTMLElement[]>([])//锚点跳转目标节点数组
	const linkTo = ref<(target: HTMLElement) => void>(() => { })//实现锚点跳转的方法
	const checkedTitle = ref(0)//当前跳转到的位置
	onMounted(() => linkTo.value = localLink(scrollBox.value as HTMLElement))//获取实现锚点跳转的方法
	const setCheckedTitle = () => {//修改跳转的位置，绑定scrollBox的@scoll
		for (let i = 0; i < targetElLists.value.length; i++) {
			let targetEl = targetElLists.value[i]
			const scrollBoxPageY = (scrollBox.value as HTMLElement).getBoundingClientRect().y
			const childPageY = targetEl.getBoundingClientRect().y
			if (childPageY <= scrollBoxPageY) checkedTitle.value = i
		}
	}

	return {
		scrollBox,
		targetElLists,
		linkTo,
		checkedTitle,
		setCheckedTitle
	}
})()

const data = [
	{
		id: 0,
		title: "标题1",
		content: [
			{
				title: "商品名1"
			},
			{
				title: "商品名2"
			},
			{
				title: "商品名3"
			}
		]
	},
	{
		id: 1,
		title: "标题2",
		content: [
			{
				title: "商品名"
			},
			{
				title: "商品名2"
			}
		]
	},
	{
		id: 2,
		title: "标题3",
		content: [
			{
				title: "商品名"
			},
			{
				title: "商品名2"
			}
		]
	},
	{
		id: 3,
		title: "标题4",
		content: [
			{
				title: "商品名"
			},
			{
				title: "商品名2"
			}
		]
	},
	{
		id: 4,
		title: "标题4",
		content: [
			{
				title: "商品名"
			},
			{
				title: "商品名2"
			}
		]
	}
]
</script>
<style lang="less" scoped>
.order-food {

	.ad-box {
		padding: @app-padding;

		.ad {
			border-radius: @app-component-border-radius;
			height: 50px;
			background-color: #f00;
		}
	}

	.list-box {
		display: flex;

		.title-list {
			background-color: red;
			height: 0;
			position: sticky;
			top: 0;

			.item {
				font-size: 12px;
				width: 5em;
				padding: @app-padding;

				&.checked {
					background-color: #fff;
				}
			}
		}

		.content {
			width: 100%;
			padding-left: @app-padding;
			background-color: #fff;

			.commodity-list {
				font-size: 12px;

				.title {
					height: 2em;
					line-height: 2em;
					font-weight: bold;
					background-color: #fff;
					position: sticky;
					top: -1px; //top为0时，顶部会有1px的缝隙
					z-index: 1;
				}

				.item {
					padding: @app-padding 0;
					display: flex;
					position: relative;

					.head-photo {
						width: 5rem;
						height: 5rem;
						background-color: #000;
						margin-right: @app-padding;
					}

					.message {
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						.commodity-name {
							font-size: 13px;
							font-weight: bold;
						}

						.commodity-introduce {
							opacity: .7;
						}

						.sales-volume {
							opacity: .7;
						}

						.price {
							color: red;
						}
					}

					.add-btn {
						color: @app-color-left;
						position: absolute;
						bottom: 0;
						right: @app-padding;
						bottom: @app-padding;
						font-size: 1.3rem;
					}
				}
			}
		}
	}
}
</style>