import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    dinersCount: 0,
    Comensal:{},
    Unidad:{},
    Mesa:{}
  },
  getters: {
  },
  mutations: {
    setDinersCount(state,value){
      state.dinersCount = value
    },
    setComensales(state,payload){
      state.Comensal = payload
    },
    setUnidad(state,payload){
      state.Unidad = payload
    },
    setMesa(state, payload){
      state.Mesa = payload
    }
  },
  actions: {
      setDinersCount(state, value) {
        state.commit('setDinersCount',value)
    },
    async setComensales({commit}){
      const {data} = await axios.get("http://127.0.0.1:8000/api/customers")
      const data_dos =  JSON.parse(data.data)
      console.log(data_dos)
      const comensal = data_dos.comensal
      const unidad_nombre = data_dos.unidad_nombre
      const mesa_no = data_dos.mesa_no
      commit('setComensales',comensal)
      commit('setUnidad',unidad_nombre)
      commit('setMesa',mesa_no)
    }
  }
})