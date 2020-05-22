<style lang="stylus" rel="stylesheet/stylus">
.cko932kl4
  display flex
  align-items flex-start
  margin 2px auto
  button
    margin-left 2px
</style>
<template>
  <div>

    <div class="cko932kl4">
      <input-vbt size="big" @on-change="phoneChange" rows="1" v-model="mark" placeholder="4位数字添加一个 ⇥ 符号"/>
      <button-vbt size="big">统一尺寸对比</button-vbt>
    </div>

    <div class="cko932kl4">
      <input-vbt size="small" rows="1" v-model="mark" placeholder="输入框行数为一就行了"/>
      <button-vbt size="small">统一尺寸对比</button-vbt>
    </div>
    <div class="cko932kl4">
      <input-vbt size="middle" rows="1" v-model="mark" placeholder="输入框行数为一就行了"/>
      <button-vbt size="middle">统一尺寸对比</button-vbt>
    </div>
    <div class="cko932kl4">
      <input-vbt size="big" rows="1" v-model="mark" placeholder="输入框行数为一就行了"/>
      <button-vbt size="big">统一尺寸对比</button-vbt>
    </div>

    <div style="height:50px;"></div>

    <div class="cko932kl4">
      <input-vbt :show-bar="true" :limit="150" size="small" rows="4" v-model="mark" placeholder="多行则为textarea"/>
      <button-vbt size="small">统一尺寸对比</button-vbt>
    </div>
    <div class="cko932kl4">
      <input-vbt :show-bar="true" :limit="150" size="middle" rows="4" v-model="mark" placeholder="多行则为textarea"/>
      <button-vbt size="middle">统一尺寸对比</button-vbt>
    </div>
    <div class="cko932kl4">
      <input-vbt :show-bar="true" :limit="150" size="big" rows="4" v-model="mark" placeholder="多行则为textarea"/>
      <button-vbt size="big">统一尺寸对比</button-vbt>
    </div>
  </div>
</template>

<script>
import Input from 'jcy-common/vue/Input'
import Button from 'jcy-common/vue/Button'
const S_SYMBOL = '⇥'
export default {
  components: {
    'input-vbt': Input,
    'button-vbt': Button
  },
  data () {
    return {
      mark: ''
    }
  },
  methods: {
    phoneChange (toval, next) {
      toval = toval.replace(/[\D]/g, '')
      toval = toval.replace(/(\d{4})/g, '$1' + S_SYMBOL)
      toval = toval.replace(new RegExp(S_SYMBOL + '$'), '')
      next(toval)
    }
  }
}
</script>
