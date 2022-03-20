<template>
  <Button @click="onClick"
          size="24px"
          @mouseover="onClick"
          @focus="onClick"
  >你好
  </Button>
</template>


<script lang="ts">
import Button from '../libs/Button.vue'

export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return {onClick}
  }
}
</script>
