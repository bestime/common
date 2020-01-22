
<style lang="stylus" rel="stylesheet/stylus">
@import "./theme.styl"
.vbt-radio-item
  font-size 14px
  color $staticTextColor
  display inline-flex
  align-items center
  cursor pointer
  user-select none
  b
    width 16px
    height 16px
    display inline-block
    background none
    border-radius 50%
    margin-right 5px
    border $staticBorderColor solid 1px
    transition 0.1s
    position relative
    &:after
      content ''
      position absolute
      top 3px
      right 3px
      bottom 3px
      left 3px
      background getActiveColor(1)
      border-radius 50%
      transform scale(0)
      transition 0.1s
      opacity 0
  &:hover
    b
      border-color getActiveColor(1)
  &.active
    color getActiveColor(1)
    b
      border-color getActiveColor(1)
      box-shadow 0 0 0 2px getActiveColor(0.3)
      &:after
        transform scale(1)
        opacity 1
</style>

<template>
  <div class="vbt-radio-item" :class="{active: isActive}" @click="toggle">
    <b></b>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vbt-radio-item',
  props: {
    id: String,
    value: {
      type: [Boolean, Number],
      default: false
    },
  },
  computed: {
    isActive () {
      if(this.id) {
        return this.id === this.gk
      } else {
        return this.value
      }
    }
  },
  data () {
    return {
      gk: '', // goup-key 
    }
  },
  beforeMount () {
    if(this.id) {
      console.log('this.$father', this.$parent)
      this.fk = this.$parent.value
    }
  },
  methods: {
    toggle () {
      if(this.id) {
        this.$parent.update(this.id)
      } else {
        this.$emit('input', !this.value)
      }
    }
  }
}
</script>