<template>
  <div class="topNav">
    <span class="toggleAside"  @click="toogleAside"></span>
    <div class="logo">LOGO</div>

  </div>
</template>


<script lang="ts">
import {inject} from "vue";

export default {
  setup() {
    const asideVisible = inject('asideVisible')
    console.log(asideVisible.value)
    const toogleAside = () => {
      asideVisible.value = !asideVisible.value
      console.log(asideVisible.value)
    }
    return {toogleAside}
  }
}
</script>

<style lang="scss" scoped>
.topNav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }


  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none
    }
    > .logo {
      margin: 0 auto
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
