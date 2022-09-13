<template>
	<div class="order-appraise">
		<GradeCount />
		<AppraiseContent />
		<AppraiseContent />
		<AppraiseContent />
		<AppraiseContent />
		<AppraiseContent />
		<AppraiseContent />
		<AppraiseContent />
		<AppraiseContent />
		<AppraiseContent />
		<AppraiseContent />
	</div>
</template>
<script setup lang="ts">
import GradeCount from './GradeCount.vue'
import AppraiseContent from './AppraiseContent.vue'
</script>
<style lang="less" scoped>
.order-appraise {
	padding: @app-padding;
}
</style>