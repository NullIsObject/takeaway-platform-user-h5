export interface Response<T = undefined> {
	status: number
	msg: string
	data: T
}
// 登录
export interface LoginResData {
	userId: string
	userName: string
	sex: string
	city: string
	photo: string
}
// 注册
export type RegisterResData = undefined
// 修改密码
export type ChangePasswordResData = undefined
// 用户钱包
export interface GetUserWalletResData {
	userId: string,
	money: number,
	score: number,
	discountIds: Array<string>
}
// 用户信息
export interface GetUserInfoResData {
	userId: string,
	userName: string,
	sex: string,
	city: string,
	photo: string
}
// 优惠券信息
export type GetCouponInfoResData = Array<{
	"id": string,
	"name": string,
	"msg": string,
	"indate": Date
}>