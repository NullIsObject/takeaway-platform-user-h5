<template>
	<SearchHeader />
	<div class="body">
	</div>
</template>
<script lang="ts" setup>
import SearchHeader from './components/SearchHeader.vue';
</script>
<style lang="less" scoped>
.body {
	background: #fff;
	height: 200vh;
	border-radius: @app-component-border-radius;
}
</style>