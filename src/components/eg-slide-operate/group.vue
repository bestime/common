<style lang="stylus" rel="stylesheet/stylus">
.so-wrapper
  .slide-operate-back
    background green
  .person-title
    height 60px
    display flex
    align-items center
    font-size 14px
    padding 0 20px
    position relative
    background #f9f9f9
  .person-btn
    font-size 12px
    display flex
    align-items center
    justify-content center
    padding 0 20px
  .person-del
    background red
    color #fff    
  .person-edit
    background green
    color #fff
</style>
<template>
  <slide-operate-group class="so-wrapper">
    <slide-operate-item v-for="(item, index) in list" :key="item.key">
      <template v-slot:content>
        <div class="person-title">{{ item.label }}</div>
      </template>
      <template v-slot:box1="{ close }">
        <div class="person-btn person-del" @click="toDelete(index, close)">删除{{ item.label }}</div>
      </template>
      <template v-slot:box2>
        <div class="person-btn person-edit">编辑{{ item.label }}</div>
      </template>
    </slide-operate-item>
  </slide-operate-group>
</template>

<script>
import SlideOperateGroup from 'jcy-common/vue/SlideOperateGroup'
import SlideOperateItem from 'jcy-common/vue/SlideOperateItem'
export default {
  components: {
    'slide-operate-item': SlideOperateItem,
    'slide-operate-group': SlideOperateGroup
  },

  data () {
    return {
      list: [
        {
          key: '1',
          label: '张三',
        },
        {
          key: '2',
          label: '百思探',
        },
        {
          key: '3',
          label: '王五',
        },
        {
          key: '4',
          label: '赵六',
        },
      ]
    }
  },

  methods: {
    toDelete (index, close) {
      close(() => {
        this.list.splice(index, 1)
      })
    }
  }
}
</script>