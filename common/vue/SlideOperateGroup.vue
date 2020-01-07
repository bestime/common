<style lang="stylus" rel="stylesheet/stylus">
@import "./theme.styl"
.slide-operate-group
  margin 0
  padding 0
  border $staticBorderColor solid 1px
  .slide-operate-item:not(:nth-of-type(1))
    &:after
      content ''
      position absolute
      left 0
      top 0
      right 0
      height 1px
      background $staticBorderColor
      z-index 5

  
</style>

<template>
  <div class="slide-operate-group">
    <slot/>
  </div>
</template>
<script>
import { findComponentsDownward } from './vue-tool'
export default {
  name: 'slide-operate-group',
  data () {
    return {
      
    }
  },
  methods: {
    onChildTouch (uid) {
      const oChilds = findComponentsDownward(this, 'slide-operate-item')
      oChilds.forEach(item => {
        if(item._uid !== uid) {
          item.close()
        }
      })
    }
  }
}
</script>