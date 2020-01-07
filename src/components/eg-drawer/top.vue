<template>
  <div>
    <vbt-button type="error" @click="$refs.demo.show()">顶部打开</vbt-button>
    <Drawer
      direction="top"
      ref="demo"
      width="auto"
      height="300px"
      radius="20px"
      title="顶部打开"
    />
  </div>
</template>

<script>
import Drawer from 'jcy-common/vue/Drawer'
import Button from 'jcy-common/vue/Button'
export default {
  components: {
    Drawer,
    'vbt-button': Button
  }
}
</script>