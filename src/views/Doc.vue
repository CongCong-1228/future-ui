<template>

  <div class="layout">
    <TopNav class="nav" MenuButton/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>Document</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">Introduce</router-link>
          </li>
          <li>
            <router-link to="/doc/install">Install</router-link>
          </li>
          <li>
            <router-link to="/doc/started">Started</router-link>
          </li>
        </ol>
        <h2>Components</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>

    </div>
  </div>
</template>


<script>
import TopNav from '../components/TopNav.vue'
import {inject} from "vue";

export default {
  components: {TopNav},
  setup() {
    const asideVisible = inject('asideVisible')
    return {asideVisible}
  }
}
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }

  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 20px 60px;
    @media(max-width: 500px) {
      overflow-x: auto;
      padding: 10px;
    }
  }
}

aside {
  width: 150px;
  padding: 70px 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  color: #652c9d;

  > h2 {
    margin-bottom: 4px;
    padding-left: 15px;
  }

  > ol {
    > li {
      padding-left: 15px;
      > a {
        display: block;
        padding: 20px;
        transition: all .3s;
        &:hover {
          font-size: 24px;
          border-bottom: none;
        }
        &.router-link-active {
          font-size: 24px;
        }
      }
    }
  }

}


</style>
