<style lang="stylus" rel="stylesheet/stylus">
</style>
<template>
  <div>
    <example title="Button合集">
      <buttons slot="demo"/>
      <code-view slot="code" :content="getButons()"/>
    </example>
  </div>
</template>

<script>
import buttons from './buttons'
export default {
  components: {
    buttons
  },

  methods: {
    getButons
  }
}


function getButons () {
  return `
<style lang="stylus" rel="stylesheet/stylus">
.button-wrapper
  .vbt-button
    margin 2px
    text-transform capitalize
<\/style>
<template>
  <div class="button-wrapper">
    <vbt-button type="default">default<\/vbt-button>
    <vbt-button type="primary" round>primary<\/vbt-button>
    <vbt-button type="warning">warning<\/vbt-button>
    <vbt-button type="error">error<\/vbt-button>
    <vbt-button type="success">success<\/vbt-button>
    <vbt-button type="info">info<\/vbt-button>
    <br/>
    
    <vbt-button size="small" type="default">default<\/vbt-button>
    <vbt-button size="small" type="primary" round>primary<\/vbt-button>
    <vbt-button size="small" type="warning">warning<\/vbt-button>
    <vbt-button size="small" type="error">error<\/vbt-button>
    <vbt-button size="small" type="success">success<\/vbt-button>
    <vbt-button size="small" type="info">info<\/vbt-button>
    <br/>

    <vbt-button type="default" plain>default<\/vbt-button>
    <vbt-button type="primary" plain round>primary<\/vbt-button>
    <vbt-button type="warning" plain>warning<\/vbt-button>
    <vbt-button type="error" plain>error<\/vbt-button>
    <vbt-button type="success" plain>success<\/vbt-button>
    <vbt-button type="info" plain>info<\/vbt-button>
    <br/>

    <vbt-button type="default" disabled>default<\/vbt-button>
    <vbt-button type="primary" disabled round>primary<\/vbt-button>
    <vbt-button type="warning" disabled>warning<\/vbt-button>
    <vbt-button type="error" disabled>error<\/vbt-button>
    <vbt-button type="success" disabled>success<\/vbt-button>
    <vbt-button type="info" disabled>info<\/vbt-button>
    <br/>
    
    <vbt-button type="default" size="middle">default<\/vbt-button>
    <vbt-button type="primary" size="middle" round>primary<\/vbt-button>
    <vbt-button type="warning" size="big" round>warning<\/vbt-button>
    <vbt-button type="error" size="big">error<\/vbt-button>
    <vbt-button type="success" size="middle">success<\/vbt-button>
    <vbt-button type="info" size="middle">info<\/vbt-button>
  <\/div>
<\/template>

<script>
import ButtonBox from 'jcy-common/vue/Button'
export default {
  components: {
    'vbt-button': ButtonBox,
  }
}
<\/script>
  `
}
</script>