import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, index) {
      state.count += index
    }
  },
  actions: {
    increment ({commit}, index) {
      commit('increment', index)
    }
  }
})
export default store
