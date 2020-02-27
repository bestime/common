<style lang="stylus" rel="stylesheet/stylus">
</style>
<template>
  <div>
    <example title="Input">
      <input00 slot="demo"/>
      <code-view slot="code" :content="getButons()"/>
    </example>
  </div>
</template>

<script>
import tex from './tex'
import input00 from './input00'
export default {
  components: {
    tex,
    input00
  },

  methods: {
    getButons
  }
}


function getButons () {
  return `
  <style lang="stylus" rel="stylesheet/stylus">
.cko932kl4
  display flex
  align-items flex-start
  margin 2px auto
  button
    margin-left 2px
  
<\/style>
<template>
  <div>
    <div class="cko932kl4">
      <input-vbt size="small" rows="1" v-model="mark" placeholder="输入框行数为一就行了"/>
      <button-vbt size="small">统一尺寸对比<\/button-vbt>
    <\/div>
    <div class="cko932kl4">
      <input-vbt size="middle" rows="1" v-model="mark" placeholder="输入框行数为一就行了"/>
      <button-vbt size="middle">统一尺寸对比<\/button-vbt>
    <\/div>
    <div class="cko932kl4">
      <input-vbt size="big" rows="1" v-model="mark" placeholder="输入框行数为一就行了"/>
      <button-vbt size="big">统一尺寸对比<\/button-vbt>
    <\/div>

    <div style="height:50px;"><\/div>

    <div class="cko932kl4">
      <input-vbt :show-bar="true" size="small" :limit="150" rows="4" v-model="mark" placeholder="多行则为textarea"/>
      <button-vbt size="small">统一尺寸对比<\/button-vbt>
    <\/div>
    <div class="cko932kl4">
      <input-vbt :show-bar="true" size="middle" :limit="150" rows="4" v-model="mark" placeholder="多行则为textarea"/>
      <button-vbt size="middle">统一尺寸对比<\/button-vbt>
    <\/div>
    <div class="cko932kl4">
      <input-vbt :show-bar="true" size="big" :limit="150" rows="4" v-model="mark" placeholder="多行则为textarea"/>
      <button-vbt size="big">统一尺寸对比<\/button-vbt>
    <\/div>
  <\/div>
<\/template>

<script>
import Input from 'jcy-common/vue/Input'
import Button from 'jcy-common/vue/Button'
export default {
  components: {
    'input-vbt': Input,
    'button-vbt': Button
  },
  data () {
    return {
      mark: ''
    }
  }
}
<\/script>
  `
}
</script>