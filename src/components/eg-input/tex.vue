
<template>
  <div class="tta-wrapper">
    <input-vbt :show-bar="true" rows="4" :limit="30" v-model="mark" placeholder="哈哈哈哈考虑"/>
  </div>
</template>

<script>
import Input from 'jcy-common/vue/Input'
export default {
  components: {
    'input-vbt': Input
  },
  data () {
    return {
      mark: ''
    }
  }
}
</script>