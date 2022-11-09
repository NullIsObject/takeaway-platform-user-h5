import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { user, State as User } from './modules/user'
import cart from './modules/cart'
export interface State {
	user: User
}
export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
	strict: true,
	modules: { user, cart },
})
export function useStore() {
	return baseUseStore(key)
}