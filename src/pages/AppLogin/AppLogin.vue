<template>
	<div class="box">
		<div class="header">
			<van-icon name="cross" @click="closeLogin" />
		</div>
		<div class="title">
			密码登录
		</div>
		<form class="input">
			<input type="text" placeholder="手机/用户名" />
			<input :type="isShowPassWord ? 'text' : 'password'" placeholder="密码" autocomplete="off" />
			<div class="password-btn" @click="changeIsShowPassWord">
				<van-icon name="closed-eye" v-show="!isShowPassWord" />
				<van-icon name="eye-o" v-show="isShowPassWord" />
			</div>
		</form>
	</div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter()
//密码显示与隐藏
const isShowPassWord = ref(false)
const changeIsShowPassWord = () => {
	isShowPassWord.value = !isShowPassWord.value
}
//closeLogin
const closeLogin = () => {
	if(window.history.state.back===null) $router.push({path:'/home'})
	else $router.back()
}
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
}
</style>