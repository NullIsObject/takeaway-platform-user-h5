<template>
	<HomeHeader />
	<div class="app-home">
		<HomeShopLists />
	</div>
</template>
<script setup lang="ts">
import HomeHeader from "./components/HomeHeader.vue"
import HomeShopLists from "./components/HomeShopLists.vue"
</script>
<style lang="less" scoped>
.app-home {
	padding: 0 @app-padding;
}
</style>