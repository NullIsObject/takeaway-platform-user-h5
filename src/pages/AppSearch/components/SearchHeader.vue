<template>
	<div class="search-header">
		<div class="search-box">
			<van-icon name="arrow-left" class="go-back" @click="goBack" />
			<input type="text" placeholder="推荐" />
			<div class="search-btn">搜索</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import useGoBack from "@/hooks/useGoBack"
const goBack=useGoBack()
</script>
<style lang="less" scoped>
.search-header {
	padding: 1.5rem @app-padding;
	height: @app-header-height;
	background: #F7F8F9;
	position: sticky;
	top: 0;
	z-index: 1;

	.search-box {
		font-size: 12px;
		width: 100%;
		height: 1.5rem;
		display: flex;

		& > * {
			height: 100%;
		}

		.go-back {
			margin-right: @app-padding;
			display: flex;
			align-items: center;
			font-size: 1rem;
		}

		input {
			border: none;
			background: #fff;
			border-radius: 1.5rem;
			width: 100%;
			padding-left: .5rem;
		}

		.search-btn {
			float: right;
			width: calc(2.5em + @app-padding);
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
	}
}
</style>