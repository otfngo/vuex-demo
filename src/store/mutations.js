import * as types from './mutation-types'

const mutations = {
  [types.setLoading](state, loading) {
    state.loading = loading
  },
  [types.setCount](state, count) {
    state.count = count
  }
}

export default mutations
