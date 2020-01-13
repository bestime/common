function emptyFunction () {}
const NAME = 'function'

export default function _Function (data) {
  return typeof data === NAME ? data : emptyFunction
}