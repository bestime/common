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
    path: '/js',
    name: 'js方法',
    component: () => import(/* webpackChunkName: "water-fall" */'@components/js-eg/index.vue')
  },
  {
    path: '/water-fall',
    name: '瀑布流',
    component: () => import(/* webpackChunkName: "water-fall" */'@components/water-fall/water-fall.vue')
  },
  {
    path: '/eg-checkbox',
    name: 'checkbox',
    component: () => import(/* webpackChunkName: "eg-checkbox" */'@components/eg-checkbox/index.vue')
  },
  {
    path: '/eg-drawer',
    name: 'Drawer',
    component: () => import(/* webpackChunkName: "eg-drawer" */'@components/eg-drawer/index.vue')
  },
  {
    path: '/eg-slide-operate',
    name: '侧滑操做',
    component: () => import(/* webpackChunkName: "eg-eg-slide-operate" */'@components/eg-slide-operate/index.vue')
  },
  {
    path: '/eg-button',
    name: '按钮',
    component: () => import(/* webpackChunkName: "eg-button" */'@components/eg-button/index.vue')
  },
  {
    path: '/transform-code',
    name: '代码转化',
    component: () => import(/* webpackChunkName: "transform-code" */'@components/transform-code.vue')
  }
];

export const router = new Router({
  routes: routerList
});