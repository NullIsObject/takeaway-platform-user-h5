<template>
	<main class="shop-page-main">
		<tabs v-model:active="active" swipeable shrink line-width="1em" color="#029BEF" class="van-tab-box">
			<tab title="点餐" title-class="van-tab-title first">
				<div class="content">
					<OrderFood />
				</div>
			</tab>
			<tab title="评价" title-class="van-tab-title">
				<div class="content">
					<OrderAppraise />
				</div>
			</tab>
			<tab title="商家" title-class="van-tab-title">
				<div class="content">
					<MerchantMessage />
				</div>
			</tab>
		</tabs>
	</main>
</template>
<script setup lang="ts">
import { Tab, Tabs } from 'vant';
import { ref } from "vue";
import OrderFood from "./OrderFood/index.vue"
import OrderAppraise from "./OrderAppraise/index.vue"
import MerchantMessage from "./MerchantMessage/index.vue"
const active = ref(0)
</script>
<style lang="less">
// tab组件样式
.shop-page-main {
	--van-tabs-line-height: 2rem;
	--van-padding-xs: 0;

	.van-tab-box {
		& > *:first-child {
			position: sticky;
			top: 60px;
			z-index: 1;
		}
	}

	.van-tab-title {
		font-size: 12px;
		font-weight: bold;
		padding: 0;
		margin-right: 2.5em;

		&.first {
			margin-left: @app-padding;
		}
	}
}
</style>
<style lang="less" scoped>
.shop-page-main {
	margin-top: 1em;
	position: sticky;
	top: @app-header-height;

	.content {
		background-color: @app-bgcolor;
		height: calc(100vh - @app-header-height - var(--van-tabs-line-height));
	}
}
</style>