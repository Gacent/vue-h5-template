import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'done1', done: true },
      { id: 2, text: 'done2', done: false }
    ],
    allRouters: []
  },
  // 类似计算属性
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.text)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  mutations: {
    increment (state, index) {
      state.count += index
    },
    setAllRouters (state, array) {
      state.allRouters = array
    }
  },

  actions: {
    increment ({state, commit}, index) {
      console.log('state.count', state.count) // 读取state中的值
      commit('increment', index)
    },
    setAllRouters ({state, commit}, array) {
      commit('setAllRouters', array)
    }
  }
})
export default store
