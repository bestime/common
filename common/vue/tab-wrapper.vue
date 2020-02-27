<style lang="stylus" rel="stylesheet/stylus">
@import "./theme.styl"
.vbt-tab-wrapper
  // background red
  display flex
  flex-direction column
  max-height 100%
  min-height 100%
  .tab-nav-item
    font-size 14px
    color $staticTextColor
    padding 7px 10px
    border-radius 7px 7px 0 0
    position relative
    transition 0.15s
    cursor pointer
    
    &:after
      content ''
      position absolute 
      left 0
      right 0
      bottom -1px
      height 2px
      background getActiveColor(1)
      transition 0.2s
      transform scale(0)
    &:not(:nth-of-type(1))
      margin-left 10px
    &:hover
      color getActiveColor(1)
    &.active
      color getActiveColor(1)
      &:after
        transform scale(1)
    
    
  .tab-nav-wp
    display flex
    align-items stretch
    border-bottom $staticBorderColor solid 1px
    flex-shrink 0
    user-select none
  .vbt-tab-content
    
    position relative
    flex 1
    margin 0
    padding 0
    overflow auto
  .vbt-tab-main
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    overflow auto
  
  .vbt-tab-space
    display flex
    flex 1
    align-items center
    
</style>

<template>
  <div class="vbt-tab-wrapper">
    <div class="tab-nav-wp">
      <div
        class="tab-nav-item"
        :class="{'active': value===item.id}"
        v-for="item in list" :key="item.id"
        @click="goToTab(item.id)"
      >
        {{ item.label }}
      </div>
      <div class="vbt-tab-space">
        <slot name="space"/>
      </div>
    </div>
    <div class="vbt-tab-content">
       <slot/>
    </div>
    
  </div>
</template>

<script>
import { findComponentsDownward } from './vue-tool'
export default {
  name: 'tab-wrapper',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  components: {
    
  },
  data () {
    return {
      list: [], // {id, label}
    }
  },
  mounted () {

  },
  methods: {
    update (id, label, callback) {
      let isfind, item;
      for(let a=0; a<this.list.length;a++) {
        item = this.list[a]
        if(item.id===id) {
          item.label = label
          isfind = true
          break;
        }
      }
      if(!isfind) {
        this.list.push({
          id,
          label
        })
      }

      if(id===this.value) {
        callback && callback()
      }
    },

    goToTab (id) {
      const oChilds = findComponentsDownward(this, 'tab-item')
      // console.log('oChilds', oChilds)
      
      if(id!==this.value) {
        this.$emit('input', id)
      }     
      
      
      oChilds.some(cd => {
        if(cd.id===id) {
          if(id===this.value) {
            cd.onrefresh()
            return true
          }
          
        }
      })
    },
    
  }
}
</script>