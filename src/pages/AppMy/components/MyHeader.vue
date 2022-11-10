<template>
	<div class="header">
		<div class="user-message">
			<div class="user-photo">
				<img :src="userInfo.photo" v-if="userInfo.photo" />
			</div>
			<div class="user-name">{{ userInfo.userName }}</div>
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
const userInfo = computed(() => store.state.user.userInfo)
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

	.user-message {
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

			img {
				width: 100%;
				height: 100%;
				background-color: #fff;
				display: block;
			}
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