import * as types from './mutation-types'

const mutations = {
  [types.SET_LOADING](state, loading) {
    state.loading = loading
  },
  [types.SET_COUNT](state, count) {
    state.count = count
  }
}

export default mutations
