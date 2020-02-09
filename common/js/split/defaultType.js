

import _Array from './_Array'
import _Object from './_Object'
import _Function from './_Function'
import _String from './_String'
import _Number from './_Number'
import _Boolean from './_Boolean'



function defaultType (type, data) {
  let res = data
  switch (type) {
    case 'Function': res = _Function(data); break;
    case 'Object': res = _Object(data); break;
    case 'Array': res = _Array(data); break;   
    case 'String': res = _String(data); break;   
    case 'Number': res = _Number(data); break;   
    case 'Boolean': res = _Boolean(data); break;
  }
  
  return res
}


export default defaultType