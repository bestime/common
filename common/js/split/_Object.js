


import isObject from './isObject'
import JSONPARSE from './JSONPARSE'

/**
 * 强制转换json
 * @param {*} data 需要转换的数据
 */
function _Object (data) {
  return isObject(data) ? data : JSONPARSE(data, 'Object')
}
export default _Object