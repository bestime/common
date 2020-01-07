<template>
  <div>
    <vbt-button type="warning" @click="$refs.demo.show()">底部打开</vbt-button>
    <Drawer
      direction="bottom"
      ref="demo"
      width="auto"
      height="300px"
      radius="20px"
      body
      title="底部打开"
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