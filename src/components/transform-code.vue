<style lang="stylus" rel="stylesheet/stylus">
.tsf-code
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  display flex
  align-items stretch
  justify-content center
  .sdkj
    flex 1
    margin 20px
</style>

<template>
  <div class="tsf-code">
    <textarea class="sdkj" v-model="content"></textarea>
    <textarea class="sdkj" v-model="sewCode"></textarea>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  computed: {
    sewCode () {
      let str = this.content.replace(/<\//g, '<\\/')
      str = str.replace(/`.*?`/g, (g) => {
        return '${\''+ g +'\'}'
      })
      return str
    }
  },
  methods: {
  }
}
</script>