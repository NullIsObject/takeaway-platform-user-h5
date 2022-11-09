<template>
	<template v-if="isLogin">
		<MyHeader />
		<div class="app-my">
			<div class="money">
				<div class="item">
					<p><span>0.00</span>元</p>
					<p>我的余额</p>
				</div>
				<div class="item">
					<p><span>0</span>个</p>
					<p>我的优惠</p>
				</div>
				<div class="item">
					<p><span>0</span>分</p>
					<p>我的积分</p>
				</div>
			</div>
			<div class="item-box">
				<div class="item">
					<van-icon name="orders-o symbol" />
					<p>我的订单</p>
					<van-icon name="arrow" />
				</div>
				<div class="item">
					<van-icon name="shop symbol" />
					<p>积分商城</p>
					<van-icon name="arrow" />
				</div>
				<div class="item">
					<van-icon name="gem symbol" />
					<p>会员卡</p>
					<van-icon name="arrow" />
				</div>
			</div>
			<div class="item-box">
				<div class="item">
					<van-icon name="service symbol" />
					<p>服务中心</p>
					<van-icon name="arrow" />
				</div>
				<div class="item">
					<van-icon name="down symbol" />
					<p>下载APP</p>
					<van-icon name="arrow" />
				</div>
			</div>
		</div>
	</template>
	<ToLogin v-else>登录后查看我的</ToLogin>
</template>
<script setup lang="ts">
import MyHeader from "./components/MyHeader.vue"
import { computed } from "vue";
import { useStore } from "@/store";
const $store = useStore()
const isLogin = computed(() => $store.state.user.isLogin)
</script>
<style scoped lang="less">
.app-my {
	padding: 0 10px;

	.item-box,
	.money {
		border-radius: 5px;
		width: 100%;
		background-color: #fff;
		margin-top: @app-padding;
		padding: @app-padding;
	}

	.money {
		display: flex;

		.item {
			height: 50px;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			text-align: center;
			font-size: 12px;

			span {
				color: red;
				font-size: 1rem;
				margin-right: 5px;
			}
		}
	}

	.item-box {
		.item {
			width: 100%;
			height: 40px;
			display: flex;
			align-items: center;

			p {
				height: 100%;
				width: 100%;
				display: flex;
				align-items: center;
				margin-left: 1rem;
			}
		}
	}

}
</style>