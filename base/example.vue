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
</style>

<template>
  <div :title="null" class="example-wrapper">
    <div class="title">{{ title }}</div>
    <div class="ex-content">
      <slot name="demo"/>
      <!-- <div class="tmk"></div> -->
      
    </div>
    <template v-if="showCode">
      <slot name="code" />
    </template>
    <div @click="showCode = !showCode" class="show-code">
      <p>{{ showCode ? '隐藏代码' : '查看代码' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example',
  props: {
    title: String
  },
  data() {
    return {
      showCode: false
    }
  }
}
</script>