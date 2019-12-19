<style lang="stylus" rel="stylesheet/stylus">
.eg-checkbox
  .tit
    font-size 16px
    color #444
</style>
<template>
  <div class="eg-checkbox">
    <example title="单个">
      <single slot="demo"/>
      <code-view slot="code" :content="codeSingle"/>
    </example>
    <example title="多个group">
      <group slot="demo"/>
      <code-view slot="code" :content="codeGroup"/>
    </example>
  </div>
</template>

<script>
import single from './single'
import group from './group'
export default {
  components: {
    single,
    group
  },

  data () {
    return {
      codeSingle: getSingleCode(),
      codeGroup: getGroupCode(),
    }
  }
}


function getSingleCode () {
  return `
<template>
  <checkbox-item v-model="use">启用<\/checkbox-item>
<\/template>

<script>
import CheckBoxItem from 'jcy-common/vue/checkbox-item'
export default {
  components: {
    'checkbox-item': CheckBoxItem
  },
  data () {
    return {
      use: false
    }
  }
}
<\/script>
  `
}


function getGroupCode () {
  return `
<template>
  <div>
    <checkbox-item v-model="needQuanxuan">显示全选 {{area}}<\/checkbox-item>
    <checkbox-group v-model="area" :all="needQuanxuan" style="margin-top:10px;">
      <checkbox-item
        v-model="item.checked"
        :key="item.key"
        :name="item.key"
        :disabled="item.disabled"
        v-for="item in list">
        {{item.label}}
      <\/checkbox-item>
    <\/checkbox-group>
  <\/div>
<\/template>

<script>
import CheckBoxItem from 'jcy-common/vue/checkbox-item'
import CheckBoxGroup from 'jcy-common/vue/checkbox-group'
export default {
  components: {
    'checkbox-item': CheckBoxItem,
    'checkbox-group': CheckBoxGroup,
  },
  data () {
    return {
      needQuanxuan: false,
      area: ['d'],
      list: [
        { checked: true, key: 'a', label: 'javascript', disabled: true},
        { checked: true, key: 'b', label: 'php', disabled: true},
        { checked: false, key: 'c', label: 'nodejs' },
        { checked: false, key: 'd', label: 'java' }
      ]
    }
  }
}
<\/script>
`
}
</script>