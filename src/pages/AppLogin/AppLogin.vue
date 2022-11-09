<!-- 登录页 -->
<template>
	<div class="box">
		<div class="header">
			<van-icon name="cross" @click="closeLogin" />
		</div>
		<div class="title">
			密码登录
		</div>
		<form class="input">
			<input type="text" placeholder="手机/用户名" v-model="userName" @keyup.enter="login" />
			<input :type="isShowPassWord ? 'text' : 'password'" placeholder="密码" autocomplete="off" v-model="password" @keyup.enter="login" />
			<div class="password-btn" @click="changeIsShowPassWord">
				<van-icon name="closed-eye" v-show="!isShowPassWord" />
				<van-icon name="eye-o" v-show="isShowPassWord" />
			</div>
		</form>
		<div class="login_btn" @click="login">
			<span>登录</span>
		</div>
		<div class="sign_in">
			<span>注册</span>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from "vue"
import { useRouter } from "vue-router"
import { useStore } from 'vuex'
import useGoBack from "@/hooks/useGoBack"
const $router = useRouter()
const $store = useStore()
//密码显示与隐藏
const isShowPassWord = ref(false)
const changeIsShowPassWord = () => {
	isShowPassWord.value = !isShowPassWord.value
}
//closeLogin
const closeLogin = useGoBack()
// login
const isLogin = computed(() => $store.state.user.isLogin)
const userName = ref("")
const password = ref("")
const login = () => {
	$store.dispatch("user/login", { userName: userName.value, password: password.value });
}
watch(isLogin, (value) => {
	if (!value) return 0
	closeLogin()
})
</script>
<style lang="less" scoped>
.box {
	padding: 0 @app-padding*2;
	background-color: white;
	width: 100vw;
	height: 100vh;

	.header {
		height: @app-header-height;
		position: relative;

		& > * {
			position: absolute;
			bottom: 0;
			font-size: 1.5rem;
		}
	}

	.title {
		font-size: 1.5rem;
		margin-top: 1em;
		font-weight: bold;
	}

	.input {
		margin-top: 2rem;

		input {
			border: none;
			width: 100%;
			height: 3rem;
			border-bottom: 1px solid rgba(0, 0, 0, .03);

			&::-ms-reveal,
			&::-ms-clear {
				display: none;
			}

			&::-o-clear {
				display: none;
			}
		}

		.password-btn {
			height: 3rem;
			line-height: 3rem;
			position: relative;
			top: -3rem;
			float: right;
		}
	}

	.login_btn,
	.sign_in {
		--height: 35px;
		width: 100%;
		height: var(--height);
		background-color: @app-color-left;
		border-radius: var(--height);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 1rem;
	}

	.sign_in {
		--color: rgba(00, 00, 00, .7);
		background-color: #fff;
		color: var(--color);
		border: 1px solid var(--color);
	}
}
</style>