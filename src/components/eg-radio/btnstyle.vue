<style lang="stylus" rel="stylesheet/stylus">
.button-wrapper
  .vbt-button
    margin 2px
    text-transform capitalize
  .safte
    font-size 14px
    margin 20px 0 5px 0
    color #666
</style>
<template>
  <div class="button-wrapper">
    <div class="safte">单独使用</div>
    <vbt-radio-item type="button" v-model="zhangsan">张三</vbt-radio-item>

    <div class="safte">分组使用</div>
    <vbt-radio-group v-model="gpv">
      <vbt-radio-item type="button" v-for="item in list" :key="item.key" :id="item.key">
        {{ item.label }}
      </vbt-radio-item>
    </vbt-radio-group>
  </div>
</template>

<script>
import RadioGroup from 'jcy-common/vue/RadioGroup'
import RadioItem from 'jcy-common/vue/RadioItem'
export default {
  components: {
    'vbt-radio-group': RadioGroup,
    'vbt-radio-item': RadioItem,
  },
  data () {
    return {
      zhangsan: false,
      gpv: 'b',
      list: [
        { key: 'a', label: '张三' },
        { key: 'b', label: '李四' },
        { key: 'c', label: '王五' },
      ]
    }
  }
}
</script>