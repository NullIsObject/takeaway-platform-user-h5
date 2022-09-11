<template>
	<header>
		<div class="content">
			<van-icon name="arrow-left" class="go-back" @click="goBack" />
			<div class="btn-box"></div>
		</div>
	</header>
</template>
<script setup lang="ts">
import useGoBack from "@/hooks/useGoBack"
const goBack = useGoBack()
</script>

<style lang="less" scoped>
header {
	height: @app-header-height;
	display: flex;
	padding: @app-padding;
	align-items: flex-end;
	position: sticky;
	top: 0;
	z-index: 1;
	background-color: #fff;

	.content {
		color: #fff;
	}
}
</style>