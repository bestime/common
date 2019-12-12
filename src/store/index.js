import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)


import * as allData from './allData'


const getters = {}
const state = {}
const mutations = {}
const actions = {}



for(let name in allData) {
  let item = allData[name]
  // 数据仓库
  state[name] = item.value
  // 获取数据
  getters[name] = state => state[name]
  // 改变数据
  mutations[`commit_${name}`] = item.mutation
  // 发起修改
  actions[`do_${name}`] = item.action
}



const storeConfig = {
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
}

export default new Vuex.Store(storeConfig)