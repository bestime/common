<style lang="stylus" rel="stylesheet/stylus">

</style>

<template>
  <div class="vbt-tab-item" v-show="show">
    <slot/>
  </div>
</template>

<script>
import { findComponentUpward } from './vue-tool'
export default {
  name: 'tab-item',
  props: {
    id: String,
    label: {
      type: String,
      default: '-'
    }
  },
  computed: {
    pid () {
      return this.$parent.value
    }
  },
  components: {
    
  },
  data () {
    return {
      show:false
    }
  },
  mounted () {
    console.log('父级',this.$parent.value)
    this.update()
  },
  methods: {
    update(){
      const oFather = findComponentUpward(this, 'tab-wrapper')
      oFather.update(this.id, this.label, ()=> {
        this.onShow()
      })
    },

    onShow () {
      this.show = true
      this.$emit('on-show')
    },

    onrefresh () {
      this.$emit('on-refresh')
    }
  },
  watch: {
    pid (pid) {
      if(pid===this.id) {
        this.onShow()
      } else {
        this.show = false
      }
    }
  }
}
</script>