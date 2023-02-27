<template>
  <section class="footer">
    <div class="footer__button">
        <button class="footer__button__btn">
            <img src="@/assets/home-icon.svg" class="btn">
            <p class="selected">Inicio</p>
        </button>
        <button class="footer__button__btn">
            <img src="@/assets/asistencia.svg" class="btn">
            <p>Asistencia</p>
        </button>
        <button class="footer__button__btn">
            <img src="@/assets/persona.svg" class="btn">
            <p>Personas</p>
        </button>
        <button class="footer__button__btn">
            <img src="@/assets/cuenta-usuario.svg" class="btn">
            <p>Cuenta</p>
        </button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
  background: white;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: .5rem 0;
  position: sticky;
  bottom:0;
  z-index: 2;
  font-size: 0.625em;
  border-top: #c8c8c8 1px solid;
  &__button{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    &__btn{
        color: #9A9A9A;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .btn{
        width: 1rem;
        height: 1rem;
    }
    .selected{
      color: black;
    }
  }
  }
</style>