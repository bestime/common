<style lang="stylus" rel="stylesheet/stylus">
.drawer-vbt
  position fixed
  left 0
  right 0
  bottom 0
  top 0
  display none
  ::-webkit-scrollbar
    width 7px
    height 7px
    position fixed
    left 0
    top 0
  ::-webkit-scrollbar-thumb
    border-radius 0px
    background rgba(0,0,0,0.05) !important
    border rgba(0,0,0,0.1) solid 1px !important
    position absolute
    right -10px !important
    border-radius 10px !important
  ::-webkit-scrollbar-track 
    background rgba(255,255,255,1) !important
  &.opened
    display flex
  .drawer-content
    position absolute
    transition 0.2s ease-out
    -webkit-overflow-scrolling touch
    box-shadow 0 0 20px rgba(0,0,0,0.2)
    display flex
    flex-direction column
  &.dir-bottom
    .drawer-content
      right 0
      top 15%
      bottom 0
      left 0
      background #fff
      transform translateY(100%)
    &.auto-width
      .drawer-content
        left auto
  &.dir-right
    .drawer-content
      right 0
      top 0
      bottom 0
      left 15%
      background #fff
      transform translateX(100%)
    &.auto-width
      .drawer-content
        left auto
  &.dir-left
    .drawer-content
      left 0
      top 0
      bottom 0
      right 15%
      background #fff
      transform translateX(-100%)
    &.auto-width
      .drawer-content
        right auto
  &.dir-center
    align-items center
    justify-content center
    .drawer-content
      transition 0.2s cubic-bezier(0.245, 0.890, 0.175, 1.210)
      position relative
      z-index 20
      display inline-flex
      opacity 0
      transform scale(0.7)
      max-height 80%
      box-shadow 0 0 20px rgba(0,0,0,0.5)
  .drawer-bg
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    background rgba(0,0,0,0.3)
    opacity 0
    transition 0.2s
  &.active
    .drawer-bg
      opacity 1
    &.dir-right
      .drawer-content
        transform translateX(0)
    &.dir-bottom
      .drawer-content
        transform translateY(0)
    &.dir-left
      .drawer-content
        transform translateX(0)
    &.dir-center
      .drawer-content
        transform scale(1)
        opacity 1
  .w154
    display flex
    align-items center
    justify-content space-between
    padding 10px 20px
    font-size 16px
    color #292929
    background #fff
    border-bottom #f9f9f9 solid 1px
    user-select none
  .bw74
    width 26px
    height 26px
    display flex
    align-items center
    justify-content center
    transition 0.2s
    cursor pointer
    font-size 20px
    &:hover
      background #f9f9f9
    &:active
      background #f2f2f2
  .drawer-body
    flex 1
    position relative
    overflow auto
    overflow-x hidden
</style>

<template>
  <div :title="null" ref="wrapper" class="drawer-vbt" :class="getClass()" :style="getStyle">
    <div class="drawer-bg" @click="mkClose"></div>
    <div class="drawer-content" :class="contentClass" :style="{'width': width, 'height': height}">
      <div class="w154" v-if="title">
        <div>{{ title }}</div>
        <div class="bw74" @click="close()">
          <i class="vbt-icon">&#xe603;</i>
        </div>
      </div>
      <div class="drawer-body">
        <slot/>
      </div>
    </div> 
  </div>  
</template>

<script>
import getConfig from '../js/split/getConfig'
import setConfig from '../js/split/setConfig'
import _Number from '../js/split/_Number'
const NAME = 'drawer-vbt'


export default {
  name: NAME,
  props: {
    title: [String],
    direction: {
      type: String,
      default: 'right'
    },
    contentClass: String,
    width: String,
    height: String,
    maskclose: {
      type: Boolean,
      default: true
    },
    baseIndex: {
      type: [Number, String],
      default: 100
    }
  },
  data () {
    return {
      active: false,
      opened: false,
      tempTitle: '',
      count: 0
    }
  },

  computed: {
    getStyle () {
      return {
        'z-index': this.count + _Number(this.baseIndex)
      }
    }
  },
  
  methods: {
    updateIndex () {
      return new Promise(resolve => {
        this.count = _Number(getConfig(NAME)) + 1
        setConfig(NAME, this.count)
        this.$nextTick(resolve)
      })
    },
    getClass () {
      let dirClass = ''
      switch (this.direction) {
        case 'right':
          dirClass = 'dir-right'
          break;
        case 'center':
          dirClass = 'dir-center'
          break;
        case 'left':
          dirClass = 'dir-left'
          break;
        case 'bottom':
          dirClass = 'dir-bottom'
          break;
      }

      if(this.width) (dirClass += ' auto-width');
      if(this.height) (dirClass += ' auto-height');
      return [
        dirClass,
        this.active ? 'active' : '',
        this.opened ? 'opened' : ''
      ]
    },

    async show () {
      await this.updateIndex()
      this.opened = true
      this.tempTitle = document.title
      document.title = this.title
      setTimeout(() => {
        this.active = true
      }, 30)
    },

    mkClose () {
      if(this.maskclose) {
        this.close()
      }
    },

    close () {
      this.active = false
      document.title = this.tempTitle
      setTimeout(() => {
        this.opened = false
        this.$emit('on-closed')
      }, 200)
    }
  },
}
</script>