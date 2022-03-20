<template>
  <button :style="{fontSize:size}">
    <slot/>
  </button>

</template>


<script>
export default {
  props: {
    size: {
      type: String
    }
  },
  setup(props, context) {

  }
}
</script>
