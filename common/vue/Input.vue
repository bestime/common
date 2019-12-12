<style lang="stylus" rel="stylesheet/stylus">
@import "./theme.styl"
.input-left, .input-right
  display flex
  align-items center
  justify-content center
  font-size 12px
  color $staticTextColor
  background #f9f9f9 
  position relative
  z-index: 20 
  padding 0 10px
.input-right
  border $staticBorderColor solid 1px
  border-left none
.input-left
  border $staticBorderColor solid 1px
  border-right none  
.input-vbt
  flex 1
  display:flex
  background:#fff
  position:relative  
  transition:0.2s  
  box-sizing:border-box
  border-radius:$borderRadius
  position:relative
  box-sizing border-box
  border $staticBorderColor solid 1px
  align-items stretch
  ::-webkit-input-placeholder
    color $staticDisabledColor
  &.focus, &:hover
    border-color getActiveColor(1)    
    .it-del
      display flex
      border-radius: 0 $borderRadius $borderRadius 0
  &.focus
    box-shadow 0 0 0 2px getActiveColor(0.2)
    z-index: 26
    &.warning
      box-shadow 0 0 0 2px getWarningColor(0.2)
  &.warning    
    border-color getWarningColor(1)
    color getWarningColor(1)  
  input
    border none
    transition:0.2s
    flex: 1
    resize:none
    outline:none
    background:none
    display:block
    width:100%
    min-height:100%
    margin:0    
    box-sizing:border-box
    color $staticTextColor
    padding 0 5px
  .iptbtn
    border-radius:0 $borderRadius $borderRadius 0
  .input-msg
    position absolute
    left 0
    right 0
    top 100%
    font-size 12px
    color $staticTextColor
    text-align:justify
    line-height 1.6
    background #fff
    box-shadow 0 0 5px rgba(0,0,0,0.2)
    padding 5px 10px
    margin-top 5px
    border-radius $borderRadius
    z-index: 23
    max-height 200px
    overflow-y auto
    overflow-x hidden  
    transform-origin top  
.input-content
  display flex
  align-items center
  position: relative
  flex 1
  .it-del
    position absolute
    right 0
    top 0
    bottom 0
    align-items center
    justify-content center
    padding 0 5px
    cursor pointer
    display none
    height 100%
    background rgba(255,255,255,0.8)
    &:hover      
      svg
        fill #666 !important
.input-r-btn
  background getActiveColor(1)
  color #fff
  display flex
  align-items center
  justify-content center
  font-size 12px
  padding 0 10px
  cursor pointer
  transition 0.1s
  user-select none
  border-radius 0 $borderRadius $borderRadius 0
  &:active
    background getActiveColor(0.7)
.input-box-vbt
  box-sizing border-box
  height:32px
  vertical-align middle
  display flex
  align-items stretch
  justify-content center
  box-sizing border-box
  .button-vbt
    padding 0
    height auto
  &.disabled    
    .input-vbt
      background #f9f9f9
      &:hover
        border-color $staticBorderColor
    input 
      cursor not-allowed
    .it-del
      display none !important
  &.hide-border-right
    .input-right
      border-right none
      


</style>

<template>
  <div
    class="input-box-vbt"
    :class="[{
      'disabled': disabled,
      'hide-border-right': typeof hideRightBorder !== 'undefined',
    }]"
  >
    <div class="input-left" v-if="$slots.left"><slot name="left"/></div>
    <div class="input-vbt" :class="[!showType ? '' : msgType, {'focus': isFocus, 'no-right-bd': $slots.right}]">
      <div class="input-content">
        <input
          ref="input"
          :value="value"
          spellcheck="false"      
          @blur="onBlur"
          @focus="onFocus"
          :placeholder="placeholder"
          @keyup.enter="onEnter"
          @keyup="updateValue($event)"
          :disabled="disabled"
          :type="type"
        />    
      </div>
      <transition name="top_hide">
        <div v-if="showMsg" class="input-msg">{{ msg }}</div>
      </transition>      
    </div>
    <div class="input-right" v-if="$slots.right"><slot name="right"/></div> 
  </div>
</template>

<script>
import throttle from '../js/split/throttle'
import getType from '../js/split/getType'
/**
 * @callback on-enter 
 * @callback on-check 
 */
export default {
  name: 'input-vbt', 
  props: {
    type: String,

    value: {
      type: [String, Number],
      default: ''
    },

    placeholder: '',
    
    disabled: null,
    
    hideRightBorder: undefined
  },
  data () {
    return {
      isFocus: false,
      msg: 'abc',
      msgType: '',
      showMsg: false
    }
  },
  async mounted() {
    await this.$nextTick()
    this.updateValue()
  },
  computed: {
    showType () {
      return this.value!=='' && this.msg !==''
    },
  },
  methods: {
    setFocus (boolean) {
      if(boolean) {
        this.$refs.input.focus()
      } else {
        this.$refs.input.blur()
      }
    },

    onFocus () {
      this.isFocus = true
    },

    onBlur () {
      this.isFocus = false
      this.updateValue()
    },

    getValue () {
      let val = ''
      try { val = this.$refs.input.value } catch (e) { }
      return  val
    },

    setValue (val) {
      try { this.$refs.input.value = val } catch (e) {}
    },

    onEnter () {
      this.$emit('on-enter', this.getValue())
    },

    updateValue (ev) {

      // 防止回车和按键冲突
      if(getType(ev) === 'KeyboardEvent') {
        if(ev.keyCode === 13) return;
      }
      
      let oldVal = this.getValue()
      if(this.$listeners['on-check']) {
        if(!this.LPF) {
          // 节流
          this.LPF = throttle({
            handle: () => {
              oldVal = this.getValue()
              this.$emit('on-check', oldVal, (newVal) => {
                newVal = newVal == null ? '' : String(newVal)
                this.setValue(newVal)
                this.$emit('input', newVal)
              })    
            },
            delay: 300,
            isLastWork: true,
            isFirstWork: false
          })  
        }
        this.LPF()
      } else {
        this.$emit('input', oldVal)
      }
    }
  }
}
</script>