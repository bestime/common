<style lang="stylus" rel="stylesheet/stylus">
</style>
<template>
  <div>
    <example title="Switch开关">
      <sth1 slot="demo"/>
      <code-view slot="code" :content="getButons()"/>
    </example>
  </div>
</template>

<script>
import sth1 from './sth1'
export default {
  components: {
    sth1
  },

  methods: {
    getButons
  }
}


function getButons () {
  return `
<style lang="stylus" rel="stylesheet/stylus">
.eg-etst {
  .etst-item {
    padding: 3px 0;
  }
}
<\/style>

<template>
  <div class="eg-etst">
    <div class="etst-item" v-for="size in list" :key="size">
      <vbt-switch v-model="demo2" :size="size">size {{ size }}px<\/vbt-switch>
    <\/div>
  <\/div>
<\/template>

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
<\/script>

  `
}
</script>