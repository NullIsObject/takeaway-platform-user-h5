<template>
	<div class="header">
		<van-icon name="shop-o" />
		附近商家
	</div>
	<ShopItem />
</template>
<script lang="ts" setup>
import ShopItem from './ShopItem.vue'
</script>
<style lang="less" scoped>
.header {
	font-size: .8em;
	opacity: .5;
}
</style>