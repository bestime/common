<style lang="stylus" rel="stylesheet/stylus">
$delay = 0.3s
.slide-operate-item
  position relative
  user-select none
  &.animate
    .slide-operate-content
      transition $delay ease-out
.slide-operate-content
  position relative
  z-index 2
  background #fff
.slide-operate-back
  top 0
  bottom 0
  right 0
  left 0
  position absolute
  display flex
  align-items stretch
  justify-content flex-end
  background #fff
.slide-operate-container
  display flex
  align-items stretch
  justify-content flex-end
  background none
  overflow hidden
  & > div
    word-break keep-all
.slide-operate-btn
  display flex
  align-items stretch
  justify-content center
  margin 0
  padding 0
  border none
</style>

<template>
  <div class="slide-operate-item" :class="{animate: !hasTouchd}">
    <div
      class="slide-operate-content"
      @touchstart="onStart($event)"
      @touchmove="onMove($event)"
      @touchend="onEnd($event)"
      @mousedown="onMouseDown($event)"
      :style="{
        transform: `translateX(${diffx}px)`
      }"
    >
      <slot name="content"/>
    </div>

    <div class="slide-operate-back">
      <div v-show="$slots.box2" ref="b1" class="slide-operate-btn">
        <slot name="box2" :close="close"/>
      </div>
      <div ref="b2" class="slide-operate-btn">
        <slot name="box1" :close="close"/>
      </div>
    </div>
  </div>
</template>
<script>
import { findComponentUpward } from './vue-tool'
const isSupportTouch = "ontouchend" in document ? true : false
import bind from '../js/split/bind'
import unbind from '../js/split/unbind'
import isFunction from '../js/split/isFunction'
const DELAY = 300
export default {
  name: 'slide-operate-item',
  data () {
    return {
      diffx: 0,
      hasTouchd: false,
      isOpen: false,
      isDown: false,
    }
  },
  methods: {
    emitFather () {
      const oFather = findComponentUpward(this, 'slide-operate-group')
      if(oFather) {
        oFather.onChildTouch(this._uid)
      }
    },

    onMouseDown (ev) {
      this.isDown = true
      if(!isSupportTouch) {
        this.emitFather()
        this.hasTouchd = true
        this.x0 = ev.clientX - this.diffx
        bind(document, this._uid, 'mouseup', this.onEnd)
        bind(document, this._uid, 'mousemove', this.onMouseMove)
      }
    },
    onStart (ev) {
      if(isSupportTouch) {
        this.emitFather()
        this.hasTouchd = true
        this.x0 = ev.touches[0].pageX - this.diffx
      }
    },

    onMove (ev) {
      if(isSupportTouch) {
        this.setDiff(ev.touches[0].pageX - this.x0)
      }
    },

    setDiff (num) {
      if(num > 0) {
        num = 0
      } else {
        if(num<-this.$el.offsetWidth) {
          num = -this.$el.offsetWidth
        }
      }
      this.diffx = num
    },

    onMouseMove (ev) {
      if(this.isDown && !isSupportTouch) {
        this.setDiff(ev.clientX - this.x0)
      }
    },

    close (callback) {
      this.isDown = false
      this.diffx = 0
      this.isOpen = false
      isFunction(callback) && setTimeout(callback, DELAY)
    },

    onEnd (ev) {
      if(!isSupportTouch) {
        unbind(document, this._uid, 'mouseup')
        unbind(document, this._uid, 'mousemove')
      }
      this.isDown = false
      this.hasTouchd = false
      this.$nextTick(() => {
        const width = ['b1', 'b2'].reduce((total, name) => {
          total += (this.$refs[name] ? this.$refs[name].offsetWidth : 0)
          return total
        }, 0)
        if(this.isOpen && this.diffx>-width) {
          this.close()
        } else {
          if(this.diffx<0) {
            if(Math.abs(this.diffx)/width>0.2) {
              this.diffx = -width
              this.isOpen = true
            } else {
              this.close()
            }
          } else {
            this.close()
          }
        }
      })
    },
  }
}
</script>