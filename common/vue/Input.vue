<style lang="stylus" rel="stylesheet/stylus">
@import "./theme.styl"
.vbt-input
  flex 1
  flex-shrink 0
  padding 0
  margin 0
  border $staticBorderColor solid 1px
  display flex
  flex-direction column
  transition 0.2s
  position relative
  border-radius 4px
  box-sizing border-box
  overflow hidden
  &.middle
    font-size 14px
    min-height 40px
  &.small
    font-size 12px
    min-height 26px
    &:not(.rows) .input
      padding 0 10px
  &.big
    font-size 16px
    min-height 48px
      
  .tea-box
    display flex
    align-items center
    flex 1
  .input
    font-size unset
    padding 0
    margin 0
    border none
    display block
    flex 1
    resize none
    outline none
    padding 10px
    &::placeholder
      color $staticDisabledColor
  &:hover
    border-color getActiveColor(1)
  &.active
    border-color getActiveColor(1)
    box-shadow 0 0 0 2px getActiveColor(0.2)
  .limt
    color #999
  .tea-bar
    display flex
    align-items center
    justify-content space-between
    padding 5px 10px
    background #f2f2f2
    border-top $staticBorderColor solid 1px
  .tez-clear
    color #999999
    user-select none
    cursor pointer
    &:hover
      color getActiveColor(1)
  
  
</style>

<template>
  <div
    class="vbt-input"
    :class="{
      'active': active, 
      'middle': size=='middle',
      'small': size=='small',
      'big': size=='big',
      'rows': rows > 1
    }"
  >
    <!-- <h1>值:{{value}}</h1> -->
    <div class="tea-box">
      <textarea
        v-if="rows>1"
        class="input"
        :rows="rows"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
        @keyup.enter="onEnter"
        ref="text"
        :value="value"
        :placeholder="placeholder"
      />
      <input
        v-else
        :type="type"
        class="input"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
        @keyup.enter="onEnter"
        ref="text"
        :value="value"
        :placeholder="placeholder"
      />
    </div>
    <div v-if="showBar" class="tea-bar">
      <span class="tez-clear" @click="toClear">清空</span>
      <div v-if="limit" class="limt">{{value.length}}/{{limit}}</div>
    </div>
  </div>
</template>

<script>
import getType from '../js/split/getType'
export default {
  // 是否显示工具栏
  props: {
    type: {
      type: String,
      default: 'text'
    },
    showBar: { 
      type: Boolean,
      default: false
    },
    // 尺寸 middle,big,small
    size: {
      type: String,
      default: 'middle',
    },
    value: String,
    placeholder: String,
    rows: {
      type:[Number, String],
      default: 3
    },
    limit: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    onEnter () {
      this.$emit('on-enter')
    },
    setFocus (bol) {
      if(bol) {
        this.$refs.text.focus()
      } else {
        this.$refs.text.blur()
      }
    },
    getValue () {
      return this.$refs.text.value
    },
    onFocus () {
      this.active = true
      this.$emit('focus')
    },

    onBlur () {
      this.active = false
      this.$emit('blur')
    },

    onInput (e) {
      let type = getType(e)
      let toVal = 'InputEvent' === type || type === 'Event' ? this.getValue() : this.value
      
      if(this.limit) {
        toVal = toVal.substr(0, this.limit)
      }
      if(this.$listeners['on-change']) {
        this.$emit('on-change', toVal, newVal => {
          this.commit(newVal)
        })
      } else {
        this.commit(toVal)        
      }
    },

    toClear () {
      this.$emit('input', '')
    },

    commit (toVal) {
      this.$emit('input', toVal)
      if(this.getValue()!=toVal) {
        this.$refs.text.value = toVal        
      }
    }
  },
  watch: {
    value () {
      this.onInput()
    }
  }
}
</script>