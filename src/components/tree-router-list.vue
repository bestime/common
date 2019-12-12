<style lang="stylus" rel="stylesheet/stylus">
.router-list-wrapper
  background #fff
  padding 10px 20px
  border-radius 7px
  &.is-child
    margin-left 20px
    padding 5px 0
  .routr-name
    background #f5f5f5
    cursor pointer
    padding 3px 7px
    color #666
    cursor pointer
    transition 0.2s
    &:hover
      background #ddd
  .sw5
    color #c3c3c3
    font-weight bold
    padding 0 10px
  .req8
    color #2973a9
  
</style>

<template>
  <div
    class="router-list-wrapper"
    :class="{
      'is-child': isChild
    }"
  >
    <div v-for="(item, index) in list" :key="index">
      <div class="routr-name" @click="goTo(item.name)">
        <span>{{ item.name }}</span>
        <span class="sw5">=></span>
        <span class="req8">{{ item.path }}</span>
      </div>
      <tree-router-list
        :list="item.children"
        :isChild="true"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'tree-router-list',
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    },
    isChild: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goTo (name) {
      this.$router.push({ name })
    }
  }
}
</script>