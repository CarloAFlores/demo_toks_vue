import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    dinersCount: 0,
    Comensal:{},
    Unidad:{},
    Mesa:{},
    Unidad_ID:0,
    menuData: null,
    categoryData: null,
    subCategoryData: null,
    dayPartCategory: null,
    productData: null,
    tiempoData: null,
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
    },
    setUnidadID(state, payload){
      state.Unidad_ID = payload
    },
    setMenu(state, payload){
      state.menuData = payload
    },
    setCategory(state, payload){
      state.categoryData = payload
    },
    setSubCategory(state, payload){
      state.subCategoryData = payload
    },
    setDayPartCategory(state, payload){
      state.dayPartCategory = payload
    },
    setProduct(state,payload){
      state.productData = payload
    },
    setTiempo(state, payload){
      state.tiempoData = payload
    }
  },
  actions: {
      setDinersCount(state, value) {
        state.commit('setDinersCount',value)
    },
    async setComensales({commit}){
      const {data} = await axios.get("http://189.161.36.232:8000/api/customers")
      const data_dos =  JSON.parse(data.data)
      const comensal = data_dos.comensal
      const unidad_nombre = data_dos.unidad_nombre
      const mesa_no = data_dos.mesa_no
      const unidad_id = data_dos.unidad_id
      commit('setComensales',comensal)
      commit('setUnidad',unidad_nombre)
      commit('setMesa',mesa_no)
      commit('setUnidadID',unidad_id)
    },
    setMenuData({commit},value){
      commit('setMenu',value)
    },
    setCurrentCategory({commit},value){
      commit('setCategory',value)
    },
    setCurrentSubcategory({commit},value){
      commit('setSubCategory',value)
    },
    setDayPartCategory({commit},value){
      commit('setDayPartCategory',value)
    },
    setProduct({commit},value){
      commit('setProduct',value)
    },
    setTiempo({commit},value){
      commit('setTiempo',value)
    }
  }
})