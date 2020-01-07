<template>
  <div>
    <vbt-button size="small" @click="$refs.demo.show()">右侧打开</vbt-button>
    <Drawer
      direction="right"
      ref="demo"
      width="300px"
      radius="20px"
      body
      title="右侧打开"
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