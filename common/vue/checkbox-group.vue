<style lang="stylus" rel="stylesheet/stylus">
$staticBorderColor = #f9f9f9
.vbt-checkbox-group
  .children
    display flex
    align-items center
    .vbt-checkbox-item
      margin 0 20px 10px 0
  &.need-all
    .children
      border-top $staticBorderColor solid 1px
      margin-top 10px
      padding-top 10px
</style>

<template>
  <div class="vbt-checkbox-group" :class="{'need-all': all}">
    <checkbox-item v-if="all" :value="isAll" @input="checkAll">全选</checkbox-item>
    <div class="children">
      <slot/>
    </div>
  </div>
</template>

<script>
import { findComponentsDownward } from './vue-tool'
import CheckBoxItem from './checkbox-item'
export default {
  name: 'checkbox-group-vbt',
  components: {
    'checkbox-item': CheckBoxItem
  },
  props: {
    value: Array,
    all: Boolean
  },
  data () {
    return {
      isAll: false
    }
  },

  methods: {
    update (id, bol) {
      const list = this.value
      let isFind = false
      for(let a = 0; a < list.length; a++) {
        if(list[a]===id) {
          isFind = true
          if(!bol) {
            list.splice(a, 1)
          }
          break;
        }
      }
      if(!isFind && bol) {
        list.push(id)
      }
    },

    onChildLoad (oItem) {
      let name, isFind;
      for(let a=0; a < this.value.length; a++) {
        name = this.value[a]
        if(name === oItem.name) {
          isFind = true
          if(oItem.disabled) {
            if(!oItem.value) {
              this.value.splice(a, 1)
            }
          } else {
            oItem.update(true)
          }
          break;
        }
      }
      if(!isFind) {
        if(oItem.disabled && oItem.value) {
          this.value.push(oItem.name)
        } else {
          oItem.update(false)
        }
      }


      
    },

    refreshChild () {
      const vChilds = findComponentsDownward(this, 'checkbox-item-vbt')
      let isAll = true
      let toVal;
      vChilds.forEach(item => {
        // 有 name表示为 group 中的选项
        if(typeof item.name !== 'undefined') {
          toVal = this.value.some(id => id === item.name)
          if(isAll !== false && !toVal) {
            isAll = false
          }
          if(!item.disabled) {
            item.update(toVal)
          }
        }        
      })
      this.isAll = isAll
    },

    checkAll () {
      const toVal = !this.isAll
      const list = []
      const vChilds = findComponentsDownward(this, 'checkbox-item-vbt')
      vChilds.forEach(item => {
        // 有 name表示为 group 中的选项
        if(typeof item.name !== 'undefined') {
          console.log('list', item.name, item.value)
          if(item.disabled) {
            if(item.value) {
              list.push(item.name)
            }
          } else if(toVal) {
            list.push(item.name)
          }
        }
      })
      this.$emit('input', list)
    }
  },

  watch: {
    value () {
      this.refreshChild()
    }
  }
}
</script>