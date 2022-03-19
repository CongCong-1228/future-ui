<template>
  <router-view></router-view>
</template>


<script>
import {provide, ref} from "vue";
import {router} from "./router/router";

export default {
  name: 'App',
  setup() {
    // 先获取屏幕宽度，根据宽度判断手机还是pc
    const width = document.documentElement.clientWidth

    // 根据屏幕宽度，大于500=>判断pc为true，小于500为手机false
    const asideVisible = ref(width > 500)
    provide('asideVisible', asideVisible)

    // 手机端切换路由，导航栏消失
    router.afterEach(() => {
      if (width <= 500) {
        asideVisible.value = false
      }
    })
  }
}
</script>

<style>

</style>
