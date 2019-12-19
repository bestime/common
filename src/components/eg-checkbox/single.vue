<template>
  <checkbox-item v-model="use">启用</checkbox-item>
</template>

<script>
import CheckBoxItem from 'jcy-common/vue/checkbox-item'
export default {
  components: {
    'checkbox-item': CheckBoxItem
  },
  data () {
    return {
      use: false
    }
  }
}
</script>