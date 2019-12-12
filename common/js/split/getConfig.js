import _Object from './_Object'

function getConfig (key) {
  var res = _Object(window['jcy'])
  return key ? res[key] : res
}


export default getConfig