





import isEmpty from './isEmpty.js'
import forEach from './forEach.js'
import clone from './clone.js'
import split from './split.js'
import some from './some.js'
import _Array from './_Array.js'
import assign from './assign.js'


function insertId(index, str, id) {
  str = split(str, ',')
  str[index] = id
  return str.join(',')
}


function filterOnce(usable, canUseGroup) {
  var res = {}, reg;
  forEach(usable, function (item) {
    var find;
    for (var key in canUseGroup) {
      var arr = split(key, ',')
      find = false
      reg = ''
      forEach(arr, function (r, ridx) {
        if (r) {
          find = true
        }
        reg = reg + (ridx ? ',' : '') + (r || '[^,]*')
      })

      if (new RegExp(reg).test(item.join(','))) {
        res[item.join(',')] = true
      }
    }
  })

  return res;
}


function SKU(list, usable, selected) {
  selected = _Array(selected)
  list = clone(list)

  var startIndex = -1, endIndex = -1;
  forEach(selected, function (item, index) {
    if (!isEmpty(item)) {
      startIndex = startIndex >= 0 ? startIndex : index
      endIndex = index
    }
  })

  var shortSelected = selected.slice(startIndex, endIndex + 1)

  var res = {}, one, count = 0, filterUse = [], isSame;

  // 第一步，精确结果
  var chushi = shortSelected.join(',')
  res[chushi] = true

  if (startIndex > 0) {
    // 第二部，向上一级找
    forEach(list[startIndex - 1].children, function (cd) {
      for (var b = 0; b < usable.length; b++) {
        res[usable[b][startIndex - 1] + ',' + chushi] = true
      }
    })
  }



  // res = filterOnce(usable, res)

  // 第三部，向下走一个组合
  if (endIndex < list.length - 1) {
    forEach(list[endIndex + 1].children, function (cd) {
      for (var b = 0; b < usable.length; b++) {
        res[chushi + ',' + usable[b][endIndex + 1]] = true
      }
    })
  }


  // 第四步，先过滤一遍
  res = filterOnce(usable, res)
  var zhijie = clone(res)


  forEach(usable, function (item) {
    var pt = {}
    for (var key in zhijie) {
      pt[insertId(startIndex, key, item[startIndex])] = true

    }
    res = assign(res, pt)
  })



  // res = filterOnce(usable, res)
  forEach(usable, function (item) {
    var pt = {}
    for (var key in zhijie) {
      pt[insertId(endIndex, key, item[endIndex])] = true

    }
    res = assign(res, pt)
  })

  // res = filterOnce(usable, res)
  // // 第四步，向内侧层层组合
  if (endIndex > startIndex) {
    for (var g = startIndex + 1; g < endIndex; g++) {
      forEach(usable, function (item) {
        for (var key in zhijie) {
          res[insertId(g, key, item[g])] = true
        }
      })
    }
  }

  res = filterOnce(usable, res)

  // canUseGroup
  var key, reg, uList = [];
  forEach(usable, function (item) {
    var find;
    for (key in res) {
      var arr = split(key, ',')
      find = false
      reg = ''
      forEach(arr, function (r, ridx) {
        if (r) {
          find = true
        }
        reg = reg + (ridx ? ',' : '') + (r || '.')
      })

      console.log('正则', new RegExp(reg), '=>', item.join(','), new RegExp(reg).test(item.join(',')), item)
      if (new RegExp(reg).test(item.join(','))) {
        uList.push(item)
      }
    }
  })

  // console.log('嗄是的', clone(res), uList)



  forEach(list, function (item, index) {
    forEach(item.children, function (cd) {
      cd.lock = !some(uList, function (item) {
        // console.log('独特', item[index], cd.id)
        return item[index] == cd.id
      })
    })
  })



  // 之选中了一行，并列项目筛选出可选的
  if (startIndex == endIndex && startIndex > -1) {
    forEach(list[startIndex].children, function (item) {
      item.lock = !some(usable, function (gp) {
        return gp[startIndex] == item.id
      })
    })
  }
  return list
}

export default SKU