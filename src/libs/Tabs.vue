<template>
  <div class="fu-tabs">
    <div class="fu-tabs-nav" ref="container">
      <div class="fu-tabs-nav-item"
           :class="{selected: title.props.title===selected}"
           @click="select(title.props.title)"
           :ref="setItemRef"
           v-for="(title,index) in defaults" :key="index">{{ title.props.title }}
      </div>
      <div class="fu-tabs-nav-item-indicator" ref="indicator"></div>
    </div>
  </div>
  <div class="fu-tabs-content" :class="{selected:tab.props.title === selected }"
       v-for="(tab,index) in defaults"
       :key="index">
    <component :is="tab"></component>
  </div>
</template>


<script lang="ts">
import Tab from '../libs/Tab.vue'
import {onMounted, ref, watchEffect} from "vue";


export default {

  components: {Tab},
  props: {
    selected: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, context) {
    const itemRefs = ref<HTMLDivElement[]>([])
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    console.log(container)
    const classes = []
    // ref配合v-for获取dom元素数组
    const setItemRef = (el) => {
      if (el) {
        itemRefs.value.push(el)
      }
    }
    // 挂载完才有数据，需要在onMounted之后才能得到
    // onMounted只在第一次渲染执行，要改变需要放在onUpdated中
    // watchEffect = onMounted + onUpdated
    onMounted(() => {
      watchEffect(() => {
        const result = itemRefs.value.filter(div =>
            div.classList.contains('selected'))[0]

        const {width} = result.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const {left: left1} = container.value.getBoundingClientRect()
        const {left: left2} = result.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'


      })
    })
    const select = (title) => {
      // if(title.contains('disabled')){return}
      context.emit("update:selected", title)

    }
    const defaults = context.slots.default()
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw Error('Tabs组件中的子组件必须为Tab')
      }
    })


    return {defaults, select, indicator, container, setItemRef, classes}
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
      padding: 15px;
      margin: 0 16px;
      cursor: pointer;

      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
        transition: all .3s;
      }

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }

      &.disabled:hover, &.disabled:focus {
        color: #606266;
        cursor: not-allowed;
      }
    }
  }

  &-content {
    padding: 15px;
    display: none;

    &.selected {
      display: block;
    }
  }
}
</style>
