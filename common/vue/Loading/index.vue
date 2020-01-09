<style lang="stylus" rel="stylesheet/stylus">
.vbt-loading-wrapper
  display inline-flex
  align-items center
  flex-direction column
  justify-content center
  vertical-align middle
  font-size 0
  p
    font-size 14px
    margin-top 5px
</style>

<template>
  <div class="vbt-loading-wrapper" :style="{color:color}">
    <Circular v-if="type=='circular'" :size="size" :color="color"/>
    <spinner v-else :size="size" :color="color"/>
    <p v-if="label">{{ label }}</p>
  </div>
</template>

<script type="text/ecmascript-6">
import Circular from './circular'
import spinner from './spinner'
export default {
  components: {
    Circular,
    spinner
  },
  props: {
    label: String,
    type: {
      type: String,
      default: 'spinner', // spinner, circular
    },
    size: {
      type: Number,
      default: 14
    },
    color: {
      type: String,
      default: '#000'
    }
  }
}
</script>
