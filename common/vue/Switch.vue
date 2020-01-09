<style lang="stylus" rel="stylesheet/stylus">
// 推荐根元素字体大小像素以下推荐[18, 20, 28, 26, 30, 34, 34+(2*n)]
@import "./theme.styl"
.switch-vbt
  display inline-flex
  align-items center
  user-select none
  text-align left
  vertical-align middle
  .switch-main
    flex-shrink 0
    width 1.8em
    background rgba(0,0,0,0.1)
    padding 2px
    border-radius 2em
    transition 0.2s
    cursor pointer
    transition 0.2s
    &:active
      background rgba(0,0,0,0.2)
      .vbt-cir
        width 1.2em
  .switch-vbt-text
    font-size 0.6em
    color #666
  &.has-slots
    .switch-vbt-text
      margin-left 0.5em
  .vbt-cir
    width 1em
    height 1em
    background #fff
    border-radius 0.5em
    position relative
    left 0
    top 0
    transition 0.2s ease-out
    display flex
    align-items center
    justify-content center
    box-shadow 1px 0px 2px rgba(0,0,0,0.3)
    &:after
      content ''
      position absolute
      left 50%
      top 50%
      width 0.3em
      height 0.3em
      border-radius 50%
      transform translate(-50%, -50%)
      background #eee 
      transition 0.2s ease-out
      display none
  &.open
    .switch-main
      background getActiveColor(1)
    .vbt-cir
      left 100%
      transform translateX(-100%)
      &:after
        background getActiveColor(1)
    .switch-vbt-text
      color getActiveColor(1)
  &.disabled
    opacity 0.5
    *
      cursor not-allowed !important
</style>

<template>
  <div
    class="switch-vbt"
    :class="{
      'open': value == 1,
      'has-slots': hasSlots,
      disabled: hasProp(disabled)
    }"
    :style="{
      'font-size': `${size}px`
    }"
  >   
    <div class="switch-main" @click="toggle">
      <div class="vbt-cir">
        
      </div>
    </div>
    <div class="switch-vbt-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { _Number, hasProp } from './vue-tool'
export default {
  name: 'switch-vbt',
  props: {
    value: {
      type: [Number, String, Boolean],
      default: false
    },
    id: null,
    size: {
      default: 26
    },
    disabled: null
  },
  computed: {
    hasSlots () {
      return !!this.$slots.default
    }
  },
  data () {
    return {
      changeing: false,
      count: 0
    }
  },
  methods: {
    toggle () {
      if(this.changeing || this.disabled) return;
      const toVal = !Number(this.value)
      this.count++
      if(this.$listeners['on-change']) {
        this.changeing = true
        let count = this.count
        this.$emit('on-change', toVal, () => {
          // 可能由外部强制改变了，这个操作无效
          if(this.count===count) {
            this.changeing = false
            this.$emit('input', toVal)
          }
        })
      } else {
        this.$emit('input', toVal)
      }
    },
  },
  watch: {
    value (newVal, oldVal) {
      this.count++
      this.changeing = false
    }
  }
}
</script>