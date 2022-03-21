<template>
  <template v-if="visible || visible1">
    <Teleport to="body">
      <div class="fu-dialog-overlay"></div>
      <div class="fu-dialog-wrapper">
        <div class="fu-dialog">
          <header>
            <span v-if="visible">提示</span>
            <slot v-if="visible1" name="title"/>
            <span class="fu-dialog-close" @click="close"></span></header>
          <main>
            <p v-if="visible">这是默认的内容</p>
            <slot v-if="visible1" name="content"/>
          </main>
          <footer>
            <Button theme="button" plain @click="close">取消</Button>
            <Button theme="primary" @click="close">确认</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>

</template>

<script lang="ts">
import Button from './Button.vue'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    visible1: {
      type: Boolean,
      default: false,
    }
  },
  components: {Button},
  setup(props, context) {
    const close = () => {
      if (props.visible) {
        context.emit('update:visible', false)
      }
      if (props.visible1) {
        context.emit('update:visible1', false)
      }
    }

    return {close}
  }
}
</script>


<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.fu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    width: 30%;
    position: fixed;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    z-index: 11;
    height: 30%;
  }

  > header {
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 30px 20px;

    > p {
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
  }

  > footer {
    padding: 12px 20px;
    text-align: right;

    > Button {
      margin-right: 10px;
    }
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
