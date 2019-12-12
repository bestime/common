import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router, routerList } from './router'
import { mapActions } from 'vuex'
import '@src/styl/flex.styl'

Vue.config.productionTip = false

import { 
  Message,
  Table,
  TableColumn,
} from 'element-ui';

Vue.use(Table)
Vue.use(TableColumn)
Vue.prototype.$message = Message


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
