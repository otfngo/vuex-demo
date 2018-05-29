<template>
  <div>
    <div>home page</div>
    <div>{{loading}}</div>
    <div>{{count}}</div>
    <div>{{countAlias}}</div>
    <div>{{countPlusLocalState}}</div>
    <div>{{`doneTodosCount: ${doneTodosCount}`}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      localCount: 1
    }
  },
  computed: {
    ...mapState({
      // loading: function(state) {
      //   return state.loading
      // }

      // loading(state) {
      //   return state.loading
      // }

      // loading: state => state.loading

      loading: 'loading',

      count: 'count',
      countAlias: 'count',
      countPlusLocalState(state) {
        return state.count + this.localCount
      },
      doneTodosCount(state) {
        return state.todos.filter(todo => todo.done).length
      }
    })
  }
}
</script>
