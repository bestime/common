import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router, routerList } from './router'
import { mapActions } from 'vuex'
import '@src/styl/flex.styl'
import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/atom-one-dark.css'  //导入代码高亮样式
Vue.config.productionTip = false

import 'jcy-common/vue'

import { hasProp } from 'jcy-common/vue/vue-tool'

import CodeView from '@base/code-view'
Vue.component(CodeView.name, CodeView)
import Example from '@base/example'
Vue.component(Example.name, Example)

//自定义一个代码高亮指令
Vue.directive('highlight',function (el) {
  let highlight = el.querySelectorAll('code');
  highlight.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})

// 是否是当前路由
Vue.prototype.isActiveRouter = function (name) {
  return store.getters.currentRouteName.some(c => c===name)
}

import { 
  Message,
  Table,
  TableColumn,
  Button
} from 'element-ui';

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.prototype.$message = Message
Vue.prototype.ns = window['ns']
Vue.prototype.hasProp = hasProp



// 查找一层路由
function finderOneFloorRoute(children, name) {
  let res = null;
  for(let a=0; a < children.length; a++) {
    let item = children[a]
    if(item.name===name) {
      res = item
      break;
    } else if(ns.isArray(item.children)) {
      res = finderOneFloorRoute(item.children, name)
    }
  }
  return res;
}

new Vue({
  router,
  store,
  render: h => h(App),
  beforeMount () {
    router.beforeResolve((to, from, next) => {
      const toRouter = finderOneFloorRoute(routerList, to.name)
      if(ns.isObject(toRouter)) {
        let navs = to.matched.map(c=>c.name)
        document.title = navs.join('/')
        this.do_currentRouteName(navs)
        next()
      } else {
        this.$message.error(`[${to.name}] 正在开发中`)
      }
    })
  },
  methods: {
    ...mapActions([
      'do_currentRouteName'
    ])
  },
}).$mount('#app')
