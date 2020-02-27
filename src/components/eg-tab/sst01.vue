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
  <div class="eg-nrewe">
    <div class="xoismkle">
      <tab-wrapper v-model="tabKey">
        <template v-slot:space>
          <div>加入黑名单的用户将无法再次加为好友或群，系统会自动拒绝或提出所有管控群</div>
        </template>
        <tab-item id="a" label="第一项" @on-show="firstShow" @on-refresh="firstRe">
          <div v-for="num in 100" :key="num">{{num}}</div>
        </tab-item>
        <tab-item id="b" label="第二项" @on-show="twoShow" @on-refresh="towRe">
          222222222222222222
        </tab-item>
    </tab-wrapper>
    </div>
  </div>
</template>

<script>
import TabWrapper from 'jcy-common/vue/tab-wrapper'
import TabItem from 'jcy-common/vue/tab-item'
export default {
  components: {
    'tab-wrapper': TabWrapper,
    'tab-item': TabItem
  },
  data () {
    return {
      tabKey: 'a'
    }
  },
  methods: {
    firstShow () {
      console.log('第一个显示了')
    },

    towRe () {
      console.log('第二个刷新')
    },
    twoShow () {
      console.log('第二个显示了')
    },

    firstRe () {
      console.log('第一个刷新')
    },
  }
}
</script>