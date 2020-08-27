<style lang="stylus" rel="stylesheet/stylus">
.eg-bd5r
  ul
    background #333
    margin 0
    padding 0 10px
    overflow hidden
  li
    background #f9f9f9
    color #666
    margin-top 10px
    padding 10px 0
    text-align center
</style>

<template>
  <div class="eg-bd5r">
    <infinite-scroll direction="vertical" :count="count" height="200px">
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