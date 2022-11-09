<template>
	<div class="shopping-cart" :class="isHaveCommodity && 'is-have-commodity'">
		<div class="discount-coupon">本店暂无优惠</div>
		<van-icon name="cart-circle" class="record-btn" />
		<div class="count-price">
			<span class="rmb-symbol">￥</span>{{cart.countPrice}}
		</div>
		<div class="submit-btn">去结算</div>
		<div class="cart-detail">
			<div class="mask-layer"></div>
			<div class="content">
				<div class="title">
					<p>已选商品</p>
					<p>
						<van-icon name="delete-o" />
						<span>&nbsp;清空</span>
					</p>
				</div>
				<ul class="commodity-list">
					<li class="commodity-item" v-for="val in cart.commodityList" :key="val.id">
						<div class="commodity-photo">

						</div>
						<div class="commodity-info">
							<p class="commodity-name">{{val.name}}</p>
							<p class="price">￥{{val.price}}</p>
						</div>
						<div class="functional-zone">
							<div class="count-reduce" @click="cart.reduceCommodityNumber(val.id)">
								<span class="iconfont icon-reduce"></span>
							</div>
							<div class="count-number">{{val.count}}</div>
							<div class="count-add" @click="cart.addCommodityNumber(val.id)">
								<span class="iconfont icon-add"></span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { ref, reactive, computed, watch } from "vue";
import { useStore } from 'vuex'
const store = useStore()
const thatID = '000'//当前页面店铺ID
const thatCart = ref()//当前购物车数据
const isHaveCommodity = computed(() => {//购物车是否存在当前店铺的商品
	return thatCart.value.commodityList.length
})
	; (() => {
		const cartList = store.state.cart.cartList
		cartList.some((value: { [key in string]: any }) => {
			if (value.id !== thatID) return false//如果购物车id不同，结束本轮循环
			thatCart.value = value
			return true//结束所有循环
		})
	})()
const cart = (() => {
	const cart = reactive({
		countNumber: 1,
		countPrice: 0,
		commodityList: [
			{
				id: '000',
				name: '商品名',
				price: '5.5',
				count: 1
			}
		],
		addCommodityNumber(id: string) {// 添加商品
			const isHaveThatCommodity = this.commodityList.some((data) => {
				if (data.id !== id) return false
				data.count++
				return true
			})
			if (isHaveThatCommodity) return true
			this.commodityList.push({
				id,
				name: '商品名',
				price: '5.5',
				count: 1
			})
		},
		reduceCommodityNumber(id: string) {// 减少商品
			console.log()
			let i = -1
			this.commodityList.some((data) => {
				i++
				if (data.id !== id) return false
				data.count--
				if (data.count <= 0) this.commodityList.splice(i, 1)
				return true
			})
		}
	})
	watch(() => cart.commodityList, () => {
		let countPrice = 0
		cart.commodityList.forEach(data => {
			countPrice += Number(data.price) * data.count
		})
		cart.countPrice = countPrice
	}, {
		deep: true,
		immediate: true
	})
	return cart
})()

</script>
<style lang="less" scoped>
.shopping-cart {
	--not-mark: #989898;
	--mark: #03B4FB;
	--cart-color: var(--not-mark);
	font-size: 12px;
	position: fixed;
	z-index: 1;
	bottom: 0;
	left: 0;
	background-color: #fff;
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	padding: 0 @app-padding;

	&.is-have-commodity {
		--cart-color: var(--mark);
	}

	.discount-coupon {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(254, 246, 225, .9);
		transform: translateY(-100%);
		text-align: center;
		padding: 3px 0;
		color: red;
	}

	.record-btn {
		font-size: 1.8rem;
		color: var(--cart-color);
		margin-right: @app-padding;
	}

	.count-price {
		font-size: 1rem;

		.rmb-symbol {
			display: inline-block;
			transform-origin: 100% 100%;
			transform: scale(80%);
		}
	}

	.submit-btn {
		width: 4rem;
		height: 30px;
		background-color: var(--cart-color);
		position: absolute;
		right: @app-padding;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 30px;
		color: #fff;
	}

	.cart-detail {
		background-color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		transform: translateY(-100%);
		border-radius: @app-component-border-radius @app-component-border-radius 0 0;
		height: 0;
		overflow: hidden; //////////////////////////////////////////////////////////////////////////

		.mask-layer {
			background-color: rgba(0, 0, 0, .5);
			width: 100vw;
			height: 100vh;
			position: absolute;
			top: 0;
			left: 0;
			transform: translateY(-100%);
		}

		.content {
			padding: @app-padding;

			.title {
				display: flex;
				justify-content: space-between;
			}

			.commodity-list {
				.commodity-item {
					margin-top: @app-padding;
					display: flex;
					position: relative;

					.commodity-photo {
						--size: 3rem;
						width: var(--size);
						height: var(--size);
						background-color: red;
						border-radius: @app-component-border-radius;
						margin-right: .5em;
					}

					.commodity-info {
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						.commodity-name {}

						.price {
							color: #f00;
						}

					}

					.functional-zone {
						position: absolute;
						right: 0;
						bottom: 0;
						width: 5em;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.count-reduce,
						.count-add {
							color: @app-color-left;

							.iconfont {
								font-size: 20px;
							}
						}

						.count-number {}
					}

				}
			}
		}
	}
}
</style>