<template>
	<div class="header">
		<div class="user-mesage">
			<div class="user-photo"></div>
			<div class="user-name">{{userData.userName}}</div>
		</div>
		<div class="btn-box">
			<van-icon name="setting-o" @click="toSetting" />
			<van-icon name="comment-o" />
		</div>
	</div>
</template>
<script lang="ts" setup>
import { computed, watch } from "vue";
import { useRouter } from "vue-router"
import { useStore } from "@/store"
const router = useRouter()
const store = useStore()
//跳转设置页
const toSetting = () => {
	router.push({ name: "setting" })
}
const isLogin = computed(() => store.state.user.isLogin)
const userData = computed(() => store.state.user.userData)
watch(isLogin, val => {
	if(!val) return
	if(userData.value.id?.length) return
	//////////////////////////////////////////////////////////////////////////////////////////////登录后且不存在数据，获取数据
}, {
	immediate: true
})
</script>
<style scoped lang="less">
.header {
	height: 70px;
	width: 100%;
	padding: 0 @app-padding;
	display: flex;
	align-items: flex-end;
	padding-bottom: 10px;

	& > * {
		width: 50%;
	}

	.user-mesage {
		display: flex;
		align-items: center;

		.user-photo {
			--size: 30px;
			background-image: url(@/assets/image/head-photo.png);
			background-size: 100%;
			width: var(--size);
			height: var(--size);
			border-radius: 50%;
			overflow: hidden;
			margin-right: .5rem;
		}

		.user-name {
			font-weight: bold;
		}
	}

	.btn-box {
		display: flex;
		align-items: center;
		justify-content: flex-end;

		& > * {
			width: 2em;
			text-align: right;
			font-size: 1.4em;
		}
	}
}
</style>