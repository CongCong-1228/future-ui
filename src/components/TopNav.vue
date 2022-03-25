<template>
  <div class="topNav">
    <span class="toggleAside" @click="toogleAside" v-if="MenuButton"></span>
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import {inject} from "vue";

export default {
  props: {
    MenuButton: {
      type: Boolean,
      default: false
    }
  },
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
    color: #dbeef4;

    &:hover {
      text-decoration: none;
      border: none;
    }

    > svg {
      height: 32px;
      width: 32px;
    }

  }

  > .menu {
    color: #dbeef4;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 20;


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
