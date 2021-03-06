


import isFunction from './isFunction'
import isObject from './isObject'
import _Number from './_Number'
import _Boolean from './_Boolean'

function debounce(opt) {
  if (isObject(opt) && isFunction(opt.handle)) {
    var delay = _Number(opt.delay)
    var handle = opt.handle
    var isFirstWork = _Boolean(opt.isFirstWork)
    var timer, ts, times = 0;
    return function () {
      var self = this, arg = arguments;
      clearTimeout(ts)
      clearTimeout(timer)
      if (isFirstWork && !times) {
        doOne()
      } else {
        timer = setTimeout(doOne, delay)
      }

      function doOne() {
        times++
        if (isFirstWork) {
          ts = setTimeout(function () {
            times = 0; // 保证下一次的第一次可以执行
          }, delay)
        }
        handle.apply(self, arg)
      }
    }
  }
}

export default debounce