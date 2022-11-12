import { ActionTree, MutationTree } from "vuex"
import { AxiosResponse } from "axios"
import { Toast } from "vant"
import { login, getUserInfo, getUserWallet, getCouponInfo } from "@/api"
import { Response, LoginResData, GetUserWalletResData, GetCouponInfoResData } from "@/api/type"
import { getCookie } from "@/utils/cookie-handlers"
import { clonObject } from "@/utils/object-handlers";
const token = getCookie("token")

// 类型
type Coupon = {
	discountName: string,
	msg: string,
	indate: Date
}
type Coupons = Array<Coupon>
interface UserWallet {
	money: number,
	score: number,
	coupons: Coupons
}
export interface State {
	isLogin: boolean
	userInfo: {
		id: string | undefined,
		userName: string | undefined,
		sex: string | undefined,
		photo: string | undefined,
		city: string | undefined
	}
	userWallet: UserWallet
}

// 配置
// state
const state: State = {
	isLogin: Boolean(token.length),//判断是否登录
	userInfo: {
		id: "",
		userName: "",
		sex: "",
		photo: "",
		city: ""
	},
	userWallet: {
		money: 0,
		score: 0,
		coupons: []
	}
}

// mutations
const mutations: MutationTree<State> = {
	updateUserInfo(state, userInfo) {
		// 更新用户信息
		state.isLogin = true
		state.userInfo = userInfo
	},
	updateUserWallet(state, userWallet: UserWallet) {
		state.userWallet.money = userWallet.money
		state.userWallet.score = userWallet.score
		state.userWallet.coupons.push(...userWallet.coupons)
		
	}
}

// actions
const actions: ActionTree<any, any> = {
	login: async (context, { userName, password }: { userName: string, password: string }) => {
		// 登录功能
		const loginResult = await login({ userName, password }).catch(error => {
			return false
		})
		if (!loginResult) {
			Toast.success({
				position: "bottom",
				message: "登录失败"
			})
			return
		}
		type loginResult = AxiosResponse<Response<LoginResData>>
		const data = (<loginResult>loginResult).data.data
		context.commit("updateUserInfo", { id: data.userId, userName: data.userName, sex: data.sex, photo: data.photo, city: data.city })
		Toast.success({
			position: "bottom",
			message: "登录成功"
		})
	},
	updateUserInfo(context) {
		// 更新用户信息
		getUserInfo().then(res => {
			const data = res.data.data;
			context.commit("updateUserInfo", { id: data.userId, userName: data.userName, sex: data.sex, photo: data.photo, city: data.city })
		})
	},
	updateUserWallet: async (context) => {
		// 更新用户钱包信息
		type userWalletRes = AxiosResponse<Response<GetUserWalletResData>>
		type couponInfoRes = AxiosResponse<Response<GetCouponInfoResData>>
		// 获取钱包信息
		const userWalletResult = await getUserWallet().catch(err => {
			console.log("钱包信息获取失败")
			return false
		})
		if (!userWalletResult) return
		// 获取钱包信息成功
		const userWalletResData = (<userWalletRes>userWalletResult).data.data
		const userWallet: UserWallet = {
			money: userWalletResData.money,
			score: userWalletResData.score,
			coupons: []
		}
		const { discountIds } = userWalletResData
		// 根据钱包信息的优惠券id获取优惠券信息
		const getCouponInfoResult = await getCouponInfo(discountIds).catch(err => {
			return false
		})
		if (!getCouponInfoResult) return
		// 获取优惠券id信息成功
		const couponInfoResData = (<couponInfoRes>getCouponInfoResult).data.data
		couponInfoResData.forEach(val => {
			userWallet.coupons.push({
				discountName: val.name,
				msg: val.msg,
				indate: val.indate
			})
		})
		context.commit("updateUserWallet", userWallet)
	}
}

// 导出配置
export const user = {
	namespaced: true,
	state,
	getters: {

	},
	mutations,
	actions
}