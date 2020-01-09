<style lang="stylus" rel="stylesheet/stylus">
</style>
<template>
  <div>
    <example title="Menu">
      <sst01 slot="demo"/>
      <code-view slot="code" :content="getButons()"/>
    </example>
  </div>
</template>

<script>
import sst01 from './sst01'
export default {
  components: {
    sst01
  },

  methods: {
    getButons
  }
}


function getButons () {
  return `
<style lang="stylus" rel="stylesheet/stylus">
.eg-ssb4y5w
  .ban
    padding 20px
    display flex
    align-items center
    justify-content center
    color #999
    word-break keep-all
<\/style>

<template>
  <div class="eg-ssb4y5w">
    <vbt-meun title="自定义标题">
      <template v-slot:button>
        <vbt-button type="warning">点击展开<\/vbt-button>
      <\/template>
      <template v-slot:menu>
        <div class="ban">这是展开内容<\/div>
      <\/template>
    <\/vbt-meun>
  <\/div>
<\/template>

<script>
import Menu from 'jcy-common/vue/Menu'
import Button from 'jcy-common/vue/Button'
export default {
  components: {
    'vbt-meun': Menu,
    'vbt-button': Button
  }
}
<\/script>
  `
}
</script>