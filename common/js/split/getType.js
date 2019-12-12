

/**
 * 获取数据类型
 * @param {*} data 
 */
function getType (data) {
  return Object.prototype.toString.call(data).replace(/(.*\s)|.$/g, '')
}

export default getType

