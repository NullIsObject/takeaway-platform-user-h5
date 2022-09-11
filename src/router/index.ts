import { createRouter, RouterOptions, Router, RouteRecordRaw, createWebHistory } from "vue-router"
import AppHome from "@/pages/AppHome/AppHome.vue"
import AppOrder from "@/pages/AppOrder/AppOrder.vue"
import AppMy from "@/pages/AppMy/AppMy.vue"
import AppLogin from "@/pages/AppLogin/AppLogin.vue"
import AppSetting from "@/pages/AppSetting/AppSetting.vue"
import AppSearch from "@/pages/AppSearch/AppSearch.vue"
import ShopPage from "@/pages/ShopPage/ShopPage.vue"

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: "/home"
	},
	{
		path: "/home",
		name: "home",
		component: AppHome,
		meta: {
			isFullScreen: false,
		}
	},
	{
		path: "/order",
		name: "order",
		component: AppOrder,
		meta: {
			isFullScreen: false
		}
	},
	{
		path: "/my",
		name: "my",
		component: AppMy,
		meta: {
			isFullScreen: false
		}
	},
	{
		path: "/login",
		name: "login",
		component: AppLogin,
		meta: {
			isFullScreen: true
		}
	},
	{
		path: "/setting",
		name: "setting",
		component: AppSetting,
		meta: {
			isFullScreen: true
		}
	},
	{
		path: "/search",
		name: "search",
		component: AppSearch,
		meta: {
			isFullScreen: true
		}
	},
	{
		path: "/shop-page",
		name: "shopPage",
		component: ShopPage,
		meta: {
			isFullScreen: true
		}
	}
]
const router: Router = createRouter(<RouterOptions>{
	history: createWebHistory(),
	routes
})
export default router