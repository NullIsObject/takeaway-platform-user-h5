import { createRouter, RouterOptions, Router, RouteRecordRaw, createWebHistory } from "vue-router"
const AppHome = () => import("@/pages/AppHome/AppHome.vue")
const AppOrder = () => import("@/pages/AppOrder/AppOrder.vue")
const AppMy = () => import("@/pages/AppMy/AppMy.vue")
const AppLogin = () => import("@/pages/AppLogin/AppLogin.vue")
const AppSetting = () => import("@/pages/AppSetting/AppSetting.vue")
const AppSearch = () => import("@/pages/AppSearch/AppSearch.vue")
const ShopPage = () => import("@/pages/ShopPage/ShopPage.vue")

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