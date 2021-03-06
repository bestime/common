import isFunction from './isFunction'

/**
 * 节流函数升级版，调用时通过动态回调执行方法（以前是创建时就指定了执行函数）
 * @param {Number} sleepTime 间隔频率
 * @param {?Boolean} isFirstWork 每一周期的第一次是否执行
 * @param {?Boolean} isLastWork 每一周期的最后一次是否执行
 * @return {Function(handle)}
 * 
 */
function FN_throttle (sleepTime, isFirstWork, isLastWork) {
  var self, start=0, timer, handle;

  function doOnce () {
    start = +new Date
    isFunction(handle) && handle.call(self)      
  }
  return function (callback) {
    clearTimeout(timer)
    if(isFunction(callback)) {
      handle = callback
      self = this;
      if(isFirstWork) {
        doOnce()
        isFirstWork = false
      }else if(+new Date - start > sleepTime) {
        doOnce()     
      } else if(isLastWork) { 
        timer = setTimeout(doOnce, sleepTime)
      }
    }
  }
}

export default FN_throttle