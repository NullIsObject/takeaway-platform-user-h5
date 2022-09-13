<!-- 店铺内 -->
<template>
	<div class="shop-page">
		<ShopPageHeader />
		<ShopPageTitle />
		<ShopPageMain />
	</div>
</template>
<script lang="ts" setup>
import ShopPageHeader from "./components/ShopPageHeader.vue"
import ShopPageTitle from "./components/ShopPageTitle.vue"
import ShopPageMain from "./components/ShopPageMain.vue"
</script>
<style lang="less" scoped>
.shop-page {
	// background-color: red;
}
</style>