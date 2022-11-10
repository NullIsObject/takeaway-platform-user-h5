import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { user, State as User } from './modules/user'
import { cart, State as Cart } from './modules/cart'

export const key: InjectionKey<Store<State>> = Symbol()
export const useStore = () => baseUseStore(key)

export interface State {
	user: User,
	cart: Cart
}

export const store = createStore<State>({
	strict: true,
	modules: { user, cart },
})