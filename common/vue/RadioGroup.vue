
<style lang="stylus" rel="stylesheet/stylus">
.vbt-radio-group
  .vbt-radio-item
    margin 0 10px 10px 0
</style>

<template>
  <div class="vbt-radio-group">
    <slot/>
  </div>
</template>

<script>
import { findComponentsDownward } from './vue-tool'
export default {
  props: {
    value: String
  },
  mounted () {
    this.initChildren()
  },
  methods: {
    update (id) {
      this.$emit('input', id)
    },
    initChildren () {
      findComponentsDownward(this, 'vbt-radio-item').forEach(item => {
        item.gk = this.value
      })
    }
  },
  watch: {
    value () {
      this.initChildren()
    }
  }
}
</script>