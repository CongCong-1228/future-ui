<template>
  <article class="markdown-body" v-html="content">

  </article>
</template>


<script lang="ts">


export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  // data(props) {
  //   const content = ref<String>('')
  //
  //   // 使用import动态引入路径，是一个异步任务，一开始会白屏
  //
  //   import(props.content).then(result => {
  //     content.value = result.default
  //   })
  //   return {content}
  // }
}
</script>
