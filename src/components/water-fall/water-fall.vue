<style lang="stylus" rel="stylesheet/stylus">
.eg-water-fall-wrapper 
  .apititle
    font-size 14px
    font-weight bold
    color #595959
    padding 0
    margin 20px 0 10px 0
</style>

<template>
  <div class="eg-water-fall-wrapper">
    <example title="瀑布流">
      <eg01 slot="demo"/>
      <code-view slot="code" type="html" :content="demoCode"/>
    </example>
    
    <h2 class="apititle">waterfall-wrapper 参数</h2>
    <el-table
      :data="apiList"
      border>
      <el-table-column
        prop="key"
        width="150px"
        label="参数">
      </el-table-column>
      <el-table-column
        prop="type"
        width="80px"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="描述">
      </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
import eg01 from './eg-01'
export default {
  components: {
    eg01
  },
  data () {
    return {
      apiList: getApiList(),
      demoCode: ns.trim(getDemoCode())
    }
  }
}



function getApiList () {
  return [
    {
      key: 'spaceVertical',
      type: 'Number',
      desc: '垂直间距'
    },
    {
      key: 'spaceHorizontal',
      type: 'Number',
      desc: '水平间距'
    },
  ]
}


function getDemoCode () {
  return `
<style lang="stylus" rel="stylesheet/stylus">
.wat-pier
  width 100px
  background #eee
  color #666
  .cid
    font-size 16px
    color #999
  .cheight
    background #348ddf
    padding 3px 10px
    font-size 12px
    color #fff
    border-radius 4px
    margin-top 2px
  .apititle
    font-size 14px
    font-weight bold
    color #595959
    padding 0
    margin 20px 0 10px 0
<\/style>

<template>
  <waterfall-wrapper :spaceVertical="5" :spaceHorizontal="5">
    <waterfall-item v-for="item in list" :key="item.id">
      <div class="flex_column_center_center wat-pier" :style="{height: ${'`${item.height}px`'}}">
        <span class="cid">{{ item.id }}<\/span>
        <span class="cheight">高{{ item.height }}<\/span>
      <\/div>
    <\/waterfall-item>
  <\/waterfall-wrapper>
<\/template>

<script>
import WaterFall from '$vue/waterfall'
import WaterFallItem from '$vue/waterfall-item'
import getRandom from '$js/getRandom'
export default {
  components: {
    'waterfall-wrapper': WaterFall,
    'waterfall-item': WaterFallItem
  },
  data () {
    return {
      list: this.getExampleData(100),
    }
  },
  methods: {
    getExampleData (num) {
      let res = []
      for(let a=0; a<num; a++) {
        res.push({
          id: ${'`${a+1}`'},
          height: getRandom(80, 300)
        })
      }
      return res
    }
  }
}
<\/script>
  `
}
</script>