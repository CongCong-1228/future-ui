
import '../src/libs/fu.scss'
import './index.scss'
import 'github-markdown-css'
import {createApp} from 'vue'
import App from './App.vue'
import {router} from './router/router'


const app = createApp(App)
app.use(router)
app.mount('#app')

