<style lang="stylus" rel="stylesheet/stylus">
@import "./theme.styl"
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
          background getCurrentColor(type, 0.6)
        &:active
          background getCurrentColor(type, 1)
          box-shadow 0 0 0 2px getCurrentColor(type, 0.3)
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
.vbt-button
  display inline-flex
  align-items center
  justify-content center
  box-sizing border-box
  user-select none
  vertical-align middle
  cursor pointer
  transition 0.15s
  border transparent solid 1px
  margin 0
  outline none
  word-break keep-all
  flex-shrink 0
  &.size-default
    height 32px
    padding 0 15px
    font-size 14px
    border-radius 4px
    &.round
      border-radius 16px
  &.size-small
    height 26px
    padding 0 7px
    font-size 12px
    border-radius 3px
    &.round
      border-radius 13px
  &.size-middle
    height 40px
    font-size 14px
    padding 0 18px
    border-radius 3px
    &.round
      border-radius 20px
  &.size-big
    height 48px
    font-size 16px
    padding 0 40px
    border-radius 3px
    &.round
      border-radius 24px
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
  <button
    class="vbt-button"
    :class="fomatClassName([
      type,
      `size-${size}`,
      hasProp(plain) ? 'plan' : '',
      hasProp(disabled) ? 'disabled' : '',
      hasProp(round) ? 'round' : ''
    ])"
    @click="!hasProp(disabled) && $emit('click')"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
  >
    <slot/>
  </button>
</template>

<script>
import { fomatClassName, hasProp } from './vue-tool'
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
    disabled: null,
    round: null
  },
  methods: {
    fomatClassName,
    hasProp
  }
}
</script>