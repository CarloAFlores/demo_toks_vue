<template>
  <CartOrders v-if="currentPage != 1" :carroActivado="carroActivado"/>
  <PeopleList :listaPersonasActivado="listaPersonasActivado" />

  <section class="header">
    <button v-if="currentPage != 7" class="header__btn--return header__regresar"  @click="$router.go(-1)">
      <img src="@/assets/atras.svg" alt="boton-regresar">
    </button>

    <div class="header__logo" v-if="currentPage === 1">
      <img src="@/assets/toks-logo.svg" alt="Logo de la marca">
    </div>

    <div class="header__logo adjust" v-if="currentPage === 2">
      <img src="@/assets/toks-logo.svg" alt="Logo de la marca">
    </div>

    <div :class="{'titleAdjust':currentPage === 6, 'titleAdjustExtend': currentPage === 7}" class="titleProduct adjust" v-if="currentPage >= 4">
      <h2>{{titleArticle}}</h2>
    </div>

    <button v-if="currentPage === 1" class="header__btn--menu menu">
      <img src="@/assets/menu_hamburguesa.svg" alt="menu-hamburguesa">
    </button>

    <div  v-if="currentPage === 2 || currentPage >= 4" class="buttons-container">
      <button @click="activeList()" class="footer__button__btn" v-if="currentPage === 2">
            <img src="@/assets/cuenta-usuario.svg" class="user-count">
      </button>
      <button @click="$router.push({ path: '/menu/'+this.Unidad_ID })"  class="footer__button__btn" v-if="currentPage >= 4">
            <img src="@/assets/home-icon-white.svg" class="user-count">
      </button>
      <button v-if="currentPage != 7" @click="activeCart()" class="footer__button__btn">
            <img src="@/assets/cart.svg" class="cart">
      </button>
      <button class="header__btn--menu menu">
      <img src="@/assets/menu_hamburguesa.svg" alt="menu-hamburguesa">
    </button>
    </div>

  </section>
</template>

<script>
import { mapState } from 'vuex'
import CartOrders from './CartOrders.vue'
import PeopleList from './PeopleList.vue'

export default {
  components:{
    CartOrders,
    PeopleList
  },
  data(){
    return{
      carroActivado: false,
      listaPersonasActivado: false
      
    }
  },
  props:{
    currentPage:{
      type: Number,
      required: true
    },
    titleArticle:{
      type: String,
      required: false
    }
  },
  methods:{
    
    activeCart(){
      this.carroActivado = !this.carroActivado
    },
    activeList(){
      this.listaPersonasActivado = !this.listaPersonasActivado
    },
  },
    computed:{
        ...mapState(
            [
                'Unidad_ID'
            ]
        )
    }

}
</script>

<style lang="scss" scoped>
.adjust{
  margin-left: 3em;
}
.titleAdjust{
  margin-left: 6em;
}
.titleAdjustExtend{
  margin-left: 8em;

}
.titleProduct{
  width: 13em;
  color: white;
  font-size: 0.8em;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.header{
  background: black;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  position: sticky;
  top:0;
  z-index: 2;
  &__btn--return{
    padding-left: 1em;
    width: 2.2em;
    height: 2.2em;
  }
  &__logo{
    display: flex;
    align-items: center;
    width: 15%;
  }
  &__btn--menu{
    width: 2.5em;
    padding-right: 1em;
    align-items: center;
  }
}

.buttons-container{
  display: flex;
  .footer__button__btn{
    color: white;
    .user-count{
      padding-right: 0.2em;
      width: 1.5rem;
      height: 1.5rem;      
    }
    .cart{
      fill: rgb(255, 255, 255);
      margin-right: 0.4em;
      width: 1.5rem;
        height: 1.2rem;
    }
  }
}

@media (min-width: 700px) {
  .header{
    height: 13vh;
    &__regresar{
      margin-top: 0.5em;
      width: 2.6em;
      height: 2.4em;
    }
  }
}
</style>

