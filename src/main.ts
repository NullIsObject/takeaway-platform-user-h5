//基本配置
import 'default-passive-events'//解决奇怪的警告
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import { store, key as storeKey } from "./store/index"
//全局组件
import ToLogin from "@/components/ToLogin/ToLogin.vue"
//组件库
import { Icon, Col, Row, Toast } from 'vant'
import 'vant/lib/index.css'
import '@/assets/style/vant.less'
//样式
import '@/assets/iconfont/iconfont.css'
import '@/assets/style/index.less'

const app = createApp(App)
app.use(router)
app.use(store, storeKey)
//全局组件
app.use(Icon)
app.use(Col)
app.use(Row)
app.use(Toast)
app.component('ToLogin', ToLogin)

app.mount('#app')