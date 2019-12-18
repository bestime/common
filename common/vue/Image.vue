<style lang="stylus" rel="stylesheet/stylus">
.image-vbt-wrapper  
  display inline-flex
  align-items center
  justify-content center
  position:relative
  box-sizing border-box
  font-size 16px
  position relative
  flex-shrink 0
  .mjkw
    max-width 100%
    max-height 100%
  .vbt-icon
    color #fff
    font-size 1em
  &.default
    background #b9b9b9
</style>

<template>
  <div
    class="image-vbt-wrapper"
    :class="{
      'default': showDefault
    }"
    @click="$emit('click')"
  >
  <img
    ref="img"
      class="mjkw"
      :src="useSrc"
      @error="onError"
      @load="onLoad"
      v-show="!showDefault"   
      itemprop="thumbnail"
      alt="Image description"   
    />
    <div v-show="showDefault" class="vbt-icon">&#xe99d;</div>
  </div>  
</template>

<script>
export default {
  name: 'image-vbt',
  props: {
    // 图片地址
    src: null,

    // 默认图片列表
    list: {
      type: Array,
      default: function () {
        return [] 
      }
    }
  },

  data () {
    return {
      showDefault: false,
      idx: -1,
      useSrc: ''
    }
  },

  mounted () {
    if(!this.src) {
      this.getDefaultImage()
    } else {
    this.useSrc = this.src
    }
  },

  methods: {
    onError () {
      this.getDefaultImage()
    },

    onLoad () {
      this.showDefault = false
      this.$nextTick(() => {
        this.$emit('on-load', this.useSrc)
      })
    },

    getDefaultImage (callback) {
      if(!this.list.length || this.idx>=this.list.length) {
        this.showDefault = true
      } else {
        let src = this.list[++this.idx]
        if( src ) {
          this.useSrc = src
        }
      }
    }
  },
  watch: {
    src (newSrc) {
      if(newSrc) {
        this.idx = -1
        this.showDefault = false
        this.useSrc = newSrc
      }
    }
  }
}
</script>