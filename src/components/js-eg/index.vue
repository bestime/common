<template>
  <div>
    <example title="dataLayout 处理数据类型">
      <ul slot="desc" class="code-desc">
        <li>将<b>目标数据</b>还原成<b>自定义格式</b></li>
        <li>通常用于接口数据格式不固定的情况</li>
      </ul>
      <code-view slot="code" type="javascript" :content="getdataLayoutDemo()"/>
    </example>

    <example title="clean 清空空值">
      <ul slot="desc" class="code-desc">
        <li>清空为 <b>null</b>、 <b>undefined</b>、<b>{}</b>、<b>[]</b> 等空值</li>
        <li>保留了空字符串 <b>""</b></li>
      </ul>
      <code-view slot="code" type="javascript" :content="getClearDemo()"/>
    </example>

    <example title="defaultType 强制转换类型"/>
    <example title="_Array 强制转换数组"/>
    <example title="_Function 强制转换方法"/>
    <example title="_Boolean 强制转换布尔值"/>
    <example title="_Number 强制转换数字"/>
    <example title="_String 强制转换字符串"/>
    <example title="_Object 强制转换json"/>
    <example title="_Url"/>
    <example title="_http"/>
    <example title="_https"/>
    <example title="symbolNumber"/>
    <example title="clone"/>
    <example title="fixed"/>
    <example title="getByClass"/>
    <example title="getById"/>
    <example title="getCookie"/>
    <example title="getQuery"/>
    <example title="getRandom"/>
    <example title="getType"/>
    <example title="hasClass"/>
    <example title="isArray"/>
    <example title="isEmpty"/>
    <example title="isNumber"/>
    <example title="isObject"/>
    <example title="prevent"/>
    <example title="removeClass"/>
    <example title="removeCookie"/>
    <example title="removeElement"/>
    <example title="setCookie"/>
    <example title="split"/>
    <example title="throttle"/>
    <example title="debounce"/>
    <example title="FunctionLoop"/>
    <example title="zero"/>
    <example title="ready"/>
    <example title="getJsPath"/>
    <example title="backTop"/>
    <example title="getImgSize"/>
    <example title="getUserFromIdCard"/>
    <example title="replaceCustom"/>
    <example title="assign"/>
    <example title="scrollToElement"/>
    <example title="scrollToBottom"/>
    <example title="setStorage"/>
    <example title="getStorage"/>
    <example title="removeStorage"/>
    <example title="CreateEventBus"/>
    <example title="getRandomArray"/>
    <example title="timeFormatToRecent"/>
    <example title="assembly"/>
    <example title="equal"/>
    <example title="reduceTime"/>
    <example title="shuffle"/>
    <example title="updateWebVersion"/>
    <example title="updateQuery"/>
    <example title="updateClass"/>
    <example title="$createStyle"/>
    <example title="write"/>
  </div>
</template>

<script>
export default {
  methods: {
    getClearDemo,
    getdataLayoutDemo
  }
}

function getClearDemo () {
  return `
// => {}
clean({}) 

// => []
clean{[]} 

// => {name: "张三"}
clean({ name: '张三', age: undefined })

// => {list:[1]}
clean({ list: [1], jobs: [{}] }) 
`
}

function getdataLayoutDemo () {
  return `
var TYPE = {
  data: {
    list: [],
    info: {}
  }
}  

const res = dataLayout(TYPE, 'your-data')
`
}
</script>