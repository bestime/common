<style lang="stylus" rel="stylesheet/stylus">

</style>

<template>
  <div class="flex_column home-wrapper">    
    <el-table
      :data="vueList"
      border
      style="width: 100%">
      <el-table-column
        width="150px"
        label="组件">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row.routeName)" type="text">{{scope.row.name}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="desc"
        label="描述"
        width="150">
      </el-table-column>
      <el-table-column
        prop="path"
        label="引用路径">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import treeRouterList from './tree-router-list'
export default {
  components: {
    treeRouterList
  },
  data () {
    return {
      vueList: getVueList()
    }
  },
  methods: {
    getHg,
    handleClick (name) {
      this.$router.push({ name })
    }
  }
}

function getVueList () {
  return [
    
  ]
}

function getHg () {
  return `
    <\script\>
      var a = 0
      alert(121)
    <\/script>
  `
}

</script>
