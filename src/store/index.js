import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    dinersCount: 0,
    Platillos:[]
  },
  getters: {
  },
  mutations: {
    setDinersCount(state,value){
      state.dinersCount = value
    },
    setPlatillo(state,payload){
      state.Platillos = payload
    }
  },
  actions: {
    setDinersCount(state, value) {
      state.commit('setDinersCount',value)
  },
    async setPaltillo({commit}){
      try {
        const {data} = await axios.get('api.json')
        const {menu} = await data
        const {categorias} = await menu
        const {subcategorias} = await categorias
        console.log(categorias)
        commit('setPlatillo',categorias)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})