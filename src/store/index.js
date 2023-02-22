import { createStore } from 'vuex'

export default createStore({
  state: {
    dinersCount: 0
  },
  getters: {
  },
  mutations: {
    setDinersCount(state,value){
      state.dinersCount = value
    }
  },
  actions: {
    setDinersCount(state, value) {
      state.commit('setDinersCount',value)
  }
  },
  modules: {
  }
})
