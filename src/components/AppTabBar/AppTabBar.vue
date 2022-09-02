<template>
	<tabbar route>
		<tabbarItem icon="home-o" to="/home">首页</tabbarItem>
		<tabbarItem icon="records" to="/order">订单</tabbarItem>
		<tabbarItem icon="smile-o" to="/my">我的</tabbarItem>
	</tabbar>
</template>

<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant';
</script>

<style>
</style>