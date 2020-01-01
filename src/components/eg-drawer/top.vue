<template>
  <div>
    <button @click="$refs.demo.show()">顶部打开</button>
    <Drawer
      direction="top"
      ref="demo"
      width="auto"
      height="300px"
      title="顶部打开"
    />
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