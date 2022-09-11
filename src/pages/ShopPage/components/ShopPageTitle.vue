<template>
	<div class="title">
		<div class="content">
			<div class="shop-name">店铺名</div>
			<div class="shop-tag">
				<span class="score">1.2分 </span>
				<span>标签2 </span>
				<span>标签3 </span>
			</div>
			<div class="shop-head"></div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.title {
	padding: 0 @app-padding;
	width: 100%;

	.content {
		padding: @app-padding;
		background-color: #fff;
		border-radius: @app-component-border-radius;
		box-shadow: @app-box-shadow;
		position: relative;

		.shop-name {
			font-weight: bold;
		}

		.shop-tag {
			transform: scale(70%);
			transform-origin: 0 100%;

			.score {
				color: #f00;
			}
		}

		.shop-head {
			background-color: red;
			border-radius: @app-component-border-radius;
			width: 2.5rem;
			height: 2.5rem;
			position: absolute;
			top: @app-padding;
			right: @app-padding;
		}
	}
}
</style>