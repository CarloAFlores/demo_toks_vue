import { createStore } from 'vuex'
import axios from "axios";
import VuexPersistence from 'vuex-persist';

export default createStore({
  state: {
    dinersCount: 0,
    Comensal:{},
    Comensal_ID:{},
    Unidad:{},
    Mesa:{},
    Unidad_ID:0,
    menuData: null,
    categoryData: null,
    subCategoryData: null,
    dayPartCategory: null,
    productData: null,
    tiempoData: null,
    partialOrder:[],
    cart:[]
  },
  getters: {
    customerData(state){
      return state.comensal
    }
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
    setComensalID(state, payload){
      state.Comensal_ID = payload
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
    },
    addOptionsProductOrder(state, payload){
      state.partialOrder[0].opciones_seleccionadas.push(payload)
    },
    setPartialOrder(state, payload){
      state.partialOrder.push(payload)
    },
    setCart(state, payload){
      state.cart.push(payload)
    },
    addProduct(state,payload){
      let orden = {
        "comensal_id":state.Comensal_ID,
        "productos_seleccionados": [
          payload
        ]
      }
      state.cart[0].ordenes.push(orden)
    }
  },
  actions: {
      setDinersCount(state, value) {
        state.commit('setDinersCount',value)
    },
    async setComensales({commit}){
      const {data} = await axios.get("http://localhost:8000/api/customers")
      // const {data} = await axios.get("http://189.161.36.232:8000/api/customers")
      const data_dos =  JSON.parse(data.data)
      const comensal = data_dos.comensal_nombre
      const unidad_nombre = data_dos.unidad_nombre
      const mesa_no = data_dos.mesa_no
      const unidad_id = data_dos.unidad_id
      const comensal_id = data_dos.comensal_id
      commit('setComensales',comensal)
      commit('setUnidad',unidad_nombre)
      commit('setMesa',mesa_no)
      commit('setUnidadID',unidad_id)
      commit('setComensalID',comensal_id)
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
    },
    setPartialOrder({commit},value){
      commit('setPartialOrder',value)
    },
    addOptionsProductOrder({commit},value){
      commit('addOptionsProductOrder',value)
    },
    setCart({state,commit}){

      let carrito =
      {
        "carrito_id":0,
        "ordenes":
        [

        ]
    }

      commit('setCart',carrito)
    },
    addProduct({commit},value)
    {
      let orden = {
        "productos": value.producto,
        "opciones_selccionadas": value.opciones_seleccionadas,
        "para_llevar": false
      }
      commit('addProduct',value)
    }
  },
  plugins:[
    new VuexPersistence({
      storage: window.localStorage
    }).plugin
  ]
})