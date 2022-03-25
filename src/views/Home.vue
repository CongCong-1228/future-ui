<template>
  <TopNav/>
  <div class="wrapper">
    <div class="banner">
      <h1>Future-UI</h1>
      <h2>极具特色的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/CongCong-1228">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>

    </div>

  </div>
  <div class="main">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-lights"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>


<script>
import TopNav from "../components/TopNav.vue";

export default {
  components: {TopNav},
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: rgb(223, 144, 225);
  background: radial-gradient(circle, rgba(223, 144, 225, 1) 0%, rgba(102, 46, 171, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);

  > .banner {
    color: #dbeef4;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;



    > .actions {
      padding: 20px 0;

      a {
        color: #fff;
        margin: 0 8px;
        border-radius: 4px;
        padding: 8px 24px;
        background: rgb(143, 84, 226);
        background: linear-gradient(145deg, rgba(143, 84, 226, 1) 0%, rgba(118, 62, 187, 1) 100%);

        &:hover {
          text-decoration: none;
          border: none;
        }
      }
    }

  }
}

.main {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        margin-top: 64px;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }
  }
}
</style>
