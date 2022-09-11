<template>
	<header>
		<div class="content">
			<van-icon name="arrow-left" class="go-back" @click="goBack" />
			<div class="btn-box"></div>
		</div>
	</header>
</template>
<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
import useGoBack from "@/hooks/useGoBack"
const goBack = useGoBack()
const headerOpacity = ref(0)
const headerColor = ref("white")
const globalScrollEvent = () => {
	let rootScrollTop = document.documentElement.scrollTop
	let rootScrollHeight = document.documentElement.scrollHeight
	let viewHeight = document.body.offsetHeight
	headerOpacity.value = rootScrollTop / (rootScrollHeight - viewHeight)
	if (headerOpacity.value >= .5) headerColor.value = "black"
	else headerColor.value = "white"
}
window.addEventListener('scroll', globalScrollEvent)
onBeforeUnmount(() => {
	window.removeEventListener('scroll', globalScrollEvent)
})
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
	background-color: rgba(255, 255, 255, v-bind(headerOpacity));
	color: v-bind(headerColor);
}
</style>