<style lang="stylus" rel="stylesheet/stylus">
.infinite-scroll-wrapper
  overflow hidden
  &.horizontal, &.horizontal .infinite-scroll-inner
    display flex
    flex-wrap no-wrap
</style>

<template>
  <div
    @mouseenter="stop"
    @mouseleave="update"
    @touchstart="stop"
    @touchend="update"
    ref="wrapper"
    class="infinite-scroll-wrapper"
    :style="{height, width}"
    :class="direction"
  >
    <!-- <h1>{{innerStyle}}</h1> -->
    <div ref="inner" class="infinite-scroll-inner" :style="innerStyle">
      <div ref="infinite-item" class="infinite-item">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    direction: {
      type: String,
      default: 'vertical' // vertical 垂直，horizontal 水平
    },

    height: { // 用于固定容器高度
      type: String,
      default: 'auto'
    },

    width: { // 用于固定容器高度
      type: String,
      default: 'auto'
    },

    count: { // 用于检测更新
      type: Number,
      default: 0
    },

    sleep: { // 多久执行一次
      type: Number,
      default: 16
    },

    step: { // 每次移动多少像素，支持小数
      type: Number,
      default: 1
    }
  },

  computed: {
    innerStyle () {
      return {
        transform: `translate3d(${this.x}px, ${this.y}px, 0)`
      }
    }
  },

  beforeDestroy () {
    clearTimeout(this.timer_up)
    clearTimeout(this.timer_sc)
  },

  data () {
    return {
      y: 0,
      x: 0,
      isStop: false, // 是否停止
      hasCloned: false, // 是否已经执行过复制
    }
  },

  mounted (){
    this.update()
  },

  methods: {
    async update () {
      this.isStop = false
      const oWrapper = this.$refs.wrapper
      const oInner = this.$refs.inner
      const oItem = this.$refs['infinite-item']
      clearTimeout(this.timer_up)
      clearTimeout(this.timer_sc)
      if(this.direction === 'vertical') {
        if(oInner.offsetHeight > oWrapper.offsetHeight) {
          if(!this.hasCloned) {
            oInner.appendChild(oItem.cloneNode(true))
          }
          this.hasCloned = true
          this.timer_up = setTimeout(this.scrollVerticalOnce, 500)
        } else {
          this.stop()
        }
      } else if(this.direction==='horizontal') {
        if(oInner.offsetWidth > oWrapper.offsetWidth) {
          if(!this.hasCloned) {
            oInner.appendChild(oItem.cloneNode(true))
          }
          this.hasCloned = true 
          this.timer_up = setTimeout(this.scrollHorizontalOnce, 500)
        } else {
          this.stop()
        }
      }
    },

    // 水平滚动
    scrollHorizontalOnce () {
      const oItem = this.$refs['infinite-item'];
      if(this.isStop || !oItem) return;
      let nowX = this.x - this.step
      if(Math.abs(nowX) >= oItem.offsetWidth) {
        nowX = 0
      }
      this.x = nowX
      clearTimeout(this.timer_up)
      clearTimeout(this.timer_sc)
      this.timer_sc = setTimeout(this.scrollHorizontalOnce, this.sleep)
    },


    // 垂直滚动
    scrollVerticalOnce () {
      const oItem = this.$refs['infinite-item'];
      if(this.isStop || !oItem) return;
      let nowY = this.y - this.step
      if(Math.abs(nowY) >= oItem.offsetHeight) {
        nowY = 0
      }
      this.y = nowY
      clearTimeout(this.timer_up)
      clearTimeout(this.timer_sc)
      this.timer_sc = setTimeout(this.scrollVerticalOnce, this.sleep)
    },

    // 停止滚动
    stop () {
      clearTimeout(this.timer_up)
      clearTimeout(this.timer_sc)
      this.isStop = true
    }
  },

  watch: {
    count () {
      this.update()
    }
  }
}
</script>