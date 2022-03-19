declare module '*.vue' {
    import { ComponentOptions } from "vue";
    const componentOptions: ComponentOptions
    export default componentOptions
}

// 创建.d.ts文件告诉ts如何引入vue文件