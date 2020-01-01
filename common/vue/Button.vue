<style lang="stylus" rel="stylesheet/stylus">
@import "./theme.styl"
.vbt-button
  display inline-flex
  align-items center
  justify-content center
  box-sizing border-box
  user-select none
  cursor pointer
  transition 0.15s
  &.size-default
    height 32px
    padding 0 15px
    font-size 14px
    border-radius 4px
  &.size-small
    height 26px
    padding 0 7px
    font-size 12px
    border-radius 3px
  &.default
    border $staticBorderColor solid 1px
    color $staticTextColor 
    &:hover
      border-color getActiveColor(1)
      color getActiveColor(1)
    &:active
      box-shadow 0 0 0 2px getActiveColor(0.2)
  &.primary
    background getActiveColor(1)
    color #fff
    &:hover
      background getActiveColor(0.8)
    &:active
      box-shadow 0 0 0 2px getActiveColor(0.2)
  &.warning
    background getWarningColor(1)
    color #fff
    &:hover
      background getWarningColor(0.8)
    &:active
      box-shadow 0 0 0 2px getWarningColor(0.2)
</style>

<template>
  <div class="vbt-button" :class="[type, `size-${size}`].join(' ')" @click="$emit('click')">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'default'
    }
  }
}
</script>