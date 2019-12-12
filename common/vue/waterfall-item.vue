<style lang="stylus" rel="stylesheet/stylus">
.waterfall-item
  display block
  position absolute
  transition 0.3s ease-out
  margin 0
  padding 0
  border none
  box-sizing border-box
  
</style>

<template>
  <div
    ref="el"
    class="waterfall-item"
    :style="pos"
  >
    <slot/>  
  </div>
</template>

<script>
import { findComponentUpward } from './vue-tool'
const NAME = 'waterfall-item'
export default {
  name: NAME,
  data () {
    return {
      father: findComponentUpward(this, 'waterfall-wrapper'),
      top: 0,
      left: 0,
    }
  },
  computed: {
    pos () {
      return {
        left: `${this.left}px`,
        top: `${this.top}px`,
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      if(this.father) {
        this.father.onChildUpdate()
      }
    })
  },
  methods: {
    updatePos (left, top) {
      this.left = left
      this.top = top
    }
  },
}
</script>