<style lang="stylus" rel="stylesheet/stylus">
.button-wrapper
  .vbt-button
    margin 2px
    text-transform capitalize
</style>
<template>
  <div class="button-wrapper">
    <vbt-button type="default">default</vbt-button>
    <vbt-button type="primary">primary</vbt-button>
    <vbt-button type="warning">warning</vbt-button>
    <vbt-button type="error">error</vbt-button>
    <vbt-button type="success">success</vbt-button>
    <vbt-button type="info">info</vbt-button>
    <br/>
    <vbt-button type="default" plain>default</vbt-button>
    <vbt-button type="primary" plain>primary</vbt-button>
    <vbt-button type="warning" plain>warning</vbt-button>
    <vbt-button type="error" plain>error</vbt-button>
    <vbt-button type="success" plain>success</vbt-button>
    <vbt-button type="info" plain>info</vbt-button>
    <br/>
    <vbt-button type="default" disabled>default</vbt-button>
    <vbt-button type="primary" disabled>primary</vbt-button>
    <vbt-button type="warning" disabled>warning</vbt-button>
    <vbt-button type="error" disabled>error</vbt-button>
    <vbt-button type="success" disabled>success</vbt-button>
    <vbt-button type="info" disabled>info</vbt-button>
  </div>
</template>

<script>
import ButtonBox from 'jcy-common/vue/Button'
export default {
  components: {
    'vbt-button': ButtonBox,
  }
}
</script>