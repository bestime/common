<style lang="stylus" rel="stylesheet/stylus">
.eg-nrewe
  .ban
    padding 20px
    display flex
    align-items center
    justify-content center
    color #999
    word-break keep-all
</style>

<template>
  <tag-manage
    :list="list"
  />
</template>

<script>
import TagManage from 'jcy-common/vue/TagManage'
export default {
  components: {
    'tag-manage': TagManage
  },
  data () {
    return {
      list: [
        { key: 'a', label: '张三' }
      ]
    }
  }
}
</script>