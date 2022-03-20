<template>
  <!--  :class = {checked} === :class = "{checked ? 'checked' : ''}"-->
  <button :class="{checked:value}"
          @click="toggle"
          :style="{background: (value ? activeColor : noActiveColor)}"
  >
    <span></span>
  </button>

</template>


<script>

export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    activeColor: {
      type: String
    },
    noActiveColor: {
      type: String
    }

  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }

    return {toggle}
  }
}
</script>


<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h2*3;
  border: none;
  border-radius: calc(#{$h} / 2);
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc(#{$h2} / 2);
    transition: all .3s;
  }

  &:hover {
    cursor: pointer;

  }

  &.checked {
    > span {
      left: calc(100% - 20px);
    }
  }
}


</style>
