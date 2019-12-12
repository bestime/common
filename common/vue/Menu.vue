<style lang="stylus" rel="stylesheet/stylus">
@import "./theme.styl"
$margin = 5px
.menu-vbt
  display inline-block
  position relative
  &.right
    .menu-more
      .triangle
        margin 0
        padding 0
        font-size 0
        line-height 0
        border-width 8px
        border-color #fff
        border-style dashed
        border-left-width 0
        border-right-style solid
        border-top-color transparent
        border-bottom-color transparent
        display inline-block
        position absolute
  // &.active
  //   box-shadow 0 0 0 2px getActiveColor(0.2)
.menu-more
  position absolute
  left 100%
  top 0
  z-index 30
  background #fff
  margin-left $margin + 10
  box-shadow 0 0 7px rgba(0,0,0,0.3)
  border-radius 4px
  transform-origin left top
.menu-title
  display flex
  align-items center
  justify-content space-between
  padding 10px
  border-bottom #eee solid 1px
  font-size 14px
.menu-button
  flex 1
  height 100%
  display flex
  align-items stretch
  justify-content center
.menu-close
  cursor pointer
  &:hover
    color getActiveColor(1)
  
        



</style>

<template>
  <div ref="el" class="menu-vbt" :class="[direction, open ? 'active' : ''].join(' ')">
    <div class="menu-button" @click="toggle">
      <slot name="button"/>
    </div>
    <transition name="fade">
      <div v-show="open" class="menu-more" @click="wrapperClick($event)">
        <div v-if="title" class="menu-title">
          <div>{{title}}</div>
          <i class="vbt-icon menu-close" @click="open=false">&#xe603;</i>
        </div>
        <slot name="menu"/>
        <i :style="trangleStyle" class="triangle"></i>
      </div>
    </transition>
  </div>  
</template>

<script>
import BUS from './vue-bus'
import prevent from '../js/split/prevent'
const bus = BUS()
export default {
  name: 'menu-vbt',
  props: {
    // 触发方式
    trigger: {
      type: String, 
      default: 'click' // ['click', 'hover']
    },

    // 展开反向
    direction: {
      type: String,
      default: 'right'
    },

    title: String
  },

  data () {
    return {
      open: false,
      trangleStyle: {}
      
    }
  },

  beforeDestroy() {
    clearTimeout(this.timer)
    bus.clear(this.xjmkew)
  },

  mounted() {
    // this.$nextTick(() => {
    //   this.toggle()
    // })
  },
  
  methods: {
    wrapperClick (e) {
      prevent(e)
    },
    toggle () {
      if(!this.open) {
        this.show()
      } else {
        this.close()
      }
    },

    show () {
      
      switch (this.direction) {
        case 'right':
          this.trangleStyle = {
            top: `${this.$refs.el.offsetHeight / 2 - 8}px`,
            left: '-8px'
          }
          break;
      }
      this.open = true
      this.$nextTick(() => {
        setTimeout(() => {
          bus.clear(this.xjmkew)
          clearTimeout(this.timer)
          this.xjmkew = bus.oneonce('document-click', () => {
            clearTimeout(this.timer)
            this.close()
          })
        }, 100)
      })
    },

    close () {
      clearTimeout(this.timer)
      bus.clear(this.xjmkew)
      this.open = false
    }
  },
}
</script>