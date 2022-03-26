<template>
  <router-view></router-view>
</template>


<script lang="ts">
import {provide, ref} from "vue";
import {router} from "./router/router";

export default {
  name: 'App',
  setup() {
    // 先获取屏幕宽度，根据宽度判断手机还是pc
    const width = document.documentElement.clientWidth

    const visible = ref(width > 500)
    provide('visible', visible)

    // 手机端切换路由，导航栏消失
    router.afterEach(() => {
      visible.value = (width > 500)

    })




  }
}
</script>

<style>

</style>
