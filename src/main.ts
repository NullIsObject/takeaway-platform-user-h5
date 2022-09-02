//基本配置
import 'default-passive-events'//解决奇怪的警告
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index"
import store from "@/store/index"
//全局组件
import AppProductList from "@/components/AppProductList/AppProductList.vue"
import ToLogin from "@/components/ToLogin/ToLogin.vue"
//组件库
import { Icon, Col, Row } from 'vant'
import 'vant/lib/index.css'
//样式
import '@/assets/iconfont/iconfont.css'
import '@/assets/style/index.less'
//全局属性
import api from './api/index'

const app = createApp(App)
app.use(router)
app.use(store)
//全局组件
app.use(Icon)
app.use(Col)
app.use(Row)
app.component('AppProductList', AppProductList)
app.component('ToLogin', ToLogin)
//全局属性
app.config.globalProperties.$api = api

app.mount('#app')