<template>
	<div class="to-login">
		<div class="content">
			<p><slot></slot></p>
			<div class="login-btn" @click="toLogin">去登录</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const $router = useRouter()
//跳转登录页
const toLogin = () => {
	$router.push({ name: "login" })
}
</script>
<style lang="less" scoped>
.to-login {
	text-align: center;
	font-size: 12px;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	.content {
		.login-btn {
			margin: 1rem auto;
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			width: 4rem;
			height: 1.5rem;
			background-color: @app-color-left;
			border-radius: 1.5rem;
		}
	}
}
</style>