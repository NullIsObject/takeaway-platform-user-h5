<template>
	<HomeHeader />
	<div class="app-home">
		<HomeProductListVue />
	</div>
</template>
<script setup lang="ts">
import HomeHeader from "./components/HomeHeader.vue";
import HomeProductListVue from "./components/HomeProductList.vue";
</script>
<style lang="less" scoped>
.app-home {
	padding: 0 @app-padding;
}
</style>