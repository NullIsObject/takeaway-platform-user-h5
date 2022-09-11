<!-- APP设置页 -->
\<template>
	<div class="setting">
		<header>
			<div class="content">
				<van-icon name="arrow-left" class="go-back" @click="goBack" />
				<p class="title">设置</p>
			</div>
		</header>
	</div>
</template>
<script lang="ts" setup>
import useGoBack from "@/hooks/useGoBack"
const goBack = useGoBack()
</script>
<style lang="less" scoped>
.setting {
	header {
		height: @app-header-height;
		background-color: #fff;
		display: flex;
		align-items: flex-end;
		padding: @app-padding;

		.content {
			width: 100%;
			position: relative;
			display: flex;
			align-items: center;

			.go-back {
				position: relative;
				z-index: 1;
			}

			.title {
				position: absolute;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
}
</style>