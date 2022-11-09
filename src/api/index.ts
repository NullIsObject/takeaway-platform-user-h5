import config from "./config"
export const request = config
interface UsernamePassword { userName: string, password: string }
//登录
export const login = ({ userName, password }: UsernamePassword) => {
	return request({
		url: '/user/login',
		data: {
			userName,
			password
		}
	})
}
//注册
export const register = ({ userName, password }: UsernamePassword) => {
	return request({
		url: '/user/register',
		data: {
			userName,
			password
		}
	})
}
//修改密码
export const password = ({ userName, password, newPassword }: UsernamePassword & { newPassword: string }) => {
	return request({
		url: '/user/password',
		data: {
			userName,
			password,
			newPassword
		}
	})
}
//用户钱包
export const wallet = () => {
	return request({
		url: '/user/wallet'
	})
}
//用户信息
export const info = () => {
	return request({
		url: '/user/info'
	})
}
const api = {
	request
}
export default api