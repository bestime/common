<template>
  <div>
    <checkbox-item v-model="needQuanxuan">显示全选 {{area}}</checkbox-item>
    <checkbox-group v-model="area" :all="needQuanxuan" style="margin-top:10px;">
      <checkbox-item
        v-model="item.checked"
        :key="item.key"
        :name="item.key"
        :disabled="item.disabled"
        v-for="item in list">
        {{item.label}}
      </checkbox-item>
    </checkbox-group>
  </div>
</template>

<script>
import CheckBoxItem from '$vue/checkbox-item'
import CheckBoxGroup from '$vue/checkbox-group'
export default {
  components: {
    'checkbox-item': CheckBoxItem,
    'checkbox-group': CheckBoxGroup,
  },
  data () {
    return {
      needQuanxuan: false,
      area: ['a', 'b', 'c'],
      list: [
        { checked: true, key: 'a', label: '重庆', disabled: true},
        { checked: true, key: 'b', label: '四川', disabled: true},
        { checked: true, key: 'c', label: '北京' },
        { checked: false, key: 'd', label: '广州' }
      ]
    }
  }
}
</script>