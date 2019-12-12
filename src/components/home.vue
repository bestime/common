<style lang="stylus" rel="stylesheet/stylus">

</style>

<template>
  <div class="flex_column home-wrapper">
    <treeRouterList :list="routerList"/>
  </div>
</template>

<script>
import { routerList } from '@src/router.js'
import treeRouterList from './tree-router-list'
export default {
  components: {
    treeRouterList
  },
  data () {
    return {
      routerList
    }
  },
  methods: {
  }
}
</script>
