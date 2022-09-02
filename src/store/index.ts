import { createStore } from 'vuex'
import userdata from "./userdata"
export default createStore({
	strict: true,
	modules: { userdata},
}) 