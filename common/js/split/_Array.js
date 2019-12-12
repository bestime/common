var isArray = require('./isArray')

export default function (data, def) {
  const temp = isArray(def) ? def : []
  return isArray(data) ? data : temp  
}
