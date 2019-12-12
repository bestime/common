<style lang="stylus" rel="stylesheet/stylus">
.vbt-scroll-wrapper
  height 100%
  position relative
  overflow hidden
  .bscroll-vertical-scrollbar
    right 2px !important
    z-index 2 !important
  &.dark
    .bscroll-indicator
      
      border-color rgba(255,255,255,0.2) !important
      background rgba(255,255,255,0) !important
</style>

<template>
  <div ref="el" class="vbt-scroll-wrapper" :class="theme">
    <div class="bs-content">
      <slot/>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import ScrollBar from '@better-scroll/scroll-bar'
import MouseWheel from '@better-scroll/mouse-wheel'

BScroll.use(ScrollBar)
BScroll.use(MouseWheel)

export default {
  props: {
    // 执行 refresh 次数
    count: Number,
    theme: String
  },

  mounted () {
    this.$nextTick(() => {
      this.initScroll()
    })
  },

  methods: {
    initScroll () {
      this.scroll = new BScroll(this.$refs.el, {
        disableMouse: false,
        scrollbar: {
          fade: false
        },
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        }
      })
    },
    
    refresh () {
      this.scroll && this.scroll.refresh()
    }
  },
  watch: {
    count () {
      console.log('滚动刷新')
      this.refresh()
    }
  }
}
</script>