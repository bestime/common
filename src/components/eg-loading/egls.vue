<style lang="stylus" rel="stylesheet/stylus">
.eg-loading-wrapper
  .vbt-loading-wrapper
    margin 0 10px
</style>
<template>
  <div class="eg-loading-wrapper">
    <Loading :size="20"/>
    <Loading :size="30" color="green"/>
    <Loading :size="20" color="red" label="加载中..."/>
    <Loading :size="20" color="green" type="circular" label="提交中..."/>
    <Loading :size="40" color="red" type="circular"/>
  </div>
</template>

<script>
import Loading from 'jcy-common/vue/Loading/index.vue'
export default {
  components: {
    Loading
  }  
}
</script>