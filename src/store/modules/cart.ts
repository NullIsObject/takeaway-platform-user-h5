// 购物车商品
interface CartItem {
	id: string
	name: string
	commodityList: Array<{
		id: string,
		name: string,
		price: string
		count: number
	}>
}
export interface State {
	cartList: Array<CartItem>
}
const state: State = {
	cartList: [
		{
			id: '000',
			name: 'aaa',
			commodityList: [
				{
					id: '000',
					name: '商品名',
					price: '5.5',
					count: 1
				}
			]
		}
	]
}
export const cart = {
	state,
}