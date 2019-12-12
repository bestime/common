import _Object from './_Object'

function setConfig (key, val) {
  window['jcy'] = _Object(window['jcy'])
  window['jcy'][key] = val
}

export default setConfig