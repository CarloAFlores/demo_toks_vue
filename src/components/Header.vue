<template>
  <section class="header">
    <button class="header__btn--return header__regresar">
      <img src="@/assets/atras.svg" alt="boton-regresar">
    </button>

    <div class="header__logo">
      <img src="@/assets/toks-logo.svg" alt="Logo de la marca">
    </div>

    <button class="header__btn--menu menu">
      <img src="@/assets/menu_hamburguesa.svg" alt="menu-hamburguesa">
    </button>

  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header{
  background: black;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  position: sticky;
  top:0;
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

@media (min-width: 700px) {
  .header{
    &__regresar{
      margin-top: 0.5em;
      width: 2.6em;
      height: 2.6em;
    }
  }
}
</style>

