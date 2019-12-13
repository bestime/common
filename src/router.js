import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export const routerList = [
  {
    path: '*',
    name: '不存在',
    component: () => import(/* webpackChunkName: "home" */'@components/home.vue')
  },
  {
    path: '/water-fall',
    name: '瀑布流',
    component: () => import(/* webpackChunkName: "water-fall" */'@components/water-fall/water-fall.vue')
  },
  {
    path: '/transform-code',
    name: '代码转化',
    component: () => import(/* webpackChunkName: "water-fall" */'@components/transform-code.vue')
  },

  
];

export const router = new Router({
  routes: routerList
});