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
  background getCurrentColor(type, 0.1)
  color getCurrentColor(type, 1)
  border getCurrentColor(type, 0.2) solid 1px
  border-radius 4px
  i
    background getCurrentColor(type, 1)
    color #fff
    transition 0.15s
    &:hover
      background getCurrentColor(type, 0.7)
    &:active
      background getCurrentColor(type, 1)
      box-shadow 0 0 0 2px getCurrentColor(type, 0.3)

.vbt-tag
  height 32px
  padding 0 10px
  display inline-flex
  vertical-align middle
  box-sizing border-box
  align-items center
  justify-content center
  flex-shrink 0
  word-break keep-all
  margin 2px
  font-size 14px
  &.default, &.info
    getStyle('info')
  &.warning
    getStyle('warning')
  &.error
    getStyle('error')
  &.success
    getStyle('success')
  &.primary
    getStyle('primary')
  i
    font-size 12px
    display inline-block
    width 18px
    height 18px
    line-height 18px
    text-align center
    cursor pointer
    border-radius 50%
    margin 0 0 0 5px
    padding 0
    flex-shrink 0

</style>

<template>
  <span class="vbt-tag" :class="type">
    <slot/>
    <i class="vbt-icon" v-if="hasProp(close)" @click="click">&#xe603;</i>
  </span>
</template>

<script>
import { hasProp } from './vue-tool'
export default {
  props: {
    id: [String, Number],
    type: {
      type: String,
      default: 'default', // warning, error, success, info, primary
    },
    close: Boolean
  },
  methods: {
    hasProp,
    click () {
      this.$emit('on-delete', this.id)
    }
  }
}
</script>
