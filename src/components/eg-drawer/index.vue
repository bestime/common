<style lang="stylus" rel="stylesheet/stylus">
.eg-checkbox
  .tit
    font-size 16px
    color #444
</style>
<template>
  <div class="eg-checkbox">
    <example title="右侧">
      <Right slot="demo"/>
      <code-view slot="code" :content="getRight()"/>
    </example>
    <example title="左侧">
      <Left slot="demo"/>
      <code-view slot="code" :content="getLeft()"/>
    </example>
    <example title="底部">
      <Bottom slot="demo"/>
      <code-view slot="code" :content="getBottom()"/>
    </example>
    <example title="顶部">
      <Top slot="demo"/>
      <code-view slot="code" :content="getTop()"/>
    </example>
    <example title="中间">
      <Center slot="demo"/>
      <code-view slot="code" :content="getCenter()"/>
    </example>
  </div>
</template>

<script>
import Right from './right'
import Left from './left'
import Bottom from './bottom'
import Top from './top'
import Center from './center'
export default {
  components: {
    Right,
    Left,
    Bottom,
    Top,
    Center
  },

  methods: {
    getRight,
    getLeft,
    getBottom,
    getTop,
    getCenter
  }
}

function getCenter () {
  return `
<template>
  <div>    
    <vbt-button type="success" @click="$refs.demo.show()">中间打开<\/vbt-button>
    <Drawer
      :mask-close="false"
      body
      direction="center"
      ref="demo"
      title="中间打开"
      radius="20px"
    >
      <div style="height:400px;width:400px;"><\/div>
    <\/Drawer>
  <\/div>
<\/template>

<script>
import Drawer from 'jcy-common/vue/Drawer'
import Button from 'jcy-common/vue/Button'
export default {
  components: {
    Drawer,
    'vbt-button': Button
  }
}
<\/script>
  `
}

function getTop () {
  return `
<template>
  <div>
    <vbt-button type="error" @click="$refs.demo.show()">顶部打开<\/vbt-button>
    <Drawer
      direction="top"
      ref="demo"
      width="auto"
      height="300px"
      radius="20px"
      title="顶部打开"
    />
  <\/div>
<\/template>

<script>
import Drawer from 'jcy-common/vue/Drawer'
import Button from 'jcy-common/vue/Button'
export default {
  components: {
    Drawer,
    'vbt-button': Button
  }
}
<\/script>
`
}

function getBottom () {
  return `
<template>
  <div>
    <vbt-button type="warning" @click="$refs.demo.show()">底部打开<\/vbt-button>
    <Drawer
      direction="bottom"
      ref="demo"
      width="auto"
      height="300px"
      radius="20px"
      body
      title="底部打开"
    />
  <\/div>
<\/template>

<script>
import Drawer from 'jcy-common/vue/Drawer'
import Button from 'jcy-common/vue/Button'
export default {
  components: {
    Drawer,
    'vbt-button': Button
  }
}
<\/script>
  `
}

function getLeft () {
  return `
<template>
  <div>
    <vbt-button type="default" size="default" @click="$refs.demo.show()">左侧打开<\/vbt-button>
    <Drawer
      direction="left"
      ref="demo"
      width="300px"
      radius="20px"
      body
      title="左侧打开"
    />
  <\/div>
<\/template>

<script>
import Drawer from 'jcy-common/vue/Drawer'
import Button from 'jcy-common/vue/Button'
export default {
  components: {
    Drawer,
    'vbt-button': Button
  }
}
<\/script>
  `
}


function getRight () {
  return `
<template>
  <div>
    <vbt-button size="small" @click="$refs.demo.show()">右侧打开<\/vbt-button>
    <Drawer
      direction="right"
      ref="demo"
      width="300px"
      radius="20px"
      body
      title="右侧打开"
    />
  <\/div>
<\/template>

<script>
import Drawer from 'jcy-common/vue/Drawer'
import Button from 'jcy-common/vue/Button'
export default {
  components: {
    Drawer,
    'vbt-button': Button
  }
}
<\/script>
  `
}

</script>