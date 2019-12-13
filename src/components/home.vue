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
import { routerList } from '@src/router.js'
import treeRouterList from './tree-router-list'
export default {
  components: {
    treeRouterList
  },
  data () {
    return {
      routerList,
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
    {
      name: 'waterfall',
      path: `import Waterfall from 'jcy-common/vue/waterfall'`,
      routeName: '瀑布流',
      desc: '瀑布流容器'
    },
    {
      name: 'waterfall-item',
      path: `import WaterfallItem from 'jcy-common/vue/waterfall-item'`,
      routeName: '瀑布流',
      desc: '瀑布流子项'
    },
    {
      name: 'Switch',
      path: `import Switch from 'jcy-common/vue/Switch'`,
      routeName: '开关',
      desc: '开关'
    },
    {
      name: 'Image',
      path: `import Image from 'jcy-common/vue/Image'`,
      routeName: '图片',
      desc: '处理错误图片'
    },
    {
      name: 'Drawer',
      path: `Drawer Drawer from 'jcy-common/vue/Drawer'`,
      routeName: '抽屉',
      desc: '可作弹出层，上，右，下，左，中'
    },
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
