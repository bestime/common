import getType from './getType'
/**
 * 移除首尾空格
 * @param {*} str
 * @param {?:Number} pos => 1左侧, -1 右侧, undefined 两侧， * 所有
 */
export default function trim (str, pos) {
  if(getType(str)==='Array') return typeof str
  str = str == null ? '' : String(str)
  switch (pos) {
    case 1: return str.replace(/^[\s\uFEFF\xA0]+/, ''); // 左侧
    case -1: return str.replace(/[\s\uFEFF\xA0]+$/, ''); // 右侧
    case '*': return str.replace(/[\s\uFEFF\xA0]+/g, ''); // 所有空格
    default: return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') // 两侧
  }
}