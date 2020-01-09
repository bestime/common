<template>
  <div>
    <vbt-button type="default" size="default" @click="$refs.demo.show()">左侧打开</vbt-button>
    <Drawer
      direction="left"
      ref="demo"
      radius="20px"
      body
      title="左侧打开"
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