<template>
	<div class="login" v-if="isLogin">
		<OrderHeader />
	</div>
	<ToLogin v-else>登录后查看订单</ToLogin>
</template>
<script setup lang="ts">
import OrderHeader from './components/OrderHeader.vue';
import { computed } from "vue";
import { useStore } from "vuex";
const $store = useStore()
const isLogin = computed(() => $store.state.userdata.isLogin)
</script>
<style lang="less" scoped>
</style>