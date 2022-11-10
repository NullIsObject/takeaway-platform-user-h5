<template>
  <RouterView />
  <AppTabBar v-show="isShowAppTabBar" />
</template>

<script setup lang="ts">
import AppTabBar from "./components/AppTabBar/AppTabBar.vue"
import { ref, onBeforeMount, computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "@/store"
const route = useRoute()
const router = useRouter()
const store = useStore()
//是否显示AppTabBar组件
const isShowAppTabBar = ref(false)
router.afterEach(() => {
  isShowAppTabBar.value = !route.meta.isFullScreen
})
// 获取用户数据
const isLogin = computed(() => store.state.user.isLogin)
onBeforeMount(() => {
  if (!isLogin.value) return
  store.dispatch('user/updateUserInfo')
})
</script>
<style>

</style>
