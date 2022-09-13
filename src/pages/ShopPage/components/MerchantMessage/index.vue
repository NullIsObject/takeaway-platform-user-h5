<template>
	<div class="merchant-message">
		<div class="location">
			<p class="item-title">店名</p>
			<p>地址</p>
			<p>日期</p>
		</div>
		<div class="photo-album">
			<p class="item-title">商家相册</p>
			<div class="photo-box">
				<div class="photo-item"></div>
			</div>
		</div>
		<div class="merchant-promise">
			<p class="item-title">商家承诺</p>
			<p class="promise-box">
				<span>食品安全</span>
				<span>食品安全</span>
				<span>食品安全</span>
			</p>
		</div>
	</div>
</template>
<style lang="less" scoped>
.merchant-message {
	padding: @app-padding;
	font-size: 12px;

	& > * {
		padding: @app-padding;
		background-color: #fff;
		border-radius: @app-component-border-radius;
		margin-bottom: @app-padding;

		.item-title {
			font-weight: bold;
		}

		.photo-item {
			background-color: red;
			--size: 50px;
			width: var(--size);
			height: var(--size);
			margin: @app-padding @app-padding 0 0;
			border-radius: @app-component-border-radius;
		}

		.promise-box {
			padding-top: @app-padding;

			span {
				margin: @app-padding @app-padding 0 0;
			}
		}
	}
}
</style>