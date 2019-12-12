const COMMIT_NAME = 'commit_'

export const currentRouteName = {
  value: [],
  mutation (state, data) {
    if(ns.isArray(data)) {
      state['currentRouteName'] = data
    }
  },
  action ({commit}, value) {
    commit(COMMIT_NAME + 'currentRouteName', value)
  }
}


export const user = {
  value: {},
  mutation (state, data) {
    state['user'] = data
  },
  action ({commit}, value) {
    commit(COMMIT_NAME + 'user', value)
  }
}
