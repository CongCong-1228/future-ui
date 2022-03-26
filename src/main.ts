
import '../src/libs/fu.scss'
import './index.scss'
import 'github-markdown-css'
import {createApp} from 'vue'
import App from './App.vue'
import {router} from './router/router'
// import Markdown from './components/MarkDown.vue'


const app = createApp(App)
app.use(router)
app.mount('#app')

// 全局引入markdown
// app.component('Markdown', Markdown)

