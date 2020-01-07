<template>
  <div>    
    <vbt-button type="success" @click="$refs.demo.show()">中间打开</vbt-button>
    <Drawer
      :mask-close="false"
      body
      direction="center"
      ref="demo"
      title="中间打开"
      radius="20px"
    >
      <div style="height:400px;width:400px;"></div>
    </Drawer>
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