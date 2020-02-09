

import isFunction from './isFunction'
import getType from './getType'
import forEach from './forEach'
import defaultType from './defaultType'

function filter (data, handle) {
  var TYPE = getType(data)
  if(!isFunction(handle)) return defaultType(TYPE);
  var res;
  switch (TYPE) {
    case 'Array':
      res = []
      forEach(data, function (item, index) {
        handle(item, index) && res.push(item)
      })
      break;
    case 'Object':
      res = {}
      for(var key in data) {
        if(handle(data[key], key)) {
          res[key] = data[key]
        }
      }
      break;
  }
  
  return res
}


export default filter