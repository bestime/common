<style lang="stylus" rel="stylesheet/stylus">
@font-face {
  font-family: 'code';
  src: url('../src/fonts/Inter-Regular.woff2');
}
@font-face {
  font-family: 'code2';
  src: url('../src/fonts/code2.woff');
}
pre, code
  font-family: 'code2', 'code', 'monospace';
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  margin 0
  padding 0
</style>

<template>
<pre v-if="content" v-highlight><code :class="type">{{ns.trim(content)}}</code></pre>
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
      // console.log('content', this.content)
    }
  }
}
</script>