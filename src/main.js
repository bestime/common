import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router, routerList } from './router'
import { mapActions } from 'vuex'
import '@src/styl/flex.styl'
import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/github.css'  //导入代码高亮样式
Vue.config.productionTip = false

import CodeView from '@base/code-view'
Vue.component(CodeView.name, CodeView)
//自定义一个代码高亮指令
Vue.directive('highlight',function (el) {
  let highlight = el.querySelectorAll('code');
  highlight.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})

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
