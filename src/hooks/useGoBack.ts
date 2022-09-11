import { useRouter } from "vue-router"
const useGoBack = () => {
	const $router = useRouter()
	return () => {
		if (window.history.state.back === null) $router.push({ name: 'home' })
		else $router.back()
	}
}
export default useGoBack