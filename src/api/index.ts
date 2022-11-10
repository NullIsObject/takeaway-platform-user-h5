import config from "./config"
import { Response, LoginResData, RegisterResData, ChangePasswordResData, GetUserWalletResData, GetUserInfoResData, GetCouponInfoResData } from "@/types/api";
interface UsernamePassword { userName: string, password: string }
// request
export const request = config
// 登录
export const login = ({ userName, password }: UsernamePassword) => {
	return request.request<Response<LoginResData>>({
		url: '/user/login',
		data: {
			userName,
			password
		}
	})
}
// 注册
export const register = ({ userName, password }: UsernamePassword) => {
	return request.request<Response<RegisterResData>>({
		url: '/user/register',
		data: {
			userName,
			password
		}
	})
}
// 修改密码
export const changePassword = ({ userName, password, newPassword }: UsernamePassword & { newPassword: string }) => {
	return request.request<Response<ChangePasswordResData>>({
		url: '/user/password',
		data: {
			userName,
			password,
			newPassword
		}
	})
}
// 用户钱包
export const getUserWallet = () => {
	return request.post<Response<GetUserWalletResData>>('/user/wallet')
}
// 用户信息
export const getUserInfo = () => {
	return request.post<Response<GetUserInfoResData>>('/user/info')
}
// 优惠券信息
export const getCouponInfo = () => {
	return request.post<Response<GetCouponInfoResData>>('/discount/coupon')
}
export default request