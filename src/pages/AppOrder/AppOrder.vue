<template>
	<div class="login" v-if="isLogin">
		<tabs v-model:active="active" shrink background="transparent" swipeable class="van-tab-box" color="#029BEF"
			line-width="1rem" sticky>
			<tab title="全部">
				<div class="content">
					<AppOrderItem />
				</div>
			</tab>
			<tab title="待消费">
				<div class="content">待消费</div>
			</tab>
			<tab title="待评价">
				<div class="content">待评价</div>
			</tab>
			<tab title="退款">
				<div class="content">退款</div>
			</tab>
		</tabs>
	</div>
	<ToLogin v-else>登录后查看订单</ToLogin>
</template>
<script setup lang="ts">
import { Tab, Tabs } from 'vant'
import AppOrderItem from './components/AppOrderItem.vue'
import { computed, ref } from "vue";
import { useStore } from "vuex";
const $store = useStore()
const isLogin = computed(() => $store.state.userdata.isLogin)
const active = ref(0)
</script>
<style lang="less">
.login {

	// tab组件样式
	.van-tab-box {
		--van-padding-xs: 0;
		--van-tabs-line-height: 2rem;

		.van-tab--active {
			font-weight: bold;
		}

		.van-sticky {
			height: @app-header-height;
			background-color: #F7F8F9;
			display: flex;
			align-items: flex-end;
		}

		.van-tab {
			margin-right: 1rem;
		}
	}
}
</style>
<style lang="less" scoped>
.login {
	height: 100vh;
	padding: 0 @app-padding;

	.content {
		height: calc(100vh - @app-header-height);
	}
}
</style>