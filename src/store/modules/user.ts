import { ActionTree, MutationTree } from "vuex";
import { login } from "@/api";
import { getCookie } from "@/utils/cookie-handlers";
const token = getCookie("token");

export interface State {
	isLogin: boolean,
	userData: {
		id: string | null,
		userName: string | null,
		sex: string | null,
		photo: string | null,
		city: string | null
	}
}

const state: State = {
	isLogin: Boolean(token.length),//判断是否登录
	userData: {
		id: "",
		userName: "",
		sex: "",
		photo: "",
		city: ""
	},
}

const mutations: MutationTree<any> = {
	updateUserInfo(state, userData) {
		// 更新数据
		state.isLogin = true
		state.userData = userData
	}
}

const actions: ActionTree<any, any> = {
	login(context, { userName, password }: { userName: string, password: string }) {
		// 登录功能
		login({ userName, password }).then(response => {
			const userData = response.data.data
			context.commit("updateUserInfo", { id: userData.userId, userName: userData.userName, sex: userData.sex, photo: userData.photo, city: userData.city })
			console.log("登录成功")
		}).catch(error => {
			console.log("登录失败")
		})
	}
}

export const user = {
	namespaced: true,
	state,
	getters: {

	},
	mutations,
	actions
}