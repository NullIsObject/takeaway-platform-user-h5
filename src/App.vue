<template>
  <RouterView />
  <AppTabBar v-show="isShowAppTabBar" />
</template>

<script setup lang="ts">
import AppTabBar from "./components/AppTabBar/AppTabBar.vue"
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router"
const $route = useRoute()
const $router = useRouter()
//是否显示AppTabBar组件
const isShowAppTabBar = ref(false)
$router.afterEach(() => {
  isShowAppTabBar.value = !$route.meta.isFullScreen
})

</script>
<style>
</style>
