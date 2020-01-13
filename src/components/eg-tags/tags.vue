<template>
  <div class="button-wrapper">
    <vbt-tag type="default">default</vbt-tag>
    <vbt-tag type="primary" round>primary</vbt-tag>
    <vbt-tag type="warning">warning</vbt-tag>
    <vbt-tag type="error">error</vbt-tag>
    <vbt-tag type="success">success</vbt-tag>
    <vbt-tag type="info">info</vbt-tag>

    <br/>
    <vbt-tag close type="default">default</vbt-tag>
    <vbt-tag close type="primary" round>primary</vbt-tag>
    <vbt-tag close type="warning">warning</vbt-tag>
    <vbt-tag close type="error">error</vbt-tag>
    <vbt-tag close type="success">success</vbt-tag>
    <vbt-tag close type="info">info</vbt-tag>
  </div>
</template>

<script>
import Tag from 'jcy-common/vue/Tag'
export default {
  components: {
    'vbt-tag': Tag,
  }
}
</script>