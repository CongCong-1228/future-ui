import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Intro from '../views/Intro.vue'
import Install from '../views/Install.vue'
import Started from '../views/Started.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import TabsDemo from '../components/TabsDemo.vue'
import DialogDemo from '../components/DiglogDemo.vue'
// @ts-ignore
import DocDemo from '../components/DocDemo.vue'


const history = createWebHashHistory()
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
                {path:'intro',component:Intro},
                {path:'install',component:Install},
                {path:'started',component:Started},
                {
                    path: '',
                    component: DocDemo
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
            ]
        }
    ]
})
