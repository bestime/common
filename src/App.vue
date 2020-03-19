<style lang="stylus" rel="stylesheet/stylus">
*
  margin 0
  padding 0
  list-style none
.app-wrapper
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  display flex
  align-items stretch
  .router-view
    flex 1
    position relative
  .ba1we5
    margin 0
    padding 0
    background #fff
    border-right #eee solid 1px
    li
      font-size 14px
      color #666
      width 150px
      padding 10px 20px
      box-sizing border-box
      border-bottom #eee solid 1px
      cursor pointer
      &.active
        background rgba(64,158,255, 1)
        color #fff
  .rtv-box
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    overflow auto
    overflow-x hidden
</style>

<template>
  <!-- <div class="app-wrapper">
    <ul class="ba1we5">
      <li @click="goTo(item.name)" v-for="item in routerList" :key="item.name" :class="{active: isActiveRouter(item.name)}">
        {{item.name}}
      </li>
    </ul>
    <div class="router-view">
      <div class="rtv-box">
        <router-view/>
      </div>
    </div>
  </div> -->

  <router-view/>
</template>

<script>
import { routerList } from '@src/router.js'
export default {
  name: 'app',
  data () {
    return {
      routerList: routerList.filter(item => !['不存在'].some(name => item.name === name))
    }
  },
  methods: {
    goTo (name) {
      this.$router.push({ name })
    }
  }
}
</script>