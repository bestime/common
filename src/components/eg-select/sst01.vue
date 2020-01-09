<style lang="stylus" rel="stylesheet/stylus">
.eg-sst01
  .select-vbt
    margin-right 10px
</style>

<template>
  <div class="eg-sst01">
    <vbt-select v-model="user" :options="list"/>
    <vbt-select v-model="user" :options="list"/>
  </div>
</template>

<script>
import Select from 'jcy-common/vue/Select'
export default {
  components: {
    'vbt-select': Select,
  },
  data () {
    return {
      user: 'b',
      list: [
        { key: 'a', label: '张三' },
        { key: 'b', label: '李四' },
        { key: 'c', label: '王五' },
      ]
    }
  }
}
</script>