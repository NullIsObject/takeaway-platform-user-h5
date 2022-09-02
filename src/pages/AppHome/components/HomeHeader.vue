<template>
	<div class="box">
		<div class="home-header">
			<div class="content">
				<div class="left">地址
					<van-icon class="icon-btn" name="play" />
				</div>
				<div class="right">
					<van-icon name="cart-o" />
					<van-icon name="comment-o" />
				</div>
			</div>
		</div>
		<div class="search-box">
			<div class="search-content">
				<div class="box-border"></div>
				<div class="or-code">
					<van-icon name="scan" />
				</div>
				<div class="btn-box">
					<span class="line-between">|</span>
					<div type="text" class="search-input">
						推荐
					</div>
					<div class="search-btn">搜索</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
</script>
<style lang="less" scoped>
.box {
	background-color: white;
	padding: 0 @app-padding;

	.home-header {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		font-size: 1rem;
		height: @app-header-height;

		.content {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.left {
				display: flex;
				align-items: center;
				font-weight: bold;
				font-size: .8em;

				.icon-btn {
					transform: rotateZ(90deg);
					font-size: 12px;
				}
			}

			.right {
				font-size: 1.4em;
				display: flex;
				justify-content: space-between;
				width: 3em;
			}
		}
	}

	.search-box {
		height: 2.5rem;
		display: flex;
		align-items: center;

		.search-content {
			height: 1.7rem;
			width: 100%;
			border-radius: 1.5rem;
			display: flex;
			position: relative;

			.box-border {
				position: absolute;
				width: 100%;
				height: 100%;
				border-radius: 1.7rem;
				border: 1px solid @app-color-left;
			}

			.or-code {
				height: 100%;
				width: 1.7rem;
				display: flex;
				align-items: center;
				margin-left: .5rem;
				color: @app-color-left;
				font-size: 1.2rem;
			}

			.btn-box {
				width: 100%;
				display: flex;
				font-size: .8rem;

				.line-between {
					opacity: .2;
					font-size: 1em;
					display: flex;
					align-items: center;
					justify-content: center;
					height: 100%;
					width: 1.5em;
				}

				.search-input {
					width: 100%;
					border: none;
					display: flex;
					align-items: center;
					opacity: .5;
				}

				.search-btn {
					width: 6em;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #fff;
					background: linear-gradient(to left, @app-color-left, @app-color-right);
					border-radius: 1.5rem;
				}
			}

		}

	}
}
</style>
