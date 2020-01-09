<style lang="stylus" rel="stylesheet/stylus">
@keyframes jcy-rotate
  from
    transform rotate(0deg)
  to
    transform rotate(360deg)

.jcy-loading 
  position relative
  color #fff
  font-size 0
  vertical-align middle
  display inline-block

.jcy-loading__spinner
  position relative
  display inline-block
  width 40px
  height 40px
  max-width 100%
  max-height 100%
  vertical-align middle
  animation jcy-rotate 0.8s linear infinite

.jcy-loading__circular
  display block
  width 100%
  height 100%

.jcy-loading__circular circle
  animation jcy-circular 1.5s ease-in-out infinite
  stroke-width 2
  stroke-linecap round
.jcy-loading--vertical
  display flex
  flex-direction column
  align-items center
@keyframes jcy-circular
  0%
    stroke-dasharray 1, 200
    stroke-dashoffset  0
  50%
    stroke-dasharray 90, 150
    stroke-dashoffset -40
  100%
    stroke-dasharray 90, 150
    stroke-dashoffset -120
</style>

<template>
  <div
    class="jcy-loading jcy-loading--circular jcy-toast__loading"
    :style="{width: `${size}px`, height: `${size}px`}"
  >
    <span class="jcy-loading__spinner">
      <svg viewBox="25 25 50 50" class="jcy-loading__circular">
        <circle cx="50" cy="50" r="20" fill="none" :stroke="color"/>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 14
    },
    color: {
      type: String,
      default: '#000'
    }
  },
}
</script>