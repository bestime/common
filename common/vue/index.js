import Vue from 'vue'
import '../vue/common.styl'
import bind from '../js/split/bind'

import BUS from './vue-bus'
const bus = BUS()

bind(document, 'vue-bus', 'click', function () {
  bus.emit('document-click')
})

Vue.directive('bestime-loading', {
  bind: (el, binding) => {
    const oDiv = document.createElement('div')
    oDiv.className = 'bestime-v-loading'
    const curStyle = window.getComputedStyle(el)
    const position = curStyle.position
    if (position === 'absolute' || position === 'relative') {
      el.style.position = position
    } else {
      el.style.position = 'relative'
    }
    el.loadingElement = oDiv
    if(binding.value) {
      el.appendChild(oDiv)
    }
  },
  update: (el, binding) => {
    if (binding.value) {
      if (el.loadingElement.parentNode === null) {
        el.appendChild(el.loadingElement)
      }
    } else {
      if (el === el.loadingElement.parentNode) {
        el.removeChild(el.loadingElement)
      }
    }
  },
  unbind: (el) => {
    if (el.loadingElement.parentNode === el) {
      el.removeChild(el.loadingElement)
    }
    el.loadingElement = null
  }
})