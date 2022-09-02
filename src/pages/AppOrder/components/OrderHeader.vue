<template>
	<div class="header">
		<div class="options">
			<p v-for="val in tabTag.list" :key="val" @click="tabTag.target = val" :class="tabTag.getFocus(val as tabTagList)">
				{{ val }}</p>
		</div>
	</div>
</template>
<script setup lang="ts">
import { shallowReactive } from 'vue'
type tabTagList = "全部" | "待消费" | "待评价" | "退款"
const tabTag = shallowReactive({
	target: "全部",
	list: [
		"全部",
		"待消费",
		"待评价",
		"退款"
	],
	getFocus(value: tabTagList): "focus" | undefined {
		if (value == this.target) return "focus"
	}
})
</script>
<style scoped lang="less">
.header {
	height: 60px;
	display: flex;
	padding: @app-padding;

	.options {
		display: flex;
		align-items: flex-end;

		p {
			margin-right: 1rem;

			&.focus {
				border-bottom: 2px solid @app-color-right;
				font-weight: bold;
			}
		}
	}
}
</style>