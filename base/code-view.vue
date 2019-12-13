<style lang="stylus" rel="stylesheet/stylus">
pre, code
  font-family SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace
</style>

<template>
<pre v-if="content" v-highlight><code :class="type">{{content}}</code></pre>
</template>

<script>
export default {
  name: 'code-view',
  props: {
    content: String,
    type: {
      type: String,
      default: 'html'
    }
  },

  watch: {
    content () {
      console.log('content', this.content)
    }
  }
}
</script>