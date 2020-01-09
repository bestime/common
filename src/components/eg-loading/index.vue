<style lang="stylus" rel="stylesheet/stylus">
</style>
<template>
  <div>
    <example title="Loading合集">
      <egls slot="demo"/>
      <code-view slot="code" :content="getButons()"/>
    </example>
    <example title="Loading盒子">
      <containerdes slot="demo"/>
      <code-view slot="code" :content="getContainer()"/>
    </example>
  </div>
</template>

<script>
import egls from './egls'
import containerdes from './container'
export default {
  components: {
    egls,
    containerdes
  },

  methods: {
    getButons,
    getContainer
  }
}



function getContainer () {
  return `
<style lang="stylus" rel="stylesheet/stylus">
.eg-ld-containter
  background #eee
  height 100px
  .vbt-loading-wrapper
    margin 40px 0
<\/style>
<template>
  <vbt-loading-container v-model="loading" class="eg-ld-containter" type="circular" label="加载中...">    
    <vbt-vutton @click="showLoading">显示加载动画<\/vbt-vutton>
  <\/vbt-loading-container>
<\/template>

<script>
import LoadingContainer from 'jcy-common/vue/Loading/container.vue'
import Button from 'jcy-common/vue/Button'
export default {
  components: {
    'vbt-loading-container': LoadingContainer,
    'vbt-vutton': Button
  },

  data () {
    return {
      loading: false
    }
  },

  methods: {
    showLoading () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }  
}
<\/script>
  `
}


function getButons () {
  return `
<style lang="stylus" rel="stylesheet/stylus">
.eg-loading-wrapper
  .vbt-loading-wrapper
    margin 0 10px
<\/style>
<template>
  <div class="eg-loading-wrapper">
    <Loading :size="20"/>
    <Loading :size="40" color="green"/>
    <Loading :size="20" color="red" label="加载中..."/>
    <Loading :size="20" color="green" type="circular" label="提交中..."/>
    <Loading :size="40" color="red" type="circular"/>
  <\/div>
<\/template>

<script>
import Loading from 'jcy-common/vue/Loading/index.vue'
export default {
  components: {
    Loading
  }  
}
<\/script>
  `
}
</script>