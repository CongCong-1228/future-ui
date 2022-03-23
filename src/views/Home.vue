<template>
  <TopNav/>
  <div class="wrapper">
    <div class="banner">
      <h1>Future-UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/CongCong-1228">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="main">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-Vue"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-ts"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-lights"></use>
    </svg>
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

  > .banner {
    color: #dbeef4;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > .actions {
      padding: 8px 0;

      a {
        color: #fff;
        margin: 0 8px;
        display: inline-block;
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
  >svg {
    height: 64px;
    width: 64px;
  }
}
</style>
