<style lang="stylus" rel="stylesheet/stylus">
getCurrentColor(type, alpha)
  if type == 'primary'
    getActiveColor(alpha)
  else if type == 'warning'
    getWarningColor(alpha)
  else if type == 'error'
    getErrorColor(alpha)
  else if type == 'success'
    getSuccessColor(alpha)
  else if type == 'info'
    getInfoColor(alpha)
  else 
    getInfoColor(alpha)

getStyle(type)
  if type == 'default'
    border-color getInfoColor(0.3)
    color #444
    &:not(.disabled)
      &:hover
        border-color getActiveColor(1)
        color getActiveColor(1)
        background getActiveColor(0.1)
      &:active
        box-shadow 0 0 0 2px getActiveColor(0.2)
      &.plan
        &:hover
          background none
  else
    &:not(.plan)
      background getCurrentColor(type, 1)
      color #fff
      &:not(.disabled)
        &:hover
          background getCurrentColor(type, 0.8)
        &:active
          box-shadow 0 0 0 2px getCurrentColor(type, 0.2)
    &.plan
      background getCurrentColor(type, 0.1)
      border-color getCurrentColor(type, 0.2)
      color getCurrentColor(type, 1)
      &:not(.disabled)
        &:hover
          background getCurrentColor(type, 1)
          border-color getCurrentColor(type, 1)
          color #fff
        &:active
          background getCurrentColor(type, 0.7)
@import "./theme.styl"
.vbt-button
  display inline-flex
  align-items center
  justify-content center
  box-sizing border-box
  user-select none
  cursor pointer
  transition 0.15s
  border transparent solid 1px
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
  &.primary
    getStyle('primary')
  &.warning
    getStyle('warning')
  &.error
    getStyle('error')
  &.success
    getStyle('success')
  &.info
    getStyle('info')
  &.default
    getStyle('default')
  &.disabled
    opacity 0.3
    cursor not-allowed
</style>

<template>
  <div
    class="vbt-button"
    :class="[
      type,
      `size-${size}`,
      hasProp(plain) ? 'plan' : '',
      hasProp(disabled) ? 'disabled' : ''
    ].join(' ')"
    @click="!hasProp(disabled) && $emit('click')"
    
  >
    <slot/>
  </div>
</template>

<script>
import { hasPros } from './vue-tool'
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'default'
    },
    plain: null,
    disabled: null
  }
}
</script>