<style lang="stylus" rel="stylesheet/stylus">
.vbt-loading-container
  position relative
  .vbt-loading-mask
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    z-index 99999
    display flex
    align-items center
    justify-content center
    background rgba(0,0,0,0.8)

</style>

<template>
  <div class="vbt-loading-container">
    <transition name="fade">
      <div v-if="hasProp(value)" class="vbt-loading-mask">
        <Loading :type="type" :size="size" color="#fff" :label="label"/>
      </div>
    </transition>
    <slot/>
  </div>
</template>

<script>
import Loading from './index'
import { hasProp } from '../vue-tool'
export default {
  components: {
    Loading
  },
  props: {
    value: null,
    label: String,
    type: {
      type: String,
      default: 'spinner', // spinner, circular
    },
    size: {
      type: Number,
      default: 40
    }
  },
  methods: {
    hasProp
  }
}
</script>