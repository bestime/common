import isArray from './isArray'
import JSONPARSE from './JSONPARSE'

function _Array (data) {
  return isArray(data) ? data : JSONPARSE(data, 'Array')
}

export default _Array
