

import isArray from './isArray'
import isObject from './isObject'
import isEmpty from './isEmpty'
import isString from './isString'
import trim from './trim'

/**
 * 清空无效数据
 * @param {*} data
 * @param {?removeEmptyStr} 是否需移除字符串，默认false
 * @param {?removeEmptyObject} 是否需移除[空json，空数组]，默认true
 * @return {*} data 与清理过的和传入数据相同格式的数据
 */
function clean (data, removeEmptyStr, removeEmptyObject) {
  var res;
  removeEmptyObject = removeEmptyObject === false ? false : true;
  if(isObject(data)) {
    res = {}
    var mpItem, key, temp;
    for(key in data) {
      mpItem = data[key]
      if(isArray(mpItem) || isObject(mpItem)) {
        temp = clean(mpItem, removeEmptyStr)
      } else {
        temp = mpItem
      }
      _filterData(temp, removeEmptyStr, removeEmptyObject, function (useValue) {
        res[key] = useValue;
      });
    }
  } else if(isArray(data)) {
    res = []
    for(var index = 0, len = data.length; index < len; index++) {
      _filterData(clean(data[index], removeEmptyStr), removeEmptyStr, removeEmptyObject, function (useValue) {
        res.push(useValue);
      });
    }
  } else {
    res = data
  }
  return res
}

/**
 * @param {*} data
 * @param {Boolean} removeEmptyStr  
 * @param {Function} callback  
 */
function _filterData (data, removeEmptyStr, removeEmptyObject, callback) {
  if(isString(data)) {
    if(removeEmptyStr) {
      if(trim(data, '*') != '') {
        callback(data)
      }
    } else {
      callback(data)
    }
  } else if(data !=null){
    if(removeEmptyObject) {
      if(!isEmpty(data)) {
        callback(data)
      }
    } else {
      callback(data)
    }
  }
}


module.exports = clean