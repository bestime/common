import isArray from './isArray'

function _Array (data) {
  return isArray(data) ? data : JSONPARSE(data, 'Array')
}

export default _Array
