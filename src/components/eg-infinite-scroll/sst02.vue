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

</style>

<template>
  <div class="eg-miety">
    <infinite-scroll direction="horizontal" :count="count" width="200px">
      <ul>
        <li v-for="name in list" :key="name">{{ name }}</li>
      </ul>
    </infinite-scroll>
  </div>
</template>

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
</script>