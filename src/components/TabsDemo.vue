<template>
  <h1 class="title">Tabs标签页</h1>
  <div class="tips"><p>分隔内容上有关联但属于不同类别的数据集合。</p></div>
  <div class="top"><h2 style="font-weight: 600;">基本用法</h2></div>
  <div class="tips"><p>基础的、简洁的标签页。</p></div>
  <section>
    <Tabs v-model:selected="selected">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2">内容2</Tab>
    </Tabs>
  </section>
</template>


<script lang="ts">
import Tabs from '../libs/Tabs.vue'
import Tab from '../libs/Tab.vue'
import {ref} from "vue";

export default {
  components: {Tab, Tabs},
  setup() {
    const selected = ref('导航1')
    return {selected}
  }
}
</script>


<style lang="scss">
.title {
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 36px;
}

> p {
  font-size: 18px;
  color: #5e6d82;
  line-height: 1.5em;
}

.top {
  display: flex;
  align-items: center;
  padding: 20px 20px 10px 0;
  margin-top: 20px;
}
</style>
