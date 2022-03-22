<template>
  <div class="fu-tabs">
    <div class="fu-tabs-nav">
      <div class="fu-tabs-nav-item"
           :class="{selected: title=== selected}"
           @click="select(title)"
           :ref="setItemRef"
           v-for="(title,index) in titles" :key="index">{{ title }}
      </div>
      <div class="fu-tabs-nav-item-indicator" ref="indicator"></div>
    </div>
  </div>
  <div class="fu-tabs-content" :class="{selected:tab.props.title === selected}" v-for="(tab,index) in defaults"
       :key="index">
    <component :is="tab"></component>
  </div>
</template>


<script lang="ts">
import Tab from '../libs/Tab.vue'
import {onMounted, ref} from "vue";


export default {

  components: {Tab},
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const itemRefs = ref([])
    const indicator = ref(null)
    // ref配合v-for获取dom元素数组
    const setItemRef = (el) => {
      if (el) {
        itemRefs.value.push(el)
      }
    }
    // 挂载完才有数据，需要在onMounted之后才能得到
    onMounted(() => {
      const result = itemRefs.value.filter(div =>
          div.classList.contains('selected'))[0]
      const {width} = result.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
    })
    const defaults = context.slots.default()
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw Error('Tabs组件中的子组件必须为Tab')
      }
    })
    const titles = defaults.map(tag => {
      return tag.props.title
    })
    const select = (title) => {
      context.emit("update:selected", title)
    }

    return {defaults, titles, select, setItemRef, indicator}
  }
}
</script>


<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.fu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
      }

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
    display: none;

    &.selected {
      display: block;
    }
  }
}
</style>
