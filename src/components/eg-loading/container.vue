<style lang="stylus" rel="stylesheet/stylus">
.eg-ld-containter
  background #eee
  height 100px
  .vbt-loading-wrapper
    margin 40px 0
</style>
<template>
  <vbt-loading-container v-model="loading" class="eg-ld-containter" type="circular" label="加载中...">    
    <vbt-vutton @click="showLoading">显示加载动画</vbt-vutton>
  </vbt-loading-container>
</template>

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
</script>