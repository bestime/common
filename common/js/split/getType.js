

/**
 * 获取数据类型
 * @param {*} data 
 */
function getType (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

export default getType

