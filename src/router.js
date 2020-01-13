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
    name: 'Button按钮',
    component: () => import(/* webpackChunkName: "eg-button" */'@components/eg-button/index.vue')
  },
  {
    path: '/eg-switch',
    name: 'Switch开关',
    component: () => import(/* webpackChunkName: "eg-switch" */'@components/eg-switch/index.vue')
  },
  {
    path: '/eg-select',
    name: 'Select下拉选择',
    component: () => import(/* webpackChunkName: "eg-select" */'@components/eg-select/index.vue')
  },
  {
    path: '/eg-menu',
    name: 'Menu菜单',
    component: () => import(/* webpackChunkName: "eg-menu" */'@components/eg-menu/index.vue')
  },
  {
    path: '/eg-loading',
    name: 'Loading',
    component: () => import(/* webpackChunkName: "eg-loading" */'@components/eg-loading/index.vue')
  },
  {
    path: '/eg-tags',
    name: 'tags',
    component: () => import(/* webpackChunkName: "eg-tags" */'@components/eg-tags/index.vue')
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