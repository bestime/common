<style lang="stylus" rel="stylesheet/stylus">
$borderRadius = 5px
.example-wrapper
  margin 40px 20px
  border #eee solid 1px
  border-radius $borderRadius
  transition 0.2s
  &:hover
    box-shadow 3px 0 5px rgba(0,0,0,0.1)
  .title
    border-radius $borderRadius $borderRadius 0 0
    padding 10px 20px
    background #f9f9f9
    font-size 14px
    border-bottom #eee solid 1px
    color #666
    font-weight bold
  .ex-content
    padding 10px 20px
  .tmk
    margin-bottom 20px
  .show-code
    font-size 14px
    background #fff
    height 40px
    border-top #eee solid 1px
    cursor pointer
    display flex
    align-items center
    justify-content center
    color #999
    transition 0.15s
    border-radius 0 0 $borderRadius $borderRadius
    p
      transition 0.15s
      padding 0 20px 0 5px
      margin 0
    &:hover
      color rgba(64, 158, 255, 1)
      background #f9f9f9
  .code-desc
    padding 10px 20px
    li
      font-size 14px
      color #636363
      margin 5px 0
      list-style inside
      b
        background #fff5f5
        color #fa795e
        font-weight normal
        font-size 12px
        display inline-block
        padding 2px 7px
        border-radius 3px
</style>

<template>
  <div :title="null" class="example-wrapper">
    <div class="title">{{ title }}</div>
    <div class="ex-content" v-if="$slots.demo">
      <slot name="demo"/>
    </div>
    <div class="ex-desc" v-if="$slots.desc">
      <slot name="desc"/>
    </div>
    <template v-if="$slots.code && showCode">
      <slot name="code" />
    </template>
    <div v-if="$slots.code" @click="showCode = !showCode" class="show-code">
      <p>{{ showCode ? '隐藏代码' : '查看代码' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example',
  props: {
    title: String,
    openCode: Boolean
  },
  data() {
    return {
      showCode: false
    }
  },
  beforeMount () {
    this.showCode = this.hasProp(this.openCode)
  }
}
</script>