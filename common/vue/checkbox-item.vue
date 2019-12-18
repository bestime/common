<style lang="stylus" rel="stylesheet/stylus">
$staticBorderColor = #dcdfe6
$staticTextColor = #606266
$disabledColor = #cfcfcf
$activeColor = #409eff
.vbt-checkbox-item
  user-select none
  display inline-flex
  align-items center
  cursor pointer
  transition 0.15s
  .cki-cir
    border-radius 3px
    display block
    width 14px
    height 14px
    text-align center
    border $staticBorderColor solid 1px
    box-sizing border-box
    transition 0.15s
    font-size 0
    display flex
    align-items center
    justify-content center
    i
      font-size 12px
      color #fff
      transition 0.15s
      transform scale(0)
  .custom
    font-size 14px
    color $staticTextColor
    word-break keep-all
  &.has-slot
    .custom
      margin-left 5px
  &:hover
    .cki-cir
      border-color $activeColor
  &.checked
    .cki-cir
      border-color $activeColor
      background $activeColor
      i
        transform scale(1)
    .custom
      color $activeColor
    &.disabled
      .cki-cir
        i
          color $disabledColor
  &.disabled
    cursor not-allowed
    .cki-cir
      border-color $disabledColor
      background #f9f9f9
    .custom
      color $disabledColor

  
      
</style>

<template>
  <div class="vbt-checkbox-item" :class="{'has-slot': hasSlots, checked: value, disabled}" @click="toggle">
    <div class="cki-cir">
      <i class="vbt-icon">&#xe747;</i>
    </div>
    <div class="custom">
      <slot/>
    </div>
  </div>
</template>

<script>
import { findComponentUpward } from './vue-tool'
export default {
  name: 'checkbox-item-vbt',
  props: {
    value: Boolean,
    name: [String, Number],
    disabled: Boolean
  },
  computed: {
    hasSlots () {
      return !!this.$slots.default
    }
  },

  mounted () {
    // console.log(this.name, this.value)
    // 初始化父组件选中的元素
    if(this.isChild()) {
      const oFather = findComponentUpward(this, 'checkbox-group-vbt')
      if(oFather) {
        oFather.onChildLoad(this)
      }
    }
  },

  methods: {
    isChild () {
      return typeof this.name !== 'undefined'
    },

    toggle () {
      if(!this.disabled) {
        this.update(!this.value)
      }
    },

    update (bol) {
      if(this.value!==bol) {
        this.$emit('input', bol)
      }
    },

    // 通知父组件改变
    updateFather () {
      if(this.isChild()) {
        const oFather = findComponentUpward(this, 'checkbox-group-vbt')
        if(oFather) {
          oFather.update(this.name, this.value)
        }
      }
    }
  },

  watch: {
    value () {
      this.updateFather()
    }
  }
}
</script>