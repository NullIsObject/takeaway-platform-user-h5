import { ActionTree, MutationTree } from "vuex"
import { AxiosResponse } from "axios"
import { Toast } from "vant"
import { login, getUserInfo, getUserWallet, getCouponInfo } from "@/api"
import { Response, LoginResData, GetUserWalletResData } from "@/types/api"
import { getCookie } from "@/utils/cookie-handlers"
const token = getCookie("token")
// 类型
export interface State {
	isLogin: boolean
	userInfo: {
		id: string | undefined,
		userName: string | undefined,
		sex: string | undefined,
		photo: string | undefined,
		city: string | undefined
	}
	userWallet: {
		money: number,
		score: number,
		discountIds: Array<{
			discountName: string,
			msg: string,
			indate: Date
		}>
	}
}
// 配置
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
		discountIds: []
	}
}

const mutations: MutationTree<any> = {
	updateUserInfo(state: State, userInfo) {
		// 更新用户信息
		state.isLogin = true
		state.userInfo = userInfo
	}
}

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
		const userWalletResult = await getUserWallet().catch(err => {
			console.log("钱包信息获取失败")
			return false
		})
		if (!userWalletResult) return
		type userWalletResult = AxiosResponse<Response<GetUserWalletResData>>
		const data = (<userWalletResult>userWalletResult).data.data
		////////////////////////////////////////////////////////////////////////////////////////////////////////////
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