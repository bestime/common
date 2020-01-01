<template>
  <div>
    <button @click="$refs.demo.show()">中间打开</button>
    <Drawer direction="center" ref="demo" title="中间打开">
      <div style="height:2000px;width:2000px;background:red;"></div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from 'jcy-common/vue/Drawer'
export default {
  components: {
    Drawer
  }
}
</script>