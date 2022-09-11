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
import { ref, reactive, onMounted } from "vue";
import localLink from "@/utils/local-link";
// 菜单锚点跳转功能
const localLinkData = (() => {
	const scrollBox = ref<HTMLElement | null>(null)
	const targetElLists = ref<HTMLElement[]>([])
	const linkTo = ref<(target: HTMLElement) => void>(() => { })
	const checkedTitle = ref(0)
	const setCheckedTitle = () => {
		for (let i = 0; i < targetElLists.value.length; i++) {
			let targetEl = targetElLists.value[i]
			if (targetEl.getBoundingClientRect().y + targetEl.offsetHeight / 2 >= 0) {
				checkedTitle.value = i
				break
			}
		}
	}
	onMounted(() => {
		linkTo.value = localLink(scrollBox.value as HTMLElement)
	})
	const localLinkData = {
		scrollBox,
		targetElLists,
		linkTo,
		checkedTitle,
		setCheckedTitle
	}
	return localLinkData
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
	height: 100%;
	overflow-y: scroll;

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