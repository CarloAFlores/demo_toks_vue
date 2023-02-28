<template>
  <section class="header">
    <button class="header__btn--return header__regresar"  @click="$router.go(-1)">
      <img src="@/assets/atras.svg" alt="boton-regresar">
    </button>

    <div class="header__logo" v-if="currentPage < 2">
      <img src="@/assets/toks-logo.svg" alt="Logo de la marca">
    </div>

    <div class="header__logo adjust" v-if="currentPage > 1">
      <img src="@/assets/toks-logo.svg" alt="Logo de la marca">
    </div>

    <button v-if="currentPage < 2" class="header__btn--menu menu">
      <img src="@/assets/menu_hamburguesa.svg" alt="menu-hamburguesa">
    </button>

    <div v-if="currentPage > 1" class="buttons-container">
      <button class="footer__button__btn">
            <img src="@/assets/cuenta-usuario.svg" class="user-count">
      </button>
      <button class="footer__button__btn">
            <img src="@/assets/cart.svg" class="cart">
      </button>
      <button class="header__btn--menu menu">
      <img src="@/assets/menu_hamburguesa.svg" alt="menu-hamburguesa">
    </button>
    </div>

  </section>
</template>

<script>
export default {
  props:{
    currentPage:{
      type: Number,
      required: true
    },
  }

}
</script>

<style lang="scss" scoped>
.adjust{
  margin-left: 3em;
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

