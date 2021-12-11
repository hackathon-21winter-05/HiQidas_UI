import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '/@/styles/index.scss'
import '/@/permission'

createApp(App).use(router).use(ElementPlus).mount('#app')
