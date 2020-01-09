<style lang="stylus" rel="stylesheet/stylus">
.eg-etst {
  .etst-item {
    padding: 3px 0;
  }
}
</style>

<template>
  <div class="eg-etst">
    <div class="etst-item" v-for="size in list" :key="size">
      <vbt-switch v-model="demo2" :size="size" :disabled="size%2==0">size {{ size }}px</vbt-switch>
    </div>
  </div>
</template>

<script>
import Switch from "jcy-common/vue/Switch";
export default {
  components: {
    "vbt-switch": Switch
  },
  data() {
    return {
      demo2: true,
      list: getNumber(12, 40)
    };
  }
};

function getNumber(start, end) {
  let res = [];
  for (let a = start; a <= end; a++) {
    res.push(a);
  }
  return res;
}
</script>
