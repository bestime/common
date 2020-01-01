<style lang="stylus" rel="stylesheet/stylus">
.dop_right-enter-active, .dop_right-leave-active
  transition 0.15s ease-out
.dop_right-enter, .dop_right-leave-to
  opacity 0
  transform translateX(100px)

.dop_left-enter-active, .dop_left-leave-active
  transition 0.15s ease-out
.dop_left-enter, .dop_left-leave-to
  opacity 0
  transform translateX(-100px)

.dop_bottom-enter-active, .dop_bottom-leave-active
  transition 0.15s ease-out
.dop_bottom-enter, .dop_bottom-leave-to
  opacity 0
  transform translateY(100px)

.dop_center-enter-active
  transition 0.15s cubic-bezier(0.245, 0.890, 0.175, 1.210)
.dop_center-leave-active
  transition 0.15s cubic-bezier(0.850, -1.1, 0.540, 1.650)
  
.dop_center-enter, .dop_center-leave-to
  opacity 0
  transform scale(0.7)


.dop_top-enter-active, .dop_top-leave-active
  transition 0.15s ease-out
.dop_top-enter, .dop_top-leave-to
  opacity 0
  transform translateY(-100px)

.mkp85-enter-active, .mkp85-leave-active
  transition 0.2s ease-out
.mkp85-enter, .mkp85-leave-to
  opacity 0

.drawer-vbt
  position fixed
  left 0
  right 0
  bottom 0
  top 0
  .drawer-body
    flex 1
    position relative
    overflow auto
    overflow-x hidden
  .drawer-content
    position absolute
    -webkit-overflow-scrolling touch
    box-shadow 0 0 20px rgba(0,0,0,0.2)
    display flex
    flex-direction column
    background #fff
  .drawer-bg
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    background rgba(0,0,0,0.3)  
  .d-title
    display flex
    align-items center
    justify-content space-between
    padding 10px 20px
    font-size 16px
    color #292929
    background #fff
    border-bottom #f9f9f9 solid 1px
    user-select none
  .d-back
    width 26px
    height 26px
    display flex
    align-items center
    justify-content center
    cursor pointer
    font-size 20px
    &:hover
      background #f9f9f9
  &.right
    .drawer-content
      right 0
      top 0
      bottom 0
      left auto
  &.left
    .d-back
      transform rotate(-180deg)
    .drawer-content
      right auto
      top 0
      bottom 0
      left 0
  &.bottom
    .d-back
      transform rotate(90deg)
    .drawer-content
      right 0
      top auto
      bottom 0
      left 0
  &.top
    .d-back
      transform rotate(-90deg)
    .drawer-content
      right 0
      top 0
      bottom auto
      left 0
  &.center
    display flex
    align-items center
    justify-content center
    .drawer-content
      position relative
      max-height 80%
      max-width 80%
  
</style>

<template>
  <div
    v-show="exist"
    :title="null"
    ref="wrapper"
    class="drawer-vbt"
    :class="direction"
    :style="getStyle"
  >
    <transition name="mkp85">
      <div v-show="open" class="drawer-bg" @click="mkClose"></div>
    </transition>
    <transition :name="`dop_${direction}`">
      <div
        v-show="open"
        class="drawer-content"
        :class="contentClass"
        :style="{
          'width': (width || direction !== 'center') ? width : 'auto',
          'height': (height || direction !== 'center') ? height : 'auto'
        }"
      >
        <div class="d-title" v-if="title">
          <div>{{ title }}</div>
          <div class="d-back" @click="close()">
            <i class="vbt-icon">{{ direction=='center' ? '&#xe603;' : '&#xe63b;' }}</i>
          </div>
        </div>
        <div class="drawer-body">
          <slot/>
        </div>
      </div> 
    </transition>
  </div>  
</template>

<script>
import getConfig from '../js/split/getConfig'
import setConfig from '../js/split/setConfig'
import _Number from '../js/split/_Number'
import removeElement from '../js/split/removeElement'
import { hasProp } from './vue-tool'
const delay = 200
const NAME = 'drawer-vbt'
function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
              "SymbianOS", "Windows Phone",
              "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
      }
  }
  return flag;
}

export default {
  name: NAME,
  props: {
    body: Boolean,
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
      tempTitle: '',
      count: 0,
      pc: IsPC(),
      open: false, // 是否打开
      exist: false, // 是否存在
    }
  },

  computed: {
    getStyle () {
      return {
        'z-index': this.count + _Number(this.baseIndex)
      }
    }
  },

  beforeDestroy () {
    clearTimeout(this.timer12)
    if(hasProp(this.body)) {
      removeElement(this.$el)  
    }
  },

  mounted () {
    this.$nextTick(() => {
      if(hasProp(this.body)) {
        if (document.body.append) {
          document.body.append(this.$el);
        } else {
          document.body.appendChild(this.$el);
        }
      }
    })
  },
  
  methods: {
    updateIndex () {
      return new Promise(resolve => {
        this.count = _Number(getConfig(NAME)) + 1
        setConfig(NAME, this.count)
        this.exist = true
        this.$nextTick(() => {
          this.open = true
          resolve()
        })
      })
    },

    async show () {
      clearTimeout(this.timer12)
      await this.updateIndex()
      this.tempTitle = document.title
      if(this.title !== '' && this.title != null) {
        document.title = this.title
      }
    },

    mkClose () {
      if(this.maskclose) {
        this.close()
      }
    },

    close () {
      document.title = this.tempTitle
      this.open = false
      clearTimeout(this.timer12)
      this.timer12 = setTimeout(() => {
        this.exist = false
        this.$emit('on-close')
      }, delay)
    }
  },
}
</script>