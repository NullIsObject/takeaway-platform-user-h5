<template>
	<div class="app-order-item">
		<div class="title-box">
			<div class="head-photo"></div>
			<p>店名</p>
			<van-icon name="arrow" color="rgba(0,0,0,.4)" />
		</div>
		<div class="state">
			已送达
		</div>
		<div class="data-box">
			<div class="commodity-box">
				<div class="commodity-item"></div>
				<div class="commodity-item"></div>
				<div class="commodity-item"></div>
				<div class="commodity-item"></div>
				<div class="commodity-item"></div>
				<div class="commodity-item"></div>
				<div class="commodity-item"></div>
			</div>
			<div class="total">
				<p>￥<span>5.5</span></p>
				<p>共6件</p>
			</div>
		</div>
	</div>
</template>
<script setup>
</script>
<style lang="less" scoped>
.app-order-item {
	.app-item-box();
	--item-box-size: 3rem;
	position: relative;
	font-size: 12px;
	margin-bottom: @app-padding;

	.title-box {
		font-weight: bold;
		display: flex;
		align-items: center;

		& > * {
			margin-right: 5px;
		}

		.head-photo {
			background-color: red;
			--size: 1.5em;
			width: var(--size);
			height: var(--size);
		}
	}

	.state {
		opacity: .7;
		position: absolute;
		top: @app-padding;
		right: @app-padding;
	}

	.data-box {
		display: flex;
		justify-content: space-between;
		padding-top: @app-padding;

		.commodity-box {
			display: flex;
			width: calc(100% - var(--item-box-size) * 2);
			overflow-x: scroll;
			/* Firefox */
			scrollbar-width: none;
			/* IE 10+ */
			-ms-overflow-style: none;

			&::-webkit-scrollbar {
				/* Chrome Safari */
				display: none;
			}

			.commodity-item {
				background-color: aqua;
				width: var(--item-box-size);
				height: var(--item-box-size);
				border-radius: @app-component-border-radius;
				margin-right: 3px;
				flex-shrink: 0;
			}
		}

		.total {
			width: var(--item-box-size);
			height: var(--item-box-size);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			color: rgba(0, 0, 0, .5);

			span {
				color: #000;
				transform: scale(120%);
				transform-origin: 0 50%;
				display: inline-block;
			}
		}
	}
}
</style>