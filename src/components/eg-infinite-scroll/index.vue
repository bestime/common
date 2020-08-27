<style lang="stylus" rel="stylesheet/stylus">
</style>
<template>
  <div>
    <example title="无限滚动-垂直">
      <sst01 slot="demo"/>
      <code-view slot="code" :content="getVertidalCode()"/>
    </example>
    <example title="无限滚动-水平">
      <sst02 slot="demo"/>
      <code-view slot="code" :content="getHorizaontalCode()"/>
    </example>
  </div>
</template>

<script>
import sst01 from './sst01'
import sst02 from './sst02'
export default {
  components: {
    sst01,
    sst02
  },

  methods: {
    getVertidalCode,
    getHorizaontalCode
  }
}


function getVertidalCode () {
  return `
<style lang="stylus" rel="stylesheet/stylus">
.eg-bd5r
  ul
    background #333
    margin 0
    padding 5px 10px
    overflow hidden
  li
    background #f9f9f9
    color #666
    margin 5px 0
    padding 10px 0
    text-align center
<\/style>

<template>
  <div class="eg-bd5r">
    <infinite-scroll direction="vertical" :count="count" height="200px">
      <ul>
        <li v-for="name in list" :key="name">{{ name }}<\/li>
      <\/ul>
    <\/infinite-scroll>
  <\/div>
<\/template>

<script>
import InfiniteScroll from 'jcy-common/vue/infinite-scroll'
export default {
  components: {
    'infinite-scroll': InfiniteScroll,
  },
  data () {
    return {
      count: 0,
      list: [
        '张三',
        '李四',
        '王五',
        '赵六',
        '李以恶'
      ]
    }
  }
}
<\/script>
  `
}
function getHorizaontalCode () {
  return `
<style lang="stylus" rel="stylesheet/stylus">
.eg-miety
  ul
    background #333
    margin 0
    padding 5px 0
    word-break keep-all
    display flex
    flex-wrap no-wrap
  li
    background #f9f9f9
    color #666
    margin 0 5px
    text-align center
    width 50px
    height 50px
    line-height 50px
    display inline-block

<\/style>

<template>
  <div class="eg-miety">
    <infinite-scroll direction="horizontal" :count="count" width="200px">
      <ul>
        <li v-for="name in list" :key="name">{{ name }}<\/li>
      <\/ul>
    <\/infinite-scroll>
  <\/div>
<\/template>

<script>
import InfiniteScroll from 'jcy-common/vue/infinite-scroll'
export default {
  components: {
    'infinite-scroll': InfiniteScroll,
  },
  data () {
    return {
      count: 0,
      list: [
        '张三',
        '李四',
        '王五',
        '赵六',
        '李以恶'
      ]
    }
  }
}
<\/script>
  `
}
</script>