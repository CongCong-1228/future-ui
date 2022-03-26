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
import {h} from "vue";


const history = createWebHashHistory()

// 封装成md函数，只需接受文件名就可以
const md = (filename) => {
    return h(Markdown, {
        path: `../markdown/${filename}.md`, key: filename
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
                {path: 'intro', component: md('intro')},
                {path: 'install', component: md('install')},
                {path: 'started', component: md('started')},
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
