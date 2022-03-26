<template>
  <router-view></router-view>
</template>


<script lang="ts">
import {onMounted, provide, ref, watch, watchEffect} from "vue";
import {router} from "./router/router";

export default {
  name: 'App',
  setup() {
    // 先获取屏幕宽度，根据宽度判断手机还是pc
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width > 500)
    provide('asideVisible', asideVisible)

    router.afterEach(() => {
      asideVisible.value = width > 500;

    })

    // 手机端切换路由，导航栏消失


  }
}
</script>

<style>

</style>
