<style lang="stylus" rel="stylesheet/stylus">
.vbt-water-fall
  position relative
  
</style>

<template>
  <div ref="wrapper" class="vbt-water-fall" :style="{height: `${height}px`}">
    <slot/>
  </div>
</template>

<script>
import { findComponentsDownward } from './vue-tool'
import throttle from '../js/split/throttle'
import _Number from '../js/split/_Number'

export default {
  name: 'waterfall-wrapper',
  props: {
    // 上下间距
    spaceVertical: {
      type: Number,
      default: 10
    },

    // 左右间距
    spaceHorizontal: {
      type: Number,
      default: 10
    },
  },

  data () {
    return {
      timer: null,
      height: 0,
      maxWidth: 0
    }
  },

  beforeDestroy () {
    clearInterval(this.timer)
  },

  methods: {
    getWidth () {
      try {
        return this.$refs.wrapper.offsetWidth
      } catch (e) {
        return 0
      }
    },
    getHeight () {
      try {
        return this.$refs.wrapper.offsetHeight
      } catch (e) {
        return 0
      }
    },
    // 用于 子组件自动调用后进行更新
    onChildUpdate () {
      let maxWidth; // 最大宽度
      if(!this.THFUNC) {
        let maxNum;//一行能放下的最大个数
        let justify; // 多出的平分，用于居中
        let x; // 插入到第几列

        let y; // 累计的高度
        let left; // 累计的宽度

        let perWidth; // 以第一个的width作为每一项的宽度
        let perHeight; // 每一个子项的噶偶的
        let hMap; // 每一列高度总和统计
        this.THFUNC = throttle({
          handle: () => {
            const list = findComponentsDownward(this, 'waterfall-item')
            list.sort((a, b) => a.index > b.index ? 1 : -1)            
            if(!list.length) return;
            clearInterval(this.timer)
            this.timer = setInterval(() => {
              maxWidth = this.getWidth()
              if(maxWidth!==this.maxWidth) {
                this.maxWidth = maxWidth
                this.onChildUpdate()
              }
            }, 60)
            try { perWidth = list[0].$refs.el.offsetWidth } catch (e) { return; }
            hMap = {}
            x = 0
            y = 0
            maxWidth = this.getWidth()
            maxNum = Math.floor((maxWidth-this.spaceHorizontal) / (perWidth + this.spaceHorizontal))
            if(maxWidth - this.spaceHorizontal > perWidth + this.spaceHorizontal) {
              justify = ((maxWidth-this.spaceHorizontal) % (perWidth + this.spaceHorizontal)) / 2
            } else {
              justify = 0
            }
            list.forEach((item, index) => {
              if(index === 0) {
                justify = 0
              }
              if(index < maxNum) {
                x = index
                y = this.spaceVertical
              } else {
                let min = findMinNumberFromJson(hMap)
                x = min.index
                y = min.num + this.spaceVertical
              }
              perHeight = item.$refs.el.offsetHeight
              hMap[x] = y + perHeight
              left = justify + this.spaceHorizontal  + (perWidth + this.spaceHorizontal) * x++
              item.updatePos(left, y)
            })
            this.height = findMinNumberFromJson(hMap).max + this.spaceVertical
            this.$emit('on-update')
          },
          delay: 300,
          isFirstWork: true,
          isLastWork: true,
        })
      }
      this.THFUNC()
    }
  }
}

// 寻找最矮的那一列
function findMinNumberFromJson (obj) {
  let min, item, res, max=0;
  for(let key in obj) {
    if(typeof res === 'undefined') {
      res = key
    }

    
    
    item = _Number(obj[key])
    if(typeof min=== 'undefined' || item < min) {
      min = item
      res = key
    }

    if(item > max) {
      max = item
    }
  }
  return {
    index: _Number(res),
    num: min,
    max
  }
}

</script>