import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import TabsDemo from '../components/TabsDemo.vue'
import DialogDemo from '../components/DiglogDemo.vue'
// @ts-ignore
import Markdown from '../components/MarkDown.vue'
import MoreDemo from '../components/MoreDemo.vue'
// @ts-ignore
import intro from '../markdown/intro.md'
// @ts-ignore
import install from '../markdown/install.md'
// @ts-ignore
import started from '../markdown/started.md'
import {h} from "vue";


const history = createWebHashHistory()

// 封装成md函数，只需接受文件名就可以
const md = (string) => {
    return h(Markdown, {
        content: string, key: string
    })
}
export const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc,
            children: [
                {path: 'intro', component: md(intro)},
                {path: 'install', component: md(install)},
                {path: 'started', component: md(started)},
                {
                    path: '',
                    redirect: 'doc/intro'
                },
                {
                    path: 'switch',
                    component: SwitchDemo
                },
                {
                    path: 'button',
                    component: ButtonDemo
                },
                {
                    path: 'dialog',
                    component: DialogDemo
                },
                {
                    path: 'tabs',
                    component: TabsDemo
                },
                {
                    path: 'more',
                    component: MoreDemo
                }
            ]
        }
    ]
})
