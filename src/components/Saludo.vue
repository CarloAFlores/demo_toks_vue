<template>
  <div class="div">

    <div class="div__user div__user--data_section">
      <p class="div__user__bienvenida">Hola {{Comensal}}, Nos encanta que estes aqui!</p>
      <p class="div__user__informe">Restaurante: <b>Toks {{Unidad}}</b> / Mesa: <b>{{Mesa}}</b></p>
    </div>
  </div>

  <div>
  </div>
</template>

<script>
import axios from 'axios'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default {
  data(){
    return{
       customerData: null,
       comensal: '',
       unidad: '',
       mesa: '',
       unidad_id: '',
       comensal_id: '',
    }
  },
  methods:{
    async customerDataService(){
      await axios.get(this.base_url_services+'/api/customers')
      // await axios.get('http://189.161.36.232:8000/api/customers')
      .then( response => {
        console.log(response);
        this.customerData = JSON.parse(response.data.data)
        this.comensal = this.customerData.comensal_nombre
        this.unidad = this.customerData.unidad_nombre
        this.mesa = this.customerData.mesa_no
        this.unidad_id = this.customerData.unidad_id
        this.comensal_id = this.customerData.comensal_id
        this.$emit("getUnidadMenuId",this.unidad_id);
      })
    }
  },
  created(){
    this.customerDataService();
  },
  setup(){
    const store = useStore()
    const Comensal = computed(()=>{
      return store.state.Comensal
    })
    const Unidad = computed(()=>{
      return store.state.Unidad
    })
    const Mesa = computed(()=>{
      return store.state.Mesa
    })
    const Unidad_ID = computed(()=>{
      return store.state.Unidad_ID
    })
    const Comensal_ID = computed(()=>{
      return store.state.Comensal_ID
    })
    onMounted(()=>{
      store.dispatch('setComensales')
    })
    return{
      Comensal,
      Unidad,
      Mesa,
      Unidad_ID,
      Comensal_ID
    }
  }

}
</script>

<style lang="scss" scoped>
.div{
  position: sticky;
  top: 4.2rem;
  z-index: 1;
  &__user{
    font-size: 1em;
    background: #e5e5e5;
    padding: 1.2em 2em;
    
    &__informe{
      font-size: .7em;
      letter-spacing: .1em;
      font-weight: lighter;
      b{
        font-weight: 800;
      }
    }
  }
}
@media (min-width: 700px) {
  .div{
    top: 12%;
      margin-top: .2em;
  }
}
</style>