/**
 * 防抖升级版，调用时通过动态回调执行方法（以前是创建时就指定了执行函数） 
 * @param {Number} sleepTime 间隔频率
 * @param {?Boolean} isFirstWork 每一周期的第一次是否执行
 * @return {Function(handle)}
 */
function FN_debounce (sleepTime, isFirstWork) {
  var firstFlag = isFirstWork, timer, fgt, self, handle;
  function doOnce(){
    handle.call(self) // 改变this指向
    fgt = setTimeout(function () {
      firstFlag = isFirstWork
    }, sleepTime)      
  }

  return function (callback) {
    handle = callback
    self = this
    clearTimeout(timer)
    clearTimeout(fgt)
    if(firstFlag) {
      firstFlag = false
      doOnce()
    } else {
      timer = setTimeout(doOnce, sleepTime)
    }
  }
}



export default FN_debounce